import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, MapPin, Building2, BookOpen, GraduationCap, CheckCircle2, AlertCircle, ChevronDown, Send } from 'lucide-react';

const AdmissionForm = () => {
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

    const cities = ["Delhi", "Mumbai", "Pune", "Dubai", "Washington", "UK", "Paris"];
    
    const centresByCity = {
        "Delhi": ["South Delhi", "North Delhi"],
        "Mumbai": ["Mumbai Central"],
        "Pune": ["Pune Camp"],
        "Dubai": ["Dubai IBSW"],
        "Washington": ["Washington IBSW"],
        "UK": ["UCA Global"],
        "Paris": ["The Paris Project"]
    };

    const programs = [
        "Bachelors (3 Years)",
        "Masters (2 Years)",
        "Diploma (1 Year)",
        "Certificate (Short Term)"
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
        
        if (!formData.marketingConsent) {
            setErrorMessage("Please agree to receive updates to proceed.");
            setStatus('error');
            return;
        }

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
                className="w-full max-w-4xl mx-auto p-12 bg-slate-900 rounded-[2rem] border border-primary/20 text-center space-y-8"
            >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                    <CheckCircle2 className="text-primary w-10 h-10" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-4xl font-black uppercase tracking-tighter text-white">Application Received</h2>
                    <p className="text-slate-400 text-lg max-w-md mx-auto">
                        Thank you for your interest in INSD. Our admissions team will get back to you within two business days.
                    </p>
                </div>
                <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-full hover:bg-white hover:text-black transition-all"
                >
                    Submit Another Inquiry
                </button>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto bg-black rounded-4xl overflow-hidden shadow-2xl border border-white/5 relative group">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-50 pointer-events-none" />
            
            <form onSubmit={handleSubmit} className="relative z-10 p-8 md:p-16 space-y-12">
                {/* Header Subtitle */}
                <div className="space-y-4 text-center md:text-left">
                    <p className="text-slate-400 font-medium text-lg leading-relaxed max-w-2xl">
                        Take the first step by filling out the form below, and someone from our team will reach back to you within two business days.
                    </p>
                    <h2 className="text-primary text-4xl md:text-5xl font-black uppercase tracking-tighter">
                        Admissions Open 2026
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Personal Info */}
                    <div className="space-y-6">
                        <div className="relative group/field">
                             <input 
                                required
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text" 
                                placeholder="Enter Name *" 
                                className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-12 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-all font-bold"
                             />
                             <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={20} />
                        </div>

                        <div className="relative group/field">
                             <input 
                                required
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email" 
                                placeholder="Enter Email Address *" 
                                className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-12 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-all font-bold"
                             />
                             <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={20} />
                        </div>

                        <div className="flex gap-4">
                            <div className="relative w-28 shrink-0">
                                <select className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-4 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer">
                                    <option>+91</option>
                                    <option>+971</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                    <option>+33</option>
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>
                            <div className="relative flex-1 group/field">
                                 <input 
                                    required
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    type="tel" 
                                    placeholder="Enter Mobile Number *" 
                                    className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-primary transition-all font-bold"
                                 />
                                 <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Preferences */}
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative group/field">
                                <select 
                                    required
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-12 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer placeholder-slate-400"
                                >
                                    <option value="" disabled>Select Preferred City *</option>
                                    {cities.map(city => <option key={city} value={city}>{city}</option>)}
                                </select>
                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={20} />
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>

                            <div className="relative group/field">
                                <select 
                                    required
                                    name="centre"
                                    value={formData.centre}
                                    onChange={handleChange}
                                    className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-12 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer disabled:opacity-50"
                                    disabled={!formData.city}
                                >
                                    <option value="" disabled>Select Preferred Centre *</option>
                                    {formData.city && centresByCity[formData.city]?.map(centre => (
                                        <option key={centre} value={centre}>{centre}</option>
                                    ))}
                                </select>
                                <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={20} />
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative group/field">
                                <select 
                                    required
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-12 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Program *</option>
                                    {programs.map(prog => <option key={prog} value={prog}>{prog}</option>)}
                                </select>
                                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={20} />
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>

                            <div className="relative group/field">
                                <select 
                                    required
                                    name="course"
                                    value={formData.course}
                                    onChange={handleChange}
                                    className="w-full h-16 bg-white border-2 border-transparent rounded-xl px-12 text-slate-900 font-bold focus:outline-none focus:border-primary appearance-none cursor-pointer"
                                >
                                    <option value="" disabled>Select Course *</option>
                                    {courses.map(course => <option key={course} value={course}>{course}</option>)}
                                </select>
                                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within/field:text-primary transition-colors" size={20} />
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex flex-col items-center justify-center space-y-8">
                    <label className="flex items-start md:items-center gap-4 cursor-pointer group/consent">
                        <div className={`mt-1 md:mt-0 w-6 h-6 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${formData.marketingConsent ? 'bg-primary border-primary shadow-[0_0_15px_rgba(219,52,54,0.4)]' : 'border-white/20 hover:border-white/40 bg-white/5'}`}>
                            {formData.marketingConsent && <CheckCircle2 className="text-white w-4 h-4" />}
                        </div>
                        <input 
                            type="checkbox" 
                            name="marketingConsent"
                            checked={formData.marketingConsent}
                            onChange={handleChange}
                            className="hidden" 
                        />
                        <span className="text-white text-sm md:text-lg font-medium select-none group-hover/consent:text-primary/90 transition-colors">
                            I agree to give my consent to receive updates through SMS/Email & WhatsApp*
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
                        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                        <span className="relative z-10 flex items-center justify-center gap-4 text-xl md:text-2xl font-black uppercase tracking-widest group-hover:text-black transition-colors">
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

export default AdmissionForm;
