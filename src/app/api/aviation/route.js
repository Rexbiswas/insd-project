import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import AviationLead from '../../../../api/_models/AviationLead.js';
import { sendSMS, sendWelcomeEmail, sendAdminLeadEmail, pushToNPF } from '../../../../api/_utils/notifications.js';
import { backupOfflineData } from '../../../../api/_utils/offlineLogger.js';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, mobile, state, city, program, course, marketingConsent } = body;

        if (!name || !email || (!phone && !mobile)) {
            return NextResponse.json({ success: false, message: 'Please enter Name, Email, and Phone number' }, { status: 400 });
        }

        const rawPhone = phone || mobile || '';
        const cleanedPhone = rawPhone.replace(/\D/g, '').slice(-10);

        let isRealDBSave = false;
        let savedLead = null;

        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                const newLead = new AviationLead({
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    phone: `+91${cleanedPhone}`,
                    state: state || '',
                    city: city || '',
                    program: program || 'Aviation & Hospitality',
                    course: course || 'Aviation Management',
                    marketingConsent: Boolean(marketingConsent)
                });

                savedLead = await Promise.race([
                    newLead.save(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Database Save Timeout')), 5000))
                ]);
                isRealDBSave = true;
            }
        } catch (dbErr) {
            console.warn(`⚠️ [Next.js API Aviation] DB offline/timeout: ${dbErr.message}`);
        }

        try {
            backupOfflineData('aviation', { ...body, phone: `+91${cleanedPhone}` });
        } catch (e) {}

        Promise.allSettled([
            sendWelcomeEmail(email, name, course || "Aviation & Hospitality"),
            sendSMS(cleanedPhone, name),
            sendAdminLeadEmail('insd.admissionleads@gmail.com', { ...body, phone: `+91${cleanedPhone}` }, 'Aviation Program Inquiry'),
            pushToNPF({ ...body, phone: `+91${cleanedPhone}` })
        ]).catch(err => console.error('[Aviation Notifications Error]', err.message));

        return NextResponse.json({
            success: true,
            message: isRealDBSave ? 'Aviation inquiry saved successfully!' : 'Inquiry stored offline',
            lead: savedLead
        }, { status: 201 });

    } catch (error) {
        console.error('❌ [Next.js API Aviation] Error:', error);
        return NextResponse.json({ success: false, message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
