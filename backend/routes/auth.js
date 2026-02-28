import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import axios from 'axios';

const getGoogleTransporter = async () => {
    // Priority: App password (no expiration)
    if (process.env.GOOGLE_APP_PASSWORD) {
        return nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GOOGLE_EMAIL || "rexbiswas1@gmail.com",
                pass: process.env.GOOGLE_APP_PASSWORD
            }
        });
    }

    if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET || !process.env.GOOGLE_REFRESH_TOKEN) {
        throw new Error("Missing Google API setup credentials.");
    }
    const OAuth2 = google.auth.OAuth2;
    const oauth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "https://developers.google.com/oauthplayground");
    oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
    const accessTokenResponse = await oauth2Client.getAccessToken();

    if (!accessTokenResponse?.token) throw new Error("Could not retrieve access token");

    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.GOOGLE_EMAIL || "rexbiswas1@gmail.com",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
            accessToken: accessTokenResponse.token
        }
    });
};

// Register User
router.post('/register', async (req, res) => {
    try {
        const {
            username, email, password, firstName, lastName, phone, dob, country,
            street1, street2, city, state, pinCode,
            centre, level, stream, scholarship,
            comments, communications
        } = req.body;

        const existingUser = await User.findOne({
            $or: [{ email: email }, { username: username }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with this email or username already exists." });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            phone,
            dob,
            country,
            address: { street1, street2, city, state, pinCode },
            academic: { centre, level, stream, scholarship },
            comments,
            communications
        });

        await newUser.save();

        if (communications && communications.email) {
            try {
                const transporter = await getGoogleTransporter();

                await transporter.sendMail({
                    from: `"INSD Admissions" <${process.env.GOOGLE_EMAIL || 'admissions@insd.edu.in'}>`,
                    to: email,
                    subject: "Welcome to the INSD Legacy!",
                    html: `<h2>Welcome, ${firstName}!</h2>
                           <p>Your application profile has been successfully submitted and created in our system.</p>
                           <p>We are currently reviewing your profile for the <strong>${level || ''} in ${stream || 'Design'}</strong> program.</p>
                           <p>Your login clearance is officially active. You can now access your Student Portal dashboard.</p>
                           <br/><p>- The INSD Admissions Team</p>`
                });

                console.log("Real Welcome Email Sent to:", email);
            } catch (mailErr) {
                console.error("Welcome Email Sending Failed (User still registered):", mailErr);
            }

            return res.status(201).json({ message: "User registered successfully!" });
        }

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        res.status(500).json({ message: "Server error: " + err.message });
    }
});

// Login User
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: "10d" }
        );

        const { password: _, ...userInfo } = user._doc;
        res.status(200).json({ ...userInfo, token });
    } catch (err) {
        res.status(500).json({ error: "Server error during login." });
    }
});

// Send Test Email in Real-Time via Google OAuth2
router.post('/send-test-email', async (req, res) => {
    try {
        const { email, firstName } = req.body;
        if (!email) return res.status(400).json({ message: "Email required" });

        const transporter = await getGoogleTransporter();

        await transporter.sendMail({
            from: `"INSD Admissions" <${process.env.GOOGLE_EMAIL || 'admissions@insd.edu.in'}>`,
            to: email,
            subject: "Welcome to INSD! Verification delivered",
            html: `<h2>Hello ${firstName || 'Future Designer'},</h2>
                   <p>You have explicitly opted-in to receive Email Communications from INSD.</p>
                   <p>We are thrilled to welcome you to our creative network!</p><br/>
                   <p>Enjoy your real-time notification.</p>`,
        });

        console.log("Real OAuth2 Message sent successfully to", email);

        res.status(200).json({
            message: "Email sent successfully in real time!"
        });

    } catch (err) {
        console.error("Email API Failed:", err);
        res.status(500).json({ message: "Server error sending email." });
    }
});

