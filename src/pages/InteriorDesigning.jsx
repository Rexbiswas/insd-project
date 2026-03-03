import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
    Home, 
    Layout, 
    Box, 
    Compass, 
    Star, 
    Zap, 
    ArrowRight, 
    Award, 
    Users, 
    TrendingUp, 
    Sparkles, 
    ChevronRight,
    Play,
    PenTool
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

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance Animations
            gsap.from(".reveal-text", {
                y: 80,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 85%"
                }
            });

            gsap.from(".module-card", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: ".module-grid",
                    start: "top 80%"
                }
            });

            gsap.from(".feature-image", {
                scale: 1.1,
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".feature-image",
                    start: "top 80%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const modules = [
        {
            title: "Spatial Planning",
            desc: "Optimizing the geometry of living spaces for fluid human movement and functional efficiency.",
            icon: Layout,
            image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
            tag: "STRUCTURAL"
        },
        {
            title: "Material Science",
            desc: "A sensory exploration of textures, acoustics, and sustainable high-performance finishes.",
            icon: Box,
            image: "/interior_lighting_material_insd_1772562541472.png",
            tag: "TECHNICAL"
        },
        {
            title: "3D Visualization",
            desc: "Engineered photorealistic environments using cutting-edge BIM and parametric design software.",
            icon: PenTool,
            image: "/interior_visualization_module_insd_1772562524308.png",
            tag: "VISUAL"
        },
        {
            title: "Vastu & Psychology",
            desc: "Connecting ancient wisdom with modern environmental psychology to create healing spaces.",
            icon: Compass,
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
            tag: "WELLNESS"
        }
    ];

    return (
        <div ref={containerRef} className="bg-white text-slate-900 overflow-hidden font-sans">
            
            {/* --- HERO SECTION --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                    <img 
                        src="/interior_design_hero_insd_1772562509656.png" 
                        alt="Interior Design Hero" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full border border-white/40 text-white text-[10px] font-black uppercase tracking-[0.5em] mb-8 backdrop-blur-xl bg-white/5">
                            Architecting the Void
                        </span>
                        <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter text-white mb-6 uppercase leading-[0.8]">
                            Interior <br />
                            <span className="text-transparent stroke-text-white">Design</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-white/90 text-lg font-light leading-relaxed mb-12 drop-shadow-lg">
                            Master the delicate balance of luxury, ergonomics, and technology. We don't just decorate rooms; we engineer sensory experiences within the built environment.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-12 py-6 bg-slate-900 text-white font-black uppercase text-xs tracking-widest rounded-full shadow-2xl flex items-center gap-3 group overflow-hidden relative"
                            >
                                <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                <span className="relative z-10">Start Your Journey</span> 
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
                            </motion.button>
                            <button className="flex items-center gap-4 text-white font-black uppercase text-[10px] tracking-widest group">
                                <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
                                    <Play className="w-5 h-5 fill-current" />
                                </div>
                                Virtual Studio Tour
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Accents */}
                <div className="absolute left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-32">
                    <div className="w-px h-32 bg-white/30" />
                    <span className="origin-center rotate-90 text-[10px] font-black text-white/40 uppercase tracking-[1em] whitespace-nowrap">
                        GLOBAL PEDAGOGY
                    </span>
                    <div className="w-px h-32 bg-white/30" />
                </div>
            </section>

            {/* --- PHILOSOPHY SECTION --- */}
            <section className="py-40 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <div className="space-y-12">
                            <span className="text-secondary font-black text-xs uppercase tracking-[0.4em] block reveal-text">The Institutional Ethos</span>
                            <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] reveal-text">
                                Design <br />
                                <span className="text-slate-200">Beyond</span> <br />
                                <span className="text-primary italic font-serif">Aesthetics</span>
                            </h2>
                            <p className="text-xl text-slate-500 leading-relaxed font-light reveal-text max-w-lg">
                                Interior design is the bridge between architecture and the human soul. Our curriculum integrates advanced spatial theory with high-end luxury branding, ensuring our graduates can handle multi-million dollar residential and commercial projects. 
                                <br /><br />
                                From understanding the technicalities of HVAC and lighting systems to the nuances of Italian furniture craftsmanship, we provide a 360-degree technical and creative arsenal.
                            </p>
                            <div className="flex gap-12 pt-8 reveal-text">
                                <div>
                                    <span className="block text-4xl font-black mb-1">95%</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Placements</span>
                                </div>
                                <div className="w-px bg-slate-200" />
                                <div>
                                    <span className="block text-4xl font-black mb-1">12</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Industry Awards</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-slate-100 rounded-[3rem] -z-10 group-hover:-inset-6 transition-all duration-500" />
                            <img 
                                src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=1000" 
                                alt="Studio Philosophy" 
                                className="w-full aspect-[4/5] object-cover rounded-[2.5rem] shadow-2xl feature-image"
                            />
                            <div className="absolute top-12 -left-12 bg-white p-8 rounded-3xl shadow-xl space-y-4 max-w-[200px] hidden md:block backdrop-blur-md bg-white/80 border border-slate-100">
                                <Award className="w-10 h-10 text-primary" />
                                <h5 className="font-black uppercase text-xs tracking-tighter">Gold Standard Certification</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MASTER MODULES --- */}
            <section className="py-40 bg-[#f3f3f3] text-slate-900">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 module-grid">
                        {modules.map((mod, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -15 }}
                                className="module-card group bg-white rounded-[2.5rem] overflow-hidden shadow-xl p-3 transition-all duration-500"
                            >
                                <div className="h-64 overflow-hidden rounded-[2rem] mb-8 relative">
                                    <img src={mod.image} alt={mod.title} className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" />
                                </div>
                                <div className="px-6 pb-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-lg">
                                            <mod.icon className="w-6 h-6" strokeWidth={2.5} />
                                        </div>
                                        <span className="px-4 py-1.5 border border-slate-200 rounded-full text-[9px] font-black tracking-widest uppercase text-slate-400">
                                            {mod.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter group-hover:text-primary transition-colors">{mod.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed font-light">{mod.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- IMMERSIVE INDUSTRY SECTION --- */}
            <section className="py-40 bg-white overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
                            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
                                Placement <br /> <span className="text-secondary italic">Powerhouse</span>
                            </h2>
                            <p className="text-lg text-slate-500 font-light leading-relaxed">
                                Our industry network is the backbone of the INSD success story. We don't just connect you with firms; we prepare you to lead them.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: "Global Internships", desc: "Placements with top architectural firms in Milan, Dubai, and Singapore." },
                                    { title: "Industry Mentors", desc: "Learn directly from award-winning designers and project managers." },
                                    { title: "Portfolio Engineering", desc: "Build a world-class digital portfolio that opens elite doors." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-6 group cursor-default">
                                        <div className="w-1.5 h-16 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="w-full h-0 group-hover:h-full bg-secondary transition-all duration-700" />
                                        </div>
                                        <div>
                                            <h5 className="text-lg font-black uppercase tracking-tight mb-2">{item.title}</h5>
                                            <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:col-span-7 relative order-1 lg:order-2">
                             <div className="grid grid-cols-2 gap-6 h-[600px]">
                                <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover rounded-[2rem] translate-y-12" alt="Ind 1" />
                                <img src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=800" className="w-full h-[80%] object-cover rounded-[2rem]" alt="Ind 2" />
                             </div>
                             <div className="absolute inset-0 bg-linear-to-l from-white via-transparent to-transparent pointer-events-none hidden lg:block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CALL TO ACTION --- */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000" 
                        alt="Final CTA Interior" 
                        className="w-full h-full object-cover opacity-30 grayscale saturate-0"
                    />
                    <div className="absolute inset-0 bg-slate-950/60" />
                </div>
                
                <div className="relative z-10 text-center container mx-auto px-6">
                    <motion.div
                        whileInView={{ opacity: 1, scale: 1 }}
                        initial={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1 }}
                    >
                        <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none mb-12">
                            Build Your <br /> <span className="text-secondary italic">Legacy</span>
                        </h2>
                        <div className="max-w-md mx-auto relative group">
                            <div className="absolute -inset-1 bg-linear-to-r from-secondary to-primary rounded-full blur-xl opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
                            <button className="relative px-12 py-7 bg-white rounded-full text-slate-950 font-black uppercase text-sm tracking-widest flex items-center justify-center gap-4 w-full shadow-2xl transition-transform hover:scale-105">
                                Apply for Session 2026 <ArrowRight className="w-5 h-5 text-secondary" />
                            </button>
                        </div>
                        <div className="mt-12 flex items-center justify-center gap-8 opacity-40 grayscale pointer-events-none">
                           <span className="text-xs font-black text-white tracking-widest">NAAC ACCREDITED</span>
                           <div className="w-1 h-1 bg-white rounded-full" />
                           <span className="text-xs font-black text-white tracking-widest">ISO 9001:2015</span>
                           <div className="w-1 h-1 bg-white rounded-full" />
                           <span className="text-xs font-black text-white tracking-widest">GLOBAL CAMPUSES</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default InteriorDesigning;
