import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const horizontalSectionRef = useRef(null);
    const horizontalScrollRef = useRef(null);
    const heroRef = useRef(null);
    const heroTextRef = useRef(null);
    const scrollSectionRef = useRef(null);
    const lensRef = useRef(null);

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
            // 1. Zoom-Through Hero Reveal
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "+=200%",
                    scrub: 1,
                    pin: true,
                }
            });

            heroTl.to(".hero-bg", { scale: 1.5, filter: "blur(10px)", opacity: 0.3 }, 0)
                .to(heroTextRef.current, { scale: 100, opacity: 0, duration: 2 }, 0)
                .from(".vision-content", { y: 200, opacity: 0, scale: 0.8 }, 1);

            // 2. Multi-Layer Parallax Elements
            gsap.utils.toArray(".parallax-layer").forEach((layer, i) => {
                const speed = (i + 1) * 0.1;
                gsap.to(layer, {
                    y: -500 * speed,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: true
                    }
                });
            });

            // 3. Horizontal Scroll with "Lens" Reveal
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
            }

            // 4. Floating Perspective Cards
            gsap.utils.toArray(".floating-card").forEach((card, i) => {
                gsap.from(card, {
                    y: 100,
                    opacity: 0,
                    rotateY: 45,
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // 5. Text Splitting & Reveal
            const typeReveals = document.querySelectorAll(".type-reveal");
            typeReveals.forEach(text => {
                const chars = text.textContent.split("");
                text.innerHTML = chars.map(c => `<span class="inline-block char">${c === " " ? "&nbsp;" : c}</span>`).join("");

                gsap.from(text.querySelectorAll(".char"), {
                    opacity: 0.2,
                    filter: "blur(8px)",
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: text,
                        start: "top 80%",
                        end: "top 40%",
                        scrub: true,
                    }
                });
            });

            // 6. Magnetic Buttons
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

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#050505] text-white selection:bg-primary selection:text-white overflow-hidden">

            {/* Background Grain/Noise Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-50 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            {/* Section 1: Zoom-Through Hero */}
            <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="hero-bg absolute inset-0 bg-[url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center brightness-[0.4]" />

                <div ref={heroTextRef} className="relative z-10 flex flex-col items-center">
                    <span className="text-primary font-mono tracking-[1.5em] uppercase text-[10px] mb-8 animate-pulse">Designing Legacies</span>
                    <h1 className="text-[25vw] font-black leading-none tracking-tighter flex items-baseline">
                        I<span className="text-transparent stroke-text-white opacity-40">N</span>SD
                    </h1>
                    <span className="text-[12vw] font-black leading-none tracking-tighter flex items-baseline">Design</span>
                </div>

                {/* Sub-content revealed during zoom */}
                <div className="vision-content absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-center max-w-4xl px-6 leading-[0.9]">
                        Where <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Rebellion</span> <br /> Meets Craft.
                    </h2>
                </div>
            </section>

            {/* Section 2: Kinetic Statistics */}
            <section className="relative py-48 bg-[#050505] z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-24 items-center">
                        <div className="md:col-span-1">
                            <h3 className="text-4xl font-bold uppercase tracking-tighter mb-8 leading-tight">
                                A Century of <br /> Vision, Compressed.
                            </h3>
                            <div className="w-24 h-1 bg-primary" />
                        </div>
                        <div className="md:col-span-2 grid grid-cols-2 gap-12">
                            {[
                                { label: 'Centers Globally', val: '50+' },
                                { label: 'Creative Alumni', val: '15k+' },
                                { label: 'Design Awards', val: '100+' },
                                { label: 'Industry Partners', val: '80+' }
                            ].map((stat, i) => (
                                <div key={i} className="group border-l border-white/10 pl-8 hover:border-primary transition-colors duration-500">
                                    <span className="block text-5xl md:text-7xl font-black mb-2">{stat.val}</span>
                                    <span className="text-xs uppercase tracking-[0.3em] text-slate-500 font-mono">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: The Horizontal Discovery */}
            <section ref={horizontalSectionRef} className="h-screen bg-white">
                <div ref={horizontalScrollRef} className="h-full flex items-center px-[10vw] gap-32">
                    {/* Founder Intro */}
                    <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-6 block">— Our Genesis</span>
                        <h2 className="text-8xl font-black text-black leading-[0.85] tracking-tighter uppercase mb-12">
                            Born from <br /> <span className="text-transparent stroke-text-white stroke-black!">IAS Vision.</span>
                        </h2>
                        <p className="text-xl text-slate-500 max-w-md">
                            Co-founded by the 1st Director General of NIFT, INSD isn't just a school—it's a national framework for creative excellence.
                        </p>
                    </div>

                    {/* Interactive Showcase */}
                    {[
                        { title: 'Global Outlook', img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg' },
                        { title: 'Industry Core', img: 'https://images.pexels.com/photos/2041005/pexels-photo-2041005.jpeg' },
                        { title: 'Future Tech', img: 'https://images.pexels.com/photos/8145203/pexels-photo-8145203.jpeg' }
                    ].map((item, i) => (
                        <div key={i} className="min-w-[70vw] md:min-w-[50vw] h-[70vh] relative group overflow-hidden rounded-[2rem] shadow-2xl">
                            <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                                <span className="text-primary font-mono mb-2">Pillar 0{i + 1}</span>
                                <h3 className="text-7xl font-black uppercase text-white tracking-tighter">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 4: The Core Narrative (Type-Reveal) */}
            <section className="relative py-64 px-6 bg-[#050505]">
                <div className="max-w-6xl mx-auto text-center">
                    <h3 className="type-reveal text-4xl md:text-7xl font-bold leading-[1.1] uppercase tracking-tight text-white/90">
                        In a world of fast fashion and generic interiors, we teach our students to slow down and build things that matter. Our labs are battlegrounds for ideas, where the only rule is to challenge the predictable.
                    </h3>
                </div>
            </section>

            {/* Section 5: The Pillars (3D Floating Grid) */}
            <section className="relative pb-64 px-6 bg-[#050505] overflow-hidden">
                {/* Floating Parallax Accents */}
                <div className="parallax-layer absolute top-20 left-[10%] w-64 h-64 bg-primary/10 blur-[120px] rounded-full" />
                <div className="parallax-layer absolute bottom-20 right-[15%] w-96 h-96 bg-secondary/10 blur-[150px] rounded-full" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                        <div className="space-y-32">
                            {[
                                { title: 'Authenticity', desc: 'True design cannot be faked. We prioritize raw, unfiltered expression.' },
                                { title: 'Precision', desc: 'Where art meets engineering. Every detail is a deliberate choice.' },
                                { title: 'Impact', desc: 'Design that doesnt move the world is just decoration.' }
                            ].map((pill, i) => (
                                <div key={i} className="floating-card group bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500">
                                    <span className="text-primary font-mono text-xl block mb-6 px-4 py-1 border border-primary/40 rounded-full w-fit">0{i + 1}</span>
                                    <h3 className="text-5xl font-black uppercase tracking-tighter mb-6">{pill.title}</h3>
                                    <p className="text-slate-400 text-lg leading-relaxed">{pill.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="hidden md:block relative">
                            <div className="reveal-img-container aspect-3/4 rounded-[3rem] overflow-hidden rotate-3 shadow-primary/10 shadow-2xl">
                                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute -bottom-12 -right-12 w-96 p-12 bg-white text-black rounded-[2rem] shadow-2xl -rotate-6">
                                <p className="text-2xl font-black italic">"Design is the silent ambassador of your brand."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 6: Next-Level CTA */}
            <section className="relative h-screen bg-black flex items-center justify-center">
                <div className="absolute inset-0 opacity-40">
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover" src="https://www.pexels.com/download/video/3129957/" />
                </div>
                <div className="relative z-10 text-center px-6">
                    <h2 className="text-[12vw] font-black uppercase leading-none tracking-tighter mb-12 mix-blend-exclusion">
                        Join The <br /> Revolution.
                    </h2>
                    <div className="flex flex-col md:flex-row gap-8 justify-center">
                        <button className="magnetic-btn px-12 py-5 bg-primary text-white font-bold rounded-full uppercase tracking-widest transition-transform">Explore Careers</button>
                        <button className="magnetic-btn px-12 py-5 bg-white text-black font-bold rounded-full uppercase tracking-widest transition-transform"><a href="https://insdpunepcmc.com/wp-content/uploads/2023/05/Course-booklet-INSD-2022.pdf" download={{}}>Get Prospectus</a></button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
