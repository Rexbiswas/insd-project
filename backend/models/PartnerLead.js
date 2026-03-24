import mongoose from 'mongoose';

const PartnerLeadSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    industry: { type: String, required: true },
    potential: { type: String, enum: ['Mentor', 'Collaborator', 'Employer', 'Other'], default: 'Other' },
    message: { type: String },
    contact: { type: String, required: true },
    address: { type: String },
    date: { type: Date, default: Date.now },
});

export default mongoose.model('PartnerLead', PartnerLeadSchema);
