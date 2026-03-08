import React, { useRef, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Star, Globe, Award, Heart, MousePointer2 } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const Insdian = () => {
    const mainRef = useRef(null);
    const heroRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        console.log("Insdian page mounted");
        let ctx = gsap.context(() => {
            // Hero Text Animation
            gsap.fromTo(".hero-text-zoom", 
                { scale: 0.8, opacity: 0, filter: "blur(20px)" },
                { scale: 1, opacity: 1, filter: "blur(0px)", duration: 2, ease: "expo.out" }
            );

            // Scroll Reveal Sections
            const sections = gsap.utils.toArray('.reveal-section');
            sections.forEach((section) => {
                gsap.fromTo(section,
                    { y: 100, opacity: 0, scale: 0.95 },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.5,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            end: "top 50%",
                            scrub: 1
                        }
                    }
                );
            });

            // Parallax Images
            gsap.utils.toArray('.parallax-img').forEach(img => {
                gsap.to(img, {
                    yPercent: -20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img,
                        scrub: true
                    }
                });
            });

        }, mainRef); // mainRef can be used directly or mainRef.current element
        return () => ctx.revert();
    }, []);

    const achievements = [
        { label: "Successful Alumni", value: "25,000+", icon: <Users /> },
        { label: "Design Awards", value: "150+", icon: <Award /> },
        { label: "Global Placements", value: "99%", icon: <Globe /> },
        { label: "Industry Partners", value: "500+", icon: <Star /> }
    ];

    return (
        <div ref={mainRef} className="bg-white text-slate-900 overflow-x-hidden pt-20 min-h-screen">
            <SEO 
                title="The INSDian Life - Student Stories & Global Community"
                description="What does it mean to be an INSDian? Explore the culture of innovation, student success stories, and our global network of designers and creative disruptors."
                keywords="INSD students, design school life, student success stories, design community India, alumni network, life at INSD"
            />
            {/* 1. Cinematic Hero Section */}
            <section ref={heroRef} className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-[#f3f3f3] rounded-b-[4rem]">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-secondary/5 rounded-full blur-[80px] animate-bounce"></div>
                </div>

                <div className="container relative z-10 px-6 text-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-primary font-black uppercase tracking-[0.5em] text-xs mb-8">The Spirit of Innovation</span>
                        <h1 className="hero-text-zoom text-[12vw] md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter mb-12">
                            WE ARE <br />
                            <span className="text-slate-800 italic font-serif lowercase tracking-normal px-2">Insdians</span>
                        </h1>
                        <p className="max-w-2xl text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-12">
                            A global community of visionaries, industry disruptors, and master creators. Being an INSDian is not just about education; it's about a lifestyle defined by design.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-colors duration-500 shadow-xl">Join the Movement</button>
                            <button className="px-10 py-4 border border-slate-200 text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-colors duration-500">The Legacy</button>
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Marquee Strip */}
                <div className="absolute right-12 top-0 bottom-0 w-px bg-slate-200 hidden md:block">
                    <div className="absolute top-1/4 -right-2 text-[10px] font-black uppercase tracking-widest rotate-90 text-slate-300">EST. 2011 • INNOVATION • GROWTH</div>
                </div>
            </section>

            {/* 2. Impact Stats Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
                        {achievements.map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -10 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:bg-primary/5 transition-all duration-500 mb-6 border border-slate-100">
                                    {React.cloneElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                                </div>
                                <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter mb-2">{item.value}</h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. The Mosaic / Bento Showcase */}
            <section className="py-32 bg-[#f3f3f3] rounded-[4rem]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-xl">
                            <div className="h-1 w-12 bg-primary mb-8"></div>
                            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                                Life in <br /> <span className="text-primary">Motion</span>
                            </h2>
                        </div>
                        <p className="max-w-md text-slate-500 font-medium text-lg leading-relaxed">
                            Peek into the daily pulse of our campuses. From back-stage fashion rushes to late-night design intensives.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-[1200px] md:h-[800px]">
                        {/* Bento Card 1 */}
                        <div className="md:col-span-8 relative rounded-[3rem] overflow-hidden group reveal-section shadow-2xl">
                            <img 
                                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                className="w-full h-full object-cover parallax-img transition-transform duration-700 group-hover:scale-110"
                                alt="Collab"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                                <span className="text-primary font-black uppercase tracking-widest text-xs mb-2">Collaboration</span>
                                <h4 className="text-white text-4xl font-black uppercase tracking-tight">The Boardroom Intras</h4>
                            </div>
                        </div>

                        {/* Bento Card 2 */}
                        <div className="md:col-span-4 relative rounded-[3rem] overflow-hidden group reveal-section shadow-2xl">
                            <img 
                                src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                className="w-full h-full object-cover parallax-img transition-transform duration-700 group-hover:scale-110"
                                alt="Sketching"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                                <span className="text-secondary font-black uppercase tracking-widest text-xs mb-2">Technicals</span>
                                <h4 className="text-white text-3xl font-black uppercase tracking-tight">Precision Matters</h4>
                            </div>
                        </div>

                        {/* Bento Card 3 */}
                        <div className="md:col-span-4 relative rounded-[3rem] overflow-hidden group reveal-section shadow-2xl">
                            <img 
                                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                className="w-full h-full object-cover parallax-img transition-transform duration-700 group-hover:scale-110"
                                alt="Industry"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end text-center items-center">
                                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                                    <MousePointer2 className="text-white" size={20} />
                                </div>
                                <h4 className="text-white text-2xl font-black uppercase tracking-tight">Industry Exposure</h4>
                            </div>
                        </div>

                        {/* Bento Card 4 */}
                        <div className="md:col-span-8 relative rounded-[3rem] overflow-hidden group reveal-section shadow-2xl">
                            <img 
                                src="https://images.pexels.com/photos/3182761/pexels-photo-3182761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                                className="w-full h-full object-cover parallax-img transition-transform duration-700 group-hover:scale-110"
                                alt="Final Show"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent p-12 flex flex-col justify-end">
                                <span className="text-white/40 font-black uppercase tracking-widest text-xs mb-2">Final Showcase</span>
                                <h4 className="text-white text-5xl font-black uppercase tracking-tight">Runway Ready</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Manifesto Section */}
            <section className="py-48 bg-white text-center">
                <div className="container mx-auto px-6">
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        className="max-w-5xl mx-auto"
                    >
                        <Heart className="text-secondary mx-auto mb-12" size={48} fill="currentColor" />
                        <h2 className="text-4xl md:text-7xl font-light italic font-serif leading-tight text-slate-900">
                            "We don't just teach <span className="font-sans italic font-black uppercase not-italic">Design</span>. We cultivate the <span className="text-primary not-italic font-black uppercase">Resilience</span>, <span className="text-secondary not-italic font-black uppercase">Spirit</span>, and <span className="text-indigo-600 not-italic font-black uppercase">Vision</span> required to lead it."
                        </h2>
                        <div className="mt-16 flex flex-col items-center">
                            <div className="h-px w-24 bg-slate-200 mb-6"></div>
                            <span className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">The INSDian Manifesto</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 5. Success Stories Highlight */}
            <section className="py-32 bg-slate-900 text-white rounded-t-[4rem]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-6xl md:text-[10vw] font-black uppercase tracking-tighter leading-none opacity-20 truncate">Transformation</h2>
                        <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tight -mt-[4vw]">Real Stories, Real Icons.</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[1, 2, 3].map((_, i) => (
                            <div key={i} className="group relative pointer-events-auto cursor-pointer">
                                <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl bg-slate-800 border border-white/5">
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60"></div>
                                    <img 
                                        src={`https://images.pexels.com/photos/${3785079 + i}/pexels-photo-${3785079 + i}.jpeg?auto=compress&cs=tinysrgb&w=800`} 
                                        className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                        alt="Alumni"
                                    />
                                </div>
                                <h4 className="text-2xl font-black uppercase mb-1">Priya Sharma</h4>
                                <p className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Senior Designer, Gucci Milan</p>
                                <p className="text-slate-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    "INSD gave me the global perspective I needed to crack the international market. The intensity was worth every moment."
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Strip - KEEP BLACK THEME */}
            <section className="py-24 bg-black text-white">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                    <h2 className="text-5xl font-black uppercase tracking-tighter text-center md:text-left">Ready to define <br /> your future?</h2>
                    <button className="px-12 py-6 bg-white text-black rounded-full font-black uppercase text-sm tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl">
                        Become an INSDian
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Insdian;
