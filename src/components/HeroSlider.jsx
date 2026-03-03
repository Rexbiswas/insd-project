import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
    const slides = [
        {
            stat: "20 Lac",
            text: "Designers needed in India",
            sub: "THE OPPORTUNITY",
            color: "from-primary/40 to-black"
        },
        {
            stat: "$100 Billion",
            text: "Creative Industry by 2030",
            sub: "MARKET FORECAST",
            color: "from-secondary/40 to-black"
        },
        {
            stat: "INSD",
            text: "India’s Skill School",
            sub: "CREATIVE EXCELLENCE",
            color: "from-indigo-900/40 to-black"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="absolute inset-0 w-full h-full bg-black overflow-hidden flex items-center justify-center">
            {/* Dynamic Ambient Background Glow */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={`bg-${currentIndex}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.2 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                    className={`absolute inset-0 bg-radial-to-c ${slides[currentIndex].color} opacity-40 blur-[120px]`}
                />
            </AnimatePresence>

            {/* Static Grid Overlay for texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            <div className="relative z-10 w-full max-w-7xl px-6 md:px-12">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        className="flex flex-col items-center text-center"
                    >
                        {/* Label */}
                        <motion.span
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[10px] md:text-xs font-black tracking-[0.6em] text-primary mb-8"
                        >
                            {slides[currentIndex].sub}
                        </motion.span>

                        {/* Large Stat/Title */}
                        <div className="overflow-hidden mb-4">
                            <motion.h2
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[15vw] md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-white"
                            >
                                {slides[currentIndex].stat}
                            </motion.h2>
                        </div>

                        {/* Descriptive Text */}
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: "100%", opacity: 0 }}
                                animate={{ y: "0%", opacity: 1 }}
                                exit={{ y: "-100%", opacity: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl md:text-4xl font-bold uppercase tracking-tight text-white/40"
                            >
                                {slides[currentIndex].text}
                            </motion.p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-50">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className="relative w-12 md:w-20 h-1 bg-white/10 rounded-full overflow-hidden"
                    >
                        {i === currentIndex && (
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 6, ease: "linear" }}
                                className="absolute inset-0 bg-primary"
                            />
                        )}
                        {i < currentIndex && (
                            <div className="absolute inset-0 bg-white/20" />
                        )}
                    </div>
                ))}
            </div>

            {/* Corner Accent Decor */}
            <div className="absolute top-12 left-12 md:top-24 md:left-24 w-12 h-px bg-white/20" />
            <div className="absolute top-12 left-12 md:top-24 md:left-24 h-12 w-px bg-white/20" />
            <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 w-12 h-px bg-white/20" />
            <div className="absolute bottom-12 right-12 md:bottom-24 md:right-24 h-12 w-px bg-white/20" />
        </div>
    );
};

export default HeroSlider;

