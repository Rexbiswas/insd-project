import express from 'express';
const router = express.Router();
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

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
            let emailPreviewURL = null;
            try {
                let transporter;
                let isUsingOAuth = false;
                
                try {
                    if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
                        const OAuth2 = google.auth.OAuth2;
                        const oauth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "https://developers.google.com/oauthplayground");
                        oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
                        const accessTokenResponse = await oauth2Client.getAccessToken();
                        
                        if (!accessTokenResponse?.token) throw new Error("Could not retrieve access token");

                        transporter = nodemailer.createTransport({
                            service: "gmail",
                            auth: { type: "OAuth2", user: process.env.GOOGLE_EMAIL || "rexbiswas1@gmail.com", clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET, refreshToken: process.env.GOOGLE_REFRESH_TOKEN, accessToken: accessTokenResponse.token }
                        });
                        isUsingOAuth = true;
                    } else {
                        throw new Error("Missing OAuth setup credentials.");
                    }
                } catch (oauthErr) {
                    console.log("OAuth failed or missing, using Ethereal fallback:", oauthErr.message);
                    let testAccount = await nodemailer.createTestAccount();
                    transporter = nodemailer.createTransport({ host: "smtp.ethereal.email", port: 587, secure: false, auth: { user: testAccount.user, pass: testAccount.pass } });
                    isUsingOAuth = false;
                }

                const info = await transporter.sendMail({
                    from: `"INSD Admissions" <${process.env.GOOGLE_EMAIL || 'admissions@insd.edu.in'}>`,
                    to: email,
                    subject: "Welcome to the INSD Legacy!",
                    html: `<h2>Welcome, ${firstName}!</h2>
                           <p>Your application profile has been successfully submitted and created in our system.</p>
                           <p>We are currently reviewing your profile for the <strong>${level || ''} in ${stream || 'Design'}</strong> program.</p>
                           <p>Your login clearance is officially active. You can now access your Student Portal dashboard.</p>
                           <br/><p>- The INSD Admissions Team</p>`
                });

                if (!isUsingOAuth) {
                    emailPreviewURL = nodemailer.getTestMessageUrl(info);
                    console.log("Welcome Mail (Mock) Preview URL: %s", emailPreviewURL);
                } else {
                    console.log("Real Welcome Email Sent to:", email);
                }
            } catch (mailErr) {
                console.error("Welcome Email Sending Failed (User still registered):", mailErr);
            }
            
            return res.status(201).json({ message: "User registered successfully!", previewURL: emailPreviewURL });
        }

        res.status(201).json({ message: "User registered successfully!", previewURL: null });
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

        let transporter;
        let isUsingOAuth = false;

        if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
            // OAuth2 Gmail Strategy
            const OAuth2 = google.auth.OAuth2;
            const oauth2Client = new OAuth2(
                process.env.GOOGLE_CLIENT_ID,
                process.env.GOOGLE_CLIENT_SECRET,
                "https://developers.google.com/oauthplayground" 
            );

            oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
            const accessTokenResponse = await oauth2Client.getAccessToken();
            const accessToken = accessTokenResponse?.token;

            if (!accessToken) throw new Error("Could not retrieve access token from Google.");

            transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: process.env.GOOGLE_EMAIL || "rexbiswas1@gmail.com",
                    clientId: process.env.GOOGLE_CLIENT_ID,
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                    refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
                    accessToken: accessToken
                }
            });
            isUsingOAuth = true;
        } else {
            // Fallback: Ethereal mock for instant testing without setup
            let testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass,
                },
            });
        }

        const info = await transporter.sendMail({
            from: `"INSD Admissions" <${process.env.GOOGLE_EMAIL || 'admissions@insd.edu.in'}>`,
            to: email,
            subject: "Welcome to INSD! Verification delivered",
            html: `<h2>Hello ${firstName || 'Future Designer'},</h2>
                   <p>You have explicitly opted-in to receive Email Communications from INSD.</p>
                   <p>We are thrilled to welcome you to our creative network!</p><br/>
                   <p>Enjoy your real-time notification.</p>`,
        });

        let previewURL = null;
        if (!isUsingOAuth) {
            previewURL = nodemailer.getTestMessageUrl(info);
            console.log("Mock Message sent! Preview URL: %s", previewURL);
        } else {
            console.log("Real OAuth2 Message sent successfully to", email);
        }

        res.status(200).json({ 
            message: "Email sent successfully in real time!", 
            previewURL: previewURL || null 
        });

    } catch (err) {
        console.error("Email API Failed:", err);
        res.status(500).json({ message: "Server error sending email." });
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

        let transporter;
        let isUsingOAuth = false;
        let emailPreviewURL = null;

        try {
            if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET && process.env.GOOGLE_REFRESH_TOKEN) {
                const OAuth2 = google.auth.OAuth2;
                const oauth2Client = new OAuth2(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, "https://developers.google.com/oauthplayground");
                oauth2Client.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
                const accessTokenResponse = await oauth2Client.getAccessToken();
                
                if (!accessTokenResponse?.token) throw new Error("Missing access token");

                transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: { type: "OAuth2", user: process.env.GOOGLE_EMAIL, clientId: process.env.GOOGLE_CLIENT_ID, clientSecret: process.env.GOOGLE_CLIENT_SECRET, refreshToken: process.env.GOOGLE_REFRESH_TOKEN, accessToken: accessTokenResponse.token }
                });
                isUsingOAuth = true;
            } else {
                throw new Error("No Google Credentials");
            }
        } catch (oauthErr) {
            console.log("OAuth failed for Password Reset, using Ethereal fallback:", oauthErr.message);
            let testAccount = await nodemailer.createTestAccount();
            transporter = nodemailer.createTransport({ host: "smtp.ethereal.email", port: 587, secure: false, auth: { user: testAccount.user, pass: testAccount.pass } });
        }

        const info = await transporter.sendMail({
            from: `"INSD Security" <${process.env.GOOGLE_EMAIL || 'security@insd.edu.in'}>`,
            to: email,
            subject: "Your Password Reset Code",
            html: `<h2>Password Reset Request</h2><p>Your 6-digit verification code is: <strong>${resetToken}</strong></p><p>This code will expire in 15 minutes.</p>`
        });

        if (!isUsingOAuth) {
            emailPreviewURL = nodemailer.getTestMessageUrl(info);
            console.log("Password Reset Sent! Preview: %s", emailPreviewURL);
        }

        res.status(200).json({ message: "Password reset code sent to your email!", previewURL: emailPreviewURL });

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
