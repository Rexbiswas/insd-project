import express from 'express';
import AdmissionLead from '../models/AdmissionLead.js';

const router = express.Router();

// @route   POST /api/admission
// @desc    Submit a new admission inquiry from the multi-step form
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { readyToStart, industry, name, phone, email, city, qualification } = req.body;

        const newLead = new AdmissionLead({
            readyToStart,
            industry,
            name,
            phone,
            email,
            city,
            qualification
        });

        const savedLead = await newLead.save();
        res.status(201).json({ success: true, lead: savedLead });
    } catch (err) {
        console.error('AdmissionLead Submission Error:', err.message);
        res.status(500).json({ success: false, message: 'Server Error', error: err.message });
    }
});

export default router;
