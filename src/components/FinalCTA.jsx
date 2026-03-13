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

            </div>
        </section>
    );
};

export default FinalCTA;
