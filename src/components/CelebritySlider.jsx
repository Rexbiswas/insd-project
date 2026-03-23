import React from 'react';
import { motion } from 'framer-motion';

const celebrities = [
    {
        name: "Gauhar Khan",
        role: "Celebrity Icon",
        img: "https://i.pinimg.com/736x/c7/6a/5e/c76a5e1cfd171bf497a948c99063f3e5.jpg",
        desc: "Empowering INSDians with her journey of grace and excellence in the entertainment industry."
    },
    {
        name: "Hina Khan",
        role: "INSD Show 2023",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/Hina%20Khan%20at%20INSD%20Show%202023%20(1).png",
        desc: "Leading the runway at the INSD Annual Design Showcase 2023."
    },
    {
        name: "Karishma Kapoor",
        role: "Eco Fashion Show",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/Karishma%20Kapoor%20at%20Eco%20Fashion%20Show%202018.jpg",
        desc: "The timeless diva celebrating sustainable design at the INSD Eco Fashion event."
    },
    {
        name: "Nikita Dutta",
        role: "Celebrity Singer",
        img: "https://i.pinimg.com/736x/92/f2/b6/92f2b64bdfe5039932fad7914be72488.jpg",
        desc: "Adding rhythm and star power to INSD's national design celebrations."
    },
    {
        name: "Mika Singh",
        role: "Celebrity Singer",
        img: "https://c.saavncdn.com/artists/Mika_Singh_003_20250321072715_500x500.jpg",
        desc: "Mentoring students on style, confidence, and the cinematic design aesthetic."
    },
    {
        name: "INSD x Gauhar Khan",
        role: "Masterclass",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/INSD%20students%20with%20gauhar%20khan.jpg",
        desc: "Our students interacting with Gauhar Khan during an exclusive industry session."
    },
    {
        name: "INSD x Nikita Dutta",
        role: "Meet & Greet",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/INSD%20Students%20with%20Nikita%20Dutta.jpg",
        desc: "A moment of inspiration as students share their design vision with Nikita Dutta."
    }
];

const CelebritySlider = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % celebrities.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    return (
        <section 
            className="py-24 bg-white overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Elite Ecosystem</span>
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        CELEBRITIES <br /> <span className="text-slate-300">OF INSD</span>
                    </h2>
                    <p className="text-slate-500 font-bold max-w-2xl mx-auto uppercase text-xs tracking-widest mt-6">
                        Experience the star power of INSD where global icons meet the next generation of designers.
                    </p>
                </motion.div>
            </div>

            <div className="relative">
                <div className="flex justify-center">
                    <div className="w-full max-w-[1400px] px-4 md:px-0 overflow-visible relative">
                        <motion.div 
                            className="flex gap-4 md:gap-12"
                            animate={{
                                x: `calc(-${activeIndex * (window.innerWidth < 768 ? (window.innerWidth - 32) : 550)}px - ${activeIndex * (window.innerWidth < 768 ? 16 : 48)}px)`,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 60,
                                damping: 15
                            }}
                            style={{
                                width: "fit-content",
                            }}
                        >
                            {celebrities.map((celeb, index) => (
                                <div 
                                    key={index} 
                                    className="w-[calc(100vw-32px)] md:w-[550px] shrink-0 group"
                                >
                                    <div className="relative aspect-3/4 overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-all duration-700">
                                        <img 
                                            src={celeb.img} 
                                            alt={celeb.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                                        />
                                        
                                        {/* Bottom Content Overlay - More prominent */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                                            <motion.div 
                                                className="space-y-4 md:space-y-6"
                                                animate={{
                                                    y: activeIndex === index ? 0 : 20,
                                                    opacity: activeIndex === index ? 1 : 0.6
                                                }}
                                            >
                                                <div className="space-y-2">
                                                    <span className="text-primary text-xs md:text-sm font-black uppercase tracking-[0.3em]">
                                                        {celeb.role}
                                                    </span>
                                                    <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                                                        {celeb.name}
                                                    </h3>
                                                </div>
                                                <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed max-w-2xl">
                                                    {celeb.desc}
                                                </p>
                                            </motion.div>
                                        </div>
                                        
                                        {/* Corner Accent */}
                                        <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-3xl hidden md:block" />
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Navigation Controls (Left/Right Chevrons) */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-12 z-20">
                    <button 
                        onClick={() => setActiveIndex((prev) => (prev - 1 + celebrities.length) % celebrities.length)}
                        className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all active:scale-90"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-12 z-20">
                    <button 
                        onClick={() => setActiveIndex((prev) => (prev + 1) % celebrities.length)}
                        className="w-12 h-12 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all active:scale-90"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="mt-16 flex items-center justify-center gap-4">
                {celebrities.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className="group relative flex items-center justify-center w-12 h-4"
                    >
                        <div className={`transition-all duration-500 rounded-full bg-slate-200 ${activeIndex === i ? 'w-full h-1 bg-primary' : 'w-2 h-2 hover:bg-slate-300'}`} />
                        {activeIndex === i && (
                            <motion.div 
                                className="absolute inset-0 border-b-2 border-primary"
                                layoutId="activeDotLine"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Bottom Label Marquee - Keep for visual flair but reduce vertical space */}
            <div className="mt-16 border-y border-slate-100 py-4 overflow-hidden">
                <motion.div 
                    className="flex whitespace-nowrap gap-12"
                    animate={{
                        x: [0, -50 + "%"]
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="flex items-center gap-12">
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Masterclass Series</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Industry Exposure</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            <span className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-300">Design Visionaries</span>
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CelebritySlider;
