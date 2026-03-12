import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const NationalAwards = () => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section className="relative py-24 md:py-48 bg-slate-950 overflow-hidden selection:bg-primary selection:text-white">
            {/* Background Atmosphere */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 blur-[150px] rounded-full" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24">
                    
                    {/* Left: Headlines & Stats */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-white/40 font-mono text-xs md:text-sm uppercase tracking-[0.5em] mb-8"
                        >
                            India's Design Powerhouse
                        </motion.span>

                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-12"
                        >
                            <span className="text-primary block">National</span>
                            <span className="text-white block">Award-</span>
                            <span className="text-white block">Winning</span>
                            <span className="text-white/20 block">Disruptors.</span>
                        </motion.h2>

                        <div className="flex flex-wrap gap-12 md:gap-20 mt-8">
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex flex-col items-start"
                            >
                                <span className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-2">99%</span>
                                <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">Career Success</span>
                            </motion.div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-col items-start"
                            >
                                <span className="text-white text-5xl md:text-7xl font-black tracking-tighter mb-2">500+</span>
                                <span className="text-primary font-mono text-[10px] md:text-xs uppercase tracking-widest font-bold">Global Partners</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Interactive Award Card */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <motion.div
                            ref={cardRef}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                            style={{
                                rotateX,
                                rotateY,
                                transformStyle: "preserve-3d",
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative group w-full max-w-[500px] aspect-square rounded-[2rem] md:rounded-[3rem] bg-slate-900/50 border border-white/10 overflow-hidden flex flex-col items-center justify-center p-8 md:p-12 cursor-grab active:cursor-grabbing backdrop-blur-xl"
                        >
                            {/* Inner Glow Background */}
                            <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
                            
                            {/* Card Content Header */}
                            <div className="absolute top-8 left-0 w-full px-10 flex justify-between items-center z-20">
                                <span className="text-primary font-mono text-[10px] uppercase tracking-widest font-bold">Times of India</span>
                                <div className="flex items-center gap-2">
                                    <span className="w-1 h-1 rounded-full bg-white/40" />
                                    <span className="text-white/30 font-mono text-[10px] uppercase tracking-widest">Drag to interact</span>
                                </div>
                            </div>

                            {/* Trophy Image Component */}
                            <div 
                                style={{ transform: "translateZ(75px)" }}
                                className="relative w-full h-[70%] mt-8 flex items-center justify-center z-10"
                            >
                                <img 
                                    src="https://ik.imagekit.io/fmldynl4j4/insd-awards/WhatsApp%20Image%202025-05-03%20at%205.24.15%20PM%20(3).jpeg" 
                                    alt="Times Business Award" 
                                    className="max-w-full max-h-full object-contain filter drop-shadow-[0_20px_50px_rgba(219,52,54,0.3)] group-hover:drop-shadow-[0_40px_80px_rgba(219,52,54,0.5)] transition-all duration-700 select-none pointer-events-none"
                                />
                            </div>

                            {/* Award Label Footer */}
                            <div 
                                style={{ transform: "translateZ(50px)" }}
                                className="mt-8 text-center z-10"
                            >
                                <h3 className="text-white/60 font-black text-2xl uppercase tracking-tighter leading-none">
                                    Times Business Awards
                                </h3>
                                <div className="h-px w-24 bg-primary mx-auto mt-4" />
                            </div>

                            {/* Reflection Sweep */}
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NationalAwards;
