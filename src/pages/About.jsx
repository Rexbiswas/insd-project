import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef(null);
    const horizontalSectionRef = useRef(null);
    const horizontalScrollRef = useRef(null);
    const heroRef = useRef(null);

    // Lenis Smooth Scroll Integration
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
        });

        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        return () => {
            lenis.destroy();
            gsap.ticker.remove(lenis.raf);
        };
    }, []);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // 1. Hero Layered Parallax
            const heroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            heroTl.to(".hero-layer-1", { y: -100, scale: 1.1 }, 0)
                .to(".hero-layer-2", { y: -250, scale: 1.2 }, 0)
                .to(".hero-layer-3", { y: -400, scale: 1.5 }, 0)
                .to(".hero-text", { y: 200, opacity: 0 }, 0);

            // 2. Horizontal Scroll Section
            const horizontalScroll = horizontalScrollRef.current;
            const horizontalSection = horizontalSectionRef.current;

            if (horizontalScroll && horizontalSection) {
                const totalWidth = horizontalScroll.scrollWidth;
                const windowWidth = window.innerWidth;
                const scrollAmount = totalWidth - windowWidth;

                gsap.to(horizontalScroll, {
                    x: -scrollAmount,
                    ease: "none",
                    scrollTrigger: {
                        trigger: horizontalSection,
                        start: "top top",
                        end: () => `+=${scrollAmount}`,
                        pin: true,
                        scrub: 1,
                        invalidateOnRefresh: true,
                    }
                });
            }

            // 3. Text Reveal for "The Unexpected"
            const reveals = document.querySelectorAll(".reveal-type");
            reveals.forEach((text) => {
                const chars = text.innerText.split("");
                text.innerHTML = chars.map(c => `<span class="char">${c === " " ? "&nbsp;" : c}</span>`).join("");

                gsap.fromTo(text.querySelectorAll(".char"),
                    { opacity: 0.1, y: 10, filter: "blur(5px)" },
                    {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        stagger: 0.05,
                        scrollTrigger: {
                            trigger: text,
                            start: "top 80%",
                            end: "top 20%",
                            scrub: true
                        }
                    }
                );
            });

            // 4. Cursor Follower for Next Level
            const orb = document.querySelector(".cursor-orb");
            window.addEventListener("mousemove", (e) => {
                gsap.to(orb, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });

            // 5. Image Reveal on Scroll
            gsap.utils.toArray(".reveal-img-container").forEach(container => {
                const image = container.querySelector("img");
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        toggleActions: "play none none reverse",
                    }
                });

                tl.set(container, { autoAlpha: 1 });
                tl.from(container, 1.5, {
                    xPercent: -100,
                    ease: "power2.out"
                });
                tl.from(image, 1.5, {
                    xPercent: 100,
                    scale: 1.3,
                    delay: -1.5,
                    ease: "power2.out"
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#0a0a0a] text-white overflow-hidden selection:bg-pink-500 selection:text-white">

            {/* Custom Cursor Orb */}
            <div className="cursor-orb fixed top-0 left-0 w-96 h-96 bg-pink-600/20 rounded-full blur-[100px] pointer-events-none z-0 -translate-x-1/2 -translate-y-1/2" />

            {/* Section 1: Immersive Hero */}
            <div ref={heroRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
                {/* Parallax Layers */}
                <div className="absolute inset-0 z-0">
                    <div className="hero-layer-1 absolute inset-0 bg-[url('https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center brightness-[0.3]" />
                    <div className="hero-layer-2 absolute inset-0 bg-linear-to-b from-transparent via-pink-900/10 to-transparent opacity-50" />
                </div>

                <div className="relative z-10 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="block text-pink-500 font-mono tracking-[1em] uppercase text-xs mb-6"
                    >
                        Established 2011
                    </motion.span>
                    <h1 className="hero-text text-[18vw] md:text-[14vw] font-black leading-[0.8] tracking-tighter uppercase italic select-none">
                        INSD <br /> Designing <br /> <span className="text-transparent stroke-text-white opacity-40"></span>
                    </h1>
                </div>

                <div className="hero-layer-3 absolute bottom-[-10%] left-0 w-full h-[30vh] bg-linear-to-t from-[#0a0a0a] to-transparent z-20" />
            </div>

            {/* Section 2: The Unexpected Story (Horizontal) */}
            <div ref={horizontalSectionRef} className="relative h-screen overflow-hidden bg-white text-black">
                <div ref={horizontalScrollRef} className="h-full flex items-center w-fit px-[10vw] gap-20">

                    {/* Slide 1: Introduction */}
                    <div className="min-w-[80vw] md:min-w-[40vw] flex flex-col justify-center">
                        <h2 className="text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
                            The <br /><span className="text-pink-600 italic font-serif font-light">Unexpected</span> <br /> Birth.
                        </h2>
                        <p className="text-xl text-slate-500 max-w-md leading-relaxed">
                            INSD wasn't born in a boardroom. It was born from a vision to revolutionize how India views creativity.
                        </p>
                    </div>

                    {/* Slide 2: The Founder */}
                    <div className="min-w-[90vw] md:min-w-[60vw] flex items-center gap-12">
                        <div className="reveal-img-container relative w-1/2 aspect-3/4 overflow-hidden rounded-2xl invisible">
                            <img src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" className="w-full h-full object-cover" alt="Founder" />
                        </div>
                        <div className="w-1/2">
                            <span className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4 block">The Pioneer</span>
                            <h3 className="text-4xl font-bold mb-6 uppercase leading-tight">Co-founded by an IAS Officer & 1st Director General of NIFT.</h3>
                            <p className="text-lg text-slate-600">Mr. Sunjey Aggarwal joined forces with the architects of India's design landscape to create something unprecedented.</p>
                        </div>
                    </div>

                    {/* Slide 3: The Legacy */}
                    <div className="min-w-[90vw] md:min-w-[60vw] relative">
                        <h2 className="text-[15vw] font-black uppercase tracking-tighter opacity-5 absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap">National Award Winning</h2>
                        <div className="relative z-10 flex flex-col gap-12">
                            <div className="flex gap-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-32 h-40 bg-slate-100 rounded-lg flex items-center justify-center">
                                        <span className="text-4xl">🏆</span>
                                    </div>
                                ))}
                            </div>
                            <p className="text-3xl font-light max-w-2xl leading-relaxed">
                                From 1 center to a **Pan-India presence**, INSD has democratized luxury education.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section 3: Visionary Ecosystem (Dark Aesthetic) */}
            <section className="relative py-48 px-6 bg-[#0a0a0a]">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">

                        <div className="sticky top-24">
                            <h2 className="reveal-type text-7xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-12">
                                Visionary <br /> Ecosystem.
                            </h2>
                            <p className="text-2xl font-light text-slate-400 max-w-lg mb-12">
                                We've built more than a school; we've built a futuristic laboratory where AI meets craftsmanship.
                            </p>

                            <div className="flex flex-col gap-8">
                                {['Paris Fashion Week', 'Milan Design Fair', 'Global Alumni Network'].map((item, i) => (
                                    <div key={i} className="flex items-center gap-6 group cursor-pointer border-b border-white/10 pb-6">
                                        <span className="text-pink-500 font-mono">0{i + 1}</span>
                                        <h4 className="text-3xl font-bold group-hover:translate-x-4 transition-transform duration-500 uppercase">{item}</h4>
                                        <div className="ml-auto w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-pink-600 group-hover:border-pink-600 transition-all">
                                            →
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-32 pt-24">
                            <div className="reveal-img-container relative aspect-video rounded-3xl overflow-hidden invisible">
                                <img src="https://images.pexels.com/photos/8145203/pexels-photo-8145203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" className="w-full h-full object-cover" alt="Fashion" />
                                <div className="absolute inset-0 bg-pink-600/20 mix-blend-overlay" />
                            </div>
                            <div className="reveal-img-container relative aspect-3/4 rounded-3xl overflow-hidden w-2/3 ml-auto invisible">
                                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" className="w-full h-full object-cover" alt="Interior" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Section 4: The Core Soul (Perspective Grid) */}
            <section className="relative py-48 px-6 bg-white text-black overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h2 className="text-[12vw] font-black uppercase leading-none tracking-tighter mb-24 reveal-type">
                        The Core Soul.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { title: 'Innovate', color: 'bg-pink-100' },
                            { title: 'Nurture', color: 'bg-indigo-100' },
                            { title: 'Sustain', color: 'bg-emerald-100' },
                            { title: 'Design', color: 'bg-amber-100' }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -20, rotateX: 10, rotateY: 10 }}
                                className={`${card.color} p-12 aspect-square flex flex-col justify-between items-start rounded-3xl cursor-pointer transition-shadow hover:shadow-2xl`}
                            >
                                <span className="text-4xl font-bold">0{i + 1}</span>
                                <h3 className="text-5xl font-black uppercase text-left">{card.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5: Join the Revolution (Video Mask) */}
            <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
                <video
                    autoPlay muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                    src="https://www.pexels.com/download/video/3129957/"
                />

                <div className="relative z-10 text-center px-6">
                    <h2 className="text-[15vw] md:text-[10vw] font-black uppercase leading-none text-white mix-blend-overlay">
                        Be The <br /> Future.
                    </h2>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="mt-12 px-16 py-6 bg-pink-600 text-white rounded-full text-xl font-bold uppercase tracking-widest shadow-2xl shadow-pink-600/40"
                    >
                        Apply Now
                    </motion.button>
                </div>
            </section>

            {/* Section 6: Global Exposure Marquee */}
            <section className="relative py-24 bg-white overflow-hidden border-y border-black/5">
                <div className="flex flex-col gap-4">
                    <div className="whitespace-nowrap flex overflow-hidden group select-none">
                        <div className="flex animate-marquee-fast hover:pause items-center gap-12">
                            {['Paris', 'Milan', 'London', 'New York', 'Dubai', 'Tokyo', 'Singapore', 'Mumbai', 'Delhi'].map((city, i) => (
                                <React.Fragment key={i}>
                                    <span className="text-[10vw] font-black uppercase tracking-tighter text-slate-200 group-hover:text-pink-600 transition-colors duration-500">
                                        {city}
                                    </span>
                                    <div className="w-4 h-4 rounded-full bg-pink-500" />
                                </React.Fragment>
                            ))}
                        </div>
                        {/* Duplicate for seamless loop */}
                        <div className="flex animate-marquee-fast hover:pause items-center gap-12" aria-hidden="true">
                            {['Paris', 'Milan', 'London', 'New York', 'Dubai', 'Tokyo', 'Singapore', 'Mumbai', 'Delhi'].map((city, i) => (
                                <React.Fragment key={i}>
                                    <span className="text-[10vw] font-black uppercase tracking-tighter text-slate-200 group-hover:text-pink-600 transition-colors duration-500">
                                        {city}
                                    </span>
                                    <div className="w-4 h-4 rounded-full bg-pink-500" />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: The Creative Hub (Mosaic Grid) */}
            <section className="relative py-48 bg-[#0a0a0a] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                        <div className="max-w-2xl">
                            <span className="text-pink-500 font-mono uppercase tracking-[0.5em] text-xs block mb-4">Behind the scenes</span>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                                Where the <br /> <span className="text-transparent stroke-text-white">Magic Happens.</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 text-lg max-w-sm mb-4 border-l border-white/20 pl-8 font-light leading-relaxed">
                            Our labs are not classrooms; they are incubators of rebellion. Every stitch, every pixel, every line is a statement against the ordinary.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { img: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg', span: 'col-span-2 row-span-2' },
                            { img: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg', span: 'col-span-2' },
                            { img: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg', span: 'col-span-1' },
                            { img: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg', span: 'col-span-1' },
                            { img: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg', span: 'col-span-2' },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? 1 : -1 }}
                                className={`${item.span} relative overflow-hidden rounded-2xl md:rounded-[2rem] aspect-square group`}
                            >
                                <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Lab life" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                                    <span className="text-white font-bold uppercase tracking-widest text-xs">Innovation Hub 0{i + 1}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 8: Industry Collaborations - Upgraded Magnetic Wall */}
            <section className="relative py-48 bg-slate-50 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
                    style={{ backgroundImage: `radial-gradient(#ec4899 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-32">
                        <motion.span
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-pink-600 font-mono text-xs tracking-[1em] uppercase block mb-4"
                        >
                            Executive Partners
                        </motion.span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
                            Industry <span className="text-transparent stroke-text-white !stroke-slate-900">Giants.</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                        {[
                            { name: 'PRADA', tag: 'Luxury Partner' },
                            { name: 'GUCCI', tag: 'Fashion Core' },
                            { name: 'VOGUE', tag: 'Media Ally' },
                            { name: 'ELLE', tag: 'Editorial' },
                            { name: 'APPLE', tag: 'Tech Design' },
                            { name: 'ADOBE', tag: 'Creative Suite' },
                            { name: 'ZARA', tag: 'Global Retail' },
                            { name: 'H&M', tag: 'Sustainable' }
                        ].map((brand, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{ scale: 1.05, y: -10 }}
                                className="group relative bg-white border border-slate-200 p-12 rounded-[2rem] aspect-square flex flex-col items-center justify-center cursor-none transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-pink-500/10 hover:border-pink-500/20"
                            >
                                {/* Invisible Magnetic Target */}
                                <div className="absolute inset-0 z-0" />

                                <span className="text-4xl md:text-5xl font-black tracking-tighter text-slate-300 group-hover:text-slate-900 transition-colors duration-500 uppercase z-10">
                                    {brand.name}
                                </span>

                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-center w-full px-4">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-pink-600 block">{brand.tag}</span>
                                    <div className="h-0.5 w-8 bg-pink-500 mx-auto mt-2 rounded-full" />
                                </div>

                                {/* Hover Dot Reveal */}
                                <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-pink-500 transition-colors" />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 text-center">
                        <p className="text-slate-400 font-light max-w-lg mx-auto leading-relaxed">
                            Connecting our rebels with the world's most influential houses. <br />
                            <span className="font-bold text-slate-900 uppercase text-xs tracking-widest mt-4 block">100% Placement Record In Luxury Sector</span>
                        </p>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    );
};


export default About;
