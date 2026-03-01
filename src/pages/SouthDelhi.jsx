import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
    import { ArrowUpRight, MapPin, Navigation, Compass, Box, Layers, Scissors, Monitor, Mic, Camera, Coffee } from 'lucide-react';
import Footer from '../components/Footer';

const facilities = [
    {
        title: "Mini Amphitheater",
        desc: "State-of-the-art space for presentations, guest lectures, and student showcases.",
        icon: <Mic size={24} className="mb-6 text-black/40" />,
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
        img: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Fashion & Beauty Labs",
        desc: "Equipped with industrial sewing machines, alongside dedicated makeup and beauty rooms.",
        icon: <Scissors size={24} className="mb-6 text-black/40" />,
        colSpan: "col-span-12 md:col-span-6 lg:col-span-4",
        img: "https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Creative Incubator",
        desc: "A sprawling accelerator space featuring meeting rooms, computer labs, and a creative library.",
        icon: <Monitor size={24} className="mb-6 text-black/40" />,
        colSpan: "col-span-12 lg:col-span-4",
        img: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Photography Studio",
        desc: "Professional setups with advanced lighting rigs and backdrops.",
        icon: <Camera size={24} className="mb-6 text-black/40" />,
        colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
        img: "https://images.pexels.com/photos/3379961/pexels-photo-3379961.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
        title: "Recreation & Cafeteria",
        desc: "Multiple game rooms and a bustling cafeteria for networking and relaxation.",
        icon: <Coffee size={24} className="mb-6 text-black/40" />,
        colSpan: "col-span-12 md:col-span-6 lg:col-span-6",
        img: "https://images.pexels.com/photos/3052243/pexels-photo-3052243.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
];

const HorizontalGallery = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-[#f2f2f2] py-20">
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="absolute top-10 left-10 md:left-20 z-10 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-black"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-black">Campus Visuals</span>
                </div>
                
                <motion.div style={{ x }} className="flex gap-8 pl-10 md:pl-20 pr-[50vw]">
                    {[
                        "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1200",
                        "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200",
                        "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1200",
                        "https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    ].map((img, i) => (
                        <div key={i} className="w-[85vw] md:w-[60vw] lg:w-[45vw] h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden shrink-0 relative group shadow-xl">
                            <img 
                                src={img} 
                                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                                alt={`Campus view ${i}`}
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const SouthDelhi = () => {
    const heroRef = useRef(null);
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroImgY = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
    const heroTextY = useTransform(heroScroll, [0, 1], ["0%", "80%"]);
    const opacityFade = useTransform(heroScroll, [0, 0.8], [1, 0]);

    return (
        <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-black selection:text-white">

            {/* Cinematic Hero */}
            <section ref={heroRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#e5e5e5]">
                <motion.div 
                    style={{ y: heroImgY, opacity: opacityFade }}
                    className="absolute inset-0 z-0"
                >
                    <img 
                        src="https://images.pexels.com/photos/2731535/pexels-photo-2731535.jpeg?auto=compress&cs=tinysrgb&w=2670" 
                        alt="South Delhi Campus"
                        className="w-full h-full object-cover grayscale mix-blend-multiply opacity-60"
                    />
                    <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#fcfcfc]/20 to-[#fcfcfc]" />
                </motion.div>

                <motion.div 
                    style={{ y: heroTextY }}
                    className="relative z-10 text-center px-6 max-w-6xl mx-auto mt-20"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col items-center justify-center gap-4 mb-8"
                    >
                        <MapPin size={24} className="text-black/50" />
                        <span className="text-xs font-bold uppercase tracking-[0.4em] text-black/60">The Flagship Node</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                        className="text-7xl md:text-9xl lg:text-[12rem] font-black uppercase tracking-tighter text-[#111] leading-[0.8] mb-8"
                    >
                        South<br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>Delhi.</span>
                    </motion.h1>
                    
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="inline-block bg-[#111] text-white px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm shadow-2xl"
                    >
                        Coming Soon
                    </motion.div>
                </motion.div>

            </section>

            {/* Brutalist Intro Statement */}
            <section className="py-32 md:py-48 px-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 items-start">
                    <div className="md:w-1/3">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm font-bold uppercase tracking-widest text-black/40 border-l border-black/20 pl-6"
                        >
                            Establishment / 01
                        </motion.span>
                    </div>
                    <div className="md:w-2/3">
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-[#111] leading-[1.1] mb-10"
                        >
                            <span className="text-black/40 italic font-serif font-light">Housing over </span><br/>35,000 sq. ft of space
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-lg md:text-xl font-medium text-black/60 leading-relaxed max-w-2xl"
                        >
                            Positioned strategically in the heart of the Design and Luxury Hub, our South Delhi campus acts as the premier incubator for creative talent. This massive ecosystem is perfect for students to rigorously learn and study Indian design and luxury on a systemic global level.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Visual Tour / Horizontal Scroll */}
            <HorizontalGallery />

            {/* Infrastructure Bento Grid */}
            <section className="py-32 px-6 lg:px-12 max-w-[1400px] mx-auto bg-white border-y border-black/5 relative z-10 -mt-10 rounded-t-[3rem]">
                <div className="mb-20 pt-10">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-[#111]">
                        Infrastructure.
                    </h2>
                </div>

                <div className="grid grid-cols-12 gap-4 md:gap-6">
                    {facilities.map((fac, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className={`${fac.colSpan} bg-[#f5f5f5] rounded-[2rem] p-10 flex flex-col justify-between group overflow-hidden relative cursor-crosshair min-h-[400px] md:min-h-[500px]`}
                        >
                            <img 
                                src={fac.img} 
                                alt={fac.title} 
                                className="absolute inset-0 w-full h-full object-cover grayscale opacity-20 group-hover:opacity-40 transition-opacity duration-1000 group-hover:scale-105 mix-blend-multiply" 
                            />
                            <div className="relative z-10 w-full h-full flex flex-col">
                                {fac.icon}
                                <div className="mt-auto">
                                    <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-black mb-4">
                                        {fac.title}
                                    </h3>
                                    <p className="text-black/60 font-medium">
                                        {fac.desc}
                                    </p>
                                </div>
                            </div>
                            
                            {/* Hover Reveal Block */}
                            <div className="absolute top-0 right-0 p-8 transform translate-x-8 -translate-y-8 opacity-0 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                                <span className="w-12 h-12 rounded-full border border-black/20 flex items-center justify-center bg-white shadow-lg">
                                    <ArrowUpRight size={18} className="text-black" />
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Connectivity & Fast CTA */}
            <section className="bg-black text-white py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                
                <div className="relative z-10 max-w-4xl mx-auto">
                    <Navigation size={48} className="mx-auto mb-10 text-white/50 animate-pulse" />
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                        Experience <br/> <span className="italic font-serif font-light text-white/50">The Ecosystem.</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl font-medium mb-12 max-w-xl mx-auto">
                        Located centrally with seamless metro and road connectivity. Book a personalized campus walk-through with our admissions directors.
                    </p>
                    <button className="bg-white text-black px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4 mx-auto">
                        Schedule Visit <ArrowUpRight size={18} />
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SouthDelhi;
