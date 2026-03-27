import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    ArrowUpRight, ChevronLeft, ChevronRight,
    PlayCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';


const Mentors = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const mentorData = [
        {
            name: "Sunjey Aggarwal",
            title: "Founder & Chairman, INSD",
            tags: ["Visionary Leader", "Educational Pioneer", "Chairman"],
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20Sunjey%20sir%20.jpeg",
            desc: "The visionary behind INSD's global footprint. Sunjey has dedicated decades to revolutionizing design education in India, bridging the gap between local talent and international standards.",
            impact: "Global Design Vision"
        },
        {
            name: "Pranav Raj Aggarwal",
            title: "CEO, INSD",
            tags: ["Global Strategy", "Tech Optimist", "Executive Board"],
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20pranav%20sir%20.jpeg",
            desc: "Driving the next wave of innovation at INSD. Pranav focuses on integrating emerging technologies and international alliances into the core curriculum for 21st-century designers.",
            impact: "Future Tech & Strategy"
        },
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
        <div className="bg-white min-h-screen font-sans selection:bg-slate-900 selection:text-white overflow-x-hidden">
            <SEO 
                title="Industry Mentors | The Visionaries of INSD"
                description="Learn from the legends. INSD's mentor network includes NID alumni, luxury consultants, and award-winning architects who guide our students."
            />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
                <div className="max-w-7xl w-full">
                    <div className="text-center space-y-8 mb-24">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-slate-50 border border-slate-200 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-primary"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            Masterclass Series 2026
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.8] text-slate-900"
                        >
                            THE <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">MENTORS.</span>
                        </motion.h1>
                        
                        <p className="text-slate-500 max-w-xl mx-auto text-lg font-medium tracking-tight">
                            Guided by the most influential voices in architecture, luxury, and social design. Your creative journey starts with their experience.
                        </p>
                    </div>

                    {/* --- PREMIUM MENTOR SLIDER --- */}
                    <div className="relative max-w-6xl mx-auto">
                        
                        <div className="relative h-auto min-h-[650px] md:h-[700px] w-full rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-white border border-slate-100 flex flex-col lg:flex-row group/card">
                            
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex flex-col lg:flex-row w-full h-full"
                                >
                                    {/* Left: Mentor Visual */}
                                    <div className="w-full lg:w-1/2 h-[400px] lg:h-full relative overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10" />
                                        <motion.img 
                                            initial={{ scale: 1.1 }}
                                            animate={{ scale: 1 }}
                                            transition={{ duration: 1.2 }}
                                            src={mentorData[currentIndex].img}
                                            alt={mentorData[currentIndex].name}
                                            className="w-full h-full object-cover transition-all duration-700"
                                        />
                                        
                                        {/* Name Overlay */}
                                        <div className="absolute bottom-12 left-12 z-20">
                                            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-white/50 mb-3">Expert Portfolio</div>
                                            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                                                {mentorData[currentIndex].name.split(' ')[0]} <br />
                                                <span className="text-primary">{mentorData[currentIndex].name.split(' ')[1]}</span>
                                            </h3>
                                        </div>

                                        {/* Prev Button Overlay */}
                                        <button 
                                            onClick={handlePrev}
                                            className="absolute top-8 left-8 w-24 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all z-30 group-hover/card:opacity-100 opacity-0 transform -translate-x-4 group-hover/card:translate-x-0"
                                        >   
                                            <ChevronLeft size={20} />
                                            Previous
                                        </button>
                                    </div>

                                    {/* Right: Mentor Details */}
                                    <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center bg-white relative">
                                        
                                        {/* Next Button Overlay */}
                                        <button 
                                            onClick={handleNext}
                                            className="absolute top-8 right-8 w-24 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white transition-all z-30 group-hover/card:opacity-100 opacity-0 transform translate-x-4 group-hover/card:translate-x-0"
                                        >
                                            Next
                                        <ChevronRight size={20} />
                                        </button>

                                        <div className="space-y-10">
                                            <div className="space-y-6">
                                                <div className="flex flex-wrap gap-3">
                                                    {mentorData[currentIndex].tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className="px-5 py-2 border border-slate-100 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-400">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                <div className="space-y-4">
                                                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-[0.95]">
                                                        {mentorData[currentIndex].title}
                                                    </h2>
                                                    <div className="w-16 h-1 bg-primary rounded-full transition-all group-hover/card:w-24" />
                                                </div>
                                            </div>

                                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-md italic">
                                                "{mentorData[currentIndex].desc}"
                                            </p>

                                            <div className="pt-10 border-t border-slate-50 flex items-center justify-between">
                                                <div className="space-y-2">
                                                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-300">Core Expertise</div>
                                                    <div className="text-xl font-black uppercase tracking-tighter text-slate-900">{mentorData[currentIndex].impact}</div>
                                                </div>
                                                <button className="w-14 h-14 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white hover:border-primary transition-all group/btn active:scale-95">
                                                    <ArrowUpRight size={24} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            {/* PROGRESS INDICATOR (Positioned at bottom center of the entire card) */}
                            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-3 rounded-full border border-slate-100 dark:border-white/10 shadow-lg">
                                {mentorData.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentIndex(i)}
                                        className={`h-2 rounded-full transition-all duration-700 ${currentIndex === i ? 'w-10 bg-primary' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
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
                            <h4 className="text-lg font-black uppercase tracking-tighter text-secondary">Join the Protocol</h4>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-medium">
                                Become a part of the cohort that learns from these visionaries.
                            </p>
                        </div>
                        <div className="flex md:justify-end gap-6">
                            <Link to="/apply" className="px-12 py-5 bg-slate-900 text-white rounded-3xl font-black uppercase text-xs tracking-widest hover:bg-primary transition-all shadow-2xl active:scale-95">
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
