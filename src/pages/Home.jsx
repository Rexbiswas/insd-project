import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Lenis from 'lenis';


import InsdBackground from '../components/InsdBackground';

import ImpactStats from '../components/ImpactStats';
import TOICertification from '../components/TOICertification';
import TimesAwards from '../components/TimesAwards';
import DreamLife from '../components/DreamLife';
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
import DesignLifestyle from '../components/DesignLifestyle';
import SocialProof from '../components/SocialProof';
import WhyInsd from '../components/WhyInsd';
import AiFutureDesign from '../components/AiFutureDesign';
import GlobalDesignEconomy from '../components/GlobalDesignEconomy';
import GovernmentValidation from '../components/GovernmentValidation';
import StudentTransformation from '../components/StudentTransformation';
import GlobalIndustryNetwork from '../components/GlobalIndustryNetwork';
import FinalCTA from '../components/FinalCTA';
import HeroSlider from '../components/HeroSlider';
import LeadForm from '../components/LeadForm';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);


    const insdRef = useRef(null);
    const fifteenRef = useRef(null);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const [activeFilter, setActiveFilter] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState("");

    const programs = {
        masters: ["Luxury Brand Management", "Fashion Design", "Graphic Design", "Jewellery Design", "Textile Design", "Interior Design", "Animation"],
        bachelors: ["Fashion Design", "Interior Design", "Communication Design", "Textile Design", "Product Design", "Strategic Innovation & Design"],
        diploma_two: ["Fashion Design & Tech", "Interior Design & Tech", "Animation & VFX", "Graphic Design", "Textile Design"],
        diploma_one: ["Fashion Design", "Interior Design", "Graphic Design", "Photography"],
        short: ["Fashion Styling", "Luxury Brand Management", "Jewellery Design", "Photography"]
    };

    // Filter Logic Helper
    const filterPrograms = (list) => {
        return list.filter(item => {
            const matchesFilter = !activeFilter || item.includes(activeFilter);
            const matchesSearch = item.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    };

    // Check if any items exist for a category after filter
    const hasItems = (list) => filterPrograms(list).length > 0;
    const subTitleRef = useRef(null);
    const maskRef = useRef(null);

    const heroRef = useRef(null);
    const shutterRef = useRef(null);
    const marqueeRef = useRef(null);
    const studentRef = useRef(null);
    const scrollHintRef = useRef(null);
    const taglineRef = useRef(null);
    const legacyRef = useRef(null);
    const [isMobile, setIsMobile] = React.useState(false);


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

            // Tagline Reveal - Staggered Characters
            const taglineChars = taglineRef.current?.querySelectorAll('.tagline-char');
            if (taglineChars) {
                tl.fromTo(taglineChars,
                    { opacity: 0, y: 20, scale: 0.5, filter: "blur(10px)" },
                    { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 1.2, stagger: 0.02, ease: "back.out(1.7)" },
                    0.2
                );
            }


            // 2. Infinite Marquee Animation
            gsap.to(marqueeRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "linear",
            });

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=150%",
                    pin: !isMobile,
                    scrub: 0.5,
                }
            });

            if (taglineRef.current) {
                scrollTl.to(taglineRef.current, {
                    x: -250,
                    opacity: 0,
                    scale: 0.6,
                    filter: "blur(30px)",
                    duration: 1,
                    ease: "power2.in"
                }, 0);
            }


            if (!isMobile) {
                scrollTl
                    .to(insdRef.current, {
                        y: -80,
                        opacity: 0.2, // Keep subtle visibility
                        duration: 1.5,
                        ease: "power2.inOut"
                    }, 0)
                    .fromTo(fifteenRef.current, {
                        backgroundPosition: "100% 0%"
                    }, {
                        backgroundPosition: "0% 0%",
                        duration: 2,
                        ease: "power2.inOut"
                    }, 0.2)
                    .to([maskRef.current, titleRef.current], {
                        opacity: 0,
                        duration: 0.8,
                        ease: "power2.in"
                    }, "<+=0.5");
            }

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


                // 3. Search Entrance 
                gsap.fromTo(searchContainer,
                    {
                        rotationX: 80,
                        y: 150,
                        z: -500,
                        opacity: 0,
                        scale: 0.6,
                        boxShadow: "0 0 0px rgba(124, 58, 237, 0)"
                    },
                    {
                        rotationX: 0,
                        y: 0,
                        z: 0,
                        opacity: 1,
                        scale: 1,
                        boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.25)",
                        ease: "back.out(1.2)", // Bouncy reveal
                        scrollTrigger: {
                            trigger: searchContainer,
                            start: "top 90%",
                            end: "top 40%",
                            scrub: 0.5
                        }
                    }
                );

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

            // Magnetic Small Image
            const smallImg = document.querySelector(".spotlight-img-small");
            if (smallImg) {
                const xToSmall = gsap.quickTo(smallImg, "x", { duration: 0.5, ease: "power3" });
                const yToSmall = gsap.quickTo(smallImg, "y", { duration: 0.5, ease: "power3" });

                window.addEventListener("mousemove", (e) => {
                    if (!studentRef.current) return;
                    const rect = studentRef.current.getBoundingClientRect();
                    if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
                        const x = (e.clientX - window.innerWidth / 2) * 0.05;
                        const y = (e.clientY - window.innerHeight / 2) * 0.05;
                        xToSmall(x);
                        yToSmall(y);
                    }
                });
            }







        }, containerRef.current);

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 50;
            const y = (clientY / window.innerHeight - 0.5) * 50;

            gsap.to(insdRef.current, { x: x, y: y, duration: 2, ease: "power2.out" });
        };
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
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


    const carouselTerms = [
        "Fashion", "Innovation", "Luxury", "Design", "Future", "Creative", "Global", "Digital", "Textile", "Art"
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

            <div className="fixed inset-0 pointer-events-none z-0">
                <HeroSlider />
            </div>

            {/* Hero Section - Pinned Wrapper relative to Viewport */}
            <div ref={heroRef} className="relative z-10 h-screen w-full flex flex-col justify-center items-center perspective-[1000px]">

                {/* Mask Layer: Mix-Blend-Screen handles the cutout effect */}
                <div ref={maskRef} className="absolute inset-0 flex flex-col justify-center items-center bg-white md:bg-white mix-blend-screen pointer-events-none select-none z-10 w-full overflow-hidden">
                    {/* Watermark Logo - Inside mask for participation in blend */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-40 z-0 overflow-hidden">
                        <img
                            src="https://insd.edu.in/wp-content/uploads/2019/11/INSD-circle-Logo_black_100pxl.png"
                            alt="INSD Watermark"
                            className="w-[60vw] md:w-[20vw] h-auto object-contain grayscale brightness-0 opacity-40 mix-blend-multiply"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full px-4 text-center">

                        <h1 ref={insdRef} className="text-black text-center flex flex-col items-center justify-center will-change-transform backface-hidden m-0 p-0 relative leading-none tracking-tighter min-h-[40vh]">
                            <div className="text-[9vw] md:text-[7vw] font-black uppercase mb-2 md:mb-6">
                                Creative Excellence
                            </div>
                            <div className="flex items-center justify-center gap-2 md:gap-8">
                                <span className="text-[3vw] md:text-[1.5vw] font-bold uppercase tracking-[0.4em] opacity-40">Since</span>
                                <span ref={fifteenRef} className="inline-block bg-linear-to-r from-primary via-secondary to-primary bg-[length:200%_auto] bg-clip-text text-transparent text-[16vw] md:text-[12vw] font-black leading-none px-4">
                                    15
                                </span>
                                <span className="text-[3vw] md:text-[1.5vw] font-bold uppercase tracking-[0.4em] opacity-40">Years</span>
                            </div>
                        </h1>
                        {/* Premium Relocated Tagline */}
                        <div ref={taglineRef} className="mt-4 md:mt-12 px-5 py-2 md:px-10 md:py-3 border border-black/10 rounded-full backdrop-blur-xl bg-white/10 will-change-transform shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] flex items-center justify-center overflow-hidden group max-w-[90vw]">
                            <p className="text-black text-[20px] sm:text-xs md:text-sm font-black uppercase tracking-[0.3em] sm:tracking-[0.4em] md:tracking-[0.6em] whitespace-nowrap flex gap-px px-2">
                                {splitText("INSD - India's Skill School", "tagline-char")}
                            </p>

                            {/* Inner Shine Effect */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                    </div>
                </div>

            </div>
            <AdmissionScroller />


            {/* Unique Vertical Accordion Gallery */}
            <div className="relative z-20 bg-black h-screen md:min-h-screen flex overflow-x-auto md:flex-row md:overflow-hidden snap-x snap-mandatory scroll-smooth">
                {
                    galleryItems.map((item, index) => (
                        <a
                            key={index}
                            href={item.link || "#"}
                            target={item.link ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="relative min-w-full md:min-w-0 md:flex-1 group transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:flex-3 cursor-pointer grayscale-0 md:grayscale md:hover:grayscale-0 border-r border-white/10 last:border-r-0 snap-center"
                        >
                            {/* Image Background */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover opacity-80 md:opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
                                />
                                {/* Dark Overlay - Pointer Events None to allow LiquidHover interaction */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:bg-black/60 md:group-hover:bg-black/20 transition-colors duration-700 pointer-events-none" />
                            </div>

                            {/* Content */}
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

                            {/* Collapsed State Title (Desktop Only) */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 opacity-0 md:opacity-100 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none hidden md:block">
                                <span className="text-white/50 font-bold uppercase tracking-widest text-xl whitespace-nowrap">
                                    {item.title}
                                </span>
                            </div>
                        </a>
                    ))
                }
            </div >

            <NetworkCounter />

            {/* Legacy & Discovery Section - Unexpected Contrast */}
            <div ref={legacyRef} className="relative min-h-screen bg-white text-black py-0 px-0 flex flex-col items-center justify-center overflow-hidden -mt-[20vh] z-10 rounded-t-[4rem] shadow-2xl will-change-transform backface-hidden">

                {/* Next Level Background - Holographic Orbs (Optimized) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-linear-to-b from-secondary/30 to-transparent blur-[80px] rounded-full mix-blend-multiply"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 blur-[80px] rounded-full mix-blend-multiply"></div>
                    <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/20 blur-[60px] rounded-full mix-blend-multiply"></div>
                </div>

                {/* Main Content Wrapper */}
                <div className="legacy-content relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-24 py-20 md:py-32 px-4 md:px-12 pointer-events-auto">

                    {/* Top: High Impact Quotes (Animated on Scroll) */}
                    <div className="relative z-10 w-full text-center max-w-5xl mx-auto space-y-8 md:space-y-12">
                        <div className="quote-wrapper overflow-hidden pb-4">
                            <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight legacy-quote blur-[20px] opacity-0 translate-y-20">
                                15 Years of Transforming <span className="text-primary italic font-serif">Passion</span> into Profession
                            </h3>
                        </div>
                        <div className="quote-wrapper overflow-hidden pb-4">
                            <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight legacy-quote blur-[20px] opacity-0 translate-y-20">
                                Where Creativity Meets <span className="text-secondary italic font-serif">Global</span> Industry Leadership
                            </h3>
                        </div>
                        <div className="quote-wrapper overflow-hidden pb-4">
                            <h3 className="text-2xl md:text-5xl font-black uppercase tracking-tight legacy-quote blur-[20px] opacity-0 translate-y-20">
                                India’s Premier <span className="text-primary italic font-serif">Skill</span> School for Designers
                            </h3>
                        </div>
                        <div className="mt-8 md:mt-16 w-16 md:w-24 h-1 md:h-2 bg-slate-900 mx-auto rounded-full"></div>
                    </div>

                    {/* Bottom: Unexpected Search Interaction & Carousel */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px] min-h-[500px] md:min-h-[600px]">

                        {/* Mixed Blend Mode Overlay for 'Future' feel */}
                        <div className="absolute inset-0 bg-linear-to-b from-transparent to-slate-50 opacity-50 pointer-events-none"></div>

                        {/* Vertical Infinite Carousel Background */}
                        <div className="absolute inset-0 overflow-hidden flex justify-center items-center opacity-[0.08] select-none pointer-events-none mix-blend-multiply mask-linear-fade">
                            <div className="carousel-track flex flex-col gap-8 text-center" style={{ transform: "rotate(-5deg) scale(1.2)" }}>
                                {[...carouselTerms, ...carouselTerms, ...carouselTerms, ...carouselTerms].map((term, i) => (
                                    <span key={i} className="text-[8rem] md:text-[10rem] font-black uppercase text-slate-900 leading-none">
                                        {term}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Magnetic & Glassmorphic Search Container */}
                        <div className="search-container relative w-full max-w-7xl backdrop-blur-xl bg-slate-900/95 text-white p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] shadow-2xl hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)] transition-all duration-700 hover:scale-[1.01] cursor-text group overflow-hidden border border-white/10">

                            {/* Animated Gradient Border/Glow */}
                            <div className="absolute -inset-full bg-linear-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-150%] transition-transform duration-1000 group-hover:translate-x-[150%] ease-in-out pointer-events-none"></div>

                            <div className="relative z-10">
                                <label className="block text-xs font-mono uppercase tracking-widest text-slate-400 mb-6">Find your path</label>

                                {/* Input Area */}
                                <div className="flex items-center gap-6 border-b border-white/20 pb-4 mb-10 group-focus-within:border-secondary transition-colors duration-300">
                                    <div className="w-4 h-4 rounded-full bg-secondary animate-pulse"></div>
                                    <input
                                        type="search"
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            if (e.target.value) setIsDropdownOpen(true);
                                        }}
                                        placeholder="Type to explore your future..."
                                        className="bg-transparent border-none outline-none text-2xl md:text-6xl font-black text-white placeholder-slate-700 w-full tracking-tighter"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-30 group-focus-within:opacity-100 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-500">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                </div>

                                {/* Expanded Program Explorer */}
                                <div className="mt-8 transition-all duration-500 ease-in-out">
                                    <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:items-center mb-6 w-full">
                                        <button
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="flex items-center justify-between md:justify-start w-full md:w-auto gap-3 text-sm font-bold uppercase tracking-widest text-slate-300 hover:text-white transition-colors group/btn"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className={`h-px bg-current transition-all duration-300 ${isDropdownOpen ? 'w-12 bg-secondary' : 'w-6'}`}></span>
                                                {isDropdownOpen ? 'Close Programs' : 'Browse All Programs'}
                                            </div>
                                            {/* Mobile Arrow Hint */}
                                            <span className="md:hidden text-lg rotate-90 opacity-50">›</span>
                                        </button>

                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="flex gap-2 w-full md:w-auto overflow-x-auto custom-scrollbar pb-2 md:pb-0"
                                        >
                                            <span
                                                onClick={() => { setActiveFilter(null); setIsDropdownOpen(true); }}
                                                className={`px-4 py-2 md:px-3 md:py-1 whitespace-nowrap rounded-full border text-xs font-medium transition-colors duration-300 cursor-pointer ${activeFilter === null ? 'bg-white text-black border-white' : 'border-white/20 text-slate-300 bg-white/5 hover:bg-white hover:text-black'}`}
                                            >
                                                All
                                            </span>
                                            {["Fashion", "Interior", "Luxury", "Graphic", "Animation"].map((tag, i) => (
                                                <span
                                                    key={i}
                                                    onClick={() => { setActiveFilter(activeFilter === tag ? null : tag); setIsDropdownOpen(true); }}
                                                    className={`px-4 py-2 md:px-3 md:py-1 whitespace-nowrap rounded-full border text-xs font-medium transition-colors duration-300 cursor-pointer ${activeFilter === tag ? 'bg-white text-black border-white' : 'border-white/20 text-slate-300 bg-white/5 hover:bg-white hover:text-black'}`}
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </motion.div>
                                    </div>

                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-4 pb-2 border-t border-white/10">

                                                    {/* Masters */}
                                                    {hasItems(programs.masters) && (
                                                        <div>
                                                            <h4 className="text-secondary font-mono text-xs uppercase tracking-widest mb-4">Masters (2 Years)</h4>
                                                            <ul className="space-y-2">
                                                                {filterPrograms(programs.masters).map((item, i) => (
                                                                    <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {/* Bachelors */}
                                                    {hasItems(programs.bachelors) && (
                                                        <div>
                                                            <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Bachelors (3/4 Years)</h4>
                                                            <ul className="space-y-2">
                                                                {filterPrograms(programs.bachelors).map((item, i) => (
                                                                    <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {/* Diploma (2 Year) */}
                                                    {hasItems(programs.diploma_two) && (
                                                        <div>
                                                            <h4 className="text-secondary font-mono text-xs uppercase tracking-widest mb-4">Diploma (2 Year)</h4>
                                                            <ul className="space-y-2">
                                                                {filterPrograms(programs.diploma_two).map((item, i) => (
                                                                    <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {/* Diploma (1 Year) */}
                                                    {hasItems(programs.diploma_one) && (
                                                        <div>
                                                            <h4 className="text-secondary font-mono text-xs uppercase tracking-widest mb-4">Diploma (1 Year)</h4>
                                                            <ul className="space-y-2">
                                                                {filterPrograms(programs.diploma_one).map((item, i) => (
                                                                    <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    {/* Short Courses */}
                                                    {hasItems(programs.short) && (
                                                        <div>
                                                            <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Short Courses</h4>
                                                            <ul className="space-y-2">
                                                                {filterPrograms(programs.short).map((item, i) => (
                                                                    <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}
                                                </div>

                                                {/* No Results Message */}
                                                {!hasItems(programs.masters) && !hasItems(programs.bachelors) &&
                                                    !hasItems(programs.diploma_two) && !hasItems(programs.diploma_one) &&
                                                    !hasItems(programs.short) && (
                                                        <div className="col-span-full py-10 text-center text-slate-400">
                                                            <p className="text-xl italic">No programs found matching "{searchQuery}"</p>
                                                            {activeFilter && <p className="text-sm mt-2">Try removing the "{activeFilter}" filter</p>}
                                                        </div>
                                                    )}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <WhyInsd />
            <LeadForm />
            <AiFutureDesign />
            <TestimonialSlider />
            <TimesAwards />
            <TOICertification />
            <DreamLife />


            <DesignLifestyle />
            <SocialProof />
            <GlobalDesignEconomy />
            <GovernmentValidation />
            <StudentTransformation />
            <FinalCTA />
            <StepVisual />
            <ImpactStats />
            <GlobalIndustryNetwork />

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


            {/* Separate Impact Stats Section - Moved up */}
            <FeaturedIn />
            <EventBlogs />
            <InstagramGallery />
            <InsdiansByDesign />
            <div className="relative z-50">
                <Footer />
            </div>
        </div >
    );
};

export default Home;
