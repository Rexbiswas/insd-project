const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Register User
router.post('/register', async (req, res) => {
    try {
        const {
            username, email, password, firstName, lastName, phone, dob, country,
            street1, street2, city, state, pinCode,
            centre, level, stream, scholarship,
            comments, communications
        } = req.body;

        console.log("Registration attempt received for:", email);

        // Check if user exists
        const existingUser = await User.findOne({
            $or: [{ email: email }, { username: username }]
        });

        if (existingUser) {
            return res.status(400).json({ message: "User with this email or username already exists." });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user object
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            firstName,
            lastName,
            phone,
            dob,
            country,
            address: {
                street1, street2, city, state, pinCode
            },
            academic: {
                centre, level, stream, scholarship
            },
            comments,
            communications
        });

        await newUser.save();

        res.status(201).json({ message: "User registered successfully!" });
    } catch (err) {
        console.error("Registration Error:", err);
        res.status(500).json({ error: "Server error during registration." });
    }
});

// Login User
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found" });

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate Token
        const token = jwt.sign(
            { id: user._id, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: "10d" }
        );

        // Remove password from response
        const { password: _, ...userInfo } = user._doc;

        res.status(200).json({ ...userInfo, token });
    } catch (err) {
        console.error("Login Error:", err);
        res.status(500).json({ error: "Server error during login." });
    }
});

module.exports = router;
