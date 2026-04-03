import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Building2, BookOpen, GraduationCap, CheckCircle2, AlertCircle, ChevronDown, Send } from 'lucide-react';

const AdmissionFormWhite = ({ isModal = false, title, subtitle }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        centre: '',
        program: '',
        course: '',
        marketingConsent: false
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const cities = ["Delhi", "Mumbai", "Pune"];
    
    const centresByCity = {
        "Delhi": ["South Delhi", "North Delhi"],
        "Mumbai": ["Mumbai Central"],
        "Pune": ["Pune Camp"]
    };

    const programs = [
        "Industry Diploma",
        "PG Degree",
        "UG Degree",
        "certificate course"
    ];

    const courses = [
        "Fashion Design",
        "Interior Design",
        "Graphic Design",
        "Animation & VFX",
        "Jewellery Design",
        "UI/UX Design",
        "Beauty & Makeup",
        "Photography",
        "Textile Design"
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setStatus('loading');
        try {
            const response = await fetch('/api/admission', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '', email: '', phone: '', city: '', centre: '', 
                    program: '', course: '', marketingConsent: false
                });
            } else {
                setErrorMessage(data.message || "Failed to submit. Please try again.");
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage("Network error. Please check your connection.");
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`w-full max-w-4xl mx-auto ${isModal ? 'p-8' : 'p-12'} bg-slate-50 rounded-4xl border border-slate-200 text-center space-y-8`}
            >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto border border-primary/20">
                    <CheckCircle2 className="text-primary w-10 h-10" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Application Received</h2>
                    <p className="text-slate-600 text-lg max-w-md mx-auto">
                        Thank you for your interest in INSD. Our admissions team will get back to you within two business days.
                    </p>
                </div>
                <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-slate-900 transition-all"
                >
                    Submit Another Inquiry
                </button>
            </motion.div>
        );
    }

    return (
        <div id="admission-form-white" className={`w-full max-w-6xl mx-auto bg-white ${isModal ? '' : 'rounded-4xl'} overflow-hidden shadow-2xl border border-slate-200 relative group`}>
            {/* Subtle light background effect */}
            <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-slate-100 opacity-80 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className={`relative z-10 ${isModal ? 'p-6 md:p-10' : 'p-8 md:p-16'} space-y-8 md:space-y-12`}>
                {/* Header Subtitle */}
                <div className="space-y-4 text-center max-w-3xl mx-auto mb-6 md:mb-10">
                    <div className="flex items-center justify-center gap-4 mb-2">
                        <div className="w-8 h-px bg-primary/30" />
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">
                            {title ? "Priority Access" : "Your Creative Journey"}
                        </span>
                        <div className="w-8 h-px bg-primary/30" />
                    </div>
                    <h2 className="text-slate-950 text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                        {title || (
                            <>From Classroom <span className="text-primary italic">to Career</span></>
                        )}
                    </h2>
                    <p className="text-slate-600 font-medium text-sm md:text-lg leading-relaxed px-4">
                        {subtitle || "Take the first step towards a career in creative excellence."}
                    </p>
                </div>

                <div className="flex flex-col space-y-5 max-w-2xl mx-auto">
                    {/* Personal Info */}
                    <div className="relative group/field">
                         <input 
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text" 
                            placeholder="Full Name *" 
                            className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all font-bold text-sm md:text-base shadow-inner"
                         />
                         <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={18} />
                    </div>

                    <div className="relative group/field">
                         <input 
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email" 
                            placeholder="Email Address *" 
                            className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all font-bold text-sm md:text-base shadow-inner"
                         />
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={18} />
                    </div>

                    <div className="flex gap-4">
                        <div className="relative w-28 shrink-0">
                            <select className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl px-4 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer text-sm md:text-base shadow-inner">
                                <option className="bg-white">+91</option>
                                <option className="bg-white">+971</option>
                                <option className="bg-white">+1</option>
                                <option className="bg-white">+44</option>
                                <option className="bg-white">+33</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                        </div>
                        <div className="relative flex-1 group/field">
                             <input 
                                required
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                type="tel" 
                                placeholder="Mobile Number *" 
                                className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10 transition-all font-bold text-sm md:text-base shadow-inner"
                             />
                             <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={18} />
                        </div>
                    </div>

                    {/* Preferences Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="relative group/field">
                            <select 
                                required
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl pl-12 px-8 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer placeholder-slate-400 text-sm md:text-base shadow-inner"
                            >
                                <option value="" disabled className="bg-white">Select City *</option>
                                {cities.map(city => <option key={city} value={city} className="bg-white">{city}</option>)}
                            </select>
                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={18} />
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                        </div>

                        <div className="relative group/field">
                            <select 
                                required
                                name="centre"
                                value={formData.centre}
                                onChange={handleChange}
                                className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl pl-12 px-8 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer disabled:opacity-50 text-sm md:text-base shadow-inner"
                                disabled={!formData.city}
                            >
                                <option value="" disabled className="bg-white">Select Centre *</option>
                                {formData.city && centresByCity[formData.city]?.map(centre => (
                                    <option key={centre} value={centre} className="bg-white">{centre}</option>
                                ))}
                            </select>
                            <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={18} />
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                        </div>

                        <div className="relative group/field">
                            <select 
                                required
                                name="program"
                                value={formData.program}
                                onChange={handleChange}
                                className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl pl-12 px-8 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer text-sm md:text-base shadow-inner"
                            >
                                <option value="" disabled className="bg-white">Select Program *</option>
                                {programs.map(prog => <option key={prog} value={prog} className="bg-white">{prog}</option>)}
                            </select>
                            <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={18} />
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                        </div>

                        <div className="relative group/field">
                            <select 
                                required
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                className="w-full h-15 bg-slate-50 border border-slate-200 rounded-2xl pl-12 px-8 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer text-sm md:text-base shadow-inner"
                            >
                                <option value="" disabled className="bg-white">Select Course *</option>
                                {courses.map(course => <option key={course} value={course} className="bg-white">{course}</option>)}
                            </select>
                            <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={18} />
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                        </div>
                    </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex flex-col items-center justify-center space-y-8 pt-4">
                    <label className="flex items-start gap-4 cursor-pointer group/consent max-w-xl">
                        <div className={`mt-1 w-6 h-6 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${formData.marketingConsent ? 'bg-primary border-primary shadow-[0_0_15px_rgba(219,52,54,0.4)]' : 'border-slate-300 hover:border-slate-400 bg-white'}`}>
                            {formData.marketingConsent && <CheckCircle2 className="text-white w-4 h-4" />}
                        </div>
                        <input 
                            type="checkbox" 
                            name="marketingConsent"
                            checked={formData.marketingConsent}
                            onChange={handleChange}
                            className="hidden" 
                        />
                        <span className="text-slate-600 text-xs md:text-sm font-medium select-none group-hover/consent:text-slate-900 transition-colors">
                            I agree to give my consent to receive updates through SMS/Email*
                        </span>
                    </label>

                    {status === 'error' && (
                        <div className="flex items-center gap-2 text-red-500 bg-red-500/10 px-6 py-3 rounded-full border border-red-500/20">
                            <AlertCircle size={16} />
                            <span className="text-sm font-bold uppercase tracking-wider">{errorMessage}</span>
                        </div>
                    )}

                    <button 
                        type="submit"
                        disabled={status === 'loading'}
                        className="group relative w-full md:w-[400px] h-20 bg-primary text-white rounded-full overflow-hidden shadow-2xl transition-all active:scale-95 disabled:opacity-50"
                    >
                        <div className="absolute inset-0 bg-slate-900 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 flex items-center justify-center gap-4 text-xl md:text-2xl font-black uppercase tracking-widest text-white transition-colors">
                            {status === 'loading' ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Submit Inquiry
                                    <Send size={24} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                                </>
                            )}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdmissionFormWhite;
