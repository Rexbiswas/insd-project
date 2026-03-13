import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe, TrendingUp, ShoppingBag, Palette, Layout, UserCheck } from 'lucide-react';

const GlobalDesignEconomy = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

    const indicators = [
        {
            title: "Digital Economy",
            icon: <TrendingUp className="w-6 h-6" />,
            img: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
            span: "md:col-span-2",
            desc: "The $11 trillion digital frontier is powered by interface and experience design."
        },
        {
            title: "E-Commerce",
            icon: <ShoppingBag className="w-6 h-6" />,
            img: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=800",
            span: "md:col-span-1",
            desc: "Every transaction starts with a visual soul."
        },
        {
            title: "Branding Era",
            icon: <Palette className="w-6 h-6" />,
            img: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800",
            span: "md:col-span-1",
            desc: "Identity is the new currency for every global heritage house."
        },
        {
            title: "Freelance Market",
            icon: <UserCheck className="w-6 h-6" />,
            img: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
            span: "md:col-span-2",
            desc: "The borderless talent economy is hungry for high-impact creative directors."
        },
        {
            title: "Experience Economy",
            icon: <Layout className="w-6 h-6" />,
            img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
            span: "md:col-span-3",
            desc: "We no longer buy products; we buy designed moments. From startups to global brands — design skills are no longer optional. They’re essential."
        }
    ];

    return (
        <section ref={sectionRef} className="relative py-24 md:py-32 bg-[#f3f3f3] overflow-hidden selection:bg-primary selection:text-white z-20">
            {/* Background Narrative */}
            <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none overflow-hidden">
                <motion.div style={{ rotate }} className="absolute -top-1/4 -right-1/4 origin-center">
                    <Globe className="w-[800px] h-[800px] text-slate-900" />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col mb-16 md:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-6"
                    >
                        <div className="h-px w-12 bg-primary"></div>
                        <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Design Economy & Global Scope</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-slate-900 leading-none mb-8"
                    >
                        The World Is <br />
                        <span className="text-slate-800 italic font-serif">Running</span> on Design
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="max-w-3xl"
                    >
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-slate-900 mb-4 leading-tight">
                            From startups to global brands — <br />
                            <span className="text-primary">design skills</span> are no longer optional. <br />
                            They’re <span className="italic font-serif">essential.</span>
                        </h3>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {indicators.map((item, idx) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.15, ease: "easeOut" }}
                            key={idx}
                            className={`group relative rounded-[2.5rem] overflow-hidden bg-slate-100 ${item.span} h-[350px] md:h-[450px] transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] cursor-pointer`}
                        >
                            {/* Image Background */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                            />

                            {/* Overlay Liquid Gradient */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-slate-950/20 to-transparent group-hover:opacity-60 transition-opacity duration-700" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between text-white">
                                <div className="flex justify-between items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                                        {item.icon}
                                    </div>
                                </div>

                                <div className="max-w-md">
                                    <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 md:group-hover:translate-x-2 transition-transform duration-500">
                                        {item.title}
                                    </h4>
                                    <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed opacity-100 md:opacity-0 group-hover:opacity-100 md:translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Corner Glow */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </motion.div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default GlobalDesignEconomy;
