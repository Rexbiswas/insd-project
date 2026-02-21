import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = ({ setLoading }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const percentRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    setLoading(false);
                }
            });

            // 1. Counter Animation (0 to 100)
            // We animate a proxy object to use GSAP's easing on the state update
            const counter = { val: 0 };
            tl.to(counter, {
                val: 100,
                duration: 2.5,
                ease: "power2.inOut",
                onUpdate: () => {
                    if (percentRef.current) {
                        percentRef.current.textContent = Math.floor(counter.val);
                    }
                }
            });

            // 2. Text Reveal / Cycle during count
            // "Design" -> "Innovation" -> "INSD"
            const words = ["15", "YEARS", "OF", "CREATIVES", "EXECELLENCE"];
            const wordDuration = 1.5 / words.length;

            words.forEach((word, index) => {
                setTimeout(() => {
                    if (textRef.current) textRef.current.innerText = word;
                }, index * wordDuration * 1000);
            });

            // 3. The "Unexpected" Reveal
            // The black background splits into strips or the counter zooms out

            // Phase 1: Text explodes/scales
            tl.to(".loader-content", {
                scale: 1.5,
                opacity: 0,
                duration: 0.5,
                ease: "power2.in"
            });

            // Phase 2: Shutter Reveal (Vertical Strips)
            const shutters = gsap.utils.toArray('.shutter');
            tl.to(shutters, {
                height: "0%",
                duration: 0.8,
                stagger: 0.05,
                ease: "power4.inOut"
            }, "-=0.2");

            // Phase 3: Container removal (just to be safe)
            tl.to(containerRef.current, {
                display: "none",
                duration: 0
            });

        }, containerRef);

        return () => ctx.revert();
    }, [setLoading]);

    return (
        <div ref={containerRef} className="fixed inset-0 z-9999 flex flex-col pointer-events-none">

            {/* Shutter Layers for Reveal */}
            <div className="absolute inset-0 flex flex-col md:flex-row h-full w-full">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="shutter relative w-full h-full bg-black border-r border-white/5 last:border-r-0"></div>
                ))}
            </div>

            {/* Content Centered on top of shutters */}
            <div className="loader-content absolute inset-0 z-10 flex flex-col items-center justify-center text-white mix-blend-difference px-4 text-center">

                {/* Flashing Text with Glitch Effect simulation via rapid font weight change or just bold */}
                <h1 ref={textRef} className="text-5xl md:text-9xl font-black uppercase tracking-tighter mb-2 md:mb-4 min-h-[1.2em] flex items-center justify-center">
                    INSD
                </h1>

                {/* Progress Bar & Number */}
                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-end gap-2 overflow-hidden">
                        <span ref={percentRef} className="text-5xl md:text-8xl font-black font-mono leading-none">0</span>
                        <span className="text-2xl md:text-4xl font-bold font-mono mb-2">%</span>
                    </div>

                    <div className="w-48 md:w-64 h-[2px] bg-white/20 relative overflow-hidden mt-2">
                        <div className="absolute inset-0 bg-white origin-left animate-[loading_2s_ease-in-out_infinite] w-full"></div>
                    </div>
                </div>

            </div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-10 bg-[linear-gradient(to_bottom,transparent_50%,black_50%)] bg-size-[100%_4px]"></div>

            {/* Background Noise/texture for "Rough" feel */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-20"></div>

        </div>
    );
};

export default Loader;
