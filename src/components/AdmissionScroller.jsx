import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdmissionScroller = () => {
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Base Infinite Marquee
            const marquee = gsap.to(trackRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 12,
                ease: "linear",
            });

            // 2. Scroll-Linked Horizontal Shift (Parallax Move)
            gsap.fromTo(trackRef.current, { x: 200 }, {
                x: -200,
                scrollTrigger: {
                    trigger: trackRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1.2,
                }
            });

            // 3. Velocity Reactions (Speed & Skew)
            ScrollTrigger.create({
                onUpdate: (self) => {
                    const velocity = self.getVelocity();
                    const absVelocity = Math.abs(velocity / 200);

                    // Acceleration
                    gsap.to(marquee, {
                        timeScale: 1 + absVelocity,
                        duration: 0.5
                    });

                    // Dynamic Skew
                    gsap.to(trackRef.current, {
                        skewX: velocity / 100,
                        duration: 0.5
                    });
                }
            });
        });
        return () => ctx.revert();
    }, []);

    const AdmissionText = () => (
        <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 py-2">
            <div className="flex items-center gap-8">
                <span className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none">
                    Admissions 2026 <span className="text-transparent stroke-text-white opacity-30 italic">Open Now</span>
                </span>
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_#db3436] animate-pulse" />
            </div>
            <div className="flex flex-col border-l border-white/20 pl-8">
                <span className="text-white/40 font-mono text-[10px] uppercase tracking-[0.4em] mb-1">Batch Intake</span>
                <span className="text-white font-bold text-lg md:text-2xl italic tracking-tight">Jan <span className="text-primary">&</span> June</span>
            </div>
            <div className="h-2 w-32 bg-linear-to-r from-primary to-secondary rounded-full opacity-30" />
        </div>
    );

    return (
        <div className="relative z-30 py-4 md:py-8 bg-slate-950 overflow-hidden border-y border-white/10">
            {/* Glossy Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-linear-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />

            <div ref={trackRef} className="whitespace-nowrap flex items-center will-change-transform">
                {[...Array(10)].map((_, i) => (
                    <AdmissionText key={i} />
                ))}
            </div>

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10 pointer-events-none" />
        </div>
    );
};

export default AdmissionScroller;
