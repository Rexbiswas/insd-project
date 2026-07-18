import express from 'express';
import mongoose from 'mongoose';
import ParisLead from '../_models/ParisLead.js';
import { sendWelcomeEmail, sendSMS, sendAdminLeadEmail, pushToNPF } from '../_utils/notifications.js';
import { backupOfflineData } from '../_utils/offlineLogger.js';
import { validateParis } from '../_middleware/validate.js';

const router = express.Router();

router.post('/lead', validateParis, async (req, res) => {
    console.log(`\n📩 [Paris] New Request: ${req.body.name}`);
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        // Clean and Validate Phone (Slice last 10 to ignore +91)
        const cleanedPhone = (phone || '').replace(/\D/g, '').slice(-10);
        if (cleanedPhone.length !== 10) {
            return res.status(400).json({ success: false, message: 'Please enter a valid 10-digit mobile number' });
        }

        // 5-Minute Cooldown Check (Throttle to prevent replay spamming)
        if (mongoose.connection.readyState === 1) {
            const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
            const duplicate = await ParisLead.findOne({ email, createdAt: { $gte: fiveMinutesAgo } });
            if (duplicate) {
                return res.status(409).json({ success: false, message: 'You have already submitted an inquiry recently. Please wait 5 minutes.' });
            }
        }

        const newLead = new ParisLead({ name, email, phone: cleanedPhone });

        let savedLead = null;
        let isRealDBSave = false;

        // --- TRIPLE REDUNDANCY SAVING ---
        try {
            if (mongoose.connection.readyState === 1) {
                savedLead = await newLead.save();
                console.log(`✅ [Paris] DB Success: ${name}`);
                isRealDBSave = true;
            } else {
                throw new Error('Database not connected');
            }
        } catch (dbErr) {
            console.warn(`⚠️ [Paris] DB Offline. Buffering locally.`);
            savedLead = newLead;
        }

        // Backup data locally (Fail-Safe)
        backupOfflineData('paris', req.body);

        // Send notifications
        Promise.allSettled([
            sendWelcomeEmail(email, name, 'The Paris Project'),
            sendSMS(phone, name),
            sendAdminLeadEmail('insd.admissionleads@gmail.com', req.body, 'Paris Project Inquiry'),
            pushToNPF(req.body)
        ]).catch(err => console.error('[Paris Notifications] Error:', err.message));

        res.status(201).json({
            success: true,
            message: isRealDBSave ? 'Application received successfully' : 'Application received (Stored in Offline Buffer)',
            lead: savedLead
        });

    } catch (err) {
        console.error('❌ [Paris] Fatal Error:', err.message);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
    }
});

export default router;
