import mongoose from 'mongoose';
import nodemailer from 'nodemailer';

// Admission Schema
const admissionSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    course: String,
    state: String,
    city: String,
    center: String,
    createdAt: { type: Date, default: Date.now }
});

const Admission = mongoose.models.Admission || mongoose.model('Admission', admissionSchema);

export default async function handler(req, res) {
    // Handle CORS
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    try {
        // Connect to DB
        if (mongoose.connection.readyState < 1) {
            await mongoose.connect(process.env.MONGO_URI);
        }

        // Save Lead
        const lead = new Admission(req.body);
        await lead.save();

        // Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GOOGLE_EMAIL,
                pass: process.env.GOOGLE_APP_PASSWORD
            }
        });

        await transporter.sendMail({
            from: process.env.GOOGLE_EMAIL,
            to: 'insd.admissionleads@gmail.com',
            subject: `[New Admission Lead] ${req.body.name}`,
            text: JSON.stringify(req.body, null, 2)
        });

        return res.status(200).json({ success: true, message: "Admission inquiry submitted successfully!" });
    } catch (err) {
        console.error("Admission Error:", err.message);
        return res.status(500).json({ success: false, message: err.message });
    }
}
