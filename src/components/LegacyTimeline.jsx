import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timelineData = [
    {
        year: "2011",
        title: "INSD IS FOUNDED",
        description: "With a simple idea: Make design education practical. Prepare students to be self-focused and placement ready.",
        image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=400&q=80"
    },
    {
        year: "2013",
        title: "LAUNCH OF CORE PROGRAMS",
        description: "In Fashion, Interior and Graphic Design with studio-based learning at the centre.",
        image: "https://images.unsplash.com/photo-1558583082-409143c794ca?auto=format&fit=crop&w=400&q=80"
    },
    {
        year: "2017",
        title: "INSD WINS RECOGNITION",
        description: "As one of India's promising design schools for its hands-on teaching approach.",
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_hzzhu5hzzhu5hzzh.png?tr=w-400,fo-auto"
    },
    {
        year: "2017",
        title: "SPECIALISED PROGRAMS",
        description: "In Jewellery Design, Textile Design, Photography, Animation & VFX and Beauty & Hair.",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb0ce33e?auto=format&fit=crop&w=400&q=80"
    },
    {
        year: "2018",
        title: "NETWORK EXPANDS",
        description: "To 50+ centres across India, bringing design careers closer to students from tier-2 and tier-3 cities.",
        image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=400&q=80"
    },
    {
        year: "2019",
        title: "INTERNATIONAL STUDY",
        description: "Begin taking students to fashion hubs like Paris, London etc.",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80"
    },
    {
        year: "2023",
        title: "NATIONAL RECOGNITION",
        description: "Shri Yogendra Upadhyay Honourable Education Minister UPI awards INSD as 'The Fastest Growing Design Institute in India'.",
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400,fo-auto"
    },
    {
        year: "2024",
        title: "CURRICULUM UPGRADED",
        description: "With AI, UX/UI and digital-first modules to keep students future-ready.",
        image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=400&q=80"
    },
    {
        year: "2025",
        title: "AWARDED BY TIMES OF INDIA",
        description: "For 'Excellence in Design Education', having trained more than 30,000 students.",
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_u2ubidu2ubidu2ub.png?tr=w-400,fo-auto"
    },
    {
        year: "2026",
        title: "15 YEARS OF INSD",
        description: "Completes 15 years and reaches 75+ centres in 23 states.",
        image: "https://images.unsplash.com/photo-1540317580114-ed684c15ffcc?auto=format&fit=crop&w=400&q=80"
    }
];

