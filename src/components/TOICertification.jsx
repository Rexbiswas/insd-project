import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const certificates = [
    {
        id: 1,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/WhatsApp%20Image%202025-05-03%20at%205.24.15%20PM%20(3).jpeg",
        title: "National Award Best Design College",
        tag: "National"
    },
    {
        id: 2,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/academic%20leader%20award.jpg",
        title: "Academic Leader Award",
        tag: "Excellence"
    },
    {
        id: 3,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Best%20design%20school%20award%202017%20insd.jpg",
        title: "Best Design School Award",
        tag: "Global"
    },
    {
        id: 4,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/INSD%20receives%20National%20award.jpg",
        title: "National Award Outstanding Placement Record",
        tag: "Career"
    },
    {
        id: 5,
        image: "https://image2url.com/r2/default/images/1772097879772-cf85dfcb-8056-49cc-b5f6-a8f006ec8f8a.jpg",
        title: "International College of the Year",
        tag: "Career"
    },
    {
        id: 6,
        image: "https://ik.imagekit.io/fmldynl4j4/insd-awards/Award%20-%20International%20College%20of%20the%20Year%202021_page-0001.jpg?updatedAt=1772091967595",
        title: "International College of the Year",
        tag: "Career"
    }
];

const TOICertification = () => {
    const containerRef = useRef(null);

    // Infinite loop trick: copy array to make it seamless
    const sliderItems = [...certificates, ...certificates, ...certificates];

    return (
        <section ref={containerRef} className="relative py-24 md:py-32 bg-[#f3f3f3] overflow-hidden">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center relative z-10">
                <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6">
                    Official Recognition
                </span>
                <h2 className="text-[10vw] md:text-[5vw] font-black uppercase leading-[0.9] tracking-tighter text-slate-900">
                    Awards & <br className="md:hidden" /> Certificates
                </h2>
            </div>

            {/* Slider Track */}
            <div className="relative w-full flex items-center overflow-x-hidden py-10">
                {/* Edge Fades for seamless infinite effect */}
                <div className="absolute top-0 left-0 w-16 md:w-48 h-full bg-linear-to-r from-[#f3f3f3] to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-16 md:w-48 h-full bg-linear-to-l from-[#f3f3f3] to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-6 md:gap-10 px-6 md:px-10"
                    animate={{
                        x: ['-33.333%', '-66.666%'] // Moves exactly one full set loop
                    }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 30 // adjust speed
                    }}
                    style={{ width: "max-content" }}
                >
                    {sliderItems.map((cert, index) => (
                        <div
                            key={index}
                            className="relative w-[280px] md:w-[400px] h-[350px] md:h-[500px] flex-shrink-0 group rounded-3xl bg-white border border-slate-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden flex flex-col items-center justify-center p-8 cursor-pointer"
                        >
                            {/* Inner Shine Hover Effect */}
                            <div className="absolute inset-0 bg-linear-to-bl from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20" />

                            {/* Tag */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="bg-slate-50 text-slate-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-100 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors duration-500">
                                    {cert.tag}
                                </span>
                            </div>

                            {/* Image Container */}
                            <div className="relative w-full h-[60%] flex items-center justify-center mt-8 mb-6 z-10">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                                />
                            </div>

                            {/* Title */}
                            <div className="relative z-10 text-center w-full mt-auto">
                                <h3 className="text-lg md:text-xl font-black text-slate-800 uppercase tracking-tighter leading-none group-hover:text-primary transition-colors duration-500">
                                    {cert.title}
                                </h3>
                            </div>

                            {/* Decorative bottom border */}
                            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-100 group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TOICertification;
