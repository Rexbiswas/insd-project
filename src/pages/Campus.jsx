import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Campuses = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const locationsRef = useRef(null);
    const horizontalScrollRef = useRef(null);
    const horizontalSectionRef = useRef(null);
    const portalTextRef = useRef(null);

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
        { city: "Delhi", title: "Creative Capital", desc: "A flagship ecosystem where heritage design meets modern luxury disruption.", img: "https://images.pexels.com/photos/1547637/pexels-photo-1547637.jpeg", num: "01" },
        { city: "Mumbai", title: "Couture Hub", desc: "Based in India's fashion capital, focusing on the future of global brand identities.", img: "https://images.pexels.com/photos/10861113/pexels-photo-10861113.jpeg", num: "02" },
        { city: "Pune", title: "Innovation Lab", desc: "A sprawling center dedicated to the fusion of tech, animation and architecture.", img: "https://images.pexels.com/photos/1531660/pexels-photo-1531660.jpeg", num: "03" },
        { city: "Bangalore", title: "Tech Stitch", desc: "Where software logic meets textile craft in the heart of Silicon Valley India.", img: "https://images.pexels.com/photos/1517618/pexels-photo-1517618.jpeg", num: "04" }
    ];

    return (
        <div ref={containerRef} className="bg-[#050505] text-white selection:bg-primary selection:text-white overflow-hidden font-sans">

            {/* Top Navigation Progress */}
            <div className="fixed top-0 left-0 w-full h-[2px] bg-white/10 z-100 origin-left">
                <div className="scroll-progress h-full bg-primary scale-x-0 w-full origin-left" />
            </div>

            {/* Custom Background Noise/Grain */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Section 1: The Warp Portal Hero */}
            <div ref={heroRef} className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
                <div className="hero-bg-video absolute inset-0 z-0 scale-125 filter blur-2xl opacity-0 transition-opacity duration-1000">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="https://www.pexels.com/download/video/3129957/" />
                </div>

                {/* The "Portal" Gates */}
                <div className="portal-gate-l absolute left-0 top-0 w-1/2 h-full bg-white z-20 flex items-center justify-end overflow-hidden">
                    <h2 className="text-[30vw] font-black text-black/5 leading-none translate-x-1/2">CAM</h2>
                </div>
                <div className="portal-gate-r absolute right-0 top-0 w-1/2 h-full bg-white z-20 flex items-center justify-start overflow-hidden">
                    <h2 className="text-[30vw] font-black text-black/5 leading-none -translate-x-1/2">PUS</h2>
                </div>

                <div ref={portalTextRef} className="relative z-30 pointer-events-none">
                    <h1 className="text-black text-[15vw] font-black uppercase tracking-tighter leading-none italic">
                        ENT<span className="text-transparent stroke-text-white stroke-black!">E</span>R
                    </h1>
                </div>

                {/* Revealed Hero Content */}
                <div className="hero-content-reveal absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none px-6">
                    <span className="text-primary font-mono tracking-[1.5em] uppercase text-[10px] mb-8 animate-pulse">Unlocking The Ecosystem</span>
                    <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter text-center max-w-5xl leading-[0.85]">
                        Nodes Of <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Pure Creation.</span>
                    </h2>
                </div>
            </div>

            {/* Section 2: Immersive Intro Grid */}
            <section className="py-64 px-6 bg-[#050505] relative space-y-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div className="order-2 md:order-1 relative">
                        <div className="aspect-square bg-white rounded-[3rem] overflow-hidden group border border-white/10">
                            <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-110" />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] -z-10" />
                    </div>
                    <div className="order-1 md:order-2">
                        <span className="text-primary font-bold uppercase tracking-[0.5em] text-[10px] block mb-6">Atmosphere</span>
                        <h3 className="text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter mb-8">
                            Beyond <br /> Four Walls.
                        </h3>
                        <p className="text-slate-400 text-xl leading-relaxed font-light mb-12">
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
                    {/* Intro Slide */}
                    <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-6 block">— The Network</span>
                        <h2 className="text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase mb-12">
                            Pan-India <br /> <span className="text-transparent stroke-text-white stroke-black!">Dominance.</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-sm">
                            Strategic hubs positioned in the epicenters of India's cultural and commercial revolutions.
                        </p>
                    </div>

                    {/* City Slides */}
                    {locations.map((loc, i) => (
                        <div key={i} className="min-w-[85vw] md:min-w-[70vw] h-[80vh] bg-[#0a0a0a] rounded-[3rem] relative overflow-hidden group group border border-black/5 shadow-2xl">
                            {/* Background City Text */}
                            <div className="absolute -bottom-20 -left-10 opacity-5 select-none pointer-events-none">
                                <span className="text-[35vw] font-black text-white leading-none uppercase">{loc.city[0]}</span>
                            </div>

                            <div className="relative z-10 w-full h-full p-12 md:p-24 flex flex-col md:flex-row items-center gap-12">
                                <div className="md:w-1/2 space-y-8">
                                    <span className="text-primary font-mono text-xl border border-primary/30 px-6 py-2 rounded-full w-fit block">0{i + 1}</span>
                                    <h3 className="text-7xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none">{loc.city}</h3>
                                    <p className="text-slate-400 text-xl font-light whitespace-normal max-w-sm"><span className="text-white font-bold">{loc.title}.</span> {loc.desc}</p>
                                    <button className="px-10 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-primary hover:text-white transition-all">Explore Node</button>
                                </div>
                                <div className="md:w-1/2 h-full rounded-[2rem] overflow-hidden relative">
                                    <img src={loc.img} className="loc-panel-img w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000 scale-125 group-hover:scale-100" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: The Core Labs (Perspective Grid) */}
            <section className="py-64 bg-[#050505] relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
                        <div className="max-w-2xl">
                            <span className="text-primary font-mono uppercase tracking-[0.5em] text-[10px] block mb-4">Inside the Labs</span>
                            <h2 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
                                World-Class <br /> <span className="text-transparent stroke-text-white">Infrastructure.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-lg max-w-sm mb-4 border-l border-white/10 pl-8">
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
                                    <span className="text-primary font-mono text-xs block mb-6">Lab Unit 0{i + 1}</span>
                                    <h4 className="text-3xl font-black uppercase mb-6">{lab.name}</h4>
                                    <p className="text-slate-400 leading-relaxed font-light">{lab.desc}</p>
                                </div>
                                {/* Hover Gradient Shadow */}
                                <div className="absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: The "Warp" CTA */}
            <section className="relative h-screen bg-black flex items-center justify-center">
                {/* 3D Moving Perspective Background (Simulated with scale/blur) */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-black to-secondary/20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/5 rotate-45" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/5 -rotate-45" />
                </div>

                <div className="relative z-10 text-center px-6">
                    <h2 className="text-[12vw] font-black uppercase leading-none tracking-tighter mb-12 mix-blend-difference">
                        Claim Your <br /> <span className="text-transparent stroke-text-white">Coordinate.</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                        <button className="magnetic-btn px-16 py-6 bg-primary text-white font-black rounded-full uppercase tracking-widest shadow-2xl shadow-primary/40">Apply For 26</button>
                        <button className="magnetic-btn px-16 py-6 border border-white/20 backdrop-blur-3xl text-white font-black rounded-full uppercase tracking-widest hover:bg-white hover:text-black">Book A Tour</button>
                    </div>
                </div>
            </section>

            {/* Section 6: The Infinity Nexus (Success & Global Reach) */}
            <section className="relative py-64 bg-black overflow-hidden">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
                        <div>
                            <span className="text-primary font-mono uppercase tracking-[0.5em] text-[10px] block mb-6 animate-pulse">Global Footprint</span>
                            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12">
                                Beyond <br /> <span className="text-transparent stroke-text-white italic">Boundaries.</span>
                            </h2>
                            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-lg">
                                Our graduates don't just find jobs; they colonize the industries of London, Milan, and Paris. This is the INSD global nexus.
                            </p>
                        </div>
                        <div className="relative">
                            {/* Cinematic Vertical Marquee (3D Tilted) */}
                            <div className="relative h-[600px] w-full bg-white/5 rounded-[4rem] border border-white/10 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-1000">
                                <div className="absolute inset-0 z-10 bg-linear-to-b from-black via-transparent to-black pointer-events-none" />
                                <div className="flex flex-col gap-12 py-12 marquee-vertical-nexus">
                                    {['VOGUE', 'GUCCI', 'PRADA', 'GOOGLE', 'APPLE', 'TESLA', 'ELLE'].map((brand, i) => (
                                        <div key={i} className="text-center">
                                            <span className="text-7xl md:text-8xl font-black text-white/10 hover:text-primary transition-colors cursor-default select-none uppercase tracking-widest">{brand}</span>
                                        </div>
                                    ))}
                                    {/* Duplicate for seamless loop */}
                                    {['VOGUE', 'GUCCI', 'PRADA', 'GOOGLE', 'APPLE', 'TESLA', 'ELLE'].map((brand, i) => (
                                        <div key={i + 7} className="text-center">
                                            <span className="text-7xl md:text-8xl font-black text-white/10 hover:text-primary transition-colors cursor-default select-none uppercase tracking-widest">{brand}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Floating Stats Decoration */}
                            <div className="absolute -top-12 -right-12 bg-primary text-white p-8 rounded-3xl shadow-2xl z-20 hidden md:block group cursor-default">
                                <span className="text-4xl font-black block group-hover:scale-110 transition-transform">98%</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">Placement Velocity</span>
                            </div>
                        </div>
                    </div>

                    {/* The "Atmosphere" Mosaic Reveal */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
                        {[
                            { img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg', span: 'col-span-1 row-span-2' },
                            { img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', span: 'col-span-1 row-span-1' },
                            { img: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg', span: 'col-span-2 row-span-1' },
                            { img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg', span: 'col-span-1 row-span-1' },
                            { img: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg', span: 'col-span-1 row-span-1' },
                        ].map((item, i) => (
                            <div key={i} className={`${item.span} relative rounded-3xl overflow-hidden border border-white/5 group`}>
                                <img src={item.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" alt="Atmosphere" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold uppercase tracking-widest text-xs">Live @ Studio 0{i + 1}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Background Decor: The "Data Stream" */}
                <div className="absolute top-0 right-1/2 w-px h-full bg-linear-to-b from-transparent via-primary/20 to-transparent opacity-30" />
                <div className="absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-secondary/20 to-transparent opacity-30" />
            </section>

            <Footer />
        </div>
    );
};

export default Campuses;
