import mongoose from 'mongoose';

const StepLeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
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
    readyToStart: {
        type: String,
        enum: ['yes', 'no'],
        required: true
    },
    inquiryType: {
        type: String,
        required: true
    },
    marketingConsent: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model('StepLead', StepLeadSchema);
