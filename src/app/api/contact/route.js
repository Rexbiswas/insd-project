import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import ContactLead from '../../../../api/_models/ContactLead.js';
import { sendSMS, sendWelcomeEmail, sendAdminLeadEmail } from '../../../../api/_utils/notifications.js';
import { backupOfflineData } from '../../../../api/_utils/offlineLogger.js';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !phone || !message) {
            return NextResponse.json({ success: false, message: 'Please fill in all required fields' }, { status: 400 });
        }

        const cleanedPhone = phone.replace(/\D/g, '').slice(-10);

        let isRealDBSave = false;
        let savedLead = null;

        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                const newLead = new ContactLead({
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    phone: `+91${cleanedPhone}`,
                    subject: subject || 'General Inquiry',
                    message: message.trim()
                });

                savedLead = await Promise.race([
                    newLead.save(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Database Save Timeout')), 5000))
                ]);
                isRealDBSave = true;
            }
        } catch (dbErr) {
            console.warn(`⚠️ [Next.js API Contact] DB offline/timeout: ${dbErr.message}`);
        }

        try {
            backupOfflineData('contacts', { ...body, phone: `+91${cleanedPhone}` });
        } catch (e) {}

        Promise.allSettled([
            sendWelcomeEmail(email, name, "Contact Us Inquiry"),
            sendSMS(cleanedPhone, name),
            sendAdminLeadEmail('insd.admissionleads@gmail.com', body, 'New Contact Form Submission')
        ]).catch(err => console.error('[Contact Notifications Error]', err.message));

        return NextResponse.json({
            success: true,
            message: isRealDBSave ? 'Message sent successfully!' : 'Message stored offline',
            lead: savedLead
        }, { status: 201 });

    } catch (error) {
        console.error('❌ [Next.js API Contact] Error:', error);
        return NextResponse.json({ success: false, message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
