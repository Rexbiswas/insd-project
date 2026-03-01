import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Target, Flame, Sparkles, Zap } from 'lucide-react';
import Footer from '../components/Footer';

const shortCourses = [
    {
        title: "Digital Fashion & Clo3D",
        duration: "8 Weeks",
        desc: "Master 3D garment visualization. Transform physical patterns into hyper-realistic digital prototypes.",
        tags: ["Clo3D", "Virtual Runway", "Pattern Physics"],
        theme: "bg-[#e1f021]", // Electric Lime
        textColor: "text-black",
        colSpan: "col-span-12 md:col-span-7",
        height: "md:h-[400px]"
    },
    {
        title: "Parametric Interiors",
        duration: "10 Weeks",
        desc: "Learn algorithmic design thinking for architecture using Rhino and Grasshopper.",
        tags: ["Rhino 3D", "Grasshopper", "Algorithmic"],
        theme: "bg-[#252525]", 
        textColor: "text-white",
        colSpan: "col-span-12 md:col-span-5",
        height: "md:h-[400px]"
    },
    {
        title: "Creative Coding & UI",
        duration: "6 Weeks",
        desc: "Bridge the gap between visual design and code. Create interactive, generative web experiences.",
        tags: ["HTML/CSS", "JavaScript", "Framer Motion"],
        theme: "bg-[#ffffff]", 
        textColor: "text-black",
        colSpan: "col-span-12 md:col-span-4",
        height: "md:h-[450px]"
    },
    {
        title: "Luxury Brand Strategy",
        duration: "8 Weeks",
        desc: "Deconstruct the business of high-fashion. Learn how heritage brands maintain exclusivity in a digital age.",
        tags: ["Marketing", "Consumer Psychology", "PR"],
        theme: "bg-[#f2f2f2]", 
        textColor: "text-black",
        colSpan: "col-span-12 md:col-span-8",
        height: "md:h-[450px]"
    },
    {
        title: "Unreal Engine For Filmmakers",
        duration: "12 Weeks",
        desc: "Real-time rendering and virtual production techniques used by top Hollywood VFX studios.",
        tags: ["Unreal Engine 5", "Environment Design", "Lighting"],
        theme: "bg-[#e1f021]", 
        textColor: "text-black",
        colSpan: "col-span-12",
        height: "md:h-[350px]"
    }
];

const ScrollingText = () => (
    <div className="flex whitespace-nowrap overflow-hidden py-4 border-y border-white/10 bg-black mix-blend-difference selection:bg-[#e1f021] selection:text-black">
        <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            className="flex gap-8 text-xl md:text-2xl font-black uppercase tracking-widest text-[#e1f021]"
        >
            <span>• RAPID UPSKILLING</span>
            <span>• INTENSIVE BOOTCAMPS</span>
            <span>• INDUSTRY TOOLS</span>
            <span>• FOCUSED PORTFOLIO</span>
            <span>• NO FILLER</span>
            <span>• RAPID UPSKILLING</span>
            <span>• INTENSIVE BOOTCAMPS</span>
            <span>• INDUSTRY TOOLS</span>
            <span>• FOCUSED PORTFOLIO</span>
            <span>• NO FILLER</span>
        </motion.div>
    </div>
);

const ShortTermCourse = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <div ref={containerRef} className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#e1f021] selection:text-black text-[#111]">
            
            {/* Kinetic Type Hero Section */}
            <section className="relative min-h-[90vh] flex flex-col justify-end pt-32 pb-16 px-6 overflow-hidden">
                <motion.div style={{ y: heroY }} className="absolute inset-0 pointer-events-none z-0">
                    {/* Background Noise & Radial Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,240,33,0.1)_0%,transparent_50%)]" />
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />
                </motion.div>

                <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-end gap-12">
                    <div className="flex-1">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-[#e1f021] text-black px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-xs mb-8 shadow-sm"
                        >
                            <Flame size={14} /> High-Velocity Learning
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-7xl md:text-[8rem] lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.85] text-[#111]"
                        >
                            Skill <br/>
                            <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>Sprint.</span>
                        </motion.h1>
                    </div>
                    
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-sm text-right"
                    >
                        <p className="text-[#111]/60 text-lg md:text-xl font-medium leading-relaxed mb-8">
                            Zero filler. Pure application. Master hyper-specific industry tools and workflows in 6 to 12 weeks.
                        </p>
                        <div className="w-16 h-16 rounded-full border border-black/20 flex items-center justify-center ml-auto transform -rotate-45">
                            <ArrowUpRight className="text-[#111] w-8 h-8" />
                        </div>
                    </motion.div>
                </div>
            </section>

            <ScrollingText />

            {/* Asymmetric Bento Grid Section */}
            <section className="py-32 px-4 md:px-8 max-w-[1400px] mx-auto relative z-10">
                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {shortCourses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5, scale: 0.99 }}
                            className={`${course.colSpan} ${course.height} ${course.theme} ${course.textColor} rounded-[2rem] p-8 md:p-12 flex flex-col justify-between group overflow-hidden relative cursor-crosshair shadow-lg border border-black/5`}
                        >
                            {/* Overlay hover effect */}
                            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                            <div className="flex justify-between items-start z-10">
                                <span className={`uppercase tracking-widest text-xs font-bold px-4 py-1.5 rounded-full border ${course.textColor === 'text-white' ? 'border-white/20' : 'border-black/20'}`}>
                                    {course.duration}
                                </span>
                                <div className={`w-12 h-12 rounded-full border flex items-center justify-center transition-transform duration-500 group-hover:scale-110 ${course.textColor === 'text-white' ? 'border-white/20' : 'border-black/20'}`}>
                                    <Target size={20} className="group-hover:rotate-45 transition-transform duration-500" />
                                </div>
                            </div>
                            
                            <div className="z-10 mt-12 md:mt-0">
                                <h3 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-4">
                                    {course.title}
                                </h3>
                                <p className={`text-base md:text-lg max-w-lg mb-8 font-medium ${course.textColor === 'text-white' ? 'text-white/70' : 'text-black/70'}`}>
                                    {course.desc}
                                </p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {course.tags.map((tag, i) => (
                                        <span key={i} className={`text-xs font-bold uppercase tracking-widest px-3 py-1 bg-black/5 rounded-sm ${course.textColor === 'text-white' ? 'bg-white/10' : 'bg-black/10'}`}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Brutalist Call to Action */}
            <section className="bg-[#e1f021] text-black py-40 px-6 text-center select-none">
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <Zap size={64} className="mx-auto mb-10" />
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
                        Upgrade Your <br/> Neural Net.
                    </h2>
                    <p className="text-xl font-bold uppercase tracking-widest text-black/60 mb-12">
                        Next intake begins in 14 days. Limited seats per module.
                    </p>
                    <button className="bg-black text-[#e1f021] px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto shadow-2xl shadow-black/20">
                        Enroll Now <ArrowUpRight size={18} />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default ShortTermCourse;
