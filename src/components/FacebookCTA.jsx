import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Facebook } from 'lucide-react';

const FacebookCTA = ({ isFloatingPanel = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollY } = useScroll();

    const facebookUrl = "https://www.facebook.com/share/1CMuRdTV69/";

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
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={isFloatingPanel ? {} : { opacity: 0, scale: 0.5, y: 50 }}
            animate={isFloatingPanel ? {} : { opacity: 1, scale: 1, y: 0 }}
            exit={isFloatingPanel ? {} : { opacity: 0, scale: 0.5, y: 50 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className={`${isFloatingPanel ? 'relative' : 'fixed bottom-[260px] md:bottom-[180px] right-6 md:right-10'} z-[1000] group flex items-center justify-center`}
        >
            {/* Tooltip */}
            <div className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-x-4 group-hover:translate-x-0 whitespace-nowrap shadow-2xl">
                Follow us on Facebook
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
            </div>

            {/* Glowing Ring */}
            <div className="absolute inset-0 bg-[#1877F2] rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse transition-opacity duration-500" />

            {/* Main Button */}
            <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#1877F2] shadow-[0_10px_30px_rgba(24,119,242,0.4)] flex items-center justify-center overflow-hidden border border-white/20">
                {/* Shine Animation */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <Facebook className="w-7 h-7 text-white relative z-10 group-hover:rotate-12 transition-transform duration-500" />
            </div>

            {/* Pulsing Ripple */}
            <div className="absolute inset-0 border-4 border-[#1877F2]/30 rounded-full animate-ping pointer-events-none" />
        </motion.a>
    );

    if (isFloatingPanel) return content;

    return (
        <AnimatePresence>
            {isVisible && content}
        </AnimatePresence>
    );
};

export default FacebookCTA;
