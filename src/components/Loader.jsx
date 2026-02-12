import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

const words = ["Extraordinary", "Unexpected", "Design", "Future", "INSD"];

const Loader = ({ setLoading }) => {
    const [count, setCount] = useState(0);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        const totalDuration = 4000; // 4.5 seconds
        const startTime = Date.now();
        let animationFrameId;
        let wordInterval;

        const updateCounter = () => {
            const elapsedTime = Date.now() - startTime;
            const progress = Math.min(elapsedTime / totalDuration, 1);

            const easedProgress = 1 - Math.pow(1 - progress, 4);

            setCount(Math.floor(easedProgress * 100));

            if (progress < 1) {
                animationFrameId = requestAnimationFrame(updateCounter);
            } else {
                // Animation Complete
                finishAnimation();
            }
        };

        wordInterval = setInterval(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 800); // Slower word cycle

        const finishAnimation = () => {
            clearInterval(wordInterval);
            setCurrentWordIndex(words.length - 1); // Ensure it ends on INSD

            const tl = gsap.timeline();
            tl.to(".loader-text", {
                y: -100,
                opacity: 0,
                duration: 0.8,
                ease: "power3.inOut",
                stagger: 0.1
            })
                .to(".loader-container", {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                    duration: 1,
                    ease: "expo.inOut",
                    onComplete: () => setLoading(false)
                }, "-=0.2");
        };

        animationFrameId = requestAnimationFrame(updateCounter);

        return () => {
            clearInterval(wordInterval);
            cancelAnimationFrame(animationFrameId);
        };
    }, [setLoading]);

    return (
        <div className="loader-container fixed inset-0 z-[9999] bg-black text-white flex flex-col items-center justify-center overflow-hidden" style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}>

            {/* Dynamic Word Display */}
            <div className="h-24 overflow-hidden mb-8 relative">
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={currentWordIndex}
                        initial={{ y: 50, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        exit={{ y: -50, opacity: 0, rotateX: 90 }}
                        transition={{ duration: 0.5, ease: "backOut" }}
                        className="loader-text text-6xl md:text-8xl font-black tracking-tighter text-center"
                    >
                        {words[currentWordIndex]}
                    </motion.h1>
                </AnimatePresence>
            </div>

            {/* Progress Counter */}
            <div className="absolute bottom-12 right-12">
                <h2 className="loader-text text-8xl font-light opacity-50 font-mono">
                    {count}%
                </h2>
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-white/20">
                <motion.div
                    className="h-full bg-pink-500"
                    initial={{ width: "0%" }}
                    animate={{ width: `${count}%` }}
                    transition={{ ease: "linear", duration: 0.1 }}
                />
            </div>

            {/* Decorative Lines */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-12 top-0 bottom-0 w-[1px] bg-white/10" />
                <div className="absolute right-12 top-0 bottom-0 w-[1px] bg-white/10" />
                <div className="absolute top-12 left-0 right-0 h-[1px] bg-white/10" />
                <div className="absolute bottom-12 left-0 right-0 h-[1px] bg-white/10" />
            </div>
        </div>
    );
};

export default Loader;
