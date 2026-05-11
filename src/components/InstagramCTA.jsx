import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Instagram } from 'lucide-react';

const InstagramCTA = ({ isFloatingPanel = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    const instagramUrl = "https://www.instagram.com/insd_official";

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (isFloatingPanel) return;

        const isDesktop = window.innerWidth >= 1024;
        const show = isDesktop ? true : latest > 50;

        if (show !== isVisible) {
            setIsVisible(show);
        }
    });

    useEffect(() => {
        if (isFloatingPanel) return;
        const checkScroll = () => {
            const isDesktop = window.innerWidth >= 1024;
            const show = isDesktop ? true : window.scrollY > 50;
            setIsVisible(show);
        };
        checkScroll();
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('resize', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
            window.removeEventListener('resize', checkScroll);
        };
    }, [isFloatingPanel]);

    const content = (
        <motion.a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={isFloatingPanel ? {} : { opacity: 0, scale: 0.5, y: 50 }}
            animate={isFloatingPanel ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={isFloatingPanel ? {} : { opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`${isFloatingPanel ? 'relative' : 'fixed bottom-[328px] md:bottom-[240px] right-6 md:right-10'} z-[1000] group flex items-center justify-center`}
        >
            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl hidden md:block">
                Follow us on Instagram
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </div>

            {/* Glowing Ring */}
            <div className="absolute inset-0 bg-[#E4405F] rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-500" />

            {/* Main Button */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-linear-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-[0_10px_30px_rgba(228,64,95,0.4)] flex items-center justify-center overflow-hidden border border-white/20">
                {/* Shine Animation */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <Instagram className="w-7 h-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            </div>

            {/* Pulsing Ripple */}
            <div className="absolute inset-0 border-4 border-[#E4405F]/30 rounded-full animate-ping pointer-events-none" />
        </motion.a>
    );

    if (isFloatingPanel) return content;

    return (
        <AnimatePresence>
            {isVisible && content}
        </AnimatePresence>
    );
};

export default InstagramCTA;
