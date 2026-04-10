import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, BookOpen, GraduationCap, Briefcase, Globe } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const programs = [
    {
        title: "M.Sc Fashion Design & Technology",
        duration: "2 Years",
        focus: ["Advanced Couture", "Sustainable Supply Chain", "Fashion Tech Integration", "Global Forecasting"],
        desc: "A rigorous program designed to evolve skilled designers into visionary creative directors, merging traditional craftsmanship with cutting-edge fashion technology.",
        color: "bg-[#f4f0ec]"
    },
    {
        title: "M.Sc Interior Architecture",
        duration: "2 Years",
        focus: ["Parametric Design", "Urban Interiorism", "Advanced Materials", "Spatial Psychology"],
        desc: "Transforming the way we interact with space. This master's degree delves into complex architectural challenges, sustainable environments, and futuristic design principles.",
        color: "bg-[#e8e9ea]"
    },
    {
        title: "M.Sc Graphic & Animation Design",
        duration: "2 Years",
        focus: ["Motion Graphics 3D", "Brand Identity Systems", "VFX Architecture", "UI/UX Mastery"],
        desc: "Push the boundaries of visual communication. This intensive curriculum bridges the gap between static design and fully immersive digital environments.",
        color: "bg-[#f1f3f5]"
    },
    {
        title: "MBA Luxury Brand Management",
        duration: "2 Years",
        focus: ["Luxury Economics", "Heritage Marketing", "Retail Strategy", "Consumer Behavior"],
        desc: "The pinnacle of fashion business education. Learn to navigate and lead within the exclusive and high-stakes environment of global luxury brands.",
        color: "bg-[#eef2f6]"
    }
];

