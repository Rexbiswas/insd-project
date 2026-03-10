import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft, User, Phone, Mail, MapPin, PartyPopper, Sparkles, Trophy } from 'lucide-react';
import axios from 'axios';
import Matter from 'matter-js';

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

    // --- INTERACTIVE AWARD LOGIC ---
    const awardContainerRef = useRef(null);
    const sceneRef = useRef(null);
    const awardInView = useInView(awardContainerRef, { margin: "-100px 0px", once: true });

    useEffect(() => {
        if (!awardInView || !sceneRef.current) return;

        let engine;
        let render;
        let runner;

        const initMatter = (textureImg) => {
            if (!sceneRef.current) return;

            const isMobile = window.innerWidth < 768;
            const containerWidth = sceneRef.current.clientWidth;
            const containerHeight = isMobile ? 350 : 450;

            engine = Matter.Engine.create();
            render = Matter.Render.create({
                element: sceneRef.current,
                engine: engine,
                options: {
                    width: containerWidth,
                    height: containerHeight,
                    wireframes: false,
                    background: 'transparent'
                }
            });

            const floor = Matter.Bodies.rectangle(containerWidth / 2, containerHeight + 10, containerWidth, 20, { isStatic: true, render: { fillStyle: 'transparent' } });
            const leftWall = Matter.Bodies.rectangle(-20, containerHeight / 2, 40, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });
            const rightWall = Matter.Bodies.rectangle(containerWidth + 20, containerHeight / 2, 40, containerHeight, { isStatic: true, render: { fillStyle: 'transparent' } });

            const targetSize = isMobile ? containerWidth * 0.6 : 320;
            const scale = targetSize / textureImg.width;
            const aspect = textureImg.height / textureImg.width;

            const awardBody = Matter.Bodies.rectangle(
                containerWidth / 2,
                -100,
                targetSize,
                targetSize * aspect,
                {
                    chamfer: { radius: 10 },
                    restitution: 0.6,
                    friction: 0.1,
                    render: {
                        sprite: {
                            texture: textureImg.src,
                            xScale: scale,
                            yScale: scale
                        }
                    }
                }
            );

            Matter.Body.setInertia(awardBody, Infinity);
            Matter.Composite.add(engine.world, [floor, leftWall, rightWall, awardBody]);

            const mouse = Matter.Mouse.create(render.canvas);
            const mouseConstraint = Matter.MouseConstraint.create(engine, {
                mouse: mouse,
                constraint: { stiffness: 0.2, render: { visible: false } }
            });
            Matter.Composite.add(engine.world, mouseConstraint);
            
            // Allow scroll penetration
            mouse.element.removeEventListener("mousewheel", mouse.mousewheel);
            mouse.element.removeEventListener("DOMMouseScroll", mouse.mousewheel);

            Matter.Render.run(render);
            runner = Matter.Runner.create();
            Matter.Runner.run(runner, engine);
        };

        const img = new window.Image();
        img.src = "https://ik.imagekit.io/fmldynl4j4/insd-awards/WhatsApp_Image_2025-05-03_at_5.24.15_PM__1_-removebg-preview.png";
        img.onload = () => initMatter(img);

        return () => {
            img.onload = null;
            if (render) {
                Matter.Render.stop(render);
                if (render.canvas) render.canvas.remove();
            }
            if (runner) Matter.Runner.stop(runner);
            if (engine) {
                Matter.World.clear(engine.world);
                Matter.Engine.clear(engine);
            }
        };
    }, [awardInView]);
    // ----------------------------

    return (
        <section className="relative py-32 md:py-48 bg-slate-950 overflow-hidden">
            {/* Confidence Accents */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    {/* Confident Proofing Header (Merged Award Section) */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-20 md:mb-24">
                        <div className="flex-1 text-center md:text-left">
                            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-6">India's Design Powerhouse</p>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9] uppercase mb-8">
                                <span className="text-primary">National</span> <br />
                                Award-Winning <br />
                                <span className="text-white/60">Disruptors.</span>
                            </h2>

                            <div className="flex gap-8 md:gap-16 justify-center md:justify-start">
                                <div className="text-center md:text-left">
                                    <p className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-1">99%</p>
                                    <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary">Career Success</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <p className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-1">500+</p>
                                    <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-primary">Global Partners</p>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Physics Award - Replaced Static Image */}
                        <div ref={awardContainerRef} className="relative w-full md:w-[400px] lg:w-[480px] group">
                            <div className="absolute inset-0 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-colors duration-1000"></div>
                            <div 
                                ref={sceneRef}
                                className="relative z-10 w-full h-[300px] md:h-[450px] cursor-grab active:cursor-grabbing border-y md:border-x border-white/5 rounded-3xl overflow-hidden"
                            >
                                <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-white/20 whitespace-nowrap pointer-events-none">
                                    <span className="text-primary italic">Times of India</span> • Drag to Interact
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-16 pt-16 md:pt-24 border-t border-white/5">
                        <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter mb-6"
                        >
                            Building <span className="italic font-serif text-primary">Job-Ready</span> Professionals.
                        </motion.h3>
                        <p className="text-white/40 font-medium tracking-widest uppercase text-[9px] md:text-[10px] lg:text-xs">
                            Fast-paced learning • Skill-based training • <span className="text-white">Portfolio + 100% Placement Support</span>
                        </p>
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
                    {/* Form Container - Premium Glassmorphism */}
                    <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-8 md:p-16 border border-white/10 relative min-h-[450px] shadow-2xl">
                        <AnimatePresence mode="wait">
                            {/* Step 1: Readiness */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-12"
                                >
                                    <h3 className="text-xl md:text-3xl lg:text-4xl font-black text-white uppercase flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-primary/20 flex items-center justify-center relative">
                                            <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-xl md:rounded-2xl border border-primary/40 scale-110"></div>
                                        </div>
                                        Are You Ready to Start learning <br className="hidden md:block" />
                                        <span className="text-primary italic font-serif">Job-Ready</span> Skills?
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                        {['Yes', 'No'].map((option) => (
                                            <button
                                                key={option}
                                                onClick={() => updateData('readyToStart', option)}
                                                className={`group p-6 md:p-8 rounded-2xl md:rounded-3xl border-2 text-xl md:text-2xl font-black transition-all duration-500 flex items-center justify-between overflow-hidden relative ${formData.readyToStart === option ? 'border-primary bg-primary text-white' : 'border-white/10 bg-white/5 text-white/60 hover:border-white/40 hover:bg-white/10'}`}
                                            >
                                                <span className="relative z-10 uppercase tracking-tighter">{option}</span>
                                                {formData.readyToStart === option && <CheckCircle2 className="relative z-10" size={24} />}
                                                {/* Hover Glow */}
                                                <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
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
                                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center relative">
                                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-2xl border border-primary/40 scale-110"></div>
                                        </div>
                                        Pick your <span className="text-primary">Industry</span>
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                        {industries.map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => updateData('industry', item)}
                                                className={`p-6 rounded-2xl border-2 text-xs font-black uppercase tracking-[0.2em] transition-all duration-500 hover:border-primary/50 text-center ${formData.industry === item ? 'border-primary bg-primary text-white' : 'border-white/5 bg-white/5 text-white/50'}`}
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
                                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center relative">
                                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-2xl border border-primary/40 scale-110"></div>
                                        </div>
                                        Tell Us About Yourself
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="relative group">
                                            <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={20} />
                                            <input
                                                type="text"
                                                placeholder="Full Name"
                                                value={formData.fullName}
                                                onChange={(e) => updateData('fullName', e.target.value)}
                                                className="w-full pl-16 pr-6 py-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all font-black text-white uppercase tracking-wider text-sm placeholder:text-white/20"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={20} />
                                            <input
                                                type="tel"
                                                placeholder="Phone Number"
                                                value={formData.phone}
                                                onChange={(e) => updateData('phone', e.target.value)}
                                                className="w-full pl-16 pr-6 py-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all font-black text-white uppercase tracking-wider text-sm placeholder:text-white/20"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={20} />
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                value={formData.email}
                                                onChange={(e) => updateData('email', e.target.value)}
                                                className="w-full pl-16 pr-6 py-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all font-black text-white uppercase tracking-wider text-sm placeholder:text-white/20"
                                            />
                                        </div>
                                        <div className="relative group">
                                            <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-primary transition-colors" size={20} />
                                            <input
                                                type="text"
                                                placeholder="City"
                                                value={formData.city}
                                                onChange={(e) => updateData('city', e.target.value)}
                                                className="w-full pl-16 pr-6 py-6 rounded-2xl bg-white/5 border border-white/10 focus:border-primary outline-none transition-all font-black text-white uppercase tracking-wider text-sm placeholder:text-white/20"
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
                                    <h3 className="text-2xl md:text-4xl font-black text-white uppercase flex flex-col md:flex-row md:items-center gap-6">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center relative">
                                            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                                            <div className="absolute inset-0 rounded-2xl border border-primary/40 scale-110"></div>
                                        </div>
                                        Your qualification
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {qualifications.map((item) => (
                                            <button
                                                key={item}
                                                onClick={() => updateData('qualification', item)}
                                                className={`p-8 rounded-3xl border-2 text-xl font-black transition-all duration-500 flex items-center justify-between ${formData.qualification === item ? 'border-primary bg-primary text-white' : 'border-white/5 bg-white/5 text-white/50 hover:border-white/20'}`}
                                            >
                                                <span className="uppercase tracking-tighter">{item}</span>
                                                {formData.qualification === item && <CheckCircle2 size={28} />}
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
                    <div className="mt-16 pt-16 border-t border-white/5 flex flex-wrap justify-center gap-x-12 gap-y-6">
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            <span className="text-xs uppercase font-black tracking-[0.3em] text-white/60">Industry Recognized</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            <span className="text-xs uppercase font-black tracking-[0.3em] text-white/60">Global Curriculum</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="w-2 h-2 rounded-full bg-secondary"></span>
                            <span className="text-xs uppercase font-black tracking-[0.3em] text-white/60">Portfolio Focused</span>
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
