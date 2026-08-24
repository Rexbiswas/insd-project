import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import connectDB from '@/lib/db';
import User from '../../../../../api/_models/User.js';

export async function POST(request) {
    try {
        await connectDB();
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
        }

        const user = await User.findOne({
            $or: [{ email: email.trim().toLowerCase() }, { username: email.trim() }]
        });

        if (!user) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, role: user.role },
            process.env.JWT_SECRET || 'insd-super-secret-jwt-key-2026',
            { expiresIn: '7d' }
        );

        const userObj = user.toObject();
        delete userObj.password;

        return NextResponse.json({
            success: true,
            token,
            ...userObj
        });

    } catch (error) {
        console.error('❌ [Next.js API Login] Error:', error);
        return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
