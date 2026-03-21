import axios from 'axios';
import { getGoogleTransporter } from './email.js';

/**
 * Sends a welcome email to the lead
 */
export const sendWelcomeEmail = async (email, name, course) => {
    try {
        const transporter = await getGoogleTransporter();
        const mailOptions = {
            from: `"INSD Admissions" <${process.env.GOOGLE_EMAIL || 'admissions@insd.edu.in'}>`,
            to: email,
            subject: "Welcome to INSD - Inquiry Received!",
            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #db3436;">Hello ${name},</h2>
                    <p>Thank you for reaching out to **International School of Design (INSD)**!</p>
                    <p>We have received your inquiry for the <strong>${course}</strong> program. Our admissions team is currently reviewing your details and will get back to you within two business days.</p>
                    <p>In the meantime, feel free to explore our website or prepare some questions for our counselors.</p>
                    <br/>
                    <p>Best Regards,<br/><strong>The INSD Admissions Team</strong></p>
                </div>
            `
        };
        await transporter.sendMail(mailOptions);
        console.log(`[Email] Welcome email sent to ${email}`);
        return true;
    } catch (err) {
        console.error(`[Email Error] Failed to send email to ${email}:`, err.message);
        return false;
    }
};

/**
 * Sends an SMS via Fast2SMS
 */
export const sendSMS = async (phone, name) => {
    const API_KEY = process.env.FAST2SMS_API_KEY;
    const phoneNo = phone.replace(/[^0-9]/g, '').slice(-10);

    if (!API_KEY) {
        console.log(`\n[SMS MOCK] To: ${phoneNo}\nMessage: Hello ${name}, thank you for your inquiry at INSD. Our team will contact you soon.\n`);
        return true;
    }

    try {
        const payload = {
            route: process.env.FAST2SMS_TEMPLATE_ID ? "dlt" : "q",
            message: process.env.FAST2SMS_TEMPLATE_ID 
                ? process.env.FAST2SMS_TEMPLATE_ID 
                : `Hello ${name}, thank you for your inquiry at INSD. Our team will contact you soon. Stay creative!`,
            language: "english",
            flash: 0,
            numbers: phoneNo,
        };

        if (process.env.FAST2SMS_TEMPLATE_ID) {
            payload.sender_id = "INSDIN";
            payload.variables_values = name;
        }

        await axios({
            method: 'POST',
            url: 'https://www.fast2sms.com/dev/bulkV2',
            headers: { "authorization": API_KEY, "Content-Type": "application/json" },
            data: payload
        });
        console.log(`[SMS] Message sent to ${phoneNo}`);
        return true;
    } catch (err) {
        console.error(`[SMS Error] Failed to send SMS to ${phoneNo}:`, err?.response?.data || err.message);
        return false;
    }
};

/**
 * Sends a WhatsApp message via Fast2SMS
 */
export const sendWhatsApp = async (phone, name) => {
    const API_KEY = process.env.FAST2SMS_API_KEY;
    const phoneNo = phone.replace(/[^0-9]/g, '').slice(-10);

    // If we have specific WABA credentials, we'd use those. 
    // For now, we'll mock it if not configured, or use the Fast2SMS WhatsApp endpoint if available.
    if (!API_KEY || !process.env.WABA_PHONE_ID) {
        console.log(`\n[WhatsApp MOCK] To: ${phoneNo}\nMessage: Hello ${name}! 👋 Welcome to INSD. We've received your application. A counselor will reach out shortly.\n`);
        return true;
    }

    try {
        // Fast2SMS Send Template Message (Simple)
        const response = await axios({
            method: 'POST',
            url: `https://www.fast2sms.com/dev/whatsapp/v1/send`, // Example endpoint
            headers: { "authorization": API_KEY },
            data: {
                numbers: phoneNo,
                message_id: process.env.WHATSAPP_TEMPLATE_ID, // Required for templates
                phone_number_id: process.env.WABA_PHONE_ID,
                variables_values: name
            }
        });
        console.log(`[WhatsApp] Message sent to ${phoneNo}`);
        return true;
    } catch (err) {
        console.error(`[WhatsApp Error] Failed to send WhatsApp to ${phoneNo}:`, err?.response?.data || err.message);
        return false;
    }
};
