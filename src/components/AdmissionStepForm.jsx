'use client';

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, MapPin, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Building, Briefcase, GraduationCap, Monitor, Palette, Hexagon, Star } from 'lucide-react';

const AdmissionStepForm = () => {
    const router = useRouter();
    const sectionRef = useRef(null);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        readyToStart: '',
        industry: '',
        name: '',
        phone: '',
        email: '',
        city: '',
        qualification: '',
        marketingConsent: false
    });
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const TOTAL_STEPS = 4;

    const handleNext = () => {
        if (step < TOTAL_STEPS) setStep(step + 1);
        scrollToTop();
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
        scrollToTop();
    };

    const scrollToTop = () => {
        if (sectionRef.current) {
            sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const handleSubmit = async (e) => {
        if (e) e.preventDefault();
        setError(null);

        if (!formData.qualification) {
            setError('Please select your current qualification.');
            return;
        }

        if (!formData.marketingConsent) {
            setError('Please accept the terms to proceed.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('/api/step-leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    readyToStart: formData.readyToStart,
                    industry: formData.industry,
                    name: formData.name,
                    phone: `+91${formData.phone}`,
                    email: formData.email,
                    city: formData.city,
                    qualification: formData.qualification,
                    marketingConsent: formData.marketingConsent
                }),
            });

            const contentType = response.headers.get("content-type");
            let data = {};
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            } else {
                const text = await response.text();
                console.error("Non-JSON response received:", text);
                throw new Error(`Server returned non-JSON response (${response.status})`);
            }

            if (response.ok) {
                setSubmitted(true);
                scrollToTop();
            } else {
                setError(data.message || `Submission failed (${response.status}). Please try again.`);
            }
        } catch (err) {
            console.error('Submission Error:', err);
            if (err.name === 'TypeError' && err.message.includes('fetch')) {
                setError("Connection Error: Server is unreachable. Please check your internet connection.");
            } else {
                setError(err.message || 'Something went wrong. Please check your connection and try again.');
            }
        } finally {
            setLoading(false);
        }
    };

    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="text-center space-y-3">
                            <span className="text-primary font-mono text-xs uppercase tracking-widest block font-bold">Step 01 / Phase Alignment</span>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">When are you looking to start?</h3>
                            <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base">Select your intended timeframe so we can reserve your seat and connect you with right cohort.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto pt-4">
                            {[
                                { title: "Immediately", desc: "Joining the current upcoming intake batch", icon: Sparkles },
                                { title: "In 1-3 Months", desc: "Planning ahead for next quarterly session", icon: Hexagon },
                                { title: "Exploring / Next Year", desc: "Gathering information & career guidance", icon: Star }
                            ].map((item, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, readyToStart: item.title });
                                        handleNext();
                                    }}
                                    className={`p-6 md:p-8 rounded-3xl border-2 text-left transition-all duration-300 relative group overflow-hidden flex flex-col justify-between min-h-[180px] ${formData.readyToStart === item.title ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-slate-100 bg-white hover:border-slate-300 hover:shadow-lg'}`}
                                >
                                    <div className="flex justify-between items-start">
                                        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-colors ${formData.readyToStart === item.title ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400 group-hover:text-primary group-hover:bg-primary/10'}`}>
                                            <item.icon size={20} />
                                        </div>
                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${formData.readyToStart === item.title ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>
                                            {formData.readyToStart === item.title && <CheckCircle2 size={12} />}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-black text-lg md:text-xl text-slate-900 uppercase tracking-tight mb-1">{item.title}</h4>
                                        <p className="text-xs md:text-sm text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                );
            case 2:
                return (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="text-center space-y-3">
                            <span className="text-primary font-mono text-xs uppercase tracking-widest block font-bold">Step 02 / Creative Discipline</span>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">Select Your Design Focus</h3>
                            <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base">Choose the specialized school of design you are passionate about pursuing.</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
                            {[
                                { name: "Fashion Design", icon: Palette },
                                { name: "Interior Design", icon: Building },
                                { name: "Graphic Design", icon: Monitor },
                                { name: "Animation & VFX", icon: Sparkles },
                                { name: "Jewellery Design", icon: Hexagon },
                                { name: "Textile Design", icon: Briefcase },
                                { name: "UI/UX Design", icon: Monitor },
                                { name: "Photography & Media", icon: Star }
                            ].map((item, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => {
                                        setFormData({ ...formData, industry: item.name });
                                        handleNext();
                                    }}
                                    className={`p-6 rounded-3xl border-2 text-center transition-all duration-300 flex flex-col items-center justify-center gap-4 group ${formData.industry === item.name ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-slate-100 bg-white hover:border-slate-300 hover:shadow-lg'}`}
                                >
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${formData.industry === item.name ? 'bg-primary text-white' : 'bg-slate-50 text-slate-600'}`}>
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="font-bold text-sm md:text-base text-slate-900 leading-snug">{item.name}</h4>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                );
            case 3:
                return (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="text-center space-y-3">
                            <span className="text-primary font-mono text-xs uppercase tracking-widest block font-bold">Step 03 / Applicant Details</span>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">Tell Us About Yourself</h3>
                            <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base">We'll assign your personal senior admissions counselor based on these details.</p>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-4 pt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name *</label>
                                    <div className="relative flex items-center">
                                        <User className="absolute left-4 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Your Name"
                                            className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number *</label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 flex items-center gap-1 border-r border-slate-300 pr-2">
                                            <span className="text-slate-500 font-bold text-xs">+91</span>
                                        </div>
                                        <input
                                            type="tel"
                                            required
                                            inputMode="numeric"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                            placeholder="10-digit number"
                                            className="w-full h-14 pl-18 pr-4 bg-slate-50 border border-slate-200 rounded-2xl font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address *</label>
                                    <div className="relative flex items-center">
                                        <Mail className="absolute left-4 text-slate-400" size={18} />
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@email.com"
                                            className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">City *</label>
                                    <div className="relative flex items-center">
                                        <MapPin className="absolute left-4 text-slate-400" size={18} />
                                        <input
                                            type="text"
                                            required
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            placeholder="Current City"
                                            className="w-full h-14 pl-12 pr-4 bg-slate-50 border border-slate-200 rounded-2xl font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:bg-white transition-all text-sm md:text-base"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    onClick={() => {
                                        if (formData.name && formData.phone.length === 10 && formData.email && formData.city) {
                                            handleNext();
                                        } else {
                                            setError("Please fill all required fields correctly (10-digit mobile number).");
                                        }
                                    }}
                                    className="w-full h-16 md:h-18 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-primary transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-[0.98]"
                                >
                                    Proceed to Final Step <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                );
            case 4:
                return (
                    <motion.div
                        key="step4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="text-center space-y-3">
                            <span className="text-primary font-mono text-xs uppercase tracking-widest block font-bold">Step 04 / Academic Baseline</span>
                            <h3 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 uppercase">Highest Qualification</h3>
                            <p className="text-slate-500 max-w-md mx-auto text-sm md:text-base">Helps us curate the appropriate diploma, degree, or masters track for you.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto pt-4">
                            {[
                                { title: "10th Standard / High School", desc: "Foundational diploma & certificate options" },
                                { title: "12th Standard / Pursuing (Any Stream)", desc: "Direct UG degree & professional diplomas" },
                                { title: "Graduation Completed / Final Year", desc: "PG degree, master courses & advanced diploma" },
                                { title: "Working Professional", desc: "Executive luxury management & specialized tracks" }
                            ].map((item, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, qualification: item.title })}
                                    className={`p-6 rounded-3xl border-2 text-left transition-all duration-300 flex items-start gap-4 ${formData.qualification === item.title ? 'border-primary bg-primary/5 shadow-xl shadow-primary/10' : 'border-slate-100 bg-white hover:border-slate-300'}`}
                                >
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${formData.qualification === item.title ? 'border-primary bg-primary text-white' : 'border-slate-300'}`}>
                                        {formData.qualification === item.title && <CheckCircle2 size={14} />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sm md:text-base text-slate-900 mb-1 leading-snug">{item.title}</h4>
                                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Consent Checkbox */}
                        <div className="max-w-xl mx-auto space-y-4 pt-2">
                            <div className="flex items-center justify-center">
                                <label className="flex items-start gap-3 cursor-pointer group/consent">
                                    <div className={`mt-0.5 w-5 h-5 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${formData.marketingConsent ? 'bg-primary border-primary shadow-[0_0_10px_rgba(219,52,54,0.3)]' : 'border-slate-300 hover:border-slate-400 bg-slate-50'}`}>
                                        {formData.marketingConsent && <CheckCircle2 className="text-white w-4 h-4" />}
                                    </div>
                                    <input 
                                        type="checkbox" 
                                        checked={formData.marketingConsent}
                                        onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                                        className="hidden" 
                                    />
                                    <span className="text-slate-500 text-xs md:text-sm font-medium select-none group-hover/consent:text-slate-900 transition-colors">
                                        I agree to give my consent to receive updates through SMS/Email*
                                    </span>
                                </label>
                            </div>

                            {error && (
                                <div className="p-4 rounded-2xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 animate-fade-in max-w-lg mx-auto">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                                    <span className="text-xs font-bold uppercase tracking-wider text-center flex-1">{error}</span>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={!formData.qualification || loading}
                                className="w-full h-16 md:h-20 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.25em] text-sm md:text-base hover:bg-primary hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.95]"
                            >
                                {loading ? (
                                    <span className="flex items-center gap-2">
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        Submitting...
                                    </span>
                                ) : "Submit Application"}
                            </button>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <section ref={sectionRef} className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden z-20">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                {!submitted ? (
                    <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-slate-100 p-6 md:p-16 relative">

                        {/* Progress Header */}
                        <div className="flex items-center justify-between mb-12 md:mb-16 relative">
                            {/* Back button */}
                            <button
                                onClick={handleBack}
                                className={`w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-all active:scale-95 ${step === 1 ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                            >
                                <ArrowLeft className="w-5 h-5" />
                            </button>

                            {/* Progress Indicators */}
                            <div className="flex-1 flex gap-2 md:gap-3 mx-4 md:mx-12 relative">
                                {[1, 2, 3, 4].map(num => (
                                    <div key={num} className="flex-1 relative">
                                        <div className={`h-1.5 md:h-2 w-full rounded-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${step >= num ? 'bg-primary shadow-[0_0_10px_rgba(219,52,54,0.3)]' : 'bg-slate-100'}`} />
                                    </div>
                                ))}
                            </div>

                            {/* Steps Counter */}
                            <div className="text-right w-12 text-xs md:text-sm font-bold text-slate-400 font-mono tracking-widest">
                                0{step}/0{TOTAL_STEPS}
                            </div>
                        </div>

                        {/* Form Body */}
                        <div className="min-h-[400px]">
                            <AnimatePresence mode="wait">
                                {renderStepContent()}
                            </AnimatePresence>
                        </div>

                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-slate-900 p-12 md:p-24 rounded-[3rem] text-center text-white relative overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />
                        <div className="relative z-10 flex flex-col items-center">
                            <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-8 border border-primary/30 relative">
                                <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                                <div className="absolute inset-0 rounded-full border border-primary animate-ping opacity-20" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                                APPLICATION <br /> <span className="text-primary italic font-serif">RECEIVED</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed">
                                Thank you, <span className="text-white font-bold">{formData.name || 'Future Insdian'}</span>! Your details have been submitted. Our admission counselor will contact you shortly to guide you through the next steps.
                            </p>
                            <button
                                onClick={() => {
                                    setStep(1);
                                    setFormData({ readyToStart: '', industry: '', name: '', phone: '', email: '', city: '', qualification: '' });
                                    setSubmitted(false);
                                }}
                                className="px-10 py-5 bg-white text-slate-900 hover:bg-primary hover:text-white rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-primary/30 active:scale-95 flex items-center gap-3"
                            >
                                <ArrowLeft size={16} /> RETURN TO START
                            </button>
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default AdmissionStepForm;
