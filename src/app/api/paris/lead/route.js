import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import ParisLead from '../../../../../api/_models/ParisLead.js';
import { sendSMS, sendWelcomeEmail, sendAdminLeadEmail } from '../../../../../api/_utils/notifications.js';
import { backupOfflineData } from '../../../../../api/_utils/offlineLogger.js';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, city, background, travelDate, marketingConsent } = body;

        if (!name || !email || !phone) {
            return NextResponse.json({ success: false, message: 'Name, email, and phone are required' }, { status: 400 });
        }

        const cleanedPhone = phone.replace(/\D/g, '').slice(-10);

        let isRealDBSave = false;
        let savedLead = null;

        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                const newLead = new ParisLead({
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    phone: `+91${cleanedPhone}`,
                    city: city || 'Not specified',
                    background: background || '',
                    travelDate: travelDate || '',
                    marketingConsent: Boolean(marketingConsent)
                });

                savedLead = await Promise.race([
                    newLead.save(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Database Save Timeout')), 5000))
                ]);
                isRealDBSave = true;
            }
        } catch (dbErr) {
            console.warn(`⚠️ [Next.js API Paris] DB offline/timeout: ${dbErr.message}`);
        }

        try {
            backupOfflineData('paris', { ...body, phone: `+91${cleanedPhone}` });
        } catch (e) {}

        Promise.allSettled([
            sendWelcomeEmail(email, name, "Paris CDP International Workshop"),
            sendSMS(cleanedPhone, name),
            sendAdminLeadEmail('insd.admissionleads@gmail.com', { ...body, phone: `+91${cleanedPhone}` }, 'Paris Project Inquiry')
        ]).catch(err => console.error('[Paris Notifications Error]', err.message));

        return NextResponse.json({
            success: true,
            message: isRealDBSave ? 'Paris application submitted successfully!' : 'Application stored offline',
            lead: savedLead
        }, { status: 201 });

    } catch (error) {
        console.error('❌ [Next.js API Paris] Error:', error);
        return NextResponse.json({ success: false, message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
