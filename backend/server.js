import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';
import leadRoutes from './routes/leadauth.js';
import stepLeadRoutes from './routes/stepleads.js';
import admissionRoutes from './routes/admission.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

// Graceful Error Handling for Development
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown:', err.message);
    if (process.env.NODE_ENV === 'production') process.exit(1);
});

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds instead of 30
    socketTimeoutMS: 45000,
}).then(() => {
    console.log('MongoDB Connected successfully');
}).catch(err => {
    console.warn('\n MongoDB Connection Warning:', err.message);
    console.warn('The server will continue running, but database operations will fail until whitelisted.\n');
});


// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'active', message: 'INSD Core Backend is running', dbReady: mongoose.connection.readyState });
});

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/step-leads', stepLeadRoutes);
app.use('/api/admission', admissionRoutes);

// Start Server locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
