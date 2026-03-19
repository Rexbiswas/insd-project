import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    CheckCircle2, 
    ChevronDown, 
    Smartphone, 
    Globe, 
    Zap, 
    Layers, 
    ArrowRight,
    Sparkles
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const UIUXDesigning = () => {
    const [activeOutline, setActiveOutline] = useState('PG');
    const [expandedYear, setExpandedYear] = useState(1);

    const curriculumData = {
        PG: {
            year1: [
                "User Experience (UX) Fundamentals",
                "Interaction Design Principles",
                "Visual Interface (UI) Design",
                "User Research & Personas",
                "Information Architecture",
                "Wireframing & Prototyping",
                "Digital Product Strategy",
                "Usability Testing Methods"
            ],
            year2: [
                "Advanced Mobile App Design",
                "Responsive Web Ecosystems",
                "Design Systems at Scale",
                "Motion Design for Interfaces",
                "AI in Design Workflows",
                "Professional UX Portfolio"
            ]
        },
        UG: {
            year1: [
                "Basics of Digital Design",
                "Color & Typography for Web",
                "Intro to User Centered Design",
                "Digital Illustration Basics",
                "HTML/CSS for Designers",
                "Layout & Grid Systems",
                "Visual Hierarchy",
                "Design Thinking Process"
            ],
            year2: [
                "Intermediate UI Lab",
                "Mobile Interface Basics",
                "E-commerce Design Lab",
                "Software Tools (Figma/Adobe)",
                "Accessibility Standards",
                "Graphic Design for UI"
            ]
        }
    };

    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="UI/UX Design Course | INSD International School of Design"
                description="Master the future of digital interaction with INSD's UI/UX program. Learn user research, high-fidelity prototyping, and design systems for global tech leaders."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/uiux_design_hero_modern_1773916987060.png" 
                        alt="UI/UX Design Studio" 
                        className="w-full h-full object-cover scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                            UI/UX Design
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed max-w-4xl mx-auto">
                            Design the invisible bridges between humans and technology. Master the data-driven art of user experience and the pixel-perfect precision of interface design.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- CURRICULUM SECTION --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter">
                            Curriculum
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        <div className="w-full lg:w-72 space-y-4 shrink-0">
                            <button 
                                onClick={() => setActiveOutline('PG')}
                                className={`w-full py-5 px-8 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 border-2 ${
                                    activeOutline === 'PG' 
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-[1.02]' 
                                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-900 hover:text-slate-900'
                                }`}
                            >
                                PG Course Outline
                            </button>
                            <button 
                                onClick={() => setActiveOutline('UG')}
                                className={`w-full py-5 px-8 rounded-full font-black uppercase text-xs tracking-[0.2em] transition-all duration-300 border-2 ${
                                    activeOutline === 'UG' 
                                    ? 'bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-900/20 scale-[1.02]' 
                                    : 'bg-white border-slate-200 text-slate-400 hover:border-slate-900 hover:text-slate-900'
                                }`}
                            >
                                UG Course Outline
                            </button>
                        </div>

                        <div className="flex-1 w-full space-y-4">
                            <div className="border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50">
                                <button 
                                    onClick={() => setExpandedYear(expandedYear === 1 ? 0 : 1)}
                                    className="w-full flex items-center justify-between p-8 bg-white hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-xl transition-colors ${expandedYear === 1 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${expandedYear === 1 ? 'rotate-180' : ''}`} />
                                        </div>
                                        <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">« 1 Year</span>
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {expandedYear === 1 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                        >
                                            <div className="p-8 md:p-12 border-t border-slate-100">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                    {curriculumData[activeOutline].year1.map((item, idx) => (
                                                        <motion.div 
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-start gap-4 group"
                                                        >
                                                            <div className="mt-1">
                                                                <div className="w-5 h-5 rounded-md bg-amber-400 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                                                    <CheckCircle2 size={12} className="stroke-3" />
                                                                </div>
                                                            </div>
                                                            <span className="text-slate-600 font-bold text-sm md:text-base group-hover:text-slate-900 transition-colors uppercase tracking-tight">
                                                                {item}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="border border-slate-100 rounded-3xl overflow-hidden bg-slate-50/50">
                                <button 
                                    onClick={() => setExpandedYear(expandedYear === 2 ? 0 : 2)}
                                    className="w-full flex items-center justify-between p-8 bg-white hover:bg-slate-50 transition-colors group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2 rounded-xl transition-colors ${expandedYear === 2 ? 'bg-primary text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'}`}>
                                            <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${expandedYear === 2 ? 'rotate-180' : ''}`} />
                                        </div>
                                        <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">» 2 Year</span>
                                    </div>
                                </button>
                                
                                <AnimatePresence initial={false}>
                                    {expandedYear === 2 && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                                        >
                                            <div className="p-8 md:p-12 border-t border-slate-100">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                                                    {curriculumData[activeOutline].year2.map((item, idx) => (
                                                        <motion.div 
                                                            key={idx}
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.05 }}
                                                            className="flex items-start gap-4 group"
                                                        >
                                                            <div className="mt-1">
                                                                <div className="w-5 h-5 rounded-md bg-amber-400 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                                                                    <CheckCircle2 size={12} className="stroke-3" />
                                                                </div>
                                                            </div>
                                                            <span className="text-slate-600 font-bold text-sm md:text-base group-hover:text-slate-900 transition-colors uppercase tracking-tight">
                                                                {item}
                                                            </span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CORE MODULES SHOWCASE --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-full rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto space-y-16">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Future-Proof Pedagogy</span>
                        <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            The Design <br /> <span className="text-slate-300">Edge</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
                        {[
                            { title: "Design Systems", desc: "Building scalable atomic design components for multi-platform digital products.", icon: Layers },
                            { title: "AI-Driven UX", desc: "Leveraging artificial intelligence to automate research and generate predictive interfaces.", icon: Sparkles },
                            { title: "Interaction Lab", desc: "Mastering complex micro-animations and spatial transitions for modern touch-points.", icon: Zap },
                        ].map((item, idx) => (
                            <div key={idx} className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200/50">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                    <item.icon size={32} />
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{item.title}</h4>
                                <p className="text-slate-500 font-bold text-sm md:text-base leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA Strip */}
                    <div className="relative p-12 md:p-24 bg-slate-900 rounded-[3.5rem] overflow-hidden group">
                        <div className="absolute inset-0 z-0 bg-primary/10 group-hover:bg-primary/20 transition-colors" />
                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
                            <div className="space-y-4">
                                <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">
                                    Ready to design the <br /> <span className="text-primary italic">future?</span>
                                </h3>
                                <p className="text-white/50 font-medium max-w-sm">Join the 2026 session. Limited seats for high-potential tech creative visionaries.</p>
                            </div>
                            <button className="px-16 py-6 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-primary hover:text-white transition-all transform hover:scale-105">
                                Start Application
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default UIUXDesigning;
