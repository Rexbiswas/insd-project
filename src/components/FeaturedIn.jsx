import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeaturedIn = () => {
    const containerRef = useRef(null);
    const marqueeRef = useRef(null);

    const brands = [
        {
            name: "The Tribune",
            url: "https://insd.edu.in/wp-content/uploads/2021/04/tribune-india-logo.jpg",
            bg: "https://insd.edu.in/wp-content/uploads/2021/04/tribune-india-logo.jpg",
            domain: "tribuneindia.com"
        },
        {
            name: "India Today",
            url: "https://insd.edu.in/wp-content/uploads/2021/04/India_Today_Group_Logo.png",
            bg: "https://insd.edu.in/wp-content/uploads/2021/04/India_Today_Group_Logo.png",
            domain: "indiatoday.in"
        },
        {
            name: "The Hindu",
            url: "https://upload.wikimedia.org/wikipedia/commons/4/41/The_Hindu_logo.svg",
            bg: "https://images.pexels.com/photos/3886870/pexels-photo-3886870.jpeg",
            domain: "thehindu.com"
        },
        {
            name: "Luxury Abode",
            url: "https://www.luxuryabode.in/uploads/logo/1647413669_Luxury_Abode_Logo_Png.png",
            bg: "https://images.pexels.com/photos/3288102/pexels-photo-3288102.jpeg",
            domain: "luxuryabode.in"
        },
        {
            name: "Education Times",
            url: "https://www.educationtimes.com/newassets/images/ET_Logo.svg",
            bg: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg",
            domain: "educationtimes.com"
        },
        {
            name: "Times of India",
            url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/The_times_of_india.svg",
            bg: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
            domain: "timesofindia.indiatimes.com"
        },
        {
            name: "Vogue",
            url: "https://upload.wikimedia.org/wikipedia/commons/1/13/Vogue_India_logo.svg",
            bg: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
            domain: "vogue.in"
        },
        {
            name: "Elle",
            url: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Elle-Logo.svg",
            bg: "https://images.pexels.com/photos/7679863/pexels-photo-7679863.jpeg",
            domain: "elle.in"
        }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            // Infinite Marquee Animation
            const tl = gsap.timeline({ repeat: -1 });
            const marqueeContent = marqueeRef.current;
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
            <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-secondary/40 blur-[120px] rounded-full mix-blend-screen pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/40 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

            <div className="relative z-10 container mx-auto px-6 mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
                    Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary">In</span>
                </h2>
                <div className="w-24 h-1 bg-linear-to-r from-transparent via-white/50 to-transparent mx-auto"></div>
            </div>

            {/* Infinite Marquee Wrapper */}
            <div className="relative w-full overflow-hidden mask-linear-fade-wide">
                <div ref={marqueeRef} className="flex gap-8 md:gap-12 w-max">
                    {/* Render Quadrupled List for Seamless Infinite Scroll */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <div
                            key={i}
                            className="feature-card group relative w-72 h-44 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center p-8 cursor-pointer overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:border-white/40 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)] shrink-0"
                        >
                            {/* Brand Context Background Image (Reveals on Hover) */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <img
                                    src={brand.bg}
                                    alt=""
                                    className="w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-all duration-1000 scale-150 group-hover:scale-100 blur-[2px] group-hover:blur-0"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-700" />
                            </div>

                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-linear-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl z-10"></div>

                            {/* Logo Image */}
                            <img
                                src={brand.url}
                                alt={brand.name}
                                crossOrigin="anonymous"
                                onError={(e) => {
                                    if (!e.target.src.includes('clearbit.com')) {
                                        e.target.src = `https://logo.clearbit.com/${brand.domain}`;
                                    } else {
                                        e.target.style.display = 'none';
                                        const fallback = e.target.nextElementSibling;
                                        if (fallback) fallback.classList.remove('hidden');
                                    }
                                }}
                                className="relative z-20 w-[80%] h-[80%] object-contain filter grayscale invert brightness-0 opacity-40 group-hover:filter-none group-hover:invert-0 group-hover:brightness-100 group-hover:opacity-100 transition-all duration-700 scale-90 group-hover:scale-105"
                            />

                            {/* Text Fallback (Hidden by default) */}
                            <div className="fallback-text hidden absolute inset-0 z-30 flex items-center justify-center text-white/50 font-medium text-lg text-center p-4">
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
