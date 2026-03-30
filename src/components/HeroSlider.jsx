import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        phase: "PHASE 01",
        title: "Fashion Design",
        subtitle: "Shape the Future of Style",
        img: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-1200,fo-auto",
        tag: "Inquiry"
    },
    {
        phase: "PHASE 02",
        title: "Interior Design",
        subtitle: "Design Spaces that Inspire",
        img: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_u2ubidu2ubidu2ub.png?tr=w-1200,fo-auto",
        tag: "Innovation"
    },
    {
        phase: "PHASE 03",
        title: "Graphic Design",
        subtitle: "Master Visual Communication",
        img: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_hzzhu5hzzhu5hzzh.png?tr=w-1200,fo-auto",
        tag: "Digital"
    }
];

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const particles = Array.from({ length: 40 });

    useEffect(() => {
        const interval = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const slideVariants = {
        initial: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.1
        }),
        animate: {
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.6 },
                scale: { duration: 1.2, ease: "easeOut" }
            }
        },
        exit: (direction) => ({
            x: direction > 0 ? '-50%' : '50%',
            opacity: 0,
            transition: {
                x: { duration: 0.6, ease: "easeInOut" },
                opacity: { duration: 0.4 }
            }
        })
    };

    return (
        <div className="relative w-full h-full overflow-hidden group select-none rounded-2xl md:rounded-[2.5rem] shadow-2xl">
            <div className="relative w-full h-full overflow-hidden">
                {/* Noise and Particles Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {/* Artistic Particles */}
                    {particles.map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                            initial={{ 
                                x: Math.random() * 100 + "%", 
                                y: Math.random() * 100 + "%" 
                            }}
                            animate={{ 
                                y: ["0%", "100%"],
                                opacity: [0, 0.6, 0]
                            }}
                            transition={{ 
                                duration: Math.random() * 10 + 10, 
                                repeat: Infinity, 
                                ease: "linear",
                                delay: Math.random() * 5
                            }}
                        />
                    ))}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.05] mix-blend-overlay" />
                </div>

                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={slideVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute inset-0"
                    >
                        <img 
                            src={slides[current].img} 
                            alt={slides[current].title}
                            className="w-full h-full object-cover grayscale brightness-110 contrast-125 transition-all duration-1000"
                        />
                        {/* Soft Overlays */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Phase Badge */}
                <motion.div
                    key={`phase-${current}`}
                    initial={{ opacity: 0, x: -30 }} // Reduced shift for smaller screens
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="absolute top-6 left-6 md:top-12 md:left-12 z-30 bg-white px-5 py-2 md:px-8 md:py-3 shadow-[0_10px_30px_rgba(0,0,0,0.1)] flex items-center justify-center rounded-sm"
                >
                    <span className="text-slate-900 text-[10px] md:text-sm font-black uppercase tracking-widest whitespace-nowrap">
                        {slides[current].phase}
                    </span>
                </motion.div>

                {/* Content Overlay - Minimalist */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 z-30 pointer-events-none">
                    <motion.div
                        key={`title-${current}`}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-xl">
                            {slides[current].title}
                        </h2>
                        <div className="w-12 h-1 bg-white mb-6" />
                    </motion.div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute bottom-6 right-6 md:bottom-12 md:right-12 flex items-center gap-4 md:gap-6 z-40">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                            className={`w-1.5 md:w-2 transition-all duration-500 rounded-full cursor-pointer ${i === current ? 'h-6 md:h-8 bg-white' : 'h-1.5 md:h-2 bg-white/40 hover:bg-white/60'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
