import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Mail, BookOpen, MapPin, Sparkles, Send, Check, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { useRegisterModal } from '../context/RegisterModalContext';

const RegistrationModal = () => {
    const { isOpen, closeModal } = useRegisterModal();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        course: '',
        city: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setTimeout(() => {
                setStep(1);
                setIsSuccess(false);
                setFormData({ name: '', email: '', course: '', city: '' });
            }, 500);
        }
    }, [isOpen]);

    const nextStep = () => {
        if (step < 4) {
            gsap.to(".modal-reg-inner", {
                x: -30,
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    setStep(step + 1);
                    gsap.fromTo(".modal-reg-inner", { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4 });
                }
            });
        }
    };

    const prevStep = () => {
        if (step > 1) {
            gsap.to(".modal-reg-inner", {
                x: 30,
                opacity: 0,
                duration: 0.3,
                onComplete: () => {
                    setStep(step - 1);
                    gsap.fromTo(".modal-reg-inner", { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4 });
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (!isOpen && !isSuccess) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center p-4 md:p-6" style={{ zIndex: 9999 }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-2xl bg-slate-900/40 backdrop-blur-[30px] backdrop-saturate-150 border border-white/20 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 pointer-events-none opacity-20">
                            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-linear-to-br from-pink-500/10 via-transparent to-violet-600/10" />
                        </div>

                        {/* Close Button */}

                        <button
                            onClick={closeModal}
                            className="absolute top-6 right-6 md:top-8 md:right-8 z-50 p-2 text-white/40 hover:text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        <div className="p-8 md:p-16">
                            {!isSuccess ? (
                                <>
                                    {/* Header */}
                                    <div className="mb-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="w-8 h-[2px] bg-pink-500" />
                                            <span className="text-pink-500 font-mono text-[10px] uppercase tracking-[0.4em]">Phase 0{step}</span>
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter italic text-white leading-none">
                                            The <br /> <span className="text-transparent stroke-text-white stroke-white!">Collective.</span>
                                        </h2>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit} className="relative">
                                        <div className="modal-reg-inner min-h-[220px] flex flex-col justify-center">
                                            {step === 1 && (
                                                <div className="space-y-6">
                                                    <div className="group border-b border-white/10 py-3 transition-all focus-within:border-pink-500">
                                                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Full Name</label>
                                                        <input
                                                            autoFocus
                                                            type="text"
                                                            required
                                                            placeholder="IDENTIFY YOURSELF"
                                                            value={formData.name}
                                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                            className="w-full bg-transparent text-xl md:text-3xl font-black uppercase outline-none text-white placeholder:text-white/5"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 2 && (
                                                <div className="space-y-6">
                                                    <div className="group border-b border-white/10 py-3 transition-all focus-within:border-violet-500">
                                                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Email Uplink</label>
                                                        <input
                                                            autoFocus
                                                            type="email"
                                                            required
                                                            placeholder="EMAIL@DOMAIN.COM"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                            className="w-full bg-transparent text-xl md:text-3xl font-black uppercase outline-none text-white placeholder:text-white/5"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {step === 3 && (
                                                <div className="space-y-6">
                                                    <div className="group border-b border-white/10 py-3 transition-all focus-within:border-indigo-500">
                                                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Discipline</label>
                                                        <select
                                                            autoFocus
                                                            required
                                                            value={formData.course}
                                                            onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                                                            className="w-full bg-transparent text-xl md:text-3xl font-black uppercase outline-none appearance-none cursor-pointer text-white"
                                                        >
                                                            <option value="" className="bg-[#333]">SELECT CORE</option>
                                                            <option value="fashion" className="bg-[#333]">FASHION DESIGN</option>
                                                            <option value="interior" className="bg-[#333]">INTERIOR DESIGN</option>
                                                            <option value="graphic" className="bg-[#333]">GRAPHIC DESIGN</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            )}

                                            {step === 4 && (
                                                <div className="space-y-6">
                                                    <div className="group border-b border-white/10 py-3 transition-all focus-within:border-pink-500">
                                                        <label className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-1">City Coordinates</label>
                                                        <input
                                                            autoFocus
                                                            type="text"
                                                            required
                                                            placeholder="YOUR CURRENT Hub"
                                                            value={formData.city}
                                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                                            className="w-full bg-transparent text-xl md:text-3xl font-black uppercase outline-none text-white placeholder:text-white/5"
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Actions */}
                                        <div className="mt-12 flex items-center justify-between">
                                            {step > 1 && (
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="text-white/40 hover:text-white font-mono text-[10px] uppercase tracking-widest transition-colors flex items-center gap-2"
                                                >
                                                    &larr; Previous
                                                </button>
                                            )}

                                            {step < 4 ? (
                                                <button
                                                    type="button"
                                                    onClick={nextStep}
                                                    className="ml-auto flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-black uppercase tracking-widest text-[10px] hover:bg-pink-600 hover:text-white transition-all group/btn"
                                                >
                                                    Next Sequence <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            ) : (
                                                <button
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="ml-auto px-10 py-5 bg-linear-to-r from-pink-600 to-violet-600 text-white rounded-full font-black uppercase tracking-widest text-[10px] hover:scale-105 transition-all shadow-xl"
                                                >
                                                    {isSubmitting ? 'Uplinking...' : 'Submit Registry'}
                                                </button>
                                            )}
                                        </div>
                                    </form>

                                    {/* Progress Dots */}
                                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
                                        {[1, 2, 3, 4].map((i) => (
                                            <div
                                                key={i}
                                                className={`h-1 transition-all duration-300 rounded-full ${i === step ? 'w-8 bg-pink-500' : 'w-1 bg-white/20'}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="text-center py-10 space-y-8">
                                    <div className="relative w-24 h-24 mx-auto">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", damping: 12 }}
                                            className="absolute inset-0 bg-pink-600 rounded-full flex items-center justify-center"
                                        >
                                            <Check size={40} className="text-white" />
                                        </motion.div>
                                        <motion.div
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute -inset-4 border border-pink-500/30 rounded-full"
                                        />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter text-white">Uplinked <br /> <span className="text-transparent stroke-text-white stroke-white!">Successful.</span></h3>
                                        <p className="text-slate-500 text-sm max-w-xs mx-auto">Welcome to the collective. Our agents will synchronize with your frequency shortly.</p>
                                    </div>
                                    <button
                                        onClick={closeModal}
                                        className="mt-8 px-10 py-4 border border-white/20 rounded-full font-bold uppercase tracking-[0.3em] text-[10px] text-white hover:bg-white hover:text-black transition-all"
                                    >
                                        Close Terminal
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
