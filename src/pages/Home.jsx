import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Lenis from 'lenis';



import NationalAwards from '../components/NationalAwards';
import StepLeadForm from '../components/StepLeadForm';
import ProgramSearch from '../components/ProgramSearch';
import TestimonialSlider from '../components/TestimonialSlider';
import FeaturedIn from '../components/FeaturedIn';
import AdmissionScroller from '../components/AdmissionScroller';
import StepVisual from '../components/StepVisual';
import EventBlogs from '../components/EventBlogs';
import InstagramGallery from '../components/InstagramGallery';
import InsdiansByDesign from '../components/InsdiansByDesign';
import Footer from '../components/Footer';
import NetworkCounter from '../components/NetworkCounter';
import BackToTop from '../components/BackToTop';
import WhyInsd from '../components/WhyInsd';
import AiFutureDesign from '../components/AiFutureDesign';
import CelebritySlider from '../components/CelebritySlider';
import LegacyTimeline from '../components/LegacyTimeline';
import ProgramGrid from '../components/ProgramGrid';
import InsdDifference from '../components/InsdDifference';
import IndustryInsights from '../components/IndustryInsights';
import AdmissionForm from '../components/AdmissionForm';
import HeroSlider from '../components/HeroSlider';
import { ArrowRight, CheckCircle2, Sparkles, Briefcase, Rocket } from 'lucide-react';
import PlacementPartners from '../components/PlacementPartners';
import SuccessStory from '../components/SuccessStory';
import { useAdmissionModal } from '../context/AdmissionModalContext';


