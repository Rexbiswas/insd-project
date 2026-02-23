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
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>INSD Core | Backend Active</title>
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;700;900&display=swap" rel="stylesheet">
        <style>
            :root {
                --primary: #db3436;
                --secondary: #134a84;
                --bg: #0f172b;
            }
            body {
                margin: 0;
                padding: 0;
                background-color: var(--bg);
                color: white;
                font-family: 'Outfit', sans-serif;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            .container {
                position: relative;
                z-index: 10;
                text-align: center;
                padding: 40px;
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(20px);
                border-radius: 40px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                max-width: 500px;
                width: 90%;
            }
            .orb {
                position: absolute;
                width: 400px;
                height: 400px;
                border-radius: 50%;
                filter: blur(100px);
                z-index: 1;
                opacity: 0.3;
                animation: float 20s infinite alternate;
            }
            .orb-1 { background: var(--primary); top: -100px; left: -100px; }
            .orb-2 { background: var(--secondary); bottom: -100px; right: -100px; }
            
            @keyframes float {
                0% { transform: translate(0, 0) scale(1); }
                100% { transform: translate(50px, 50px) scale(1.2); }
            }

            .status-indicator {
                display: flex;
                align-items: center;
                gap: 12px;
                justify-content: center;
                margin-bottom: 24px;
            }
            .pulse {
                width: 12px;
                height: 12px;
                background: #10b981;
                border-radius: 50%;
                box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
                70% { box-shadow: 0 0 0 15px rgba(16, 185, 129, 0); }
                100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
            }
            .status-text {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.2rem;
                font-weight: 700;
                color: #10b981;
            }

            h1 {
                font-size: 2.5rem;
                font-weight: 900;
                margin: 0;
                letter-spacing: -0.05rem;
                background: linear-gradient(to right, #fff, #94a3b8);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            .brand {
                font-size: 14px;
                font-weight: 700;
                color: var(--primary);
                margin-bottom: 8px;
                letter-spacing: 0.4rem;
                text-transform: uppercase;
            }
            p {
                color: #64748b;
                font-size: 16px;
                line-height: 1.6;
                margin-top: 20px;
            }
            .footer {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                font-family: monospace;
                font-size: 10px;
                color: #475569;
                text-transform: uppercase;
                letter-spacing: 0.1rem;
            }
            .secure {
                display: inline-flex;
                align-items: center;
                gap: 6px;
                color: #94a3b8;
                font-size: 11px;
                margin-top: 12px;
            }
        </style>
    </head>
    <body>
        <div class="orb orb-1"></div>
        <div class="orb orb-2"></div>
        
        <div class="container">
            <div class="status-indicator">
                <div class="pulse"></div>
                <div class="status-text">System Online</div>
            </div>
            <div class="brand">INSD Core</div>
            <h1>Backend Server</h1>
            <p>The neural network for International School of Design is active and responding to protocols.</p>
            
            <div class="secure">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                Secure Connection Established
            </div>

            <div class="footer">
                Environment: PRODUCTION // Latency: OPTIMAL // Uptime: 99.9%
            </div>
        </div>
    </body>
    </html>
    `);
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
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`Server running on port ${PORT}`);
        console.log(`Visit http://localhost:${PORT} to verify`);
    });
}

module.exports = app;
