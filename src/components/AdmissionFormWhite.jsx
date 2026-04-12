import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronDown, Send } from 'lucide-react';
import { stateCityData } from '../data/locations';

const AdmissionFormWhite = ({ isModal = false }) => {
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        state: '',
        city: '',
        referred: false
    });

    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [touched, setTouched] = useState({});

    const states = ["Select State", ...Object.keys(stateCityData)];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
            ...(name === 'state' ? { city: '' } : {})
        }));
    };

    const handleBlur = (field) => {
        setTouched(prev => ({ ...prev, [field]: true }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        
        try {
            const response = await fetch('/api/admission', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                   ...formData,
                   marketingConsent: true // Admission inquiries usually imply consent for contact
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '', mobile: '', email: '', state: '', city: '', referred: false
                });
            } else {
                throw new Error("Submission failed");
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto p-12 bg-white rounded-3xl border border-slate-100 text-center space-y-8 shadow-xl"
            >
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto border border-green-100">
                    <CheckCircle2 className="text-green-500 w-10 h-10" />
                </div>
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-slate-900">Thank You!</h2>
                    <p className="text-slate-600 text-lg">
                        Your inquiry has been submitted successfully. Our team will contact you shortly.
                    </p>
                </div>
                <button 
                    onClick={() => setStatus('idle')}
                    className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg"
                >
                    Submit Another Inquiry
                </button>
            </motion.div>
        );
    }

    const FormField = ({ label, name, type = "text", placeholder, options = null, required = false }) => (
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 group">
            <label className="md:w-1/3 text-lg md:text-xl font-bold text-slate-800 md:text-right">
                {label}
            </label>
            <div className="md:w-2/3 relative">
                {options ? (
                    <select
                        name={name}
                        value={formData[name]}
                        onChange={handleChange}
                        onBlur={() => handleBlur(name)}
                        required={required}
                        className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl px-4 text-slate-900 font-medium focus:outline-none focus:border-primary focus:bg-white transition-all appearance-none cursor-pointer"
                    >
                        {options.map(opt => (
                            <option key={opt} value={opt === options[0] ? "" : opt} disabled={opt === options[0]}>
                                {opt}
                            </option>
                        ))}
                    </select>
                ) : (
                    <input
                        type={type}
                        name={name}
                        value={formData[name]}
                        placeholder={placeholder}
                        onChange={handleChange}
                        onBlur={() => handleBlur(name)}
                        required={required}
                        className="w-full h-14 bg-slate-50 border-2 border-slate-100 rounded-xl px-6 text-slate-900 font-medium focus:outline-none focus:border-primary focus:bg-white transition-all placeholder:text-slate-300"
                    />
                )}
                {options && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400 group-focus-within:text-primary transition-colors">
                        <ChevronDown size={20} />
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className={`w-full ${isModal ? '' : 'py-20 px-6 bg-[#f3f3f3]'}`}>
            <div className="max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl border border-white space-y-12">
                    <div className="space-y-4 text-center">
                        <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter">
                            ADMISSIONS <span className="text-primary italic">OPEN.</span>
                        </h1>
                        <p className="text-slate-500 font-medium text-lg">
                            Begin your creative journey with India's leading design school.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <FormField 
                            label="Your Name" 
                            name="name" 
                            placeholder="Full Name" 
                            required 
                        />
                        <FormField 
                            label="Mobile Number" 
                            name="mobile" 
                            type="tel" 
                            placeholder="+91" 
                            required 
                        />
                        <FormField 
                            label="Email Address" 
                            name="email" 
                            type="email" 
                            placeholder="email@example.com" 
                            required 
                        />
                        <FormField 
                            label="State" 
                            name="state" 
                            options={states} 
                            required 
                        />
                        <FormField 
                            label="City" 
                            name="city" 
                            options={["Select City", ...(formData.state ? stateCityData[formData.state] : [])]} 
                            required 
                        />
                    </div>

                    <div className="pt-8 flex flex-col items-center gap-8">
                        <label className="flex items-center gap-4 cursor-pointer group/refer">
                            <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${formData.referred ? 'bg-primary border-primary' : 'border-slate-300 group-hover/refer:border-primary'}`}>
                                {formData.referred && <CheckCircle2 className="text-white w-4 h-4" />}
                            </div>
                            <input 
                                type="checkbox" 
                                name="referred"
                                checked={formData.referred}
                                onChange={handleChange}
                                className="hidden" 
                            />
                            <span className="text-slate-600 font-bold text-lg select-none">
                                Were you referred by someone?
                            </span>
                        </label>

                        <button 
                            type="submit"
                            disabled={status === 'loading'}
                            className="group relative w-full md:w-80 h-16 bg-slate-900 text-white rounded-2xl overflow-hidden shadow-xl hover:shadow-primary/20 transition-all active:scale-95 disabled:opacity-50"
                        >
                            <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            <span className="relative z-10 flex items-center justify-center gap-3 text-xl font-bold uppercase tracking-widest">
                                {status === 'loading' ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>
                                        Submit
                                        <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdmissionFormWhite;
