import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Home,
    Layout,
    Box,
    Compass,
    Zap,
    ArrowRight,
    Award,
    ChevronRight,
    Play,
    PenTool,
    Maximize2,
    LampCeiling,
    Layers,
    Globe
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const InteriorDesigning = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Section Reveal logic
            gsap.utils.toArray(".reveal-up").forEach((elem) => {
                gsap.from(elem, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Card Grid Reveal
            gsap.from(".card-entry", {
                y: 40,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".card-grid",
                    start: "top 80%"
                }
            });

            // Horizontal Line Crawl
            gsap.from(".line-crawl", {
                width: 0,
                duration: 1.5,
                ease: "expo.inOut",
                scrollTrigger: {
                    trigger: ".line-crawl",
                    start: "top 90%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const specializations = [
        {
            title: "Parametric Spatial Modeling",
            desc: "Engineering fluid geometries using algorithmic design tools for organic architectural flow.",
            icon: Maximize2,
            tag: "ADVANCED",
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            title: "Sustainable Materiality",
            desc: "Technical analysis of bio-composites and eco-conscious finishes for high-performance spaces.",
            icon: Leaf,
            tag: "ESSENTIAL",
            color: "text-emerald-500",
            bg: "bg-emerald-50"
        },
        {
            title: "Luminance & Acoustics",
            desc: "The physics of light and sound. Engineering sensory comfort through technical precision.",
            icon: LampCeiling,
            tag: "TECHNICAL",
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            title: "Luxury Brand Identity",
            desc: "Developing bespoke interior signatures for global hospitality and high-end retail brands.",
            icon: Award,
            tag: "STRATEGIC",
            color: "text-purple-500",
            bg: "bg-purple-50"
        }
    ];

    return (
        <div ref={containerRef} className="bg-[#f3f3f3] text-slate-900 overflow-hidden font-sans">

            {/* --- ARCHITECTURAL HERO --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                    <img
                        src="/interior_design_hero_insd_1772562509656.png"
                        alt="Interior Design Hero"
                        className="w-full h-full object-cover grayscale opacity-20 brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#f3f3f3]/90 via-transparent to-[#f3f3f3]" />
                </motion.div>

                {/* Vertical Blueprint Lines */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-10 bg-white/50 backdrop-blur-md shadow-sm">
                            The Science of Space
                        </span>
                        <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter mb-8 uppercase leading-[0.75] text-slate-950">
                            Interior <br />
                            <span className="text-transparent stroke-text-slate opacity-20">Design</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-14 drop-shadow-sm">
                            Beyond decoration. We engineer environments that optimize human potential through structural logic, material ethics, and sensory precision.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(236,72,153,0.3)" }}
                                className="px-14 py-7 bg-primary text-white font-black uppercase text-xs tracking-[0.4em] rounded-2xl flex items-center gap-4 group shadow-xl transition-all"
                            >
                                SECURE ADMISSION <Zap className="w-4 h-4 fill-white" />
                            </motion.button>
                            <button className="flex items-center gap-5 text-slate-400 hover:text-slate-950 font-black uppercase text-[10px] tracking-[0.5em] transition-all group">
                                <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                                    <Play className="w-5 h-5 fill-slate-900 text-slate-950" />
                                </div>
                                PLAY SHOWREEL
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Navigation Label */}
                <div className="absolute left-10 bottom-20 hidden lg:flex items-center gap-6 opacity-30">
                    <div className="w-20 h-px bg-slate-950" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">Section 01 / Intro</span>
                </div>
            </section>

            {/* --- PHILOSOPHY: THE ATELIER --- */}
            <section className="py-48 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <div className="line-crawl h-1 bg-primary w-24 mb-12" />
                            <h2 className="text-6xl md:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.8] reveal-up text-slate-950">
                                The <span className="text-primary italic">Structural</span> <br /> Manifesto
                            </h2>
                            <div className="space-y-8 text-slate-500 text-lg md:text-xl font-light leading-relaxed reveal-up">
                                <p>
                                    At INSD, we strip away the superficial layers of "decorating" to expose the architectural bone. Our Interior Design program is a technical deep-dive into the marriage of logic and luxury.
                                </p>
                                <p>
                                    You will calibrate your vision across high-end residential, sterile clinical environments, and global hospitality signatures, mentored by field-leading architects and master craftsmen.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-12 pt-10 reveal-up">
                                {[
                                    { icon: Globe, val: "Global", label: "Certification" },
                                    { icon: Layers, val: "0.1mm", label: "Precision" },
                                    { icon: Box, val: "BIM", label: "Workflow" },
                                    { icon: Award, val: "Elite", label: "Placements" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex gap-5 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary shrink-0">
                                            <stat.icon size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-2xl font-black text-slate-950 leading-none mb-1">{stat.val}</span>
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group reveal-up">
                            <div className="absolute -inset-6 bg-slate-100 rounded-[4rem] group-hover:-inset-8 transition-all duration-1000 opacity-50" />
                            <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white shadow-2xl p-3 bg-white">
                                <img
                                    src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000"
                                    alt="Studio Masterclass"
                                    className="w-full h-full object-cover rounded-[2.5rem] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute inset-x-12 bottom-12 p-10 bg-white/90 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-slate-950">Materials Library</h4>
                                    <p className="text-slate-500 text-sm mt-3 font-medium">Interactive sensory lab with 500+ premium finishes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE SPECIALIZATIONS GRID --- */}
            <section className="py-48 bg-[#f3f3f3] border-y border-slate-200/50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                        <div className="max-w-xl reveal-up">
                            <span className="text-primary font-black text-xs uppercase tracking-[0.6em] mb-6 block">Course Architecture</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.8] text-slate-950">
                                Mastery <br />
                                <span className="text-slate-300">Protocols</span>
                            </h2>
                        </div>
                        <p className="max-w-xs text-slate-500 text-sm leading-relaxed mb-6 font-bold reveal-up">
                            Advanced specializations designed to elevate your craft to international institutional standards.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 card-grid">
                        {specializations.map((spec, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -20, scale: 1.02 }}
                                className="card-entry group relative h-[520px] rounded-[3.5rem] overflow-hidden border border-white bg-white p-10 flex flex-col justify-end transition-all duration-500 shadow-2xl shadow-slate-200 hover:shadow-primary/5"
                            >
                                <div className={`absolute -top-32 -right-32 w-80 h-80 ${spec.bg} opacity-50 group-hover:opacity-100 blur-[80px] transition-opacity duration-700`} />

                                <div className="relative z-10">
                                    <div className={`w-16 h-16 rounded-[1.5rem] bg-slate-50 border border-slate-100 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:text-white ${spec.color} group-hover:border-primary mb-10`}>
                                        <spec.icon size={28} />
                                    </div>
                                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-5 block">{spec.tag}</span>
                                    <h4 className="text-3xl font-black uppercase tracking-tighter mb-5 leading-none text-slate-950 group-hover:text-primary transition-colors">{spec.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-light mb-10">{spec.desc}</p>

                                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between group-hover:translate-x-2 transition-all duration-500">
                                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-950 transition-colors">Digital Syllabus</span>
                                        <ChevronRight className="text-primary" size={22} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PLACEMENT INFRASTRUCTURE --- */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                        <div className="lg:col-span-12 mb-20 text-center reveal-up">
                            <h2 className="text-6xl md:text-[6.5rem] font-black tracking-tighter uppercase leading-none text-slate-950">
                                Global <br /> <span className="text-secondary italic">Career Matrix</span>
                            </h2>
                        </div>

                        <div className="lg:col-span-5 space-y-12 order-2 lg:order-1 reveal-up">
                            <p className="text-xl text-slate-500 font-light leading-relaxed">
                                We bridge the gap between creative ambition and industry requirement. Our placement cells operate in Milan, Paris, and Singapore to ensure your trajectory is global.
                            </p>

                            <div className="space-y-8">
                                {[
                                    { title: "Architectural Alliances", desc: "Collaborate with over 450+ global design consultancies and developer firms." },
                                    { title: "Design Incubation", desc: "Seed funding and mentorship for graduates launching independent design labels." },
                                    { title: "Luxury Exposure", desc: "Direct access to high-end furniture markets in Italy and Northern Europe." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group cursor-default">
                                        <div className="w-1.5 h-16 bg-slate-50 rounded-full overflow-hidden">
                                            <div className="w-full h-0 group-hover:h-full bg-secondary transition-all duration-700" />
                                        </div>
                                        <div>
                                            <h5 className="text-xl font-black uppercase tracking-tight mb-2 text-slate-950">{item.title}</h5>
                                            <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative order-1 lg:order-2 reveal-up">
                            <div className="grid grid-cols-2 gap-8 h-[650px]">
                                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[3rem] shadow-2xl translate-y-12" alt="Ind 1" />
                                <img src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800" className="w-full h-[85%] object-cover rounded-[3rem] shadow-2xl" alt="Ind 2" />
                            </div>
                            <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-secondary/5 blur-[100px] rounded-full" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- ADMISSION CTA --- */}
            <section className="py-40">
                <div className="container mx-auto px-6">
                    <div className="relative rounded-[5rem] overflow-hidden bg-slate-950 p-12 md:p-32 text-center group shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)]">
                        <div className="absolute inset-0 z-0 opacity-40">
                            <img
                                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000"
                                className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[3s]"
                                alt="Final CTA"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 mix-blend-overlay" />
                        </div>

                        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                            <h2 className="text-5xl md:text-[9.5rem] font-black text-white uppercase tracking-tighter leading-none mb-4">
                                Space <span className="text-transparent stroke-text-white italic">Defined.</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-2xl font-light uppercase tracking-[0.4em] max-w-2xl mx-auto">Limited seats available for the institutional batch of 2026</p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-6 px-20 py-8 bg-white text-slate-950 rounded-full font-black uppercase text-sm tracking-[0.5em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-700"
                            >
                                START YOUR APPLICATION <ArrowRight />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

// Fallback icon for missing imports
const Leaf = (props) => (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8a7 7 0 0 1-7 7c0 1.05-.1 2-.5 3Z" />
        <path d="M19 2.15c-3.35 2.1-5.75 5.5-7.5 9-1.55 3.33-2.6 6.55-3 8.85" />
    </svg>
);

export default InteriorDesigning;
