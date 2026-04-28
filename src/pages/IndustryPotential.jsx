import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import GovernmentValidation from '../components/GovernmentValidation';
import IndustryExposure from '../components/IndustryExposure';
import Footer from '../components/Footer';

const IndustryPotential = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const weaverRef = useRef(null);
    const sliderRef = useRef(null);

    const scrollSlider = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <main className="min-h-screen bg-[#fafafa]">
            {/* Minimal Hero Section to introduce Industry Potential */}
            <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 overflow-hidden border-b border-slate-200/50">
                {/* Background Details */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent blur-3xl opacity-60 mix-blend-multiply" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-slate-200/60 to-transparent blur-2xl opacity-50" />
                </div>
                
                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-8 shadow-sm">
                            Real-World Demand
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase leading-[0.85] tracking-tighter text-slate-900 mb-8">
                            Industry <span className="text-primary inline-block">Potential</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
                            A deep dive into the massive global opportunities waiting for design professionals across every major economic sector.
                        </p>
                    </motion.div>
                </div>
            </section>



            {/* --- FIELD INTELLIGENCE: THE IMMERSION PROTOCOL (New Industry Visits Section) --- */}
            <section className="py-40 bg-slate-950 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
                
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-32">
                        <div className="space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4"
                            >
                                <div className="w-12 h-px bg-primary" />
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.8em]">Operational Experience</span>
                            </motion.div>
                            
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                                Field <br /> <span className="stroke-text-white opacity-20">Intelligence.</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-white/40 text-lg md:text-xl font-medium leading-relaxed uppercase tracking-tight">
                            Beyond theory. We deploy our students into the world's most sophisticated design ecosystems to witness the velocity of industry first-hand.
                        </p>
                    </div>

                    {/* Premium Card Slider Implementation */}
                    <div className="relative group/slider px-4">
                        <div className="overflow-x-auto no-scrollbar py-20 px-10" ref={sliderRef}>
                            <div className="flex gap-10 w-max">
                                {[
                                    { title: "National Gallery of Modern Art", type: "Culture & Context", img: "https://images.unsplash.com/photo-1554188248-986adbb73be4?q=80&w=1000" },
                                    { title: "IKEA Mumbai", type: "Retail Logistics", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000" },
                                    { title: "JB Homes & Show Spaces", type: "Luxury Interior", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000" },
                                    { title: "Hafele Industry Visit", type: "Precision Fittings", img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000" },
                                    { title: "Daksh Jewellery Manufacturing", type: "Craft Engineering", date: "23 May 2025", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000" },
                                    { title: "Ply Mahal Visit", type: "Material Sciences", img: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1000" },
                                    { title: "IDAC Exhibition", type: "Global Showcase", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600" },
                                    { title: "State Emporium Visit", type: "Heritage Design", img: "https://images.unsplash.com/photo-1582231241995-926f43276f7f?q=80&w=1000" },
                                    { title: "AP Beautiful Homes", type: "Roy Paint Protocol", img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000" },
                                    { title: "Eboco Hardware Solutions", type: "Systems Architecture", img: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=1000" },
                                    { title: "Tour to Vastravan", type: "Textile Weaving", img: "https://images.unsplash.com/photo-1610116303244-040228892437?q=80&w=1000" }
                                ].map((visit, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -20, scale: 1.02 }}
                                        className="shrink-0 w-[320px] md:w-[400px] relative aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-slate-900 border border-white/5 group shadow-2xl transition-all duration-500"
                                    >
                                        <img src={visit.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 pointer-events-none" />
                                        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                                        
                                        {/* Card Content Overlay */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                            <div className="space-y-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                                <div className="flex items-center gap-3">
                                                    <span className="w-8 h-px bg-primary" />
                                                    <span className="text-primary font-black uppercase text-[10px] tracking-widest">{visit.type}</span>
                                                </div>
                                                <h3 className="text-2xl font-black uppercase tracking-tighter leading-tight text-white group-hover:text-primary transition-colors">
                                                    {visit.title}
                                                </h3>
                                                {visit.date && <p className="text-white/40 font-bold text-[9px] uppercase tracking-widest">{visit.date}</p>}
                                            </div>
                                        </div>

                                        {/* Decorative Corner Element */}
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Custom Navigation Controls */}
                        <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none px-4">
                            <button 
                                onClick={() => scrollSlider('left')}
                                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all pointer-events-auto opacity-0 group-hover/slider:opacity-100 -translate-x-4 group-hover/slider:translate-x-0"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                            </button>
                            <button 
                                onClick={() => scrollSlider('right')}
                                className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all pointer-events-auto opacity-0 group-hover/slider:opacity-100 translate-x-4 group-hover/slider:translate-x-0"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                            </button>
                        </div>
                    </div>

                    {/* Minimalist Pagination Bar */}
                    <div className="mt-10 flex flex-col items-center gap-6">
                        <div className="flex gap-2">
                            {[...Array(5)].map((_, i) => (
                                <div key={i} className={`h-1 rounded-full transition-all duration-500 ${i === 0 ? 'w-12 bg-primary' : 'w-4 bg-white/10'}`} />
                            ))}
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.6em] text-white/20 animate-pulse">Drag or Scroll to Navigate</span>
                    </div>
                </div>
            </section>



            {/* --- INDUSTRY EXPOSURE SECTION --- */}
            <section className="py-32 bg-slate-50 border-t border-slate-100">
                <IndustryExposure />
            </section>

            {/* --- GOVERNMENT VALIDATION SECTION --- */}
            <section className="py-32 bg-white border-t border-slate-100">
                <GovernmentValidation />
            </section>
            <Footer />
        </main>
    );
};

export default IndustryPotential;
