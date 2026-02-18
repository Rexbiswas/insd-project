import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRegisterModal } from '../context/RegisterModalContext';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Admission = () => {
    const { openModal } = useRegisterModal();
    const containerRef = useRef(null);
    const apertureRef = useRef(null);
    const { scrollYProgress } = useScroll();

    // Lenis Smooth Scroll
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    // GSAP Aperture Logic
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Aperture Expanding Circle
            gsap.to(".aperture-mask", {
                width: "300vmax",
                height: "300vmax",
                duration: 2,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: apertureRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: 1,
                    pin: true,
                }
            });

            // Title Reveal within Aperture
            gsap.from(".aperture-title", {
                y: 100,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: apertureRef.current,
                    start: "top 40%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const sections = [
        { title: "Design Tech", img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg", hex: "var(--color-primary)" },
        { title: "Visual Arts", img: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg", hex: "var(--color-secondary)" },
        { title: "Luxury Fashion", img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg", hex: "var(--color-primary)" }
    ];

    return (
        <div ref={containerRef} className="bg-[#080808] text-white selection:bg-primary font-sans overflow-hidden">

            {/* 1. THE APERTURE HERO */}
            <section ref={apertureRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video (Revealed by Aperture) */}
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale" src="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-and-bright-neon-lines-20377-large.mp4" />
                </div>

                {/* The Masking Layer */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="aperture-mask w-40 h-40 bg-[#080808] rounded-full scale-[20]" style={{ boxShadow: '0 0 0 500vmax #080808' }}></div>
                </div>

                <div className="relative z-20 text-center px-6">
                    <h2 className="text-primary font-mono tracking-[1em] text-[10px] uppercase mb-8">System_Initiate</h2>
                    <h1 className="aperture-title text-8xl md:text-[14rem] font-black uppercase leading-none tracking-tighter italic">
                        The Core <br /> <span className="text-transparent stroke-text-white stroke-white!">Protocol.</span>
                    </h1>
                </div>

                <div className="absolute bottom-10 left-10 z-30 font-mono text-[10px] opacity-30 flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center animate-spin-slow">×</div>
                    <span>REVEAL_SEQUENCE_ACTIVE</span>
                </div>
            </section>

            {/* 2. THE STACKED EDITORIAL SECTIONS */}
            <section className="relative z-10 px-6 py-20">
                <div className="max-w-7xl mx-auto space-y-[40vh]">
                    {sections.map((section, i) => (
                        <div key={i} className="relative flex flex-col md:flex-row items-center gap-10 md:gap-20">
                            {/* Sticky Year/Tag */}
                            <div className="hidden md:block absolute -left-20 top-0 rotate-180 [writing-mode:vertical-lr] font-mono text-[10px] tracking-[1em] opacity-20">
                                PHASE_0{i + 1}_TRANSITION_2026
                            </div>

                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, ease: "circOut" }}
                                className="flex-1 w-full"
                            >
                                <div className="group relative aspect-16/10 rounded-2xl overflow-hidden cursor-none">
                                    <img src={section.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt={section.title} />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: "circOut" }}
                                className="flex-1 space-y-10"
                            >
                                <span className="text-primary font-mono text-xs tracking-widest uppercase">Module_{section.title.replace(' ', '_')}</span>
                                <h2 className="text-7xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
                                    {section.title.split(' ')[0]} <br /> <span className="opacity-30 italic">{section.title.split(' ')[1] || 'Core'}</span>
                                </h2>
                                <p className="text-slate-400 text-xl font-light leading-relaxed max-w-sm">
                                    A deep dive into high-fidelity execution and conceptual disruption within {section.title}.
                                </p>
                                <button className="px-10 py-4 border border-white/10 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all">
                                    View Syllabus
                                </button>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. THE "DECK" STACK (Pure CSS/GSAP Hybrid) */}
            <section className="py-64 bg-white text-black px-6 rounded-[5rem] -translate-y-20 relative z-20">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-40">
                        <h2 className="text-[12vw] font-black uppercase leading-none tracking-tighter mb-10">Elite <br /> Access.</h2>
                        <div className="w-20 h-2 bg-black mx-auto" />
                    </div>

                    <div className="space-y-40">
                        {[
                            { step: "01", val: "Portfolio Scan", desc: "A qualitative assessment of your creative intuition and visual logic." },
                            { step: "02", val: "Dean's Vetting", desc: "High-level strategic conversation regarding your industry trajectory." }
                        ].map((m, i) => (
                            <div key={i} className="flex gap-16 items-start group">
                                <span className="text-9xl font-black text-slate-100 leading-none group-hover:text-primary/20 transition-colors uppercase">{m.step}</span>
                                <div className="space-y-6 pt-4">
                                    <h3 className="text-4xl font-extrabold uppercase italic">{m.val}</h3>
                                    <p className="text-slate-500 text-2xl font-light leading-tight">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. THE EDITORIAL FORM */}
            <section className="py-64 px-6 bg-[#080808]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-7xl font-black uppercase leading-none tracking-tighter mb-10">Sign <br /> The <br /> Registry.</h2>
                        <p className="text-slate-500 text-sm font-mono uppercase tracking-[0.2em] leading-relaxed">
                            Official application for the 2026 Academic Cycle. Secure your uplink.
                        </p>
                    </div>

                    <div className="md:w-2/3 w-full flex flex-col items-center justify-center border border-white/20 rounded-[4rem] p-12 md:p-32 bg-white/5 backdrop-blur-[50px] shadow-[inset_0_0_50px_rgba(255,255,255,0.05)] group relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <h3 className="text-4xl md:text-7xl font-black uppercase mb-12 text-center group-hover:text-primary transition-colors leading-[0.8] tracking-tighter relative z-10">Ready to <br /> Begin?</h3>

                        <button
                            onClick={openModal}
                            className="relative z-10 w-full md:w-auto px-20 py-8 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-black uppercase tracking-[0.4em] text-sm hover:bg-white hover:text-black transition-all shadow-2xl rounded-full text-center group/btn"
                        >
                            <span className="flex items-center gap-4">
                                Open Protocol Sequence
                                <ArrowRight className="group-hover/btn:translate-x-4 transition-transform" />
                            </span>
                        </button>

                        <div className="mt-12 flex gap-4 opacity-30 relative z-10">
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-150" />
                            <div className="w-2 h-2 rounded-full bg-white animate-pulse delay-300" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Admission;
