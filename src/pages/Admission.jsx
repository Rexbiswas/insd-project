import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRegisterModal } from '../context/RegisterModalContext';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const Admission = () => {
    const { openModal } = useRegisterModal();
    const containerRef = useRef(null);
    const apertureRef = useRef(null);
    const { scrollYProgress } = useScroll();
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


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
        { title: "Design Tech", img: `https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1200}`, hex: "var(--color-primary)" },
        { title: "Visual Arts", img: `https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1200}`, hex: "var(--color-secondary)" },
        { title: "Luxury Fashion", img: `https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1200}`, hex: "var(--color-primary)" }
    ];


    return (
        <div ref={containerRef} className="bg-[#f3f3f3] text-slate-900 selection:bg-primary font-sans overflow-hidden border-y border-slate-300">
            <SEO 
                title="Design Admissions 2026 India | Apply for Fashion & Interior - INSD"
                description="Secure your seat at INSD, India's top-rated design school. Admissions open for 2026 Batch in Fashion, Interior, Graphic, and Animation. Apply online and launch your creative career."
                keywords="design admissions 2026, design school admission Delhi, apply for fashion design India, NIFT alternative, design course application, creative education 2026, design entrance exams India"
            />

            {/* 1. THE APERTURE HERO */}
            <section ref={apertureRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Video (Revealed by Aperture) */}
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover grayscale" src="https://assets.mixkit.co/videos/preview/mixkit-abstract-fast-and-bright-neon-lines-20377-large.mp4" />
                </div>

                {/* The Masking Layer */}
                <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
                    <div className="aperture-mask w-40 h-40 bg-white rounded-full scale-[20]" style={{ boxShadow: '0 0 0 500vmax #ffffff' }}></div>
                </div>

                <div className="relative z-20 text-center px-6">
                    <h2 className="text-primary font-mono tracking-[0.5em] md:tracking-[1em] text-[9px] md:text-[10px] uppercase mb-8">System_Initiate</h2>
                    <h1 className="aperture-title text-5xl md:text-8xl lg:text-[14rem] font-black uppercase leading-[0.85] tracking-tighter italic">
                        The Core <br /> <span className="text-transparent strok-text-black opacity-40">Protocol.</span>
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
                                className="flex-1 space-y-6 md:space-y-10"
                            >
                                <span className="text-primary font-mono text-[10px] md:text-xs tracking-widest uppercase">Module_{section.title.replace(' ', '_')}</span>
                                <h2 className="text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.85] tracking-tighter text-slate-900">
                                    {section.title.split(' ')[0]} <br /> <span className="opacity-30 italic">{section.title.split(' ')[1] || 'Core'}</span>
                                </h2>
                                <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-sm">
                                    A deep dive into high-fidelity execution and conceptual disruption within {section.title}.
                                </p>
                                <button className="px-8 md:px-10 py-3 md:py-4 border border-slate-300 rounded-full font-bold uppercase tracking-widest text-[10px] md:text-xs text-slate-700 hover:border-primary hover:text-primary transition-all shadow-sm focus:shadow-md">
                                    View Syllabus
                                </button>
                            </motion.div>

                        </div>
                    ))}
                </div>
            </section>

            {/* 3. THE "DECK" STACK (Pure CSS/GSAP Hybrid) */}
            <section className="py-64 bg-white text-slate-900 px-6 rounded-[5rem] -translate-y-20 relative z-20 shadow-sm border border-slate-200">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-40">
                        <h2 className="text-[12vw] font-black uppercase leading-none tracking-tighter mb-10">Elite <br /> Access.</h2>
                        <div className="w-20 h-2 bg-primary mx-auto" />
                    </div>

                    <div className="space-y-24 md:space-y-40">
                        {[
                            { step: "01", val: "Portfolio Scan", desc: "A qualitative assessment of your creative intuition and visual logic." },
                            { step: "02", val: "Dean's Vetting", desc: "High-level strategic conversation regarding your industry trajectory." }
                        ].map((m, i) => (
                            <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-16 items-start group">
                                <span className="text-7xl md:text-9xl font-black text-slate-100 leading-none group-hover:text-primary/20 transition-colors uppercase">{m.step}</span>
                                <div className="space-y-4 md:space-y-6 pt-0 md:pt-4">
                                    <h3 className="text-2xl md:text-4xl font-extrabold uppercase italic">{m.val}</h3>
                                    <p className="text-slate-500 text-lg md:text-2xl font-light leading-tight">{m.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* 4. THE EDITORIAL FORM */}
            <section className="py-64 px-6 bg-[#f3f3f3] border-t border-slate-300">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-7xl font-black uppercase leading-none tracking-tighter mb-10 text-slate-900">Sign <br /> The <br /> Registry.</h2>
                        <p className="text-slate-600 text-sm font-mono uppercase tracking-[0.2em] leading-relaxed">
                            Official application for the 2026 Academic Cycle. Secure your uplink.
                        </p>
                    </div>

                    <div className="md:w-2/3 w-full flex flex-col items-center justify-center border-2 border-slate-200 rounded-[4rem] p-12 md:p-32 bg-white shadow-xl group relative overflow-hidden">
                        {/* Decorative background element */}
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply" />

                        <h3 className="text-4xl md:text-7xl font-black uppercase mb-12 text-center text-slate-900 group-hover:text-primary transition-colors leading-[0.8] tracking-tighter relative z-10">Ready to <br /> Begin?</h3>

                        <button
                            onClick={openModal}
                            className="relative z-10 w-full md:w-auto px-12 md:px-20 py-6 md:py-8 bg-primary border-primary text-white font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-[10px] md:text-sm hover:bg-[#a61517] hover:shadow-[0_0_40px_rgba(219,52,54,0.4)] transition-all shadow-md rounded-full text-center group/btn"
                        >
                            <span className="flex items-center justify-center gap-4">
                                Open Protocol Sequence
                                <ArrowRight className="group-hover/btn:translate-x-4 transition-transform size-4" />
                            </span>
                        </button>


                        <div className="mt-12 flex gap-4 opacity-50 relative z-10">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150" />
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-300" />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Admission;
