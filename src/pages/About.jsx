import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SocialProof from '../components/SocialProof';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const heroTextRef = useRef(null);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Lenis Smooth Scroll Integration
    useEffect(() => {
        const lenis = new Lenis({
            lerp: 0.1,
            smoothWheel: true,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Zoom-Through Hero Reveal
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 1,
                    pin: true,
                }
            });

            heroTl.to(".hero-bg", { scale: 1.5, filter: "blur(10px)", opacity: 0.3 }, 0)
                .to(heroTextRef.current, { scale: 100, opacity: 0, duration: 2 }, 0)
                .from(".vision-content", { y: 200, opacity: 0, scale: 0.8 }, 1);

            // 2. Multi-Layer Parallax Elements
            gsap.utils.toArray(".parallax-layer").forEach((layer, i) => {
                const speed = (i + 1) * 0.1;
                gsap.to(layer, {
                    y: -500 * speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true
                    }
                });
            });


        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#f3f3f3] text-slate-900 selection:bg-primary selection:text-white overflow-hidden font-sans border-y border-slate-300">
            <SEO 
                title="About INSD – India’s Skill School for Creative Careers"
                description="Discover INSD, India's leading Skill School for design careers. Focused on practical, industry-ready skills, job-oriented diplomas, and 100% placement support in Delhi NCR and across India."
                keywords="skill-based education, job-ready skills, design industry projects, design apprenticeships, interior design internships, portfolio plus placement, from classroom to career, INSD legacy, best design school India"
            />

            {/* Background Grain/Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-30 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply" />

            {/* Section 1: Zoom-Through Hero */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="hero-bg absolute inset-0 bg-[url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center brightness-[0.4]" />


                <div ref={heroTextRef} className="relative z-10 flex flex-col items-center">
                    <span className="text-primary font-mono tracking-[1.5em] uppercase text-[10px] mb-8 animate-pulse">Designing Legacies</span>
                    <h1 className="text-[25vw] font-black leading-none tracking-tighter flex items-baseline text-white">
                        I<span className="text-transparent stroke-text-white opacity-40">N</span>SD
                    </h1>
                    <span className="text-[12vw] font-black leading-none tracking-tighter flex items-baseline text-white">Design</span>
                </div>

                {/* Sub-content revealed during zoom */}
                <div className="vision-content absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter text-center max-w-5xl px-6 leading-[0.9]">
                        India's <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Skill School</span> <br /> for Creative Careers.
                    </h2>
                    <p className="mt-8 text-sm md:text-xl font-bold uppercase tracking-widest text-[#999] text-center max-w-2xl px-6">
                        Focused on practical, industry-ready design skills, not just degrees. From classroom to career.
                    </p>
                </div>
            </section>

            {/* Section 2: Kinetic Statistics */}
            <section className="relative py-24 md:py-48 bg-[#f3f3f3] z-10 border-b border-slate-300">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 items-center">
                        <div className="md:col-span-1">
                            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-tighter mb-6 md:mb-8 leading-tight">
                                A Century of <br className="hidden md:block" /> Vision, Compressed.
                            </h3>
                            <div className="w-20 md:w-24 h-1 bg-primary" />
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                            {[
                                { label: 'Centers Globally', val: '50+' },
                                { label: 'Creative Alumni', val: '15k+' },
                                { label: 'Design Awards', val: '100+' },
                                { label: 'Industry Partners', val: '80+' }
                            ].map((stat, i) => (
                                <div key={i} className="group border-l border-slate-300 pl-6 md:pl-8 hover:border-primary transition-colors duration-500">
                                    <span className="block text-5xl md:text-7xl font-black mb-1 md:mb-2 text-slate-900">{stat.val}</span>
                                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-600 font-mono">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2.5: Trust & Recognition */}
            <SocialProof />


            <Footer />
        </div>
    );
};

export default About;
