'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useLenisSmoothScroll from '../hooks/useLenisSmoothScroll';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Lenis Smooth Scroll (optimized for Safari/Chrome)
    useLenisSmoothScroll({ lerp: 0.08 });

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

    return (
        <div ref={containerRef} className="bg-slate-950 text-white min-h-screen relative overflow-hidden font-sans">
            <SEO
                title="Design Admission 2026 - Apply Online for Design Courses"
                description="Apply online for INSD Design Degree, Diploma & Master Courses for 2026. Secure your admission in top design programs in Delhi NCR with industry-leading placement records."
                keywords="design admission 2026, fashion design application, interior design admission form, apply for design courses Delhi, INSD admission online"
            />

            {/* Background Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-0" />
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none -z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-semibold mb-6 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        Admissions Open for Batch 2026–27
                    </motion.div>
                    
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
                    >
                        Launch Your Creative Career with <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">INSD</span>
                    </motion.h1>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-slate-400 max-w-2xl mx-auto"
                    >
                        Fill in your details below to schedule a personalized 1-on-1 counseling session with our expert design mentors.
                    </motion.p>
                </div>

                {/* Admission Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="max-w-4xl mx-auto bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative"
                >
                    <AdmissionForm />
                </motion.div>
            </div>

            <FinalCTA />
            <Footer />
        </div>
    );
};

export default Admission;
