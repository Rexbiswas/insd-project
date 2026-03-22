import express from 'express';
import StepLead from '../models/StepLead.js';

const router = express.Router();

// @route   POST /api/step-leads
// @desc    Submit a new multi-step lead
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, mobile, email, city, readyToStart, inquiryType, marketingConsent } = req.body;
        console.log(`[StepLead] Processing submission for: ${name}`);

        const newLead = new StepLead({
            name,
            mobile,
            email,
            city,
            readyToStart,
            inquiryType,
            marketingConsent
        });

        const savedLead = await newLead.save();

        // Send notifications if consent was given
        if (marketingConsent) {
            const { sendSMS, sendWelcomeEmail, sendWhatsApp } = await import('../utils/notifications.js');
            console.log(`[Marketing Consent] StepLead ${name} opted in. Processing notifications...`);
            
            Promise.allSettled([
                sendWelcomeEmail(email, name, "Career Roadmap"),
                sendSMS(mobile, name)
                // WhatsApp disabled as per UI change
                // sendWhatsApp(mobile, name)
            ]).then(() => {
                console.log(`[Notifications] Processed for ${name}`);
            });
        }

        res.status(201).json({ success: true, lead: savedLead });
    } catch (err) {
        console.error('StepLead Error:', err.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

export default router;
