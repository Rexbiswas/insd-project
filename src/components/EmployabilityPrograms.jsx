import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Monitor, Briefcase, ArrowRight } from 'lucide-react';

const EmployabilityPrograms = () => {
    const features = [
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Industry Co-Created",
            description: "Built with leading design firms — from training to internships, everything is aligned to real-world design jobs."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Practitioner-Led Training",
            description: "Trainings curated by experienced industry professionals, couture masters, and retail hospitality experts."
        },
        {
            icon: <Monitor className="w-6 h-6" />,
            title: "Immersive Tools",
            description: "Train in design studios and VR-driven labs that mimic real-world high-end industry environments."
        },
        {
            icon: <GraduationCap className="w-6 h-6" />,
            title: "Holistic Learning",
            description: "Holistic learning blends technical design proficiency with vital leadership and soft skills development."
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-white overflow-hidden">
            {/* Soft Ambient Background for White Theme */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-primary/3 rounded-full blur-[150px] animate-blob"></div>
                <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-secondary/3 rounded-full blur-[150px] animate-blob delay-2000"></div>
                {/* Subtle Refined Grid */}
                <div className="absolute inset-0 opacity-[0.02] cyber-grid pointer-events-none brightness-0"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-24 gap-12">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="w-12 h-px bg-primary"></span>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Top Rated Legacy</span>
                        </motion.div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter"
                        >
                            Employability <br />
                            <span className="bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_auto] bg-clip-text text-transparent animate-marquee-slow whitespace-nowrap">Focused Programs</span>
                        </motion.h2>
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative bg-linear-to-r from-primary to-secondary text-white px-14 py-6 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-3">
                            Register Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (index * 0.1) }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 md:p-12 rounded-[2.5rem] bg-slate-50/80 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden h-full"
                        >
                            {/* Inner Glow on Hover */}
                            <div className="absolute -inset-1 bg-linear-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-700 pointer-events-none"></div>

                            <div className="relative z-10 flex flex-col gap-10">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary group-hover:bg-linear-to-br from-primary to-secondary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-lg">
                                    {feature.icon}
                                </div>
                                
                                <div className="space-y-4">
                                    <h3 className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors cursor-default">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-sm">
                                        {feature.description}
                                    </p>
                                </div>
                                
                                <div className="mt-4 flex items-center gap-2 text-primary font-black uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    Explore Program Detail <ArrowRight className="w-3 h-3" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmployabilityPrograms;
