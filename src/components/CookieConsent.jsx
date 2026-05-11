import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Function to check and show consent
        const checkConsent = () => {
            const consent = localStorage.getItem('cookie-consent');
            if (!consent) {
                const timer = setTimeout(() => {
                    setIsVisible(true);
                }, 1500);
                return () => clearTimeout(timer);
            }
        };

        checkConsent();

        // Listen for custom event to re-show (for Manage Preferences)
        const handleShowConsent = () => setIsVisible(true);
        window.addEventListener('show-cookie-consent', handleShowConsent);

        return () => {
            window.removeEventListener('show-cookie-consent', handleShowConsent);
        };
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0, scale: 0.9 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    exit={{ y: 100, opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", damping: 25, stiffness: 200 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 md:w-[400px] z-[2000]"
                >
                    <div className="bg-white/95 backdrop-blur-xl rounded-[40px] p-10 shadow-[0_30px_100px_rgba(0,0,0,0.25)] border border-slate-200 overflow-hidden relative">
                        {/* Modern Background Accents */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] rounded-full" />
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/10 blur-[80px] rounded-full" />
                        
                        <div className="relative z-10">
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 rounded-[20px] bg-slate-900 flex items-center justify-center shadow-xl rotate-[-5deg] group-hover:rotate-0 transition-transform duration-500">
                                    <Cookie className="text-white" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase leading-none">Cookie <span className="text-primary">Policy</span></h3>
                                    <div className="flex items-center gap-2 mt-2">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">Privacy Hub</p>
                                    </div>
                                </div>
                            </div>

                            <p className="text-slate-600 text-[13px] leading-relaxed mb-10 font-medium">
                                We utilize advanced tracking protocols to optimize your design journey. By continuing, you agree to our <Link to="/cookie-policy" className="text-slate-900 font-bold border-b-2 border-primary/20 hover:border-primary transition-all pb-0.5">Cookie Policy</Link>.
                            </p>

                            <div className="flex gap-4">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 py-5 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl hover:shadow-primary/30 flex items-center justify-center gap-2 group"
                                >
                                    <Check size={16} className="group-hover:scale-125 transition-transform" />
                                    Accept All
                                </button>
                                <button
                                    onClick={handleDecline}
                                    className="px-8 py-5 bg-slate-100 text-slate-500 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 hover:text-slate-900 transition-all duration-500 flex items-center justify-center group"
                                >
                                    <X size={16} className="group-hover:rotate-90 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
