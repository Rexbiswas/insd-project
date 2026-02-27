import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import authRoutes from './routes/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(express.json());
app.use(cors({ origin: '*', credentials: true }));

// Database Connection
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000,
}).then(() => {
    console.log('MongoDB Connected successfully');
}).catch(err => {
    console.error('MongoDB Initial Connection Error:', err.message);
});

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'active', message: 'INSD Core Backend is running', dbReady: mongoose.connection.readyState });
});

app.use('/api/auth', authRoutes);

// Start Server locally
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
    });
}

export default app;
