const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

// Prevent topology errors from crashing the process
process.on('unhandledRejection', (reason) => {
    // Silence errors to keep process alive
});
process.on('uncaughtException', (err) => {
    // Silence errors to keep process alive
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to verify`);

    // Database Connection (Background)
    if (process.env.MONGO_URI) {
        mongoose.connect(process.env.MONGO_URI, { serverSelectionTimeoutMS: 5000 })
            .then(() => console.log('MongoDB Connected successfully'))
            .catch(() => console.log('MongoDB Connection failed - check IP whitelist or URI'));
    }
});

// Routes
app.get('/', (req, res) => {
    res.send('INSD Backend Server is Running');
});
app.use('/api/auth', authRoutes);
