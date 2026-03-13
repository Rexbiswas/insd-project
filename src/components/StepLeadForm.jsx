import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Phone, MapPin, ArrowRight, ArrowLeft, Sparkles, MessageSquare } from 'lucide-react';

const StepLeadForm = () => {
    const [step, setStep] = useState(1);
    const [choice, setChoice] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        city: ''
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
        setStep(2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5001/api/step-leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    mobile: formData.mobile,
                    city: formData.city,
                    readyToStart: choice,
                    inquiryType: choice === 'yes' ? "Talk to Expert" : "Let us Career Decide"
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
        <section id="step-lead-form" className="relative py-24 md:py-32 bg-white overflow-hidden selection:bg-primary selection:text-white">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">

                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center"
                            >
                                <span className="inline-block px-4 py-1 rounded-full bg-slate-100 text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-8">
                                    Take the first step
                                </span>
                                <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-950 leading-[0.9] mb-12">
                                    Are You Ready to Start <br /> learning <span className="text-primary italic font-serif">Job-Ready</span> <br /> Skills?
                                </h2>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
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
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && !submitted && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-slate-900 rounded-[2.5rem] md:rounded-[3rem] shadow-2xl flex flex-col md:flex-row min-h-[500px] border border-white/5 relative"
                            >
                                {/* Form Sidebar Message - Rounded specific to side */}
                                <div className="w-full md:w-2/5 p-12 bg-linear-to-br from-slate-950 to-slate-900 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/10 rounded-t-[2.5rem] md:rounded-t-none md:rounded-l-[3rem]">

                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-8">
                                        {choice === 'yes' ? <MessageSquare className="text-primary" /> : <Sparkles className="text-secondary" />}
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                                        {choice === 'yes' ? "Talk to Expert" : "Let us Career Decide"}
                                    </h3>
                                    <p className="text-slate-400 text-sm md:text-base font-medium leading-relaxed">
                                        {choice === 'yes'
                                            ? "Our industry mentors are ready to guide you through your design journey. Share your details to schedule a call."
                                            : "Unsure about your path? Our career counselors will help identify your creative strengths and the perfect program for you."
                                        }
                                    </p>


                                </div>

                                {/* Main Form */}
                                <div className="w-full md:w-3/5 p-12 flex flex-col justify-center bg-slate-900/50 backdrop-blur-3xl">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="space-y-4">
                                            <div className="relative group">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-primary transition-colors" />
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Full Name"
                                                    className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-medium"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                />
                                            </div>

                                            <div className="relative group">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-secondary transition-colors" />
                                                <input
                                                    required
                                                    type="tel"
                                                    placeholder="Mobile Number"
                                                    className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white placeholder-slate-600 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all font-medium"
                                                    value={formData.mobile}
                                                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                                                />
                                            </div>

                                            <div className="relative">
                                                <div
                                                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                                                    className="w-full h-14 bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 text-white flex items-center justify-between cursor-pointer focus-within:border-primary/50 hover:bg-white/10 transition-all font-medium group"
                                                >
                                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-hover:text-primary transition-colors" />
                                                    <span className={formData.city ? "text-white" : "text-slate-600"}>
                                                        {formData.city || "Select City"}
                                                    </span>
                                                    <motion.div
                                                        animate={{ rotate: isCityDropdownOpen ? 180 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                                                            <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                                        </svg>
                                                    </motion.div>
                                                </div>

                                                <AnimatePresence>
                                                    {isCityDropdownOpen && (
                                                        <div className="absolute inset-0 z-[100]">
                                                            {/* Local Backdrop to focus on dropdown */}
                                                            <motion.div
                                                                initial={{ opacity: 0 }}
                                                                animate={{ opacity: 1 }}
                                                                exit={{ opacity: 0 }}
                                                                onClick={() => setIsCityDropdownOpen(false)}
                                                                className="fixed md:absolute inset-0 bg-slate-950/60 backdrop-blur-md rounded-xl z-10 cursor-pointer"
                                                            />

                                                            <motion.div
                                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                                className="absolute top-0 left-0 w-full z-20 bg-slate-900 border border-white/20 rounded-xl overflow-hidden shadow-[0_30px_90px_-15px_rgba(0,0,0,0.8)] p-2"
                                                            >
                                                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 mb-2">
                                                                    <span className="text-[10px] uppercase font-black tracking-widest text-primary">Choose your Location</span>
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setIsCityDropdownOpen(false)}
                                                                        className="text-white/40 hover:text-white transition-colors"
                                                                    >
                                                                        <ArrowLeft className="w-4 h-4 rotate-90" />
                                                                    </button>
                                                                </div>
                                                                <div className="max-h-64 overflow-y-auto custom-scrollbar pr-1">
                                                                    {isOtherSelected ? (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, x: 20 }}
                                                                            animate={{ opacity: 1, x: 0 }}
                                                                            className="p-2 space-y-4"
                                                                        >
                                                                            <div className="relative group/input">
                                                                                <input
                                                                                    autoFocus
                                                                                    type="text"
                                                                                    placeholder="Enter City / State"
                                                                                    className="w-full h-12 bg-white/5 border border-white/10 rounded-xl px-4 text-white placeholder-slate-600 focus:outline-none focus:border-primary transition-all font-bold text-sm"
                                                                                    value={customLocation}
                                                                                    onChange={(e) => setCustomLocation(e.target.value)}
                                                                                    onKeyDown={(e) => {
                                                                                        if (e.key === 'Enter' && customLocation) {
                                                                                            setFormData({ ...formData, city: `${customLocation}, India` });
                                                                                            setIsCityDropdownOpen(false);
                                                                                            setIsOtherSelected(false);
                                                                                        }
                                                                                    }}
                                                                                />
                                                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-black uppercase text-slate-500 tracking-widest pointer-events-none">
                                                                                    , India
                                                                                </div>
                                                                            </div>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => {
                                                                                    if (customLocation) {
                                                                                        setFormData({ ...formData, city: `${customLocation}, India` });
                                                                                        setIsCityDropdownOpen(false);
                                                                                        setIsOtherSelected(false);
                                                                                    }
                                                                                }}
                                                                                className="w-full h-12 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all duration-300 shadow-lg shadow-primary/20"
                                                                            >
                                                                                Set Location
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                onClick={() => setIsOtherSelected(false)}
                                                                                className="w-full text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-white transition-colors py-2"
                                                                            >
                                                                                Cancel & Go Back
                                                                            </button>
                                                                        </motion.div>
                                                                    ) : (
                                                                        locations.map((loc, idx) => (
                                                                            <div
                                                                                key={idx}
                                                                                onClick={() => {
                                                                                    if (loc.city === "Other") {
                                                                                        setIsOtherSelected(true);
                                                                                    } else {
                                                                                        setFormData({ ...formData, city: `${loc.city}, ${loc.state}` });
                                                                                        setIsCityDropdownOpen(false);
                                                                                    }
                                                                                }}
                                                                                className={`px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer mb-1 flex items-center justify-between group/item ${formData.city.includes(loc.city) && loc.city !== "Other" ? 'bg-primary text-white' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
                                                                            >
                                                                                <div className="flex flex-col">
                                                                                    <span className="text-sm font-black uppercase tracking-tight">{loc.city}</span>
                                                                                    <span className={`text-[10px] uppercase tracking-widest font-bold ${formData.city.includes(loc.city) && loc.city !== "Other" ? 'text-white/60' : 'text-slate-500 group-hover/item:text-primary'}`}>
                                                                                        {loc.state}
                                                                                    </span>
                                                                                </div>
                                                                                {formData.city.includes(loc.city) && loc.city !== "Other" && (
                                                                                    <motion.div layoutId="check-loc" className="w-2 h-2 rounded-full bg-white shadow-[0_0_15px_white]" />
                                                                                )}
                                                                            </div>
                                                                        ))
                                                                    )}
                                                                </div>
                                                            </motion.div>
                                                        </div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>

                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="w-full h-14 bg-white text-slate-950 rounded-xl font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-white/5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                        >
                                            {loading ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                                                    Processing...
                                                </>
                                            ) : "Submit Request"}
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => { setStep(1); setChoice(null); }}
                                            className="w-full flex items-center justify-center gap-2 text-white/40 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest group pt-2"
                                        >
                                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Change your mind? Go Back
                                        </button>


                                    </form>
                                </div>
                            </motion.div>
                        )}

                        {submitted && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center bg-slate-950 p-16 rounded-[4rem] text-white overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-primary/20 blur-[100px]" />
                                <div className="relative z-10">
                                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(219,52,54,0.5)]">
                                        <Sparkles className="w-10 h-10 text-white" />
                                    </div>
                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Request Received</h2>
                                    <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                                        Thank you, {formData.name.split(' ')[0]}! Our mentor will connect with you within 24 business hours.
                                    </p>
                                    <button
                                        onClick={() => { setStep(1); setSubmitted(false); setChoice(null); }}
                                        className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all"
                                    >
                                        Go Back
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </section>
    );
};

export default StepLeadForm;
