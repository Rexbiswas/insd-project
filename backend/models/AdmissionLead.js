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
    state: {
        type: String
    },
    centre: {
        type: String
    },
    program: {
        type: String
    },
    course: {
        type: String
    },
    referred: {
        type: Boolean,
        default: false
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
