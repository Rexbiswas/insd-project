'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Send, ArrowRight, MessageSquare, Clock, Globe, Instagram, Facebook, Linkedin, Twitter, CheckCircle2, Youtube } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const Contact = () => {
    const router = useRouter();
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    // Form State
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate 10-digit mobile number
        if (formState.phone.length !== 10) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formState,
                    phone: `+91${formState.phone}`
                })
            });

            if (response.ok) {
                setIsSuccess(true);
                // Redirect to Thank You page after a brief delay
                setTimeout(() => {
                    router.push(`/thank-you?name=${encodeURIComponent(formState.name)}&type=contact`);
                }, 1000);
            } else {
                const contentType = response.headers.get("content-type");
                let errorMessage = "Failed to send message";
                if (contentType && contentType.includes("application/json")) {
                    const data = await response.json();
                    errorMessage = data.message || errorMessage;
                } else {
                    const text = await response.text();
                    console.error('Server error:', text);
                    errorMessage = `Server Error: ${text.substring(0, 30)}...`;
                }
                throw new Error(errorMessage);
            }
        } catch (error) {
            console.error('Contact error:', error);

            // --- DEVELOPMENT FALLBACK ---
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                console.warn('Backend unavailable on localhost. Simulating success for testing.');
                setIsSuccess(true);
                setTimeout(() => {
                    router.push(`/thank-you?name=${encodeURIComponent(formState.name)}&type=contact`);
                }, 1000);
                return;
            }

            alert(`Submission Error: ${error.message.includes('Unexpected token') ? "Server returned an invalid response. Please try again later." : error.message}`);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        let finalValue = value;

        if (name === 'phone') {
            finalValue = value.replace(/\D/g, '').slice(0, 10);
        }

        setFormState({ ...formState, [name]: finalValue });
    };

    // Stagger container for entrance animations
    const containerVars = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            <SEO
                title="Contact Us | INSD Admissions & Campuses"
                description="Get in touch with International School of Design. Visit our campuses across India or drop us an inquiry for fashion, interior, and graphic design admissions."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-slate-950 text-white overflow-hidden">
                {/* Visual accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-mono tracking-widest text-slate-300 uppercase">Connect With Us</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-black tracking-tight leading-none uppercase mb-8">
                            Start Your <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                                Creative Journey
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 font-light leading-relaxed">
                            Have questions about our programs, admissions, or campuses? Our team is here to help you navigate your future in design.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN CONTENT: CONTACT INFO & FORM --- */}
            <section className="py-16 md:py-24 relative -mt-10 z-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                        {/* LEFT COLUMN: Contact Cards */}
                        <motion.div
                            variants={containerVars}
                            initial="hidden"
                            animate="show"
                            className="lg:col-span-5 space-y-6"
                        >
                            {/* Card 1: Head Office */}
                            <motion.div variants={itemVars} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-950/5 border border-slate-100 hover:shadow-2xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Corporate Head Office</h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                    INSD Corporate Campus, Gujranwala Town Part 1, Delhi, 110009
                                </p>
                                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary tracking-wider uppercase">
                                    <Clock size={14} /> Mon - Sat: 9:30 AM - 6:30 PM
                                </span>
                            </motion.div>

                            {/* Card 2: Quick Connect */}
                            <motion.div variants={itemVars} className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-950/5 border border-slate-100 hover:shadow-2xl transition-all duration-300">
                                <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">Direct Contact</h3>
                                <div className="space-y-3">
                                    <a href="tel:+919804443300" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10">
                                            <Phone size={14} className="group-hover:text-primary" />
                                        </div>
                                        <span className="font-semibold text-sm">+91 98044 43300</span>
                                    </a>
                                    <a href="mailto:info@insd.edu.in" className="flex items-center gap-3 text-slate-600 hover:text-primary transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10">
                                            <Mail size={14} className="group-hover:text-primary" />
                                        </div>
                                        <span className="font-semibold text-sm">info@insd.edu.in</span>
                                    </a>
                                </div>
                            </motion.div>

                            {/* Card 3: Social Hub */}
                            <motion.div variants={itemVars} className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl shadow-slate-950/10">
                                <h3 className="text-xl font-bold mb-2">Follow the Movement</h3>
                                <p className="text-slate-400 text-sm mb-6">Explore life, design works, and events across our official social channels.</p>
                                <div className="flex items-center gap-3">
                                    <a href="https://www.instagram.com/insd_india/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                                        <Instagram size={18} />
                                    </a>
                                    <a href="https://www.facebook.com/insdedu/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                                        <Facebook size={18} />
                                    </a>
                                    <a href="https://www.linkedin.com/school/international-school-of-design/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                                        <Linkedin size={18} />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCyMh3_zG3W_6VvW_w8E7VmA" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all">
                                        <Youtube size={18} />
                                    </a>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* RIGHT COLUMN: Interactive Form */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-7"
                        >
                            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-950/10 border border-slate-100">
                                <div className="mb-8">
                                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight mb-2">Send Us a Message</h2>
                                    <p className="text-slate-500 text-sm">Fill out the form below and an admissions advisor will get in touch within 24 hours.</p>
                                </div>

                                {!isSuccess ? (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-medium focus:border-secondary focus:bg-white transition-all outline-none"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Email Address</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-medium focus:border-secondary focus:bg-white transition-all outline-none"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Phone Number</label>
                                                <div className="flex items-stretch h-12 bg-slate-50 border-2 border-slate-100 rounded-xl overflow-hidden focus-within:border-secondary transition-all">
                                                    <div className="flex items-center px-4 bg-slate-100 border-r-2 border-slate-200">
                                                        <span className="text-slate-500 font-bold text-sm">+91</span>
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        required
                                                        inputMode="numeric"
                                                        placeholder="00000 00000"
                                                        value={formState.phone}
                                                        onChange={handleChange}
                                                        className="flex-1 px-4 bg-transparent text-slate-800 font-medium focus:outline-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Subject</label>
                                                <select
                                                    name="subject"
                                                    value={formState.subject}
                                                    onChange={handleChange}
                                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-medium focus:border-secondary focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                                                >
                                                    <option value="">Select a Subject</option>
                                                    <option value="Admission">Admission Inquiry</option>
                                                    <option value="Courses">Course Details</option>
                                                    <option value="Fees">Fee Structure</option>
                                                    <option value="General">General Inquiry</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-wider text-slate-400 ml-1">Message</label>
                                            <textarea
                                                name="message"
                                                required
                                                rows="5"
                                                value={formState.message}
                                                onChange={handleChange}
                                                className="w-full bg-slate-50 border-2 border-slate-100 rounded-xl px-4 py-3 text-slate-800 font-medium focus:border-secondary focus:bg-white transition-all outline-none resize-none"
                                            />
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full h-16 md:h-20 bg-slate-900 text-white rounded-full font-black uppercase tracking-[0.25em] text-sm md:text-base shadow-xl shadow-slate-900/20 hover:shadow-primary/30 hover:-translate-y-1 transition-all overflow-hidden relative group"
                                            >
                                                <span className="relative z-10 flex items-center justify-center gap-2">
                                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                                    {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                                                </span>
                                                <div className="absolute inset-0 bg-linear-to-r from-secondary via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                            </button>
                                        </div>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="py-16 flex flex-col items-center justify-center text-center"
                                    >
                                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                                            <CheckCircle2 size={48} />
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 mb-2">Message Sent!</h3>
                                        <p className="text-slate-600 max-w-sm mx-auto">
                                            Thank you for reaching out. Our team will get back to you shortly.
                                        </p>
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
