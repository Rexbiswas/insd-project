import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import StepLead from '../../../../api/_models/StepLead.js';
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
            readyToStart,
            inquiryType,
            qualification,
            industry,
            course,
            marketingConsent
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
                const duplicate = await StepLead.findOne({ email: email.trim().toLowerCase(), createdAt: { $gte: fiveMinutesAgo } });
                if (duplicate) {
                    return NextResponse.json({
                        success: false,
                        message: 'You have already submitted an inquiry recently. Please wait 5 minutes.'
                    }, { status: 409 });
                }

                const newLead = new StepLead({
                    name: name.trim(),
                    email: email.trim().toLowerCase(),
                    phone: `+91${cleanedPhone}`,
                    mobile: `+91${cleanedPhone}`,
                    state: state || '',
                    city: city || 'Not specified',
                    readyToStart: readyToStart || 'yes',
                    inquiryType: inquiryType || industry || course || 'Direct Career Guidance',
                    qualification: qualification || '',
                    industry: industry || course || '',
                    course: course || industry || '',
                    marketingConsent: Boolean(marketingConsent)
                });

                savedLead = await Promise.race([
                    newLead.save(),
                    new Promise((_, reject) => setTimeout(() => reject(new Error('Database Save Timeout')), 5000))
                ]);
                isRealDBSave = true;
                console.log(`✅ [Next.js API StepLead] Lead saved to MongoDB: ${name}`);
            }
        } catch (dbErr) {
            console.warn(`⚠️ [Next.js API StepLead] DB offline/timeout: ${dbErr.message}`);
        }

        // Backup offline
        try {
            backupOfflineData('stepleads', {
                ...body,
                phone: `+91${cleanedPhone}`,
                mobile: `+91${cleanedPhone}`
            });
        } catch (backupErr) {
            console.warn('Backup error:', backupErr.message);
        }

        // Async notifications
        Promise.allSettled([
            sendWelcomeEmail(email, name, course || industry || 'Design Career Roadmap'),
            sendSMS(cleanedPhone, name),
            sendAdminLeadEmail('insd.admissionleads@gmail.com', {
                ...body,
                phone: `+91${cleanedPhone}`,
                mobile: `+91${cleanedPhone}`
            }, 'Step Lead Inquiry'),
            pushToNPF({
                ...body,
                phone: `+91${cleanedPhone}`,
                mobile: `+91${cleanedPhone}`
            })
        ]).catch(err => console.error('[StepLead Notifications Error]', err.message));

        return NextResponse.json({
            success: true,
            message: isRealDBSave ? 'Lead saved successfully' : 'Lead stored in offline buffer',
            lead: savedLead
        }, { status: 201 });

    } catch (error) {
        console.error('❌ [Next.js API StepLead] Error:', error);
        return NextResponse.json({
            success: false,
            message: error.message || 'Internal Server Error'
        }, { status: 500 });
    }
}
