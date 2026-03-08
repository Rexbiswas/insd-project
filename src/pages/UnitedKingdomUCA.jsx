import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, MapPin, Palette, Aperture, Paintbrush, Globe2, BookOpen, Castle, Crown } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const UnitedKingdomUCA = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yImg = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const opacityHero = useTransform(heroScroll, [0, 0.8], [1, 0]);

    return (
        <div className="bg-[#f4f4f6] min-h-screen font-sans selection:bg-[#cc0000] selection:text-white overflow-hidden text-[#111]">
            <SEO 
                title="Study Design in UK | INSD & UCA Global Partnership"
                description="Experience British design heritage at the University for the Creative Arts (UCA). INSD's partnership with UCA provides students access to top-tier UK design studios and global networking."
                keywords="study design UK, UCA partnership, INSD international campus, fashion design UK, creative arts London, study interior design England"
            />
            
            {/* Heritage & Editorial Hero */}
            <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#e5e5e5]">
                <motion.div 
                    style={{ y: yImg, opacity: opacityHero }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=2670" 
                        alt="UK Architecture and Heritage"
                        className="w-full h-full object-cover grayscale mix-blend-multiply opacity-50"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#f4f4f6]/30 to-[#f4f4f6]" />
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 text-center px-6 max-w-7xl mx-auto mt-20"
                >
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <Crown size={20} className="text-[#cc0000]" />
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#cc0000]">International Partner Campus</span>
                    </div>
                    
                    <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-6">
                        United<br/>
                        <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>Kingdom.</span>
                    </h1>
                    <div className="inline-block bg-[#111] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-xs mt-6">
                        UCA Partnership
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-12 right-6 md:right-20 flex flex-col items-end gap-2 text-right"
                >
                    <MapPin size={24} className="text-[#cc0000]" />
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#111]/80">Epsom / Farnham</p>
                    <p className="text-xs font-medium text-[#111]/40">United Kingdom</p>
                </motion.div>
            </section>

            {/* Prestige Summary */}
            <section className="py-32 px-6 lg:px-20 max-w-[1400px] mx-auto relative z-10 border-b border-black/10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    <div>
                        <span className="text-sm font-bold uppercase tracking-widest text-[#cc0000] block mb-6">The Collaboration</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[1.1] mb-8">
                            University for the <br/> <span className="text-black/30 italic font-serif font-light">Creative Arts.</span>
                        </h2>
                    </div>

                    <div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="text-xl md:text-2xl font-medium text-[#111]/90 leading-relaxed mb-8 border-l-2 border-[#cc0000] pl-8"
                        >
                            A prestigious partnership nurturing the next generation of visual arts pioneers and global design leaders.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-lg text-[#111]/60 leading-relaxed mb-6"
                        >
                            Our alliance with the University for the Creative Arts (UCA) offers INSD students an unprecedented bridge to British design heritage. Positioned consistently as one of the UK's top creative specialist universities, the UCA campuses provide an inspiring backdrop of historic towns and cutting-edge industrial facilities.
                        </motion.p>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3 }}
                            className="text-lg text-[#111]/60 leading-relaxed"
                        >
                            INSD students experience a fluid exchange of ideas, accessing expansive art studios, fashion ateliers, and advanced digital fabrication labs perfectly aligned with the fast-paced UK creative economy.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Core Arts Bento Grid */}
            <section className="py-32 px-6 lg:px-20 max-w-[1600px] mx-auto bg-white rounded-[3rem] my-20 shadow-[-10px_-10px_30px_rgba(0,0,0,0.02)] border border-black/5">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
                        British <span className="text-transparent" style={{ WebkitTextStroke: '1px #111' }}>Excellence</span>
                    </h2>
                    <p className="text-lg font-medium text-black/50">
                        A systemic immersion into the visual arts, film, architecture, and haute couture landscapes of the UK.
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
                            src="https://images.pexels.com/photos/4035985/pexels-photo-4035985.jpeg?auto=compress&cs=tinysrgb&w=1200" 
                            alt="Fashion Runway and Design" 
                            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 grayscale"
                        />
                        <div className="relative z-10 w-3/4">
                            <Palette size={32} className="text-[#cc0000] mb-6" />
                            <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Fashion & Textiles Hub</h3>
                            <p className="text-white/70 font-medium">Renowned globally for producing top-tier fashion designers, equipped with massive pattern cutting studios, weaving looms, and elite textile printing labs.</p>
                        </div>
                    </motion.div>

                    {/* Small Vertical Block - Film & Photo */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-[#f4f4f6] text-black rounded-[2rem] p-10 flex flex-col justify-between min-h-[400px] border border-black/5"
                    >
                        <Aperture size={32} className="text-[#111]" />
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Cinematic Arts</h3>
                            <p className="text-black/60 font-medium text-sm">Dedicated sound stages, industry-standard equipment rooms, and post-production broadcasting suites for visual storytellers and filmmakers.</p>
                        </div>
                    </motion.div>

                    {/* Horizontal Block 1 - Campus Network */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border border-black/5 shadow-xl rounded-[2rem] p-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center min-h-[300px]"
                    >
                        <div className="p-6 bg-[#cc0000]/10 rounded-2xl shrink-0">
                            <Castle size={40} className="text-[#cc0000]" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black uppercase tracking-tight mb-4">Surrey & Kent Campuses</h3>
                            <p className="text-black/60 font-medium text-sm">Experience the best of specialized campus environments. From picturesque historical towns to deep industrial networking in London's creative boroughs.</p>
                        </div>
                    </motion.div>

                    {/* Horizontal Block 2 - Academic Power */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="col-span-1 md:col-span-2 bg-[#cc0000] text-white rounded-[2rem] p-10 flex flex-col justify-end min-h-[300px] relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
                        <div className="relative z-10 flex flex-col lg:flex-row gap-10 items-end justify-between">
                            <div className="max-w-xl">
                                <BookOpen size={32} className="mb-6 text-white/50" />
                                <h3 className="text-3xl font-black uppercase tracking-tight mb-4">Unrivaled Output</h3>
                                <p className="text-white/80 font-medium">Recognized for its high employment rates, offering INSD students direct networking pipelines to massive UK agencies, animation studios, and luxury design houses.</p>
                            </div>
                            <div className="shrink-0 pb-2">
                                <span className="text-xs font-bold uppercase tracking-widest text-white/40 block mb-2">Industry Status</span>
                                <span className="text-xl font-bold uppercase text-white">Tier-One Network</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Immersive Parallax Action */}
            <section className="h-[60vh] relative flex items-center justify-center overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=2670" 
                    className="absolute inset-0 w-full h-full object-cover grayscale brightness-50"
                    alt="London Aesthetic"
                />
                
                <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center max-w-4xl mx-auto px-6"
                >
                    <Globe2 size={48} className="mx-auto mb-10 text-white/30" />
                    <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white leading-[0.85] mb-8">
                        The Global <br/> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Canvas.</span>
                    </h2>
                    <button className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto shadow-2xl">
                        Explore UK Admissions <ArrowUpRight size={18} />
                    </button>
                </motion.div>
            </section>

            <Footer />
        </div>
    );
};

export default UnitedKingdomUCA;
