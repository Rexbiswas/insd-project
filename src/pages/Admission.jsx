import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRegisterModal } from '../context/RegisterModalContext';
import AdmissionForm from '../components/AdmissionForm';
import FinalCTA from '../components/FinalCTA';
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

            <FinalCTA />
            {/* 1. THE APERTURE HERO */}

            <div className="py-24 px-6 md:px-12 bg-[#f3f3f3] border-b border-slate-300">
                <AdmissionForm />
            </div>

            {/* 2. THE STACKED EDITORIAL SECTIONS */}
            <section className="relative z-10 px-6 py-20">
                <div className="max-w-7xl mx-auto space-y-[40vh]">
                    {sections.map((section, i) => (
                        <div key={i} className="relative flex flex-col md:flex-row items-center gap-10 md:gap-20">
                            {/* Sticky Year/Tag */}
                            <div className="hidden md:block absolute -left-20 top-0 rotate-180 [writing-mode:vertical-lr] font-mono text-[10px] tracking-[1em] opacity-20">
                                {i + 1}
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



            <Footer />
        </div>
    );
};

export default Admission;
