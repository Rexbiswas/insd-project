'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, ChevronDown, Send } from 'lucide-react';
import { stateCityData } from '../data/locations';

const AdmissionFormWhite = ({ isModal = false, onClose, title, subtitle, ctaText, successMsg }) => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        qualification: '',
        course: '',
        state: '',
        city: ''
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const states = ["Select State", ...Object.keys(stateCityData)];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        let finalValue = type === 'checkbox' ? checked : value;
        
        if (name === 'mobile') {
            finalValue = value.replace(/\D/g, '').slice(0, 10);
        }

        if (name === 'state') {
            setFormData(prev => ({
                ...prev,
                state: finalValue,
                city: ''
            }));
            return;
        }

        setFormData(prev => ({
            ...prev,
            [name]: finalValue
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.mobile.length !== 10) {
            setErrorMessage("Please enter a valid 10-digit mobile number.");
            setStatus('error');
            return;
        }

        if (!formData.state || formData.state === states[0]) {
            setErrorMessage("Please select a valid State.");
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');

        try {
            const response = await fetch('/api/step-leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: `+91${formData.mobile}`,
                    email: formData.email,
                    qualification: formData.qualification,
                    industry: formData.course,
                    state: formData.state,
                    city: formData.city,
                    marketingConsent: true
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
                setStatus('success');
                setFormData({
                    name: '',
                    mobile: '',
                    email: '',
                    qualification: '',
                    course: '',
                    state: '',
                    city: ''
                });
            } else {
                setErrorMessage(data.message || `Submission failed (${response.status}). Please try again.`);
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission Error:', error);
            if (error.name === 'TypeError' && error.message.includes('fetch')) {
                setErrorMessage("Connection Error: Server is unreachable. Please check your internet connection.");
            } else {
                setErrorMessage(error.message || "An unexpected error occurred. Please try again.");
            }
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={`w-full ${isModal ? 'p-6 md:p-10' : 'p-8 md:p-12'} bg-white text-center rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-slate-100 flex flex-col items-center justify-center min-h-[380px]`}>
                <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 text-green-500 shadow-xl shadow-green-500/10"
                >
                    <CheckCircle2 size={36} />
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight mb-2">
                    Inquiry Submitted!
                </h3>
                <p className="text-slate-500 text-sm md:text-base max-w-sm mx-auto mb-8 font-medium">
                    {successMsg || "Thank you for reaching out. An expert career counselor will connect with you within 24 hours."}
                </p>
                <button
                    onClick={() => {
                        setStatus('idle');
                        if (onClose) onClose();
                    }}
                    className="px-8 py-3.5 bg-slate-900 hover:bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-full transition-all duration-300 shadow-xl"
                >
                    {isModal ? "Done" : "Submit Another Inquiry"}
                </button>
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden">
            <div className="bg-white rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-slate-100 p-6 md:p-10 relative overflow-hidden">
                {isModal && onClose && (
                    <button 
                        onClick={onClose}
                        className="absolute right-6 top-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition-colors z-20"
                    >
                        <X size={18} />
                    </button>
                )}

                <div className="relative z-10">
                    <div className="mb-6 md:mb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black tracking-widest uppercase mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                            Direct Admissions 2026
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 uppercase tracking-tight">
                            {title || "Enquire Now"}
                        </h3>
                        {subtitle && <p className="text-slate-500 text-xs md:text-sm mt-1 font-medium">{subtitle}</p>}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Name Input */}
                            <div className="space-y-1">
                                <label className="text-[10px] md:text-xs font-black text-slate-800 ml-1 uppercase tracking-wider">Full Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Enter your full name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-10 md:h-12 px-5 bg-slate-50/50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#134a84] text-slate-900 font-bold placeholder:text-slate-400 placeholder:font-normal text-sm md:text-base"
                                />
                            </div>

                            {/* Mobile Input */}
                            <div className="space-y-1">
                                <label className="text-[10px] md:text-xs font-black text-slate-800 ml-1 uppercase tracking-wider">Mobile Number</label>
                                <div className="relative flex items-center">
                                    <div className="absolute left-4 text-xs font-bold text-slate-400 border-r border-slate-200 pr-2">
                                        +91
                                    </div>
                                    <input 
                                        type="tel" 
                                        name="mobile"
                                        inputMode="numeric"
                                        placeholder="10-digit number"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-10 md:h-12 pl-14 pr-5 bg-slate-50/50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#134a84] text-slate-900 font-bold placeholder:text-slate-400 placeholder:font-normal text-sm md:text-base"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* Email Input */}
                            <div className="space-y-1">
                                <label className="text-[10px] md:text-xs font-black text-slate-800 ml-1 uppercase tracking-wider">Email Address</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    placeholder="example@mail.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-10 md:h-12 px-5 bg-slate-50/50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#134a84] text-slate-900 font-bold placeholder:text-slate-400 placeholder:font-normal text-sm md:text-base"
                                />
                            </div>

                            {/* Qualification Dropdown */}
                            <div className="space-y-1">
                                <label className="text-[10px] md:text-xs font-black text-slate-800 ml-1 uppercase tracking-wider">Current Qualification</label>
                                <div className="relative">
                                    <select 
                                        name="qualification"
                                        value={formData.qualification}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-10 md:h-12 px-5 bg-slate-50/50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#134a84] appearance-none text-slate-900 font-bold text-sm md:text-base cursor-pointer"
                                    >
                                        <option value="" disabled>Select Qualification</option>
                                        <option value="10th Pass">10th Pass</option>
                                        <option value="Pursuing 12th">Pursuing 12th</option>
                                        <option value="Completed 12th">Completed 12th</option>
                                        <option value="Graduate">Graduate</option>
                                        <option value="Postgraduate">Postgraduate</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Course of Interest */}
                        <div className="grid grid-cols-1">
                            <div className="space-y-1">
                                <label className="text-[10px] md:text-xs font-black text-slate-800 ml-1 uppercase tracking-wider">Course of Interest</label>
                                <div className="relative">
                                    <select 
                                        name="course"
                                        value={formData.course}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-10 md:h-12 px-5 bg-slate-50/50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#134a84] appearance-none text-slate-900 font-bold text-sm md:text-base cursor-pointer"
                                    >
                                        <option value="" disabled>Select Course</option>
                                        <option value="Fashion Design">Fashion Design</option>
                                        <option value="Interior Design">Interior Design</option>
                                        <option value="Graphic Design">Graphic Design</option>
                                        <option value="Animation VFX">Animation VFX</option>
                                        <option value="UI/UX Design">UI/UX Design</option>
                                        <option value="Jewellery Design">Jewellery Design</option>
                                        <option value="Photography">Photography</option>
                                        <option value="Beauty Make-up">Beauty Make-up</option>
                                        <option value="Textile Design">Textile Design</option>
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            {/* State Dropdown */}
                            <div className="space-y-1">
                                <label className="text-[10px] md:text-xs font-black text-slate-800 ml-1 uppercase tracking-wider">State</label>
                                <div className="relative">
                                    <select 
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        required
                                        className="w-full h-10 md:h-12 px-5 bg-slate-50/50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#134a84] appearance-none text-slate-900 font-bold text-sm md:text-base cursor-pointer"
                                    >
                                        {states.map(opt => (
                                            <option key={opt} value={opt === states[0] ? "" : opt} disabled={opt === states[0]}>
                                                {opt}
                                            </option>
                                        ))}
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>

                            {/* City Dropdown */}
                            <div className="space-y-1">
                                <label className="text-[10px] md:text-xs font-black text-slate-800 ml-1 uppercase tracking-wider">City</label>
                                <div className="relative">
                                    <select 
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        disabled={!formData.state}
                                        required
                                        className="w-full h-10 md:h-12 px-5 bg-slate-50/50 border border-slate-200 rounded-xl md:rounded-2xl focus:outline-none focus:border-[#134a84] appearance-none text-slate-900 font-bold text-sm md:text-base cursor-pointer disabled:opacity-50"
                                    >
                                        <option value="">Select City</option>
                                        {(formData.state ? stateCityData[formData.state] : []).map(city => (
                                            <option key={city} value={city}>{city}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                        <ChevronDown size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {status === 'error' && (
                            <div className="p-3 rounded-xl bg-red-50 border border-red-100 flex items-center gap-3 text-red-600 animate-fade-in">
                                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                                <span className="text-xs font-bold uppercase tracking-wider">{errorMessage}</span>
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === 'loading'}
                            className="w-full h-11 md:h-13 bg-linear-to-r from-[#134a84] to-[#db3436] hover:brightness-110 disabled:opacity-50 text-white font-black uppercase tracking-[0.25em] text-sm md:text-base rounded-full transition-all shadow-2xl hover:shadow-[0_10px_40px_-10px_rgba(219,52,54,0.6)] active:scale-[0.95] mt-2 flex items-center justify-center gap-3"
                        >
                            {status === 'loading' ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    <span>Processing...</span>
                                </>
                            ) : (
                                <>
                                    {ctaText || "REQUEST CALLBACK"}
                                    <Send size={18} className="rotate-[-10deg]" />
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdmissionFormWhite;
