import React from 'react';
import { motion } from 'framer-motion';
import { 
    Zap, 
    Rocket, 
    Target, 
    Globe, 
    Users, 
    Award, 
    ArrowRight,
    Briefcase,
    Lightbulb,
    TrendingUp,
    Shield
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Entrepreneur = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Entrepreneurship & Startup Incubation | INSD"
                description="Ignite your entrepreneurial journey with INSD's startup incubation cell. We provide the mentorship, resources, and global network to turn your design vision into a successful venture."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-64 px-6 md:px-12 lg:px-24 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=1600" 
                        alt="Startup Culture" 
                        className="w-full h-full object-cover opacity-5 scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-white via-white/80 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="w-full lg:w-2/3 space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4"
                            >
                                <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary rounded-full text-xs font-black uppercase tracking-widest border border-primary/20">
                                    INSD Startup Cell
                                </span>
                                <h1 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                                    Igniting The <br />
                                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Entrepreneurial</span> <br />
                                    Spirit
                                </h1>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-xl text-slate-500 font-bold max-w-2xl leading-relaxed uppercase tracking-tight"
                            >
                                From visionary concepts to market-ready ventures. INSD provides the strategic bridge between design excellence and business profitability.
                            </motion.p>

                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-wrap items-center justify-center lg:justify-start gap-8"
                            >
                                <button className="px-10 py-4 bg-primary text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-secondary transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
                                    Apply for Incubation
                                </button>
                                <button className="flex items-center gap-3 text-slate-900 group">
                                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                    <span className="font-black uppercase text-xs tracking-widest">Our Ecosystem</span>
                                </button>
                            </motion.div>
                        </div>

                        <div className="hidden lg:block w-1/3">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="relative aspect-square"
                            >
                                <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full animate-pulse" />
                                <div className="relative z-10 w-full h-full border border-slate-100 rounded-[3rem] p-12 flex items-center justify-center bg-white/50 backdrop-blur-3xl overflow-hidden group">
                                    <Zap size={160} className="text-primary group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                <div 
                    className="absolute bottom-0 left-0 w-full h-32 md:h-48 bg-white"
                    style={{ clipPath: 'polygon(0 80%, 100% 0, 100% 100%, 0% 100%)' }}
                />
            </section>

            {/* --- ECOSYSTEM STATS --- */}
            <section className="bg-white py-24 px-6 md:px-12 lg:px-24 -mt-32 relative z-20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-1">
                    {[
                        { label: "Startups Founded", value: "150+" },
                        { label: "Industry Partners", value: "300+" },
                        { label: "Startup Mentors", value: "50+" },
                        { label: "Global Network", value: "25+" }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-slate-50 p-12 text-center space-y-4 border border-slate-100 hover:bg-slate-900 group transition-all duration-500">
                            <div className="text-4xl md:text-6xl font-black text-slate-900 group-hover:text-white transition-colors tracking-tighter">
                                {stat.value}
                            </div>
                            <div className="text-[10px] md:text-xs font-black uppercase text-slate-400 group-hover:text-primary transition-colors tracking-[0.3em]">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- INCUBATION PILLARS --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto space-y-20">
                    <div className="text-center space-y-6 max-w-3xl mx-auto">
                        <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Strategic Support</span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            Our <span className="text-slate-300">Incubation</span> Pillars
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { 
                                title: "Business Strategy", 
                                desc: "Master the art of lean startups, scaling models, and pricing architectures tailored for the luxury and lifestyle sectors.",
                                icon: Target 
                            },
                            { 
                                title: "Funding Assistance", 
                                desc: "Get direct access to angel investors, venture capitalists, and pitch-day opportunities to fuel your startup's growth.",
                                icon: TrendingUp 
                            },
                            { 
                                title: "IP & Legal Support", 
                                desc: "Protect your creative legacy with expert legal guidance on trademarks, patents, and copyright frameworks.",
                                icon: Shield 
                            },
                            { 
                                title: "Global Marketplace", 
                                desc: "Leverage INSD's international partnerships to launch your brand in European and Asian markets.",
                                icon: Globe 
                            },
                            { 
                                title: "Expert Mentorship", 
                                desc: "Learn from CXOs, Founders, and specialized business consultants who have built multi-million dollar brands.",
                                icon: Users 
                            },
                            { 
                                title: "Co-working Studio", 
                                desc: "Access high-end infrastructure, prototyping labs, and collaborative spaces designed for creative entrepreneurs.",
                                icon: Briefcase 
                            }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-12 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all duration-500 group relative"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                                    <pillar.icon size={32} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter mb-4">{pillar.title}</h3>
                                <p className="text-slate-500 font-bold text-sm leading-relaxed uppercase tracking-tight">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- INNOVATION LAB --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
                    <div className="w-full lg:w-1/2 space-y-10">
                        <div className="space-y-4 text-center lg:text-left">
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Future-Forward</span>
                            <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                THE <br /> <span className="text-slate-300">INNOVATION</span> <br /> LAB
                            </h2>
                        </div>
                        
                        <p className="text-slate-600 font-bold text-lg leading-relaxed uppercase tracking-tight max-w-lg">
                            We don't just teach design; we cultivate design-led thinkers who solve complex problems and build enduring institutions.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Bespoke Mentorship from Industry Legends",
                                "Annual 'Shark-Tank' Style Pitch Days",
                                "Zero-Equity Incubation Support",
                                "Access to Elite Global Supply Chains"
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                                        <div className="w-2 h-2 bg-primary rounded-full group-hover:bg-white" />
                                    </div>
                                    <span className="font-black uppercase text-xs tracking-widest text-slate-900">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl">
                           <img 
                               src="https://images.unsplash.com/photo-1542744094-3a31f272c441?auto=format&fit=crop&q=80&w=800"
                               alt="Entrepreneurship Lab"
                               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                           />
                           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                           <div className="absolute bottom-12 left-12 right-12 p-8 md:p-12 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl">
                               <p className="text-white font-bold text-sm md:text-base leading-relaxed italic text-center uppercase tracking-tight">
                                   "The incubation center at INSD was the turning point for my brand. They didn't just give me space; they gave me a roadmap to market dominance."
                               </p>
                               <div className="mt-8 flex items-center justify-center gap-4">
                                   <div className="h-px w-8 bg-white/30" />
                                   <span className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-none">ALUMNI FOUNDER</span>
                                   <div className="h-px w-8 bg-white/30" />
                               </div>
                           </div>
                        </div>
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/5 blur-[100px] rounded-full" />
                
                <div className="max-w-5xl mx-auto text-center space-y-12 relative z-10">
                    <div className="inline-block p-4 rounded-full bg-slate-50 border border-slate-100 mb-4 animate-bounce">
                        <Rocket size={40} className="text-primary" />
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        Ready To <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Launch</span>?
                    </h2>
                    <p className="text-slate-500 font-bold text-lg md:text-2xl max-w-3xl mx-auto uppercase tracking-tight leading-relaxed">
                        Don't let your vision stay a dream. Join the next cohort of high-performing entrepreneurs and scale your design empire.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <button className="px-12 py-5 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest shadow-2xl hover:bg-primary transition-all transform hover:scale-105">
                            Submit Your Startup Pitch
                        </button>
                        <button className="px-12 py-5 border border-slate-200 text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                            Speak with a Business Mentor
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Entrepreneur;
