import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ShieldCheck, Star, CheckCircle2 } from 'lucide-react';

const TOICertification = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
    const shineX = useTransform(scrollYProgress, [0, 1], ["-100%", "200%"]);

    return (
        <section ref={containerRef} className="relative py-32 md:py-64 overflow-hidden bg-white">
            {/* Ambient Environment */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        style={{ perspective: 2000 }}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    >
                        <motion.div
                            style={{ rotateX }}
                            className="relative group bg-[#faf9f6] rounded-2xl md:rounded-[0.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.08)] border-[12px] md:border-[24px] border-white overflow-hidden"
                        >
                            {/* Inner Ornate Border */}
                            <div className="absolute inset-4 md:inset-8 border-2 border-primary/20 pointer-events-none after:content-[''] after:absolute after:inset-1 after:border after:border-primary/10" />

                            {/* Corner Accents */}
                            {[0, 90, 180, 270].map((rot) => (
                                <div
                                    key={rot}
                                    className="absolute w-12 h-12 md:w-20 md:h-20 border-t-2 border-l-2 border-primary/40 z-20"
                                    style={{
                                        transform: `rotate(${rot}deg)`,
                                        top: rot === 0 || rot === 270 ? '2rem' : 'auto',
                                        bottom: rot === 90 || rot === 180 ? '2rem' : 'auto',
                                        left: rot === 0 || rot === 90 ? '2rem' : 'auto',
                                        right: rot === 180 || rot === 270 ? '2rem' : 'auto'
                                    }}
                                />
                            ))}

                            {/* Paper Texture Overlay */}
                            <div className="absolute inset-0 opacity-[0.4] pointer-events-none mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

                            <div className="relative z-10 p-10 md:p-24 flex flex-col items-center text-center">
                                {/* Certificate Header */}
                                <div className="space-y-4 mb-16">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ type: "spring", damping: 12 }}
                                        className="w-20 h-20 md:w-24 md:h-24 bg-primary rounded-full mx-auto flex items-center justify-center shadow-xl shadow-primary/20"
                                    >
                                        <Award className="text-white w-10 h-10 md:w-12 md:h-12" />
                                    </motion.div>
                                    <h4 className="font-serif italic text-primary text-lg md:text-xl tracking-widest uppercase">Award of Excellence</h4>
                                </div>

                                {/* Main Content */}
                                <div className="max-w-4xl space-y-8">
                                    <span className="text-xs md:text-sm font-mono tracking-[0.5em] text-black/40 uppercase">This is to certify that</span>

                                    <h2 className="text-4xl md:text-7xl font-serif text-black leading-tight tracking-tight">
                                        International School <br className="hidden md:block" /> of Design
                                    </h2>

                                    <div className="w-32 h-px bg-primary/30 mx-auto" />

                                    <p className="text-lg md:text-2xl font-light text-black/60 leading-relaxed max-w-2xl mx-auto italic">
                                        Has been globally recognized by <span className="text-black font-serif font-bold not-italic">The Times of India</span> for revolutionary design pedagogy and industry-benchmark curriculum, securing the title of
                                        <span className="text-primary font-bold block mt-4 not-italic uppercase tracking-widest text-base md:text-lg">#01 Design Education Framework</span>
                                    </p>
                                </div>

                                {/* Bottom Details & Seal */}
                                <div className="mt-20 w-full grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
                                    {/* Signature 1 */}
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="w-48 h-px bg-black/10" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 text-center">Registrar <br /> National Board</span>
                                    </div>

                                    {/* The Golden Seal */}
                                    <div className="flex justify-center relative py-8 md:py-0">
                                        <div className="relative z-20">
                                            <motion.img
                                                src="https://ik.imagekit.io/fmldynl4j4/unnamed.jpg"
                                                alt="Official Seal"
                                                className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-full"
                                            />
                                        </div>

                                        {/* Seal Taglines */}
                                        <div className="absolute -bottom-8 whitespace-nowrap">
                                            <span className="bg-black text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-[0.3em]">Official Certification</span>
                                        </div>
                                    </div>

                                    {/* Signature 2 */}
                                    <div className="flex flex-col items-center space-y-4">
                                        <div className="w-48 h-px bg-black/10" />
                                        <span className="font-mono text-[10px] uppercase tracking-widest text-black/40 text-center">Academic Council <br /> INSD Global</span>
                                    </div>
                                </div>
                            </div>

                            {/* Holographic Shine Logic */}
                            <motion.div
                                style={{ left: shineX }}
                                className="absolute top-0 w-full h-full bg-linear-to-r from-transparent via-white/20 to-transparent pointer-events-none -skew-x-12"
                            />
                        </motion.div>

                        {/* Shadow logic */}
                        <div className="absolute -z-10 bottom-0 left-10 right-10 h-20 bg-black/10 blur-3xl opacity-50 rounded-full translate-y-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TOICertification;

