import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Maximize2, X, Camera, Image as ImageIcon } from 'lucide-react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Gallery = () => {
    const containerRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('All');

    const galleryData = [
        { id: 1, category: 'Fashion', title: 'Vogue Runway 2025', image: 'https://images.unsplash.com/photo-1539109132314-34a77bd6819f?q=80&w=1974&auto=format&fit=crop' },
        { id: 2, category: 'Interior', title: 'Conceptual Living Space', image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop' },
        { id: 3, category: 'Events', title: 'Global Design Summit', image: 'https://images.unsplash.com/photo-1540575861501-7c0011e7a48f?q=80&w=2070&auto=format&fit=crop' },
        { id: 4, category: 'Campus', title: 'North Delhi Creative Hub', image: 'https://images.unsplash.com/photo-1523050853064-dbad32c970a2?q=80&w=2070&auto=format&fit=crop' },
        { id: 5, category: 'Fashion', title: 'Sustainable Couture', image: 'https://images.unsplash.com/photo-1445053023192-8d45cb66099d?q=80&w=2070&auto=format&fit=crop' },
        { id: 6, category: 'Interior', title: 'Modernist Loft', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop' },
        { id: 7, category: 'Animation', title: 'VFX Masterclass', image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop' },
        { id: 8, category: 'Events', title: 'Launch Night', image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop' },
        { id: 9, category: 'Fashion', title: 'Editorial Shoot', image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop' },
        { id: 10, category: 'Campus', title: 'Paris Studio', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop' },
    ];

    const categories = ['All', 'Fashion', 'Interior', 'Animation', 'Events', 'Campus'];
    const filteredData = filter === 'All' ? galleryData : galleryData.filter(item => item.category === filter);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(".gallery-hero-title", {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: ".gallery-hero",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, [filter]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
            <SEO 
                title="Design Portfolios & Campus Gallery - INSD Showcase"
                description="Explore the visual creative journey at INSD. Our gallery showcases the best in fashion, interior design, and student portfolios from across our global campuses."
                keywords="INSD gallery, design portfolios, fashion design showcase, interior design student work, campus gallery"
            />
            {/* --- HERO SECTION --- */}
            <section className="gallery-hero relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#0a0a0b] z-10" />
                    <motion.img 
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.3 }}
                        transition={{ duration: 1.5 }}
                        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop" 
                        className="w-full h-full object-cover grayscale" 
                        alt="Gallery Background"
                    />
                </div>

                <div className="relative z-20 text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary font-black text-[10px] md:text-xs uppercase tracking-[0.6em] mb-4 block">
                            Visual Portfolios
                        </span>
                        <h1 className="gallery-hero-title text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-none m-0">
                            GALLERY<span className="text-transparent stroke-text-white opacity-20">.</span>
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* --- FILTER BAR --- */}
            <div className="sticky top-0 z-[60] py-6 border-b border-white/5 backdrop-blur-md bg-black/40">
                <div className="flex flex-wrap justify-center gap-3 px-6">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                                filter === cat 
                                ? 'bg-primary text-white border-primary border' 
                                : 'bg-white/5 text-white/40 border-white/10 border hover:border-white/30'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* --- MASONRY GRID --- */}
            <main className="py-20 container mx-auto px-6">
                <motion.div 
                    layout
                    className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredData.map((item) => (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="break-inside-avoid relative group cursor-pointer bg-white/5 rounded-3xl overflow-hidden min-h-[150px]"
                                onClick={() => setSelectedImage(item)}
                            >
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                                    <span className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">{item.category}</span>
                                    <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </main>

            {/* --- LIGHTBOX --- */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
                    >
                        <button 
                            className="absolute top-6 right-6 text-white/40 hover:text-white"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X size={32} />
                        </button>
                        
                        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="rounded-2xl overflow-hidden border border-white/10"
                            >
                                <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-cover" />
                            </motion.div>
                            
                            <div className="space-y-6">
                                <span className="text-primary font-bold uppercase tracking-[0.3em]">{selectedImage.category}</span>
                                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-tight">{selectedImage.title}</h2>
                                <p className="text-white/60 leading-relaxed italic">
                                    Showcasing the pinnacle of design excellence at INSD. This work represents the intersection of technology, art, and human-centric design.
                                </p>
                                <button className="px-8 py-3 bg-white text-black font-black uppercase tracking-widest text-xs rounded-lg hover:bg-primary hover:text-white transition-colors">
                                    Project Details
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </div>
    );
};

export default Gallery;
