import React from 'react';
import { motion } from 'framer-motion';

const HeroSlider = () => {
    // Stats matching the user's provided image
    const floatingStats = [
        {
            id: 1,
            val: "100%",
            label: "Placement Support",
            pos: "top-4 left-4 md:top-10 md:left-8 lg:top-16 lg:left-10",
            delay: 0.5
        },
        {
            id: 2,
            val: "300000+",
            label: "students",
            pos: "bottom-4 right-4 md:bottom-10 md:right-8 lg:bottom-16 lg:right-10",
            delay: 0.8
        },
        {
            id: 3,
            val: "75",
            label: "Campuses Across India",
            pos: "bottom-4 left-4 md:bottom-10 md:left-8 lg:bottom-16 lg:left-10",
            delay: 1.1
        },
        
    ];

    return (
        <div className="relative w-full h-full overflow-hidden group select-none rounded-none">

            {/* Main Hero Image */}
            <div className="relative w-full h-full overflow-hidden">
                <img
                    src="https://ik.imagekit.io/fmldynl4j4/Removed%20background.png"
                    alt="Student with Vision"
                    className="w-full h-full object-cover object-right"
                />

                {/* Paper Plane Animation */}
                <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 800 600">
                    <defs>
                        <linearGradient id="planeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#db3436" />
                            <stop offset="100%" stopColor="#134a84" />
                        </linearGradient>
                    </defs>
                    <motion.path
                        d="M -50,400 C 100,400 200,500 350,300 C 500,100 650,200 850,150"
                        fill="transparent"
                        stroke="url(#planeGradient)"
                        strokeWidth="1"
                        strokeDasharray="6 6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                    />
                    <motion.g
                        initial={{ offsetDistance: "0%", opacity: 0 }}
                        animate={{ offsetDistance: "100%", opacity: 1 }}
                        transition={{ duration: 4, repeat: Infinity, repeatDelay: 1, ease: "easeInOut" }}
                        style={{ offsetPath: "path('M -50,400 C 100,400 200,500 350,300 C 500,100 650,200 850,150')" }}
                    >
                        <path d="M-10,-10 L15,0 L-10,10 L-5,0 Z" fill="url(#planeGradient)" transform="rotate(25)" />
                    </motion.g>
                </svg>

                {/* Floating Glassmorphism Cards */}
                <div className="absolute inset-0 z-30 pointer-events-none">
                    {floatingStats.map((stat) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                                y: [0, -10, 0]
                            }}
                            transition={{
                                opacity: { delay: stat.delay, duration: 0.8 },
                                scale: { delay: stat.delay, duration: 0.8 },
                                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: stat.delay }
                            }}
                            className={`absolute ${stat.pos} px-4 py-3 md:px-6 md:py-4 rounded-none backdrop-blur-md bg-white/10 border border-white/20 min-w-[140px] md:min-w-[180px]`}
                        >
                            <div className="text-xl md:text-3xl font-black mask-text leading-tight">{stat.val}</div>
                            <div className="text-[8px] md:text-[10px] font-bold mask-text uppercase tracking-widest mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HeroSlider;

