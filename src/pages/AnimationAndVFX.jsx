import React, { useRef, useLayoutEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Zap,
    Layers,
    Globe,
    ArrowRight,
    Award,
    TrendingUp,
    Sparkles,
    ChevronRight,
    Play,
    Cpu,
    Monitor,
    Video,
    Wand2,
    Users
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const AnimationAndVFX = () => {
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
            // Text Revealing - Position only
            gsap.from(".reveal-text", {
                y: 40,
                duration: 1.2,
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".reveal-section",
                    start: "top 85%"
                }
            });

            // Cyber Card Entrance - Position and Scale
            gsap.from(".cyber-card", {
                y: 40,
                scale: 0.95,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".cyber-grid",
                    start: "top 85%"
                }
            });

            // Feature Box Entrance
            gsap.from(".feature-box", {
                y: 20,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".feature-grid",
                    start: "top bottom"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const specializations = [
        {
            title: "3D Character Animation",
            desc: "Breath life into digital souls. Master anatomy, physics, and emotional storytelling through motion.",
            icon: Users,
            tag: "ESSENTIAL",
            color: "from-blue-500 to-cyan-500"
        },
        {
            title: "Advanced VFX Compositing",
            desc: "Merging reality with imagination. Professional-grade integration of CGI into live-action footage.",
            icon: Wand2,
            tag: "TECHNICAL",
            color: "from-purple-500 to-pink-500"
        },
        {
            title: "Cinematic Lighting & Rendering",
            desc: "The physics of light. Mastering global illumination, ray-tracing, and photon mapping for hyper-realism.",
            icon: Sparkles,
            tag: "AESTHETIC",
            color: "from-amber-500 to-orange-500"
        },
        {
            title: "Game Engine Mechanics",
            desc: "Architecture of real-time worlds. Utilizing Unreal Engine & Unity for interactive experiences.",
            icon: Cpu,
            tag: "FUTURISTIC",
            color: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <div ref={containerRef} className="bg-[#1d1d1f] text-slate-900 overflow-hidden font-sans">
            <SEO 
                title="Animation and VFX Courses in Delhi - Best Animation Institute in India"
                description="Master 3D character animation, advanced VFX compositing, and game engine mechanics. INSD's animation institute in India prepares you for global studios and the metaverse."
                keywords="animation courses India, animation institute India, best animation colleges India, 3D animation courses India, VFX courses India, motion graphics courses India"
            />

            {/* --- CINEMATIC HERO --- */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000"
                        alt="Animation and VFX"
                        className="w-full h-full object-cover grayscale opacity-20 brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d1d1f] via-transparent to-white/40" />
                </motion.div>

                {/* Cyber Grid Background - Lighter for white theme */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="inline-block px-5 py-2 rounded-full border border-primary/30 text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-8 bg-primary/5 backdrop-blur-md">
                            The Alchemy of Pixels
                        </span>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-black tracking-tighter mb-6 uppercase leading-[0.9] md:leading-[0.8] text-white">
                            Animation <br />
                            <span className="text-transparent stroke-text-white opacity-20">& VFX</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                            Constructing digital universes where physics is a choice and imagination is the only law. Become a visionary architect of the virtual era.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(236,72,153,0.3)" }}
                                className="px-12 py-6 bg-primary text-white font-black uppercase text-xs tracking-[0.3em] rounded-2xl flex items-center gap-4 group"
                            >
                                START PROTOCOL <Zap className="w-4 h-4 fill-white" />
                            </motion.button>
                            <button className="flex items-center gap-4 text-white/40 hover:text-white font-bold uppercase text-[10px] tracking-[0.4em] transition-all group">
                                <div className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white/5 transition-all">
                                    <Play className="w-4 h-4 fill-white text-white" />
                                </div>
                                THE SHOWREEL
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
                    <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">Scroll to Decode</span>
                    <div className="w-px h-24 bg-gradient-to-b from-primary to-transparent" />
                </div>
            </section>

            {/* --- CORE VISION --- */}
            <section className="py-20 md:py-40 relative reveal-section bg-[#1d1d1f]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="space-y-8 md:space-y-12">
                            <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none reveal-text text-white">
                                Engineered <br />
                                <span className="text-primary italic">To Create</span>
                            </h2>
                            <div className="space-y-6 text-white/40 text-lg md:text-xl font-light leading-relaxed reveal-text">
                                <p>
                                    Animation is no longer just "cartoons." It's the interface of civilization. From Hollywood blockbusters to life-saving medical simulations, the digital artist is the new historian.
                                </p>
                                <p>
                                    At INSD, we don't just teach you how to move sliders in Maya or After Effects. We teach you visual engineering. You will master the core principles of light, anatomy, and motion that will survive any software update.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-12 feature-grid pt-10">
                                {[
                                    { icon: Monitor, label: "Render Farm Access", val: "Unlimited" },
                                    { icon: Video, label: "Motion Capture Lab", val: "Full Body" },
                                    { icon: Award, label: "Global Certification", val: "Autodesk+" },
                                    { icon: Globe, label: "Studio Placements", val: "Top Tier" }
                                ].map((feat, i) => (
                                    <div key={i} className="feature-box flex gap-4 items-start">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                                            <feat.icon size={20} />
                                        </div>
                                        <div>
                                            <span className="block text-xl font-black uppercase text-white">{feat.val}</span>
                                            <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{feat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-primary/20 rounded-[3rem] blur-3xl group-hover:bg-primary/30 transition-all duration-1000" />
                            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl bg-[#1d1d1f] p-2">
                                <img
                                    src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200"
                                    className="w-full h-full object-cover rounded-[2rem] grayscale opacity-60 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                    alt="VFX Scene"
                                />
                                <div className="absolute inset-x-8 bottom-8 p-8 bg-[#1d1d1f]/90 backdrop-blur-md rounded-2xl border border-white/5">
                                    <h4 className="text-2xl font-black uppercase tracking-tighter text-white">Liquid Dynamics Lab</h4>
                                    <p className="text-white/40 text-sm mt-2">Simulating complex environmental phenomena.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SPECIALIZATION GRID --- */}
            <section className="py-20 md:py-40 bg-white/5 backdrop-blur-[2px] border-y border-white/5 cyber-grid reveal-section">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-32 gap-6 md:gap-10">
                        <div className="max-w-2xl">
                            <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.6em] mb-4 md:mb-6 block">The Tech Protocol</span>
                            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] md:leading-[0.8] text-white">
                                Core <br />
                                <span className="text-white/20">Specializations</span>
                            </h2>
                        </div>
                        <p className="max-w-xs text-white/40 text-sm leading-relaxed mb-4">
                            Four pillars designed to transform you into a full-stack digital architect.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {specializations.map((spec, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -15, scale: 1.02 }}
                                className="cyber-card group relative min-h-[450px] md:h-[500px] rounded-[2.5rem] md:rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02] p-8 flex flex-col justify-end transition-all duration-500 hover:bg-white/[0.05] hover:border-white/10"
                            >
                                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700`} />

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <spec.icon size={28} />
                                    </div>
                                    <span className="text-[10px] font-black text-primary tracking-[0.4em] uppercase mb-4 block">{spec.tag}</span>
                                    <h4 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none text-white transition-colors">{spec.title}</h4>
                                    <p className="text-white/40 text-sm leading-relaxed font-light">{spec.desc}</p>

                                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between group-hover:translate-x-1 transition-all duration-500">
                                        <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest group-hover:text-white transition-colors">Explore Syllabus</span>
                                        <ChevronRight className="text-primary" size={20} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INDUSTRY LEVEL STANDARDS --- */}
            <section className="py-24 md:py-40 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-24">
                        <span className="text-primary font-black text-xs uppercase tracking-[0.5em] mb-4 block">Professional Grade</span>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter">Industry <span className="text-transparent stroke-text-white opacity-20">Level</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "AAA Pipeline", desc: "Master the exact technical workflows used in top-tier gaming and film studios like Pixar and Rockstar Games.", icon: Cpu },
                            { title: "Real-time Rendering", desc: "Specialized training in Unreal Engine 5 and Unity for the next generation of interactive cinema.", icon: Layers },
                            { title: "Studio Protocol", desc: "Simulation of professional studio environments, deadlines, and multi-disciplinary collaboration.", icon: Users },
                        ].map((item, i) => (
                            <div key={i} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 backdrop-blur-xl group hover:bg-white/10 transition-all duration-500">
                                <item.icon className="w-12 h-12 text-primary mb-8 group-hover:scale-110 transition-transform" />
                                <h4 className="text-2xl font-black text-white uppercase mb-4 tracking-tighter">{item.title}</h4>
                                <p className="text-white/40 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- PROGRAM PATHWAYS (Image UI Style) --- */}
            <section className="py-24 md:py-40 bg-slate-900/50 border-y border-white/5 relative">
                <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-10">Program <br /> <span className="text-primary italic">Pathways</span></h2>
                        <p className="text-white/40 max-w-sm font-light leading-relaxed">Select the track that aligns with your academic standing and professional ambitions. From foundation to mastery.</p>
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
                                <div className={`h-[1px] transition-all duration-700 ${path.active ? 'w-32 bg-primary' : 'w-0 bg-white/20 group-hover:w-16'}`} />
                                <span className={`text-3xl md:text-5xl font-bold uppercase tracking-tighter transition-all duration-300 ml-6 ${path.active ? 'text-primary' : 'text-white/20 group-hover:text-white'}`}>{path.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CAREER OPPORTUNITIES --- */}
            <section className="py-24 md:py-40 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-center mb-24 gap-12 text-center lg:text-left">
                        <div className="max-w-2xl">
                            <h2 className="text-6xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none mb-6">Global <br /> <span className="text-primary italic">Opportunities</span></h2>
                            <p className="text-slate-500 text-lg md:text-xl font-light">The demand for digital architects is exploding. Your skills will translate across industries from film and gaming to medicine and engineering.</p>
                        </div>
                        <div className="flex items-center gap-4 py-8 px-12 rounded-[2.5rem] bg-slate-50 border border-slate-100">
                            <div className="text-center">
                                <span className="block text-4xl font-black text-slate-950">40%</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Growth Rate</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { role: "CGI Supervisor", salary: "$120k+", demand: "High" },
                            { role: "VFX Compositor", salary: "$95k+", demand: "Critical" },
                            { role: "Technical Director", salary: "$140k+", demand: "Moderate" },
                            { role: "3D Environment Artist", salary: "$85k+", demand: "Very High" },
                            { role: "Motion Designer", salary: "$75k+", demand: "Stable" },
                            { role: "Lighting Lead", salary: "$110k+", demand: "High" },
                            { role: "Character Animator", salary: "$90k+", demand: "High" },
                            { role: "Game Level Designer", salary: "$100k+", demand: "Explosive" },
                        ].map((path, i) => (
                            <div key={i} className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:scale-[1.02] transition-all duration-500">
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
                    <div className="relative rounded-[4rem] overflow-hidden bg-slate-900 p-12 md:p-32 text-center group">
                        <div className="absolute inset-0 z-0">
                            <img
                                src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&q=80&w=2000"
                                className="w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-[3s]"
                                alt="Final CTA"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-secondary/40 mix-blend-overlay" />
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto space-y-10">
                            <h2 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter leading-none">
                                Stop Watching. <br /> <span className="text-transparent stroke-text-white">Start Rendering.</span>
                            </h2>
                            <p className="text-white/60 text-lg md:text-xl font-light uppercase tracking-[0.2em]">Priority Admissions Open for 2026 Batch</p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-6 px-16 py-8 bg-white text-slate-900 rounded-full font-black uppercase text-sm tracking-[0.4em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-500"
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

export default AnimationAndVFX;
