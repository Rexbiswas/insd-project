import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        subtitle: "Shape the Future of Style",
        img: "https://ik.imagekit.io/fmldynl4j4/WhatsApp%20Image%202026-04-08%20at%201.41.11%20PM.jpeg",
        tag: "Inquiry"
    },
    {
        subtitle: "Design Spaces that Inspire",
        img: "https://ik.imagekit.io/fmldynl4j4/P1510960%20(1)%20(2).jpg.jpeg",
        tag: "Innovation"
    },
    {
        subtitle: "Master Visual Communication",
        img: "https://ik.imagekit.io/fmldynl4j4/Students/ARI02049%20(2).JPG",
        tag: "Digital"
    },
    {
        subtitle: "Master Visual Communication",
        img: "https://ik.imagekit.io/fmldynl4j4/Students/ARI02418%20(2).JPG",
        tag: "Digital"
    }
];

const floatingStats = [
    { id: 1, val: "98%", label: "Placement Rate", pos: "top-1/4 right-10", delay: 0 },
    { id: 2, val: "2500+", label: "Global Alumni", pos: "top-1/2 left-10", delay: 0.5 },
    { id: 3, val: "75+", label: "Industry Partners", pos: "bottom-1/4 right-20", delay: 1 }
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
        <div className="relative w-full h-full overflow-hidden group select-none rounded-[1.5rem] md:rounded-[3rem] shadow-2xl bg-slate-900">
            <div className="relative w-full h-full overflow-hidden">
                {/* Noise and Particles Overlay */}
                <div className="absolute inset-0 z-20 pointer-events-none">
                    {particles.map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                            initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%" }}
                            animate={{ y: ["0%", "100%"], opacity: [0, 0.6, 0] }}
                            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear", delay: Math.random() * 5 }}
                        />
                    ))}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat opacity-[0.05]" />
                </div>

                {/* SVG Path for Paper Plane */}
                <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-40" viewBox="0 0 800 600">
                    <motion.path
                        d="M -100,300 C 100,300 300,500 400,300 C 500,100 700,300 900,300"
                        fill="transparent"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeDasharray="8 6"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                    />
                    <motion.g
                        initial={{ offsetDistance: "0%" }}
                        animate={{ offsetDistance: "100%" }}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
                        style={{ offsetPath: "path('M -100,300 C 100,300 300,500 400,300 C 500,100 700,300 900,300')" }}
                    >
                        <path d="M-10,-10 L15,0 L-10,10 L-5,0 Z" fill="white" transform="rotate(45)" />
                    </motion.g>
                </svg>

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
                            alt="Student Work"
                            className="w-full h-full object-cover brightness-105 contrast-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    </motion.div>
                </AnimatePresence>

                {/* Floating Glassmorphism Cards */}
                <div className="absolute inset-0 z-30 pointer-events-none hidden md:block">
                    {floatingStats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.8, y: 30 }}
                            animate={{ 
                                opacity: 1, 
                                scale: 1, 
                                y: [0, -15, 0] 
                            }}
                            transition={{ 
                                opacity: { delay: 1 + stat.delay, duration: 0.8 },
                                scale: { delay: 1 + stat.delay, duration: 0.8 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: stat.delay }
                            }}
                            className={`absolute ${stat.pos} px-6 py-4 rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] min-w-[160px]`}
                        >
                            <div className="text-2xl font-black text-white leading-tight">{stat.val}</div>
                            <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile version of floating cards - simpler */}
                <div className="absolute bottom-16 left-8 right-8 z-30 flex gap-3 md:hidden">
                    {floatingStats.map((stat) => (
                        <div key={stat.id} className="flex-1 px-3 py-2 rounded-xl backdrop-blur-lg bg-white/10 border border-white/10 text-center">
                            <div className="text-sm font-black text-white">{stat.val}</div>
                            <div className="text-[8px] font-bold text-white/40 uppercase truncate">{stat.label.split(' ')[0]}</div>
                        </div>
                    ))}
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