const StickyCards = () => {
    return (
        <section className="relative w-full pb-40">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="mb-24 md:mb-40">
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-7xl font-bold tracking-tighter text-[#111] max-w-4xl"
                    >
                        Master disciplines designed for <span className="italic font-serif text-black/40">industry dominance.</span>
                    </motion.h2>
                </div>

                <div className="flex flex-col gap-12 md:gap-24 relative space-y-24">
                    {programs.map((prog, index) => {
                        return (
                            <div 
                                key={index} 
                                className="sticky top-32 w-full origin-top"
                                style={{ zIndex: index + 10 }}
                            >
                                <motion.div 
                                    initial={{ opacity: 0, y: 100 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ margin: "-100px" }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className={`${prog.color} p-8 md:p-16 rounded-4xl md:rounded-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.03)] border border-black/5 flex flex-col lg:flex-row gap-12 lg:gap-24 justify-between h-auto lg:h-[60vh]`}
                                >
                                    <div className="max-w-xl flex flex-col justify-between h-full">
                                        <div>
                                            <p className="text-sm font-bold uppercase tracking-widest text-black/40 mb-4 flex items-center gap-3">
                                                <span className="w-8 h-px bg-black/40"></span>
                                                {prog.duration} Program
                                            </p>
                                            <h3 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111] leading-[0.9]">
                                                {prog.title}
                                            </h3>
                                        </div>
                                        <p className="text-lg md:text-xl text-[#333] font-medium leading-relaxed mt-8 lg:mt-0">
                                            {prog.desc}
                                        </p>
                                    </div>
                                    
                                    <div className="flex-1 flex flex-col justify-end">
                                        <div className="space-y-4 w-full">
                                            <p className="text-xs font-bold uppercase tracking-widest text-[#111] mb-6 border-b border-black/10 pb-4">
                                                Core Disciplines
                                            </p>
                                            {prog.focus.map((item, i) => (
                                                <div key={i} className="flex items-center justify-between group cursor-pointer">
                                                    <span className="text-2xl md:text-3xl font-bold text-[#111]/60 group-hover:text-[#111] transition-colors">{item}</span>
                                                    <ArrowUpRight className="text-[#111]/20 group-hover:text-[#111] transition-colors translate-y-2 group-hover:translate-y-0 duration-300" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const Postgraduate = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
    const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
    const opacityFade = useTransform(heroScroll, [0, 0.8], [1, 0]);

    return (
        <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-black selection:text-white">
            <SEO 
                title="Postgraduate Design Degrees | M.Des India - Masters in Fashion, Interior, MBA"
                description="Advance your expertise with INSD's M.Des and specialized postgraduate programs. Join India's top design school for M.Sc in Fashion, Interior, and MBA in Luxury Brand Management."
                keywords="postgraduate design courses, M.Des India, master of design India, MBA luxury brand management, fashion management courses India, design research programs"
            />
            
            {/* Elegant Hero Section */}
            <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#111]">
                <motion.div 
                    style={{ y: heroImgY, opacity: opacityFade }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2669&auto=format&fit=crop" 
                        alt="Postgraduate Campus"
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-[#111]/30 via-transparent to-[#fcfcfc]" />
                </motion.div>

                <motion.div 
                    style={{ y: heroTextY }}
                    className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 md:pt-32"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex items-center justify-center gap-4 mb-8"
                    >
                        <span className="w-12 h-px bg-white/30"></span>
                        <span className="text-sm font-bold uppercase tracking-[0.3em] text-white/70">Master's Division</span>
                        <span className="w-12 h-px bg-white/30"></span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter text-white leading-[0.85] mix-blend-difference"
                    >
                        Define <br/> <span className="italic font-serif font-light text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}>The Future.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-12 text-white/60 text-lg md:text-xl max-w-2xl mx-auto font-medium"
                    >
                        Highly specialized postgraduate programs for those who refuse to follow trends, and instead choose to create them.
                    </motion.p>
                </motion.div>
            </section>

            {/* Impact Metric Bar */}
            <section className="bg-white border-y border-black/10 relative z-20">
                <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between divide-y md:divide-y-0 md:divide-x divide-black/10">
                    <div className="py-6 md:py-0 md:px-12 flex-1 flex flex-col items-center text-center">
                        <GraduationCap className="w-8 h-8 text-black/20 mb-4" />
                        <h4 className="text-4xl font-black text-[#111] tracking-tighter">100%</h4>
                        <p className="text-xs uppercase tracking-widest text-[#111]/50 font-bold mt-2">Placement Focus</p>
                    </div>
                    <div className="py-6 md:py-0 md:px-12 flex-1 flex flex-col items-center text-center">
                        <Globe className="w-8 h-8 text-black/20 mb-4" />
                        <h4 className="text-4xl font-black text-[#111] tracking-tighter">Paris</h4>
                        <p className="text-xs uppercase tracking-widest text-[#111]/50 font-bold mt-2">Exchange Program</p>
                    </div>
                    <div className="py-6 md:py-0 md:px-12 flex-1 flex flex-col items-center text-center">
                        <Briefcase className="w-8 h-8 text-black/20 mb-4" />
                        <h4 className="text-4xl font-black text-[#111] tracking-tighter">Top 1%</h4>
                        <p className="text-xs uppercase tracking-widest text-[#111]/50 font-bold mt-2">Industry Mentors</p>
                    </div>
                </div>
            </section>

            {/* Philosophy Text Split */}
            <section className="py-32 md:py-52 px-6">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.h2 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111] leading-[1.1]"
                    >
                        Our postgraduate curriculum is not about absorbing existing knowledge. <span className="text-black/30">It is a rigorous pursuit of creating entirely new frameworks in design & architecture.</span>
                    </motion.h2>
                </div>
            </section>

            {/* The Sticky Cards Masters Programs */}
            <StickyCards />

            {/* Application Banner */}
            <section className="bg-[#111] text-white py-40 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 blur-xl pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-white rounded-full mix-blend-overlay"></div>
                </div>
                
                <div className="max-w-5xl mx-auto text-center relative z-10">
                    <motion.h2 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8]"
                    >
                        Elevate <br/> <span className="italic font-serif font-light text-white/50">Your Craft.</span>
                    </motion.h2>
                    <p className="mt-10 text-white/50 text-xl font-medium max-w-xl mx-auto">Admissions for the 2025/2026 academic master's cohort are highly selective.</p>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-16 bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all flex items-center gap-4 mx-auto"
                    >
                        Begin Application <ArrowUpRight size={18} />
                    </motion.button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Postgraduate;
