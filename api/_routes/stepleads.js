import express from 'express';
import mongoose from 'mongoose';
import StepLead from '../_models/StepLead.js';
import { sendSMS, sendWelcomeEmail, sendAdminLeadEmail, pushToNPF } from '../_utils/notifications.js';
import { backupOfflineData } from '../_utils/offlineLogger.js';
import { validateStepLead } from '../_middleware/validate.js';

const router = express.Router();

// @route   POST /api/step-leads
// @desc    Submit a new multi-step lead
// @access  Public
router.post('/', validateStepLead, async (req, res) => {
    console.log('\n📩 [StepLead] New Request:', req.body);

    try {
        const {
            name,
            mobile,
            phone,
            email,
            city,
            state,
            qualification,
            industry,
            course,
            readyToStart,
            inquiryType,
            marketingConsent
        } = req.body;

        const mobileNumber = mobile || phone;

        // Required fields
        if (
            !name ||
            !email ||
            !mobileNumber ||
            !city ||
            !state ||
            !qualification ||
            !industry
        ) {
            return res.status(400).json({
                success: false,
                message: 'Required fields are missing'
            });
        }

        // Clean phone number
        const cleanedMobile = String(mobileNumber)
            .replace(/\D/g, '')
            .slice(-10);

        if (cleanedMobile.length !== 10) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid 10-digit mobile number'
            });
        }

        // Duplicate check
        if (mongoose.connection.readyState === 1) {
            const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);

            const duplicate = await StepLead.findOne({
                email: email.trim().toLowerCase(),
                createdAt: { $gte: fiveMinutesAgo }
            });

            if (duplicate) {
                return res.status(409).json({
                    success: false,
                    message: 'You have already submitted an inquiry recently. Please wait 5 minutes.'
                });
            }
        }

        const newLead = new StepLead({
            name: name.trim(),
            mobile: mobileNumber,
            phone: mobileNumber,
            email: email.trim().toLowerCase(),
            city: city.trim(),
            state: state || '',
            qualification: qualification || '',
            industry: industry || course || '',
            course: course || industry || '',
            readyToStart: readyToStart || 'yes',
            inquiryType: inquiryType || industry || course || 'Career Guidance Inquiry',
            marketingConsent: Boolean(marketingConsent)
        });

        let savedLead = null;
        let isRealDBSave = false;

        try {
            if (mongoose.connection.readyState === 1) {
                savedLead = await Promise.race([
                    newLead.save(),
                    new Promise((_, reject) =>
                        setTimeout(
                            () => reject(new Error('Database Save Timeout')),
                            5000
                        )
                    )
                ]);

                console.log(`✅ [StepLead] DB Success: ${name}`);
                isRealDBSave = true;
            } else {
                throw new Error('Database not connected');
            }
        } catch (dbErr) {
            console.warn(
                '⚠️ [StepLead] DB Offline. Buffering locally:',
                dbErr.message
            );
            savedLead = newLead;
        }

        // Offline backup
        try {
            backupOfflineData('stepleads', req.body);
        } catch (backupErr) {
            console.error('Backup error:', backupErr.message);
        }

        // Notifications
        Promise.allSettled([
            sendWelcomeEmail(
                email,
                name,
                course || industry || 'Career Roadmap'
            ),
            sendSMS(
                cleanedMobile,
                name
            ),
            sendAdminLeadEmail(
                'insd.admissionleads@gmail.com',
                {
                    ...req.body,
                    phone: mobileNumber
                },
                'Step Lead Inquiry'
            ),
            pushToNPF({
                ...req.body,
                phone: mobileNumber
            })
        ]).catch(err => console.error('[StepLead Notifications Error]', err.message));

        return res.status(201).json({
            success: true,
            message: isRealDBSave
                ? 'Lead saved successfully'
                : 'Lead stored in offline buffer',
            lead: savedLead
        });

    } catch (err) {
        console.error('❌ [StepLead] Fatal Error:', err);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error:
                process.env.NODE_ENV === 'development'
                    ? err.message
                    : undefined
        });
    }
});

export default router;
