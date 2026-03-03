import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroSlider = () => {
    const slides = [
        {
            image: "https://ik.imagekit.io/fmldynl4j4/IMG_3440.JPG?updatedAt=1771841966154", // Using their image too as a legacy slide
            title: "20 Lac Designers",
            subtitle: "Needed in India",
            highlight: "The Opportunity"
        },
        {
            image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260",
            title: "$100 Billion",
            subtitle: "Creative Industry by 2030",
            highlight: "Market Forecast"
        },
        {
            image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260",
            title: "India's Skill School",
            subtitle: "INSD - Creative Excellence",
            highlight: "The Legacy"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
                    transition={{ duration: 2, ease: "anticipate" }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/60 z-10" />
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Slider Content Overlay (Outside the blur animation) */}
            <div className="absolute bottom-[20%] left-0 w-full z-40 pointer-events-none">
                <div className="max-w-7xl mx-auto px-12 flex flex-col items-start">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="bg-black/20 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl"
                        >
                            <span className="block text-primary font-mono tracking-[0.5em] uppercase text-xs mb-3">
                                {slides[currentIndex].highlight}
                            </span>
                            <h2 className="text-4xl md:text-6xl font-black text-white leading-none uppercase tracking-tighter mb-4">
                                {slides[currentIndex].title}
                            </h2>
                            <p className="text-lg md:text-xl text-white/60 font-medium uppercase tracking-[0.2em]">
                                {slides[currentIndex].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Slider Progress Bar - Horizontal */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 z-50 flex gap-1 px-1">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className="flex-1 h-full relative bg-white/5 backdrop-blur-sm rounded-full overflow-hidden"
                    >
                        {i === currentIndex ? (
                            <motion.div
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 5, ease: "linear" }}
                                className="absolute top-0 left-0 h-full bg-primary shadow-[0_0_15px_rgba(219,52,54,0.6)]"
                            />
                        ) : (
                            <div className={`absolute inset-0 ${i < currentIndex ? 'bg-primary/40' : 'bg-transparent'}`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
