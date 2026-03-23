import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plane, MapPin, Globe } from 'lucide-react';

const IndiaToParisSlider = () => {
    const [active, setActive] = useState(0);

    const stages = [
        { 
            step: "01",
            title: "The India Prelude", 
            location: "INSD Campuses, India",
            img: "https://ik.imagekit.io/fmldynl4j4/From%20India%20to%20Paris/WhatsApp%20Image%202025-04-11%20at%2012.03.33%20(1).jpeg",
            desc: "Rigorous portfolio curation and conceptual preparation across INSD's premier Indian design labs."
        },
        { 
            step: "02",
            title: "Crossing Borders", 
            location: "International Transit",
            img: "https://ik.imagekit.io/fmldynl4j4/From%20India%20to%20Paris/WhatsApp%20Image%202025-04-11%20at%2012.03.33.jpeg",
            desc: "A transition in perspective. Bridging the gap between domestic excellence and global high-fashion."
        },
        
    ];

    const next = () => setActive((prev) => (prev + 1) % stages.length);
    const prev = () => setActive((prev) => (prev - 1 + stages.length) % stages.length);

    return (
        <section className="py-24 bg-white overflow-hidden relative border-y border-slate-100">
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle_at_20%_20%,#db3436,transparent)]" />
            
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4">
                            <Globe className="w-4 h-4" />
                            <span>The Transatlantic Journey</span>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase text-slate-900 leading-[0.85] tracking-tighter">
                            India to <span className="text-transparent stroke-text-slate-900 italic font-serif">Paris</span>.
                        </h2>
                    </motion.div>
                    
                    <div className="flex gap-4 mt-8 lg:mt-0 relative z-10">
                        <button onClick={prev} className="p-6 rounded-full border border-slate-200 hover:bg-slate-900 hover:text-white transition-all duration-500 shadow-sm active:scale-95">
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button onClick={next} className="p-6 rounded-full bg-slate-100 hover:bg-primary hover:text-white transition-all duration-500 shadow-sm active:scale-95">
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative h-[550px] lg:h-[650px] w-full mt-4">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.05 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-12 gap-12"
                        >
                            {/* Visual Main */}
                            <div className="lg:col-span-8 h-full relative group rounded-4xl overflow-hidden shadow-2xl bg-slate-100">
                                <motion.img 
                                    src={stages[active].img} 
                                    alt={stages[active].title} 
                                    className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 transition-all duration-2000 scale-105 group-hover:scale-100"
                                    layoutId="main-image"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                                
                                <div className="absolute top-8 left-8 flex items-center gap-4 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                                    <MapPin className="text-white w-4 h-4 scale-150" />
                                    <span className="text-white font-bold text-xs uppercase tracking-widest">{stages[active].location}</span>
                                </div>
                                
                                <div className="absolute bottom-12 left-12 inline-flex items-center gap-6">
                                    <span className="text-8xl md:text-[10rem] font-black text-white opacity-20 leading-none">{stages[active].step}</span>
                                    <div className="h-20 w-px bg-white/30"></div>
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="lg:col-span-4 flex flex-col justify-center space-y-10">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <Plane className="text-primary w-5 h-5 rotate-45" />
                                        <div className="h-1px flex-1 bg-slate-200"></div>
                                    </div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase whitespace-pre-wrap">
                                        {stages[active].title}
                                    </h3>
                                    <p className="text-xl text-slate-500 font-light leading-relaxed mt-10">
                                        {stages[active].desc}
                                    </p>
                                    
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Mini View */}
                <div className="mt-20 flex items-center gap-4">
                    {stages.map((_, i) => (
                        <div key={i} className={`flex-1 h-1 transition-all duration-700 ${i <= active ? 'bg-primary' : 'bg-slate-100'}`} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndiaToParisSlider;
