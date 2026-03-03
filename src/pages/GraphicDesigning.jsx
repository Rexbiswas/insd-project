import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Palette, 
    Type, 
    Layers, 
    Monitor, 
    Smartphone, 
    Globe, 
    Zap, 
    ArrowRight, 
    Award, 
    TrendingUp, 
    Sparkles, 
    Play,
    Framer,
    Component
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const GraphicDesigning = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance Animations
            gsap.from(".header-reveal", {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.1,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: ".header-reveal",
                    start: "top 90%"
                }
            });

            gsap.from(".module-card", {
                scale: 0.8,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: ".module-grid",
                    start: "top 85%"
                }
            });

            // Dynamic Background Shapes
            gsap.to(".bg-shape-1", {
                y: 100,
                x: 50,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
            gsap.to(".bg-shape-2", {
                y: -80,
                x: -30,
                duration: 7,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const modules = [
        {
            title: "Brand Identity",
            desc: "Engineering visual ecosystems that represent the soul of global enterprises and startups.",
            icon: Component,
            image: "/graphic_branding_module_insd_1772562995873.png",
            tag: "STRATEGY"
        },
        {
            title: "Advanced Typography",
            desc: "The architecture of language. Mastering font hierarchy, rhythm, and experimental type.",
            icon: Type,
            image: "/graphic_typography_module_insd_1772562977636.png",
            tag: "ARTISTIC"
        },
        {
            title: "UI/UX Ecosystems",
            desc: "Designing frictionless digital interfaces that bridge the gap between human and machine.",
            icon: Smartphone,
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
            tag: "DIGITAL"
        },
        {
            title: "Motion Graphics",
            desc: "Bringing static design to life through high-intensity 2D and 3D animation protocols.",
            icon: Zap,
            image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
            tag: "DYNAMIC"
        }
    ];

    return (
        <div ref={containerRef} className="bg-white text-slate-900 overflow-hidden font-sans">
            
            {/* --- DYNAMIC HERO SECTION --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                    <img 
                        src="/graphic_design_hero_insd_1772562961040.png" 
                        alt="Graphic Design Hero" 
                        className="w-full h-full object-cover saturate-[1.2] brightness-[0.9]"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/50 via-transparent to-white" />
                </motion.div>

                {/* Floating Abstract Shapes */}
                <div className="absolute inset-0 z-10 pointer-events-none">
                    <div className="bg-shape-1 absolute top-[20%] left-[15%] w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />
                    <div className="bg-shape-2 absolute bottom-[20%] right-[15%] w-80 h-80 bg-secondary/20 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-20 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                    >
                        <span className="px-5 py-2 rounded-full border border-white/40 text-white text-[10px] font-black uppercase tracking-[0.5em] mb-8 backdrop-blur-2xl bg-white/10 inline-flex items-center gap-3">
                            <Sparkles className="w-3 h-3 text-primary animate-pulse" />
                            Synthesizing Visual Intelligence
                        </span>
                        <h1 className="text-7xl md:text-[11rem] font-black tracking-tighter text-white mb-6 uppercase leading-[0.8] mix-blend-difference">
                            Graphic <br />
                            <span className="text-transparent stroke-text-white">Design</span>
                        </h1>
                        <p className="max-w-xl mx-auto text-white/90 text-xl font-light leading-relaxed mb-12 drop-shadow-xl">
                            Evolve beyond pixels. We train creators to build visual languages that speak to the global subconscious.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <button className="px-12 py-6 bg-white text-slate-950 font-black uppercase text-xs tracking-[0.2em] rounded-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] hover:bg-primary hover:text-white transition-all duration-500 group flex items-center gap-4">
                                Start Your Application <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </button>
                            <button className="flex items-center gap-4 text-white font-bold uppercase text-[10px] tracking-[0.3em] group">
                                <div className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <Play className="w-4 h-4 fill-white" />
                                </div>
                                Design Reel 2026
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- MANIFESTO SECTION --- */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-24 items-center">
                        <div className="lg:w-1/2 space-y-12 order-2 lg:order-1">
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] header-reveal">
                                The Master <br />
                                <span className="text-primary italic">Syntax</span>
                            </h2>
                            <p className="text-xl text-slate-600 leading-relaxed font-light header-reveal max-w-lg">
                                Graphic design is no longer just about making things "look good." It's about engineering communication protocols that cut through the noise of the information age. 
                                <br /><br />
                                At INSD, we strip design down to its rawest elements—form, color, and psychology—and rebuild it for the digital-first economy. You'll master everything from neural-network branding to experimental 3D typography.
                            </p>
                            <div className="grid grid-cols-2 gap-10 pt-8 header-reveal">
                                {[
                                    { label: "Design Labs", val: "24/7" },
                                    { label: "Global Alumni", val: "10k+" },
                                    { label: "Award Wins", val: "150+" },
                                    { label: "Placement Rate", val: "99%" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <span className="block text-4xl font-black text-slate-950 mb-1">{stat.val}</span>
                                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 relative order-1 lg:order-2">
                             <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                                <img 
                                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=1200" 
                                    className="w-full aspect-[5/4] object-cover scale-105 hover:scale-100 transition-transform duration-1000" 
                                    alt="Syntax Studio" 
                                />
                             </div>
                             {/* Floating Accents */}
                             <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
                             <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODULAR ECOSYSTEM --- */}
            <section className="py-40 bg-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 module-grid">
                        {modules.map((mod, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -20 }}
                                className="module-card group bg-white/5 p-4 rounded-[2.5rem] border border-white/10 relative overflow-hidden"
                            >
                                <div className="absolute top-8 right-8 text-white/10 group-hover:text-primary transition-colors duration-500">
                                    <mod.icon size={100} strokeWidth={0.5} />
                                </div>
                                <div className="h-56 overflow-hidden rounded-[2rem] mb-8 relative z-10">
                                    <img src={mod.image} alt={mod.title} className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 hover:scale-110" />
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 bg-white text-slate-950 rounded-full text-[8px] font-black tracking-widest uppercase">
                                            {mod.tag}
                                        </span>
                                    </div>
                                </div>
                                <div className="px-4 pb-10 relative z-10">
                                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">{mod.title}</h4>
                                    <p className="text-sm text-white/40 leading-relaxed font-light">{mod.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TECH STACK SECTION --- */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <span className="text-primary font-black text-xs uppercase tracking-[0.5em] mb-12 block">The Industrial Stack</span>
                    <div className="flex flex-wrap justify-center items-center gap-16 md:gap-32 opacity-20 grayscale">
                       {/* Placeholder for Software Logos */}
                       {["ADOBE", "FIGMA", "BLENDER", "SPLINE", "MIDJOURNEY", "WEBFLOW"].map(tool => (
                           <span key={tool} className="text-4xl font-black text-slate-900 tracking-tighter">{tool}</span>
                       ))}
                    </div>
                    <div className="mt-32 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div className="p-10 bg-slate-50 rounded-3xl space-y-4 border border-slate-100 hover:border-primary transition-colors">
                            <Monitor className="text-primary w-10 h-10" />
                            <h5 className="text-lg font-black uppercase">Workstation Access</h5>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">Unlimited access to Apple Silicon workstations loaded with the full creative enterprise suite.</p>
                        </div>
                        <div className="p-10 bg-slate-50 rounded-3xl space-y-4 border border-slate-100 hover:border-primary transition-colors">
                            <Globe className="text-secondary w-10 h-10" />
                            <h5 className="text-lg font-black uppercase">Global Network</h5>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">Collaborate on live briefs with international studios from New York to Berlin.</p>
                        </div>
                        <div className="p-10 bg-slate-50 rounded-3xl space-y-4 border border-slate-100 hover:border-primary transition-colors">
                            <Layers className="text-slate-900 w-10 h-10" />
                            <h5 className="text-lg font-black uppercase">XR Exploration</h5>
                            <p className="text-xs text-slate-500 font-light leading-relaxed">Master the future of design with spatial UI and extended reality design protocols.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-linear-to-r from-primary/30 to-secondary/30 mix-blend-overlay z-10" />
                    <img 
                        src="https://images.unsplash.com/photo-1614850523296-e8c041de4398?auto=format&fit=crop&q=80&w=2000" 
                        alt="Final CTA Graphic" 
                        className="w-full h-full object-cover blur-sm opacity-40 grayscale"
                    />
                </div>
                
                <div className="relative z-20 text-center container mx-auto px-6">
                    <motion.div
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 50 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
                            Define The <br /> <span className="text-transparent stroke-text-white italic">Future?</span>
                        </h2>
                        <div className="max-w-md mx-auto relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <button className="relative px-12 py-7 bg-white rounded-full text-slate-950 font-black uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 w-full group">
                                Apply for Session 2026 
                                <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                        <div className="mt-16 flex flex-wrap justify-center items-center gap-12 text-[10px] font-black text-white/30 tracking-[0.5em]">
                           <span>PORTFOLIO FIRST</span>
                           <div className="w-1 h-1 bg-white/20 rounded-full" />
                           <span>INDUSTRY LED</span>
                           <div className="w-1 h-1 bg-white/20 rounded-full" />
                           <span>GLOBAL SCOPE</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default GraphicDesigning;
