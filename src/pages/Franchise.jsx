import React, { useRef, useLayoutEffect, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Target, TrendingUp, Globe, Award, Users } from 'lucide-react';
import Lenis from 'lenis';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Franchise = () => {
    const containerRef = useRef(null);
    const heroRef = useRef(null);
    const heroImageRef = useRef(null);
    const sealRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        // Robust Lenis initialization
        let lenis;
        try {
            lenis = new Lenis({
                lerp: 0.1,
                smoothWheel: true
            });
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        } catch (e) {
            console.error("Lenis init failed", e);
        }

        return () => {
            if (lenis) lenis.destroy();
        };
    }, []);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation
            if (heroRef.current) {
                const heroChars = heroRef.current.querySelectorAll('.hero-char');
                if (heroChars.length > 0) {
                    gsap.from(heroChars, {
                        y: 100,
                        rotateX: -90,
                        opacity: 0,
                        stagger: 0.05,
                        duration: 1,
                        ease: "power4.out"
                    });
                }
            }

            // Sub-headline
            gsap.to(".hero-sub", {
                opacity: 1,
                letterSpacing: "0.5em",
                duration: 2,
                ease: "power2.out",
                delay: 0.5
            });

            // Image Reveal
            if (heroImageRef.current) {
                gsap.fromTo(heroImageRef.current,
                    { opacity: 0, scale: 0.8, y: 50 },
                    { opacity: 1, scale: 1, y: 0, duration: 2, ease: "expo.out", delay: 0.8 }
                );

                const handleMouseMove = (e) => {
                    const { clientX, clientY } = e;
                    const xPct = (clientX / window.innerWidth - 0.5);
                    const yPct = (clientY / window.innerHeight - 0.5);
                    gsap.to(heroImageRef.current, {
                        x: xPct * 30,
                        y: yPct * 30,
                        rotateY: xPct * 5,
                        rotateX: -yPct * 5,
                        duration: 1,
                        ease: "power2.out"
                    });
                };
                window.addEventListener('mousemove', handleMouseMove);
                return () => window.removeEventListener('mousemove', handleMouseMove);
            }

            // Seal Rotation
            if (sealRef.current) {
                gsap.to(sealRef.current, {
                    rotate: 360,
                    duration: 20,
                    repeat: -1,
                    ease: "none"
                });
            }

            // Grid Items
            if (gridRef.current) {
                const cards = gridRef.current.querySelectorAll('.feature-card');
                cards.forEach((card, i) => {
                    gsap.from(card, {
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom-=100px",
                        },
                        y: 50,
                        opacity: 0,
                        scale: 0.9,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: i * 0.1
                    });
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        { icon: Shield, title: "IAS Legacy", desc: "Co-founded by the visionary 1st Director General of NIFT." },
        { icon: Award, title: "National Award", desc: "India's leading National Award-Winning Design School." },
        { icon: TrendingUp, title: "High ROI", desc: "Proven business model with rapid growth potential." },
        { icon: Globe, title: "Global Network", desc: "Collaboration with international design weeks and mavericks." },
        { icon: Target, title: "Curriculum", desc: "Industry-aligned programs in Fashion, Interior & Multimedia." },
        { icon: Users, title: "Support", desc: "Full academic, marketing, and operational guidance." }
    ];

    return (
        <div ref={containerRef} className="relative z-10 bg-[#050505] text-white min-h-screen selection:bg-pink-500 selection:text-white overflow-hidden">

            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="bg-element absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-pink-600/5 blur-[150px] rounded-full"></div>
                <div className="bg-element absolute bottom-[20%] right-[10%] w-[35vw] h-[35vw] bg-purple-600/5 blur-[150px] rounded-full"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            {/* Hero Section */}
            <section className="relative h-screen flex flex-col items-center justify-center px-6 z-10 overflow-hidden">
                {/* Floating Hero Image - Unexpected Position */}
                <div
                    ref={heroImageRef}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 flex items-center justify-end md:pr-[10vw] opacity-40 md:opacity-100"
                >
                    <div className="relative w-[80vw] md:w-[35vw] aspect-square">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-pink-500/20 blur-[120px] rounded-full animate-pulse"></div>
                        <img
                            src="https://insd.edu.in/wp-content/uploads/2022/01/1ST-IMAGE-ON-PAGE.png"
                            alt="Distinguished Legacy"
                            className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
                        />
                        {/* Decorative Frame Elements */}
                        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-pink-500/50"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-white/20"></div>
                    </div>
                </div>

                <div className="text-center relative z-10">
                    <span
                        className="hero-sub block text-pink-500 font-mono text-sm mb-6 uppercase tracking-[0.5em] opacity-0"
                    >
                        The Future of Design Education
                    </span>
                    <h1 ref={heroRef} className="text-[10vw] md:text-[8vw] font-black leading-[0.8] uppercase tracking-tighter flex flex-col items-center">
                        <div className="overflow-hidden">
                            <span className="inline-block hero-char">Franchise</span>
                        </div>
                        <div className="overflow-hidden">
                            <span className="inline-block hero-char text-transparent stroke-text-white italic">Opportunity</span>
                        </div>
                    </h1>
                </div>

                {/* Rotating Seal */}
                <div
                    ref={sealRef}
                    className="absolute -bottom-20 -right-20 md:bottom-20 md:right-20 w-80 h-80 flex items-center justify-center p-12 border border-white/10 rounded-full opacity-20 hover:opacity-100 transition-opacity duration-500 group cursor-help z-20"
                    style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)' }}
                >
                    <div className="text-center group-hover:scale-110 transition-transform">
                        <Award className="w-16 h-16 mx-auto mb-4 text-pink-500" />
                        <span className="text-[10px] font-mono uppercase tracking-widest leading-loose">
                            Co-founded by<br />IAS Officer<br />& NIFT DG
                        </span>
                    </div>
                </div>

                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30 z-20">
                    <div className="w-px h-12 bg-white/50 mx-auto"></div>
                </div>
            </section>

            {/* Legacy Section */}
            <section className="relative py-32 px-6 z-10 border-y border-white/5 bg-white/2 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                    <div className="relative">
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
                            Built on a <br /><span className="text-pink-500 italic">Visionary</span> Foundation
                        </h2>
                        <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                            INSD was co-founded by the IAS Officer and 1st Director General of NIFT, who pioneered design education in India. Today, we are a National Award-Winning brand with a legacy of excellence and innovation.
                        </p>
                        <div className="flex gap-12">
                            <div>
                                <span className="block text-4xl font-black mb-2 tracking-tighter">Award</span>
                                <span className="text-xs uppercase text-slate-500 tracking-widest">Winning Pedagogy</span>
                            </div>
                            <div>
                                <span className="block text-4xl font-black mb-2 tracking-tighter">Global</span>
                                <span className="text-xs uppercase text-slate-500 tracking-widest">Collaborations</span>
                            </div>
                        </div>
                    </div>

                    {/* Visual: Floating Blueprint */}
                    <div className="relative aspect-square bg-slate-900 rounded-[3rem] overflow-hidden border border-white/10 group">
                        <img
                            src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Meeting"
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                        <div className="absolute bottom-12 left-12 right-12 p-8 glass rounded-3xl backdrop-blur-3xl border-white/5">
                            <Users className="text-pink-500 w-12 h-12 mb-6" />
                            <h4 className="text-2xl font-bold mb-2 uppercase italic tracking-tighter">Community Driven</h4>
                            <p className="text-sm text-white/60">A ecosystem built for artists, designers, and entrepreneurs.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid: Why Join Us */}
            <section ref={gridRef} className="py-32 px-6 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-24 text-center md:text-left">
                        <h3 className="text-sm font-mono text-pink-500 tracking-[0.5em] uppercase mb-4">The Model</h3>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">Why Choose <br />INSD?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="feature-card group relative p-12 bg-white/2 border border-white/5 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 cursor-pointer overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <f.icon className="w-12 h-12 text-pink-500 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-12" />
                                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tight">{f.title}</h4>
                                <p className="text-slate-400 font-light leading-relaxed">{f.desc}</p>
                                <div className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Learn More <span className="text-lg">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section: The Form */}
            <section className="relative py-32 px-6 z-10 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-black p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative overflow-hidden group">
                        {/* Interactive Background for Form */}
                        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-pink-500 blur-[150px] animate-pulse"></div>
                            <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500 blur-[150px] animate-pulse delay-1000"></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none italic">
                                Ready to Lead the <br /><span className="text-transparent stroke-text-white">Design Movement?</span>
                            </h2>
                            <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl mx-auto">
                                Apply for an authorized center today and become part of India's most prestigious design education network.
                            </p>

                            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
                                <div className="col-span-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 ml-2">Full Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:border-pink-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="col-span-1">
                                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 ml-2">Email Address</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:border-pink-500 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div className="col-span-2">
                                    <label className="block text-[10px] uppercase tracking-widest text-slate-500 mb-2 ml-2">Location of Interest</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:border-pink-500 outline-none transition-all" placeholder="Enter City/State" />
                                </div>
                                <button className="col-span-2 mt-8 w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-5 rounded-full uppercase tracking-widest transition-all hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] relative group overflow-hidden">
                                    <span className="relative z-10">Get Franchise Prospectus</span>
                                    <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Franchise;
