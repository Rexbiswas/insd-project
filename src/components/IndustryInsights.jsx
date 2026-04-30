import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Rocket, ArrowUpRight, Zap } from 'lucide-react';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const IndustryInsights = () => {
    const { openAdmissionModal } = useAdmissionModal();

    const stats = [
        {
            value: "20 Lakh+",
            label: "Designers needed by 2030",
            icon: <Sparkles className="text-primary" />,
            subtext: "Massive talent gap in creative sectors"
        },
        {
            value: "USD 100B",
            label: "Creative industry growth",
            icon: <TrendingUp className="text-emerald-500" />,
            subtext: "Economic explosion in Design & Arts"
        },
        {
            value: "1 Crore",
            label: "Design careers emerging",
            icon: <Rocket className="text-secondary" />,
            subtext: "New-age roles in Digital & Physical spaces"
        }
    ];

    return (
        <section id="why-design" className="relative py-16 md:py-24 bg-white overflow-hidden group/section">
            {/* Soft Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/2 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/2 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="max-w-4xl mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-px bg-primary"></div>
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">The Creative Revolution</span>
                    </motion.div>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-5xl md:text-8xl font-black text-slate-950 leading-[0.9] tracking-tighter mb-8"
                    >
                        WHY DESIGN? <br />
                        <span className="text-primary italic font-serif">& WHY NOW?</span>
                    </motion.h2>

                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight leading-tight">
                            The future of design is not coming. <span className="text-primary">It’s here.</span>
                        </h3>
                        <p className="text-xl text-slate-400 font-medium max-w-2xl leading-relaxed border-l-4 border-slate-100 pl-8">
                            India’s creative economy is exploding — from fashion & interiors to digital & content. 
                            The era of the creative professional has arrived.
                        </p>
                    </motion.div>
                </div>

                {/* Impact Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group/card relative h-full"
                        >
                            <div className="relative h-full bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] transition-all duration-700 hover:bg-white hover:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.1)] hover:border-primary/20 overflow-hidden">
                                {/* Design Accent */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl group-hover/card:bg-primary/10 transition-colors"></div>
                                
                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-10 group-hover/card:scale-110 transition-transform duration-500">
                                        {stat.icon}
                                    </div>
                                    
                                    <h4 className="text-4xl md:text-5xl font-black text-slate-950 tracking-tighter mb-4 leading-none group-hover:card:text-primary transition-colors">
                                        {stat.value}
                                    </h4>
                                    
                                    <div className="flex-1">
                                        <p className="text-lg font-black uppercase tracking-wide text-slate-900 mb-2 leading-tight">
                                            {stat.label}
                                        </p>
                                        <p className="text-slate-500 font-medium text-sm">
                                            {stat.subtext}
                                        </p>
                                    </div>

                                    <div className="mt-10 pt-6 border-t border-slate-200/50 flex items-center justify-between opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">Industry Benchmark</span>
                                        <ArrowUpRight size={16} className="text-primary" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Monumental CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative rounded-[4rem] overflow-hidden"
                >
                    <div className="bg-slate-950 p-12 md:p-24 text-center relative overflow-hidden group/cta">
                        {/* Animated Mesh gradient background */}
                        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-1000">
                            <div className="absolute top-[-50%] left-[-20%] w-full h-[150%] bg-primary/30 rounded-full blur-[120px] animate-pulse"></div>
                            <div className="absolute bottom-[-50%] right-[-20%] w-full h-[150%] bg-secondary/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                        </div>

                        <div className="relative z-10 max-w-4xl mx-auto space-y-10 md:space-y-12">
                            <h3 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-tight italic px-4 md:px-0">
                                Ready to lead the <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary to-primary/80">Creative Revolution?</span>
                            </h3>
                            
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 25px 60px -15px rgba(219,52,54,0.4)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openAdmissionModal({ 
                                    formType: 'step'
                                })}
                                className="inline-flex items-center justify-center gap-4 md:gap-8 bg-white text-slate-950 px-6 sm:px-10 md:px-16 py-6 md:py-8 rounded-full font-black text-xs md:text-base uppercase tracking-widest shadow-2xl transition-all duration-500 hover:bg-primary hover:text-white group/btn w-[90%] sm:w-auto mx-auto"
                            >
                                <Zap className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:animate-bounce shrink-0" />
                                <span className="leading-tight">Start Your Creative Career Today</span>
                                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover/btn:translate-x-2 group-hover/btn:-translate-y-2 transition-transform shrink-0" />
                            </motion.button>
                            
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustryInsights;
