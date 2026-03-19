import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Award, Globe, Briefcase, 
    ArrowUpRight, ChevronLeft, ChevronRight,
    Sparkles, Linkedin
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Mentors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const mentorData = [
        {
            name: "Chander Shekhar",
            title: "TEDizen & Design Consultant",
            tags: ["NID Alumnus", "Ex-UNICEF", "TEDizen"],
            img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "A veteran in the global design landscape, Chander brings insights from his tenure at UNICEF and his experience as a TEDizen to guide the next generation of social innovators.",
            impact: "Social Impact Design"
        },
        {
            name: "Shivam Takulia",
            title: "Architect & Product Designer",
            tags: ["Co-founder EBB&FLO", "Associate - Inspatia"],
            img: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Bridging the gap between architecture and product engineering. Shivam focuses on spatial fluidity and sustainable manufacturing through his ventures like EBB&FLO.",
            impact: "Sustainable Architecture"
        },
        {
            name: "Harsh Mann",
            title: "Founder & CEO, HMLC",
            tags: ["Luxury Consultant", "CEO - Harsh Mann Consultancy"],
            img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "The authority on luxury branding and heritage ecosystems. Harsh consults for global ultra-premium brands, bringing the 'HMLC' perspective to INSD students.",
            impact: "Luxury Branding"
        },
        {
            name: "Gautam Gupta",
            title: "Co-owner, Asha Gautam",
            tags: ["Founder, Label GG", "Fashion Visionary"],
            img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            desc: "Redefining contemporary Indian couture. As the creative force behind Asha Gautam and Label GG, Gautam mentors students on the intersection of heritage textiles and global retail.",
            impact: "Contemporary Couture"
        }
    ];

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % mentorData.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + mentorData.length) % mentorData.length);

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-slate-900 selection:text-white">
            <SEO 
                title="Industry Mentors | The Visionaries of INSD"
                description="Learn from the legends. INSD's mentor network includes NID alumni, luxury consultants, and award-winning architects who guide our students."
            />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
                <div className="max-w-7xl w-full">
                    <div className="text-center space-y-8 mb-24">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-100 border border-slate-200 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Masterclass Series 2026
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] text-slate-900"
                        >
                            THE <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">MENTORS.</span>
                        </motion.h1>
                        
                        <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium tracking-tight">
                            Guided by the most influential voices in architecture, luxury, and social design. Your creative journey starts with their experience.
                        </p>
                    </div>

                    {/* --- MENTOR SLIDER --- */}
                    <div className="relative group">
                        
                        {/* MAIN SLIDE CONTAINER */}
                        <div className="relative h-[700px] md:h-[750px] w-full rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-slate-50 border border-slate-100">
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 flex flex-col lg:flex-row"
                                >
                                    {/* Left: Portait */}
                                    <div className="w-full lg:w-1/2 h-[350px] lg:h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-t lg:bg-linear-to-r from-black/40 via-transparent to-transparent z-10" />
                                        <motion.img 
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
                                            src={mentorData[currentIndex].img}
                                            alt={mentorData[currentIndex].name}
                                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                                        />
                                        
                                        {/* Name Overlay for Mobile/Tablet */}
                                        <div className="absolute bottom-10 left-10 z-20">
                                            <div className="text-xs font-black uppercase tracking-[0.3em] text-white/60 mb-2">Expert Portfolio</div>
                                            <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                                                {mentorData[currentIndex].name.split(' ')[0]} <br />
                                                <span className="text-primary">{mentorData[currentIndex].name.split(' ')[1]}</span>
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Right: Content Card */}
                                    <div className="w-full lg:w-1/2 h-full p-10 md:p-16 lg:p-24 flex flex-col justify-center bg-white relative">
                                        
                                        <div className="space-y-10">
                                            <div className="space-y-6">
                                                <div className="flex flex-wrap gap-2">
                                                    {mentorData[currentIndex].tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className="px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-500 hover:border-primary/30 transition-colors">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                <div className="space-y-3">
                                                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                                                        {mentorData[currentIndex].title}
                                                    </h2>
                                                    <div className="w-12 h-1 bg-primary rounded-full" />
                                                </div>
                                            </div>

                                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md italic">
                                                "{mentorData[currentIndex].desc}"
                                            </p>

                                            {/* Industry Impact Stat */}
                                            <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Core Expertise</div>
                                                    <div className="text-lg font-black uppercase tracking-tighter text-slate-900">{mentorData[currentIndex].impact}</div>
                                                </div>
                                                <a href="#" className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm">
                                                    <ArrowUpRight size={20} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* NAVIGATION OVERLAY */}
                            <div className="absolute top-[50%] -translate-y-1/2 left-6 right-6 flex justify-between z-30 pointer-events-none lg:static lg:translate-y-0 lg:left-0 lg:right-0">
                                <button 
                                    onClick={handlePrev}
                                    className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50 flex items-center justify-center text-slate-400 hover:text-primary hover:scale-110 transition-all shadow-2xl pointer-events-auto"
                                >
                                    <ChevronLeft size={24} />
                                </button>
                                <button 
                                    onClick={handleNext}
                                    className="w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/50 flex items-center justify-center text-slate-400 hover:text-primary hover:scale-110 transition-all shadow-2xl pointer-events-auto"
                                >
                                    <ChevronRight size={24} />
                                </button>
                            </div>

                            {/* PAGINATION DOTS */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-30 bg-slate-100/30 backdrop-blur-md p-3 rounded-2xl border border-white/20">
                                {mentorData.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`h-2.5 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-12 bg-primary' : 'w-2.5 bg-slate-300 hover:bg-slate-400'}`}
                                    />
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* --- BOTTOM COLLABORATION STRIP --- */}
                    <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 pt-24 border-t border-slate-100 items-start">
                        <div className="space-y-4">
                            <h4 className="text-lg font-black uppercase tracking-tighter text-slate-900">Industry Connection</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                                At INSD, you don't just study design; you interact with the architects of the industry daily.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-lg font-black uppercase tracking-tighter text-primary">Join the Protocol</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                                Become a part of the cohort that learns from these visionaries.
                            </p>
                        </div>
                        <div className="flex md:justify-end gap-6">
                            <Link to="/apply" className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all shadow-2xl active:scale-95">
                                APPLY FOR 2026
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </div>
    );
};

export default Mentors;