import SEO from '../components/SEO';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);


    const insdRef = useRef(null);
    const fifteenRef = useRef(null);
    const galleryContainerRef = useRef(null);
    const subTitleRef = useRef(null);
    const maskRef = useRef(null);
    const heroRef = useRef(null);
    const shutterRef = useRef(null);
    const marqueeRef = useRef(null);
    const studentRef = useRef(null);
    const scrollHintRef = useRef(null);
    const legacyRef = useRef(null);

    const [isMobile, setIsMobile] = React.useState(false);
    const { openAdmissionModal } = useAdmissionModal();


    // Lenis Smooth Scroll Integration
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const lenis = new Lenis({
            duration: 1.0, // Reduced from 1.2 for faster response
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: !isMobile, // Disable smooth scroll on mobile to avoid conflicts
        });

        // Sync ScrollTrigger with Lenis
        lenis.on('scroll', ScrollTrigger.update);

        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
            window.removeEventListener('resize', checkMobile);
        };
    }, [isMobile]);

    useEffect(() => {
        const timer = setTimeout(() => {
            ScrollTrigger.refresh();
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 1 }); // Reduced from 3.8 for snappier feel


            // 2. Infinite Marquee Animation
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear",
            });

            // Subtle entrance for Creative Excellence
            gsap.from(insdRef.current, {
                opacity: 0,
                y: 10,
                duration: 1.2,
                ease: "power2.out",
                delay: 0.3
            });



            // Entrance animation for Gallery items when they come into view
            gsap.from(".gallery-item", {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: galleryContainerRef.current,
                    start: "top 80%",
                }
            });

            // 3. Legacy Section - Text Reveal, Magnetic Search & Vertical Carousel
            const searchContainer = document.querySelector('.search-container');
            const carouselTrack = document.querySelector('.carousel-track');

            if (searchContainer && carouselTrack) {
                // Smart Transition: Soft Fade Up
                const content = legacyRef.current.querySelector('.legacy-content');

                // 1. Content Fades In Smoothly
                gsap.fromTo(content,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: legacyRef.current,
                            start: "top 95%",
                            end: "top 60%",
                            scrub: 0.5
                        }
                    }
                );

                // 2. High-Impact Quote Reveal
                const quotes = legacyRef.current.querySelectorAll('.legacy-quote');

                quotes.forEach((quote, i) => {
                    gsap.to(quote, {
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: quote,
                            start: "top 90%",
                            end: "top 40%",
                            scrub: true,
                        }
                    });
                });




                // 4. Carousel
                gsap.to(carouselTrack, {
                    yPercent: -50,
                    duration: 30,
                    ease: "linear",
                    repeat: -1
                });
            }

            // 6. Student Spotlight - Dark Mode Transition
            gsap.fromTo(studentRef.current,
                { backgroundColor: "#ffffff", color: "#000000" },
                {
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    scrollTrigger: {
                        trigger: studentRef.current,
                        start: "top 60%",
                        end: "top 20%",
                        scrub: true,
                    }
                }
            );

            gsap.from(".spotlight-img-main", {
                scale: 1.2,
                scrollTrigger: {
                    trigger: studentRef.current,
                    start: "top bottom",
                    scrub: 1
                }
            });

            // Parallax Title
            gsap.to(".spotlight-title-1", {
                xPercent: 10,
                scrollTrigger: {
                    trigger: studentRef.current,
                    start: "top bottom",
                    scrub: 1
                }
            });

            gsap.to(".spotlight-title-2", {
                xPercent: -10,
                scrollTrigger: {
                    trigger: studentRef.current,
                    start: "top bottom",
                    scrub: 1
                }
            });

            // Chaotic Quote Reveal
            gsap.from(".quote-word", {
                scrollTrigger: {
                    trigger: ".quote-container",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                rotate: 10,
                stagger: 0.02,
                duration: 1,
                ease: "expo.out"
            });



        }, containerRef.current);

        return () => {
            ctx.revert();
        };
    }, []);

    const galleryItems = [
        {
            title: "Industry",
            img: `https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-${isMobile ? 800 : 1800},fo-auto`,
            link: "https://gemini.google.com/app/8c7751779a34cf52?hl=en-IN"
        },
        {
            title: "INSD",
            img: `https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_u2ubidu2ubidu2ub.png?tr=w-${isMobile ? 800 : 1800},fo-auto`
        },
        {
            title: "Required Professional",
            img: `https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_hzzhu5hzzhu5hzzh.png?tr=w-${isMobile ? 800 : 1800},fo-auto`
        }
    ];




    // Helper to split text by characters
    const splitText = (text, className) => {
        return text.split("").map((char, index) => (
            <span key={index} className={`inline-block ${className}`}>
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    // Helper to split text by words
    const splitWords = (text, className) => {
        return text.split(" ").map((word, index) => (
            <span key={index} className={`inline-block ${className}`}>
                {word}&nbsp;
            </span>
        ));
    };

    return (
        <div ref={containerRef} className="min-h-screen text-slate-900 relative overflow-x-hidden">
            <SEO
                title="Best Design Institute in Delhi | Fashion, Interior & Graphic Courses - INSD"
                description="Join INSD, the best design institute in Delhi NCR. India's Skill School for creative careers offers job-oriented Fashion, Interior, Graphic Design & Animation courses with 100% placement support."
                keywords="best design institute in Delhi, skill-based design school Delhi, job-ready design institute, 100% placement design course, fashion design course in Delhi, interior design course in Delhi, graphic design course in Delhi, animation VFX course in Delhi, INSD Delhi placement"
            />

            {/* Hero Split Section */}
            <div ref={heroRef} className="relative z-10 min-h-screen w-full flex flex-col bg-slate-950/2 md:bg-white overflow-hidden pt-24 md:pt-32 cursor-default">
                {/* Visual Elements & Form Row */}
                <div className="w-full flex flex-col md:flex-row md:items-stretch justify-center md:px-12 mb-12">
                    {/* Left Side: Carousel */}
                    <div className="w-full md:w-[45%] h-[65vh] md:h-auto flex flex-col justify-center items-center p-4 md:p-8 relative overflow-hidden">
                        <HeroSlider isMobile={isMobile} />
                    </div>

                    {/* Right Side: Admission Form */}
                    <div className="w-full md:w-[50%] flex flex-col justify-center items-center p-4 md:p-8 relative z-20">
                        <div className="w-full h-full max-w-xl bg-black rounded-4xl md:rounded-[2.5rem] shadow-3xl overflow-hidden border border-white/5 origin-center transform md:scale-95 hover:scale-100 transition-transform duration-500">
                            <AdmissionForm isModal={true} />
                        </div>
                    </div>
                </div>

                {/* Monumental Centered Heading Section */}
                <div className="w-full text-center px-5 md:px-12 mb-16 md:mb-24 relative z-30">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center space-y-4 md:space-y-6"
                    >
                        {/* Institutional Tagline */}
                        <div className="flex items-center gap-4 mb-2">
                            <div className="w-12 h-px bg-slate-200" />
                            <span className="text-[9px] md:text-xs font-black uppercase tracking-[0.4em] text-slate-400">The INSD Advantage</span>
                            <div className="w-12 h-px bg-slate-200" />
                        </div>

                        {/* Centered Monumental Title */}
                        <div className="w-full flex flex-col items-center gap-10 md:gap-14 animate-in fade-in slide-in-from-top-12 duration-1000">
                            {/* Value Transformation Line */}
                            <div className="flex flex-col items-center text-center space-y-4">
                                <motion.div 
                                    initial={{ opacity: 0, letterSpacing: "0.2em" }}
                                    animate={{ opacity: 1, letterSpacing: "0.45em" }}
                                    className="text-primary font-black uppercase text-[10px] md:text-sm tracking-[0.45em] drop-shadow-sm"
                                >
                                    Global Design Excellence
                                </motion.div>
                                <p className="text-slate-800 font-bold text-xl md:text-3xl tracking-tight max-w-3xl leading-tight px-6 h-auto">
                                    Skill-based Education <span className="opacity-20 text-slate-400 mx-2 md:mx-4">•</span> 
                                    Industry Preparation <span className="opacity-20 text-slate-400 mx-2 md:mx-4">•</span> 
                                    Launching Careers
                                </p>
                            </div>

                            {/* High-Impact Statistics Strip */}
                            <div className="relative w-full max-w-6xl mx-auto">
                                <div className="absolute inset-0 bg-primary/5 rounded-[3rem] md:rounded-full blur-3xl" />
                                <div className="relative bg-white/40 backdrop-blur-3xl border border-white/40 rounded-[3rem] md:rounded-full px-8 md:px-16 py-8 md:py-10 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 overflow-hidden group/stats">
                                    {/* Glass Shine */}
                                    <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent group-hover/stats:animate-shimmer" />

                                    {/* Stat 1 */}
                                    <div className="text-center group/item transition-transform duration-500 hover:scale-105">
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Highest Package</span>
                                        <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">
                                            RS 18 <span className="text-primary font-black text-2xl md:text-4xl ml-1">LPA</span>
                                        </h3>
                                    </div>

                                    <div className="hidden md:block w-px h-16 bg-slate-200/50" />

                                    {/* Stat 2 */}
                                    <div className="text-center group/item transition-transform duration-500 hover:scale-105">
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Success Track</span>
                                        <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">
                                            2000+ <span className="text-primary italic font-black text-2xl md:text-4xl ml-1">PLACEMENTS</span>
                                        </h3>
                                    </div>

                                    <div className="hidden md:block w-px h-16 bg-slate-200/50" />

                                    {/* Stat 3 */}
                                    <div className="text-center group/item transition-transform duration-500 hover:scale-105">
                                        <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Career Assurance</span>
                                        <h3 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">
                                            100% <span className="text-primary font-black text-2xl md:text-4xl ml-1">SUPPORT</span>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Monumental Trust Line */}
                        <div className="mt-12 md:mt-16 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                            <div className="px-8 py-3 bg-slate-900/5 backdrop-blur-xl border border-slate-200/50 rounded-full flex flex-wrap items-center justify-center gap-x-8 gap-y-3 shadow-sm group/trust">
                                {[
                                    { val: "15+", label: "Years Legacy" },
                                    { val: "15,000+", label: "Students" },
                                    { val: "75+", label: "Centres Across India" }
                                ].map((trust, i) => (
                                    <div key={i} className="flex items-center gap-2 group/item transition-all duration-300 hover:scale-105">
                                        <span className="text-sm md:text-lg font-black text-slate-950 uppercase tracking-tight">{trust.val}</span>
                                        <span className="text-[9px] md:text-xs font-black text-slate-400 uppercase tracking-widest">{trust.label}</span>
                                        {i < 2 && <div className="hidden sm:block w-px h-4 bg-slate-200 ml-6" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 md:mt-12 w-full">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openAdmissionModal()}
                                className="w-full sm:w-auto h-14 md:h-18 px-10 md:px-14 bg-primary text-white rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs shadow-[0_20px_60px_-15px_rgba(219,52,54,0.5)] flex items-center justify-center gap-3 group/cta transition-all hover:bg-slate-950"
                            >
                                Book Free Career Counselling
                                <ArrowRight size={20} className="group-hover/cta:translate-x-2 transition-transform" />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.getElementById('programs-grid')?.scrollIntoView({ behavior: 'smooth' })}
                                className="w-full sm:w-auto h-14 md:h-18 px-10 md:px-14 bg-white border-2 border-slate-100 text-slate-600 rounded-full font-black uppercase tracking-widest text-[10px] md:text-xs hover:border-primary hover:text-primary transition-all flex items-center justify-center"
                            >
                                Explore Global Programs
                            </motion.button>
                        </div>
                    </motion.div>

                    <div className="mt-20 md:mt-32">
                        <PlacementPartners />
                    </div>

                    {/* Creative Path Transition */}
                    <div className="mt-16 md:mt-24 mb-12 md:mb-16 text-center px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-slate-950">
                                Your future, <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary to-slate-500 italic py-2 inline-block">our dream.</span>
                            </h2>

                            <div className="space-y-4 max-w-2xl mx-auto pt-2">
                                <p className="text-lg md:text-2xl font-bold text-slate-800 tracking-tight leading-relaxed">
                                    Pick the creative career that excites you— <span className="text-primary italic">we’ll help you build it.</span>
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-8 h-px bg-slate-100" />
                                    <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.25em] text-slate-400">
                                        Skill-based programs designed for real careers
                                    </p>
                                    <div className="w-8 h-px bg-slate-100" />
                                </div>

                            </div>
                            <ProgramGrid />

                        </motion.div>
                    </div>
                </div>
            </div>

            <IndustryInsights />
            <NetworkCounter />
            <InsdDifference />
            <SuccessStory />
            <InstagramGallery />


            {/* Section 2: Interactive Gallery */}
            <div ref={galleryContainerRef} className="relative z-10 h-screen w-full bg-black overflow-hidden flex flex-col md:flex-row pointer-events-auto">
                {
                    galleryItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link || "#"}
                            target={item.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="gallery-item relative flex-1 group transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-3 cursor-pointer grayscale-0 md:grayscale md:hover:grayscale-0 border-b md:border-b-0 md:border-r border-white/10 last:border-b-0 last:border-r-0"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-80 md:opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:bg-black/60 md:group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
                            </div>

                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8 pb-32 md:pb-12">
                                <div className="overflow-hidden">
                                    <h3 className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 uppercase tracking-tighter leading-none">
                                        {item.title}
                                    </h3>
                                </div>
                                <div className="overflow-hidden mt-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                    <p className="text-white/80 text-[10px] md:text-sm font-bold tracking-widest uppercase border-t border-primary/50 pt-3 inline-block">
                                        Explore Program
                                    </p>
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none hidden md:block">
                                <span className="text-white/50 font-bold uppercase tracking-widest text-xl whitespace-nowrap">
                                    {item.title}
                                </span>
                            </div>
                        </a>
                    ))
                }
            </div>
            <AdmissionScroller />
            <WhyInsd />
            <StepLeadForm />
            <ProgramSearch />

            <NationalAwards />




            <AiFutureDesign />
            <TestimonialSlider />
            <CelebritySlider />


            {/* Student Spotlight Section - High Fashion Editorial Style */}
            <div ref={studentRef} className="relative min-h-screen py-20 md:py-32 px-4 md:px-12 overflow-hidden transition-colors duration-700">
                <div className="max-w-360 mx-auto">

                    {/* Header */}
                    <div className="mb-16 md:mb-24 border-b border-current pb-8 md:pb-12 overflow-hidden">
                        <span className="block text-[10px] md:text-sm font-mono tracking-widest uppercase mb-4 opacity-60">Spotlight</span>
                        <h2 className="text-[12vw] md:text-[6vw] font-black uppercase tracking-tighter leading-none flex flex-col">
                            <span className="spotlight-title-1 block">Future</span>
                            <span className="spotlight-title-2 italic font-serif font-light text-secondary block self-end">Visionaries</span>
                        </h2>
                    </div>

                    {/* Editorial Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

                        {/* Large Image */}
                        <div className="md:col-span-7 relative">
                            <div className="overflow-hidden rounded-sm aspect-3/4">
                                <img
                                    src={`https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1260}`}
                                    alt="Future Visionaries"
                                    loading="lazy"
                                    className="spotlight-img-main w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105"
                                />
                            </div>
                            {/* Graphic Elements */}
                            <div className="absolute -bottom-12 -right-12 text-[12rem] leading-none font-black text-transparent stroke-text opacity-20 select-none pointer-events-none">
                                2026
                            </div>
                        </div>

                        {/* Content & Smaller Image */}
                        <div className="md:col-span-5 flex flex-col justify-between h-full pl-0 md:pl-8">
                            <div className="mb-12">
                                <p className="text-xl md:text-2xl font-light leading-relaxed mb-8 opacity-80 flex flex-wrap gap-x-2 quote-container">
                                    {splitText("\"INSD gave me the freedom to fail, which is the only way to truly succeed in design. My final collection was a direct result of that chaos.\"", "quote-word")}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 md:w-12 h-px bg-current"></div>
                                    <span className="uppercase tracking-widest font-bold text-[10px] md:text-sm">Aravind K., Fashion Design '25</span>
                                </div>
                            </div>

                            <div className="relative w-2/3 ml-auto mt-12 rotate-3 spotlight-img-small transition-transform duration-500">
                                <img
                                    src="https://images.pexels.com/photos/2836486/pexels-photo-2836486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    className="w-full shadow-2xl rounded-lg"
                                    alt="Process"
                                />
                                <div className="absolute -z-10 top-4 -right-4 w-full h-full border border-current opacity-30 rounded-lg"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>



            <FeaturedIn />
            <EventBlogs />
            <InsdiansByDesign />
            <div className="relative z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
