import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/db';
import Blog from '../../../../api/_models/Blog.js';

export async function GET(request) {
    try {
        await connectDB();
        const { searchParams } = new URL(request.url);
        const category = searchParams.get('category');
        const search = searchParams.get('search');

        let query = {};
        if (category && category !== 'All') {
            query.category = category;
        }
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: 'i' } },
                { excerpt: { $regex: search, $options: 'i' } },
                { author: { $regex: search, $options: 'i' } }
            ];
        }

        if (mongoose.connection.readyState === 1) {
            const blogs = await Blog.find(query).sort({ createdAt: -1 }).limit(50);
            return NextResponse.json({ success: true, blogs });
        }

        return NextResponse.json({ success: true, blogs: [] });
    } catch (error) {
        console.error('❌ [Next.js API Blogs GET] Error:', error);
        return NextResponse.json({ success: false, blogs: [], message: error.message }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        await connectDB();
        const body = await request.json();
        const { title, excerpt, content, author, category, image } = body;

        if (!title || !content || !author) {
            return NextResponse.json({ success: false, message: 'Title, content, and author are required' }, { status: 400 });
        }

        if (mongoose.connection.readyState === 1) {
            const newBlog = new Blog({
                title,
                excerpt: excerpt || title.substring(0, 100),
                content,
                author,
                category: category || 'Fashion',
                image: image || 'https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg'
            });

            const savedBlog = await newBlog.save();
            return NextResponse.json({ success: true, blog: savedBlog }, { status: 201 });
        }

        return NextResponse.json({ success: false, message: 'Database offline' }, { status: 503 });
    } catch (error) {
        console.error('❌ [Next.js API Blogs POST] Error:', error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
