import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

import { campusData } from '../data/campusData';
import {
    ArrowUpRight, Users, Layers, Maximize, BookOpen, Pipette,
    Camera, Monitor, Coffee, Mic, Library, Cpu, Scissors, MapPin,
    Building, TreePine, TrainFront, Utensils, Music, GraduationCap,
    ShieldCheck, Gem, Globe2, Briefcase, Sun, Building2, Palmtree,
    Compass, Hexagon, Anchor, Fingerprint, Aperture, Palette,
    Paintbrush, Castle, Crown, Navigation, Box
} from 'lucide-react';

const Campuses = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const locationsRef = useRef(null);
    const horizontalScrollRef = useRef(null);
    const horizontalSectionRef = useRef(null);
    const portalTextRef = useRef(null);
    const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
    const [activeCampus, setActiveCampus] = React.useState(null);
    const detailSectionRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Check for initial campus from URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const node = params.get('node');
        if (node && campusData[node]) {
            setActiveCampus(campusData[node]);
            setTimeout(() => {
                detailSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
            }, 1000);
        }
    }, []);

    const handleExplore = (slug) => {
        setActiveCampus(campusData[slug]);
        // Update URL without reload
        const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?node=${slug}`;
        window.history.pushState({ path: newurl }, '', newurl);

        setTimeout(() => {
            detailSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const closeDetail = () => {
        setActiveCampus(null);
        const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
        window.history.pushState({ path: newurl }, '', newurl);
    };


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
            // 1. Portal Zoom-Through Hero
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 1,
                    pin: true,
                }
            });

            heroTl.to(".portal-gate-l", { xPercent: -100, opacity: 0, scale: 2, filter: "blur(20px)" }, 0)
                .to(".portal-gate-r", { xPercent: 100, opacity: 0, scale: 2, filter: "blur(20px)" }, 0)
                .to(portalTextRef.current, { scale: 50, opacity: 0, duration: 2, ease: "power2.in" }, 0)
                .from(".hero-content-reveal", { scale: 0.5, opacity: 0, filter: "blur(30px)", duration: 2 }, 0.5)
                .to(".hero-bg-video", { scale: 1.2, filter: "blur(0px)", opacity: 0.6 }, 0);

            // 2. Horizontal "Travel" Section
            if (horizontalScrollRef.current) {
                const scrollAmount = horizontalScrollRef.current.scrollWidth - window.innerWidth;
                gsap.to(horizontalScrollRef.current, {
                    x: -scrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizontalSectionRef.current,
                        start: "top top",
                        end: () => `+=${scrollAmount}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                });

                // Parallax images within horizontal slides
                gsap.utils.toArray(".loc-panel-img").forEach(img => {
                    gsap.fromTo(img,
                        { x: -100 },
                        {
                            x: 100,
                            ease: "none",
                            scrollTrigger: {
                                trigger: img,
                                containerAnimation: gsap.getById("horizontalTween"), // Actually we just use scrub: 1 on the main timeline
                                scrub: true
                            }
                        }
                    );
                });
            }

            // 3. Magnetic Hover for buttons
            const magneticButtons = document.querySelectorAll(".magnetic-btn");
            magneticButtons.forEach(btn => {
                const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
                const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

                btn.addEventListener("mousemove", (e) => {
                    const { clientX, clientY } = e;
                    const { left, top, width, height } = btn.getBoundingClientRect();
                    const x = (clientX - (left + width / 2)) * 0.5;
                    const y = (clientY - (top + height / 2)) * 0.5;
                    xTo(x);
                    yTo(y);
                });

                btn.addEventListener("mouseleave", () => {
                    xTo(0);
                    yTo(0);
                });
            });

            // 4. Lab Cards Reveal
            gsap.utils.toArray(".lab-card").forEach((card, i) => {
                gsap.from(card, {
                    opacity: 0,
                    y: 100,
                    rotateX: 45,
                    duration: 1.5,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 5. Scroll Progress Line
            gsap.to(".scroll-progress", {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 0.3
                }
            });

            // 6. Marquee Velocity Effect
            let marqueeProxy = { timeScale: 1 };
            const marqueeAnimation = gsap.fromTo(".marquee-vertical-nexus", { yPercent: 0 }, {
                yPercent: -50,
                duration: 30,
                ease: "none",
                repeat: -1
            });

            ScrollTrigger.create({
                onUpdate: (self) => {
                    let velocity = Math.abs(self.getVelocity());
                    let scale = 1 + (velocity / 500);
                    gsap.to(marqueeProxy, {
                        timeScale: scale,
                        duration: 0.5,
                        onUpdate: () => marqueeAnimation.timeScale(marqueeProxy.timeScale)
                    });
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const locations = [
        { city: "South Delhi", slug: "south-delhi", title: "Flagship Campus", desc: "Our primary creative ecosystem situated in the cultural heart of India's capital.", img: `https://images.pexels.com/photos/1547637/pexels-photo-1547637.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1600}`, num: "01" },
        { city: "North Delhi", slug: "north-delhi", title: "Innovation Hub", desc: "A dynamic center focusing on future paradigms of design and technology.", img: `https://images.pexels.com/photos/10861113/pexels-photo-10861113.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1600}`, num: "02" },
        { city: "Paris", slug: "paris", title: "Global Couture", desc: "In the world's fashion capital, defining the bleeding edge of luxury design.", img: `https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1600}`, num: "03" },
        { city: "Washington", slug: "washington", title: "Strategic Design", desc: "Where design thinking meets international business leadership and strategy.", img: `https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1600}`, num: "04" },
        { city: "Dubai", slug: "dubai", title: "Future Aesthetics", desc: "Positioned in the hub of futuristic architecture and retail innovation.", img: `https://images.pexels.com/photos/1708601/pexels-photo-1708601.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1600}`, num: "05" },
        { city: "UK", slug: "uk", title: "Creative Arts", desc: "A prestigious partnership nurturing the next generation of visual arts pioneers.", img: `https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1600}`, num: "06" }
    ];


    return (
        <div ref={containerRef} className="bg-white text-black selection:bg-primary selection:text-white overflow-hidden font-sans">
            <SEO
                title="Our Global Campus Network - Delhi, Paris, London, Dubai"
                description="International School of Design (INSD) has a strong presence across India and international locations. Explore our flagship campuses in South Delhi, Paris, Washington, and more."
                keywords="INSD campuses, design school locations, South Delhi campus, INSD Paris, INSD Dubai, international design school"
            />

            {/* Top Navigation Progress */}
            <div className="fixed top-0 left-0 w-full h-[2px] bg-black/10 z-100 origin-left">
                <div className="scroll-progress h-full bg-primary scale-x-0 w-full origin-left" />
            </div>

            {/* Custom Background Noise/Grain */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <AnimatePresence mode="wait">
                {!activeCampus ? (
                    <motion.div
                        key="overview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Section 1: The Warp Portal Hero */}
                        <div ref={heroRef} className="relative h-screen bg-white flex items-center justify-center overflow-hidden">
                            <div className="hero-bg-video absolute inset-0 z-0 scale-125 filter blur-2xl opacity-0 transition-opacity duration-1000">
                                <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="https://www.pexels.com/download/video/3129957/" />
                            </div>

                            <div className="portal-gate-l absolute left-0 top-0 w-1/2 h-full bg-white z-20 flex items-center justify-end overflow-hidden">
                                <h2 className="text-[30vw] font-black text-black/5 leading-none translate-x-1/2">CAM</h2>
                            </div>
                            <div className="portal-gate-r absolute right-0 top-0 w-1/2 h-full bg-white z-20 flex items-center justify-start overflow-hidden">
                                <h2 className="text-[30vw] font-black text-black/5 leading-none -translate-x-1/2">PUS</h2>
                            </div>

                            <div ref={portalTextRef} className="relative z-30 pointer-events-none px-4 text-center">
                                <h1 className="text-black text-[18vw] md:text-[15vw] font-black uppercase tracking-tighter leading-none italic">
                                    ENT<span className="text-transparent strok-text-black opacity-40">E</span>R
                                </h1>
                            </div>

                            <div className="hero-content-reveal absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6 text-center">
                                <span className="text-primary font-mono tracking-[0.8em] md:tracking-[1.5em] uppercase text-[9px] md:text-[10px] mb-8 animate-pulse">Unlocking The Ecosystem</span>
                                <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter text-center max-w-5xl leading-[0.85]">
                                    Nodes Of <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Pure Creation.</span>
                                </h2>
                            </div>
                        </div>

                        {/* Section 2: Immersive Intro Grid */}
                        <section className="py-64 px-6 bg-white relative space-y-32">
                            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                                <div className="order-2 md:order-1 relative">
                                    <div className="aspect-square bg-white rounded-[3rem] overflow-hidden group border border-white/10">
                                        <img src={`https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=${isMobile ? 800 : 1200}`} className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                                    </div>
                                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
                                </div>
                                <div className="order-1 md:order-2">
                                    <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] block mb-6">Atmosphere</span>
                                    <h3 className="text-4xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-8">
                                        Beyond <br /> Four Walls.
                                    </h3>
                                    <p className="text-black/60 text-lg md:text-xl leading-relaxed font-light mb-12">
                                        An INSD campus is not just building—it's a high-performance laboratory where craftsmen, rebels, and visionaries meet to define the new luxury world.
                                    </p>
                                    <button className="magnetic-btn px-12 py-5 border border-white/20 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">
                                        View 3D Tour
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Section 3: Horizontal "Location Discovery" */}
                        <section ref={horizontalSectionRef} className="h-screen bg-white">
                            <div ref={horizontalScrollRef} className="h-full flex items-center px-[5vw] gap-32">
                                <div className="min-w-[85vw] md:min-w-[40vw] flex flex-col justify-center">
                                    <span className="text-primary font-bold uppercase tracking-widest text-xs mb-6 block">— The Network</span>
                                    <h2 className="text-6xl md:text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase mb-12">
                                        Pan-India <br /> <span className="text-transparent stroke-text-white stroke-black!">Dominance.</span>
                                    </h2>
                                    <p className="text-lg md:text-xl text-slate-500 max-w-sm">
                                        Strategic hubs positioned in the epicenters of India's cultural and commercial revolutions.
                                    </p>
                                </div>

                                {locations.map((loc, i) => (
                                    <div key={i} className="min-w-[85vw] md:min-w-[70vw] h-[80vh] bg-white rounded-[3rem] relative overflow-hidden group group border border-black/5 shadow-2xl">
                                        <div className="absolute -bottom-20 -left-10 opacity-5 select-none pointer-events-none">
                                            <span className="text-[35vw] font-black text-black leading-none uppercase">{loc.city[0]}</span>
                                        </div>

                                        <div className="relative z-10 w-full h-full p-8 md:p-24 flex flex-col md:flex-row items-center gap-10 md:gap-12">
                                            <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
                                                <span className="text-primary font-mono text-sm md:text-xl border border-primary/30 px-4 md:px-6 py-1 md:py-2 rounded-full w-fit block">0{i + 1}</span>
                                                <h3 className="text-5xl md:text-9xl font-black uppercase text-black tracking-tighter leading-none">{loc.city}</h3>
                                                <p className="text-black/60 text-base md:text-xl font-light whitespace-normal max-w-sm"><span className="text-black font-bold">{loc.title}.</span> {loc.desc}</p>
                                                <button
                                                    onClick={() => handleExplore(loc.slug)}
                                                    className="px-8 md:px-10 py-3 md:py-4 bg-black text-white font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all text-xs md:text-base cursor-pointer"
                                                >
                                                    Explore Node
                                                </button>
                                            </div>
                                            <div className="w-full md:w-1/2 h-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden relative min-h-[200px] md:min-h-0">
                                                <img src={loc.img} className="loc-panel-img w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000 scale-125 group-hover:scale-100" />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4: The Core Labs (Perspective Grid) */}
                        <section className="py-64 bg-white relative overflow-hidden border-t border-black/5">
                            <div className="max-w-7xl mx-auto px-6">
                                <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                                    <div className="max-w-2xl">
                                        <span className="text-primary font-mono uppercase tracking-[0.5em] text-[9px] md:text-[10px] block mb-4">Inside the Labs</span>
                                        <h2 className="text-4xl md:text-8xl font-black uppercase leading-none tracking-tighter text-black">
                                            World-Class <br /> <span className="text-transparent strok-text-black">Infrastructure.</span>
                                        </h2>
                                    </div>
                                    <p className="text-black/60 text-lg max-w-sm mb-4 border-l border-black/10 pl-8">
                                        Our environments are engineered to reduce friction between idea and execution.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                    {[
                                        { name: "Couture Suite", desc: "Equipped with high-performance industrial machinery and couture tools.", icon: "🧵", bg: "bg-primary/5" },
                                        { name: "Animation Farm", desc: "Ultrafast rendering nodes and full-body motion capture stages.", icon: "⚡", bg: "bg-secondary/5" },
                                        { name: "3D Workshops", desc: "Advanced rapid prototyping, SLA printing, and material libraries.", icon: "📐", bg: "bg-secondary/5" }
                                    ].map((lab, i) => (
                                        <div key={i} className={`lab-card group relative p-16 rounded-[3rem] border border-white/5 ${lab.bg} hover:border-white/20 transition-all duration-700 overflow-hidden`}>
                                            <div className="absolute top-0 right-0 p-8 text-6xl grayscale group-hover:grayscale-0 transition-all opacity-20 group-hover:opacity-100">{lab.icon}</div>
                                            <div className="relative z-10">
                                                <span className="text-primary font-mono text-[10px] md:text-xs block mb-6">Lab Unit 0{i + 1}</span>
                                                <h4 className="text-2xl md:text-3xl font-black uppercase mb-6 text-black">{lab.name}</h4>
                                                <p className="text-black/60 leading-relaxed font-light text-sm md:text-base">{lab.desc}</p>
                                            </div>
                                            <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <Footer />
                    </motion.div>
                ) : (
                    <motion.div
                        key="detail"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ type: "spring", damping: 30, stiffness: 200 }}
                        className={`${activeCampus.theme === 'dark' ? 'bg-[#0a0a0a] text-white' : 'bg-[#fcfcfc] text-black'} min-h-screen`}
                    >
                        {/* Dynamic Campus Hero */}
                        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                            <motion.img
                                initial={{ scale: 1.2 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 1.5 }}
                                src={activeCampus.heroImg}
                                className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                            />
                            <div className={`absolute inset-0 ${activeCampus.theme === 'dark' ? 'bg-linear-to-b from-black/0 to-[#0a0a0a]' : 'bg-linear-to-b from-white/0 to-[#fcfcfc]'}`} />

                            <div className="relative z-10 text-center px-6">
                                <motion.button
                                    onClick={closeDetail}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mb-8 px-6 py-2 border border-current rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                >
                                    ← Back to Network
                                </motion.button>
                                <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-none mb-4">
                                    {activeCampus.city}
                                </h1>
                                <p className="text-xl md:text-2xl font-bold uppercase tracking-[0.3em] opacity-60">
                                    {activeCampus.tagline}
                                </p>
                            </div>
                        </section>

                        {/* Detailed Content Grid */}
                        <div className="max-w-[1400px] mx-auto px-6 py-32 space-y-48">
                            {/* Intro & Summary */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                                <div>
                                    <span className="text-primary font-bold uppercase tracking-widest text-xs block mb-8">— Introduction</span>
                                    <h2 className="text-4xl md:text-7xl font-black uppercase leading-[1.1] mb-12">
                                        {activeCampus.fullName}
                                    </h2>
                                </div>
                                <div className="space-y-8">
                                    <p className="text-lg md:text-2xl font-light leading-relaxed opacity-70 border-l-2 border-primary pl-8">
                                        {activeCampus.intro}
                                    </p>
                                    {activeCampus.size && (
                                        <div className="pt-8">
                                            <span className="text-xs font-bold uppercase tracking-widest opacity-40 block mb-2">Campus Scale</span>
                                            <span className="text-4xl font-black">{activeCampus.size}</span>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Stats Grid if available */}
                            {activeCampus.stats && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {activeCampus.stats.map((stat, i) => (
                                        <div key={i} className="bg-white/5 border border-black/5 rounded-[2rem] p-10 backdrop-blur-3xl shadow-2xl">
                                            <div className="text-primary mb-6">{stat.icon}</div>
                                            <h4 className="text-5xl font-black mb-2">{stat.value}</h4>
                                            <span className="text-xs font-bold uppercase tracking-widest opacity-40">{stat.label}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Bento Grid if available (Washington/Dubai) */}
                            {activeCampus.bento && (
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {activeCampus.bento.map((item, i) => (
                                        <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''} bg-black/5 rounded-[3rem] p-12 relative overflow-hidden group border border-black/5`}>
                                            <div className="relative z-10">
                                                <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                                                <h3 className="text-3xl font-black uppercase mb-4">{item.title}</h3>
                                                <p className="opacity-60 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Infrastructure Gallery if available (Delhi) */}
                            {activeCampus.facilities && (
                                <div className="space-y-12">
                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Infrastructure & Lab Units.</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {activeCampus.facilities.map((fac, i) => (
                                            <div key={i} className="aspect-video relative rounded-[3rem] overflow-hidden group shadow-2xl">
                                                <img src={fac.img} className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
                                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-12">
                                                    <h4 className="text-3xl font-black uppercase text-white mb-2">{fac.title}</h4>
                                                    <p className="text-white/60 text-sm max-w-sm">{fac.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* CTA Footer for Detail */}
                        <section className="py-48 px-6 text-center bg-primary text-white">
                            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-12">Begin Your Journey.</h2>
                            <div className="flex flex-col md:flex-row gap-6 justify-center">
                                <button className="px-12 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">Apply to {activeCampus.city}</button>
                                <button className="px-12 py-5 border border-white/30 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all">Book Studio Tour</button>
                            </div>
                        </section>
                        <Footer />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Campuses;
