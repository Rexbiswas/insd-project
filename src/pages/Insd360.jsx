import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Globe, Zap, Users, Trophy, Sparkles, Cpu, Feather, Box, Maximize } from 'lucide-react';

import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const Insd360 = () => {
    const containerRef = useRef(null);
    const sliderRef = useRef(null);
    const triggerRef = useRef(null);
    const progressBarRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const slider = sliderRef.current;
            const trigger = triggerRef.current;

            // Horizontal Scroll Animation
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: "top top",
                    end: "+=3000", // Adjust scroll length
                    scrub: 1,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                }
            });

            tl.to(slider, {
                x: () => -(slider.scrollWidth - document.documentElement.clientWidth) + "px",
                ease: "none",
            });

            tl.to(progressBarRef.current, {
                scaleX: 1,
                ease: "none"
            }, "<");

            // Parallax effect for images inside cards
            gsap.utils.toArray('.slide-img').forEach((img) => {
                gsap.to(img, {
                    scale: 1.2,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        containerAnimation: tl,
                        start: "left right",
                        end: "right left",
                        scrub: true,
                    }
                });
            });


            // NEW: Animations for new sections
            // 4. Reveal Text
            gsap.from(".reveal-text", {
                scrollTrigger: {
                    trigger: ".reveal-text",
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });

            // 5. Reveal Image
            gsap.from(".reveal-img", {
                scrollTrigger: {
                    trigger: ".reveal-text", // Sync with text
                    start: "top 80%",
                },
                x: 100,
                opacity: 0,
                duration: 1.5,
                ease: "expo.out",
                delay: 0.2
            });

            // 6. Reveal Rows (Stagger)
            gsap.from(".reveal-row", {
                scrollTrigger: {
                    trigger: ".reveal-row",
                    start: "top 85%",
                },
                y: 50,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out"
            });

            // 7. Reveal Stats (Stagger)
            gsap.from(".reveal-stat", {
                scrollTrigger: {
                    trigger: ".reveal-stat",
                    start: "top 85%",
                },
                scale: 0.8,
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: "back.out(1.7)"
            });


            // 8. Marquee Animation (Infinite Scroll)
            const marqueeContent = document.querySelector('.marquee-content');
            if (marqueeContent) {
                // Clone content for seamless loop if not already handled by react (handled by map x2)
                gsap.to(marqueeContent, {
                    xPercent: -50,
                    ease: "none",
                    duration: 30,
                    repeat: -1
                });
            }

            // 9. Reveal Final CTA
            gsap.from(".reveal-cta", {
                scrollTrigger: {
                    trigger: ".reveal-cta",
                    start: "top 80%",
                },
                scale: 0.9,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            });


        }, containerRef);

        return () => ctx.revert();
    }, []);

    const features = [
        {
            title: "London Fashion Week",
            desc: "INSDians taking over the global runway. Official showcase partners.",
            icon: <Globe className="w-12 h-12 mb-4 text-pink-500" />,
            img: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            title: "New York Fashion Week",
            desc: "From classroom to the Big Apple. Presenting sustainable couture.",
            icon: <Sparkles className="w-12 h-12 mb-4 text-purple-500" />,
            img: "https://images.pexels.com/photos/2030826/pexels-photo-2030826.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            title: "Lakme Fashion Week",
            desc: "India's premier fashion event. Students designing for stars.",
            icon: <Feather className="w-12 h-12 mb-4 text-emerald-400" />,
            img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            title: "Dubai Design Week",
            desc: "Middle East's design capital. Architecture & Interior showcases.",
            icon: <Box className="w-12 h-12 mb-4 text-yellow-500" />,
            img: "https://images.pexels.com/photos/276551/pexels-photo-276551.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            title: "Paris Art Expo",
            desc: "The heart of art. Graphic design and avant-garde exhibits.",
            icon: <Maximize className="w-12 h-12 mb-4 text-blue-500" />,
            img: "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=800"
        },
        {
            title: "Times Fashion Week",
            desc: "Setting trends nationally. The future of Indian fashion.",
            icon: <Zap className="w-12 h-12 mb-4 text-cyan-400" />,
            img: "https://images.pexels.com/photos/994197/pexels-photo-994197.jpeg?auto=compress&cs=tinysrgb&w=800"
        }
    ];

    return (
        <div ref={containerRef}>
            <section ref={triggerRef} className="relative h-screen bg-slate-950 overflow-hidden flex flex-col justify-center">

                {/* Background Atmosphere */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-950 to-slate-950 pointer-events-none" />

                {/* Header Overlay */}
                <div className="absolute top-10 left-0 w-full z-20 text-center pointer-events-none">
                    <h2 className="text-sm font-mono text-purple-400 tracking-[0.5em] uppercase mb-4">INSD Global</h2>
                    <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        World <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">Stage</span>
                    </h1>
                </div>

                {/* Horizontal Slider Track */}
                <div ref={sliderRef} className="flex gap-8 px-10 md:px-32 w-fit items-center h-[70vh]">
                    {/* Intro Slide */}
                    <div className="shrink-0 w-[400px] md:w-[600px] h-full flex flex-col justify-center text-white p-8">
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Beyond <br />
                            <span className="text-slate-500">Borders.</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-md">
                            Experience our students' journey from campus studios to international runways.
                        </p>
                        <div className="mt-8 flex items-center gap-4 text-sm font-mono text-purple-400">
                            <ArrowUpRight className="w-6 h-6" /> Scroll to Explore
                        </div>
                    </div>

                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="shrink-0 relative w-[400px] md:w-[500px] h-full rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group hover:border-pink-500/50 transition-colors"
                        >
                            {/* Image Container with Overflow for Parallax */}
                            <div className="absolute inset-0 z-0 overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent z-10 opacity-60" />
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="slide-img w-full h-full object-cover transform scale-100"
                                />
                            </div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-pink-600/80 backdrop-blur-md rounded-xl text-white">
                                        {React.cloneElement(item.icon, { className: "w-6 h-6" })}
                                    </div>
                                    <div className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-widest text-white">
                                        2024
                                    </div>
                                </div>
                                <h3 className="text-4xl font-black text-white uppercase leading-none tracking-tight mb-3">{item.title}</h3>
                                <p className="text-slate-300 text-sm font-medium opacity-80 max-w-xs">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}

                    {/* End Slide */}
                    <div className="shrink-0 w-[400px] h-full flex items-center justify-center p-8">
                        <div className="text-center">
                            <h3 className="text-3xl font-bold text-white mb-4">You're Next.</h3>
                            <button className="px-8 py-3 bg-white text-black font-bold uppercase tracking-wider hover:bg-pink-500 hover:text-white transition-colors rounded-full">
                                Apply Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Progress Bar (Optional) */}
                <div className="absolute bottom-10 left-10 md:left-32 w-48 h-1 bg-white/10 overflow-hidden rounded-full">
                    <div ref={progressBarRef} className="h-full bg-pink-500 w-full origin-left scale-x-0" />
                </div>

            </section>

            {/* NEW: Future Vision Section */}
            <section className="relative min-h-screen bg-black text-white py-32 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(124,58,237,0.1),transparent)] pointer-events-none" />

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="reveal-text">
                            <h2 className="text-sm font-mono text-pink-500 tracking-[0.5em] uppercase mb-6">Beyond Design</h2>
                            <h3 className="text-5xl md:text-7xl font-black uppercase leading-tight mb-8">
                                Crafting <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">Digital DNA</span>
                            </h3>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                We don't just teach design; we engineer creative intelligence.
                                From AI-generated fashion to sustainable architecture,
                                INSD is where tradition meets the singularity.
                            </p>
                        </div>
                        <div className="relative h-[600px] w-full rounded-3xl overflow-hidden reveal-img group">
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />
                            <img
                                src="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                alt="Digital Fashion"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                            />
                            <div className="absolute bottom-10 left-10 z-20">
                                <div className="text-6xl font-black text-white/10 group-hover:text-white/30 transition-colors">01</div>
                                <div className="text-2xl font-bold uppercase tracking-widest">Cyber Couture</div>
                            </div>
                        </div>
                    </div>

                    {/* Timeline / Steps */}
                    <div className="space-y-4">
                        {[
                            { id: "01", title: "Ideation", type: "Neural Sync", desc: "Brainstorming with AI-assisted moodboards." },
                            { id: "02", title: "Creation", type: "Virtual Prototyping", desc: "Zero-waste 3D sampling and draping." },
                            { id: "03", title: "Execution", type: "Sustainable Fabric", desc: "Ethical sourcing meets high-tech textiles." },
                            { id: "04", title: "Launch", type: "Metaverse Runway", desc: "Global exposure in digital and physical realms." },
                        ].map((step, idx) => (
                            <div key={idx} className="reveal-row group border-t border-white/10 hover:border-pink-500/50 transition-colors py-12 flex flex-col md:flex-row md:items-center justify-between cursor-pointer">
                                <div className="flex items-center gap-8 mb-4 md:mb-0">
                                    <span className="text-xl font-mono text-slate-600 group-hover:text-pink-500 transition-colors">/{step.id}</span>
                                    <h4 className="text-3xl md:text-5xl font-bold uppercase text-slate-300 group-hover:text-white group-hover:translate-x-4 transition-all duration-300">{step.title}</h4>
                                </div>
                                <div className="md:text-right">
                                    <div className="text-pink-500 font-mono text-sm uppercase tracking-wider mb-1">{step.type}</div>
                                    <div className="text-slate-500 group-hover:text-slate-300 transition-colors">{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Stats / Impact Section - Dark Mode */}
            <section className="bg-slate-950 py-32 border-t border-white/5 relative">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {[
                            { val: "98%", label: "Placement Rate" },
                            { val: "50+", label: "Global Awards" },
                            { val: "15k+", label: "Alumni Network" },
                        ].map((stat, i) => (
                            <div key={i} className="reveal-stat p-10 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors">
                                <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-linear-to-b from-white to-slate-600 mb-4 font-sans">{stat.val}</div>
                                <div className="text-slate-400 uppercase tracking-widest font-mono text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Industry Partners Marquee */}
            <section className="py-24 bg-black border-t border-white/10 overflow-hidden relative">
                <div className="mb-16 text-center">
                    <h3 className="text-pink-500 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-2">Built for the Industry</h3>
                    <h2 className="text-2xl md:text-3xl text-white font-bold uppercase tracking-wide">Trusted By Global Leaders</h2>
                </div>

                {/* Marquee Container */}
                <div className="relative flex overflow-hidden py-8">
                    <div className="marquee-content flex gap-16 md:gap-32 whitespace-nowrap text-center items-center">
                        {/* Partner List - Repeated for seamless loop (x2) */}
                        {[
                            "Vogue", "Prada", "Gucci", "Elle", "Zara", "H&M", "Raymond", "Sabyasachi", "Manish Malhotra",
                            "Vogue", "Prada", "Gucci", "Elle", "Zara", "H&M", "Raymond", "Sabyasachi", "Manish Malhotra"
                        ].map((brand, i) => (
                            <span key={i} className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-linear-to-b from-white/20 to-white/5 uppercase hover:from-pink-500 hover:to-purple-500 transition-all duration-500 cursor-default">
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* NEW: Final CTA */}
            <section className="relative py-32 md:py-48 bg-slate-950 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
                <div className="reveal-cta relative z-10">
                    <div className="inline-block p-2 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-pink-400 font-mono text-xs uppercase tracking-widest mb-8">
                        Admissions Open 2024
                    </div>
                    <h2 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                        Create <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">Now.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl mb-12 leading-relaxed">
                        The future doesn't wait. Join the next generation of design leaders at INSD.
                        Your journey to the global stage starts here.
                    </p>
                    <button className="group relative px-12 py-5 bg-white text-black font-black uppercase tracking-widest hover:bg-pink-600 hover:text-white transition-all duration-300 rounded-full overflow-hidden">
                        <span className="relative z-10">Start Application</span>
                        <div className="absolute inset-0 bg-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </button>
                </div>

                {/* Background Grid/Glow */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
            </section>
            <Footer />
        </div>
    );
};

export default Insd360;
