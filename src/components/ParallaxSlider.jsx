import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        id: "01",
        title: "Paris",
        subtitle: "Global Runway",
        image: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Immerse yourself in the fashion capital of the world. Our exchange programs allow you to showcase your designs at Paris Fashion Week."
    },
    {
        id: "02",
        title: "Milan",
        subtitle: "Design Heritage",
        image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Walk the streets of history for inspiration. From classic architecture to modern interior trends, Milan is your classroom."
    },
    {
        id: "03",
        title: "London",
        subtitle: "Creative Edge",
        image: "https://images.pexels.com/photos/2735970/pexels-photo-2735970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Push boundaries in the hub of avant-garde design. London offers a unique blend of punk, royal, and modern aesthetics."
    },
    {
        id: "04",
        title: "NY",
        subtitle: "Urban Pulse",
        image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        description: "Fast-paced, bold, and commercial. Learn the business of fashion and design in the concrete jungle where dreams are made."
    }
];

const ParallaxSlider = () => {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);
    const trackRef = useRef(null);
    const progressRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const track = trackRef.current;
            const cards = gsap.utils.toArray('.parallax-card');

            // GSAP MatchMedia for Responsive Logic
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                // Desktop: Horizontal Pin Scroll
                const scrollAmount = track.scrollWidth - window.innerWidth;

                const tween = gsap.to(track, {
                    x: -scrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        pin: true,
                        start: "top top",
                        end: "+=" + scrollAmount,
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                        onUpdate: (self) => {
                            if (progressRef.current) {
                                gsap.set(progressRef.current, { scaleX: self.progress });
                            }
                        }
                    }
                });

                // Desktop Inner Parallax
                cards.forEach((card) => {
                    const img = card.querySelector('img');
                    const title = card.querySelector('.slide-title');

                    if (img) {
                        gsap.fromTo(img,
                            { objectPosition: "20% 50%" },
                            {
                                objectPosition: "80% 50%",
                                ease: "none",
                                scrollTrigger: {
                                    trigger: triggerRef.current,
                                    start: "top top",
                                    end: "+=" + scrollAmount,
                                    scrub: true,
                                    containerAnimation: tween
                                }
                            }
                        );
                    }

                    if (title) {
                        gsap.fromTo(title,
                            { x: 100 },
                            {
                                x: -50,
                                ease: "none",
                                scrollTrigger: {
                                    trigger: card,
                                    start: "left right",
                                    end: "right left",
                                    containerAnimation: tween,
                                    scrub: true
                                }
                            }
                        );
                    }
                });
            });

            // Mobile optimization: We use native horizontal scroll with CSS Snap.
            // No complex GSAP scrollTrigger needed for mobile to ensure smooth touch performance.
            // We can add simple initial load animation if needed, but for now cleanliness is key.

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="bg-black text-white relative">

            {/* Sticky Interactions */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20 mix-blend-difference">
                {/* Progress Bar */}
                <div className="absolute bottom-10 left-10 right-10 h-[2px] bg-white/20 rounded-full overflow-hidden">
                    <div ref={progressRef} className="h-full bg-white origin-left scale-x-0 w-full"></div>
                </div>
            </div>

            {/* Horizontal Scroll wrapper */}
            <div ref={triggerRef} className="h-screen md:h-screen overflow-x-auto md:overflow-hidden flex items-center relative z-10 snap-x snap-mandatory scroll-smooth no-scrollbar">

                {/* The Track */}
                <div ref={trackRef} className="flex flex-row gap-6 md:gap-24 px-6 md:px-32 w-max h-[60vh] md:h-[80vh] items-center will-change-transform pt-0">

                    {/* Intro Card */}
                    <div className="parallax-card w-[85vw] md:w-[30vw] h-full flex flex-col justify-center shrink-0 items-center md:items-start text-center md:text-left snap-center">
                        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">
                            Global<br />
                            <span className="text-transparent stroke-text-white">Campus</span>
                        </h1>
                        <div className="w-24 h-2 bg-pink-500 mt-8 mb-8"></div>
                        <p className="text-xl text-white/60 max-w-sm leading-relaxed font-light">
                            Experience the world's fashion capitals.
                            From Paris to New York, the world is your classroom.
                        </p>
                        {/* Mobile Swipe Hint */}
                        <div className="md:hidden mt-8 flex items-center gap-2 text-white/40 text-sm animate-pulse">
                            <span>Swipe</span>
                            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                        </div>
                    </div>

                    {/* Slides */}
                    {slides.map((slide, i) => (
                        <div key={i} className="parallax-card relative w-[85vw] md:w-[50vw] h-full shrink-0 group perspective-500 snap-center">
                            {/* Image Container */}
                            <div className="relative w-full h-full overflow-hidden rounded-4xl bg-slate-900 border border-white/10 group-hover:border-white/40 transition-colors duration-500">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover scale-125 will-change-transform opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-transparent"></div>

                                <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                    <h3 className="slide-title text-[4rem] md:text-[8rem] leading-[0.8] font-black uppercase tracking-tighter text-transparent stroke-text-white group-hover:text-white transition-colors duration-500 mb-4">
                                        {slide.title}
                                    </h3>
                                    <div className="flex justify-between items-end border-t border-white/20 pt-6">
                                        <div>
                                            <p className="text-pink-400 font-mono text-sm uppercase tracking-widest mb-1">{slide.subtitle}</p>
                                            <p className="text-white/70 text-sm max-w-[200px] line-clamp-2 md:line-clamp-none">{slide.description}</p>
                                        </div>
                                        <button className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center hover:bg-white hover:text-black transition-all group-hover:rotate-45">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Outro */}
                    <div className="parallax-card w-[85vw] md:w-[30vw] h-full flex flex-col justify-center items-center shrink-0 snap-center">
                        <h2 className="text-4xl md:text-6xl font-black uppercase text-center leading-tight mb-8">
                            Ready to <br /> <span className="text-pink-500">Launch?</span>
                        </h2>
                        <button className="px-12 py-4 bg-white text-black font-bold uppercase tracking-widest rounded-full hover:bg-pink-500 hover:text-white transition-all duration-300 hover:scale-105">
                            Start Application
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ParallaxSlider;
