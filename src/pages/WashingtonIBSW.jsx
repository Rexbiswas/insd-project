import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin, Building, TreePine, Calendar, TrainFront, Utensils, Music, GraduationCap } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const WashingtonIBSW = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yImg = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const opacityHero = useTransform(heroScroll, [0, 0.8], [1, 0]);

    return (
        <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-[#002b5c] selection:text-white overflow-hidden text-[#111]">
            <SEO 
                title="Study Design in Washington DC | INSD & IBSW Partnership"
                description="Expand your design horizons at the International Business School of Washington (IBSW). Study in the cultural and political hub of the USA with INSD's global partnership."
                keywords="study design USA, Washington design school, IBSW Washington, INSD international campus, design education America"
            />
            
            {/* Monumental Hero Section */}
            <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#e0e4e8]">
                <motion.div 
                    style={{ y: yImg, opacity: opacityHero }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=2670" 
                        alt="Washington DC Architecture"
                        className="w-full h-full object-cover mix-blend-multiply opacity-50 grayscale"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#fcfcfc]/40 to-[#fcfcfc]" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <GraduationCap size={20} className="text-[#002b5c]" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#002b5c]">International Partner Campus</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] mb-6">
                        Washington<br/>
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>IBSW.</span>
                    </h1>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-12 right-6 md:right-20 flex flex-col items-end gap-2 text-right"
                >
                    <MapPin size={24} className="text-[#002b5c]" />
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#111]/60">Herndon, Virginia</p>
                    <p className="text-xs font-medium text-[#111]/40">United States of America</p>
                </motion.div>
            </section>

            {/* Corporate Summary & Partnership */}
            <section className="py-32 px-6 lg:px-20 max-w-[1400px] mx-auto relative z-10 border-b border-black/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-[#002b5c] block mb-6">The Institute</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                            International Business School <br/> <span className="text-black/30 italic font-serif font-light">of Washington.</span>
                        </h2>
                    </div>

                    <div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-xl md:text-2xl font-medium text-[#111]/80 leading-relaxed mb-8 border-l-2 border-[#002b5c] pl-8"
                        >
                            This campus is owned and operated by our International Partner– International Business School of Washington.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-lg text-[#111]/60 leading-relaxed mb-6"
                        >
                            The Campus is located in Herndon, Virginia, which is centrally located in the cultural and political heart of the United States with the ability to provide unique experiences.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg text-[#111]/60 leading-relaxed"
                        >
                            The Campus is truly state-of-the-art. The campus hosts vibrant meeting rooms and classrooms. The students have a relaxing and game area to unwind as well.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Life in Herndon / Location Bento Grid */}
            <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto bg-[#fcfcfc]">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        The Herndon <span className="text-transparent" style={{ WebkitTextStroke: '1px #111' }}>Ecosystem</span>
                    </h2>
                    <p className="text-lg font-medium text-black/50">
                        Located in western Fairfax County, just 22 miles from Washington, D.C.’s downtown.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big Feature Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 md:col-span-2 bg-[#111] text-white rounded-[2rem] p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group"
                    >
                        <img 
                            src="https://images.pexels.com/photos/221532/pexels-photo-221532.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                            alt="City Dining" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700"
                        />
                        <div className="relative z-10 w-3/4">
                            <Utensils size={32} className="text-white/50 mb-6" />
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Global Cuisine</h3>
                            <p className="text-white/70 font-medium">Over 100 restaurants in and around our downtown offer international cuisine to cater to a massive global student base.</p>
                        </div>
                    </motion.div>

                    {/* Small Vertical Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#f0f2f5] rounded-[2rem] p-10 flex flex-col justify-between min-h-[400px]"
                    >
                        <TrainFront size={32} className="text-[#002b5c]" />
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Express Connectivity</h3>
                            <p className="text-[#111]/60 font-medium text-sm">Many hotels offer shuttle service to the museum and an express bus to the Metrorail station in Washington, DC.</p>
                        </div>
                    </motion.div>

                    {/* Horizontal Block 1 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border border-black/5 shadow-xl rounded-[2rem] p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center min-h-[300px]"
                    >
                        <div className="p-6 bg-[#002b5c]/5 rounded-2xl shrink-0">
                            <TreePine size={40} className="text-[#002b5c]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Parks & W&OD Trail</h3>
                            <p className="text-[#111]/60 font-medium text-sm">Visit one of Herndon’s 11 parks or take a walk on the W&OD Trail, which runs through the heart of downtown Herndon.</p>
                        </div>
                    </motion.div>

                    {/* Horizontal Block 2 */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="col-span-1 md:col-span-2 bg-[#002b5c] text-white rounded-[2rem] p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-end justify-between">
                            <div className="max-w-xl">
                                <Music size={32} className="mb-6 text-white/50" />
                                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Vibrant Culture & Events</h3>
                                <p className="text-white/70 font-medium">An annual Herndon Festival, Friday Night Live, and a variety of other free concerts and special events draw thousands of people to Herndon’s Town Green.</p>
                            </div>
                            <div className="shrink-0 pb-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Award-Winning</span>
                                <span className="text-xl font-bold uppercase text-white">Community Center</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Immersive Parallax Action */}
            <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/14605963/pexels-photo-14605963.jpeg?auto=compress&cs=tinysrgb&w=2000" 
                    className="absolute inset-0 w-full h-full object-cover grayscale"
                    alt="Study and Travel"
                />
                <div className="absolute inset-0 bg-black/60" />
                
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center max-w-4xl mx-auto px-6"
                >
                    <Building size={48} className="mx-auto mb-10 text-white/20" />
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
                        Study at the <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Political Heart.</span>
                    </h2>
                    <button className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto shadow-2xl">
                        Explore Admissions <ArrowUpRight size={18} />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default WashingtonIBSW;
