import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, Landmark, BarChart3, Globe2, ArrowRight } from 'lucide-react';

const GovernmentValidation = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

    const initiatives = [
        {
            title: "Skill India Mission",
            tag: "Empowerment",
            desc: "Aligning creative education with the Prime Minister's vision for a highly-skilled workforce.",
            img: "https://images.pexels.com/photos/7005474/pexels-photo-7005474.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: <Landmark className="w-5 h-5" />
        },
        {
            title: "Startup Ecosystem",
            tag: "Innovation",
            desc: "Fueling the design thinkers who power India's position as the world's 3rd largest startup hub.",
            img: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: <Globe2 className="w-5 h-5" />
        },
        {
            title: "Digital India",
            tag: "Infrastructure",
            desc: "Bridging the gap between traditional craftsmanship and the global digital economy through design-tech.",
            img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
            icon: <BarChart3 className="w-5 h-5" />
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#f3f3f3] overflow-hidden selection:bg-primary selection:text-white z-20">
            {/* Background Narrative */}
            <motion.div
                style={{ rotate }}
                className="absolute top-0 right-0 p-20 opacity-[0.03] pointer-events-none origin-center"
            >
                <ShieldCheck className="w-96 h-96 text-slate-900" />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Government Validation</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-12"
                    >
                        India Is <br />
                        <span className="text-slate-800 italic font-serif">Investing</span> in Skills. <br />
                        We Deliver Them.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-2xl"
                    >
                        <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
                            Positioned at the heart of India's creative transformation, INSD translates national initiatives into professional outcomes for the next generation of designers.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {initiatives.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                            className="group relative bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-700"
                        >
                            <div className="aspect-video h-64 overflow-hidden relative">
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000"
                                />
                                <div className="absolute top-6 right-6 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white">
                                    {item.icon}
                                </div>
                            </div>

                            <div className="p-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-4 block">{item.tag}</span>
                                <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-primary transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-slate-500 text-base leading-relaxed mb-8">
                                    {item.desc}
                                </p>
                                <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-slate-300 group-hover:text-slate-900 transition-all">
                                    Industry Alignment <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Growth Metric Footer */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-16 md:mt-24 flex flex-col md:flex-row items-center justify-between gap-12 p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group"
                >
                    <div className="relative z-10">
                        <h5 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-2">The Creative Economy is Surging.</h5>
                        <p className="text-slate-400 font-medium max-w-lg">Indian creative exports have grown by 20% year-on-year. We ensure you are ready to capture this growth.</p>
                    </div>
                    <div className="relative z-10 flex items-baseline gap-2">
                        <span className="text-5xl md:text-7xl font-black tracking-tighter text-primary">20%</span>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Yearly Growth</span>
                    </div>

                    {/* Background Detail */}
                    <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                </motion.div>
            </div>
        </section>
    );
};

export default GovernmentValidation;
