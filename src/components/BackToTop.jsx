import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const show = latest > 300;
        if (show !== isVisible) {
            setIsVisible(show);
        }
    });

    // Scroll to top smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-100 group flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full shadow-lg bg-white/80 backdrop-blur-md border border-white/20 hover:shadow-xl transition-all duration-300"
                    aria-label="Back to top"
                >
                    <div className="absolute inset-0 rounded-full bg-linear-to-tr from-pink-500 to-violet-600 opacity-20 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Ring animation */}
                    <div className="absolute inset-0 rounded-full border-2 border-pink-500/30 scale-100 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />

                    <ArrowUp
                        size={24}
                        className="relative z-10 text-slate-800 group-hover:text-white transition-colors duration-300"
                        strokeWidth={2.5}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default BackToTop;
