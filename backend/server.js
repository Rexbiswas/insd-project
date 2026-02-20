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

// Routes
app.get('/', (req, res) => {
    res.send('INSD Backend Server is Running');
});
app.use('/api/auth', authRoutes);

// Database Connection
if (process.env.MONGO_URI) {
    mongoose.connect(process.env.MONGO_URI, {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000
    })
        .then(() => console.log('MongoDB Connected successfully'))
        .catch((err) => console.log('MongoDB Connection failed:', err.message));
}

// Prevent topology errors from crashing the process
process.on('unhandledRejection', (reason) => {
    console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} to verify`);
});
