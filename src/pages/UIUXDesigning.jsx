import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Layout,
    Layers,
    Globe,
    Zap,
    ArrowRight,
    Play,
    Award,
    Code,
    Smartphone
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const UIUXDesigning = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
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
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-white text-slate-950 overflow-hidden font-sans">
            <SEO 
                title="UI/UX Design Courses | Master Digital Experience Design"
                description="Learn to design seamless digital experiences. Master Figma, Prototyping, and User Research at INSD's premier UI/UX institute."
                keywords="ui/ux design courses, user experience design, user interface design, figma course, product design"
            />

            {/* --- HERO SECTION --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50">
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0 text-slate-100 opacity-5">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '40px 40px' }} />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 bg-white/50 backdrop-blur-md">
                            The Human Logic
                        </span>
                        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-8 uppercase leading-[0.8]">
                            UI/UX <br />
                            <span className="text-transparent stroke-text-slate opacity-10">Design</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-12">
                            Engineer digital ecosystems that bridge the gap between technology and human emotion. From wireframes to advanced digital products.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-6 bg-primary text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center gap-4 group shadow-xl transition-all hover:scale-105">
                                START DESIGNING <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="flex items-center gap-4 text-slate-400 hover:text-slate-950 font-black uppercase text-[10px] tracking-[0.4em] transition-all group">
                                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary transition-all">
                                    <Play className="w-4 h-4 fill-slate-950" />
                                </div>
                                THE DESIGN SPRINT
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- INDUSTRY LEVEL STANDARDS --- */}
            <section className="py-24 md:py-40 bg-slate-50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.5em] mb-4 block">Professional Grade</span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">Industry <span className="text-slate-200">Level</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Design Sprint 0.1", desc: "Mastering the rapid prototyping methodology used by Google and IDEO for Silicon Valley startups.", icon: Zap },
                            { title: "User Psychology", desc: "In-depth study of cognitive load, Fitts's law, and behavioral economics in digital interfaces.", icon: Layers },
                            { title: "Handoff Protocol", desc: "Scientific documentation methods between design and dev using advanced Figma Enterprise tools.", icon: Code },
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl group hover:border-primary/30 transition-all duration-500">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                                    <item.icon className="w-8 h-8" />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 uppercase mb-4 tracking-tighter">{item.title}</h4>
                                <p className="text-slate-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROGRAM PATHWAYS (Image UI Style) --- */}
            <section className="py-24 md:py-40 bg-white border-y border-slate-100 relative">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Digital Matrix</span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-10">Program <br /> <span className="text-primary italic">Pathways</span></h2>
                        <p className="text-slate-500 max-w-sm font-light leading-relaxed">Structured learning tracks from foundation to advanced digital product management.</p>
                    </div>
                    <div className="space-y-8">
                        {[
                            { label: "Undergraduate", active: true },
                            { label: "Postgraduate", active: false },
                            { label: "Advanced Diploma", active: false },
                            { label: "Diploma", active: false },
                            { label: "Short Term Courses", active: false },
                        ].map((path, i) => (
                            <div key={i} className="flex items-center group cursor-pointer">
                                <div className={`h-[2px] transition-all duration-700 ${path.active ? "w-24 bg-primary" : "w-0 bg-slate-200 group-hover:w-12"}`} />
                                <span className={`text-3xl md:text-5xl font-bold uppercase tracking-tighter transition-all duration-300 ml-6 ${path.active ? "text-primary" : "text-slate-300 group-hover:text-slate-950"}`}>{path.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CAREER OPPORTUNITIES --- */}
            <section className="py-24 md:py-40 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12 text-center lg:text-left">
                        <div className="max-w-2xl">
                            <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Global <br /> <span className="text-primary italic">Opportunities</span></h2>
                            <p className="text-slate-500 text-lg md:text-xl font-light">The digital economy is the primary driver of global wealth. UX Designers are the architects of this new world.</p>
                        </div>
                        <div className="flex items-center gap-4 py-8 px-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                            <div className="text-center">
                                <span className="block text-4xl font-black text-slate-950">99%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Employability</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { role: "Product Designer", salary: "$125k+", demand: "Critical" },
                            { role: "UX Researcher", salary: "$110k+", demand: "High" },
                            { role: "Design Lead", salary: "$160k+", demand: "Premium" },
                            { role: "Service Designer", salary: "$95k+", demand: "Stable" },
                            { role: "Interaction Artist", salary: "$105k+", demand: "High" },
                            { role: "UI Systems Engineer", salary: "$115k+", demand: "Critical" },
                            { role: "CX Strategist", salary: "$135k+", demand: "High" },
                            { role: "Prototyping Expert", salary: "$90k+", demand: "Stable" },
                        ].map((path, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
                                <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 block">{path.salary}</span>
                                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter mb-2">{path.role}</h4>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{path.demand} Demand</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="py-24 md:py-40">
                <div className="container mx-auto px-6">
                    <div className="relative rounded-[5rem] overflow-hidden bg-slate-950 p-12 md:p-32 text-center group shadow-2xl">
                        <div className="absolute inset-0 z-0 opacity-40">
                            <img 
                                src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=2000" 
                                className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[3s]" 
                                alt="Final CTA" 
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-secondary/30 mix-blend-overlay" />
                        </div>

                        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                            <h2 className="text-5xl md:text-[9.5rem] font-black text-white uppercase tracking-tighter leading-none mb-4">
                                Future <span className="text-transparent stroke-text-white italic">Coded.</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-2xl font-light uppercase tracking-[0.4em]">Apply for institutional batch of 2026</p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-6 px-14 py-7 bg-white text-slate-950 rounded-full font-black uppercase text-sm tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-700"
                            >
                                SECURE YOUR SEAT <ArrowRight />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UIUXDesigning;
