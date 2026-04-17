import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const labSequences = [
    {
        id: "024",
        quote: "Engineering the next generation of creative monopolies."
    },
    {
        id: "025",
        quote: "Converting abstract aesthetics into market-dominant entities."
    },
    {
        id: "026",
        quote: "Neural networks powering the future of fashion technology."
    }
];

const LabSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % labSequences.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="absolute inset-0 p-12 flex flex-col justify-between">
            <div className="flex justify-between items-center">
                <div className="w-16 h-px bg-primary" />
                <AnimatePresence mode="wait">
                    <motion.span 
                        key={labSequences[index].id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-400"
                    >
                        Lab Sequence {labSequences[index].id}
                    </motion.span>
                </AnimatePresence>
            </div>
            
            <div className="relative h-40 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.h3 
                        key={index}
                        initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter leading-tight text-center italic"
                    >
                        "{labSequences[index].quote}"
                    </motion.h3>
                </AnimatePresence>
            </div>
            
            <div className="flex justify-center gap-4">
                {labSequences.map((_, i) => (
                    <motion.div 
                        key={i}
                        animate={{ 
                            width: index === i ? 24 : 8,
                            backgroundColor: index === i ? "var(--color-primary, #db3436)" : "#e2e8f0"
                        }}
                        className="h-2 rounded-full transition-all duration-500"
                    />
                ))}
            </div>
        </div>
    );
};

export default LabSlider;
