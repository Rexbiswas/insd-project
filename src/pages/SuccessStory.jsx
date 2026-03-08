import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, 
    Filter, 
    ArrowUpRight, 
    Play, 
    Quote, 
    Calendar, 
    User,
    ArrowRight,
    Sparkles,
    Trophy,
    GraduationCap,
    Briefcase,
    ChevronRight
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const SuccessStory = () => {
    const containerRef = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = ["All", "Fashion", "Interior", "Animation", "Graphic", "Management"];

    const stories = [
        {
            id: 1,
            name: "Ananya Sharma",
            course: "Fashion Design",
            year: "2023",
            placement: "Vogue India",
            title: "Reimagining Indian Textiles on the Global Stage",
            excerpt: "How a student project on sustainable khadi led to a featured collection in Milan Fashion Week.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
            category: "Fashion",
            featured: true
        },
        {
            id: 2,
            name: "Rohan Mehra",
            course: "Interior Design",
            year: "2022",
            placement: "Studio Lotus",
            title: "The Architecture of Silence",
            excerpt: "Redefining urban living spaces through minimalist spatial engineering and acoustic mastery.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
            category: "Interior",
            featured: false
        },
        {
            id: 3,
            name: "Priya Das",
            course: "Animation & VFX",
            year: "2024",
            placement: "MPC Studios",
            title: "Simulating Liquid Worlds",
            excerpt: "Mastering complex fluid dynamics that landed a role in a major Hollywood blockbuster sequel.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
            category: "Animation",
            featured: true
        },
        {
            id: 4,
            name: "Vikram Malhotra",
            course: "Graphic Design",
            year: "2023",
            placement: "Landor & Fitch",
            title: "Branding the Future of Web3",
            excerpt: "Creating a visual language for decentralized finance that prioritizes human-centric trust.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
            category: "Graphic",
            featured: false
        },
        {
            id: 5,
            name: "Sanya Gupta",
            course: "Luxury Management",
            year: "2022",
            placement: "LVMH Group",
            title: "The Business of Desire",
            excerpt: "Transitioning from design to strategic consulting for the world's most prestigious luxury brands.",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
            category: "Management",
            featured: false
        },
        {
            id: 6,
            name: "Arjun Reddy",
            course: "Interior Design",
            year: "2023",
            placement: "Architectural Digest",
            title: "Reviving Ancient Vastu in Modern Penthouses",
            excerpt: "Integrating sacred geometry with contemporary luxury to create high-frequency living spaces.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
            category: "Interior",
            featured: false
        }
    ];

    const filteredStories = selectedCategory === "All" 
        ? stories 
        : stories.filter(s => s.category === selectedCategory);

    const featuredStory = stories.find(s => s.featured) || stories[0];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance Animations - Position only to prevent "not showing" issues
            gsap.from(".hero-reveal", {
                y: 60,
                duration: 1.2,
                ease: "power3.out",
                stagger: 0.15
            });

            gsap.from(".story-card", {
                y: 40,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".story-grid",
                    start: "top 85%"
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#f3f3f3] text-slate-900 font-sans overflow-hidden">
            <SEO 
                title="Student Success Stories & Placements - INSD Alumni"
                description="Read about the transformational journeys of INSD students. From classroom projects to global fashion weeks and top-tier placements at Vogue, LVMH, and more."
                keywords="design student success stories, INSD alumni, fashion design placement stories, interior design success, graphic design careers"
            />
            
            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl text-center md:text-left">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] mb-6 md:mb-8"
                        >
                            <Trophy className="w-3 h-3" /> The Wall of Excellence
                        </motion.span>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-black tracking-tighter uppercase leading-[0.85] md:leading-[0.8] mb-8 md:mb-12 hero-reveal">
                            Manifesting <br className="hidden md:block" />
                            <span className="text-transparent stroke-text-slate opacity-20">Ambition</span>
                        </h1>
                        <p className="text-lg md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto md:mx-0 hero-reveal">
                            Beyond certificates and degrees lies the true metric of our success: the trajectories of our creators. Meet the architects of the new aesthetic.
                        </p>
                    </div>
                </div>

                {/* Decorative Elements - Hidden on small mobile to reduce clutter */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-100/30 md:bg-slate-100/50 -skew-x-12 translate-x-1/4 -z-0" />
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-10 -right-10 md:-top-20 md:-right-20 w-40 h-40 md:w-80 md:h-80 rounded-full border border-slate-200 border-dashed opacity-30 md:opacity-50" 
                />
            </section>

            {/* --- FEATURED TRANSFORMATION --- */}
            {featuredStory && (
                <section className="py-12 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="relative rounded-[2.5rem] md:rounded-[4rem] overflow-hidden bg-slate-950 p-1 bg-gradient-to-r from-primary/20 to-secondary/20 shadow-2xl">
                            <div className="bg-slate-950 rounded-[2.4rem] md:rounded-[3.9rem] p-8 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                                <div className="relative group overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] aspect-square lg:aspect-auto h-full min-h-[300px] md:min-h-[500px]">
                                    <img 
                                        src={featuredStory.image} 
                                        className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
                                        alt="Featured Student"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                                        <div className="flex items-center gap-3 md:gap-4 mb-2 md:mb-4">
                                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                                                <Play className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
                                            </div>
                                            <span className="text-[10px] md:text-xs font-black text-white uppercase tracking-widest">Watch Showreel</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-6 md:space-y-10">
                                    <span className="text-primary font-black text-[9px] md:text-xs uppercase tracking-[0.5em] block">STUDENT SPOTLIGHT</span>
                                    <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-tight">
                                        {featuredStory.title}
                                    </h2>
                                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 items-start sm:items-center py-6 border-y border-white/5">
                                        <div className="shrink-0">
                                            <span className="block text-white font-black text-xl md:text-2xl uppercase">{featuredStory.name}</span>
                                            <span className="text-[9px] md:text-[10px] text-white/40 uppercase font-bold tracking-widest">{featuredStory.course}</span>
                                        </div>
                                        <div className="hidden sm:block w-px h-10 bg-white/10" />
                                        <div className="shrink-0">
                                            <span className="block text-white font-black text-xl md:text-2xl uppercase">{featuredStory.placement}</span>
                                            <span className="text-[9px] md:text-[10px] text-white/40 uppercase font-bold tracking-widest">PLACEMENT</span>
                                        </div>
                                    </div>
                                    <p className="text-white/60 text-base md:text-lg font-light leading-relaxed italic">
                                        "{featuredStory.excerpt}"
                                    </p>
                                    <button className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 rounded-full font-black uppercase text-[10px] md:text-xs tracking-widest hover:bg-primary hover:text-white transition-all duration-500">
                                        Read Full Transformation
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* --- STORY FEED --- */}
            <section className="py-20 md:py-40">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 md:mb-24 gap-8 md:gap-12">
                        <div className="flex flex-wrap items-center gap-3 md:gap-6">
                            {categories.map((cat, i) => (
                                <button 
                                    key={i}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-6 py-2 md:px-8 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all ${
                                        selectedCategory === cat 
                                        ? "bg-slate-950 text-white shadow-xl scale-105 md:scale-110" 
                                        : "bg-white text-slate-400 border border-slate-100 hover:border-slate-300"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-80 group">
                            <input 
                                type="text" 
                                placeholder="Search stories..." 
                                className="w-full bg-white border border-slate-100 px-6 py-3 md:px-8 md:py-4 rounded-full text-[10px] md:text-xs font-bold outline-none focus:border-primary/30 transition-all shadow-sm group-hover:shadow-md"
                            />
                            <Search className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-hover:text-primary transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 story-grid">
                        <AnimatePresence mode="popLayout">
                            {filteredStories.map((story) => (
                                <motion.div 
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={story.id}
                                    className="story-card group relative bg-white rounded-[3rem] overflow-hidden border border-slate-50 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] p-4"
                                >
                                    <div className="relative h-[280px] rounded-[2.5rem] overflow-hidden mb-8">
                                        <img 
                                            src={story.image} 
                                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                            alt={story.name}
                                        />
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-slate-950 shadow-lg">
                                            {story.category}
                                        </div>
                                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                                                <ArrowUpRight className="text-primary w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-6 pb-10 space-y-6">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h4 className="text-2xl font-black uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-300">{story.name}</h4>
                                                <div className="flex items-center gap-2 mt-2">
                                                    <Briefcase className="w-3 h-3 text-slate-300" />
                                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{story.placement}</span>
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                                <Sparkles size={18} />
                                            </div>
                                        </div>
                                        <h5 className="text-lg font-black tracking-tight leading-tight uppercase line-clamp-2 italic">
                                            "{story.title}"
                                        </h5>
                                        <div className="pt-6 border-t border-slate-50 flex justify-between items-center">
                                            <div className="flex items-center gap-2">
                                                <GraduationCap className="w-4 h-4 text-primary" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">Class of {story.year}</span>
                                            </div>
                                            <ChevronRight className="text-slate-200 group-hover:text-primary transition-colors group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    <div className="mt-20 text-center">
                        <button className="px-16 py-7 bg-slate-950 text-white rounded-full font-black uppercase text-[10px] tracking-[0.5em] shadow-2xl hover:bg-primary transition-all duration-500 flex items-center gap-6 mx-auto group">
                            LOAD MORE STORIES <div className="w-8 h-px bg-white/30 group-hover:w-12 transition-all" />
                        </button>
                    </div>
                </div>
            </section>

            {/* --- ALUMNI NETWORK --- */}
            <section className="py-20 md:py-40 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                        <div className="relative order-2 lg:order-1">
                            <div className="grid grid-cols-2 gap-4 md:gap-6">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" className="rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl translate-y-6 md:translate-y-12" alt="Alumni Collab" />
                                <div className="space-y-4 md:space-y-6">
                                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" className="rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl" alt="Alumni Workshop" />
                                    <div className="p-6 md:p-10 bg-primary/5 rounded-[1.5rem] md:rounded-[2.5rem] border border-primary/10">
                                        <span className="block text-3xl md:text-4xl font-black text-primary mb-2">5000+</span>
                                        <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-slate-400 leading-relaxed">Active global alumni across 30 countries</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8 md:space-y-10 order-1 lg:order-2">
                            <h2 className="text-4xl md:text-6xl lg:text-[5.5rem] font-black tracking-tighter uppercase leading-[0.9] md:leading-[0.8] text-slate-950">
                                The Alumni <br className="hidden md:block" /> <span className="text-primary italic">Ecosystem</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-500 font-light leading-relaxed">
                                Our relationship doesn't end at graduation. We've built an intricate neural network of professionals who return as mentors, industry partners, and design judges.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-4">
                                {[
                                    "Mentorship for budding creators",
                                    "Exclusive global design summits",
                                    "Lifetime career support",
                                    "Paris/Milan Collab sessions"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 md:gap-6 text-slate-900 group cursor-default">
                                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-primary shrink-0" />
                                        <span className="text-[11px] md:text-sm font-black uppercase tracking-widest group-hover:translate-x-2 transition-all duration-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SuccessStory;
