import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    TrendingUp, 
    Target, 
    Award, 
    Globe, 
    Cpu, 
    Layers, 
    ArrowRight,
    Zap,
    Briefcase,
    GraduationCap,
    Lightbulb,
    BarChart3
} from 'lucide-react';
import GrowthChart from '../components/GrowthChart';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const FutureOfDesign = () => {

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white overflow-hidden">
            <SEO 
                title="Future of Design | Skills are the Future | INSD"
                description="Explore the massive shift in India's creative economy. Discover why design is the new tech and how skill-based education is shaping the 2026 budget and beyond."
            />

            {/* --- HERO SECTION: DESIGN IS EVERYWHERE --- */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
                {/* Subtle Background Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
                    <motion.div 
                        animate={{ 
                            x: [0, 50, 0],
                            y: [0, -30, 0],
                            rotate: [0, 5, 0]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="absolute top-10 left-[10%] w-[30%] aspect-video rounded-3xl overflow-hidden border border-slate-200 blur-[1px]"
                    >
                        <img src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" alt="Fashion" className="w-full h-full object-cover" />
                    </motion.div>
                    <motion.div 
                        animate={{ 
                            x: [0, -40, 0],
                            y: [0, 40, 0],
                            rotate: [0, -3, 0]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="absolute bottom-20 right-[5%] w-[35%] aspect-square rounded-full overflow-hidden border border-slate-200 blur-[2px]"
                    >
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Architecture" className="w-full h-full object-cover" />
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 px-6 text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-slate-950 uppercase tracking-tightest leading-[0.8] mb-8">
                            Design Is <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-slate-400 to-primary italic">Everywhere</span>
                        </h1>
                        <p className="text-slate-400 font-bold text-lg md:text-2xl max-w-4xl mx-auto uppercase tracking-tight leading-loose">
                            From the products you touch to the spaces you inhabit. 
                            <span className="text-slate-950"> Design is no longer a hobby; it is a serious career opportunity.</span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button className="group px-12 py-5 bg-primary text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-950 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3">
                            Join the Skill Revolution
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- THE SHIFT IN INDIA SECTION (Inspired by Image 1) --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-primary font-black uppercase text-xs tracking-[0.4em]">The Market Shift</h2>
                                <h3 className="text-5xl md:text-7xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                                    Skills Are <br /> <span className="text-slate-300">The Future</span>
                                </h3>
                            </div>
                            
                            <p className="text-slate-600 text-lg font-bold uppercase tracking-tight leading-relaxed border-l-4 border-primary pl-6">
                                India is moving towards skill-based education. The "Orange Economy" is projected to need 20 lakh professionals by 2033.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { text: "Design is a high-growth career path.", icon: TrendingUp },
                                    { text: "Projected 20 Lakh jobs in Creative Sector by 2033.", icon: Briefcase },
                                    { text: "Global demand for professional Indian Designers.", icon: Globe }
                                ].map((item, idx) => (
                                    <motion.div 
                                        key={idx}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 group transition-all"
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                            <item.icon size={24} />
                                        </div>
                                        <span className="text-slate-900 font-extrabold uppercase text-sm tracking-widest">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive Data Visualization */}
                        <GrowthChart />
                    </div>
                </div>
            </section>

            {/* --- BUDGET 2026 SECTION (Inspired by Image 2) --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-slate-50 relative border-y border-slate-100">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-8 space-y-12">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-widest">
                                <Zap size={14} />
                                Budget 2026 Update
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black text-slate-950 uppercase tracking-tighter leading-none">
                                Design Is <br /> <span className="text-primary italic">The New Tech</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-sm">
                                <GraduationCap className="text-primary" size={32} />
                                <h4 className="text-xl font-black uppercase tracking-tighter">15,000 Schools</h4>
                                <p className="text-slate-500 text-sm font-bold uppercase tracking-tight leading-relaxed">
                                    Govt. to introduce AVGC Labs in schools nationwide to boost skill development from the foundation.
                                </p>
                            </div>
                            <div className="p-8 bg-white border border-slate-200 rounded-3xl space-y-4 shadow-sm">
                                <Award className="text-primary" size={32} />
                                <h4 className="text-xl font-black uppercase tracking-tighter">New NID Clusters</h4>
                                <p className="text-slate-500 text-sm font-bold uppercase tracking-tight leading-relaxed">
                                    Strategic expansion of National Institutes of Design to bridge the industry-talent gap.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 relative group">
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="relative overflow-hidden rounded-[3.5rem] shadow-2xl h-full min-h-[400px]"
                        >
                            <img 
                                src="https://tse2.mm.bing.net/th/id/OIP.KWaUVJW5bvb12bdMy9k7DQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" 
                                alt="Nirmala Sitharaman Budget" 
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-75 group-hover:brightness-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                            
                            <div className="absolute bottom-10 left-10 right-10 space-y-4">
                                <div className="w-12 h-1 bg-primary" />
                                <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">The Budget <br /> Narrative</h3>
                                <p className="text-white/70 font-bold uppercase text-[10px] tracking-widest leading-relaxed">
                                    "Special focus on Skill India and Creative Economy."
                                </p>
                            </div>
                        </motion.div>
                        <div className="absolute -inset-4 border-2 border-primary/10 rounded-[4rem] -z-10 group-hover:border-primary/30 transition-colors duration-500" />
                    </div>
                </div>
            </section>

            {/* --- FINAL STAT STRIP --- */}
            <section className="py-24 px-6 bg-slate-50 text-slate-950 overflow-hidden relative border-t border-slate-100">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-16 md:gap-32 lg:gap-48 text-center">
                    {[
                        { label: "Projected Professionals", value: "20 Lakh+", sub: "By 2033" },
                        { label: "Investment Growth", value: "3.5X", sub: "Creative Sector" },
                        { label: "New Tech Focus", value: "AVGC-XR", sub: "Next-Gen Design" }
                    ].map((stat, i) => (
                        <div key={i} className="space-y-2 min-w-[200px]">
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em]">{stat.label}</p>
                            <h4 className="text-4xl md:text-6xl font-black text-primary uppercase tracking-tightest">{stat.value}</h4>
                            <p className="text-slate-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{stat.sub}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FutureOfDesign;
