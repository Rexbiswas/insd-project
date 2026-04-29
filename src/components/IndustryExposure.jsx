import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, MapPin, Users, Globe } from 'lucide-react';

const industryExposureImages = [
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/IMG20250822103749.jpg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/IMG20250822122935.jpg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/WhatsApp%20Image%202025-04-24%20at%2013.53.54.jpeg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/WhatsApp%20Image%202025-04-24%20at%2013.55.47.jpeg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/WhatsApp%20Image%202025-04-24%20at%2014.01.44%20(1).jpeg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/WhatsApp%20Image%202025-04-24%20at%2014.02.57%20(1).jpeg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/WhatsApp%20Image%202025-04-24%20at%2014.07.01%20(1)%20(1).jpeg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/WhatsApp%20Image%202025-04-24%20at%2014.07.02.jpeg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/Workshop%202%20(5).jpg",
    "https://ik.imagekit.io/fmldynl4j4/ind-visit/Workshop%20-%204%20%20(3).jpg"
];

const IndustryExposure = () => {
    return (
        <section className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 text-primary font-black uppercase tracking-[0.4em] text-xs mb-4"
                        >
                            <Camera className="w-5 h-5" />
                            Industry Visits & Workshops
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.9]"
                        >
                            Real World <br />
                            <span className="text-primary italic font-serif">Exposure</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex gap-12"
                    >
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-black text-slate-900 leading-none">50+</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-2">Visits Yearly</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl md:text-4xl font-black text-primary leading-none">100+</span>
                            <span className="text-xs uppercase tracking-widest font-bold text-slate-400 mt-2">Expert Sessions</span>
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {industryExposureImages.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.05 }}
                            className={`group relative rounded-2xl md:rounded-3xl overflow-hidden bg-slate-100 ${
                                idx % 7 === 0 ? 'md:col-span-2 md:row-span-2 h-[400px] md:h-full' : 'h-[200px] md:h-[300px]'
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Industry exposure ${idx + 1}`}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-[10px] uppercase font-bold text-white tracking-widest">
                                    <MapPin className="w-3 h-3" />
                                    On-Site Visit
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-20 p-8 md:p-12 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -mr-32 -mt-32" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-2xl text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
                                Bridging the gap between <br />
                                <span className="text-primary italic font-serif">Education</span> and <span className="text-primary italic font-serif">Industry</span>
                            </h3>
                            <p className="text-slate-400 font-medium">
                                At INSD, we don't just teach design; we immerse you in it. Our curriculum is built around real-world industry interactions, onsite visits, and workshops led by the world's leading creative directors.
                            </p>
                        </div>
                        <button className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl hover:shadow-[0_20px_40px_rgba(219,52,54,0.3)]">
                            Experience INSD
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default IndustryExposure;
