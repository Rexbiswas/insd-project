import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Admission = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const roadmapRef = useRef(null);
    const formSectionRef = useRef(null);

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
            // 1. Holographic Hero Entrance
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 1,
                    pin: true,
                }
            });

            heroTl.to(".admission-title", { scale: 50, opacity: 0, filter: "blur(40px)", duration: 2, ease: "power2.in" }, 0)
                .to(".hologram-glow", { opacity: 1, scale: 1.2, duration: 1 }, 0.5)
                .from(".hero-sub-next", { y: 150, opacity: 0, scale: 0.8, stagger: 0.2 }, 1);

            // 2. Horizontal "Protocol Scrub"
            if (roadmapRef.current) {
                const roadmapItems = gsap.utils.toArray(".roadmap-step-next");
                const scrollAmount = roadmapRef.current.scrollWidth - window.innerWidth;

                gsap.to(roadmapRef.current, {
                    x: -scrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".roadmap-container-pin",
                        start: "top top",
                        end: () => `+=${scrollAmount}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                });

                // Staggered Item Entrance within horizontal scroll
                roadmapItems.forEach((item) => {
                    gsap.from(item, {
                        x: 200,
                        opacity: 0,
                        scale: 0.9,
                        duration: 1,
                        scrollTrigger: {
                            trigger: item,
                            start: "left 90%",
                            toggleActions: "play none none reverse"
                        }
                    });
                });
            }

            // 3. Magnetic & Pulse Interaction
            const magneticButtons = document.querySelectorAll(".magnetic-btn");
            magneticButtons.forEach(btn => {
                const xTo = gsap.quickTo(btn, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
                const yTo = gsap.quickTo(btn, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

                btn.addEventListener("mousemove", (e) => {
                    const { clientX, clientY } = e;
                    const { left, top, width, height } = btn.getBoundingClientRect();
                    const x = (clientX - (left + width / 2)) * 0.5;
                    const y = (clientY - (top + height / 2)) * 0.5;
                    xTo(x); yTo(y);
                });

                btn.addEventListener("mouseleave", () => {
                    xTo(0); yTo(0);
                });
            });

            // 4. Form Floating VFX
            gsap.to(".form-bg-vfx", {
                x: "random(-50, 50)",
                y: "random(-50, 50)",
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const roadmapSteps = [
        { num: "01", title: "Global Uplink", desc: "Initiate your digital presence within our international design network.", icon: "🌐" },
        { num: "02", title: "Creative Probe", desc: "A diagnostic assessment designed to measure your raw design instinct.", icon: "⚡" },
        { num: "03", title: "Dean's Circuit", desc: "High-level strategic alignment with industry visionaries.", icon: "💎" },
        { num: "04", title: "Final Resonance", desc: "Welcome to the ecosystem. Your journey of disruption begins.", icon: "🚀" }
    ];

    return (
        <div ref={containerRef} className="bg-[#020202] text-white selection:bg-pink-500 selection:text-white overflow-hidden font-sans">

            {/* Global Energy Grid Background */}
            <div className="fixed inset-0 pointer-events-none opacity-10 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            <div className="fixed inset-0 pointer-events-none opacity-20 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Section 1: Holographic Gateway */}
            <div ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="hologram-glow absolute inset-0 bg-pink-600/10 blur-[150px] opacity-0 scale-50" />
                <div className="absolute inset-0 z-0">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-[0.2]" src="https://www.pexels.com/download/video/3129957/" />
                </div>

                <div className="relative z-10 text-center">
                    <h1 className="admission-title text-[25vw] font-black uppercase tracking-tighter leading-none italic select-none mix-blend-difference">
                        UP<span className="text-transparent stroke-text-white stroke-white!">L</span>INK
                    </h1>
                    <div className="mt-12 space-y-4">
                        <span className="hero-sub-next text-pink-500 font-mono tracking-[2em] uppercase text-[10px] block opacity-80">Cycle 2026 Engagement Open</span>
                        <h2 className="hero-sub-next text-5xl md:text-8xl font-black uppercase tracking-tighter">
                            The Admission <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-violet-600">Protocol.</span>
                        </h2>
                    </div>
                </div>

                {/* Vertical Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                    <div className="w-px h-24 bg-linear-to-b from-transparent via-pink-500 to-transparent animate-pulse" />
                    <span className="text-[10px] uppercase tracking-[1em] text-white/30">Initiate Protocol</span>
                </div>
            </div>

            {/* Section 2: Immersive Pathfinder Grid */}
            <section className="py-64 bg-[#020202] relative">
                <div className="max-w-[1400px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-48 gap-12">
                        <div className="max-w-3xl">
                            <span className="text-pink-500 font-mono uppercase tracking-[0.5em] text-[10px] block mb-6 px-4 py-2 border border-pink-500/20 w-fit rounded-full">Phase 01: The Match</span>
                            <h2 className="text-7xl md:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter">
                                Target Your <br /> <span className="text-transparent stroke-text-white stroke-white!">Disruption.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-xl font-light max-w-sm mb-6 border-l-2 border-pink-600 pl-10 italic">
                            Select the frequency that resonates with your creative soul. Each path is a world of its own.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Fashion & Luxury", tag: "Couture Innovation", img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg" },
                            { title: "Graphic & Brand", tag: "Visual Psychology", img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg" },
                            { title: "Elite Interiors", tag: "Spatial Resonance", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" },
                            { title: "VFX & Animation", tag: "Digital Worldbuilding", img: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg" }
                        ].map((item, i) => (
                            <div key={i} className="group relative h-[600px] rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl transition-all duration-700 hover:border-pink-500/30">
                                <img src={item.img} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80" />

                                <div className="absolute inset-0 p-16 flex flex-col justify-end">
                                    <span className="text-pink-500 font-mono text-sm uppercase mb-4 tracking-[0.5em]">{item.tag}</span>
                                    <h3 className="text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter italic transform group-hover:-translate-y-4 transition-all duration-700">{item.title}</h3>
                                    <button className="magnetic-btn w-fit px-12 py-5 bg-white text-black font-black uppercase tracking-widest rounded-full opacity-0 group-hover:opacity-100 translate-y-10 group-hover:translate-y-0 transition-all duration-700">Explore</button>
                                </div>

                                <div className="absolute top-12 right-12 w-24 h-24 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-3xl group-hover:bg-pink-600 group-hover:border-transparent transition-all duration-500">
                                    <span className="text-4xl text-white font-light group-hover:rotate-45 transition-transform">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: The Horizontal Protocol Scrub */}
            <div className="roadmap-container-pin h-screen bg-white">
                <section ref={roadmapRef} className="h-full flex items-center px-[10vw] gap-32 whitespace-nowrap">
                    {/* Protocol Intro */}
                    <div className="min-w-[80vw] md:min-w-[40vw]">
                        <span className="text-pink-600 font-bold uppercase tracking-[1em] text-xs mb-8 block">— Protocol Alpha</span>
                        <h2 className="text-8xl md:text-[12rem] font-black text-black leading-none tracking-tighter uppercase">
                            The Four <br /> <span className="text-transparent stroke-text-white stroke-black!">Steps.</span>
                        </h2>
                    </div>

                    {/* Step Cards */}
                    {roadmapSteps.map((step, i) => (
                        <div key={i} className="roadmap-step-next min-w-[85vw] md:min-w-[60vw] h-[70vh] bg-[#020202] rounded-[5rem] relative p-16 md:p-32 flex flex-col justify-between group group-hover:border-pink-500/20 transition-all border border-transparent">
                            <div className="flex justify-between items-start">
                                <span className="text-[12vw] font-black text-white/5 leading-none">0{i + 1}</span>
                                <div className="text-8xl md:text-[10rem] animate-pulse">{step.icon}</div>
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-6xl md:text-9xl font-black uppercase text-white tracking-tighter leading-none">{step.title}</h3>
                                <p className="text-slate-400 text-2xl font-light whitespace-normal max-w-2xl leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                            {/* Visual Timeline Connector */}
                            <div className="absolute bottom-0 left-0 h-2 bg-pink-600 w-0 group-hover:w-full transition-all duration-[2000ms]" />
                        </div>
                    ))}

                    {/* Final Slide Anchor */}
                    <div className="min-w-[50vw] flex flex-col items-center justify-center text-center">
                        <div className="w-32 h-32 rounded-full border-2 border-dashed border-pink-300 animate-spin-slow mb-12" />
                        <h3 className="text-5xl font-black text-black uppercase">Initiate <br /> Final Phase</h3>
                    </div>
                </section>
            </div>

            {/* Section 4: The Cyber-Form (Security & Uplink) */}
            <section className="py-64 bg-[#020202] relative overflow-hidden">
                <div className="form-bg-vfx absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full" />
                <div className="form-bg-vfx absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-violet-600/10 blur-[150px] rounded-full" />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="bg-white/5 backdrop-blur-[100px] border border-white/10 rounded-[5rem] p-12 md:p-32 relative overflow-hidden">
                        <div className="mb-24 text-center">
                            <span className="text-pink-500 font-mono text-xs uppercase tracking-[1em] block mb-6">Uplink Interface v2.0</span>
                            <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-none">
                                Begin Your <br /> <span className="text-transparent stroke-text-white stroke-white!">Evolution.</span>
                            </h2>
                        </div>

                        <form className="space-y-16">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-4">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Full Identity</label>
                                    <input type="text" placeholder="Designation Name" className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-10 outline-none focus:border-pink-500/50 transition-all text-xl font-light placeholder:text-white/10" />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Comm Link (Email)</label>
                                    <input type="email" placeholder="active@pulse.net" className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-10 outline-none focus:border-pink-500/50 transition-all text-xl font-light placeholder:text-white/10" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                                <div className="space-y-4 relative">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Target Core</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-10 outline-none focus:border-pink-500/50 transition-all text-xl font-light text-white appearance-none cursor-pointer">
                                        <option value="" className="text-black">Select Core</option>
                                        <option value="fashion" className="text-black">Fashion Disruption</option>
                                        <option value="graphic" className="text-black">Brand Architecture</option>
                                        <option value="interior" className="text-black">Elite Space Design</option>
                                        <option value="animation" className="text-black">Digital Universe</option>
                                    </select>
                                    <div className="absolute right-10 bottom-8 pointer-events-none text-white/20">▼</div>
                                </div>
                                <div className="space-y-4">
                                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Uplink Coordinate</label>
                                    <input type="tel" placeholder="+91 000 000 0000" className="w-full bg-white/5 border border-white/10 rounded-3xl py-6 px-10 outline-none focus:border-pink-500/50 transition-all text-xl font-light placeholder:text-white/10" />
                                </div>
                            </div>

                            <div className="flex justify-center pt-20">
                                <button type="button" className="magnetic-btn px-24 py-10 bg-pink-600 text-white font-black rounded-full uppercase tracking-[0.3em] shadow-[0_0_50px_rgba(219,39,119,0.3)] hover:bg-white hover:text-black hover:shadow-none transition-all duration-700 text-lg">
                                    Initiate Profile Upload
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Section 5: The Merit Intelligence */}
            <section className="py-64 bg-white text-black relative">
                <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="relative group">
                            <div className="rounded-[5rem] overflow-hidden aspect-4/5 shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-8 border-white -rotate-2 hover:rotate-0 transition-all duration-1000">
                                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 transition-all duration-1000" />
                            </div>
                            {/* Floating Counter Ornament */}
                            <div className="absolute -top-10 -right-10 bg-black text-white p-12 rounded-[4rem] shadow-2xl z-10 backdrop-blur-3xl animate-float">
                                <span className="text-7xl font-black block mb-2 italic tracking-tighter">60%</span>
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block">Max Scholarship Potential</span>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <span className="text-pink-600 font-bold uppercase tracking-[1em] text-[10px] block mb-10">The Standard</span>
                        <h2 className="text-7xl md:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] mb-16">
                            Elite <br /> <span className="text-transparent stroke-text-white stroke-black!">Threshold.</span>
                        </h2>
                        <div className="space-y-12">
                            {[
                                { title: "Academic Core", value: "Minimum 50% aggregate in 10+2. Any stream of thought is accepted." },
                                { title: "Aptitude Profile", value: "Evaluation of spatial reasoning and creative instinct patterns." },
                                { title: "Strategic Dialogue", value: "A high-level alignment interview with our industry directors." }
                            ].map((item, i) => (
                                <div key={i} className="group border-l-[1rem] border-slate-100 hover:border-pink-600 pl-12 py-4 transition-all duration-500">
                                    <h4 className="text-3xl font-black uppercase mb-3 transform group-hover:translate-x-4 transition-transform">{item.title}</h4>
                                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-xl">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Admission;
