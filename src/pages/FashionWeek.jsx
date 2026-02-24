import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Calendar, MapPin, Play, ArrowRight, Share2, Heart, Award, Sparkles, Zap, ChevronRight, Minimize2, Star, Target } from 'lucide-react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const FashionWeek = () => {
    const containerRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const scrollContainerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);


    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Horizontal Scroll & Multi-Layer Parallax Logic
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Horizontal Scroll & Runway Pinning

            const sections = gsap.utils.toArray(".runway-item");
            if (!isMobile) {
                gsap.to(sections, {
                    xPercent: -100 * (sections.length - 1),
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".horizontal-runway-wrapper",
                        pin: true,
                        scrub: 1,
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + document.querySelector(".horizontal-runway-wrapper").offsetWidth,
                        overwrite: "auto"
                    }
                });
            }


            // Parallax on Floating Text & Elements
            gsap.to(".parallax-fast", {
                y: -300,
                scrollTrigger: {
                    trigger: ".parallax-fast",
                    scrub: 1
                }
            });

            // Reveal animations with staggered words
            gsap.utils.toArray('.reveal-text').forEach((text) => {
                gsap.from(text, {
                    y: 100,
                    opacity: 0,
                    duration: 2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: text,
                        start: "top 95%",
                    }
                });
            });

            // Moving Light Beams in Hero
            gsap.to(".light-beam", {
                x: "150%",
                duration: 5,
                repeat: -1,
                stagger: 2,
                ease: "none"
            });

            // Parallax on image reveals
            gsap.utils.toArray('.img-parallax').forEach((img) => {
                gsap.to(img, {
                    yPercent: 30,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        scrub: true
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, [isMobile]);

    const collections = [
        {
            year: "2026",
            title: "Cyber-Silk",
            theme: "Techno-Loom",
            image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop",
            location: "New York Hub",
            glow: "from-primary/20"
        },
        {
            year: "2025",
            title: "Noir Archive",
            theme: "Monochrome",
            image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
            location: "Paris Atelier",
            glow: "from-slate-400/20"
        },
        {
            year: "2024",
            title: "Primal Fiber",
            theme: "Earth Core",
            image: "https://images.unsplash.com/photo-1539109132314-34a77bd6819f?q=80&w=1974&auto=format&fit=crop",
            location: "Milan Gallery",
            glow: "from-orange-400/20"
        }
    ];


    return (
        <div ref={containerRef} className="bg-[#f2f8fc] text-black selection:bg-primary selection:text-white font-sans overflow-x-hidden">

            {/* --- GLOBAL APP ELEMENTS --- */}
            <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.05] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]" />

            {/* --- NEXT LEVEL HERO: THE ICE PORTAL --- */}
            <section className="relative min-h-svh md:h-[115vh] flex items-center justify-center overflow-hidden">
                {/* Layer 0: Kinetic Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://insd.edu.in/wp-content/uploads/2019/11/FASHION-SHOW-BANNER-min-1.jpg"
                        className="w-full h-full object-cover opacity-15 contrast-[1.1] scale-125 blur-2xl grayscale"
                        alt="Background Art"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,100,255,0.05),transparent_70%)]" />
                    <div className="absolute inset-0 bg-linear-to-b from-[#f2f8fc] via-transparent to-[#f2f8fc]" />
                </div>



                {/* Layer 1: Moving Light Beams */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="light-beam absolute top-0 left-[-50%] w-[40%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12" />
                    ))}
                </div>

                {/* Layer 2: Floating Editorial Frame */}
                <motion.div
                    initial={{ scale: 1.1, opacity: 0, y: 50 }}
                    whileInView={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ duration: 2.5, ease: [0.23, 1, 0.32, 1] }}
                    className="absolute inset-x-6 inset-y-20 md:inset-x-32 md:inset-y-40 z-2 border border-black/5 rounded-[4rem] md:rounded-[10rem] overflow-hidden group shadow-[0_80px_150px_rgba(0,0,100,0.08)] bg-white/50 backdrop-blur-sm"
                >
                    <img
                        src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1976&auto=format&fit=crop"
                        className="w-full h-full object-cover opacity-80 md:opacity-70 group-hover:scale-105 transition-transform duration-8000 ease-out brightness-100 sm:brightness-105 saturate-100 sm:saturate-50 object-center md:object-top"
                        alt="Hero Focus"
                    />

                    {/* Industrial Overlays */}
                    <div className="absolute inset-x-12 inset-y-12 border border-white/20 rounded-[3rem] md:rounded-[8rem] pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-between p-12 md:p-24 mix-blend-difference invert brightness-75">
                        <div className="rotate-90 origin-left text-[8px] md:text-[10px] font-mono tracking-[1.5em] opacity-30 uppercase text-black">Haute_Couture_v.2026</div>
                        <div className="absolute -rotate-90 origin-right text-[8px] md:text-[10px] font-mono tracking-[1.5em] opacity-30 uppercase text-black">Global_Disruption_Protocol</div>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-transparent to-transparent" />
                </motion.div>



                <div className="relative z-10 flex flex-col items-center w-full px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="text-primary/70 font-mono text-[8px] md:text-xs uppercase mb-6 md:mb-12 flex items-center gap-4 text-center"
                    >
                        <div className="hidden sm:block w-10 h-px bg-primary/30" />
                        Mastering The Art Of Aesthetics
                        <div className="hidden sm:block w-10 h-px bg-primary/30" />
                    </motion.div>

                    <h1 className="text-6xl sm:text-8xl md:text-[14vw] font-black uppercase text-black/10 absolute top-1/2 -translate-y-1/2 pointer-events-none select-none tracking-tighter italic">
                        RUNWAY
                    </h1>

                    <div className="flex flex-col items-center gap-8 md:gap-12 mt-8 md:mt-12 scale-90 md:scale-100">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 1.2, ease: "expoOut" }}
                            className="relative group w-full max-w-[320px] sm:max-w-none"
                        >
                            <div className="bg-white/60 backdrop-blur-2xl border border-black/5 rounded-[2.5rem] p-1.5 flex items-center justify-between sm:justify-start gap-4 sm:gap-8 group-hover:border-primary/20 group-hover:bg-white/80 transition-all duration-700 relative overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.05)]">
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-linear-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-center gap-3 sm:gap-5 pl-4 sm:pl-8 py-3 sm:py-5">
                                    <div className="relative">
                                        <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl border border-black/5 flex items-center justify-center group-hover:border-primary/20 transition-colors bg-white/40">
                                            <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-primary/80 group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-pulse shadow-[0_0_15px_rgba(219,52,54,0.3)]" />
                                    </div>

                                    <div className="flex flex-col">
                                        <span className="text-[6px] sm:text-[7px] font-mono text-primary tracking-[0.3em] uppercase mb-1 opacity-60">Auth_Level_05</span>
                                        <span className="text-xs sm:text-base font-black uppercase tracking-widest text-black/80 group-hover:text-black transition-colors">Access Protocol</span>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ width: isMobile ? "56px" : "200px" }}
                                    className="h-14 w-14 md:h-20 md:w-20 bg-black text-white flex items-center justify-center gap-4 rounded-3xl overflow-hidden transition-all duration-700 shadow-2xl group/btn hover:bg-primary"
                                >
                                    <span className="font-black uppercase tracking-widest text-xs whitespace-nowrap hidden md:group-hover/btn:block">Request Entry</span>
                                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8 shrink-0 group-hover/btn:translate-x-1 transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.3, duration: 1.2, ease: "expoOut" }}
                            className="flex items-center gap-6"
                        >
                            <div className="h-10 md:h-16 w-px bg-linear-to-b from-transparent via-black/10 to-transparent" />
                            <div className="flex flex-col gap-2 md:gap-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-[8px] md:text-[9px] font-mono text-black/40 uppercase tracking-[0.4em]">2026_Schedule</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                </div>
                                <div className="flex items-center gap-6 md:gap-10 group">
                                    <h4 className="text-xl md:text-4xl font-black italic tracking-tighter uppercase text-black/50 group-hover:text-black transition-colors">
                                        Next <span className="strok-text-black text-transparent opacity-20">PHASE.</span>
                                    </h4>
                                    <div className="flex flex-col items-end">
                                        <span className="text-[8px] md:text-[10px] font-black text-black/20 group-hover:text-primary transition-colors italic">PARIS ATELIER</span>
                                        <span className="text-[7px] md:text-[8px] font-bold text-black/30 whitespace-nowrap">MARCH 14, 2026</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

            </section>

            {/* --- VISUAL MANIFESTO: THE ICE CORE --- */}
            <section className="py-24 md:py-80 relative px-6 lg:px-20 overflow-hidden bg-[#f2f8fc]">
                <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-blue-500/5 rounded-full blur-[180px] pointer-events-none" />

                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-40 items-center lg:items-start">
                        <div className="lg:w-1/2 relative z-10 w-full">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "3.5rem" }}
                                transition={{ duration: 1.5, ease: "expoOut" }}
                                className="h-0.5 bg-primary mb-8 md:mb-12"
                            />
                            <div className="reveal-text text-primary/60 font-mono text-[8px] md:text-xs uppercase tracking-[0.8em] mb-8 md:mb-12">
                                Editorial_Manifesto_v.2.0
                            </div>
                            <h2 className="text-5xl sm:text-7xl md:text-[11vw] font-black uppercase tracking-tightest leading-[0.8] mb-10 md:mb-16 text-black">
                                Sculpt <br />
                                <span className="strok-text-black italic opacity-20">Digital</span> <br /> Soul.
                            </h2>
                            <p className="text-black/50 text-lg md:text-3xl font-light italic leading-relaxed max-w-xl border-l-2 border-primary/20 pl-6 md:pl-16">
                                "The fabric of the <span className="text-black font-black underline decoration-primary/40 underline-offset-8">Future</span> is woven from code and couture alike."
                            </p>
                        </div>

                        {/* --- ENHANCED AUTOMATED FASHION SLIDER: THE ATELIER LOOP --- */}
                        <div className="lg:w-1/2 relative group h-[50vh] sm:h-[60vh] md:h-[80vh] w-full mt-12 lg:mt-0">
                            <div className="absolute inset-0 rounded-3xl md:rounded-[5rem] overflow-hidden border border-black/5 shadow-2xl bg-white/40 backdrop-blur-sm">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={currentSlide}
                                        initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                                        exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                                        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute inset-0"
                                    >
                                        <img
                                            src={[
                                                "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2040&auto=format&fit=crop",
                                                "https://images.unsplash.com/photo-1539109132314-34a77bd6819f?q=80&w=1974&auto=format&fit=crop",
                                                "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop",
                                                "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
                                            ][currentSlide % 4]}
                                            className="w-full h-full object-cover grayscale-0 md:grayscale brightness-100 md:brightness-110"
                                            alt="Manifesto Loop"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-tr from-primary/10 via-transparent to-transparent opacity-60 md:opacity-40" />
                                    </motion.div>
                                </AnimatePresence>

                                {/* Progress Bar Overlay */}
                                <div className="absolute bottom-12 inset-x-12 z-20">
                                    <div className="flex justify-between items-end mb-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-mono font-black text-white/50 uppercase tracking-[0.4em]">Active_Pulse</span>
                                            <span className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">Sequence_0{(currentSlide % 4) + 1}</span>
                                        </div>
                                        <div className="text-3xl font-black italic text-white/20">0{(currentSlide % 4) + 1}</div>
                                    </div>
                                    <div className="h-0.5 w-full bg-white/10 rounded-full overflow-hidden">
                                        <motion.div
                                            key={currentSlide}
                                            initial={{ width: 0 }}
                                            animate={{ width: "100%" }}
                                            transition={{ duration: 5, ease: "linear" }}
                                            onAnimationComplete={() => setCurrentSlide(prev => prev + 1)}
                                            className="h-full bg-primary shadow-[0_0_15px_rgba(255,0,0,0.5)]"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Metadata spec Node (Smaller, more refined) */}
                            <motion.div
                                key={`node-${currentSlide}`}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.5, duration: 1 }}
                                className="absolute -top-10 -right-4 sm:-right-6 md:top-24 md:-right-20 bg-white/80 backdrop-blur-2xl p-4 md:p-10 rounded-[2rem] md:rounded-4xl shadow-2xl border border-white z-30 max-w-[140px] md:max-w-none"
                            >
                                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-6">
                                    <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-primary animate-ping" />
                                    <div className="font-mono text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-black/40">Spec_Node_0{(currentSlide % 4) + 1}</div>
                                </div>
                                <div className="text-sm md:text-3xl font-black uppercase italic leading-none tracking-tighter text-black/90 mb-3 md:mb-6">
                                    {["SILK_GEO", "LA_POMPE", "CYBER_TEXT", "NEO_NOIR"][currentSlide % 4]}
                                </div>
                                <div className="flex gap-1 md:gap-2">
                                    <span className="text-[6px] md:text-[7px] font-mono bg-black text-white px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm">V.2.0</span>
                                    <span className="text-[6px] md:text-[7px] font-mono border border-black/10 px-1.5 md:px-2 py-0.5 md:py-1 rounded-sm text-black/40">SENS_0.42</span>
                                </div>
                            </motion.div>
                        </div>


                    </div>
                </div>
            </section>



            {/* --- THE HORIZONTAL RUNWAY: NEXT GEN --- */}
            <section className={`horizontal-runway-wrapper ${isMobile ? 'h-auto py-12 md:py-24' : 'h-screen'} overflow-hidden bg-[#eaf4fb] relative`}>
                <div className="absolute inset-0 z-0 bg-linear-to-b from-[#f2f8fc] via-white/50 to-[#f2f8fc]" />
                <div className={`flex ${isMobile ? 'flex-col items-center gap-16 md:gap-24' : 'h-full w-[300vw]'}`}>
                    {collections.map((item, i) => (
                        <div key={i} className={`runway-item ${isMobile ? 'w-full' : 'w-screen h-full'} flex items-center justify-center px-4 sm:px-12 md:px-20 lg:px-40 relative group`}>
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] md:w-[70vw] h-[90vw] md:h-[70vw] rounded-full blur-[100px] md:blur-[200px] opacity-0 group-hover:opacity-20 transition-opacity duration-1500 bg-linear-to-br ${item.glow} to-transparent`} />

                            <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] rounded-[3rem] md:rounded-[8rem] overflow-hidden border border-black/5 bg-white/40 backdrop-blur-md shadow-2xl shadow-blue-900/5 transform-gpu transition-all duration-1200 group-hover:scale-[1.01] group-hover:shadow-blue-900/10">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover opacity-90 contrast-[1.05] group-hover:scale-105 group-hover:opacity-100 transition-all duration-5000 grayscale hover:grayscale-0"
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-white/90 via-transparent to-white/10" />

                                <div className="absolute top-6 md:top-20 right-6 md:right-20 text-right">
                                    <p className="text-primary font-mono text-[7px] md:text-xs tracking-[0.4em] uppercase mb-1.5 md:mb-2 font-black">PROTO-TYPE_{i + 1}</p>
                                    <div className="w-10 md:w-32 h-0.5 bg-primary/40 ml-auto" />
                                </div>



                                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-12 md:p-32 z-10">
                                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 md:gap-16">
                                        <div className="max-w-3xl w-full">
                                            <div className="flex items-center gap-4 md:gap-6 text-primary font-mono text-[9px] md:text-sm uppercase tracking-[0.4em] md:tracking-[0.5em] mb-4 md:mb-8 leading-none font-black text-primary/70">
                                                <Star className="w-4 h-4 md:w-7 md:h-7 fill-current" />
                                                <span>Edition_{item.year}</span>
                                            </div>
                                            <h3 className="text-4xl sm:text-6xl md:text-[13vw] font-black uppercase tracking-tighter leading-[0.75] mb-4 md:mb-8 text-black md:group-hover:translate-x-6 transition-transform duration-1500 opacity-90">
                                                {item.title}
                                            </h3>
                                            <p className="text-black/60 text-base md:text-2xl font-light tracking-wide max-w-xl leading-relaxed italic border-l-2 md:border-l-4 border-primary/10 pl-6 md:pl-10">
                                                "{item.theme} is the interface between the <span className="text-primary font-black">Human Body</span> and the future."
                                            </p>
                                        </div>

                                        <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-16">
                                            <div className="text-left md:text-right">
                                                <p className="text-[8px] md:text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-black/30 mb-1">COORD_SYSTEM</p>
                                                <p className="text-xl md:text-5xl font-black uppercase italic tracking-tighter text-black/80">{item.location}</p>
                                            </div>
                                            <motion.div
                                                whileHover={{ scale: 1.1, backgroundColor: "#000", color: "#fff" }}
                                                className="w-16 h-16 md:w-40 md:h-40 rounded-full border border-black/5 bg-white/40 backdrop-blur-md flex flex-col items-center justify-center transition-all duration-700 cursor-pointer shadow-xl group/circle"
                                            >
                                                <Minimize2 className="w-6 h-6 md:w-16 md:h-16 mb-1 md:mb-2" />
                                                <span className="text-[7px] md:text-[10px] font-black uppercase tracking-[0.4em] scale-75 md:scale-100 opacity-60 md:opacity-0 md:group-hover/circle:opacity-100 transition-all">VIEW</span>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black text-blue-900/5 pointer-events-none italic select-none uppercase tracking-tightest opacity-[0.03]">
                                    INSIGHT
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>



            {/* --- INSTITUTIONAL VAULT: THE CRYSTAL ARCHIVE --- */}
            <section className="py-24 lg:py-48 relative px-6 lg:px-20 bg-[#f2f8fc] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(0,100,255,0.03),transparent_50%)]" />

                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-20 mb-32 md:mb-48">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-8 text-primary font-mono text-xs md:text-sm uppercase tracking-[0.8em] mb-12 reveal-text font-black opacity-60">
                                <span className="w-24 h-0.5 bg-primary/30"></span>
                                Institutional_Vault_v.02
                            </div>
                            <h2 className="text-5xl md:text-[11vw] font-black uppercase tracking-tighter leading-[0.75] reveal-text text-black">
                                Global <br />
                                <span className="strok-text-black italic opacity-20">Archive.</span>
                            </h2>
                        </div>

                        <div className="flex flex-col items-start lg:items-end gap-6 text-left lg:text-right reveal-text">
                            <p className="text-black/40 text-lg md:text-xl font-light italic max-w-sm">
                                A decade of disruption documented in the <span className="text-black font-black">Institutional Repository.</span>
                            </p>
                            <div className="flex flex-wrap gap-3 md:gap-4">
                                {["2020", "2021", "2022", "2023", "2024"].map((year) => (
                                    <button key={year} className="px-4 md:px-6 py-2 rounded-full border border-black/10 text-[9px] md:text-[10px] font-black text-black hover:bg-black hover:text-white transition-all">
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {[
                            { year: "2023", city: "Mumbai", stats: "42 Designers", img: "https://images.unsplash.com/photo-1550241895-511bd010364d?q=80&w=2070&auto=format&fit=crop" },
                            { year: "2022", city: "Paris", stats: "38 Designers", img: "https://images.unsplash.com/photo-1539109132314-34a77bd6819f?q=80&w=1974&auto=format&fit=crop" },
                            { year: "2021", city: "Milan", stats: "45 Designers", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop" },
                            { year: "2020", city: "London", stats: "31 Designers", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1, duration: 1 }}
                                whileHover={{ y: -15 }}
                                className="group relative aspect-3/5 rounded-4xl sm:rounded-4xl md:rounded-[3.5rem] overflow-hidden bg-white/40 border border-black/5 shadow-2xl shadow-blue-900/5 backdrop-blur-sm"
                            >
                                <img src={item.img} className="w-full h-full object-cover opacity-70 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1500 grayscale hover:grayscale-0 saturate-50 hover:saturate-100" alt="archive" />
                                <div className="absolute inset-0 bg-linear-to-t from-white via-white/10 to-transparent" />
                                <div className="absolute inset-x-6 sm:inset-x-10 bottom-8 sm:bottom-12">
                                    <div className="flex items-center gap-4 text-primary/60 mb-2 sm:mb-3 font-black">
                                        <div className="w-8 sm:w-10 h-0.5 bg-primary/30" />
                                        <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.4em]">{item.year}</span>
                                    </div>
                                    <h4 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 sm:mb-6 text-black/80">{item.city}</h4>
                                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                        <span className="text-[8px] sm:text-[10px] font-mono text-black/30 uppercase tracking-[0.4em]">{item.stats}</span>
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white flex items-center justify-center shadow-2xl hover:bg-primary transition-colors">
                                            <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-6 sm:top-10 right-6 text-primary/40 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Star className="w-6 h-6 sm:w-8 sm:h-8 fill-current" />
                                </div>
                            </motion.div>
                        ))}
                    </div>



                    <div className="mt-32 pt-16 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-10 text-black">
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-black/30 font-mono text-[10px] uppercase tracking-[0.5em]">
                            <div className="flex items-center gap-3">
                                <span className="text-primary/70 font-black">01</span>
                                <span className="hover:text-black transition-colors cursor-crosshair">Protocol_V.2</span>
                            </div>
                            <div className="w-8 h-px bg-black/10 hidden md:block" />
                            <div className="flex items-center gap-3">
                                <span className="text-primary/70 font-black">02</span>
                                <span className="hover:text-black transition-colors cursor-crosshair">Sequential_Sync</span>
                            </div>
                        </div>
                        <button className="flex items-center gap-6 text-2xl font-black uppercase italic hover:text-primary transition-all group px-10 py-5 rounded-full border border-black/5 hover:bg-white bg-white/30 backdrop-blur-sm shadow-xl shadow-blue-900/5">
                            Elite Vault Access <ArrowRight className="w-7 h-7 group-hover:translate-x-3 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>



            {/* --- KINETIC MARQUEE: NEXT ERA --- */}
            <div className="py-20 md:py-32 bg-white/40 backdrop-blur-md overflow-hidden whitespace-nowrap border-y border-black/5 relative z-10">
                <div className="flex animate-marquee-slow">
                    {[1, 2].map((m) => (
                        <div key={m} className="flex items-center gap-32 px-16">
                            {[
                                "METAMORPHOSIS 2023",
                                "LA_POMPE_2022",
                                "ETHEREAL_ECHOES",
                                "CYBER_SILK_2.0",
                                "NOIR_ARCHIVE_2021"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-16">
                                    <span className="text-6xl md:text-[10vw] font-black uppercase tracking-tightest italic opacity-[0.05] hover:opacity-100 hover:text-primary hover:scale-105 transition-all cursor-default text-black">{text}</span>
                                    <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>



            {/* --- THE GLOBAL PULSE: STATS --- */}
            <section className="py-40 md:py-60 border-y border-black/5 relative overflow-hidden bg-[#e6f0f8]">
                <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-[#f2f8fc] to-transparent pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay bg-linear-to-b from-transparent via-black/10 to-transparent" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-32 items-center">
                        {[
                            { val: "24M+", lab: "Protocols Reached" },
                            { val: "500+", lab: "Designers Deployed" },
                            { val: "12", lab: "Atelier Nodes" },
                            { val: "ELITE", lab: "Showcase Status" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group p-8 sm:p-10 rounded-4xl border border-black/5 hover:bg-white/50 transition-all duration-700">
                                <h3 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black italic tracking-tighter mb-4 sm:mb-6 text-black/80 group-hover:text-primary transition-colors duration-700">{stat.val}</h3>
                                <div className="w-12 h-0.5 md:w-16 md:h-1 bg-primary/20 mx-auto mb-6 sm:mb-8 group-hover:w-24 md:group-hover:w-32 group-hover:bg-primary transition-all duration-700" />
                                <p className="text-[9px] sm:text-[11px] font-black uppercase tracking-[0.4em] sm:tracking-[0.6em] text-black/40 group-hover:text-black/70 transition-colors">{stat.lab}</p>
                            </div>
                        ))}
                    </div>
                </div>


            </section>



            {/* --- ADMISSION CTA: CRYSTAL GATEWAY --- */}
            <section className="py-32 md:py-60 px-6 md:px-20 relative bg-[#f2f8fc]">
                <div className="container mx-auto">
                    <div className="relative bg-black text-white p-12 md:p-32 rounded-[4rem] md:rounded-[10rem] overflow-hidden group shadow-[0_100px_200px_rgba(0,10,50,0.4)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1500" />

                        {/* Background Text Element */}
                        <div className="absolute top-1/2 left-0 text-[40vw] font-black italic text-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none uppercase tracking-tightest opacity-[0.03]">
                            FUTURE
                        </div>


                        <div className="relative z-10 flex flex-col items-center text-center">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-24 h-24 mb-16 border-2 border-primary/40 border-dashed rounded-full flex items-center justify-center"
                            >
                                <Target className="w-12 h-12 text-primary animate-pulse" />
                            </motion.div>

                            <h2 className="text-4xl sm:text-6xl md:text-[13vw] font-black uppercase tracking-tighter leading-[0.75] mb-8 md:mb-12 px-4">
                                Redefine your <br />
                                <span className="strok-text-white italic opacity-30">Horizon.</span>
                            </h2>
                            <p className="text-white/50 text-base sm:text-xl md:text-5xl font-light mb-12 md:mb-20 max-w-5xl italic leading-tight px-4">
                                Secure your entry into the <span className="text-white font-black underline decoration-primary decoration-2 md:decoration-4 underline-offset-8 md:underline-offset-12">Institutional Protocol</span> and join the global fashion vanguard.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 w-full sm:w-auto items-center px-4">
                                <motion.button
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-full sm:w-auto px-10 sm:px-16 md:px-24 py-5 sm:py-6 md:py-10 bg-white text-black rounded-full text-base sm:text-lg md:text-2xl font-black uppercase tracking-[0.3em] shadow-2xl hover:bg-primary hover:text-white transition-all duration-500"
                                >
                                    Apply Protocol
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    className="w-full sm:w-auto px-10 sm:px-16 md:px-24 py-5 sm:py-6 md:py-10 border-2 border-white/10 text-white rounded-full text-base sm:text-lg md:text-2xl font-black uppercase tracking-[0.3em] transition-all duration-500"
                                >
                                    Connect_Elite
                                </motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />

            <style dangerouslySetInnerHTML={{
                __html: `
                .strok-text-white {
                    -webkit-text-stroke: 1px white;
                    color: transparent;
                }
                .strok-text-black {
                    -webkit-text-stroke: 1px black;
                    color: transparent;
                }
                @media (min-width: 1024px) {
                    .strok-text-white { -webkit-text-stroke: 2px white; }
                    .strok-text-black { -webkit-text-stroke: 2px black; }
                }

                .tracking-tightest { letter-spacing: -0.07em; }
                .light-beam {
                    filter: blur(80px);
                }
                @keyframes marquee-slow {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                .animate-marquee-slow {
                    animation: marquee-slow 60s linear infinite;
                }
                .img-parallax {
                    will-change: transform;
                }
                canvas {
                    mix-blend-mode: screen;
                }

            `}} />
        </div>
    );
};

export default FashionWeek;