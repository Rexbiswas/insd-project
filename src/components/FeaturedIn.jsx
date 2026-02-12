import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedIn = () => {
    const containerRef = useRef(null);
    const marqueeRef = useRef(null);

    const brands = [
        { name: "The Tribune", url: "https://logo.clearbit.com/tribuneindia.com", domain: "tribuneindia.com" },
        { name: "India Today", url: "https://logo.clearbit.com/indiatoday.in", domain: "indiatoday.in" },
        { name: "The Hindu", url: "https://logo.clearbit.com/thehindu.com", domain: "thehindu.com" },
        { name: "Luxury Abode", url: "https://logo.clearbit.com/luxuryabode.com", domain: "luxuryabode.com" }, // Might fail, fallback needed?
        { name: "Education Times", url: "https://logo.clearbit.com/educationtimes.com", domain: "educationtimes.com" },
        { name: "Times of India", url: "https://logo.clearbit.com/timesofindia.indiatimes.com", domain: "timesofindia.indiatimes.com" },
        { name: "Vogue", url: "https://logo.clearbit.com/vogue.in", domain: "vogue.in" },
        { name: "Elle", url: "https://logo.clearbit.com/elle.in", domain: "elle.in" }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            // Infinite Marquee Animation
            const tl = gsap.timeline({ repeat: -1 });
            const marqueeContent = marqueeRef.current;

            // Calculate width dynamically if possible, or just animate percentage
            // Calculate width dynamically if possible, or just animate percentage
            // For a smooth loop, we need to move by exactly 1/4th (since we quadruple the list)

            tl.to(marqueeContent, {
                xPercent: -25,
                ease: "none",
                duration: 40 // Slower, more majestic
            });

            // "Spotlight" reveal on scroll - Removed to fix visibility issue
            // Cards will be visible by default
            gsap.set(".feature-card", { opacity: 1, y: 0 });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-black py-32 overflow-hidden relative">

            {/* Dynamic Background Noise */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

            {/* Glowing Orbs for "Unexpected" feel */}
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/40 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-900/40 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                    Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">In</span>
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden mask-linear-fade-wide">
                <div ref={marqueeRef} className="flex gap-8 md:gap-12 w-max">
                    {/* Render Quadrupled List for Seamless Infinite Scroll */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div
                            key={i}
                            className="feature-card group relative w-64 h-40 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center p-8 cursor-pointer hover:bg-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(120,50,255,0.3)] perspective-1000 shrink-0"
                        >
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                            {/* Logo Image */}
                            <img
                                src={brand.url}
                                alt={brand.name}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    const fallback = e.target.nextElementSibling;
                                    if (fallback) fallback.classList.remove('hidden');
                                }}
                                className="w-full h-full object-contain filter grayscale brightness-200 contrast-100 opacity-60 group-hover:filter-none group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100"
                            />

                            {/* Text Fallback (Hidden by default) */}
                            <div className="fallback-text hidden absolute inset-0 flex items-center justify-center text-white font-bold text-xl text-center p-4">
                                {brand.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FeaturedIn;
