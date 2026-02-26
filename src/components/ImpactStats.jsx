import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';

const StatCounter = ({ endValue, suffix, label, color }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, endValue, {
                duration: 2.5,
                ease: [0.19, 1, 0.22, 1],
                onUpdate: (value) => setCount(Math.floor(value))
            });
            return () => controls.stop();
        }
    }, [isInView, endValue]);

    return (
        <div ref={nodeRef} className="stat-item group cursor-default flex flex-col items-center justify-center p-8 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 border border-transparent hover:border-white/5">
            <div className={`stat-number text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-linear-to-br ${color} mb-4 group-hover:scale-110 transition-transform duration-700 inline-block drop-shadow-sm`}>
                {count.toLocaleString()}{suffix}
            </div>
            <div className="h-1.5 w-12 bg-white/10 rounded-full mb-6 group-hover:w-24 group-hover:bg-primary transition-all duration-700"></div>
            <div className="text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-white/50 group-hover:text-white font-bold transition-colors duration-500">
                {label}
            </div>
        </div>
    );
};

const ImpactStats = () => {
    const stats = [
        { value: 15000, suffix: "+", label: "Students Graduated", color: "from-primary to-rose-500" },
        { value: 120, suffix: "+", label: "Faculty Presence", color: "from-secondary to-indigo-500" },
        { value: 7, suffix: "", label: "Global Hubs", color: "from-emerald-500 to-teal-500" },
        { value: 50, suffix: "+", label: "National Nodes", color: "from-orange-500 to-amber-500" },
        { value: 100, suffix: "+", label: "Brand Partners", color: "from-indigo-500 to-purple-500" },
    ];

    return (
        <section className="w-full py-32 md:py-48 bg-slate-950 relative overflow-hidden border-t border-white/5">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="relative z-10 container mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <StatCounter key={index} {...stat} endValue={stat.value} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactStats;
