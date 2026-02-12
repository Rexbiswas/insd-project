import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Loader = ({ setLoading }) => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const percentRef = useRef(null);
    const [progress, setProgress] = useState(0);

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
            const words = ["UNEXPECTED", "EXTRAORDINARY", "FUTURE", "INSD"];
            const wordDuration = 2.5 / words.length;

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
        <div ref={containerRef} className="fixed inset-0 z-[9999] flex flex-col pointer-events-none">

            {/* Shutter Layers for Reveal */}
            <div className="absolute inset-0 flex flex-col md:flex-row h-full w-full">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="shutter relative w-full h-full bg-black border-r border-white/5 last:border-r-0"></div>
                ))}
            </div>

            {/* Content Centered on top of shutters */}
            <div className="loader-content absolute inset-0 z-10 flex flex-col items-center justify-center text-white mix-blend-difference">

                {/* Flashing Text */}
                <h1 ref={textRef} className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4">
                    INSD
                </h1>

                {/* Progress Bar & Number */}
                <div className="flex items-center gap-4 overflow-hidden">
                    <div className="h-[1px] w-24 bg-white/50">
                        <div className="h-full bg-white w-full origin-left animate-[loading_2s_ease-in-out_infinite]"></div>
                    </div>
                    <span ref={percentRef} className="text-4xl md:text-6xl font-black font-mono">0</span>
                    <span className="text-xl md:text-2xl font-bold align-top">%</span>
                </div>

            </div>

            {/* Background Noise/texture for "Rough" feel */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none z-20"></div>

        </div>
    );
};

export default Loader;
