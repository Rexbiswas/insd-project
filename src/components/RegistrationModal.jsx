import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Sparkles, LogIn } from 'lucide-react';
import { useRegisterModal } from '../context/RegisterModalContext';



const RegistrationModal = () => {
    const { isOpen, closeModal } = useRegisterModal();
    const [authMode, setAuthMode] = useState('register'); // 'register' | 'login'
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        city: '',
        password: ''
    });
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setAuthMode('register');
                setStep(1);
                setIsSuccess(false);
                setFormData({ name: '', email: '', phone: '', course: '', city: '', password: '' });
                setLoginData({ email: '', password: '' });
            }, 500);
        }
    }, [isOpen]);

    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        if (step < 4) {
            setStep(step + 1);
            return;
        }
        setIsSubmitting(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate Login
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSuccess(true);
    };



    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Darker, blurrier backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                    />

                    {/* Glass Modal Container */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="relative w-full max-w-lg max-h-[90vh] flex flex-col rounded-[2.5rem] shadow-2xl"
                    >
                        {/* Glass Layer with Overflow Hidden for Border Radius */}
                        <div className="absolute inset-0 bg-white/10 backdrop-blur-[40px] border border-white/20 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] rounded-[2.5rem] overflow-hidden">
                            {/* Decorative Background Orbs inside the overflow-hidden layer */}
                            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-pink-500/30 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
                            <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-violet-600/30 rounded-full blur-[80px] pointer-events-none mix-blend-screen" />
                        </div>

                        {/* Content Scrollable Area */}
                        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full min-h-[750px] overflow-y-auto no-scrollbar">

                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/20 text-white/70 hover:text-white transition-all backdrop-blur-sm group z-50"
                            >
                                <X size={20} className="group-hover:rotate-90 transition-transform" />
                            </button>

                            {!isSuccess ? (
                                <div className="flex flex-col h-full">
                                    {/* Header */}
                                    <div className="mb-6 shrink-0">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono uppercase tracking-widest text-pink-300 mb-4 backdrop-blur-md shadow-lg shadow-pink-500/20">
                                            {authMode === 'register' ? <Sparkles size={10} /> : <LogIn size={10} />}
                                            <span>{authMode === 'register' ? 'Join the Elite' : 'Welcome Back'}</span>
                                        </div>
                                        <h2 className="text-3xl font-black text-white leading-tight">
                                            {authMode === 'register' ? (
                                                <>Begin Your <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-violet-300">Design Legacy</span></>
                                            ) : (
                                                <>Access <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-pink-300 to-violet-300">Your Terminal</span></>
                                            )}
                                        </h2>
                                    </div>

                                    {/* Google Login Button */}


                                    {/* Form Steps */}
                                    {authMode === 'register' ? (
                                        <form onSubmit={handleRegisterSubmit} className="flex-1 flex flex-col justify-between">
                                            <div className="space-y-6">
                                                <AnimatePresence mode="wait">
                                                    {step === 1 && (
                                                        <motion.div
                                                            key="step1"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="space-y-4"
                                                        >
                                                            <div className="space-y-2">
                                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 ml-2">Full Name</label>
                                                                <input
                                                                    autoFocus
                                                                    type="text"
                                                                    placeholder="Enter your full name"
                                                                    value={formData.name}
                                                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                                                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-pink-500/50 transition-all shadow-inner"
                                                                />
                                                            </div>
                                                            <div className="space-y-2">
                                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 ml-2">Phone Number</label>
                                                                <input
                                                                    type="tel"
                                                                    placeholder="+91 XXXXX XXXXX"
                                                                    value={formData.phone}
                                                                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                                                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-pink-500/50 transition-all shadow-inner"
                                                                />
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {step === 2 && (
                                                        <motion.div
                                                            key="step2"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="space-y-4"
                                                        >
                                                            <div className="space-y-2">
                                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 ml-2">Email Address</label>
                                                                <input
                                                                    autoFocus
                                                                    type="email"
                                                                    placeholder="hello@example.com"
                                                                    value={formData.email}
                                                                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                                                                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-pink-500/50 transition-all shadow-inner"
                                                                />
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {step === 3 && (
                                                        <motion.div
                                                            key="step3"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="space-y-4"
                                                        >
                                                            <div className="space-y-2">
                                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 ml-2">Area of Interest</label>
                                                                <select
                                                                    autoFocus
                                                                    value={formData.course}
                                                                    onChange={e => setFormData({ ...formData, course: e.target.value })}
                                                                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:bg-black/30 focus:border-pink-500/50 transition-all shadow-inner appearance-none cursor-pointer"
                                                                >
                                                                    <option value="" className="bg-slate-900 text-slate-400">Select a Program</option>
                                                                    <option value="fashion" className="bg-slate-900">Fashion Design</option>
                                                                    <option value="interior" className="bg-slate-900">Interior Design</option>
                                                                    <option value="graphic" className="bg-slate-900">Graphic Design</option>
                                                                    <option value="animation" className="bg-slate-900">Animation</option>
                                                                </select>
                                                            </div>
                                                        </motion.div>
                                                    )}

                                                    {step === 4 && (
                                                        <motion.div
                                                            key="step4"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            exit={{ opacity: 0, x: -20 }}
                                                            className="space-y-4"
                                                        >
                                                            <div className="space-y-2">
                                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-300 ml-2">Current City</label>
                                                                <input
                                                                    autoFocus
                                                                    type="text"
                                                                    placeholder="e.g. New Delhi"
                                                                    value={formData.city}
                                                                    onChange={e => setFormData({ ...formData, city: e.target.value })}
                                                                    className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-pink-500/50 transition-all shadow-inner"
                                                                />
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {/* Footer Actions */}
                                            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between shrink-0">
                                                {step > 1 ? (
                                                    <button
                                                        type="button"
                                                        onClick={handleBack}
                                                        className="text-slate-400 hover:text-white text-sm font-bold uppercase tracking-wider transition-colors"
                                                    >
                                                        Back
                                                    </button>
                                                ) : (
                                                    <div className="flex gap-1">
                                                        {[1, 2, 3, 4].map(i => (
                                                            <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i <= step ? 'w-6 bg-pink-500' : 'w-2 bg-white/20'}`} />
                                                        ))}
                                                    </div>
                                                )}

                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="group relative px-6 py-3 bg-white text-black rounded-xl font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all overflow-hidden"
                                                >
                                                    <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <span className="relative z-10 group-hover:text-white flex items-center gap-2">
                                                        {step === 4 ? (isSubmitting ? 'Sending...' : 'Submit Request') : 'Next'}
                                                        {!isSubmitting && <ArrowRight size={16} />}
                                                    </span>
                                                </button>
                                            </div>

                                            <div className="text-center mt-4 shrink-0">
                                                <button
                                                    type="button"
                                                    onClick={() => setAuthMode('login')}
                                                    className="text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors py-2"
                                                >
                                                    Already a member? <span className="text-pink-400 underline underline-offset-4">Login here</span>
                                                </button>
                                            </div>
                                        </form>
                                    ) : (
                                        <form onSubmit={handleLoginSubmit} className="flex-1 flex flex-col justify-between">
                                            <div className="space-y-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 ml-2">Email</label>
                                                    <input autoFocus type="email" placeholder="hello@example.com" value={loginData.email} onChange={e => setLoginData({ ...loginData, email: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-pink-500/50 transition-all shadow-inner" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300 ml-2">Password</label>
                                                    <input type="password" placeholder="••••••••" value={loginData.password} onChange={e => setLoginData({ ...loginData, password: e.target.value })} className="w-full bg-black/20 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:bg-black/30 focus:border-pink-500/50 transition-all shadow-inner" />
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <button type="button" className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-white transition-colors">Forgot Password?</button>
                                                    <button
                                                        type="button"
                                                        onClick={() => {
                                                            setAuthMode('register');
                                                            setStep(1);
                                                        }}
                                                        className="text-[10px] uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
                                                    >
                                                        New to the collective? <span className="text-pink-400 underline underline-offset-4">Apply Now</span>
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Login Footer Actions */}
                                            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 shrink-0">
                                                <button type="submit" disabled={isSubmitting} className="w-full group relative px-6 py-4 bg-white text-black rounded-xl font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all overflow-hidden">
                                                    <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                    <span className="relative z-10 group-hover:text-white flex items-center justify-center gap-2">
                                                        {isSubmitting ? 'Accessing...' : 'Enter System'}
                                                    </span>
                                                </button>


                                            </div>
                                        </form>
                                    )}
                                </div>
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 15 }}
                                        className="w-24 h-24 rounded-full bg-linear-to-tr from-green-400 to-emerald-600 flex items-center justify-center shadow-2xl shadow-green-500/30"
                                    >
                                        <Check size={48} className="text-white" />
                                    </motion.div>
                                    <div>
                                        <h3 className="text-2xl font-black text-white uppercase mb-2">{authMode === 'register' ? 'Application Received' : 'Access Granted'}</h3>
                                        <p className="text-slate-300 max-w-xs mx-auto">
                                            {authMode === 'register' ? 'Welcome to the network. Our admissions team will contact you shortly.' : 'Welcome back, agent. Synchronizing your dashboard...'}
                                        </p>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="px-8 py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white font-bold uppercase tracking-wider transition-all backdrop-blur-md"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default RegistrationModal;
