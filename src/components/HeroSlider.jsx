import React from 'react';
import { motion } from 'framer-motion';

const HeroSlider = () => {
    // Stats matching the user's provided image
    const floatingStats = [
        { 
            id: 1, 
            val: "100%", 
            label: "Placement Support", 
            pos: "top-12 right-12 md:top-20 md:right-10", 
            delay: 0.5 
        },
        { 
            id: 2, 
            val: "300000+", 
            label: "students", 
            pos: "bottom-1/3 left-6 md:bottom-1/2 md:left-10", 
            delay: 0.8 
        },
        { 
            id: 3, 
            val: "75", 
            label: "Campuses Across India", 
            pos: "bottom-16 right-6 md:bottom-24 md:right-12", 
            delay: 1.1 
        }
    ];

    return (
        <div className="relative w-full h-full overflow-hidden group select-none rounded-[1.5rem] md:rounded-[3rem] shadow-2xl">
            
            {/* Main Hero Image */}
            <div className="relative w-full h-full overflow-hidden">
                <img 
                    src="https://ik.imagekit.io/fmldynl4j4/IMG_3440.JPG?updatedAt=1771841966154" 
                    alt="Student with Vision"
                    className="w-full h-full object-cover"
                />

                {/* Paper Plane Animation */}
                <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none" viewBox="0 0 800 600">
                    <motion.path
                        d="M -50,400 C 100,400 200,500 350,300 C 500,100 650,200 850,150"
                        fill="transparent"
                        stroke="white"
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
                        <path d="M-10,-10 L15,0 L-10,10 L-5,0 Z" fill="white" transform="rotate(25)" />
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
                            className={`absolute ${stat.pos} px-4 py-3 md:px-6 md:py-4 rounded-xl md:rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl min-w-[140px] md:min-w-[180px]`}
                        >
                            <div className="text-xl md:text-3xl font-black text-white leading-tight">{stat.val}</div>
                            <div className="text-[8px] md:text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default HeroSlider;

