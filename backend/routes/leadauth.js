import express from 'express';
const router = express.Router();
import Lead from '../models/Lead.js';
import { getGoogleTransporter } from '../utils/email.js';

router.post('/submit', async (req, res) => {
    try {
        const { fullName, email, phone, city, industry, qualification, readyToStart } = req.body;

        const newLead = new Lead({
            fullName,
            email,
            phone,
            city,
            industry,
            qualification,
            readyToStart
        });

        await newLead.save();

        // Send Email to User
        try {
            const transporter = await getGoogleTransporter();
            await transporter.sendMail({
                from: `"INSD Admissions" <${process.env.GOOGLE_EMAIL || 'admissions@insd.edu.in'}>`,
                to: email,
                subject: `Hi ${fullName}, thank you for filling this form`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #db3436;">Welcome to INSD!</h2>
                        <p>Hi <strong>${fullName}</strong>,</p>
                        <p>Thank you for your interest in the <strong>${industry}</strong> program at INSD - India's Skill School.</p>
                        <p>We have received your application and our career counsellors will contact you within 24 hours to discuss your creative journey.</p>
                        <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                        <p style="font-size: 12px; color: #666;">This is an automated confirmation of your lead submission.</p>
                        <p style="font-size: 14px; font-weight: bold;">- The INSD team</p>
                    </div>
                `
            });
            console.log("Success Email Sent to Lead:", email);
        } catch (mailErr) {
            console.error("Lead Email Sending Failed:", mailErr);
            // We still return 201 because the lead was saved successfully
        }

        res.status(201).json({ message: "Lead submitted successfully!", lead: newLead });
    } catch (err) {
        console.error("Lead Submission Error:", err);
        res.status(500).json({ message: "Server error: " + err.message });
    }
});

export default router;
