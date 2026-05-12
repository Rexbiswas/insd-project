import React from 'react';
import { motion } from 'framer-motion';

const celebrities = [
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
    const containerRef = React.useRef(null);
    const [containerWidth, setContainerWidth] = React.useState(0);

    // Track container width for responsive calculations
    React.useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };
        
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Auto-advance slider
    React.useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % celebrities.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPaused]);

    // Responsive constants
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const itemWidth = isMobile ? (containerWidth - 32) : 350;
    const gap = isMobile ? 16 : 48;

    // Calculate the x offset to center the active item
    // Offset = (Half of container) - (Half of item) - (Index * (Item + Gap))
    const xOffset = containerWidth 
        ? (containerWidth / 2) - (itemWidth / 2) - (activeIndex * (itemWidth + gap))
        : 0;

    const handleNext = () => setActiveIndex((prev) => (prev + 1) % celebrities.length);
    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + celebrities.length) % celebrities.length);

    const handleDragEnd = (event, info) => {
        const threshold = 50;
        if (info.offset.x < -threshold) {
            handleNext();
        } else if (info.offset.x > threshold) {
            handlePrev();
        }
    };

    return (
        <section
            className="py-12 md:py-20 bg-white overflow-hidden relative"
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
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        CELEBRITIES <br /> <span className="text-slate-300">AT INSD EVENTS</span>
                    </h2>
                    <p className="text-slate-500 font-bold max-w-2xl mx-auto uppercase text-[10px] tracking-widest mt-4">
                        Experience the star power of INSD where global icons meet the next generation of designers.
                    </p>
                </motion.div>
            </div>

            <div className="relative" ref={containerRef}>
                <div className="flex justify-start">
                    <div className="w-full max-w-[1400px] mx-auto overflow-visible relative">
                        <motion.div
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={handleDragEnd}
                            className="flex cursor-grab active:cursor-grabbing"
                            animate={{ x: xOffset }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 20,
                                mass: 1
                            }}
                            style={{ 
                                gap: `${gap}px`,
                                width: "fit-content"
                            }}
                        >
                            {celebrities.map((celeb, index) => (
                                <motion.div
                                    key={index}
                                    className="shrink-0 group"
                                    style={{ width: itemWidth }}
                                    animate={{
                                        scale: activeIndex === index ? 1 : 0.9,
                                        opacity: activeIndex === index ? 1 : 0.4,
                                    }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-all duration-700">
                                        <img
                                            src={celeb.img}
                                            alt={celeb.name}
                                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                        />

                                        {/* Bottom Content Overlay */}
                                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                                            <div className="space-y-3 md:space-y-4">
                                                <div className="space-y-1">
                                                    <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                                                        {celeb.role}
                                                    </span>
                                                    <h3 className="text-xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none">
                                                        {celeb.name}
                                                    </h3>
                                                </div>
                                                <p className="text-white/70 text-[10px] md:text-xs font-medium leading-relaxed max-w-2xl">
                                                    {celeb.desc}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Corner Accent */}
                                        <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-white/20 rounded-tr-3xl hidden md:block" />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Navigation Controls */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 z-20 pointer-events-none">
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all active:scale-90 pointer-events-auto"
                    >
                        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 z-20 pointer-events-none">
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all active:scale-90 pointer-events-auto"
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
                        <div className={`transition-all duration-500 rounded-full ${activeIndex === i ? 'w-full h-1 bg-primary' : 'w-2 h-2 bg-slate-200 hover:bg-slate-300'}`} />
                        {activeIndex === i && (
                            <motion.div
                                className="absolute inset-0 border-b-2 border-primary"
                                layoutId="activeDotLine"
                            />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default CelebritySlider;