const LegacyTimeline = () => {
    const containerRef = useRef(null);
    const lineRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Timeline line growth
            gsap.from(lineRef.current, {
                scaleY: 0,
                transformOrigin: "top",
                scrollTrigger: {
                    trigger: ".timeline-items",
                    start: "top 20%",
                    end: "bottom 80%",
                    scrub: true
                }
            });

            // Fade in items
            gsap.utils.toArray(".timeline-item").forEach((item) => {
                gsap.from(item, {
                    opacity: 0,
                    x: 50,
                    duration: 1,
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Counter animation
            gsap.from(".stat-number", {
                textContent: 0,
                duration: 2,
                ease: "power2.out",
                snap: { textContent: 1 },
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".stats-section",
                    start: "top 80%",
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-white py-24 md:py-32 px-4 md:px-12 overflow-hidden">
            
            {/* Main Header & Graphic Layout */}
            <div className="max-w-7xl mx-auto mb-20 md:mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    
                    {/* Left: Titles & Floating Graphic */}
                    <div className="relative">
                        <div className="mb-12">
                            <span className="block text-primary font-bold uppercase tracking-widest text-sm mb-4">Establishing a Dynasty</span>
                            <div className="flex flex-col">
                                <span className="text-[15rem] md:text-[18rem] font-black leading-none text-slate-100 absolute -top-20 -left-10 -z-10 select-none">
                                    15
                                </span>
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
                                    <span className="block">Years of</span>
                                    <span className="text-primary italic font-serif lowercase tracking-normal">Legacy</span>
                                </h2>
                            </div>
                            <div className="max-w-md border-l-4 border-primary pl-6 py-2">
                                <p className="text-slate-600 text-lg md:text-xl font-medium uppercase tracking-tighter leading-tight">
                                    Nurturing Creative Talent.<br />Shaping Design Futures.
                                </p>
                            </div>
                        </div>

                        {/* Flowing Graphic Image (from user mockup style) */}
                        <div className="relative mt-20 opacity-90 transition-transform hover:scale-105 duration-700">
                            <img 
                                src="https://images.pexels.com/photos/331684/pexels-photo-331684.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                alt="Design Excellence" 
                                className="w-[80%] h-auto object-contain rounded-2xl shadow-2xl skew-y-3"
                            />
                            <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 scale-125 opacity-20"></div>
                        </div>
                    </div>

                    {/* Right: Timeline */}
                    <div className="relative pl-8 md:pl-16">
                        {/* Vertical Timeline Line */}
                        <div ref={lineRef} className="absolute left-0 top-0 w-px h-full bg-slate-200 z-0"></div>
                        <div className="absolute left-[-2px] top-0 w-1 h-32 bg-linear-to-b from-primary to-transparent z-10"></div>

                        <div className="timeline-items space-y-16 py-10">
                            {timelineData.map((item, index) => (
                                <div key={index} className="timeline-item relative group">
                                    {/* Timeline Node */}
                                    <div className="absolute left-[-37px] md:left-[-69px] top-2 w-4 h-4 rounded-full bg-white border-2 border-primary z-20 group-hover:scale-150 group-hover:bg-primary transition-all duration-300">
                                        <div className="w-full h-full bg-primary/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                                        {/* Text Side */}
                                        <div className="lg:col-span-8">
                                            <div className="flex items-baseline gap-3 mb-2">
                                                <span className="text-2xl font-black text-slate-300">{item.year}</span>
                                                <span className="h-px w-8 bg-slate-200"></span>
                                                <h4 className="text-sm font-black uppercase tracking-widest text-slate-800">{item.title}</h4>
                                            </div>
                                            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                                                {item.description}
                                            </p>
                                        </div>
                                        
                                        {/* Image Side */}
                                        <div className="lg:col-span-4 self-center">
                                            <div className="relative overflow-hidden rounded-lg aspect-video shadow-lg group-hover:shadow-primary/20 transition-all duration-500">
                                                <img 
                                                    src={item.image} 
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                                                    alt={item.title} 
                                                />
                                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Stats Section: Our Legacy in Numbers */}
            <div className="stats-section mt-20 pt-20 border-t border-slate-100">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400">Our Legacy in Numbers</span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24">
                        
                        {/* Excellence */}
                        <div className="flex flex-col items-center group">
                            <div className="mb-6 p-4 bg-slate-50 rounded-full group-hover:bg-primary/10 transition-colors">
                                <GraduationCap className="w-10 h-10 text-primary" />
                            </div>
                            <div className="text-5xl md:text-7xl font-black text-slate-900 leading-none flex items-center mb-2">
                                <span className="stat-number">15</span>
                                <span className="text-primary text-4xl mb-6 ml-1">+</span>
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Years of Excellence</span>
                        </div>

                        {/* Students Trained */}
                        <div className="flex flex-col items-center group">
                            <div className="mb-6 p-4 bg-slate-50 rounded-full group-hover:bg-primary/10 transition-colors">
                                <Users className="w-10 h-10 text-primary" />
                            </div>
                            <div className="text-5xl md:text-7xl font-black text-slate-900 leading-none flex items-center mb-2">
                                <span className="stat-number">30000</span>
                                <span className="text-primary text-4xl mb-6 ml-1">+</span>
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Students Trained</span>
                        </div>

                        {/* Centres */}
                        <div className="flex flex-col items-center group">
                            <div className="mb-6 p-4 bg-slate-50 rounded-full group-hover:bg-primary/10 transition-colors">
                                <MapPin className="w-10 h-10 text-primary" />
                            </div>
                            <div className="text-5xl md:text-7xl font-black text-slate-900 leading-none flex items-center mb-2">
                                <span className="stat-number">75</span>
                                <span className="text-primary text-4xl mb-6 ml-1">+</span>
                            </div>
                            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 text-center">Centres Across India</span>
                        </div>

                    </div>
                </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-screen bg-linear-to-l from-primary/5 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl pointer-events-none"></div>
            
        </section>
    );
};

export default LegacyTimeline;
