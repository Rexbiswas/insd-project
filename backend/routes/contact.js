import express from 'express';
import ContactLead from '../models/ContactLead.js';
import { sendSMS, sendWelcomeEmail } from '../utils/notifications.js';

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        const newLead = new ContactLead({
            name,
            email,
            phone,
            subject,
            message
        });

        const lead = await newLead.save();

        // Send notifications
        Promise.allSettled([
            sendWelcomeEmail(email, name, subject || 'General Inquiry'),
            sendSMS(phone || '', name)
        ]).catch(err => console.error('[Contact Notification Error]', err.message));

        res.status(201).json({ 
            success: true, 
            message: 'Your message has been sent successfully!', 
            data: lead 
        });
    } catch (err) {
        console.error('Contact Submission Error:', err.message);
        res.status(500).json({ 
            success: false, 
            message: 'Server Error', 
            error: err.message 
        });
    }
});

export default router;
