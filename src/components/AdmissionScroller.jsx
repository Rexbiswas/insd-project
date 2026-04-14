import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AdmissionScroller = () => {
    const trackRef = useRef(null);
    const marqueeAnim = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Base Infinite Marquee on the track
            marqueeAnim.current = gsap.to(trackRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: 20,
                ease: "none",
            });

            // 2. Scroll-Linked Horizontal Shift on the track container
            // This creates the parallax effect as you scroll down
            gsap.fromTo(trackRef.current, 
                { x: 100 }, 
                {
                    x: -100,
                    ease: "none",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1,
                    }
                }
            );

            // 3. Velocity Reactions
            ScrollTrigger.create({
                onUpdate: (self) => {
                    const velocity = Math.abs(self.getVelocity() / 300);
                    gsap.to(marqueeAnim.current, {
                        timeScale: 1 + velocity,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const AdmissionText = () => (
        <div className="flex items-center gap-12 md:gap-24 px-6 md:px-12 py-2">
            <div className="flex items-center gap-8">
                <span className="text-white font-black text-3xl md:text-5xl uppercase tracking-tighter leading-none">
                    ADMISSION OPEN 2026
                </span>
                <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_#db3436] animate-pulse" />
            </div>
            <div className="h-2 w-32 bg-linear-to-r from-primary to-secondary rounded-full opacity-30" />
        </div>
    );

    return (
        <div ref={containerRef} className="relative z-30 py-6 md:py-12 bg-slate-950 overflow-hidden border-y border-white/10">
            {/* Glossy Gradient Overlays */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-96 bg-linear-to-r from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-96 bg-linear-to-l from-slate-950 via-slate-950/80 to-transparent z-10 pointer-events-none" />

            <div className="flex items-center">
                <div 
                    ref={trackRef} 
                    className="whitespace-nowrap flex items-center will-change-transform cursor-pointer pointer-events-auto"
                    onMouseEnter={() => {
                        if (marqueeAnim.current) marqueeAnim.current.pause();
                    }}
                    onMouseLeave={() => {
                        if (marqueeAnim.current) marqueeAnim.current.resume();
                    }}
                >
                    {/* We need enough clones to ensure seamless looping at -50% xPercent */}
                    {[...Array(12)].map((_, i) => (
                        <AdmissionText key={i} />
                    ))}
                </div>
            </div>

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px bg-white/10 pointer-events-none" />
        </div>
    );
};

export default AdmissionScroller;
