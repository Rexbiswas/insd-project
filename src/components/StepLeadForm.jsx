import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, Mail, MapPin, ArrowRight, ArrowLeft, Sparkles, MessageSquare } from 'lucide-react';

const StepLeadForm = () => {
    const sectionRef = useRef(null);
    const [choice, setChoice] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        marketingConsent: false
    });
    const [submitted, setSubmitted] = useState(false);
    const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
    const [isOtherSelected, setIsOtherSelected] = useState(false);
    const [customLocation, setCustomLocation] = useState('');
    const [loading, setLoading] = useState(false);

    const locations = [
        { city: "New Delhi", state: "Delhi NCR" },
        { city: "Gurugram", state: "Haryana" },
        { city: "Noida", state: "Uttar Pradesh" },
        { city: "Mumbai", state: "Maharashtra" },
        { city: "Bangalore", state: "Karnataka" },
        { city: "Pune", state: "Maharashtra" },
        { city: "Hyderabad", state: "Telangana" },
        { city: "Kolkata", state: "West Bengal" },
        { city: "Ahmedabad", state: "Gujarat" },
        { city: "Chandigarh", state: "Punjab" },
        { city: "Chennai", state: "Tamil Nadu" },
        { city: "Other", state: "India" }
    ];

    const handleChoice = (val) => {
        setChoice(val);
        
        // Auto-scroll to top of section when choice is made
        setTimeout(() => {
            if (sectionRef.current) {
                const navHeight = 100; // Account for fixed navbar
                const elementPosition = sectionRef.current.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }, 100);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/step-leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    mobile: formData.mobile,
                    email: formData.email,
                    city: formData.city,
                    marketingConsent: formData.marketingConsent,
                    readyToStart: choice,
                    inquiryType: choice === 'yes' ? "Talk to our Career Expert" : "Let us Career Decide"
                }),
            });

            const data = await response.json();
            if (data.success) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert("Connection error. Please check if backend is running.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section ref={sectionRef} id="step-lead-form" className="relative py-24 md:py-32 bg-white overflow-hidden selection:bg-primary selection:text-white">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Header Area - Transformed based on state */}
                    <div className="text-center mb-12 md:mb-20">
                        <motion.span 
                            animate={{ opacity: submitted ? 0 : 1, y: submitted ? -20 : 0 }}
                            className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-8"
                        >
                            {submitted ? "Success" : "Take the first step"}
                        </motion.span>
                        
                        <motion.h2 
                            layout
                            animate={{ 
                                scale: choice ? 0.8 : 1,
                                opacity: submitted ? 0 : 1
                            }}
                            className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-slate-950 leading-[0.9] mb-8"
                        >
                            {choice 
                                ? (choice === 'yes' ? "Talk to our Career Expert" : "Let us Career Decide")
                                : <>Are You Ready to Start <br /> learning <span className="text-primary italic font-serif">Job-Ready</span> <br /> Skills?</>
                            }
                        </motion.h2>

                        {!choice && !submitted && (
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mt-12"
                            >
                                <button
                                    onClick={() => handleChoice('yes')}
                                    className="group relative w-full sm:w-64 h-20 bg-transparent border-2 border-slate-950 text-slate-950 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:text-white active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-slate-950 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                                    <span className="relative z-10 text-2xl font-black uppercase tracking-widest inline-block transition-transform duration-300 group-hover:scale-110">
                                        Yes
                                    </span>
                                </button>

                                <button
                                    onClick={() => handleChoice('no')}
                                    className="group relative w-full sm:w-64 h-20 bg-white border-2 border-slate-200 text-slate-400 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-slate-800 hover:text-slate-900 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] active:scale-95"
                                >
                                    <div className="absolute inset-0 bg-slate-50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                                    <span className="relative z-10 text-2xl font-black uppercase tracking-widest inline-block transition-transform duration-300 group-hover:scale-110">
                                        No
                                    </span>
                                </button>
                            </motion.div>
                        )}
                    </div>

                    <AnimatePresence mode="wait">
                        {choice && !submitted && (
                            <motion.div
                                key="form-expansion"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="bg-slate-950 rounded-[3rem] p-8 md:p-14 border border-white/10 shadow-3xl text-white relative">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                                        {choice === 'yes' ? <MessageSquare size={120} /> : <Sparkles size={120} />}
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
                                        <div className="lg:col-span-2 space-y-6">
                                            <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                                                {choice === 'yes'
                                                    ? "Our industry mentors are ready to guide you through your design journey. Excellence awaits."
                                                    : "Unsure about your path? Our career counselors will help identify your creative strengths."
                                                }
                                            </p>
                                            <div className="flex items-center gap-3 text-primary">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                                <span className="text-[10px] font-black uppercase tracking-[0.3em]">Institutional Intake 2026</span>
                                            </div>
                                        </div>

                                        <div className="lg:col-span-3">
                                            <form onSubmit={handleSubmit} className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="relative group">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                        <input
                                                            required
                                                            type="text"
                                                            placeholder="Full Name"
                                                            className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all font-bold text-sm"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className="relative group">
                                                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                        <input
                                                            required
                                                            type="tel"
                                                            placeholder="Mobile Number"
                                                            className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-secondary/50 transition-all font-bold text-sm"
                                                            value={formData.mobile}
                                                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="relative group">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                                    <input
                                                        required
                                                        type="email"
                                                        placeholder="Email Address"
                                                        className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 transition-all font-bold text-sm"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>

                                                <div className="relative">
                                                    <div
                                                        onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                                                        className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white flex items-center justify-between cursor-pointer focus-within:border-primary/50 hover:bg-white/10 transition-all font-bold text-sm group"
                                                    >
                                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover:text-primary transition-colors" />
                                                        <span className={formData.city ? "text-white" : "text-slate-600"}>
                                                            {formData.city || "Select City"}
                                                        </span>
                                                        <motion.div animate={{ rotate: isCityDropdownOpen ? 180 : 0 }}>
                                                            <ArrowRight className="w-4 h-4 rotate-90 opacity-40 hover:opacity-100" />
                                                        </motion.div>
                                                    </div>
                                                </div>

                                                {/* Marketing Consent */}
                                                <div className="pt-2 pb-2">
                                                    <label className="flex items-start gap-4 cursor-pointer group/consent">
                                                        <div className={`mt-1 md:mt-0 w-6 h-6 rounded-md border-2 shrink-0 flex items-center justify-center transition-all ${formData.marketingConsent ? 'bg-primary border-primary shadow-[0_0_15px_rgba(219,52,54,0.4)]' : 'border-white/20 hover:border-white/40 bg-white/5'}`}>
                                                            {formData.marketingConsent && <ArrowRight className="text-white w-4 h-4" />}
                                                        </div>
                                                        <input 
                                                            type="checkbox" 
                                                            checked={formData.marketingConsent}
                                                            onChange={(e) => setFormData({ ...formData, marketingConsent: e.target.checked })}
                                                            className="hidden" 
                                                        />
                                                        <span className="text-slate-400 text-[10px] md:text-xs font-medium select-none group-hover/consent:text-white transition-colors">
                                                            I agree to give my consent to receive updates through SMS/Email*
                                                        </span>
                                                    </label>
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                                                    <button
                                                        disabled={loading}
                                                        type="submit"
                                                        className="flex-1 h-14 bg-white text-slate-950 rounded-xl font-black uppercase tracking-[0.2em] text-xs hover:bg-primary hover:text-white transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-50"
                                                    >
                                                        {loading ? "Processing..." : "Submit Request"}
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => { setChoice(null); setIsOtherSelected(false); }}
                                                        className="px-6 h-14 bg-white/5 border border-white/10 rounded-xl text-white/40 hover:text-white hover:bg-white/10 transition-all font-black uppercase tracking-widest text-xs flex items-center justify-center"
                                                    >
                                                        <ArrowLeft className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {submitted && (
                            <motion.div
                                key="success-state"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-slate-950 p-12 md:p-20 rounded-[4rem] text-center text-white relative overflow-hidden"
                            >
                                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary via-secondary to-primary" />
                                <div className="p-8 inline-flex bg-primary/10 rounded-3xl mb-8">
                                    <Sparkles className="w-10 h-10 text-primary animate-pulse" />
                                </div>
                                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Request Sent</h2>
                                <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                                    Thank you, {formData.name.split(' ')[0]}! Our mentor will connect with you within 24 business hours.
                                </p>
                                <button
                                    onClick={() => { setChoice(null); setSubmitted(false); }}
                                    className="px-10 py-4 bg-white/5 border border-white/10 hover:bg-white hover:text-slate-950 rounded-full text-xs font-black uppercase tracking-[0.2em] transition-all"
                                >
                                    Finish
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default StepLeadForm;
