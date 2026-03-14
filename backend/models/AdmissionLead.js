import mongoose from 'mongoose';

const AdmissionLeadSchema = new mongoose.Schema({
    readyToStart: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    }
}, { timestamps: true });

export default mongoose.model('AdmissionLead', AdmissionLeadSchema);
