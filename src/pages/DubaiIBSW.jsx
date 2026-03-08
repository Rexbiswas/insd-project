import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin, ShieldCheck, Gem, Globe2, Briefcase, Sun, Building2, Palmtree } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const DubaiIBSW = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yImg = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const opacityHero = useTransform(heroScroll, [0, 0.8], [1, 0]);

    return (
        <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-[#d4af37] selection:text-[#111] text-white overflow-hidden">
            <SEO 
                title="Study Design in Dubai | INSD & IBSW International Campus"
                description="Join INSD's Dubai campus at Tiffany Tower, JLT. Master design in the heart of futuristic architecture and retail innovation with world-class facilities and global exposure."
                keywords="study design Dubai, design school Dubai, INSD Dubai campus, IBSW Dubai, fashion design Dubai, interior design school UAE"
            />
            
            {/* Ultra-Luxury Hero Section */}
            <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#111]">
                <motion.div 
                    style={{ y: yImg, opacity: opacityHero }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=2670" 
                        alt="Dubai Skyline"
                        className="w-full h-full object-cover opacity-60 mix-blend-luminosity brightness-75"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-[#0a0a0a]" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <Globe2 size={20} className="text-[#d4af37]" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#d4af37]">International Partner Campus</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-black uppercase tracking-tighter leading-[0.8] mb-6">
                        Dubai<br/>
                        <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>IBSW.</span>
                    </h1>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-12 right-6 md:right-20 flex flex-col items-end gap-2 text-right"
                >
                    <MapPin size={24} className="text-[#d4af37]" />
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80">Tiffany Tower, JLT</p>
                    <p className="text-xs font-medium text-white/40">United Arab Emirates</p>
                </motion.div>
            </section>

            {/* Corporate Summary & Partnership */}
            <section className="py-32 px-6 lg:px-20 max-w-[1400px] mx-auto relative z-10 border-b border-white/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-[#d4af37] block mb-6">The Institute</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                            International Business School <br/> <span className="text-white/30 italic font-serif font-light">of Washington.</span>
                        </h2>
                    </div>

                    <div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed mb-8 border-l-2 border-[#d4af37] pl-8"
                        >
                            This campus is owned and operated by our International Partner– International Business School of Washington.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-lg text-white/60 leading-relaxed mb-6"
                        >
                            The campus is located at Tiffany Tower in the Jumeirah Lakes towers area in Dubai, which is commonly known as JLT, a very popular place for Dubai’s ex-pat community.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Global Epicenter / City Features Bento Grid */}
            <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto bg-[#0a0a0a]">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        The Global <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Epicenter</span>
                    </h2>
                    <p className="text-lg font-medium text-white/50">
                        Located on the southeast coast of the Persian Gulf, in the Arabian Desert, Dubai is the largest city and is one of the seven emirates of the United Arab Emirates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Big Feature Block */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="col-span-1 md:col-span-2 bg-[#141414] text-white rounded-[2rem] p-10 flex flex-col justify-end min-h-[400px] relative overflow-hidden group"
                    >
                        <img 
                            src="https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                            alt="Luxury Architecture" 
                            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 mix-blend-luminosity"
                        />
                        <div className="relative z-10 w-3/4">
                            <Gem size={32} className="text-[#d4af37] mb-6" />
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Luxury & Architecture</h3>
                            <p className="text-white/70 font-medium">Known for luxury shopping, ultramodern architecture, lively nightlife, Dubai leads the middle east region in culture and tourism attracting people from all parts of the world.</p>
                        </div>
                    </motion.div>

                    {/* Small Vertical Block - Safety */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#d4af37] text-black rounded-[2rem] p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden"
                    >
                        <ShieldCheck size={32} className="text-black" />
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Unmatched Safety</h3>
                            <p className="text-black/70 font-medium text-sm">Considered one of the safest cities in the world, with 24-hour security in most residential and commercial areas, so living or traveling solo or with a group is safe.</p>
                        </div>
                    </motion.div>

                    {/* Horizontal Block 1 - Employment */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-[#141414] border border-white/5 shadow-xl rounded-[2rem] p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center min-h-[300px]"
                    >
                        <div className="p-6 bg-[#d4af37]/10 rounded-2xl shrink-0">
                            <Briefcase size={40} className="text-[#d4af37]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Career Opportunities</h3>
                            <p className="text-white/60 font-medium text-sm">Besides providing a safe and fun environment the city has enormous employment opportunities for students and working professionals looking to build their network.</p>
                        </div>
                    </motion.div>

                    {/* Horizontal Block 2 - Expat Community */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="col-span-1 md:col-span-2 bg-white text-black rounded-[2rem] p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-end justify-between">
                            <div className="max-w-xl">
                                <Palmtree size={32} className="mb-6 text-black/50" />
                                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Expatriate Community & Quality of Life</h3>
                                <p className="text-black/70 font-medium">Dubai is home to over 150 nationalities, with ex-pats being over 80% of its total population. The city has a lot to offer from enjoying a high quality of life to getting the perfect mix of luxury, community, parks, beaches, and nature.</p>
                            </div>
                            <div className="shrink-0 pb-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-black/40 block mb-2">Population</span>
                                <span className="text-xl font-bold uppercase text-black">80% Ex-pats</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Immersive Parallax Action */}
            <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/10121703/pexels-photo-10121703.jpeg?auto=compress&cs=tinysrgb&w=2670" 
                    className="absolute inset-0 w-full h-full object-cover"
                    alt="Dubai Desert and Highway"
                />
                <div className="absolute inset-0 bg-black/60" />
                
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center max-w-4xl mx-auto px-6"
                >
                    <Sun size={48} className="mx-auto mb-10 text-white/50" />
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
                        Design The <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Future.</span>
                    </h2>
                    <button className="bg-[#d4af37] text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto shadow-2xl">
                        Explore Admissions <ArrowUpRight size={18} />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default DubaiIBSW;
