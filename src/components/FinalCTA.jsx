import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA = () => {
    return (
        <section className="relative z-50 py-32 md:py-48 bg-slate-950 text-white overflow-hidden selection:bg-primary selection:text-white flex items-center justify-center">
            {/* Ambient Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[40vw] md:h-[40vw] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-12 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.05)]"
                >
                    <Sparkles className="w-8 h-8 text-primary" />
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8"
                >
                    Your Future <br />
                    <span className="italic font-serif opacity-90 text-primary">Won't Wait</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium max-w-3xl mb-16 leading-relaxed"
                >
                    The right training can change everything. <br className="hidden md:block" />
                    Start your design journey today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                >
                    <a
                        href="/admission"
                        className="group relative inline-flex items-center gap-6 px-10 py-5 bg-white text-slate-950 rounded-full overflow-hidden hover:scale-105 transition-transform duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                    >
                        {/* Button Hover Expansion Background */}
                        <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />

                        <span className="relative z-10 text-sm md:text-base font-black uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-500">
                            Apply Now
                        </span>

                        <div className="relative z-10 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                            <ArrowRight size={18} className="text-slate-900 group-hover:text-white group-hover:translate-x-1 transition-all duration-500" />
                        </div>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FinalCTA;
