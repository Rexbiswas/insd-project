'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Keyboard, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

const celebrities = [
    {
        name: "Hina Khan",
        role: "INSD Show 2023",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/Hina%20Khan%20at%20INSD%20Show%202023%20(1).png",
        desc: "Leading the runway at the INSD Annual Design Showcase 2023."
    },
    {
        name: "Karishma Kapoor",
        role: "Eco Fashion Show",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/Karishma%20Kapoor%20at%20Eco%20Fashion%20Show%202018.jpg",
        desc: "The timeless diva celebrating sustainable design at the INSD Eco Fashion event."
    },
    {
        name: "Nikita Dutta",
        role: "Celebrity Singer",
        img: "https://i.pinimg.com/736x/92/f2/b6/92f2b64bdfe5039932fad7914be72488.jpg",
        desc: "Adding rhythm and star power to INSD's national design celebrations."
    },
    {
        name: "Mika Singh",
        role: "Celebrity Singer",
        img: "https://c.saavncdn.com/artists/Mika_Singh_003_20250321072715_500x500.jpg",
        desc: "Mentoring students on style, confidence, and the cinematic design aesthetic."
    },
    {
        name: "INSD x Gauhar Khan",
        role: "Masterclass",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/INSD%20students%20with%20gauhar%20khan.jpg",
        desc: "Our students interacting with Gauhar Khan during an exclusive industry session."
    },
    {
        name: "INSD x Nikita Dutta",
        role: "Meet & Greet",
        img: "https://ik.imagekit.io/fmldynl4j4/celeb/INSD%20Students%20with%20Nikita%20Dutta.jpg",
        desc: "A moment of inspiration as students share their design vision with Nikita Dutta."
    }
];

const CelebritySlider = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-16 md:py-24 bg-white overflow-hidden relative selection:bg-primary selection:text-white">
            {/* Background Decorative Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[140px] rounded-full pointer-events-none -z-10" />

            <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">
                        <Sparkles size={12} className="animate-pulse" />
                        Elite Ecosystem
                    </div>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                        CELEBRITIES <br /> <span className="text-slate-300">AT INSD EVENTS</span>
                    </h2>

                    <p className="text-slate-500 font-bold max-w-2xl mx-auto uppercase text-[10px] md:text-xs tracking-widest mt-4">
                        Experience the star power of INSD where global icons meet the next generation of designers.
                    </p>
                </motion.div>
            </div>

            {/* Swiper Carousel */}
            <div className="relative max-w-[1440px] mx-auto px-4 md:px-8">
                <Swiper
                    modules={[Autoplay, EffectCoverflow, Keyboard, A11y]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    speed={700}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    keyboard={{ enabled: true }}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 80,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    onSwiper={setSwiperInstance}
                    onSlideChange={(s) => setActiveIndex(s.realIndex)}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.15,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 1.6,
                            spaceBetween: 24,
                        },
                        1024: {
                            slidesPerView: 2.4,
                            spaceBetween: 32,
                        },
                        1280: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    className="celebrity-swiper !py-8 !px-2 overflow-visible"
                >
                    {celebrities.map((celeb, index) => (
                        <SwiperSlide key={index} className="transition-transform duration-500">
                            {({ isActive }) => (
                                <div
                                    className={`relative aspect-square max-w-[420px] mx-auto overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-slate-900 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] transition-all duration-700 group ${
                                        isActive 
                                            ? 'scale-100 ring-2 ring-primary/40 shadow-2xl shadow-primary/20' 
                                            : 'scale-90 opacity-60 hover:opacity-85'
                                    }`}
                                >
                                    <img
                                        src={celeb.img}
                                        alt={celeb.name}
                                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                                        loading="lazy"
                                    />

                                    {/* Gradient Dark Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-6 md:p-10" />

                                    {/* Top Corner Badge */}
                                    <div className="absolute top-6 left-6 z-10">
                                        <div className="px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[9px] font-black uppercase tracking-widest flex items-center gap-1.5">
                                            <Star size={10} className="text-primary fill-primary" />
                                            Star Spotlight
                                        </div>
                                    </div>

                                    {/* Bottom Content Info */}
                                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-10 z-10 space-y-2 md:space-y-3">
                                        <div>
                                            <span className="text-primary text-[10px] md:text-xs font-black uppercase tracking-[0.25em] block mb-1">
                                                {celeb.role}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none drop-shadow-md">
                                                {celeb.name}
                                            </h3>
                                        </div>

                                        <p className="text-white/80 text-[11px] md:text-xs font-medium leading-relaxed max-w-sm line-clamp-2 drop-shadow">
                                            {celeb.desc}
                                        </p>
                                    </div>

                                    {/* Luxury Corner Accent */}
                                    <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-white/20 rounded-tr-2xl hidden md:block group-hover:border-primary/60 transition-colors" />
                                </div>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Centered Navigation Control Bar: Prev Arrow - Pagination Dots - Next Arrow */}
            <div className="mt-6 md:mt-10 flex items-center justify-center gap-4 md:gap-6">
                {/* Previous Arrow */}
                <button
                    onClick={() => swiperInstance?.slidePrev()}
                    aria-label="Previous Celebrity Slide"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900 hover:bg-primary text-white border border-slate-200/20 shadow-lg shadow-slate-900/10 flex items-center justify-center transition-all duration-300 active:scale-90 hover:scale-105 cursor-pointer"
                >
                    <ChevronLeft size={22} />
                </button>

                {/* Pagination Dots Container */}
                <div className="flex items-center justify-center gap-2.5 px-5 py-3 bg-slate-100/90 rounded-full border border-slate-200/80 shadow-inner">
                    {celebrities.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => swiperInstance?.slideToLoop(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`transition-all duration-500 rounded-full cursor-pointer ${
                                activeIndex === i 
                                    ? 'w-7 h-2.5 bg-primary shadow-[0_0_12px_rgba(219,52,54,0.5)]' 
                                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                            }`}
                        />
                    ))}
                </div>

                {/* Next Arrow */}
                <button
                    onClick={() => swiperInstance?.slideNext()}
                    aria-label="Next Celebrity Slide"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900 hover:bg-primary text-white border border-slate-200/20 shadow-lg shadow-slate-900/10 flex items-center justify-center transition-all duration-300 active:scale-90 hover:scale-105 cursor-pointer"
                >
                    <ChevronRight size={22} />
                </button>
            </div>
        </section>
    );
};

export default CelebritySlider;
