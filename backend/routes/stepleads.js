import express from 'express';
import StepLead from '../models/StepLead.js';

const router = express.Router();

// @route   POST /api/step-leads
// @desc    Submit a new multi-step lead
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, mobile, city, readyToStart, inquiryType } = req.body;

        const newLead = new StepLead({
            name,
            mobile,
            city,
            readyToStart,
            inquiryType
        });

        const savedLead = await newLead.save();
        res.status(201).json({ success: true, lead: savedLead });
    } catch (err) {
        console.error('StepLead Error:', err.message);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
});

export default router;
