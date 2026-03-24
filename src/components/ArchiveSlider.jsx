import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ArchiveSlider = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xMove = useTransform(scrollYProgress, [0, 1], [0, -400]);

    const items = [
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02525.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02526.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02527.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02528.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02529.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02530.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02548.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02552.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02553.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02556.JPG",
        "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder-1/Copy%20of%20ARI02559.JPG"
    ];

    return (
        <section ref={containerRef} className="py-32 overflow-hidden bg-white">
            <div className="px-6 md:px-12 lg:px-24 mb-16">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <div className="space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">The Living Archive</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            EXPERIENCE <br /> <span className="text-slate-300">IN MOTION</span>
                        </h2>
                    </div>
                </div>
            </div>

            <motion.div 
                style={{ x: xMove }}
                className="flex gap-4 md:gap-8 px-6 md:px-12"
            >
                {[...items, ...items].map((src, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ scale: 0.98 }}
                        className="flex-none w-[300px] md:w-[600px] aspect-4/5 rounded-4xl md:rounded-[4rem] overflow-hidden bg-slate-100 shadow-2xl"
                    >
                        <img 
                            src={src} 
                            alt={`Archive Frame ${idx}`} 
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 font-sans"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default ArchiveSlider;
