import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Compass, Hexagon, Anchor, Fingerprint, Aperture } from 'lucide-react';
import Footer from '../components/Footer';

const ParallaxImage = ({ src, alt, className, speed = 0.2 }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

    return (
        <div ref={ref} className={`overflow-hidden relative ${className}`}>
            <motion.img 
                style={{ y }}
                src={src}
                alt={alt}
                className="absolute inset-0 w-full h-[140%] object-cover object-center origin-center"
            />
        </div>
    );
};

const NorthDelhi = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yBackground = useTransform(heroScroll, [0, 1], ["0%", "50%"]);
    const textScale = useTransform(heroScroll, [0, 1], [1, 0.85]);

    return (
        <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#111] selection:text-white">
            
            {/* Architectural Hero */}
            <section ref={heroRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#f6f6f6]">
                <motion.div style={{ y: yBackground }} className="absolute inset-0 z-0">
                    <img 
                        src="https://images.pexels.com/photos/2916814/pexels-photo-2916814.jpeg?auto=compress&cs=tinysrgb&w=2000" 
                        className="w-full h-full object-cover grayscale opacity-30 mix-blend-multiply" 
                        alt="North Delhi Campus Background" 
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#fcfcfc] via-transparent to-transparent" />
                </motion.div>

                {/* Cyberpunk grid overlay to represent "Innovation Hub" */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

                <motion.div 
                    style={{ scale: textScale }}
                    className="relative z-10 w-full px-6 flex flex-col items-center text-center mt-20"
                >
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3 px-6 py-2 border border-black/10 rounded-full backdrop-blur-md bg-white/50 mb-8"
                    >
                        <Aperture size={16} className="text-[#111]" />
                        <span className="text-xs font-bold uppercase tracking-widest text-[#111]">INSD North Delhi (Corporate Center)</span>
                    </motion.div>

                    <h1 className="text-7xl md:text-[8rem] lg:text-[11rem] font-black uppercase tracking-tighter text-[#111] leading-[0.8] mb-6">
                        <motion.span 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="block"
                        >
                            North
                        </motion.span>
                        <motion.span 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block text-transparent"
                            style={{ WebkitTextStroke: '2px #111' }}
                        >
                            Delhi.
                        </motion.span>
                    </h1>

                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-xl font-medium text-black/50 max-w-xl mx-auto"
                    >
                        The epicenter of avant-garde fashion design, cutting-edge interior architecture, and disruptive graphic methodology in Northern India.
                    </motion.p>
                </motion.div>
                
                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-50"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#111] mb-2 writing-vertical-rl">Scroll</span>
                    <div className="w-px h-12 bg-black/30" />
                </motion.div>
            </section>

            {/* Asymmetric Image & Text Block */}
            <section className="py-32 md:py-48 px-6 lg:px-20 max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#111] leading-[0.9] mb-10"
                        >
                            Vibrant & <br/> <span className="italic font-light font-serif text-black/40">Creative Hub.</span>
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-lg md:text-xl font-medium text-black/60 leading-relaxed mb-6"
                        >
                            The North Delhi campus (Corporate Center) is a vibrant and creative hub in the heart of the North Campus area of Delhi University nestled amongst an exciting cluster of ancient ruins from the Mughal era, cafes and bars, independent and high street as well as bargain shops.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg md:text-xl font-medium text-black/60 leading-relaxed mb-10"
                        >
                            As well as being a city with an intoxicating blend of heritage, history and exciting contemporary atmosphere, Delhi is also a Fashion hub with several manufactures and famous designers coming from the city.
                        </motion.p>
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap gap-6"
                        >
                            {['Classrooms', 'Design Labs', 'Student Zones', 'Meeting Rooms', 'Machinery Rooms', 'Computer Labs', 'Conference Rooms', 'Admin Offices'].map((tag, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <Hexagon size={16} className="text-black/30" />
                                    <span className="text-sm font-bold uppercase tracking-widest text-[#111]">{tag}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="relative">
                        <ParallaxImage 
                            src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="Design Studio Environment"
                            className="w-full h-[600px] md:h-[800px] rounded-[2rem] lg:rounded-[3rem] grayscale"
                            speed={0.15}
                        />
                        {/* Floating glass card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="absolute -bottom-10 -left-10 md:bottom-20 md:-left-20 bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl max-w-xs"
                        >
                            <Fingerprint size={32} className="text-black mb-6" />
                            <h4 className="text-2xl font-black uppercase tracking-tighter mb-2">Design Signature</h4>
                            <p className="text-sm font-medium text-black/60">Every creator here develops a distinct, untouchable aesthetic identity.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Immersive Dark Section: The Core */}
            <section className="bg-black text-white rounded-t-[4rem] py-32 px-6 lg:px-20 relative overflow-hidden mt-20 z-10">
                <div className="max-w-[1400px] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-12">
                        <div className="max-w-3xl">
                            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black uppercase tracking-tighter leading-[0.85]">
                                The Core <br/> Studios.
                            </h2>
                        </div>
                        <p className="text-white/50 text-xl font-medium max-w-sm md:text-right">
                            Housing over 10,000 sq. ft of space with state-of-the-art facilities and creative incubators.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-4 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                        <div className="relative h-[400px] md:h-[500px] rounded-[1.5rem] overflow-hidden group">
                            <img 
                                src="https://images.pexels.com/photos/3862624/pexels-photo-3862624.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                alt="Couture Lab"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-2">Facility / 01</span>
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Couture & Textile Lab</h3>
                            </div>
                        </div>
                        
                        <div className="relative h-[400px] md:h-[500px] rounded-[1.5rem] overflow-hidden group">
                            <img 
                                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1000" 
                                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                                alt="Interior Architecture Studio"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-2">Facility / 02</span>
                                <h3 className="text-3xl font-black uppercase tracking-tighter">Spatial Design Studio</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Call to Action */}
            <section className="bg-white py-40 px-6 text-center select-none relative -mt-10 overflow-hidden z-20 rounded-t-[4rem]">
                <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/10 to-transparent" />
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <Compass size={48} className="mx-auto mb-10 text-black/20" />
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-[#111] leading-[0.85] mb-8">
                        Secure Your <br/> Trajectory.
                    </h2>
                    <p className="text-lg md:text-xl font-bold uppercase tracking-widest text-black/40 mb-12 max-w-2xl mx-auto">
                        This location is perfect for students to learn, study and enjoy the vibrant surroundings around them.
                    </p>
                    <button className="bg-black text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto shadow-2xl shadow-black/20 group">
                        Begin Admission <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform" />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default NorthDelhi;
