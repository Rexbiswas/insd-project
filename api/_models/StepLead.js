import mongoose from 'mongoose';

const StepLeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    state: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    qualification: {
        type: String
    },
    industry: {
        type: String
    },
    course: {
        type: String
    },
    readyToStart: {
        type: String,
        default: 'yes'
    },
    inquiryType: {
        type: String,
        default: 'Career Guidance Inquiry'
    },
    marketingConsent: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.models.StepLead || mongoose.model('StepLead', StepLeadSchema);
