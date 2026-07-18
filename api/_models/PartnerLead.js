import mongoose from 'mongoose';

const PartnerLeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    mobile: { type: String }, // support both field names
    investment: { type: String },
    preference: { type: String },
    state: { type: String },
    city: { type: String },
    referred: { type: Boolean, default: false },
    // compatibility with old fields
    company: { type: String },
    industry: { type: String },
    potential: { type: String, enum: ['Mentor', 'Collaborator', 'Employer', 'Other'], default: 'Other' },
    message: { type: String },
    contact: { type: String },
    address: { type: String },
}, { timestamps: true });

export default mongoose.model('PartnerLead', PartnerLeadSchema);
