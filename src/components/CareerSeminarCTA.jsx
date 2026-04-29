import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, ArrowRight, Sparkles, Calendar } from 'lucide-react';

const CareerSeminarCTA = () => {
    return (
        <section className="py-24 md:py-48 px-6 bg-slate-900 overflow-hidden relative selection:bg-primary selection:text-white">
            {/* Background Narrative */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(219,52,54,0.1),transparent)] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[160px] opacity-30 animate-pulse pointer-events-none" />
            
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                    <div className="lg:col-span-7 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <span className="p-3 bg-white/5 rounded-2xl border border-white/10">
                                    <Sparkles className="text-primary w-6 h-6 animate-pulse" />
                                </span>
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Unlock Your Future</span>
                            </div>

                            <h2 className="text-5xl md:text-8xl font-black uppercase text-white leading-[0.85] tracking-tighter mb-10">
                                Career <br />
                                <span className="text-transparent stroke-text-white italic font-serif">Seminar</span> <br />
                                Series.
                            </h2>

                            <p className="text-xl md:text-2xl text-slate-400 font-light leading-relaxed mb-12 max-w-2xl">
                                Join our <span className="text-white font-bold">intensive career orientation</span> labs led by industry veterans. Learn the blueprint of success, from portfolio mastery to interview dominance.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-8">
                                <button className="group relative bg-primary text-white px-12 py-7 rounded-full text-xs font-black uppercase tracking-widest overflow-hidden transition-all hover:pr-16 shadow-2xl active:scale-95">
                                    <span className="relative z-10">Book Your Slot 2026</span>
                                    <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 w-5 h-5 translate-x-4 group-hover:translate-x-0" />
                                </button>
                                <button className="flex items-center gap-4 px-12 py-7 rounded-full text-xs font-black uppercase tracking-widest text-white border border-white/10 hover:bg-white/5 transition-all transition-colors duration-500">
                                    <Calendar className="w-4 h-4 text-slate-500" />
                                    <span>View Schedule</span>
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2 }}
                            className="relative group h-[600px] w-full rounded-[4rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(219,52,54,0.3)]"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200" 
                                alt="Orientation Seminar" 
                                className="w-full h-full object-cover brightness-75 group-hover:scale-105 transition-all duration-1000"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            
                            <div className="absolute bottom-12 left-12 right-12 p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-4xl">
                                <div className="flex items-center gap-6 mb-4">
                                    <GraduationCap className="text-primary w-8 h-8" />
                                    <span className="text-xs font-black uppercase tracking-widest text-white">Next Session</span>
                                </div>
                                <h4 className="text-3xl font-black text-white tracking-tight uppercase leading-none">Portfolio of The Future</h4>
                                <p className="text-slate-400 text-sm mt-4 font-light">Led by <span className="text-white font-bold">Sameer Khan, CEO</span> of DesignX Labs.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareerSeminarCTA;
