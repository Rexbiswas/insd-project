import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import GlobalDesignEconomy from '../components/GlobalDesignEconomy';
import GovernmentValidation from '../components/GovernmentValidation';
import IndustryExposure from '../components/IndustryExposure';

const IndustryPotential = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-[#fafafa]">
            {/* Minimal Hero Section to introduce Industry Potential */}
            <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 overflow-hidden border-b border-slate-200/50">
                {/* Background Details */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-bl from-primary/5 to-transparent blur-3xl opacity-60 mix-blend-multiply" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-linear-to-tr from-slate-200/60 to-transparent blur-2xl opacity-50" />
                </div>
                
                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-8 shadow-sm">
                            Real-World Demand
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase leading-[0.85] tracking-tighter text-slate-900 mb-8">
                            Industry <span className="text-primary inline-block">Potential</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
                            A deep dive into the massive global opportunities waiting for design professionals across every major economic sector.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* GlobalDesignEconomy Component */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <GlobalDesignEconomy />
                <IndustryExposure />
                <GovernmentValidation />
            </motion.div>
        </main>
    );
};

export default IndustryPotential;
