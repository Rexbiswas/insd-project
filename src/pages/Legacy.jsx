import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Zap, Globe, Target, Award, Rocket, Landmark } from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Legacy = () => {
    const milestones = [
        {
            year: "2011",
            title: "INSD is founded",
            desc: "With a simple idea: make design education practical. Prepare students to be skill-focused and placement ready.",
            bg: "bg-[#0f172a]",
            textColor: "text-white",
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800",
            type: "text"
        },
        {
            type: "image",
            img: "https://images.unsplash.com/photo-1544928147-7972df46599e?q=80&w=800"
        },
        {
            year: "2013",
            title: "Launch of core programs",
            desc: "In Fashion, Interior and Graphic Design with studio-based learning at the centre.",
            bg: "bg-[#9b1d20]",
            textColor: "text-white",
            type: "text"
        },
        {
            type: "image",
            img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800"
        },
        {
            year: "2017",
            title: "INSD wins recognition",
            desc: "As one of India's promising design schools for its hands-on teaching approach.",
            bg: "bg-[#2d7d9a]",
            textColor: "text-white",
            type: "text"
        },
        {
            year: "2017",
            title: "Introduction of specialised programs",
            desc: "In Jewellery Design, Textile Design, Photography, Animation & VFX and Beauty & Hair.",
            bg: "bg-[#3e5f8a]",
            textColor: "text-white",
            type: "text"
        },
        {
            type: "image",
            img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=800"
        },
        {
            year: "2018",
            title: "Network expands",
            desc: "To 50+ centres across 19 states, bringing design careers closer to students from tier-2 and tier-3 cities.",
            bg: "bg-[#6d4a7d]",
            textColor: "text-white",
            type: "text"
        },
        {
            year: "2024",
            title: "Curriculum upgraded",
            desc: "With AI, UX/UI and digital-first modules to keep students future-ready.",
            bg: "bg-[#020617]",
            textColor: "text-white",
            type: "text"
        },
        {
            year: "2023",
            title: 'Shri Yogendra Upadhyay Honourable Education Minister UP awards INSD as "The Fastest Growing design institute in India in 2023"',
            bg: "bg-[#dc2626]",
            textColor: "text-white",
            type: "text"
        },
        {
            type: "image",
            img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
        },
        {
            year: "2019",
            title: "International study programs",
            desc: "Begin taking students to fashion and design hubs like Paris, London etc.",
            bg: "bg-[#7f1d1d]",
            textColor: "text-white",
            type: "text"
        },
        {
            year: "2025",
            title: 'Awarded by Times of India for "Excellence in Design Education", having trained more than 15000 students.',
            bg: "bg-[#1e6091]",
            textColor: "text-white",
            type: "text"
        },
        {
            year: "2026",
            title: "INSD completes 15 YEARS and reaches 75+ centres in 23 states.",
            bg: "bg-[#111827]",
            textColor: "text-white",
            type: "text"
        },
        {
            type: "image",
            img: "https://insd.edu.in/wp-content/uploads/2019/11/Untitled-min-1024x542.jpg"
        }
    ];

    return (
        <div className="bg-[#f3f3f3] min-h-screen text-slate-900 font-sans pb-32">
            <SEO 
                title="15 Years' Legacy | International School of Design"
                description="Explore INSD's incredible journey since 2011. A 15-year legacy of excellence in design education, global expansion, and future-ready curriculum."
            />

            {/* --- HERO SECTION --- */}
            <section className="pt-40 pb-20 px-6 container mx-auto">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-px bg-primary"></span>
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Inception 2011</span>
                        </div>
                        <h1 className="text-7xl md:text-9xl font-black uppercase text-slate-900 leading-[0.8] tracking-tighter mb-8">
                            15 Years' <br />
                            <span className="text-transparent stroke-text-slate-900 italic font-serif">Legacy</span>
                        </h1>
                    </motion.div>
                    
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="w-64 h-64 border-2 border-slate-200 rounded-full flex items-center justify-center p-4">
                            <div className="text-center">
                                <span className="text-6xl font-black text-slate-900">15</span>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Centres of Excellence</p>
                            </div>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-primary text-white p-4 rounded-full shadow-xl">
                            <Sparkles className="w-6 h-6" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- TIMELINE GRID SECTION --- */}
            <section className="container mx-auto px-6 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
                    
                    {milestones.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: (i % 4) * 0.1 }}
                            className={`relative min-h-[350px] overflow-hidden ${m.type === 'text' ? m.bg + ' p-10 flex flex-col justify-between' : 'bg-white'}`}
                        >
                            {m.type === 'text' ? (
                                <>
                                    <div className="space-y-4">
                                        <h4 className={`text-sm font-black uppercase tracking-widest ${m.textColor}`}>
                                            {m.title}
                                        </h4>
                                        {m.desc && (
                                            <p className={`text-xs font-medium leading-relaxed opacity-80 ${m.textColor}`}>
                                                {m.desc}
                                            </p>
                                        )}
                                    </div>
                                    <div className={`text-7xl font-black tracking-tighter self-end ${m.textColor} opacity-60`}>
                                        {m.year}
                                    </div>
                                </>
                            ) : (
                                <img src={m.img} alt="Legacy" className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000" />
                            )}
                        </motion.div>
                    ))}

                    {/* Branding Tiles */}
                    <div className="lg:col-span-2 hidden lg:flex items-center justify-center bg-white p-12 border-slate-200">
                         <div className="text-center space-y-4">
                             <div className="text-giant font-black text-slate-900">15</div>
                             <div className="h-1 w-24 bg-primary mx-auto"></div>
                             <div className="text-xs font-black uppercase tracking-[0.5em] text-slate-400">Chapters of Innovation</div>
                         </div>
                    </div>

                </div>
            </section>

            {/* --- FOUNDER'S VISION & 2030 ROADMAP --- */}
            <section className="py-40 bg-[#0f172a] text-white mt-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        
                        <motion.div
                             initial={{ opacity: 0, x: -30 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                        >
                             <div className="flex items-center gap-3 mb-8">
                                 <span className="w-12 h-px bg-primary"></span>
                                 <span className="text-xs font-black uppercase tracking-[0.4em] text-primary">Founder's Statement</span>
                             </div>
                             <h2 className="text-3xl md:text-5xl font-serif leading-tight italic text-slate-100 mb-12">
                                 "Over the last fifteen years, the INSD has steadily evolved into a recognized name in creative education across art, design, technology and media."
                             </h2>
                             <p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                                 What began as a bold idea has grown into a nationwide presence with more than 75 city-centre campuses, in 23 states of India supported by progressive learning spaces and international collaborations.
                             </p>
                             <div className="space-y-2">
                                 <p className="text-2xl font-black uppercase tracking-tighter">Sunjey Aggarwal</p>
                                 <p className="text-xs font-black uppercase tracking-[0.5em] text-primary">Founder, INSD</p>
                             </div>
                        </motion.div>

                        <motion.div
                             initial={{ opacity: 0, x: 30 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             className="bg-white/5 backdrop-blur-3xl p-12 lg:p-16 border border-white/10 rounded-4xl"
                        >
                             <div className="flex items-center gap-4 mb-10">
                                 <Rocket className="text-primary w-8 h-8" />
                                 <h3 className="text-3xl font-black uppercase tracking-tighter">INSD Vision 2030</h3>
                             </div>

                             <div className="space-y-8">
                                 {[
                                     "Build India's largest design education network",
                                     "Train Lakhs of designers for success",
                                     "Connect education with industry",
                                     "Support young creative entrepreneurs"
                                 ].map((item, idx) => (
                                     <div key={idx} className="flex gap-6 items-start">
                                         <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                                             <div className="w-2 h-2 rounded-full bg-primary" />
                                         </div>
                                         <p className="text-lg lg:text-xl font-bold text-slate-300 uppercase leading-none tracking-tight pt-2">{item}</p>
                                     </div>
                                 ))}
                             </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Legacy;
