import mongoose from 'mongoose';

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
    if (cached.conn && mongoose.connection.readyState === 1) {
        return cached.conn;
    }

    if (!cached.promise) {
        const uri = process.env.MONGO_URI || process.env.MONGO_URI_LOCAL || 'mongodb://127.0.0.1:27017/insd';
        cached.promise = mongoose.connect(uri, {
            serverSelectionTimeoutMS: 5000,
            family: 4
        }).then((m) => {
            console.log('✅ [Next.js DB] Connected to MongoDB');
            return m;
        }).catch(err => {
            console.error('❌ [Next.js DB] MongoDB Connection Error:', err.message);
            cached.promise = null;
            throw err;
        });
    }

    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }

    return cached.conn;
}

export default connectDB;
