import express from 'express';
const router = express.Router();
import PartnerLead from '../models/PartnerLead.js';

// @route   POST /api/partner/leads
// @desc    Submit a partner lead form
// @access  Public
router.post('/leads', async (req, res) => {
    try {
        const { name, email, company, industry, potential, message, contact, address } = req.body;

        const newLead = new PartnerLead({
            name,
            email,
            company,
            industry,
            potential,
            message,
            contact,
            address,
        });

        const lead = await newLead.save();

        res.json({ success: true, message: 'Partner inquiry submitted successfully!', data: lead });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

export default router;
