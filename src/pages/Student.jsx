import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DreamLife from '../components/DreamLife';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Zap, Sparkles, GraduationCap, Globe, Palette, UserCheck, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Student = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Hero Title Reveal
            gsap.from(".hero-title span", {
                y: 100,
                opacity: 0,
                stagger: 0.1,
                duration: 1.5,
                ease: "expo.out",
                delay: 0.5
            });

            // Parallax Images
            gsap.utils.toArray('.parallax-img').forEach((img) => {
                gsap.to(img, {
                    yPercent: -30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        start: "top bottom",
                        scrub: true
                    }
                });
            });

            // Vision Text Highlighting
            const splitText = document.querySelectorAll(".vision-text");
            splitText.forEach((text) => {
                gsap.to(text, {
                    backgroundSize: "100% 100%",
                    duration: 1,
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%",
                        scrub: true,
                        end: "bottom 40%"
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Mouse movement effect for the custom cursor light
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const features = [
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Creative Liberty",
            desc: "Zero boundaries. We encourage experiments that break the mold and redefine traditional design paradigms."
        },
        {
            icon: <Globe className="w-6 h-6" />,
            title: "Global Network",
            desc: "Connect with design innovators from Paris to New York. Your canvas is the entire world."
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Future Powered",
            desc: "Access cutting-edge tools and AI-driven design workflows to stay ahead of the industrial curve."
        },
        {
            icon: <UserCheck className="w-6 h-6" />,
            title: "Industry Mentors",
            desc: "Learn directly from the legends who shape the global luxury and commercial design markets."
        }
    ];

    const stats = [
        { label: "Global Campus Network", val: "Across India & Paris" },
        { label: "Industry Partners", val: "500+" },
        { label: "Design Disciplines", val: "12 Curated Streams" }
    ];

    return (
        <main ref={containerRef} className="bg-white text-slate-900 overflow-hidden selection:bg-primary selection:text-white">
            <SEO 
                title="Student Life at INSD - Where Freedom Meets Education"
                description="Experience the most vibrant design student life in India. From creative freedom to global exposure, INSD offers an education that goes beyond the classroom."
            />

            {/* Premium Cursor / Ambient Light Following (Subtle) */}
            <div className="fixed inset-0 pointer-events-none z-100 mix-blend-difference hidden lg:block opacity-40">
                <div 
                    className="w-12 h-12 bg-white rounded-full blur-2xl fixed"
                    style={{ 
                        left: 'var(--mouse-x, 0)',
                        top: 'var(--mouse-y, 0)',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </div>

            {/* Immersive Hero Section */}
            <section 
                ref={heroRef} 
                className="relative min-h-[110vh] flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden"
                onMouseMove={(e) => {
                    const x = (e.clientX / window.innerWidth - 0.5) * 20;
                    const y = (e.clientY / window.innerHeight - 0.5) * 20;
                    gsap.to(".hero-inner", { x, y, duration: 1, ease: "power2.out" });
                }}
            >
                {/* Background Image Layer with Zoom Effect */}
                <motion.div 
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="absolute inset-0"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2000" 
                        alt="Creative Background" 
                        className="w-full h-full object-cover grayscale brightness-80" 
                    />
                </motion.div>
                
                <div className="absolute inset-0 bg-linear-to-b from-slate-50/40 via-white/80 to-white" />
                
                {/* Floating Glassmorphic Blobs */}
                <motion.div 
                    animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 5, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 blur-3xl rounded-full"
                />
                <motion.div 
                    animate={{ 
                        y: [0, 20, 0],
                        rotate: [0, -5, 0]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 left-10 w-80 h-80 bg-slate-200/50 blur-3xl rounded-full"
                />

                <div className="container mx-auto relative z-10 hero-inner">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="inline-flex items-center gap-3 px-8 py-3 rounded-full border border-slate-200 bg-white/40 backdrop-blur-xl mb-12 shadow-2xl"
                        >
                            <Sparkles className="w-4 h-4 text-primary animate-bounce" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-800">The New Vanguard of Design</span>
                        </motion.div>

                        <h1 className="hero-title text-7xl md:text-[13vw] font-black uppercase tracking-tighter leading-[0.75] mb-12">
                            <span className="inline-block overflow-hidden">FREEDOM</span> <br />
                            <span className="inline-block overflow-hidden italic font-serif text-slate-300 font-extralight drop-shadow-sm">TO</span> <br />
                            <span className="inline-block overflow-hidden text-primary underline decoration-slate-100 decoration-8 underline-offset-[20px]">STUDY.</span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1 }}
                            className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 font-light leading-relaxed mb-16 px-4"
                        >
                            Ditch the textbooks. Here, your degree is etched in <span className="text-slate-900 font-bold">vision</span> and <span className="text-slate-900 font-bold italic">rebellion.</span> This is where the legends of tomorrow are forged.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <button className="group relative bg-slate-900 text-white px-16 py-7 rounded-full text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:pr-20 shadow-2xl active:scale-95">
                                <span className="relative z-10">Initialize Journey</span>
                                <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5 translate-x-4 group-hover:translate-x-0" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Aesthetic Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 hidden md:flex"
                >
                    <div className="w-px h-20 bg-linear-to-b from-slate-200 to-transparent" />
                </motion.div>
            </section>

            {/* Strategic Branding Marquee (Infinite) */}
            <div className="py-12 bg-slate-50 border-y border-slate-100 overflow-hidden relative z-20">
                <motion.div 
                    animate={{ x: [0, -2000] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap gap-20 items-center"
                >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="flex gap-20 items-center">
                            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200 hover:text-primary transition-colors cursor-default">Creative Liberty</span>
                            <div className="w-3 h-3 bg-primary rounded-full" />
                            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">Global Exposure</span>
                            <div className="w-3 h-3 bg-primary rounded-full" />
                            <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-200">Future Ready</span>
                            <div className="w-3 h-3 bg-primary rounded-full" />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Content Parallax Section (Grid Upgrade) */}
            <section className="py-32 md:py-60 px-6 relative bg-white">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center mb-40">
                        <div className="lg:col-span-5 relative z-10">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1 }}
                            >
                                <h2 className="text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter text-slate-900 mb-10">
                                    The City<br />
                                    <span className="text-slate-200 stroke-text-black italic">IS THE </span><br />
                                    Campus.
                                </h2>
                                <p className="text-slate-500 text-xl font-light leading-relaxed mb-12 max-w-lg">
                                    We’ve swapped traditional borders for <span className="font-bold text-slate-900 underline decoration-primary underline-offset-4">limitless potential</span>. Your learning space extends from our high-tech studios to the most influential design capitals.
                                </p>
                                <div className="space-y-4">
                                    {stats.map((item, i) => (
                                        <div key={i} className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-slate-900 transition-all duration-500 hover:translate-x-4">
                                            <span className="block text-[8px] font-black uppercase tracking-widest text-primary mb-1">{item.label}</span>
                                            <span className="text-xl font-black group-hover:text-white transition-colors">{item.val}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                        <div className="lg:col-span-7 grid grid-cols-2 gap-6 md:gap-10 h-[700px] md:h-[1000px] items-center relative">
                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border border-slate-100 rounded-[4rem] scale-105 pointer-events-none" />
                            
                            <div className="parallax-img w-full h-[120%] relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000" alt="Student Life 1" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            <div className="parallax-img w-full h-[120%] mt-40 relative rounded-[2rem] md:rounded-[4rem] overflow-hidden shadow-2xl ring-8 ring-white">
                                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000" alt="Student Life 2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* High Impact Vision Strip */}
            <section className="relative h-[80vh] bg-slate-900 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                    <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2000" className="w-full h-full object-cover" />
                </div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.p 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-none text-white uppercase"
                    >
                        Learn. <span className="text-primary italic">Break.</span> Build.<br />
                        <span className="text-[2rem] md:text-[3rem] font-light text-slate-500 tracking-[0.2em]">The INSD Protocol.</span>
                    </motion.p>
                </div>
            </section>

            {/* Features/Values Grid (Interactive Cards Upgrade) */}
            <section className="py-32 md:py-60 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex justify-between items-end mb-24 md:mb-40">
                        <div className="max-w-2xl">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.5em] text-primary mb-6">Student First</h3>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.85]">
                                Engineered for <br />
                                Excellence.
                            </h2>
                        </div>
                        <div className="hidden lg:block w-32 h-32 border-2 border-slate-100 rounded-full flex items-center justify-center animate-spin-slow">
                            <ArrowRight className="w-8 h-8 text-slate-200 rotate-[315deg]" />
                        </div>
                    </div>
                    
                    <div className="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        {features.map((feature, i) => (
                            <motion.div 
                                key={i} 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="group relative p-12 bg-white rounded-4xl hover:bg-slate-900 transition-all duration-700 border border-slate-100 hover:border-slate-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-primary/30 cursor-pointer overflow-hidden"
                            >
                                {/* Animated Back Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-10 -translate-y-10 group-hover:scale-[3] transition-transform duration-1000" />
                                
                                <div className="relative z-10">
                                    <div className="relative mb-10 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:-translate-y-3 transition-all duration-500 ease-out shadow-sm group-hover:shadow-[0_20px_40px_-10px_rgba(219,52,54,0.3)]">
                                    <motion.div 
                                        whileHover={{ scale: 1.2 }}
                                        className="transition-transform duration-500"
                                    >
                                        {feature.icon}
                                    </motion.div>
                                </div>
                                    <h4 className="text-2xl font-black uppercase tracking-tight text-slate-900 group-hover:text-white mb-6">
                                        {feature.title}
                                    </h4>
                                    <p className="text-slate-500 group-hover:text-slate-400 font-light leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dream Life Integration */}
            <DreamLife />

            {/* CTA High-End Section */}
            <section className="py-40 md:py-80 bg-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(219,52,54,0.1),transparent_70%)]" />
                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto"
                    >
                        <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter text-white mb-12 leading-[0.75]">
                            Evolve <span className="text-primary italic font-serif">Today.</span>
                        </h2>
                        <p className="text-xl md:text-3xl text-slate-400 font-light mb-20 max-w-3xl mx-auto leading-relaxed">
                            Stop spectating. Start dominating. The portal to your creative legacy is now open. 
                        </p>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                            <button className="w-full md:w-auto bg-primary text-white px-20 py-8 rounded-full text-sm font-black uppercase tracking-widest hover:bg-white hover:text-primary transition-all shadow-3xl hover:-translate-y-3">
                                Secure Admission 2026
                            </button>
                            <button className="w-full md:w-auto px-20 py-8 rounded-full text-sm font-black uppercase tracking-widest text-white border border-white/20 hover:bg-white/5 transition-all">
                                Request Access
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Student;
