import express from 'express';
import mongoose from 'mongoose';
import ParisLead from '../models/ParisLead.js';
import { sendWelcomeEmail, sendSMS } from '../utils/notifications.js';

const router = express.Router();

router.post('/lead', async (req, res) => {
    try {
        const { name, email, phone } = req.body;

        if (!name || !email || !phone) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        const newLead = new ParisLead({ name, email, phone });

        let savedLead = null;
        const isDbConnected = mongoose.connection.readyState === 1;

        if (!isDbConnected) {
            console.warn(`[Paris Submission] DB not connected. Mocking for: ${name}`);
            savedLead = newLead;
        } else {
            try {
                savedLead = await newLead.save();
                console.log(`[Paris Submission] Saved for: ${name}`);
            } catch (dbErr) {
                console.error(`[Paris Submission Error] DB fail: ${dbErr.message}`);
                savedLead = newLead;
            }
        }

        // Send notifications (Optional but following project pattern)
        try {
            Promise.allSettled([
                sendWelcomeEmail(email, name, 'The Paris Project'),
                sendSMS(phone, name)
            ]).catch(err => console.error('[Paris Notification Error]', err.message));
        } catch (notifErr) {
            console.error('[Paris Notifications] Failed:', notifErr.message);
        }

        res.status(201).json({
            success: true,
            message: savedLead.id ? 'Application received successfully' : 'Application received (Dev Mode: DB offline)',
            lead: savedLead
        });

    } catch (err) {
        console.error('ParisLead Error:', err.message);
        res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
    }
});

export default router;
