import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background3D from '../components/Background3D';
import Lenis from 'lenis';

import InsdBackground from '../components/InsdBackground';

import ImpactStats from '../components/ImpactStats';
import TestimonialSlider from '../components/TestimonialSlider';
import FeaturedIn from '../components/FeaturedIn';
import AdmissionScroller from '../components/AdmissionScroller';
import StepVisual from '../components/StepVisual';
import EventBlogs from '../components/EventBlogs';
import InstagramGallery from '../components/InstagramGallery';
import InsdiansByDesign from '../components/InsdiansByDesign';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';


gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);


    const insdRef = useRef(null);
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

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 3.8 });

            // Text Reveal Animation
            const chars = containerRef.current.querySelectorAll('.char-extra');
            tl.fromTo(chars,
                {
                    y: 100,
                    opacity: 0,
                    scale: 0.5,
                    filter: "blur(20px)"
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 2,
                    delay: 0.2,
                    stagger: 0.05,
                    ease: "power3.out"
                }
            );

            // Floating Breath Animation for Hero Chars
            gsap.to(chars, {
                y: "-=20",
                rotate: (i) => i % 2 === 0 ? 1.5 : -1.5,
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.15,
                    from: "center"
                },
                delay: 2
            });

            // New Enhanced Scroll Hint Animation - SAFE CHECK
            const scrollHintTl = gsap.timeline({ delay: 0.5 });

            // Text Animations (Run independently of line)
            scrollHintTl
                .to(scrollHintRef.current?.querySelector('.scroll-text-small'), {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                })
                .fromTo(scrollHintRef.current?.querySelectorAll('.char-hint-extra'),
                    { opacity: 0, scale: 0, rotate: -45 },
                    { opacity: 1, scale: 1, rotate: 0, stagger: 0.03, duration: 1, ease: "back.out(1.7)" },
                    "-=0.4"
                )
                .to(scrollHintRef.current?.querySelector('.scroll-text-main'), {
                    opacity: 1,
                    duration: 0.1
                }, "<");

            // Optional Line Animation if it exists (for safety/future-proofing)
            const scrollLine = scrollHintRef.current?.querySelector('.scroll-line-progress');
            if (scrollLine) {
                // Prepend line animation if it existed
                gsap.fromTo(scrollLine,
                    { scaleY: 0 },
                    {
                        scaleY: 1, duration: 1.2, ease: "expo.inOut", onComplete: () => {
                            // Loop after entrance
                            gsap.to(scrollLine, {
                                yPercent: 100,
                                duration: 1.5,
                                repeat: -1,
                                ease: "power1.inOut",
                                repeatDelay: 0.5
                            });
                        }
                    }
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
                    scrub: 0.5, // Faster animation tracking
                }
            });

            if (!isMobile) {
                scrollTl
                    .to(insdRef.current, {
                        scale: 50, // Massive scale to zoom through text
                        duration: 2,
                        ease: "power2.inOut"
                    })
                    .to([maskRef.current, titleRef.current], {
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.in"
                    }, "<+=1.2")
                    // Unexpected UI: Elements stay but evolve into functional UI
                    .to(scrollHintRef.current, {
                        scale: 0.8,
                        x: (window.innerWidth / 2) - 100, // Responsive move
                        y: 40,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 0)
                    .to(scrollHintRef.current.querySelector('.relative'), {
                        rotation: 90,
                        width: 120, // Responsive width
                        scaleX: 1,
                        duration: 1.5,
                        ease: "power3.inOut"
                    }, 0)
                    .to(subTitleRef.current, {
                        scale: 1.2,
                        y: 150,
                        color: "var(--color-primary)",
                        opacity: 1, // Keep fully visible
                        duration: 2,
                        ease: "expo.out"
                    }, 0.5);
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

            // 7. Legacy Section - Text Reveal, Magnetic Search & Vertical Carousel
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

                // 2. Text Reveal & Exit 
                const words = legacyRef.current.querySelectorAll('.legacy-word');
                const textTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: legacyRef.current,
                        start: "top 80%",
                        end: "bottom 40%",
                        scrub: 0.5
                    }
                });

                textTl.fromTo(words,
                    { color: "#94a3b8", filter: "blur(4px)", opacity: 0, y: 50 },
                    {
                        color: "#0f172a",
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                        stagger: 0.02,
                        ease: "power2.out",
                        duration: 1
                    }
                )
                    .to(words, {
                        opacity: 1,
                        duration: 1 // Hold phase
                    })
                    .to(words, {
                        filter: "blur(8px)",
                        opacity: 0,
                        y: -50,
                        scale: 1.2,
                        stagger: 0.01,
                        ease: "power2.in",
                        duration: 1
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





        }, containerRef);

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 50;
            const y = (clientY / window.innerHeight - 0.5) * 50;

            gsap.to(titleRef.current, { x: x, y: y, duration: 2, ease: "power2.out" });
        };
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            ctx.revert();
        };
    }, []);

    const galleryItems = [
        { title: "Fashion Design", img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Luxury Management", img: "https://images.pexels.com/photos/2088210/pexels-photo-2088210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Interior Design", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Jewellery Design", img: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Graphic Design", img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
        { title: "Animation", img: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
    ];

    const carouselTerms = [
        "Fashion", "Innovation", "Luxury", "Design", "Future", "Creative", "Global", "Digital", "Textile", "Art"
    ];

    // Helper to split text
    const splitText = (text, className) => {
        return text.split("").map((char, index) => (
            <span key={index} className={`inline-block ${className}`}>
                {char === " " ? "\u00A0" : char}
            </span>
        ));
    };

    return (
        <div ref={containerRef} className="min-h-screen text-slate-900 relative overflow-x-hidden">
            <Background3D />
            {/* Fixed Global Video Background */}
            <div className="fixed inset-0 z-0">
                <img className="w-full h-full object-cover" src="https://img.sanishtech.com/u/5404fdb38cd8f5bab3e0495a8d6035c3.jpg" alt="" />
            </div>
            {/* Hero Section - Pinned Wrapper relative to Viewport */}
            <div ref={heroRef} className="relative z-10 h-screen w-full flex flex-col justify-center items-center perspective-[1000px]">

                {/* Mask Layer: Mix-Blend-Screen handles the cutout effect */}
                <div ref={maskRef} className="absolute inset-0 flex flex-col justify-center items-center bg-slate-50 mix-blend-screen pointer-events-none select-none z-10">
                    <div className="text-center">
                        <h1 ref={insdRef} className="text-black text-[28vw] md:text-[32vw] xl:text-[26rem] font-black leading-none flex items-center justify-center will-change-transform backface-hidden mb-24 md:mb-36">
                            {["I", "N", "S", "D"].map((char, index) => <span key={index} className={`char-extra inline-block origin-bottom transition-all duration-300 hover:text-primary hover:scale-110 ${index === 0 ? 'mt-4 md:mt-8 mr-[-2vw] md:mr-[-1vw]' : 'w-[1ch] text-center'}`}>{char}</span>)}
                        </h1>
                    </div>
                </div>

                <div className="absolute bottom-28 md:bottom-10 left-1/2 -translate-x-1/2 w-full flex flex-col items-center z-50 pointer-events-none">
                    <div ref={scrollHintRef} className="flex flex-col items-center gap-2 md:gap-4 mb-4 md:mb-8" style={{ mixBlendMode: 'difference' }}>
                        <div className="flex flex-col items-center text-[#333]">
                            <p className="scroll-text-small text-[8px] md:text-[14px] font-mono uppercase tracking-[0.6em] mb-1 md:mb-2 opacity-0 text-center whitespace-nowrap">
                                Shift your perspective
                            </p>
                            <div className="scroll-text-main text-sm md:text-2xl font-black italic tracking-tight uppercase opacity-0 whitespace-nowrap">
                                {splitText("Keep Scrolling", "char-hint-extra inline-block")}
                            </div>
                        </div>
                    </div>
                    <div ref={subTitleRef} className="hidden md:block overflow-hidden text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-secondary text-center whitespace-nowrap opacity-100 text-2xl md:text-4xl">
                        {splitText("Unexpected.", "char-extra inline-block")}
                    </div>
                </div>





            </div>

            {/* Marquee Strip */}
            <div className="relative z-20 py-6 md:py-12 bg-black text-white overflow-hidden rotate-2 scale-110 border-y-4 md:border-y-8 border-white">
                <div ref={marqueeRef} className="whitespace-nowrap flex text-4xl md:text-8xl font-black tracking-tighter uppercase">
                    <span className="pr-6 md:pr-12">Fashion • Design • Innovation • Creativity • Future • Style •</span>
                    <span className="pr-6 md:pr-12">Fashion • Design • Innovation • Creativity • Future • Style •</span>
                </div>
            </div>

            {/* Unique Vertical Accordion Gallery */}
            <div className="relative z-20 bg-black h-screen md:min-h-screen flex overflow-x-auto md:flex-row md:overflow-hidden snap-x snap-mandatory scroll-smooth">
                {galleryItems.map((item, index) => (
                    <div
                        key={index}
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
                        <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 pb-24 md:pb-12">
                            <div className="overflow-hidden">
                                <h3 className="text-5xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary translate-y-0 md:translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100 uppercase tracking-tighter">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="overflow-hidden mt-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                <p className="text-white/80 text-sm font-medium tracking-widest uppercase border-t border-primary/50 pt-4 inline-block">
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
                    </div>
                ))}
            </div>

            <AdmissionScroller />
            <StepVisual />

            {/* Student Spotlight Section - High Fashion Editorial Style */}
            <div ref={studentRef} className="relative min-h-screen py-20 md:py-32 px-4 md:px-12 overflow-hidden transition-colors duration-700">
                <div className="max-w-360 mx-auto">

                    {/* Header */}
                    <div className="mb-24 border-b border-current pb-12 overflow-hidden">
                        <span className="block text-sm font-mono tracking-widest uppercase mb-4 opacity-60">Spotlight</span>
                        <h2 className="text-[6vw] font-black uppercase tracking-tighter leading-none flex flex-col">
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
                                    src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Future Visionaries"
                                    className="spotlight-img-main w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105"
                                />
                            </div>
                            {/* Graphic Elements */}
                            <div className="absolute -bottom-12 -right-12 text-[12rem] leading-none font-black text-transparent stroke-text opacity-20 select-none pointer-events-none">
                                2026
                            </div>
                        </div>

                        {/* Content & Smaller Image */}
                        <div className="md:col-span-5 flex flex-col justify-between h-full pl-8">
                            <div className="mb-12">
                                <p className="text-2xl font-light leading-relaxed mb-8 opacity-80 flex flex-wrap gap-x-2 quote-container">
                                    {splitText("\"INSD gave me the freedom to fail, which is the only way to truly succeed in design. My final collection was a direct result of that chaos.\"", "quote-word")}
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-px bg-current"></div>
                                    <span className="uppercase tracking-widest font-bold text-sm">Aravind K., Fashion Design '25</span>
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

            {/* Horizontal Parallax Slider - Global Exposure */}


            {/* Legacy & Discovery Section - Unexpected Contrast */}
            <div ref={legacyRef} className="relative min-h-screen bg-white text-black py-0 px-0 flex flex-col items-center justify-center overflow-hidden -mt-[20vh] z-10 rounded-t-[4rem] shadow-2xl will-change-transform backface-hidden">

                {/* Next Level Background - Holographic Orbs (Optimized) */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-linear-to-b from-secondary/30 to-transparent blur-[80px] rounded-full mix-blend-multiply"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/20 blur-[80px] rounded-full mix-blend-multiply"></div>
                    <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-primary/20 blur-[60px] rounded-full mix-blend-multiply"></div>
                </div>

                {/* Main Content Wrapper */}
                <div className="legacy-content relative z-20 w-full max-w-6xl mx-auto flex flex-col items-center gap-24 py-32 px-4 md:px-12 pointer-events-auto">

                    {/* Top: Legacy Text (Centered & Animated) */}
                    <div className="relative z-10 text-center max-w-5xl mx-auto">
                        <h3 className="text-3xl md:text-5xl font-bold leading-tight uppercase tracking-tight text-slate-300 text-center">
                            {splitText("INSD was co-founded by IAS Officer & 1st Director General of NIFT who gave birth to Design Education in India along with Mr Sunjey Aggarwal and Pranav Raj Aggarwal. It is a National Award-Winning Design School that has built a community of artists, designers, and media professionals. Our programs are internationally acclaimed and focus on giving students a global outlook.", "legacy-word transition-all duration-300 will-change-transform inline-block mx-1")}
                        </h3>
                        <div className="mt-12 w-32 h-2 bg-black mx-auto rounded-full"></div>
                    </div>

                    {/* Bottom: Unexpected Search Interaction & Carousel */}
                    <div className="relative w-full h-full flex items-center justify-center perspective-[1000px] min-h-[600px]">

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
                        <div className="search-container relative w-full max-w-7xl backdrop-blur-xl bg-slate-900/90 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:scale-[1.01] cursor-text group overflow-hidden border border-white/10">

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
                                        placeholder="Search Courses..."
                                        className="bg-transparent border-none outline-none text-xl md:text-4xl font-light text-white placeholder-slate-600 w-full"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-50 group-focus-within:opacity-100 group-focus-within:text-secondary transition-all duration-300">
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
                                                            <h4 className="text-purple-400 font-mono text-xs uppercase tracking-widest mb-4">Masters (M.Des)</h4>
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
                                                            <h4 className="text-primary font-mono text-xs uppercase tracking-widest mb-4">Bachelors (B.Des)</h4>
                                                            <ul className="space-y-2">
                                                                {filterPrograms(programs.bachelors).map((item, i) => (
                                                                    <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer text-sm">{item}</li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                    {/* Diplomas */}
                                                    <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 pt-8 border-t border-white/5">
                                                        {hasItems(programs.diploma_two) && (
                                                            <div>
                                                                <h4 className="text-secondary font-mono text-xs uppercase tracking-widest mb-4">Adv. Diploma (2 Years)</h4>
                                                                <ul className="space-y-2">
                                                                    {filterPrograms(programs.diploma_two).map((item, i) => (
                                                                        <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all duration-300 cursor-pointer text-sm">{item}</li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        )}
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
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>


                            </div>
                        </div>
                    </div>


                </div>
            </div>
            {/* Separate Impact Stats Section */}
            <ImpactStats />
            <TestimonialSlider />
            <FeaturedIn />
            <EventBlogs />
            <InstagramGallery />
            <InsdiansByDesign />
            <div className="relative z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
