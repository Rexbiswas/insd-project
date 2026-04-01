import React from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, Monitor, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const EmployabilityPrograms = () => {
    const { openAdmissionModal } = useAdmissionModal();
    const features = []; // Removed old detailed features

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
                            className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.05] tracking-tighter mb-8"
                        >
                            Employability <br />
                            <span className="bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_auto] bg-clip-text text-transparent animate-marquee-slow whitespace-nowrap">Focused Programs</span>
                        </motion.h2>

                        {/* New Content: Tagline & Bullets */}
                        <div className="space-y-6">
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-xl md:text-2xl font-black text-primary/80 uppercase tracking-widest italic"
                            >
                                Built for Industry. Designed for Careers.
                            </motion.p>
                            
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    "100% Placement Support",
                                    "Nationally Recognized & Awarded Institute",
                                    "15+ Years of Proven Creative Excellence"
                                ].map((bullet, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        className="flex items-center gap-3 group/bullet"
                                    >
                                        <div className="p-1 bg-primary/10 rounded-full text-primary group-hover/bullet:bg-primary group-hover/bullet:text-white transition-colors">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="text-slate-700 font-bold text-lg md:text-xl tracking-tight">{bullet}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <motion.button 
                        onClick={() => openAdmissionModal()}
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

                {/* Grid removed as per user request */}
            </div>
        </section>
    );
};

export default EmployabilityPrograms;
