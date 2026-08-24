import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';

export async function GET() {
    let dbStatus = 'disconnected';
    try {
        await connectDB();
        dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    } catch (e) {
        dbStatus = 'error: ' + e.message;
    }

    return NextResponse.json({
        status: 'online',
        timestamp: new Date().toISOString(),
        database: dbStatus,
        framework: 'Next.js App Router'
    });
}
