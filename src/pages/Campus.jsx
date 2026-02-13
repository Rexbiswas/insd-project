import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Campuses = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const gateRef = useRef(null);
    const locationsRef = useRef(null);

    // Lenis Smooth Scroll Integration
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Hero "Gate" Animation
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=100%",
                    pin: true,
                    scrub: 1,
                }
            });

            heroTl.to(".gate-left", { xPercent: -100, ease: "power2.inOut" }, 0)
                .to(".gate-right", { xPercent: 100, ease: "power2.inOut" }, 0)
                .to(".hero-logo", { scale: 0.5, opacity: 0, ease: "power2.inOut" }, 0)
                .from(".hero-content-reveal", { scale: 0.8, opacity: 0, y: 50, ease: "power2.out" }, 0.5);

            // 2. Interactive Location Travel
            const sections = gsap.utils.toArray(".location-panel");
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: locationsRef.current,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () => `+=${locationsRef.current.offsetWidth * sections.length}`
                }
            });

            // 3. Text Stagger Reveal
            gsap.utils.toArray(".reveal-text-campus").forEach(text => {
                gsap.from(text, {
                    scrollTrigger: {
                        trigger: text,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    },
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "expo.out"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const locations = [
        {
            city: "Delhi",
            title: "The Creative Capital",
            desc: "Our flagship campus in the heart of Delhi, where tradition meets futuristic design thinking.",
            img: "https://images.pexels.com/photos/1547637/pexels-photo-1547637.jpeg",
            accent: "from-pink-500 to-orange-500"
        },
        {
            city: "Mumbai",
            title: "Luxury & Glamour",
            desc: "Based in the fashion hub of India, the Mumbai campus focuses on high-brand management and couture.",
            img: "https://images.pexels.com/photos/10861113/pexels-photo-10861113.jpeg",
            accent: "from-violet-600 to-indigo-600"
        },
        {
            city: "Pune",
            title: "Design Innovation",
            desc: "A sprawling center for animation and graphic design specialists who build digital worlds.",
            img: "https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg",
            accent: "from-emerald-500 to-cyan-500"
        },
        {
            city: "Bangalore",
            title: "The Tech Stitch",
            desc: "Where software architecture meets interior aesthetics in India's technology headquarters.",
            img: "https://images.pexels.com/photos/1517618/pexels-photo-1517618.jpeg",
            accent: "from-amber-400 to-pink-500"
        }
    ];

    return (
        <div ref={containerRef} className="bg-white overflow-hidden selection:bg-black selection:text-white">

            {/* Section 1: The Gate Hero */}
            <div ref={heroRef} className="relative h-screen bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                {/* Background Video (Revealed when gates open) */}
                <div className="absolute inset-0 z-0">
                    <video
                        autoPlay muted loop playsInline
                        className="w-full h-full object-cover brightness-50"
                        src="https://www.pexels.com/download/video/3129957/"
                    />
                </div>

                {/* The Gates */}
                <div className="gate-left absolute left-0 top-0 w-1/2 h-full bg-slate-100 z-20 flex items-center justify-end border-r border-slate-200">
                    <span className="text-[20vw] font-black text-slate-300 pointer-events-none translate-x-1/2 select-none">C</span>
                </div>
                <div className="gate-right absolute right-0 top-0 w-1/2 h-full bg-slate-100 z-20 flex items-center justify-start border-l border-slate-200">
                    <span className="text-[20vw] font-black text-slate-300 pointer-events-none -translate-x-1/2 select-none">P</span>
                </div>

                {/* Middle Content */}
                <div className="relative z-30 text-center">
                    <div className="hero-logo mb-8">
                        <img src="https://insd.edu.in/wp-content/uploads/2022/02/Final-Logo.png" alt="Logo" className="h-16 mx-auto invert" />
                    </div>
                    <div className="hero-content-reveal">
                        <h1 className="text-white text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
                            Enter the <br /> <span className="mask-text">Domain.</span>
                        </h1>
                        <p className="text-white/60 font-mono tracking-[0.5em] uppercase text-xs">Unlock Our Pan-India Presence</p>
                    </div>
                </div>
            </div>

            {/* Section 2: Immersive Intro */}
            <section className="py-48 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <div className="relative reveal-img-container aspect-square rounded-[3rem] overflow-hidden group invisible">
                            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Campus Life" />
                            <div className="absolute inset-0 bg-pink-600/10 mix-blend-overlay" />
                        </div>
                        <div>
                            <span className="text-pink-500 font-bold uppercase tracking-[0.4em] text-xs block mb-6">Our Footprint</span>
                            <h2 className="reveal-text-campus text-6xl md:text-8xl font-black uppercase tracking-tighter leading-tight mb-8">
                                Nodes of <br /> <span className="text-transparent stroke-text-white !stroke-slate-900">Excellence.</span>
                            </h2>
                            <p className="reveal-text-campus text-xl text-slate-500 leading-relaxed font-light">
                                From the vibrant streets of Mumbai to the academic hubs of Delhi, INSD campuses are designed as creative sanctuaries. We've built an infrastructure that breathes design.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Horizontal Location Travel */}
            <div ref={locationsRef} className="h-screen bg-black overflow-hidden flex whitespace-nowrap">
                {locations.map((loc, i) => (
                    <div key={i} className="location-panel relative min-w-full h-full flex items-center justify-center px-6 md:px-24">
                        {/* City Background Text */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 select-none">
                            <span className="text-[40vw] font-black uppercase text-white tracking-widest leading-none">
                                {loc.city[0]}
                            </span>
                        </div>

                        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <span className={`inline-block px-4 py-1 rounded-full bg-linear-to-r ${loc.accent} text-white font-bold text-xs uppercase tracking-widest mb-6`}>
                                    Campus 0{i + 1}
                                </span>
                                <h3 className="text-white text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-8">
                                    {loc.city}
                                </h3>
                                <p className="text-white/60 text-xl font-light mb-12 max-w-md whitespace-normal leading-relaxed">
                                    <span className="text-white font-bold">{loc.title}.</span> {loc.desc}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    className="px-10 py-5 border border-white/20 text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                                >
                                    Explore Campus
                                </motion.button>
                            </div>

                            <div className="order-1 lg:order-2 h-[40vh] md:h-[60vh] rounded-3xl overflow-hidden relative group">
                                <img src={loc.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt={loc.city} />
                                <div className={`absolute inset-0 bg-linear-to-t ${loc.accent} opacity-20`} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Section 4: Modern Facilities (Grid) */}
            <section className="py-48 bg-slate-50 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                        <h2 className="text-[12vw] font-black uppercase tracking-tighter leading-none text-slate-200">
                            The Labs.
                        </h2>
                        <p className="text-slate-500 text-lg max-w-sm mb-4">
                            Equipped with world-class design technology, our labs are where vision turns into reality.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { name: "Couture Studio", desc: "Equipped with specialized high-end industrial machinery.", icon: "🧵" },
                            { name: "VFX & Animation", desc: "Rendering farms and high-motion capture suites.", icon: "⚡" },
                            { name: "Smart Interiors", desc: "Material libraries and 3D modeling workshops.", icon: "📐" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="bg-white p-12 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all group"
                            >
                                <div className="text-5xl mb-8 grayscale group-hover:grayscale-0 transition-all">{item.icon}</div>
                                <h4 className="text-2xl font-bold uppercase mb-4">{item.name}</h4>
                                <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Visit Reach (Modern Contact) */}
            <section className="relative py-48 bg-black text-white px-6 overflow-hidden">
                <div className="absolute inset-0 opacity-10 blur-[120px]">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-pink-600 rounded-full" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600 rounded-full" />
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                        Ready to Join <br /> <span className="text-transparent stroke-text-white">Our World?</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-6 justify-center">
                        <button className="px-12 py-6 bg-pink-600 text-white rounded-full font-bold uppercase tracking-widest transform transition active:scale-95 shadow-2xl shadow-pink-600/30">
                            Apply for 2026
                        </button>
                        <button className="px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-widest transform transition active:scale-95">
                            Book Campus Tour
                        </button>
                    </div>
                </div>
            </section>

            {/* Section 6: Campus Pulse (Editorial Parallax) */}
            <section className="relative py-48 bg-white overflow-hidden selection:bg-pink-500">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative mb-32 text-center md:text-left">
                        <span className="text-pink-600 font-mono tracking-[0.5em] uppercase text-xs block mb-4">The Atmosphere</span>
                        <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8]">
                            Campus <br /><span className="text-transparent stroke-text-white !stroke-slate-900">Pulse.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                        {/* Left Column: Floating Images */}
                        <div className="md:col-span-5 space-y-24">
                            <motion.div
                                whileHover={{ scale: 1.05, rotate: -2 }}
                                className="relative aspect-3/4 bg-slate-100 rounded-[3rem] overflow-hidden group shadow-2xl"
                            >
                                <img src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" alt="Vibe" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-12">
                                    <p className="text-white text-xl font-bold uppercase tracking-tight">Fashion Labs @ Night</p>
                                </div>
                            </motion.div>

                            <div className="md:pl-12">
                                <h3 className="text-3xl font-black uppercase mb-6">More than classrooms.</h3>
                                <p className="text-slate-500 text-lg leading-relaxed font-light">
                                    Our campuses are designed to be living labs. From the cafeteria to the couture studios, every corner is a canvas for your next breakthrough.
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Dynamic Stats & Large Reveal */}
                        <div className="md:col-span-7 space-y-24 md:pt-48">
                            <div className="relative">
                                <motion.div
                                    whileHover={{ scale: 1.02, rotate: 2 }}
                                    className="relative aspect-video bg-slate-100 rounded-[3rem] overflow-hidden group shadow-2xl"
                                >
                                    <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt="Mentors" />
                                    <div className="absolute top-12 left-12">
                                        <span className="px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/20">Live Workshop</span>
                                    </div>
                                </motion.div>

                                {/* Floating Overlay Info */}
                                <div className="absolute -bottom-12 -left-12 bg-black text-white p-12 rounded-[2rem] hidden md:block max-w-xs shadow-2xl">
                                    <span className="text-pink-500 text-4xl font-black mb-4 block">24/7</span>
                                    <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Access to high-end infrastructure for your final collections.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-12">
                                {['Digital Library', 'Material Lab', 'Incubator Cell', 'Style Loft'].map((item, i) => (
                                    <div key={i} className="border-t border-slate-200 pt-8 group cursor-pointer">
                                        <span className="text-slate-300 font-mono text-xs block mb-4">0{i + 1}</span>
                                        <h4 className="text-xl font-bold uppercase group-hover:text-pink-600 transition-colors">{item}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Rotating Text Decor */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pointer-events-none opacity-[0.02] select-none">
                    <h2 className="text-[30vw] font-black uppercase leading-none text-center transform -rotate-12">CREATIVE REBELLION</h2>
                </div>
            </section>

            {/* Section 7: The Campus Warp (3D Depth Gallery) */}
            <section className="relative h-[300vh] bg-[#050505] overflow-hidden">
                <div className="sticky top-0 h-screen flex items-center justify-center perspective-[2000px]">

                    {/* Perspective Guide Lines */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-pink-500 to-transparent" />
                        <div className="absolute top-0 left-1/2 w-px h-full bg-linear-to-b from-transparent via-violet-500 to-transparent" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80vw] h-[80vw] border border-white/5 rounded-full animate-pulse" />
                        </div>
                    </div>

                    <div className="relative w-full h-full flex items-center justify-center">
                        {/* Layered Floating Elements */}
                        {[
                            { img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg', x: -300, y: -200, z: -500, rotate: 15, scale: 0.8 },
                            { img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', x: 400, y: -150, z: -800, rotate: -10, scale: 1.2 },
                            { img: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg', x: -450, y: 180, z: -300, rotate: -5, scale: 0.9 },
                            { img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg', x: 350, y: 250, z: -600, rotate: 20, scale: 1.1 },
                            { img: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg', x: 0, y: 0, z: -1000, rotate: 0, scale: 2.5 },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{
                                    opacity: 1,
                                    scale: item.scale,
                                    x: item.x,
                                    y: item.y,
                                    z: item.z,
                                    rotate: item.rotate
                                }}
                                transition={{
                                    duration: 1.5,
                                    delay: i * 0.2,
                                    ease: "circOut"
                                }}
                                whileHover={{ z: 0, rotate: 0, scale: item.scale + 0.1, transition: { duration: 0.5 } }}
                                className="absolute w-[80vw] md:w-[25vw] aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.8)] border border-white/10 group cursor-pointer"
                            >
                                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Focus" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                                    <span className="text-pink-500 font-mono text-xs uppercase mb-2">Campus View 0{i + 1}</span>
                                    <h4 className="text-white text-2xl font-black uppercase tracking-tighter">Immersion.</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Central Text Reveal */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                        <div className="text-center">
                            <h3 className="text-[15vw] md:text-[12vw] font-black uppercase leading-none tracking-tighter blur-sm hover:blur-none transition-all duration-700 select-none opacity-20">
                                DEEP <br /> SPACE
                            </h3>
                        </div>
                    </div>

                    {/* Navigation Hint */}
                    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                        <div className="w-px h-24 bg-linear-to-b from-transparent via-pink-500 to-transparent" />
                        <span className="text-[10px] font-bold uppercase tracking-[1em] text-white/30 whitespace-nowrap">Scroll to Warp</span>
                    </div>
                </div>
            </section>


            <Footer />


        </div>
    );
};

export default Campuses;