// Send Test SMS using Fast2SMS Gateway
router.post('/send-test-sms', async (req, res) => {
    try {
        const { phone, firstName } = req.body;
        if (!phone) return res.status(400).json({ message: "Phone required" });

        const API_KEY = process.env.FAST2SMS_API_KEY;

        if (!API_KEY) {
            console.log(`\n[DEV MODE - FAST2SMS_API_KEY Missing in .env]`);
            console.log(`From INSD institute`);
            console.log(`To: ${phone}`);
            console.log(`Message: Hello ${firstName || 'Future Designer'}, welcome to the INSD network! Your SMS notifications are active.`);
            console.log(`============================\n`);
            
            return res.status(200).json({ 
                message: "SMS logged in console! To get real SMS, add FAST2SMS_API_KEY to your backend .env" 
            });
        }

        // Fast2SMS Axios API Call
        const response = await axios({
            method: 'POST',
            url: 'https://www.fast2sms.com/dev/bulkV2',
            headers: {
                "authorization": API_KEY,
                "Content-Type": "application/json"
            },
            data: {
                // Option A: DLT Premium Route (INSDIN Sender Name)
                // Automatically switches to verified INSDIN header when FAST2SMS_TEMPLATE_ID is added to .env
                route: process.env.FAST2SMS_TEMPLATE_ID ? "dlt" : "q", 
                
                // If DLT is active, use the INSDIN Sender ID and pass the user's name as a dynamic variable
                ...(process.env.FAST2SMS_TEMPLATE_ID && { 
                    sender_id: "INSDIN", 
                    variables_values: firstName || 'Future Designer' 
                }),
                
                // If DLT is active, use the Template ID. If not, use the fallback text.
                message: process.env.FAST2SMS_TEMPLATE_ID 
                    ? process.env.FAST2SMS_TEMPLATE_ID 
                    : `Hello ${firstName || 'Future Designer'}, You have explicitly opted-in to receive Email Communications from INSD. We are thrilled to welcome you to our creative network! Enjoy your real-time notification.\n\nFrom INSD (+91 7701933935)`,
                
                language: "english",
                flash: 0,
                numbers: phone.replace(/[^0-9]/g, '').slice(-10), // Send to user's phone from frontend form
            }
        });

        console.log("Real SMS successfully sent via Fast2SMS to:", phone);
        res.status(200).json({ 
            message: "SMS successfully sent in real time via Fast2SMS!" 
        });

    } catch (err) {
        console.error("SMS API Failed:", err?.response?.data || err.message);
        res.status(500).json({ message: "Server error sending SMS. API failed." });
    }
});

// Mock In-Memory Store for Password Reset Tokens (In production, use Redis or DB fields)
const resetTokens = new Map();

// Generate Password Reset Token & Email it
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "No account found with this email." });

        // Generate 6 digit code
        const resetToken = Math.floor(100000 + Math.random() * 900000).toString();
        resetTokens.set(email, { token: resetToken, expires: Date.now() + 15 * 60 * 1000 }); // 15 mins

        const transporter = await getGoogleTransporter();

        await transporter.sendMail({
            from: `"INSD Security" <${process.env.GOOGLE_EMAIL || 'security@insd.edu.in'}>`,
            to: email,
            subject: "Your Password Reset Code",
            html: `<h2>Password Reset Request</h2><p>Your 6-digit verification code is: <strong>${resetToken}</strong></p><p>This code will expire in 15 minutes.</p>`
        });

        console.log("Password Reset Sent!");
        res.status(200).json({ message: "Password reset code sent to your email!" });

    } catch (err) {
        console.error("Reset Email Error:", err);
        res.status(500).json({ message: "Server error sending reset code: " + err.message });
    }
});

// Verify Token and Update Password
router.post('/reset-password', async (req, res) => {
    try {
        const { email, code, newPassword } = req.body;

        const record = resetTokens.get(email);
        if (!record) return res.status(400).json({ message: "Invalid or expired request. Please try again." });
        if (Date.now() > record.expires) {
            resetTokens.delete(email);
            return res.status(400).json({ message: "Code has expired. Please request a new one." });
        }
        if (record.token !== code) return res.status(400).json({ message: "Incorrect verification code." });

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found." });

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        // Clear token upon success
        resetTokens.delete(email);

        res.status(200).json({ message: "Password updated successfully! You can now login." });
    } catch (err) {
        res.status(500).json({ message: "Server error resetting password." });
    }
});

export default router;
