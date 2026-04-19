import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Brain, Cpu, Workflow } from 'lucide-react';

const AiFutureDesign = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Replace GSAP parallax with Framer Motion Parallax
    const scale = useTransform(scrollYProgress, [0, 0.5], [1.2, 1]);

    const features = [
        { icon: <Brain className="w-5 h-5" />, text: "Generative Design Thinking" },
        { icon: <Cpu className="w-5 h-5" />, text: "AI-Augmented Prototyping" },
        { icon: <Workflow className="w-5 h-5" />, text: "Automated Industry Workflows" },
        { icon: <Sparkles className="w-5 h-5" />, text: "Future-Proof Creative Output" }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-40 bg-slate-950 overflow-hidden text-white z-20">
            {/* Ambient Background - Dark Futuristic */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 opacity-30" />
                <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-30" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] opacity-10 pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left: Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-10 h-px bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">AI + Future of Design</span>
                        </motion.div>

                        <motion.h3
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-10"
                        >
                            Future Careers <br />
                            <span className="italic font-serif text-slate-400">Need</span> Future Skills
                        </motion.h3>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-xl md:text-3xl font-light leading-relaxed text-slate-300 max-w-2xl mb-12"
                        >
                            We integrate <span className="text-white font-bold">AI</span>, industry tools, and real workflows into
                            every module — so students graduate ready for the <span className="text-primary italic font-serif">future of design</span>.
                        </motion.h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.6 + (idx * 0.1) }}
                                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 group"
                                >
                                    <div className="text-primary group-hover:scale-110 transition-transform">
                                        {feature.icon}
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-slate-100">{feature.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative aspect-square md:aspect-3/4 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                            <motion.img
                                style={{ scale }}
                                src="https://ik.imagekit.io/fmldynl4j4/Students/12fa84bc-f2de-40be-8b80-21dc73057af3_1.jfif"
                                alt="AI and Design Integration"
                                className="w-full h-full object-cover origin-center"
                            />
                            {/* Decorative Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border border-white/20 backdrop-blur-xl bg-white/5">
                                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Next-Gen Integration</p>
                                <p className="text-sm font-medium text-slate-100">Synchronizing human intuition with algorithmic precision.</p>
                            </div>
                        </div>

                        {/* Backing Glow */}
                        <div className="absolute -inset-4 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AiFutureDesign;
