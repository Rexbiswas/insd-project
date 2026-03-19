import React from 'react';
import { motion } from 'framer-motion';
import { 
    Users, 
    MessageSquare, 
    Video, 
    Calendar, 
    Award, 
    Globe, 
    TrendingUp,
    Mic2,
    Briefcase,
    Star,
    ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const IndustryInteraction = () => {
    return (
        <div className="bg-white min-h-screen font-sans selection:bg-primary selection:text-white">
            <SEO 
                title="Industry Interaction & Expert Sessions | INSD"
                description="Connect with the world's most influential design leaders through INSD's industry interaction program. We host regular masterclasses, workshops, and expert sessions to bridge the gap between classroom and career."
            />

            {/* --- HERO SECTION --- */}
            <section className="relative pt-32 pb-48 px-6 md:px-12 lg:px-24 overflow-hidden bg-slate-50">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1600" 
                        alt="Industry Interaction" 
                        className="w-full h-full object-cover opacity-5 grayscale"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-slate-50 via-slate-50/90 to-transparent" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-4xl space-y-8 text-center md:text-left mx-auto md:mx-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.3em] border border-primary/10">
                                Bridging the Gap
                            </span>
                            <h1 className="text-5xl md:text-[6rem] font-black text-slate-900 uppercase tracking-tighter leading-[0.9]">
                                Industry <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Interaction</span>
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 font-bold max-w-2xl leading-relaxed uppercase tracking-tight"
                        >
                            Exposing students to real-world workflows through high-impact masterclasses, workshops, and live interactions with global design titans.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-4"
                        >
                                <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary transition-all transform hover:scale-105 shadow-xl shadow-slate-900/10">
                                    Our Ecosystem
                                </button>
                            <button className="flex items-center gap-3 text-slate-900 group">
                                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                    <Video className="w-5 h-5" />
                                </div>
                                <span className="font-black uppercase text-xs tracking-widest">Watch Archives</span>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- INTERACTION MODES --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative z-20">
                <div className="max-w-7xl mx-auto space-y-24">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        {[
                            { 
                                title: "Masterclasses", 
                                icon: Mic2, 
                                desc: "Deep dives into specialized techniques led by international masters." 
                            },
                            { 
                                title: "Live Portfolio Reviews", 
                                icon: Star, 
                                desc: "Get one-on-one feedback from industry leaders on your professional body of work." 
                            },
                            { 
                                title: "Workshop Residencies", 
                                icon: Briefcase, 
                                desc: "Intensive 3-5 day programs focused on product innovation and execution." 
                            },
                            { 
                                title: "Virtual Summits", 
                                icon: Globe, 
                                desc: "Connecting with global design trends through online interaction labs." 
                            }
                        ].map((mode, idx) => (
                            <motion.div 
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="space-y-6 group"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                                    <mode.icon size={28} />
                                </div>
                                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">{mode.title}</h3>
                                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest leading-relaxed">
                                    {mode.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* --- FEATURED GUESTS GRID --- */}
                    <div className="space-y-16">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                            <div className="space-y-4">
                                <span className="text-primary font-black uppercase text-[10px] tracking-[0.4em]">Elite Leadership</span>
                                <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                                    Voices That <br /> <span className="text-slate-300">Resonate</span>
                                </h2>
                            </div>
                            <p className="text-slate-500 font-bold text-sm uppercase tracking-tight max-w-md md:text-right">
                                Our students have learned from the best in the business, from Luxury CEOs to award-winning creative directors.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                            {[
                                { name: "International Designers", role: "Paris Fashion Week", img: "https://images.unsplash.com/photo-1544928147-3949a376c94e?auto=format&fit=crop&q=80&w=800" },
                                { name: "Creative Directors", role: "Global Ad Agencies", img: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800" },
                                { name: "Luxury Brand Managers", role: "European Labels", img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" }
                            ].map((person, idx) => (
                                <div key={idx} className="relative aspect-[4/5] overflow-hidden group cursor-pointer bg-slate-900">
                                    <img 
                                        src={person.img} 
                                        alt={person.name} 
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 shadow-2xl grayscale hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                                    <div className="absolute bottom-10 left-10 space-y-2">
                                        <h4 className="text-white text-2xl font-black uppercase tracking-tighter">{person.name}</h4>
                                        <p className="text-primary text-[10px] font-black uppercase tracking-widest">{person.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* --- TESTIMONIAL --- */}
            <section className="py-32 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <div className="flex justify-center gap-2">
                        {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={20} className="text-primary fill-primary" />)}
                    </div>
                    <blockquote className="text-2xl md:text-4xl font-black text-slate-800 uppercase tracking-tighter leading-tight italic">
                        "The guest sessions at INSD weren't just lectures; they were reality checks. Hearing directly from someone building the brands we only see in magazines changed how I approached my designs."
                    </blockquote>
                    <div className="space-y-1">
                        <p className="text-slate-900 font-black uppercase tracking-widest text-sm">— ARYA MALHOTRA</p>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Master of Fashion Design '24</p>
                    </div>
                </div>
            </section>

            {/* --- FINAL CTA --- */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-900 relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
                 
                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
                     <div className="space-y-6 text-center md:text-left">
                         <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                             Join the <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Conversation</span>
                         </h2>
                         <p className="text-slate-400 font-bold text-lg uppercase tracking-tight max-w-md">
                             Are you a design leader interested in mentoring the next generation of creative talent?
                         </p>
                     </div>
                     <div className="flex flex-col sm:flex-row gap-6">
                        <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-black uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all transform hover:scale-105 shadow-2xl">
                            Request Expert Session
                        </button>
                        <button className="px-10 py-5 border border-white/20 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-900 transition-all">
                            Partner with us
                        </button>
                     </div>
                 </div>
            </section>

            <Footer />
        </div>
    );
};

export default IndustryInteraction;
