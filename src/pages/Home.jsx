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
import MouseImageTrail from '../components/MouseImageTrail';
import JobReady from '../components/JobReady';
import EmployabilityPrograms from '../components/EmployabilityPrograms';
import ProgramGrid from '../components/ProgramGrid';
import IndustryInsights from '../components/IndustryInsights';


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

            {/* Hero Section - Pinned Wrapper relative to Viewport */}
            <div ref={heroRef} className="relative z-10 min-h-screen w-full flex flex-col justify-center items-center bg-white overflow-hidden cursor-default">
                <MouseImageTrail containerRef={heroRef} />
                {/* Watermark Logo - Refined */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10 md:opacity-20 z-0 select-none pointer-events-none px-12">
                    <img
                        src="https://insd.edu.in/wp-content/uploads/2022/02/Final-Logo.png"
                        alt="INSD Watermark"
                        className="w-[70vw] md:w-[35vw] h-auto object-contain grayscale brightness-0 mix-blend-multiply opacity-30"
                    />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center">
                    <div ref={insdRef} className="text-black text-center flex flex-col items-center justify-center m-0 p-0 relative leading-none tracking-tighter">
                        <div className="text-[12vw] sm:text-[10vw] md:text-[7.5vw] font-black uppercase mb-3 md:mb-8 flex flex-col items-center">
                            <h1 className="tracking-tighter flex flex-col items-center">
                                <span className="block">creative</span>
                                <span className="text-slate-800 italic font-serif mt-[-0.5vw] md:mt-[-0.8vw] lowercase tracking-normal opacity-90">Excellence</span>
                            </h1>
                        </div>

                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/40 rounded-full blur-3xl -z-10 scale-125 opacity-50"></div>

                            <div className="flex items-center justify-center gap-4 md:gap-12">
                                <div className="flex flex-col items-end opacity-40">
                                    <div className="h-px w-6 md:w-12 bg-black mb-1 md:mb-2"></div>
                                    <span className="text-[2.5vw] md:text-[1.1vw] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">Since</span>
                                </div>

                                <div className="relative group">
                                    <span ref={fifteenRef} className="inline-block bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent text-[24vw] md:text-[16vw] font-black leading-[0.8] px-1 md:px-6">
                                        15
                                    </span>
                                    <span className="absolute -top-1 -right-4 md:-top-8 md:-right-16 text-[11px] md:text-2xl font-black text-primary tracking-widest uppercase">
                                        Est. 2011
                                    </span>
                                </div>

                                <div className="flex flex-col items-start opacity-40">
                                    <div className="h-px w-6 md:w-12 bg-black mb-1 md:mb-2"></div>
                                    <span className="text-[2.5vw] md:text-[1.1vw] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">Years</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                {/* Modern Mouse-style Scroll Indicator */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-70">
                    <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center p-1.5 relative overflow-hidden">
                        <div className="w-1 h-2 bg-primary rounded-full animate-scroll-wheel"></div>
                        {/* Soft Glow */}
                        <div className="absolute inset-0 bg-primary/5 blur-lg"></div>
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Scroll</span>
                </div>
            </div>

            <JobReady />
            <EmployabilityPrograms />
            <ProgramGrid />
            <IndustryInsights />

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

            <NetworkCounter />
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
            <InstagramGallery />
            <InsdiansByDesign />
            <div className="relative z-50">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
