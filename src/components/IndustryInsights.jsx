import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Globe, Briefcase, Zap, Phone } from 'lucide-react';

const IndustryInsights = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="mb-16">
                    <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Design Industry Insights</span>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                        Why Design & Why Now?
                    </h2>
                </div>



                {/* Growth Stats Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white p-10 rounded-4xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8 mb-8"
                >
                    <div className="flex-1 space-y-2 border-r border-slate-100 pr-8">
                        <span className="text-6xl font-black text-primary tracking-tighter">18%</span>
                        <p className="text-slate-400 font-bold uppercase text-xs">Yearly Growth in India</p>
                        <p className="text-slate-500 font-medium">One of the fastest-growing professional sectors globally.</p>
                    </div>
                    <div className="flex-1 space-y-2 pl-0 md:pl-4">
                        <span className="text-6xl font-black text-slate-800 tracking-tighter">₹50K</span>
                        <p className="text-slate-400 font-bold uppercase text-xs">Cr Industry Reach by 2026</p>
                        <p className="text-slate-500 font-medium">The creative economy is the new pillar of the modern workforce.</p>
                    </div>
                </motion.div>

                {/* Small Highlights */}
                <div className="grid grid-cols-2 gap-8 md:gap-8 mb-16">
                    <div className="bg-slate-100 p-8 rounded-4xl space-y-4">
                        <h5 className="font-black text-slate-800">Global Exposure</h5>
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default overflow-hidden">
                            <span className="font-black text-2xl tracking-tighter">ZARA</span>
                            <span className="font-black text-2xl tracking-tighter">NIKE</span>
                        </div>
                    </div>
                    <div className="bg-slate-100 p-8 rounded-4xl space-y-4">
                        <h5 className="font-black text-slate-800">Placement Record</h5>
                        <div className="flex gap-4 opacity-50 grayscale hover:grayscale-0 transition-all cursor-default overflow-hidden">
                            <span className="font-black text-2xl tracking-tighter">H&M</span>
                            <span className="font-black text-2xl tracking-tighter">IKEA</span>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-linear-to-r from-slate-900 via-primary to-slate-900 p-12 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative"
                >
                    <div className="relative z-10 space-y-4 text-center md:text-left">
                        <span className="font-bold text-primary-light uppercase tracking-widest text-sm opacity-80">Career Roadmap</span>
                        <h3 className="text-4xl md:text-6xl font-black">Get prepared for <br /> <span className="italic">Excellence</span></h3>
                        <ul className="space-y-2 font-bold text-slate-300">
                            <li className="flex items-center gap-3"><Zap className="w-5 h-5 text-primary" /> Industry-aligned projects</li>
                            <li className="flex items-center gap-3"><Globe className="w-5 h-5 text-primary" /> International design exposure</li>
                            <li className="flex items-center gap-3"><Briefcase className="w-5 h-5 text-primary" /> Strong Freelancing Support</li>
                        </ul>
                    </div>

                    <div className="relative z-10 flex flex-col items-center gap-8">
                        <div className="flex -space-x-4 mb-4">
                            {[1, 2, 3].map(i => (
                                <img key={i} src={`https://i.pravatar.cc/100?img=${i + 10}`} className="w-20 h-20 rounded-full border-4 border-slate-900 shadow-2xl" />
                            ))}
                        </div>
                        <Link to="/mentors">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary text-white px-12 py-5 rounded-full font-black uppercase tracking-widest flex items-center gap-4 group"
                            >
                                Talk to our Experts
                                <Phone className="w-5 h-5" />
                            </motion.button>
                        </Link>
                    </div>

                    {/* Ambient Glow */}
                    <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-primary/20 to-transparent opacity-30"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustryInsights;
