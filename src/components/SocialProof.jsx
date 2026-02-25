import React, { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, FileCheck, Landmark, Star, Medal, Globe } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SocialProof = () => {
    const sectionRef = useRef(null);
    const counterRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Title Animation
            gsap.from(".proof-title span", {
                y: 50,
                opacity: 0,
                rotateX: -90,
                stagger: 0.1,
                duration: 1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });

            // Counter Animation
            gsap.from(".years-count", {
                innerHTML: 0,
                duration: 2,
                ease: "power2.out",
                snap: { innerHTML: 1 },
                scrollTrigger: {
                    trigger: counterRef.current,
                    start: "top 85%",
                }
            });

            // Card Reveal
            gsap.from(".proof-card", {
                y: 100,
                opacity: 0,
                stagger: 0.2,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".proof-grid",
                    start: "top 80%",
                }
            });

            // Floating movement for cards
            gsap.to(".proof-card", {
                y: -15,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 0.3,
                    from: "random"
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const proofItems = [
        {
            title: "National Awards",
            icon: <Medal className="w-8 h-8 text-primary" />,
            desc: "Multiple winner of 'Best Design Institute' at national summits.",
            image: "https://images.pexels.com/photos/7005474/pexels-photo-7005474.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Official Certificates",
            icon: <FileCheck className="w-8 h-8 text-primary" />,
            desc: "UGC recognised and globally validated design curriculum.",
            image: "https://images.pexels.com/photos/7005481/pexels-photo-7005481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Global Affiliations",
            icon: <Landmark className="w-8 h-8 text-primary" />,
            desc: "Partnerships with premium international design bodies and universities.",
            image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        {
            title: "Industry Recognition",
            icon: <Star className="w-8 h-8 text-primary" />,
            desc: "Featured in leading fashion and design publications worldwide.",
            image: "https://images.pexels.com/photos/8205467/pexels-photo-8205467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-40 bg-white text-slate-900 overflow-hidden">
            {/* Soft Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full pointer-events-none" />

            {/* Decorative Vector Lines (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                    <div className="max-w-3xl">
                        <span className="inline-block text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4">Verification & Authority</span>
                        <h2 className="proof-title text-[8vw] md:text-[5.5vw] font-black uppercase leading-[0.85] tracking-tighter mb-8 flex flex-wrap gap-x-5">
                            {"Trusted. Recognised. Proven.".split(" ").map((word, i) => (
                                <span key={i} className="inline-block">{word}</span>
                            ))}
                        </h2>
                        <div className="h-1.5 w-32 bg-linear-to-r from-primary to-secondary rounded-full"></div>
                    </div>

                    <div ref={counterRef} className="flex items-center gap-8 group bg-slate-50 p-6 md:p-10 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-500">
                        <div className="text-right flex items-baseline">
                            <span className="years-count text-8xl md:text-10xl font-black text-transparent bg-clip-text bg-linear-to-b from-slate-900 to-slate-500 leading-none">
                                15
                            </span>
                            <span className="text-5xl md:text-7xl font-black text-primary ml-1">+</span>
                        </div>
                        <div className="text-left max-w-[180px]">
                            <p className="text-sm md:text-xl font-black uppercase tracking-tight leading-none text-slate-900 mb-1">
                                Years
                            </p>
                            <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
                                OF ACADEMIC LEGACY
                            </p>
                        </div>
                    </div>
                </div>

                <div className="proof-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {proofItems.map((item, index) => (
                        <div key={index} className="proof-card group relative h-[500px] rounded-[2.5rem] overflow-hidden bg-white border border-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.12)] transition-all duration-700">
                            {/* Card Image with Refined Overlay */}
                            <div className="absolute inset-0 z-0 h-full w-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover grayscale brightness-110 opacity-20 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                />
                                {/* Bottom Content Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent group-hover:from-black/80 group-hover:via-black/40 group-hover:to-transparent transition-all duration-700" />
                            </div>

                            {/* Card Content */}
                            <div className="absolute inset-0 z-10 p-10 flex flex-col justify-end">
                                <div className="mb-8 w-16 h-16 rounded-[1.25rem] bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                                    <div className="group-hover:text-white group-hover:scale-110 transition-all duration-500">
                                        {React.cloneElement(item.icon, { className: "w-8 h-8" })}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 group-hover:text-white transition-colors duration-500">
                                    {item.title}
                                </h3>

                                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 group-hover:text-white/80 transition-all duration-500 delay-100">
                                    {item.desc}
                                </p>

                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-primary group-hover:text-white transition-colors duration-500">
                                    <div className="w-8 h-[2px] bg-current"></div>
                                    <span>Verified</span>
                                </div>
                            </div>

                            {/* Corner Accent Decor */}
                            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <Globe className="w-6 h-6 text-white/40" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Legacy & Vision Highlight (New Section) */}
                <div className="mt-28 p-12 md:p-20 rounded-[3rem] bg-linear-to-br from-slate-50 to-white border border-slate-100 relative overflow-hidden group">
                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 p-12 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-1000 rotate-12">
                        <Award className="w-64 h-64 text-slate-900" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-primary"></span>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Founding Heritage</span>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                                A Legacy Engineered by <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary italic font-serif">Visionary Leadership</span>
                            </h3>
                            <p className="text-slate-600 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                                Co-founded by the <span className="text-slate-900 font-bold">IAS Officer & 1st Director General of NIFT</span>, INSD has pioneered design education in India for over 15 years, building a community of world-class artists and entrepreneurs.
                            </p>
                        </div>

                        <div className="flex flex-col gap-8 md:flex-row md:items-center">
                            <div className="p-8 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-50 flex-1">
                                <div className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">National</div>
                                <div className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-4">Award Winner</div>
                                <p className="text-slate-500 text-sm font-medium">Recognized as India's premier design school at the National Education Summits.</p>
                            </div>

                            <div className="p-8 rounded-3xl bg-slate-900 flex-1 text-white">
                                <div className="text-4xl font-black mb-2 tracking-tighter">Global</div>
                                <div className="text-xs font-black uppercase tracking-[0.3em] text-secondary-foreground mb-4 opacity-70">Outlook</div>
                                <p className="text-slate-300 text-sm font-medium leading-relaxed">Collaborating with international design powerhouses to redefine creative standards.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Refined Trust Bar */}
                <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col gap-2">
                        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-slate-400 text-center md:text-left">
                            Institutional Authority
                        </p>
                        <p className="text-sm font-black text-slate-900">
                            International School of Design © 2026
                        </p>
                    </div>

                    <div className="flex items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                        <div className="font-serif italic text-xl font-bold tracking-tight">Academic Council</div>
                        <div className="h-10 w-[1px] bg-slate-200 hidden md:block"></div>
                        <div className="text-xs font-black uppercase tracking-[0.6em]">Excellence</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
