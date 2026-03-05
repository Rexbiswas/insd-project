import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, User, Phone, Mail, MapPin, PartyPopper, Sparkles } from 'lucide-react';
import axios from 'axios';

const LeadForm = () => {
    const [step, setStep] = useState(1);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        readyToStart: '',
        industry: '',
        fullName: '',
        phone: '',
        email: '',
        city: '',
        qualification: ''
    });

    const industries = [
        "Fashion Design", "Graphic Design", "Interior Design",
        "Jewellery Design", "Animation & VFX", "UIUX"
    ];

    const qualifications = [
        "12th Appearing", "12th Passed", "Graduate", "Working Professional"
    ];

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const updateData = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Auto-advance for radio-like selections
        if (field === 'readyToStart' || field === 'industry' || field === 'qualification') {
            setTimeout(() => {
                if (step < 4) handleNext();
            }, 400);
        }
    };

    const isStep3Valid = formData.fullName && formData.phone && formData.email && formData.city;

    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6"
                        >
                            INSD - India's Skill School <br className="hidden md:block" />
                            <span className="text-primary">Building Job-Ready Professionals.</span>
                        </motion.h1>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-lg md:text-xl font-bold text-slate-500 uppercase tracking-widest"
                        >
                            Fast-paced learning. Skill-based training. <br className="hidden md:block" />
                            <span className="text-slate-900">Portfolio + 100% Placement Support</span>
                        </motion.h2>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex justify-between items-center mb-12 max-w-sm mx-auto">
                        {[1, 2, 3, 4].map(num => (
                            <div key={num} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${step >= num ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-slate-100 text-slate-400'}`}>
                                    {step > num ? <CheckCircle2 size={16} /> : num}
                                </div>
                                {num < 4 && <div className={`h-px w-10 md:w-16 mx-2 transition-all duration-500 ${step > num ? 'bg-primary' : 'bg-slate-100'}`}></div>}
                            </div>
                        ))}
                    </div>

                    {/* Form Container */}
                    <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 relative min-h-[450px]">
                        <AnimatePresence mode="wait">
                            {/* Step 1: Readiness */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center relative">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-lg border border-primary/20 scale-110"></div>
                                        </div>
                                        Are You Ready to Start Learning Job-Ready Skills?
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {['Yes', 'No'].map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => updateData('readyToStart', option)}
                                                className={`p-6 rounded-2xl border-2 text-xl font-bold transition-all duration-300 flex items-center justify-between hover:border-primary/50 ${formData.readyToStart === option ? 'border-primary bg-primary/5 text-primary' : 'border-white bg-white text-slate-600'}`}
                                            >
                                                {option}
                                                {formData.readyToStart === option && <CheckCircle2 />}
                                            </button>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Industry */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center relative">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-lg border border-primary/20 scale-110"></div>
                                        </div>
                                        Which Billion-dollar Industry Excites You the Most?
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {industries.map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => updateData('industry', item)}
                                                className={`p-4 rounded-xl border-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 text-left hover:border-primary/50 h-full ${formData.industry === item ? 'border-primary bg-primary/5 text-primary' : 'border-white bg-white text-slate-600'}`}
                                            >
                                                {item}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="pt-8 flex justify-start">
                                        <button
                                            onClick={handleBack}
                                            className="group flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                                                <ArrowLeft size={15} />
                                            </div>
                                            Back
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Details */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center relative">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-lg border border-primary/20 scale-110"></div>
                                        </div>
                                        Tell Us About Yourself
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={(e) => updateData('fullName', e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary outline-none transition-all font-bold"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => updateData('phone', e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary outline-none transition-all font-bold"
                                            />
                                        </div>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => updateData('email', e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary outline-none transition-all font-bold"
                                            />
                                        </div>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                            <input
                                                type="text"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={(e) => updateData('city', e.target.value)}
                                                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-100 focus:border-primary outline-none transition-all font-bold"
                                            />
                                        </div>
                                    </div>
                                    <div className="pt-8 flex items-center justify-between">
                                        <button
                                            onClick={handleBack}
                                            className="group flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                                                <ArrowLeft size={15} />
                                            </div>
                                            Back
                                        </button>
                                        <button
                                            disabled={!isStep3Valid}
                                            onClick={handleNext}
                                            className={`px-10 py-4 rounded-full font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 ${isStep3Valid ? 'bg-primary text-white hover:scale-105 active:scale-95 shadow-xl shadow-primary/30' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                                        >
                                            Next Step <ArrowRight size={20} />
                                        </button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 4: Qualification */}
                            {step === 4 && (
                                <motion.div
                                    key="step4"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-8"
                                >
                                    <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase flex items-center gap-4">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center relative">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-lg border border-primary/20 scale-110"></div>
                                        </div>
                                        Current Qualification
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {qualifications.map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => updateData('qualification', item)}
                                                className={`p-6 rounded-2xl border-2 text-lg font-bold transition-all duration-300 flex items-center justify-between hover:border-primary/50 ${formData.qualification === item ? 'border-primary bg-primary/5 text-primary' : 'border-white bg-white text-slate-600'}`}
                                            >
                                                {item}
                                                {formData.qualification === item && <CheckCircle2 />}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="pt-8 flex items-center justify-between gap-4">
                                        <button
                                            onClick={handleBack}
                                            className="group flex items-center gap-2 text-slate-400 font-bold uppercase tracking-widest text-xs hover:text-slate-900 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                                                <ArrowLeft size={15} />
                                            </div>
                                            Back
                                        </button>

                                        {formData.qualification && (
                                            <motion.button
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                onClick={async () => {
                                                    try {
                                                        const response = await axios.post('http://localhost:5001/api/leads/submit', formData);
                                                        console.log('Lead Submitted Successfully:', response.data);
                                                        setIsSubmitted(true);
                                                    } catch (error) {
                                                        console.error('Submission Error:', error);
                                                        alert("Submission failed. Please try again.");
                                                    }
                                                }}
                                                className="w-auto px-6 md:px-10 py-5 md:py-6 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-slate-800 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 md:gap-4 group text-[10px] md:text-sm"
                                            >
                                                Submit Application
                                                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center group-hover:translate-x-2 transition-transform">
                                                    <ArrowRight size={18} />
                                                </div>
                                            </motion.button>
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>


                    </div>

                    {/* Footer Info */}
                    <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-12">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-secondary" />
                            <span className="text-sm uppercase font-bold tracking-widest text-slate-900">Industry Recognized</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-secondary" />
                            <span className="text-sm uppercase font-bold tracking-widest text-slate-900">Global Curriculum</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={16} className="text-secondary" />
                            <span className="text-sm uppercase font-bold tracking-widest text-slate-900">Portfolio Focused</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-100 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-xl"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full shadow-2xl relative overflow-hidden text-center"
                        >
                            {/* Decorative Sparkles */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10"
                            >
                                <Sparkles className="absolute top-10 left-10 text-primary" size={40} />
                                <Sparkles className="absolute bottom-10 right-10 text-secondary" size={30} />
                                <Sparkles className="absolute top-1/2 right-4 text-primary" size={20} />
                            </motion.div>

                            <div className="relative z-10">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", damping: 12, delay: 0.2 }}
                                    className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-green-200"
                                >
                                    <CheckCircle2 size={48} className="text-white" />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">
                                        Application <br /> <span className="text-primary">Submitted!</span>
                                    </h3>
                                    <p className="text-slate-500 font-bold text-lg mb-8 leading-relaxed">
                                        Thank you for choosing INSD. Your future in design starts here! Our career counsellors will contact you within 24 hours.
                                    </p>

                                    <div className="space-y-4">
                                        <button
                                            onClick={() => {
                                                setIsSubmitted(false);
                                                setStep(1);
                                                setFormData({
                                                    readyToStart: '',
                                                    industry: '',
                                                    fullName: '',
                                                    phone: '',
                                                    email: '',
                                                    city: '',
                                                    qualification: ''
                                                });
                                            }}
                                            className="w-full py-5 rounded-2xl bg-slate-900 text-white font-black uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group"
                                        >
                                            Awesome, Got it!
                                        </button>

                                        <div className="flex items-center justify-center gap-2 text-primary font-black uppercase text-xs tracking-widest animate-pulse">
                                            Check your email for more details
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default LeadForm;
