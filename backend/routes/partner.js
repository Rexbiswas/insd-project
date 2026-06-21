import express from 'express';
import mongoose from 'mongoose';
import PartnerLead from '../models/PartnerLead.js';
import { sendSMS, sendWelcomeEmail, sendAdminLeadEmail, pushToNPF } from '../utils/notifications.js';
import { validatePartner } from '../middleware/validate.js';

const router = express.Router();


router.post('/leads', validatePartner, async (req, res) => {
    try {
        const { 
            name, email, mobile, phone, investment, preference, state, city, 
            referred, company, industry, potential, message, contact, address 
        } = req.body;

        // Clean and Validate Phone (Slice last 10 to ignore +91)
        const cleanedMobile = (mobile || phone || contact || '').replace(/\D/g, '').slice(-10);
        if (cleanedMobile.length !== 10) {
            return res.status(400).json({ success: false, message: 'Please enter a valid 10-digit mobile number' });
        }

        // 5-Minute Cooldown Check (Throttle to prevent replay spamming)
        if (mongoose.connection.readyState === 1) {
            const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
            const duplicate = await PartnerLead.findOne({ email, createdAt: { $gte: fiveMinutesAgo } });
            if (duplicate) {
                return res.status(409).json({ success: false, message: 'You have already submitted an inquiry recently. Please wait 5 minutes.' });
            }
        }

        const newLead = new PartnerLead({
            name,
            email,
            mobile: mobile || phone || contact,
            investment,
            preference,
            state,
            city,
            referred,
            company,
            industry,
            potential,
            message,
            contact: contact || mobile || phone,
            address,
        });

        const lead = await newLead.save();

        // Backup data locally (Fail-Safe)
        import('../utils/offlineLogger.js').then(m => m.backupOfflineData('partner', req.body));

        // Send notifications
        Promise.allSettled([
            sendWelcomeEmail(email, name, 'Franchise/Partnership'),
            sendSMS(mobile || phone || contact || '', name),
            sendAdminLeadEmail('insd.franchiseleads@gmail.com', req.body, 'Franchise Inquiry'),
            pushToNPF(req.body)
        ]).catch(err => console.error('[Partner Notification Error]', err.message));

        res.json({ success: true, message: 'Partner inquiry submitted successfully!', data: lead });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
