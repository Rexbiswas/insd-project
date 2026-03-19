import React from 'react';
import { motion } from 'framer-motion';
import { 
    Award, Globe, Users, Sparkles, 
    ArrowUpRight, Target, ShieldCheck, Zap,
    History, Landmark, Star, Medal
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Legacy = () => {
    const milestones = [
        {
            year: "2011",
            title: "The Inception",
            desc: "INSD was founded with a singular vision: to democratize premium design education across India.",
            icon: Landmark,
            color: "text-blue-500",
            bg: "bg-blue-50"
        },
        {
            year: "2015",
            title: "Pan-India Expansion",
            desc: "Reached a milestone of 50+ campuses, becoming one of the fastest-growing design networks.",
            icon: Globe,
            color: "text-primary",
            bg: "bg-primary/5"
        },
        {
            year: "2018",
            title: "Global Alliances",
            desc: "Formalized partnerships with elite design schools in Paris and London, enabling the 'Go Global' vision.",
            icon: Zap,
            color: "text-secondary",
            bg: "bg-secondary/5"
        },
        {
            year: "2021",
            title: "Decade of Excellence",
            desc: "Celebrated 10 years with over 10,000 active alumni leading top creative studios worldwide.",
            icon: Award,
            color: "text-amber-500",
            bg: "bg-amber-50"
        },
        {
            year: "2026",
            title: "The Legacy Evolves",
            desc: "Integrating AI-driven design and sustainable couture into our core pedagogy for the next 15 years.",
            icon: Sparkles,
            color: "text-emerald-500",
            bg: "bg-emerald-50"
        }
    ];

    const stats = [
        { label: "Years of Design", value: "15+" },
        { label: "Creative Alumni", value: "25k+" },
        { label: "Global Partners", value: "12+" },
        { label: "Design Awards", value: "150+" }
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            <SEO 
                title="15 Years of Legacy | International School of Design"
                description="Explore the 15-year journey of INSD. From our inception in 2011 to becoming a global design powerhouse with 50+ campuses across India."
            />

            {/* --- HERO SECTION --- */}
            <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                {/* Background Text Overlay */}
                <div className="absolute top-40 right-0 pointer-events-none select-none opacity-[0.03]">
                    <h2 className="text-[20rem] font-black uppercase tracking-tighter leading-none">LEGACY</h2>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-[10px] font-black uppercase tracking-[0.4em] text-primary"
                        >
                            Since 2011
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]"
                        >
                            15 YEARS. <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-slate-500 to-secondary italic">ONE VISION.</span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl"
                        >
                            A decade and a half of redefining creativity. We've built an ecosystem where heritage meets innovation, and students become industry leaders.
                        </motion.p>
                    </div>

                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + (idx * 0.1) }}
                                className="space-y-1"
                            >
                                <div className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
                                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TIMELINE SECTION --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="space-y-32">
                        {milestones.map((milestone, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}
                            >
                                {/* Year & Visual */}
                                <div className="w-full md:w-1/2 flex justify-center items-center">
                                    <div className="relative group">
                                        <div className={`absolute inset-0 ${milestone.bg} rounded-[3rem] rotate-3 group-hover:rotate-6 transition-transform duration-500`} />
                                        <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-[3rem] bg-white border border-slate-100 shadow-2xl flex flex-col items-center justify-center space-y-6">
                                            <milestone.icon size={64} className={milestone.color} />
                                            <div className="text-6xl font-black text-slate-900 tracking-tighter">{milestone.year}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                                    <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-slate-900 leading-none">
                                        {milestone.title}
                                    </h3>
                                    <p className="text-slate-500 text-lg leading-relaxed font-medium">
                                        {milestone.desc}
                                    </p>
                                    <div className="pt-4">
                                        <div className={`w-12 h-1 ${milestone.bg.replace('bg-', 'bg-')} bg-current opacity-30 rounded-full mx-auto md:mx-0`} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- IMPACT QUOTE --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[100px] rounded-full" />
                <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
                    <Medal className="mx-auto text-primary" size={48} />
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-tight italic">
                        "Design is not just what it looks like and feels like. Design is how it works... for the next 15 years and beyond."
                    </h2>
                    <div className="space-y-2">
                        <div className="text-xs font-black uppercase tracking-[0.4em] text-primary">Director's Vision</div>
                        <div className="text-lg font-bold">Mr. Sunjey Aggarwal</div>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24">
                <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">
                    <div className="space-y-4">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]">
                            BECOME THE <br /> <span className="text-primary italic">NEXT CHAPTER.</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-medium max-w-sm mx-auto leading-relaxed">
                            Join the ranks of award-winning designers shaping the global creative economy.
                        </p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <Link to="/apply" className="px-16 py-6 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-[0.2em] shadow-2xl hover:bg-primary transition-all active:scale-95">
                            START YOUR JOURNEY
                        </Link>
                        <Link to="/courses" className="px-16 py-6 bg-white border-2 border-slate-900 text-slate-900 rounded-full font-black uppercase text-xs tracking-[0.2em] hover:bg-slate-50 transition-all active:scale-95">
                            EXPLORE MAJORS
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Legacy;
