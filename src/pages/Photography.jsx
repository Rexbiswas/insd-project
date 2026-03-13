import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Camera,
    Layers,
    Globe,
    Zap,
    ArrowRight,
    Play,
    Award,
    Maximize2,
    Aperture
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const Photography = () => {
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
                title="Professional Photography Courses | Master Visual Storytelling"
                description="Master the art of photography. Learn fashion, commercial, and documentary photography using professional workflows at INSD."
                keywords="photography courses, fashion photography, commercial photography training, digital imaging, visual storytelling"
            />

            {/* --- HERO SECTION --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-50">
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0 opacity-20">
                    <img 
                        src="https://images.unsplash.com/photo-1452784444945-3f422708fe5e?auto=format&fit=crop&q=80&w=2000" 
                        className="w-full h-full object-cover grayscale brightness-110" 
                        alt="Photography Hero" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-white" />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-10 bg-white/50 backdrop-blur-md">
                            The Science of Light
                        </span>
                        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-8 uppercase leading-[0.8]">
                            Photography <br />
                            <span className="text-transparent stroke-text-slate opacity-10">Art</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-12">
                            Capture the invisible. Master the intersection of optical physics, high-speed digital imaging, and raw human emotion.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-6 bg-primary text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center gap-4 group shadow-xl transition-all hover:scale-105">
                                CAPTURE NOW <ArrowRight className="w-4 h-4" />
                            </button>
                            <button className="flex items-center gap-4 text-slate-400 hover:text-slate-950 font-black uppercase text-[10px] tracking-[0.4em] transition-all group">
                                <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary transition-all">
                                    <Play className="w-4 h-4 fill-slate-950" />
                                </div>
                                THE DARKROOM
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
                            { title: "Luminance Math", desc: "Advanced light metering, strobe physics, and complex shadow engineering for studio setups.", icon: Aperture },
                            { title: "Digital Negative", desc: "Lossless RAW processing flow, color science calibration, and high-fidelity retouching.", icon: Layers },
                            { title: "Optic Precision", desc: "Scientific understanding of focal length distortion, chromatic aberration, and sensor tech.", icon: Maximize2 },
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
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em] mb-4 block">The Visual Matrix</span>
                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-10">Program <br /> <span className="text-primary italic">Pathways</span></h2>
                        <p className="text-slate-500 max-w-sm font-light leading-relaxed">Systematic learning tracks designed to transform amateur vision into global professional standards.</p>
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
                            <p className="text-slate-500 text-lg md:text-xl font-light">Visual content is the currency of the modern age. Every brand, agency, and publisher needs master visual storytellers.</p>
                        </div>
                        <div className="flex items-center gap-4 py-8 px-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
                            <div className="text-center">
                                <span className="block text-4xl font-black text-slate-950">95%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Placement</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { role: "Fashion Photographer", salary: "$115k+", demand: "Premium" },
                            { role: "Commercial Lead", salary: "$130k+", demand: "High" },
                            { role: "Art Director", salary: "$145k+", demand: "Critical" },
                            { role: "Visual Journalist", salary: "$80k+", demand: "Stable" },
                            { role: "Retouching Specialist", salary: "$90k+", demand: "High" },
                            { role: "Studio Manager", salary: "$85k+", demand: "Stable" },
                            { role: "Production Artist", salary: "$75k+", demand: "Growing" },
                            { role: "Visual Researcher", salary: "$70k+", demand: "Stable" },
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
                                src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=2000" 
                                className="w-full h-full object-cover grayscale group-hover:scale-110 transition-transform duration-[3s]" 
                                alt="Final CTA" 
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-secondary/30 mix-blend-overlay" />
                        </div>

                        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                            <h2 className="text-5xl md:text-[9.5rem] font-black text-white uppercase tracking-tighter leading-none mb-4">
                                Frame The <span className="text-transparent stroke-text-white italic">Future.</span>
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

export default Photography;
