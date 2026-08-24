import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import PartnerLead from '../../../../../api/_models/PartnerLead.js';
import { sendSMS, sendWelcomeEmail, sendAdminLeadEmail } from '../../../../../api/_utils/notifications.js';
import { backupOfflineData } from '../../../../../api/_utils/offlineLogger.js';

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, phone, city, state, investmentBudget, proposedLocation, experience, message } = body;

        if (!name || !email || !phone) {
            return NextResponse.json({ success: false, message: 'Name, email, and phone are required' }, { status: 400 });
        }

        const cleanedPhone = phone.replace(/\D/g, '').slice(-10);

        let isRealDBSave = false;
        let savedLead = null;

        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                const newLead = new PartnerLead({
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    phone: `+91${cleanedPhone}`,
                    city: city || '',
                    state: state || '',
                    investmentBudget: investmentBudget || '',
                    proposedLocation: proposedLocation || '',
                    experience: experience || '',
                    message: message || ''
                });

                savedLead = await Promise.race([
                    newLead.save(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Database Save Timeout')), 5000))
                ]);
                isRealDBSave = true;
            }
        } catch (dbErr) {
            console.warn(`⚠️ [Next.js API Partner] DB offline/timeout: ${dbErr.message}`);
        }

        try {
            backupOfflineData('partner', { ...body, phone: `+91${cleanedPhone}` });
        } catch (e) {}

        Promise.allSettled([
            sendWelcomeEmail(email, name, "INSD Franchise Partnership"),
            sendSMS(cleanedPhone, name),
            sendAdminLeadEmail('insd.admissionleads@gmail.com', { ...body, phone: `+91${cleanedPhone}` }, 'Franchise Partner Inquiry')
        ]).catch(err => console.error('[Partner Notifications Error]', err.message));

        return NextResponse.json({
            success: true,
            message: isRealDBSave ? 'Franchise inquiry submitted successfully!' : 'Inquiry stored offline',
            lead: savedLead
        }, { status: 201 });

    } catch (error) {
        console.error('❌ [Next.js API Partner] Error:', error);
        return NextResponse.json({ success: false, message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
