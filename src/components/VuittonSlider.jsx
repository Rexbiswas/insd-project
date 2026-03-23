import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

const VuittonSlider = () => {
    const [active, setActive] = useState(0);

    const slides = [
        { day: "Phase 01", title: "Gehry's Glass Sails", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.31.jpeg", desc: "Architectural masterclass exploring Frank Gehry’s deconstructivist masterpiece." },
        { day: "Phase 02", title: "Contemporary Curation", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.27%20(1).jpeg", desc: "Private access to the LVMH permanent collection of world-renowned art." },
        { day: "Phase 03", title: "Luxury Branding Hub", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.30%20(1).jpeg", desc: "Decoding the DNA of LVMH through immersive luxury management workshops." },
        { day: "Phase 04", title: "Spatial Light Lab", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.29.jpeg", desc: "Studying the interplay of natural light and organic materials in building design." },
        { day: "Phase 05", title: "Couture vs. Art", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.31%20(1).jpeg", desc: "Exploring the blurred lines between fine art exhibitions and high-fashion runways." },
        { day: "Phase 06", title: "Visual Narrative", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.20%20(2).jpeg", desc: "Crafting a visual story for luxury brands within an architectural context." },
        { day: "Phase 07", title: "Future Fabrications", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.20.jpeg", desc: "Investigating new-age materials inspired by the museum's structural innovations." },
        { day: "Phase 08", title: "The Rooftop Vernissage", img: "https://ik.imagekit.io/fmldynl4j4/Foundation%20Louis%20Vuitton/WhatsApp%20Image%202025-04-11%20at%2012.03.20%20(1).jpeg", desc: "Concluding the journey with a networking gala on the iconic terrace overlooking Paris." }
    ];

    const next = () => setActive((prev) => (prev + 1) % slides.length);
    const prev = () => setActive((prev) => (prev - 1 + slides.length) % slides.length);

    return (
        <section className="relative h-screen bg-[#f3f3f3] flex items-center justify-center overflow-hidden py-10">
            <div className="container mx-auto px-6 h-full flex flex-col justify-center max-w-7xl">
                
                {/* Header Information */}
                <div className="flex justify-between items-end mb-12 relative z-10">
                    <div>
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2 block">Immersive Curriculum</span>
                        <h2 className="text-4xl md:text-6xl font-serif text-slate-900 leading-none">Fondation <br /><span className="italic text-slate-400">Louis Vuitton</span></h2>
                    </div>
                    <div className="flex gap-4 mb-2">
                        <button onClick={prev} className="p-4 rounded-full border border-slate-300 hover:bg-slate-900 hover:text-white transition-all duration-500 active:scale-90">
                            <ArrowLeft className="w-5 h-5" />
                        </button>
                        <button onClick={next} className="p-4 rounded-full border border-slate-300 hover:bg-slate-900 hover:text-white transition-all duration-500 active:scale-90">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Main Slider Content */}
                <div className="relative h-[65vh] w-full overflow-hidden flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute inset-0 flex flex-col lg:flex-row gap-12 items-center"
                        >
                            {/* Image Part */}
                            <div className="w-full lg:w-3/5 h-[40vh] lg:h-full relative group">
                                <motion.div 
                                    className="w-full h-full overflow-hidden rounded-sm shadow-2xl relative"
                                    initial={{ scale: 1.1 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 1.5 }}
                                >
                                    <img 
                                        src={slides[active].img} 
                                        alt={slides[active].title} 
                                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
                                    />
                                    <div className="absolute top-8 left-8 bg-white/95 backdrop-blur-sm px-4 py-2 text-xs font-black uppercase tracking-widest text-slate-900 shadow-sm">
                                        {slides[active].day}
                                    </div>
                                </motion.div>
                            </div>

                            {/* Text Part */}
                            <div className="w-full lg:w-2/5 flex flex-col justify-center text-center lg:text-left pr-4">
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                                        <div className="w-12 h-px bg-slate-300"></div>
                                        <Sparkles className="w-4 h-4 text-primary" />
                                    </div>
                                    <h3 className="text-4xl md:text-6xl font-serif text-slate-900 mb-8 leading-[0.9] tracking-tighter">
                                        {slides[active].title.split(' ').map((word, idx) => (
                                            <span key={idx} className={idx % 2 !== 0 ? 'italic text-slate-400 font-light' : ''}>
                                                {word}{' '}
                                            </span>
                                        ))}
                                    </h3>
                                    <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md mx-auto lg:mx-0">
                                        {slides[active].desc}
                                    </p>
                                    
                                    <div className="mt-12 flex items-center justify-center lg:justify-start gap-8">
                                        <div className="text-6xl font-serif text-slate-200">
                                            0{active + 1}
                                        </div>
                                        <div className="h-1px w-20 bg-slate-200 relative overflow-hidden">
                                            <motion.div 
                                                className="absolute inset-0 bg-primary"
                                                initial={{ x: "-100%" }}
                                                animate={{ x: "0%" }}
                                                key={active}
                                                transition={{ duration: 1 }}
                                            />
                                        </div>
                                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                            Phase Progression
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Navigation Dots */}
                <div className="flex gap-4 mt-12 justify-center lg:justify-start">
                    {slides.map((_, i) => (
                        <button 
                            key={i}
                            onClick={() => setActive(i)}
                            className={`h-1.5 transition-all duration-500 rounded-full ${active === i ? 'w-12 bg-primary' : 'w-4 bg-slate-300 hover:bg-slate-400'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VuittonSlider;
