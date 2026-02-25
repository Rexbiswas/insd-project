import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const CounterItem = ({ endValue, suffix, label, delay }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, endValue, {
                duration: 2,
                delay: delay,
                ease: "easeOut",
                onUpdate: (value) => setCount(Math.floor(value))
            });
            return () => controls.stop();
        }
    }, [isInView, endValue, delay]);

    return (
        <div ref={ref} className="relative group text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                className="flex flex-col"
            >
                <div className="flex items-baseline justify-center md:justify-start gap-1">
                    <span className="text-5xl md:text-7xl font-black tracking-tighter text-black leading-none">
                        {count.toLocaleString()}{suffix}
                    </span>
                </div>
                <span className="mt-4 text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-slate-400 font-bold group-hover:text-primary transition-colors duration-500">
                    {label}
                </span>
            </motion.div>

            {/* Decorative underline */}
            <div className="mt-6 w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 1.5, delay: delay + 0.5 }}
                    className="h-full bg-linear-to-r from-primary to-secondary origin-left"
                />
            </div>
        </div>
    );
};

const NetworkCounter = () => {
    const stats = [
        { val: 75, suffix: "+", label: "Campuses" },
        { val: 23, suffix: "", label: "States" },
        { val: 15000, suffix: "", label: "Students" },
        { val: 300, suffix: "+", label: "Industry Partners" }
    ];

    return (
        <section className="relative py-24 md:py-40 bg-white overflow-hidden border-t border-slate-50">
            {/* Background Aesthetic */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
                    {stats.map((stat, i) => (
                        <CounterItem
                            key={i}
                            endValue={stat.val}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={i * 0.2}
                        />
                    ))}
                </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />
        </section>
    );
};

export default NetworkCounter;
