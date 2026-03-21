import mongoose from 'mongoose';

const AdmissionLeadSchema = new mongoose.Schema({
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
    city: {
        type: String,
        required: true
    },
    centre: {
        type: String,
        required: true
    },
    program: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    marketingConsent: {
        type: Boolean,
        default: false
    },
    // Optional compatibility fields 
    readyToStart: { type: String },
    industry: { type: String },
    qualification: { type: String }
}, { timestamps: true });

export default mongoose.model('AdmissionLead', AdmissionLeadSchema);
