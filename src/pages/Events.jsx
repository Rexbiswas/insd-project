import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar, MapPin, ArrowUpRight, Globe, Sparkles,
    Zap, Camera, Award, ChevronRight, Play,
    ChevronLeft, Pause, PlayCircle, PauseCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

const Events = () => {
    const [showcaseIndex, setShowcaseIndex] = useState(0);
    const [timesIndex, setTimesIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const showcaseEvents = [
        {
            title: "The Runway Edit",
            icon: Camera,
            color: "from-primary/10",
            img: "https://ik.imagekit.io/fmldynl4j4/folder/P1304858.JPG",
            desc: "Raw energy and experimental spirit of the national showcase."
        },
        {
            title: "Design Innovation",
            icon: Sparkles,
            color: "from-secondary/10",
            img: "https://ik.imagekit.io/fmldynl4j4/folder/P1304559.JPG",
            desc: "Traditional craftsmanship meets contemporary innovation."
        },
        {
            title: "Avant-Garde Detailing",
            icon: Camera,
            color: "from-primary/10",
            img: "https://ik.imagekit.io/fmldynl4j4/folder/4A9B6490%20(1).jpg",
            desc: "Intricate detailing and silhouettes defining the next trend."
        },
        {
            title: "Student Creative",
            icon: Sparkles,
            color: "from-secondary/10",
            img: "https://ik.imagekit.io/fmldynl4j4/folder/DSC08535.JPG",
            desc: "A celebration of student creativity on the prestigious runway."
        },
        {
            title: "Sustainable Urban",
            icon: Camera,
            color: "from-primary/10",
            img: "https://ik.imagekit.io/fmldynl4j4/folder/P1304076.JPG",
            desc: "Sustainable and urban design concepts from the future."
        },
        {
            title: "Global Expressions",
            icon: Sparkles,
            color: "from-secondary/10",
            img: "https://ik.imagekit.io/fmldynl4j4/folder/DSC09094.JPG",
            desc: "Final looks that left a lasting impression globally."
        },
        {
            title: "Artistic Pinnacle",
            icon: Camera,
            color: "from-primary/10",
            img: "https://ik.imagekit.io/fmldynl4j4/folder/DSC09115.JPG",
            desc: "The pinnacle of artistic expression from our graduates."
        }
    ];

    const timesFashionEvents = [
        {
            title: "Runway Showcase 09",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/283271316_148311721053997_7512848085186064548_n.webp",
            desc: "The pinnacle of craftsmanship where every stitch tells a story of innovation."
        },
        {
            title: "Runway Showcase 10",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/3.webp",
            desc: "Final looks from a collection that set the national runway ablaze."
        },
        {
            title: "Runway Showcase 01",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/1.webp",
            desc: "Experimental silhouettes and avant-garde craftsmanship redefining modern couture."
        },
        {
            title: "Runway Showcase 02",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/2.webp",
            desc: "A celebration of textile innovation and the future of sustainable luxury."
        },
        {
            title: "Runway Showcase 03",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/282136995_714319799771247_3737667066916214377_n.webp",
            desc: "Capturing the raw energy and creative spirit of the national fashion stage."
        },
        {
            title: "Runway Showcase 04",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/282163749_1374261033088928_7453123197423120749_n.webp",
            desc: "Where traditional artistry meets contemporary urban engineering."
        },
        {
            title: "Runway Showcase 05",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/282216367_524995082597842_2398054392823973596_n.webp",
            desc: "Dramatic lighting and high-fashion narratives unfolding on the grand runway."
        },
        {
            title: "Runway Showcase 06",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/282550699_1052210812076551_8040298103209132221_n.webp",
            desc: "An exploration of form and function through the lens of elite design students."
        },
        {
            title: "Runway Showcase 07",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/283046134_334663152080210_5261683784717136772_n.webp",
            desc: "Bridging the gap between conceptual art and wearable luxury."
        },
        {
            title: "Runway Showcase 08",
            img: "https://ik.imagekit.io/fmldynl4j4/events-toi/283066658_7583834778323341_3664188590159620889_n.webp",
            desc: "Bold patterns and revolutionary draping techniques at the heart of the showcase."
        }
    ];

    const nextShowcase = () => setShowcaseIndex((prev) => (prev + 1) % showcaseEvents.length);
    const prevShowcase = () => setShowcaseIndex((prev) => (prev - 1 + showcaseEvents.length) % showcaseEvents.length);

    const nextTimes = () => setTimesIndex((prev) => (prev + 1) % timesFashionEvents.length);
    const prevTimes = () => setTimesIndex((prev) => (prev - 1 + timesFashionEvents.length) % timesFashionEvents.length);

    return (
        <div className="bg-white selection:bg-primary selection:text-white min-h-screen">
            <SEO
                title="INSD Events - Annual Showcases & Fashion Weeks"
                description="Explore INSD's Annual Talent Showcases and our impact at Delhi, Pune, and Ahmedabad Times Fashion Weeks."
            />

            {/* 0. GRAND PAGE HEADER */}
            <header className="pt-40 pb-20 px-6 md:px-12 lg:px-24 relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,#db343608,transparent_70%)] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center space-y-4"
                >

                    <h1 className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.8] text-slate-950">
                        INSD<span className="text-primary group-hover:pl-4 transition-all duration-500"> </span>EVENTS
                    </h1>

                    <div className="flex items-center justify-center gap-6 pt-12">
                        <span className="h-px w-12 bg-slate-200"></span>
                        <p className="text-slate-400 font-bold uppercase tracking-[0.5em] text-[10px]">Creativity Unbound</p>
                        <span className="h-px w-12 bg-slate-200"></span>
                    </div>
                </motion.div>
            </header>

            {/* 1. HERO SECTION - TALENT SHOWCASE */}
            <section className="relative pt-12 pb-16 px-6 md:px-12 lg:px-24 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[150%] bg-[radial-gradient(circle_at_50%_0%,#db343605,transparent_50%)] -z-10" />

                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row justify-between items-start md:items-end gap-10 mb-16">
                        <div className="space-y-6 max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/10 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em]"
                            >
                                <Sparkles size={14} /> Annual Flagship Events
                            </motion.div>
                            <h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] text-slate-900">
                                Talent <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Showcase</span>
                            </h2>
                        </div>
                        <div className="flex flex-col items-end gap-4">
                            <div className="flex gap-4">
                                <button onClick={prevShowcase} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all active:scale-90">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextShowcase} className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all active:scale-90">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Viewing {showcaseIndex + 1} of {showcaseEvents.length}</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-auto lg:h-[750px]">
                        {/* Main Featured Image */}
                        <div className="lg:col-span-8 relative h-[500px] lg:h-full rounded-[3rem] overflow-hidden shadow-3xl bg-slate-50 border border-slate-100 group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={showcaseIndex}
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0"
                                >
                                    <img 
                                        src={showcaseEvents[showcaseIndex].img} 
                                        className="w-full h-full object-cover object-top transition-all duration-[2s] group-hover:scale-110" 
                                        alt={showcaseEvents[showcaseIndex].title} 
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10" />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Side Gallery Grid - Showing More Pictures */}
                        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 h-full">
                            {showcaseEvents.map((event, idx) => {
                                // For simplicity in this layout, let's just show a fixed set of "more pictures" that change
                                const displayIndices = [
                                    (showcaseIndex + 1) % showcaseEvents.length,
                                    (showcaseIndex + 2) % showcaseEvents.length,
                                    (showcaseIndex + 3) % showcaseEvents.length,
                                    (showcaseIndex + 4) % showcaseEvents.length
                                ];

                                if (!displayIndices.includes(idx)) return null;

                                return (
                                    <motion.div
                                        key={idx}
                                        layout
                                        onClick={() => setShowcaseIndex(idx)}
                                        className="relative rounded-3xl overflow-hidden cursor-pointer group/thumb border border-slate-100 shadow-xl"
                                        whileHover={{ y: -5 }}
                                    >
                                        <img src={event.img} className="w-full h-full object-cover object-top aspect-video lg:aspect-auto lg:h-full brightness-75 group-hover/thumb:brightness-100 transition-all duration-500" alt="" />
                                        <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-transparent transition-colors" />
                                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/thumb:opacity-100 transition-opacity">
                                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary shadow-lg">
                                                <Play size={12} fill="currentColor" />
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TIMES FASHION WEEK - NEW PREMIUM SLIDER */}
            <section className="bg-slate-950 py-12 md:py-16 px-6 md:px-12 lg:px-24 overflow-hidden relative">
                {/* Visual Elements */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[180px] z-0 rounded-l-full" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-secondary/10 blur-[150px] z-0 rounded-r-full" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-primary text-[10px] font-black uppercase tracking-[0.4em]"
                            >
                                <Globe size={14} /> The National Stage
                            </motion.div>
                            <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.8] relative">
                                Times Fashion <br /> <span className="text-primary italic font-serif">Shows</span>
                            </h2>
                        </div>

                        <div className="flex flex-col items-end gap-6">
                            <p className="text-slate-400 max-w-sm text-right text-sm font-medium leading-relaxed border-r-2 border-primary/30 pr-6">
                                Experience the raw energy and artistry of our students on the most prestigious national runways.
                            </p>
                            <div className="flex gap-3">
                                <button onClick={prevTimes} className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all active:scale-95">
                                    <ChevronLeft size={24} />
                                </button>
                                <button onClick={nextTimes} className="w-16 h-16 rounded-2xl border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all active:scale-95">
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-12">
                        {/* Horizontal Gallery - Showing MORE Pictures at once */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {timesFashionEvents.slice(timesIndex, timesIndex + 4).map((event, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-white/5 group/times ${idx === 0 ? 'md:col-span-1' : ''}`}
                                >
                                    <img src={event.img} className="w-full h-full object-cover object-top transition-transform duration-[1.5s] group-hover/times:scale-110" alt="" />
                                    <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent group-hover/times:opacity-0 transition-opacity" />
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white/5 p-8 md:p-16 rounded-[4rem] border border-white/5 backdrop-blur-sm">
                            <div className="lg:col-span-7 relative h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden group">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={timesIndex}
                                        src={timesFashionEvents[timesIndex].img}
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.8 }}
                                        className="w-full h-full object-cover object-top"
                                        alt=""
                                    />
                                </AnimatePresence>
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="lg:col-span-5 space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter leading-tight">
                                        {timesFashionEvents[timesIndex].title}
                                    </h3>
                                    <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed border-l-2 border-primary/30 pl-8">
                                        {timesFashionEvents[timesIndex].desc}
                                    </p>
                                </div>

                                <div className="flex items-center gap-6">
                                    <Link to="/apply" className="px-10 py-5 bg-primary text-white rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-white hover:text-slate-950 transition-all text-center shadow-xl shadow-primary/20">Get Vip Entry</Link>
                                    <div className="flex gap-2">
                                        {timesFashionEvents.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setTimesIndex(i)}
                                                className={`h-1.5 transition-all duration-500 rounded-full ${timesIndex === i ? 'w-8 bg-primary' : 'w-2 bg-white/20'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. RUNWAY FILMS - VIDEO SECTION */}
            <section className="bg-slate-950 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden relative">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-12 border-t border-white/5 pt-20">
                        <div className="space-y-4">
                            <span className="text-secondary font-black uppercase tracking-[0.4em] text-[10px]">Movement & Motion</span>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
                                Runway <span className="text-secondary">Films</span>
                            </h2>
                        </div>
                        <p className="text-slate-400 max-w-sm text-sm font-medium leading-relaxed border-l border-secondary/30 pl-6">
                            Experience the raw energy, the pulse of the crowd, and the artistry in motion through our exclusive event films.
                        </p>
                    </div>

                    <div className="relative mx-auto max-w-xl aspect-9/16 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
                        {/* ScreenPal Embed Player */}
                        <iframe
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                            scrolling="no"
                            src="https://go.screenpal.com/player/cOfibunTsDx?ff=1&ahc=1&dcc=1&tl=1&bg=transparent&share=1&download=1&embed=1&cl=1"
                            allowFullScreen={true}
                            title="INSD Event Video"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* 4. RECAP / STATS SECTION */}
            <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    {[
                        { label: 'Runway Shows', value: '150+', icon: PlayCircle },
                        { label: 'Designers', value: '5000+', icon: Award },
                        { label: 'Locations', value: '12+', icon: MapPin },
                        { label: 'Global Media', value: '25+', icon: Globe },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="space-y-4"
                        >
                            <div className="w-12 h-12 mx-auto rounded-xl bg-slate-50 flex items-center justify-center text-primary border border-slate-100">
                                <stat.icon size={20} />
                            </div>
                            <div className="text-4xl font-black text-slate-900 tracking-tighter">{stat.value}</div>
                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 4. CALL TO ACTION */}
            <div className="px-6 pb-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto p-12 md:p-24 rounded-[4rem] bg-slate-950 text-white relative overflow-hidden flex flex-col items-center text-center gap-10"
                >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#db343620,transparent_70%)]" />
                    <div className="relative space-y-6">
                        <h3 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">Become the <br /> <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Next Highlight</span></h3>
                        <p className="text-slate-400 max-w-xl mx-auto text-lg font-medium">Join INSD and see your designs on the world's most prestigious runways. Our next showcase is waiting for your creativity.</p>
                    </div>
                    <div className="relative flex flex-col sm:flex-row gap-6">
                        <Link to="/apply" className="px-12 py-5 bg-primary rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-all shadow-2xl shadow-primary/30">Apply for 2026</Link>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};


export default Events;
