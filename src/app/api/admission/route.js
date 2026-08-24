import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import AdmissionLead from '../../../../api/_models/AdmissionLead.js';
import { sendSMS, sendWelcomeEmail, sendAdminLeadEmail, pushToNPF } from '../../../../api/_utils/notifications.js';
import { backupOfflineData } from '../../../../api/_utils/offlineLogger.js';

export async function POST(request) {
    try {
        const body = await request.json();
        const {
            name,
            email,
            phone,
            mobile,
            state,
            city,
            centre,
            program,
            course,
            referred,
            marketingConsent,
            readyToStart,
            industry,
            qualification
        } = body;

        // Basic validations
        if (!name || typeof name !== 'string' || name.trim().length < 2) {
            return NextResponse.json({ success: false, message: 'Please enter a valid Name' }, { status: 400 });
        }

        if (!email || typeof email !== 'string' || !email.includes('@')) {
            return NextResponse.json({ success: false, message: 'Please enter a valid Email address' }, { status: 400 });
        }

        const rawPhone = phone || mobile || '';
        const cleanedPhone = rawPhone.replace(/\D/g, '').slice(-10);
        if (cleanedPhone.length !== 10) {
            return NextResponse.json({ success: false, message: 'Please enter a valid 10-digit mobile number' }, { status: 400 });
        }

        let isRealDBSave = false;
        let savedLead = null;

        try {
            await connectDB();
            if (mongoose.connection.readyState === 1) {
                // 5-Minute Cooldown Check
                const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
                const duplicate = await AdmissionLead.findOne({ email: email.trim().toLowerCase(), createdAt: { $gte: fiveMinutesAgo } });
                if (duplicate) {
                    return NextResponse.json({
                        success: false,
                        message: 'You have already submitted an inquiry recently. Please wait 5 minutes.'
                    }, { status: 409 });
                }

                const newLead = new AdmissionLead({
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    phone: `+91${cleanedPhone}`,
                    state: state || '',
                    city: city || '',
                    centre: centre || '',
                    program: program || '',
                    course: course || industry || '',
                    referred: Boolean(referred),
                    marketingConsent: Boolean(marketingConsent),
                    readyToStart: readyToStart || '',
                    industry: industry || course || '',
                    qualification: qualification || ''
                });

                savedLead = await Promise.race([
                    newLead.save(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Database Save Timeout')), 5000))
                ]);
                isRealDBSave = true;
                console.log(`✅ [Next.js API Admission] Lead saved to MongoDB: ${name}`);
            }
        } catch (dbErr) {
            console.warn(`⚠️ [Next.js API Admission] DB offline/timeout: ${dbErr.message}`);
        }

        // Backup offline
        try {
            backupOfflineData('admission', {
                ...body,
                phone: `+91${cleanedPhone}`
            });
        } catch (backupErr) {
            console.warn('Backup error:', backupErr.message);
        }

        // Async notifications
        Promise.allSettled([
            sendWelcomeEmail(email, name, course || program || industry || 'Design Course'),
            sendSMS(cleanedPhone, name),
            sendAdminLeadEmail('insd.admissionleads@gmail.com', {
                ...body,
                phone: `+91${cleanedPhone}`
            }, 'Admission Inquiry'),
            pushToNPF({
                ...body,
                phone: `+91${cleanedPhone}`
            })
        ]).catch(err => console.error('[Admission Notifications Error]', err.message));

        return NextResponse.json({
            success: true,
            message: isRealDBSave ? 'Lead saved successfully' : 'Lead recorded in buffer',
            lead: savedLead
        }, { status: 201 });

    } catch (error) {
        console.error('❌ [Next.js API Admission] Error:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'Internal Server Error'
        }, { status: 500 });
    }
}
