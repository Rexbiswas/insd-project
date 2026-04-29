import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Briefcase, Rocket } from 'lucide-react';

const WhyInsd = () => {
    const sectionRef = useRef(null);

    const pillars = [
        {
            title: "Fast-Paced Learning",
            icon: Zap,
            desc: "In the fast-moving world of design, speed is strategy. Our curriculum is compressed for maximum impact, delivering years of technical mastery in a high-intensity format designed for the modern industry pace.",
            tag: "Speed",
            color: "blue"
        },
        {
            title: "Skill-Based Education",
            icon: Target,
            desc: "Theoretical knowledge is only half the battle. We focus on hard, market-demanded skills and technical precision, ensuring every student graduates with a professional portfolio that speaks for itself.",
            tag: "Mastery",
            color: "orange"
        },
        {
            title: "Placement-Focused Training",
            icon: Briefcase,
            desc: "Our ecosystem is built for your arrival. Through direct hiring partnerships and intensive professional grooming, we ensure a seamless transition from the classroom to the world's leading design houses.",
            tag: "Career",
            color: "emerald"
        },
        {
            title: "Career & Entrepreneurship Ready",
            icon: Rocket,
            desc: "Whether you aspire to lead global brands or disrupt the market with your own venture, we provide the leadership mindset and business acumen required to dominate the global design landscape.",
            tag: "Leadership",
            color: "purple"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 bg-[#f3f3f3] overflow-hidden selection:bg-primary selection:text-white">
            {/* SVG Gradient Definition */}
            <svg width="0" height="0" className="absolute">
                <defs>
                    <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#db3436" />
                        <stop offset="100%" stopColor="#134a84" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Philosophical Background Accents */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-slate-50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-24 md:mb-32">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Our Foundation</span>
                    </div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-[0.8] mb-12"
                    >
                        Why Students <br />
                        <span className="text-slate-800 italic font-serif">Choose</span> INSD
                    </motion.h2>

                    <div className="flex items-end justify-between">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-2xl"
                        >
                            <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900 mb-6">
                                The Four Pillars of <br /> Excellence:
                            </h3>
                            <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                                We've redefined design education by focusing on what truly matters: your transition from a student to a global professional leader.
                            </p>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {pillars.map((pillar, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-100 hover:border-primary/20 transition-all duration-700 hover:shadow-2xl hover:shadow-slate-200/50 flex flex-col justify-between h-full"
                        >
                            <div className="relative z-10">
                                {/* Icon & Number */}
                                <div className="flex items-start justify-between mb-12">
                                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary transition-all duration-500 shadow-sm border border-slate-100 group-hover:border-primary/20">
                                        <pillar.icon size={32} stroke="url(#icon-gradient)" className="group-hover:stroke-white transition-all duration-500" />
                                    </div>
                                </div>

                                {/* Tag */}
                                <div className="mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                        {pillar.tag}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl md:text-2xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-6 uppercase">
                                    {pillar.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed group-hover:text-slate-600 transition-colors">
                                    {pillar.desc}
                                </p>
                            </div>

                            {/* Hover Indicator */}
                            <div className="mt-12 flex items-center gap-4 border-t border-slate-50 pt-8 group-hover:border-primary/10 transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-colors">
                                    INSD Standard
                                </span>
                            </div>

                            {/* Background Accent */}
                            <div className={`absolute bottom-0 right-0 w-32 h-32 bg-${pillar.color}-500/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyInsd;
