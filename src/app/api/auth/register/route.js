import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '../../../../../api/_models/User.js';
import { sendWelcomeEmail, sendAdminLeadEmail, pushToNPF } from '../../../../../api/_utils/notifications.js';

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const {
            username, email, password, firstName, lastName, phone, dob, country,
            street1, street2, city, state, pinCode,
            centre, level, stream, scholarship,
            comments, communications
        } = body;

        if (!email || !password || !firstName) {
            return NextResponse.json({ message: 'Email, password, and name are required' }, { status: 400 });
        }

        const existingUser = await User.findOne({
            $or: [{ email: email.trim().toLowerCase() }, { username: username }]
        });

        if (existingUser) {
            return NextResponse.json({ message: "User with this email or username already exists." }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            username: username || email.split('@')[0],
            email: email.trim().toLowerCase(),
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

        Promise.allSettled([
            communications?.email ? sendWelcomeEmail(email, firstName, `${level || ''} in ${stream || 'Design'}`) : Promise.resolve(),
            sendAdminLeadEmail("insd.admissionleads@gmail.com", {
                source: "Student Registration",
                name: `${firstName} ${lastName || ''}`.trim(),
                email,
                phone,
                city,
                centre,
                program: `${level || ''} ${stream || ''}`.trim(),
                scholarship: scholarship || "No"
            }),
            pushToNPF({
                name: `${firstName} ${lastName || ''}`.trim(),
                email,
                phone,
                city,
                state,
                course: stream || 'Design',
                level: level || 'General'
            })
        ]).catch(err => console.error('[Registration Notifications Error]', err.message));

        return NextResponse.json({
            success: true,
            message: "Student registered successfully! Welcome to INSD."
        }, { status: 201 });

    } catch (error) {
        console.error('❌ [Next.js API Register] Error:', error);
        return NextResponse.json({ message: error.message || 'Internal Server Error' }, { status: 500 });
    }
}
