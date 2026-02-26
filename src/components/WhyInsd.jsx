import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Briefcase, GraduationCap } from 'lucide-react';
import PillarCard from './PillarCard';

const WhyInsd = () => {
    const sectionRef = useRef(null);

    const pillars = [
        {
            title: "Fast-Paced Learning",
            icon: <Zap className="w-7 h-7" />,
            desc: "In the fast-moving world of design, speed is strategy. Our curriculum is compressed for maximum impact, delivering years of technical mastery in a high-intensity format designed for the modern industry pace.",
            tag: "Speed",
            color: "from-blue-500/10 to-transparent"
        },
        {
            title: "Skill-Based Education",
            icon: <Target className="w-7 h-7" />,
            desc: "Theoretical knowledge is only half the battle. We focus on hard, market-demanded skills and technical precision, ensuring every student graduates with a professional portfolio that speaks for itself.",
            tag: "Mastery",
            color: "from-orange-500/10 to-transparent"
        },
        {
            title: "Placement-Focused Training",
            icon: <Briefcase className="w-7 h-7" />,
            desc: "Our ecosystem is built for your arrival. Through direct hiring partnerships and intensive professional grooming, we ensure a seamless transition from the classroom to the world's leading design houses.",
            tag: "Career",
            color: "from-emerald-500/10 to-transparent"
        },
        {
            title: "Career & Entrepreneurship Ready",
            icon: <GraduationCap className="w-7 h-7" />,
            desc: "Whether you aspire to lead global brands or disrupt the market with your own venture, we provide the leadership mindset and business acumen required to dominate the global design landscape.",
            tag: "Leadership",
            color: "from-purple-500/10 to-transparent"
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-32 md:py-48 bg-white overflow-hidden selection:bg-primary selection:text-white">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} pillar={pillar} index={index} />
                    ))}
                </div>

                {/* Bottom Stats or CTA Strip */}
                <div className="mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-end gap-12 opacity-80">
                    <div className="max-w-md">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">India's Design Powerhouse</p>
                        <h4 className="text-2xl font-black text-slate-900">National Award-Winning Industry Disruptors.</h4>
                    </div>
                    <div className="flex gap-16">
                        <div className="text-center md:text-left">
                            <p className="text-4xl font-black text-slate-900 tracking-tighter mb-1">99%</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Career Success</p>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-4xl font-black text-slate-900 tracking-tighter mb-1">500+</p>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Global Partners</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyInsd;
