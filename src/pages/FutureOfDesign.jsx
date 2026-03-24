import React from 'react';
import { motion } from 'framer-motion';
import { 
    Sparkles, 
    Zap, 
    Globe, 
    Layers, 
    Cpu, 
    Database, 
    Fingerprint,
    ArrowUpRight,
    Search,
    Compass
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const FutureOfDesign = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white overflow-hidden">
            <SEO 
                title="Future of Design | INSD"
                description="Explore the next frontier of creativity. From Generative AI to Sustainable Ecosystems, discover how INSD is shaping the designers of 2048 and beyond."
            />

            {/* --- FUTURISTIC HERO (WHITE VARIANT) --- */}
            <section className="relative pt-32 pb-40 px-6 md:px-12 lg:px-24 flex items-center justify-center overflow-hidden bg-white">
                {/* Visual Decorations */}
                <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
                    <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[200px] -translate-x-1/2 -translate-y-1/2 animate-pulse" />
                    <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[200px] translate-x-1/2 translate-y-1/2" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-slate-200 bg-slate-50 backdrop-blur-md mb-4"
                    >
                        <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Beyond the Horizon</span>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-6xl md:text-[9.5rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.8]"
                        >
                            The <br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-slate-500 to-secondary">Future</span> <br />
                            Of Design
                        </motion.h1>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                            className="text-slate-500 font-bold text-lg md:text-2xl max-w-3xl mx-auto uppercase tracking-tight leading-relaxed"
                        >
                            Synchronizing Human Intuition with Algorithmic Intelligence. We are not just predicting the future; we are prototyping it.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all transform hover:scale-105 shadow-2xl">
                            Explore Innovation Lab
                        </button>
                        <button className="px-12 py-5 border border-slate-200 text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-50 transition-all">
                            View 2048 Roadmap
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* --- CORE PILLARS --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-slate-50 border-y border-slate-100 relative z-10">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="space-y-4 max-w-2xl">
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Strategic Foresight</span>
                            <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                Design <br /> <span className="text-slate-300 italic">Ecosystems</span>
                            </h2>
                        </div>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-tight max-w-md text-right">
                            Our curriculum transcends aesthetics to focus on the interplay of technology, biology, and data-driven creative problem solving.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: 'Generative XR', icon: Layers, desc: 'AI architects creating infinite, adaptive meta-realities that respond instantly to user intent.', color: 'bg-blue-500' },
                            { title: 'Sentient Bio', icon: Fingerprint, desc: 'Synthesizing AI and molecular biology to grow living, responsive design ecosystems.', color: 'bg-green-500' },
                            { title: 'AI Governance', icon: Database, desc: 'Embedding ethical AI frameworks to ensure unbiased, inclusive global creative problem solving.', color: 'bg-purple-500' },
                            { title: 'Circular AI', icon: Globe, desc: 'AI-optimized zero-waste manufacturing pipelines driven by predictive demand synthesis.', color: 'bg-rose-500' }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:bg-slate-900 hover:scale-[1.02] transition-all duration-500 overflow-hidden relative shadow-sm"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 ${item.color} opacity-0 group-hover:opacity-10 blur-[60px] rounded-full transition-opacity`} />
                                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                                    <item.icon size={24} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 group-hover:text-white uppercase tracking-tighter mb-4">{item.title}</h3>
                                <p className="text-slate-500 group-hover:text-slate-400 font-bold text-xs uppercase tracking-[0.1em] leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INNOVATION TIMELINE (20% BLACK ASPECT) --- */}
            <section className="py-40 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="text-center space-y-4">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">The Design Epoch</span>
                        <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">
                            Design <span className="text-white/20">Evolution</span>
                        </h2>
                    </div>

                    <div className="relative border-l border-white/10 ml-6 md:ml-0 md:border-l-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12">
                        {[
                            { year: '2024', event: 'AGENTIC DESIGN', desc: 'AI collaborators evolve from simple tools to active, sentient companions in the creative process.' },
                            { year: '2026', event: 'GENERATIVE SPACES', desc: 'AI-driven spatial layers that dynamically adapt in real-time to human behavior and intent.' },
                            { year: '2030', event: 'NEURAL SYMMETRY', desc: 'Direct thought-to-design pipelines powered by AI that interprets subconscious aesthetic vision.' },
                            { year: '2035', event: 'NANO-SYNTHESIS', desc: 'Autonomous AI molecules constructing self-healing, shapeshifting smart apparel and textures.' },
                            { year: '2042', event: 'SENTIENT HABITATS', desc: 'AI urban ecosystems that morph their visual and structural DNA based on collective emotions.' },
                            { year: '2048', event: 'ATOMIC GENERATIVE', desc: 'Quantum AI enabling design at the subatomic level, where matter is curated via algorithmic intent.' }
                        ].map((node, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative pl-12 md:pl-0 md:pt-12 mb-12 md:mb-0"
                            >
                                <div className="absolute left-[-5px] top-0 md:left-0 md:top-[-5px] w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_15px_rgba(219,52,54,0.8)]" />
                                <div className="space-y-3">
                                    <span className="text-4xl md:text-5xl font-black text-white leading-none inline-block mb-2">{node.year}</span>
                                    <h4 className="text-primary font-black uppercase tracking-[0.3em] text-[10px]">{node.event}</h4>
                                    <p className="text-slate-400 font-bold text-xs uppercase tracking-widest leading-relaxed">
                                        {node.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                        
                        {/* Desktop Horizontal Line */}
                        <div className="hidden lg:block absolute top-1.5 left-0 right-0 h-px bg-white/10 -z-10" />
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default FutureOfDesign;
