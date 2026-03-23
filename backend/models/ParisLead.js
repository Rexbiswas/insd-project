import mongoose from 'mongoose';

const ParisLeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'contacted', 'interview_scheduled', 'accepted', 'rejected'],
        default: 'pending'
    },
    source: {
        type: String,
        default: 'Paris Project Page'
    }
}, { timestamps: true });

export default mongoose.model('ParisLead', ParisLeadSchema);
