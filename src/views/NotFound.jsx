'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, RefreshCw, WifiOff, MapPinOff, ArrowLeft, Terminal } from 'lucide-react';
import gsap from 'gsap';
import SEO from '../components/SEO';

const NotFound = () => {
    const navigate = useNavigate();
    const [isOffline, setIsOffline] = useState(false);
    const containerRef = useRef(null);
    const glitchRef = useRef(null);

    useEffect(() => {
        if (typeof navigator !== 'undefined') {
            setIsOffline(!navigator.onLine);
        }
        const handleOnline = () => setIsOffline(false);
        const handleOffline = () => setIsOffline(true);

        const handleKeyPress = (e) => {
            // Shift + Alt + O to toggle offline state for debugging
            if (e.shiftKey && e.altKey && e.key.toLowerCase() === 'o') {
                setIsOffline(prev => !prev);
            }
        };

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        window.addEventListener('keydown', handleKeyPress);

        // GSAP animations for premium feel
        const ctx = gsap.context(() => {
            // Floating orbs background animation
            gsap.to(".orb", {
                x: "random(-100, 100)",
                y: "random(-100, 100)",
                duration: "random(10, 20)",
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                stagger: {
                    each: 2,
                    from: "random"
                }
            });

            // Glitch effect on the large text
            const glitchTl = gsap.timeline({ repeat: -1, repeatDelay: 3 });
            glitchTl
                .to(".glitch-text", { skewX: 20, duration: 0.1, ease: "power4.inOut" })
                .to(".glitch-text", { skewX: -20, duration: 0.1 })
                .to(".glitch-text", { skewX: 0, duration: 0.1 })
                .to(".glitch-text", { x: -5, y: 2, color: "#db3436", duration: 0.05 })
                .to(".glitch-text", { x: 5, y: -2, color: "#134a84", duration: 0.05 })
                .to(".glitch-text", { x: 0, y: 0, color: "inherit", duration: 0.05 });
        }, containerRef);

        document.body.classList.add('is-404-page');

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
            window.removeEventListener('keydown', handleKeyPress);
            document.body.classList.remove('is-404-page');
            ctx.revert();
        };
    }, []);

    return (
        <div ref={containerRef} className="relative min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 overflow-hidden selection:bg-red-500 selection:text-white">
            <SEO
                title={isOffline ? "No Connection | INSD" : "404 - Page Not Found | INSD"}
                description="The page you are looking for does not exist or you may be offline."
                robots="noindex, nofollow"
            />

            {/* Ambient Background Glows / GSAP Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="orb absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]" />
                <div className="orb absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[140px]" />
                <div className="orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/5 rounded-full blur-[100px]" />
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293715_1px,transparent_1px),linear-gradient(to_bottom,#1f293715_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-2xl w-full text-center flex flex-col items-center">
                <AnimatePresence mode="wait">
                    {isOffline ? (
                        <motion.div
                            key="offline-state"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-8 shadow-2xl shadow-red-500/10">
                                <WifiOff className="w-10 h-10 text-red-500 animate-pulse" />
                            </div>

                            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-500/10 text-red-400 border border-red-500/20 mb-6">
                                Connection Lost
                            </span>

                            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                                You are offline
                            </h1>

                            <p className="text-slate-400 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
                                We couldn't connect to the network. Please check your internet connection and try refreshing.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors shadow-lg shadow-white/10"
                                >
                                    <RefreshCw className="w-4 h-4" /> Try Again
                                </button>
                                <button
                                    onClick={() => navigate('/')}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-medium hover:bg-slate-800/80 transition-colors"
                                >
                                    <Home className="w-4 h-4" /> Go to Homepage
                                </button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="404-state"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex flex-col items-center"
                        >
                            <div className="relative mb-6 select-none">
                                <span className="glitch-text text-[8rem] sm:text-[11rem] font-black tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-600 drop-shadow-[0_20px_50px_rgba(219,52,54,0.2)]">
                                    404
                                </span>
                            </div>

                            <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-900 text-slate-400 border border-slate-800 mb-6">
                                <MapPinOff className="w-3.5 h-3.5 inline-block mr-1.5 text-red-500" /> Page Not Found
                            </span>

                            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                                Lost in Design Space?
                            </h1>

                            <p className="text-slate-400 text-base sm:text-lg max-w-md mb-8 leading-relaxed">
                                The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-medium hover:bg-slate-800/80 transition-colors"
                                >
                                    <ArrowLeft className="w-4 h-4" /> Go Back
                                </button>
                                <button
                                    onClick={() => navigate('/')}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-500 transition-colors shadow-lg shadow-red-600/20"
                                >
                                    <Home className="w-4 h-4" /> Back to Home
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Footer hint */}
                <div className="mt-16 pt-8 border-t border-slate-900 flex items-center gap-2 text-xs text-slate-600 font-mono">
                    <Terminal className="w-3.5 h-3.5" />
                    <span>INSD NEXT.JS RUNTIME • STATUS 404</span>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
