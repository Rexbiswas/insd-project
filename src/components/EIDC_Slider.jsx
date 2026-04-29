import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Zap, Target, Rocket, Shield } from 'lucide-react';

const eidcData = [
    {
        id: "01",
        title: "Incubation Hub",
        tag: "Physical Catalyst",
        desc: "State-of-the-art co-working ecosystems equipped with high-performance prototyping labs and neural networks for collaborative engineering.",
        img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1600",
        icon: Rocket,
        color: "bg-primary"
    },
    {
        id: "02",
        title: "Angel Network",
        tag: "Capital Infusion",
        desc: "Direct-to-investor pipelines connecting high-potential startups with elite venture capital and private equity frameworks.",
        img: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?auto=format&fit=crop&q=80&w=1600",
        icon: Zap,
        color: "bg-amber-500"
    },
    {
        id: "03",
        title: "Mentor Panels",
        tag: "Domain Expertise",
        desc: "Exclusively curated advisory sessions with CXOs from Fortune 500 design houses and tech giants to refine market entry strategies.",
        img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
        icon: Target,
        color: "bg-blue-600"
    },
    {
        id: "04",
        title: "IP Architecture",
        tag: "Asset Protection",
        desc: "Comprehensive patent and trademark ecosystems to ensure that your creative intellect remains your most fortified competitive advantage.",
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
        icon: Shield,
        color: "bg-emerald-600"
    }
];

const EIDC_Slider = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((prev) => (prev + 1) % eidcData.length);
    const prev = () => setIndex((prev) => (prev - 1 + eidcData.length) % eidcData.length);

    const activeItem = eidcData[index];
    const ActiveIcon = activeItem.icon;

    return (
        <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
            {/* Background Narrative (Responsive Giant Text) */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 pointer-events-none opacity-[0.03] select-none">
                <h2 className="text-[10rem] md:text-[25rem] font-black text-slate-900 leading-none tracking-tighter">
                    PROTOCOL
                </h2>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    
                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-8 md:order-1">
                        <div className="flex items-center gap-6">
                            <AnimatePresence mode="wait">
                                <motion.span 
                                    key={activeItem.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20 }}
                                    className="text-6xl md:text-8xl font-black text-primary/20 tracking-tighter"
                                >
                                    {activeItem.id}
                                </motion.span>
                            </AnimatePresence>
                            <div className="h-px w-10 md:w-12 bg-primary/30" />
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400">System Sequence</span>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="space-y-6 md:space-y-8"
                            >
                                <span className={`inline-block text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] px-5 py-2 rounded-full text-white shadow-lg shadow-black/5 ${activeItem.color}`}>
                                    {activeItem.tag}
                                </span>
                                <h3 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-[0.9]">
                                    {activeItem.title.split(' ').map((word, i) => (
                                        <span key={i} className="block">{word}</span>
                                    ))}
                                </h3>
                                <p className="text-lg md:text-2xl text-slate-500 font-medium leading-relaxed tracking-tight max-w-lg">
                                    {activeItem.desc}
                                </p>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Controls */}
                        <div className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 pt-8 md:pt-12">
                            <div className="flex gap-4">
                                <button 
                                    onClick={prev}
                                    aria-label="Previous Protocol"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all transform hover:scale-105 active:scale-95 z-20"
                                >
                                    <ArrowLeft size={28} />
                                </button>
                                <button 
                                    onClick={next}
                                    aria-label="Next Protocol"
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-950 flex items-center justify-center text-white hover:bg-primary transition-all transform hover:scale-110 active:scale-95 shadow-2xl shadow-slate-900/40 z-20"
                                >
                                    <ArrowRight size={28} />
                                </button>
                            </div>
                            
                            {/* Pagination Dots */}
                            <div className="flex gap-3">
                                {eidcData.map((_, i) => (
                                    <motion.div 
                                        key={i} 
                                        initial={false}
                                        animate={{ 
                                            width: index === i ? 48 : 12,
                                            backgroundColor: index === i ? "var(--color-primary, #db3436)" : "#e2e8f0"
                                        }}
                                        className="h-1.5 rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Section (Parallax Shift) */}
                    <div className="w-full lg:w-1/2 relative group md:order-2">
                        <div className="relative aspect-[4/5] md:aspect-[5/6] rounded-[3rem] md:rounded-[5.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] ring-1 ring-slate-100">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={index}
                                    src={activeItem.img}
                                    initial={{ scale: 1.15, opacity: 0, filter: 'blur(10px)' }}
                                    animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ scale: 1.05, opacity: 0, filter: 'blur(10px)' }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="w-full h-full object-cover brightness-110 transition-all duration-1000"
                                    alt={activeItem.title}
                                />
                            </AnimatePresence>
                            
                            {/* Layered Content Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />
                            
                            {/* Animated Icon HUD */}
                            <div className="absolute top-8 right-8 md:top-12 md:right-12">
                                <AnimatePresence mode="wait">
                                    <motion.div 
                                        key={index}
                                        initial={{ scale: 0, rotate: -90, opacity: 0 }}
                                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                                        exit={{ scale: 0, rotate: 90, opacity: 0 }}
                                        transition={{ type: "spring", damping: 15 }}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-full apple-glass flex items-center justify-center text-white border-white/20 shadow-2xl backdrop-blur-3xl"
                                    >
                                        <ActiveIcon size={36} />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                        
                        {/* Floating Status Card */}
                        <motion.div 
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 w-40 h-40 md:w-48 md:h-48 bg-white shadow-2xl rounded-[2.5rem] md:rounded-[3.5rem] p-8 md:p-10 flex flex-col justify-end gap-1 md:gap-2 border border-slate-50 z-20"
                        >
                            <span className="text-[9px] md:text-[10px] font-black uppercase text-primary tracking-[0.4em]">Efficiency</span>
                            <span className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter italic">98.4<span className="text-primary">%</span></span>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-2">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "98.4%" }}
                                    className="h-full bg-primary"
                                />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EIDC_Slider;
