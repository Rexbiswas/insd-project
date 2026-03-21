import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import DreamLife from '../components/DreamLife';
import Footer from '../components/Footer';

const Student = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-[#fafafa]">
            {/* Minimal Hero Section to introduce DreamLife */}
            <section className="relative pt-32 pb-12 md:pt-48 md:pb-24 overflow-hidden border-b border-slate-200/50">
                {/* Background Details */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-2/3 h-full bg-linear-to-br from-primary/5 to-transparent blur-3xl opacity-60 mix-blend-multiply" />
                    <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-linear-to-tl from-slate-200/60 to-transparent blur-2xl opacity-50" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-white font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs mb-8 shadow-sm">
                            Student Life At INSD
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black uppercase leading-[0.85] tracking-tighter text-slate-900 mb-8">
                            Beyond <span className="font-light italic block my-2 text-slate-500">The Classroom</span> <span className="text-primary inline-block">Experience</span>
                        </h1>
                        <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-600 font-medium leading-relaxed">
                            Discover the vibrant community, endless opportunities, and the creative lifestyle that awaits you at INSD. Your journey is more than just education; it's the beginning of your dream life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* DreamLife Component */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            >
                <DreamLife />
            </motion.div>
            <Footer />
        </main>

    );
};

export default Student;
