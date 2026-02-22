import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Camera, Calendar, MapPin, Play, ArrowRight, Share2, Heart, Award, Sparkles, Zap, ChevronRight, Minimize2, Star, Target } from 'lucide-react';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const FashionWeek = () => {
    const containerRef = useRef(null);
    const runwayRef = useRef(null);
    const scrollContainerRef = useRef(null);
    const cursorRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Horizontal Scroll & Multi-Layer Parallax Logic
    useEffect(() => {
        let ctx = gsap.context(() => {
            // Custom Magnetic Cursor
            const cursor = cursorRef.current;
            window.addEventListener('mousemove', (e) => {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.5,
                    ease: "power3.out"
                });
            });

            const sections = gsap.utils.toArray(".runway-item");
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
    }, []);

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
            glow: "from-blue-500/20"
        },
        {
            year: "2024",
            title: "Primal Fiber",
            theme: "Earth Core",
            image: "https://images.unsplash.com/photo-1539109132314-34a77bd6819f?q=80&w=1974&auto=format&fit=crop",
            location: "Milan Gallery",
            glow: "from-orange-500/20"
        }
    ];

    return (
        <div ref={containerRef} className="bg-[#020202] text-white selection:bg-primary selection:text-white font-sans overflow-x-hidden cursor-none">
            {/* --- GLOBAL APP ELEMENTS --- */}
            <div ref={cursorRef} className="fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference hidden lg:block" />
            <div className="fixed inset-0 pointer-events-none z-50 opacity-15 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/film-grain.png')]" />

            {/* --- ULTIMATE HERO: THE GRAND ENTRANCE --- */}
            <section className="relative h-[115vh] flex items-center justify-center overflow-hidden">
                {/* Layer 0: Deep Background */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://insd.edu.in/wp-content/uploads/2019/11/FASHION-SHOW-BANNER-min-1.jpg"
                        className="w-full h-full object-cover opacity-30 contrast-150 scale-125 blur-sm"
                        alt="Background Grandeur"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(219,52,54,0.1),transparent_60%)]" />
                    <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black" />
                </div>

                {/* Layer 1: Moving Light Beams */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="light-beam absolute top-0 left-[-50%] w-[40%] h-full bg-linear-to-r from-transparent via-white/5 to-transparent rotate-12" />
                    ))}
                </div>

                {/* Layer 2: Master Frame with Cinematic Depth */}
                <motion.div
                    initial={{ scale: 1.2, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "expoOut" }}
                    className="absolute inset-x-4 inset-y-12 md:inset-x-32 md:inset-y-40 z-2 border border-white/5 rounded-[3rem] md:rounded-[8rem] overflow-hidden group shadow-[0_0_150px_rgba(0,0,0,0.8)]"
                >
                    <img
                        src="https://insd.edu.in/wp-content/uploads/2019/11/FASHION-SHOW-BANNER-min-1.jpg"
                        className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-[8000ms] ease-out brightness-75"
                        alt="Hero Focus"
                    />

                    {/* Editorial Overlay Text */}
                    <div className="absolute inset-0 flex items-center justify-between p-20 mix-blend-difference">
                        <div className="rotate-90 origin-left text-[10px] font-mono tracking-[1em] opacity-40 uppercase">Haute_Couture_v.2026</div>
                        <div className="-rotate-90 origin-right text-[10px] font-mono tracking-[1em] opacity-40 uppercase">Global_Disruption_Protocol</div>
                    </div>

                    <div className="absolute inset-0 bg-linear-to-tr from-black/60 via-transparent to-transparent" />
                </motion.div>

                {/* Layer 3: Main Typographic Explosion */}
                <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                        animate={{ opacity: 1, letterSpacing: "0.8em" }}
                        className="text-primary font-mono text-[10px] md:text-sm uppercase mb-16"
                    >
                        Mastering The Art Of Aesthetics
                    </motion.div>

                    <div className="flex flex-col md:flex-row items-center gap-10 mt-16 scale-90 md:scale-100">
                        {/* --- ENHANCED ENTRY PROTOCOL CARD --- */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 1 }}
                            className="relative group"
                        >
                            {/* Scanning Line Animation */}
                            <motion.div
                                animate={{ top: ["0%", "100%", "0%"] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-x-0 h-px bg-primary/40 z-20 blur-sm pointer-events-none"
                            />

                            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-1 flex items-center gap-8 group-hover:border-primary/40 transition-all duration-700 relative overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-center gap-4 pl-6 py-4">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                                            <Zap className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(219,52,54,0.8)]" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] font-mono text-primary tracking-[0.3em] uppercase mb-1">Clearance_Level_V</span>
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-black uppercase tracking-widest text-white/90 group-hover:text-white transition-colors">Entry Restricted</span>
                                        </div>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ width: "180px" }}
                                    className="h-16 w-16 bg-primary text-white flex items-center justify-center gap-4 rounded-2xl overflow-hidden transition-all duration-500 shadow-2xl group/btn"
                                >
                                    <span className="font-black uppercase tracking-widest text-[10px] whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity">Request Access</span>
                                    <ArrowRight className="w-6 h-6 shrink-0 group-hover/btn:rotate-[-45deg] transition-transform" />
                                </motion.button>
                            </div>
                        </motion.div>

                        {/* --- NEXT SEASON 2026 DEPLOYMENT HUB --- */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="flex items-center gap-6"
                        >
                            <div className="h-12 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-4">
                                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.5em]">2026_Deployment</span>
                                    <div className="px-2 py-0.5 rounded border border-primary/30 text-primary text-[7px] font-black uppercase tracking-widest">Active</div>
                                </div>
                                <div className="flex items-center gap-8 group">
                                    <h4 className="text-3xl font-black italic tracking-tighter uppercase text-white/80 group-hover:text-white transition-colors">
                                        Next <span className="strok-text-white text-white/20 opacity-100">Level.</span>
                                    </h4>
                                    <div className="flex items-center gap-3 text-[9px] font-bold uppercase tracking-[0.4em] text-white/20 group-hover:text-white/60 transition-all italic">
                                        March 14, Paris
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- VISUAL MANIFESTO: EDITORIAL BREAK --- */}
            <section className="py-60 relative px-6 lg:px-20 overflow-hidden bg-[#050505]">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-32 items-center">
                        <div className="lg:w-1/2 relative z-10">
                            <div className="reveal-text text-primary font-mono text-xs uppercase tracking-[0.8em] mb-12 flex items-center gap-4">
                                <div className="w-12 h-px bg-primary" />
                                Editorial_Manifesto_v.01
                            </div>
                            <h2 className="text-6xl md:text-[10rem] font-black uppercase tracking-tightest leading-[0.8] mb-16">
                                Craft <br />
                                <span className="strok-text-white italic opacity-40">Beyond</span> <br /> Form.
                            </h2>
                            <p className="text-white/40 text-xl md:text-3xl font-light italic leading-relaxed max-w-xl border-l border-white/10 pl-12">
                                "Fashion is the <span className="text-white font-black underline decoration-primary underline-offset-8">Armor</span> to survive the reality of everyday life."
                            </p>
                        </div>
                        <div className="lg:w-1/2 grid grid-cols-2 gap-8 relative">
                            <div className="aspect-3/4 rounded-3xl overflow-hidden mt-24 border border-white/5">
                                <img src="https://images.unsplash.com/photo-1539109132314-34a77bd6819f?q=80&w=1974&auto=format&fit=crop" className="img-parallax w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-125" alt="manifesto" />
                            </div>
                            <div className="aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-white/5">
                                <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop" className="img-parallax w-full h-full object-cover scale-150" alt="manifesto" />
                            </div>
                            {/* Floating Metadata Card */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 0 }}
                                className="absolute top-1/2 right-0 translate-x-12 -translate-y-1/2 bg-white text-black p-8 rounded-2xl rotate-6 shadow-[0_50px_100px_rgba(0,0,0,0.5)] hidden md:block"
                            >
                                <div className="font-mono text-[8px] uppercase tracking-widest mb-2 text-black/40">Item_Index_00/2A</div>
                                <div className="text-lg font-black uppercase italic leading-none whitespace-nowrap">Silk_Metamorphism</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- THE HORIZONTAL RUNWAY: ULTRA PINNED --- */}
            <section className="horizontal-runway-wrapper h-screen overflow-hidden bg-black relative">
                <div className="absolute inset-0 z-0 bg-linear-to-b from-black via-[#050505] to-black" />
                <div className="flex h-full w-[300vw]">
                    {collections.map((item, i) => (
                        <div key={i} className="runway-item w-screen h-full flex items-center justify-center px-12 lg:px-40 relative group">
                            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full blur-[150px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000 bg-linear-to-br ${item.glow} to-transparent`} />

                            <div className="relative w-full h-[65vh] md:h-[75vh] rounded-[5rem] overflow-hidden border border-white/5 bg-[#0a0a0a] shadow-2xl transform-gpu transition-all duration-1000 group-hover:scale-[1.02]">
                                <img
                                    src={item.image}
                                    className="w-full h-full object-cover opacity-50 contrast-125 group-hover:scale-110 group-hover:opacity-80 transition-all duration-3000"
                                    alt={item.title}
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />
                                <div className="absolute top-12 right-12 text-right">
                                    <p className="text-primary font-mono text-[10px] tracking-widest uppercase mb-1">DATA_POINT_0{i + 1}</p>
                                    <div className="w-20 h-px bg-primary/40 ml-auto" />
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-24 z-10">
                                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                                        <div className="max-w-2xl">
                                            <div className="flex items-center gap-4 text-primary font-mono text-xs uppercase tracking-widest mb-6 leading-none">
                                                <Star className="w-5 h-5 fill-current" />
                                                <span>Prototypes // Collection_{item.year}</span>
                                            </div>
                                            <h3 className="text-6xl md:text-[11rem] font-black uppercase tracking-tightest leading-[0.7] mb-8 group-hover:translate-x-4 transition-transform duration-1000">
                                                {item.title}
                                            </h3>
                                            <p className="text-white/40 text-xl font-light tracking-wide max-w-lg leading-relaxed italic">
                                                Redefining the relationship between <span className="text-primary font-bold">{item.theme}</span> and the human silhouette.
                                            </p>
                                        </div>
                                        <div className="flex flex-col items-end gap-12">
                                            <div className="text-right">
                                                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/20">Atelier_Ref</p>
                                                <p className="text-2xl font-black uppercase italic tracking-tighter">{item.location}</p>
                                            </div>
                                            <motion.div
                                                whileHover={{ scale: 1.1, rotate: -45 }}
                                                className="w-28 h-28 rounded-full border-2 border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-700 cursor-pointer"
                                            >
                                                <Minimize2 className="w-10 h-10" />
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-white/5 pointer-events-none italic select-none uppercase tracking-tightest opacity-20">
                                    ELITE
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- INSTITUTIONAL VAULT: THE MASTER ARCHIVE --- */}
            <section className="py-20 lg:py-60 relative px-6 lg:px-20 bg-[#020202] overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-16 mb-40">
                        <div className="max-w-4xl">
                            <div className="flex items-center gap-6 text-primary font-mono text-sm uppercase tracking-[0.6em] mb-12 reveal-text">
                                <span className="w-20 h-px bg-primary"></span>
                                Institutional_Vault_v.01
                            </div>
                            <h2 className="text-7xl md:text-[12rem] font-black uppercase tracking-tightest leading-[0.7] reveal-text">
                                Global <br />
                                <span className="strok-text-white italic opacity-40">Archive.</span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-end gap-6 text-right reveal-text">
                            <p className="text-white/40 text-xl font-light italic max-w-sm">
                                A decade of disruption documented in the <span className="text-white font-black">Institutional Repository.</span>
                            </p>
                            <div className="flex gap-4">
                                {["2020", "2021", "2022", "2023", "2024"].map((year) => (
                                    <button key={year} className="px-6 py-2 rounded-full border border-white/10 text-[10px] font-black hover:bg-primary hover:text-white transition-all">
                                        {year}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { year: "2023", city: "Mumbai", stats: "42 Designers", img: "https://images.unsplash.com/photo-1550241895-511bd010364d?q=80&w=2070&auto=format&fit=crop" },
                            { year: "2022", city: "Paris", stats: "38 Designers", img: "https://images.unsplash.com/photo-1539109132314-34a77bd6819f?q=80&w=1974&auto=format&fit=crop" },
                            { year: "2021", city: "Milan", stats: "45 Designers", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071&auto=format&fit=crop" },
                            { year: "2020", city: "London", stats: "31 Designers", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2074&auto=format&fit=crop" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -20 }}
                                className="group relative aspect-3/5 rounded-4xl md:rounded-[4rem] overflow-hidden bg-[#0a0a0a] border border-white/5"
                            >
                                <img src={item.img} className="w-full h-full object-cover opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-1000" alt="archive" />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent" />
                                <div className="absolute inset-x-8 bottom-12">
                                    <div className="flex items-center gap-3 text-primary mb-2">
                                        <div className="w-8 h-px bg-primary" />
                                        <span className="text-[10px] font-black uppercase tracking-widest">{item.year} // Edition</span>
                                    </div>
                                    <h4 className="text-4xl font-black uppercase italic tracking-tighter mb-4">{item.city}</h4>
                                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{item.stats}</span>
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute top-8 right-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity">
                                    <Star className="w-6 h-6 fill-current" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="flex items-center gap-4 text-white/20 font-mono text-[9px] uppercase tracking-[0.5em]">
                            <span className="text-primary underline">01</span> Sequential_Access_Mode
                            <span className="w-10 h-px bg-white/10 mx-6"></span>
                            <span className="text-white underline">02</span> Encrypted_History_Logs
                        </div>
                        <button className="flex items-center gap-4 text-xl font-black uppercase italic hover:text-primary transition-colors group">
                            Explore Full Vault <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- KINETIC MARQUEE: LEGACY STREAM --- */}
            <div className="py-24 bg-white/5 overflow-hidden whitespace-nowrap border-y border-white/5">
                <div className="flex animate-marquee-slow">
                    {[1, 2].map((m) => (
                        <div key={m} className="flex items-center gap-24 px-12">
                            {[
                                "METAMORPHOSIS 2023",
                                "LA_POMPE_2022",
                                "ETHEREAL_ECHOES",
                                "CYBER_SILK_2.0",
                                "NOIR_ARCHIVE_2021"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-12">
                                    <span className="text-5xl lg:text-9xl font-black uppercase tracking-tightest italic opacity-20 hover:opacity-100 hover:text-primary transition-all cursor-default">{text}</span>
                                    <div className="w-4 h-4 rounded-full bg-primary" />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- THE GLOBAL PULSE: STATS --- */}
            <section className="py-40 border-y border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay bg-linear-to-b from-transparent via-white/5 to-transparent" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-24 items-center">
                        {[
                            { val: "24M+", lab: "Global Reach" },
                            { val: "500+", lab: "Designers Launched" },
                            { val: "12", lab: "International Cities" },
                            { val: "Elite", lab: "Showcase Status" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <h3 className="text-5xl md:text-8xl font-black italic tracking-tightest mb-4 group-hover:text-primary transition-colors duration-500">{stat.val}</h3>
                                <div className="w-12 h-px bg-white/10 mx-auto mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                                <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/30">{stat.lab}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- ADMISSION CTA: ULTIMATE PRESTIGE --- */}
            <section className="py-48 px-6 lg:px-12 relative bg-black">
                <div className="container mx-auto">
                    <div className="relative bg-white text-black p-12 md:p-32 rounded-[6rem] overflow-hidden group shadow-[0_50px_100px_rgba(255,255,255,0.05)]">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1500" />
                        <div className="relative z-10 flex flex-col items-center text-center">
                            <Target className="w-20 h-20 mb-12 text-primary animate-pulse" />
                            <h2 className="text-6xl md:text-[11rem] font-black uppercase tracking-tightest leading-[0.75] mb-12">
                                Redefine your <br />
                                <span className="strok-text-black italic opacity-40">Horizon.</span>
                            </h2>
                            <p className="text-black/60 text-xl md:text-4xl font-light mb-20 max-w-3xl italic leading-tight">
                                This is the <span className="text-black font-black">Institutional Gateway</span>. Secure your seat at the forefront of the global fashion disruption.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-10">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-20 py-8 bg-black text-white rounded-full text-xl font-black uppercase tracking-[0.2em] shadow-2xl hover:shadow-primary/40 transition-shadow"
                                >
                                    Apply Protocol
                                </motion.button>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="px-20 py-8 border-2 border-black/10 text-black rounded-full text-xl font-black uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all"
                                >
                                    Connect_Elite
                                </motion.button>
                            </div>
                        </div>
                        <div className="absolute top-1/2 left-0 text-[25vw] font-black italic text-black/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none uppercase tracking-tightest">
                            FUTURE
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
                    -webkit-text-stroke: 1.5px black;
                    color: transparent;
                }
                @media (min-width: 1024px) {
                    .strok-text-white { -webkit-text-stroke: 3px white; }
                    .strok-text-black { -webkit-text-stroke: 4px black; }
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
                .cursor-none {
                    cursor: none !important;
                }
                canvas {
                    mix-blend-mode: screen;
                }
            `}} />
        </div>
    );
};

export default FashionWeek;
