import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImpactStats = () => {
    const statsRef = useRef(null);

    const stats = [
        { value: 15000, suffix: "+", label: "Students Graduated", color: "from-primary to-secondary" },
        { value: 120, suffix: "+", label: "Faculty Presence", color: "from-secondary to-primary" },
        { value: 7, suffix: "", label: "International Campuses", color: "from-secondary to-primary" },
        { value: 50, suffix: "+", label: "National Campuses", color: "from-secondary to-primary" },
        { value: 100, suffix: "+", label: "Brand Partners", color: "from-primary to-secondary" },
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Entrance Animation
            gsap.from(".stat-item", {
                opacity: 0,
                y: 50,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: statsRef.current,
                    start: "top 80%",
                    end: "bottom 80%",
                    toggleActions: "play none none reverse"
                }
            });

            // Counter Animation
            const numbers = document.querySelectorAll(".stat-number");
            numbers.forEach((num) => {
                const target = num.getAttribute("data-target");
                const suffix = num.getAttribute("data-suffix");

                gsap.fromTo(num,
                    { innerText: 0 },
                    {
                        innerText: target,
                        duration: 2,
                        snap: { innerText: 1 },
                        scrollTrigger: {
                            trigger: statsRef.current,
                            start: "top 75%",
                            toggleActions: "play none none reverse"
                        },
                        onUpdate: function () {
                            this.targets()[0].innerText = Math.ceil(this.targets()[0].innerText) + suffix;
                        }
                    }
                );
            });
        }, statsRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={statsRef} className="w-full min-h-[50vh] bg-slate-900 flex items-center justify-center py-24 relative overflow-hidden">

            {/* Background Details */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-950 pointer-events-none"></div>
            <div className="absolute top-0 w-full h-px bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-12 text-center">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-item group cursor-default flex flex-col items-center justify-center p-6 rounded-2xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/10">
                        <div
                            className={`stat-number text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-500 inline-block drop-shadow-lg`}
                            data-target={stat.value}
                            data-suffix={stat.suffix}
                        >
                            0{stat.suffix}
                        </div>
                        <div className="h-1 w-12 bg-white/20 rounded-full mb-4 group-hover:w-24 group-hover:bg-primary transition-all duration-300"></div>
                        <div className="text-xs font-mono uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors duration-300">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImpactStats;
