import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Globe, Briefcase, Rocket, ExternalLink } from 'lucide-react';

const DreamLife = () => {
    const outcomes = [
        {
            title: "Global Shows",
            subtitle: "Runway & Presence",
            img: "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: <Camera className="w-6 h-6" />,
            color: "from-primary/20 to-transparent"
        },
        {
            title: "Luxury Studios",
            subtitle: "Creative Workspaces",
            img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: <Briefcase className="w-6 h-6" />,
            color: "from-blue-500/20 to-transparent"
        },
        {
            title: "Freelance Freedom",
            subtitle: "Digital Nomad Life",
            img: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: <Globe className="w-6 h-6" />,
            color: "from-emerald-500/20 to-transparent"
        },
        {
            title: "Entrepreneurship",
            subtitle: "Build Your Brand",
            img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: <Rocket className="w-6 h-6" />,
            color: "from-orange-500/20 to-transparent"
        }
    ];

    return (
        <section className="relative py-24 md:py-48 bg-white overflow-hidden">
            {/* Background Narrative */}
            <div className="absolute inset-0 bg-[#f8fafc] h-1/2 md:h-2/3 pointer-events-none" />
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-24 md:mb-32">
                    <div className="max-w-4xl">
                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-[7vw] font-black uppercase tracking-tighter leading-[0.85] text-slate-900 mb-12"
                        >
                            This Is The Life <br />
                            <span className="stroke-text-black italic font-serif">Design</span> Can Give You
                        </motion.h1>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="flex flex-col md:flex-row md:items-end gap-8"
                        >
                            <h2 className="text-xl md:text-3xl font-black uppercase tracking-tight text-slate-800 max-w-2xl leading-tight">
                                Design today is not just a career. <br className="hidden md:block" />
                                It’s a global lifestyle powered by skills, <br className="hidden md:block" />
                                creativity, and opportunity.
                            </h2>
                            <div className="flex items-center gap-4 border-l-4 border-primary pl-6 py-2">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Student Outcomes • INSD Legacy</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Outcome Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {outcomes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group relative h-[450px] md:h-[600px] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl hover:shadow-primary/20 transition-all duration-700 hover:-translate-y-4"
                        >
                            {/* Image Background */}
                            <img 
                                src={item.img} 
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-1000 ease-out"
                            />
                            
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity`} />
                            
                            {/* Content */}
                            <div className="absolute inset-0 p-10 flex flex-col justify-end">
                                <div className="mb-6 w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-white border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                    {item.icon}
                                </div>
                                
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4 block group-hover:translate-x-2 transition-transform">
                                    {item.subtitle}
                                </span>
                                
                                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none mb-6">
                                    {item.title}
                                </h3>
                                
                                <div className="overflow-hidden">
                                    <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                        Explore Path <ExternalLink size={12} />
                                    </div>
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className="absolute top-0 right-0 p-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="text-white/20 text-6xl font-serif italic">0{index + 1}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Impact Band */}
                <div className="mt-24 md:mt-32 pt-16 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-2">The INSD Vision</p>
                        <h4 className="text-2xl font-black text-slate-900 uppercase tracking-tighter">Your Creativity, Our Engine.</h4>
                    </div>
                    <div className="flex gap-16 md:gap-24">
                        <div className="flex flex-col">
                            <span className="text-5xl font-black text-slate-900 tracking-tighter">150+</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Design Studios</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-5xl font-black text-slate-900 tracking-tighter">10K+</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Success Stories</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DreamLife;
