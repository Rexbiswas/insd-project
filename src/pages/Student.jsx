import React from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    BookOpen,
    Globe,
    Award,
    Briefcase,
    ArrowRight,
    Play
} from 'lucide-react';

import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SuccessStory from '../components/SuccessStory';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const Student = () => {
    const { openAdmissionModal } = useAdmissionModal();

    return (
        <div className="min-h-screen bg-white">
            <SEO
                title="Student Life at INSD | Vibrant Campus & Creative Community"
                description="Experience a vibrant student life at INSD. Join our creative community, access world-class studios, and transform from a student into a design professional."
                keywords="student life, design campus, creative community, fashion design students, interior design workshops, INSD student experience"
                canonical="https://insd.edu.in/student"
            />

            {/* Hero Section - Editorial Style */}
            <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=1920"
                        alt="Student Life at INSD"
                        className="w-full h-full object-cover grayscale brightness-50"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/40 to-transparent" />
                </div>

                <div className="container relative z-10 mx-auto px-6 h-full flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px w-12 bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">The Student Journey</span>
                        </div>

                        <h1 className="text-6xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter text-white mb-10">
                            Beyond <br />
                            <span className="text-transparent stroke-text-white">Boundaries.</span>
                        </h1>

                        <p className="text-xl md:text-3xl font-bold text-white/80 max-w-2xl mb-12 leading-tight">
                            At INSD, we don't just teach design; we cultivate visionaries. Join a community where your creativity meets industry-standard expertise.
                        </p>

                        <div className="flex flex-wrap gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => openAdmissionModal()}
                                className="px-10 py-5 bg-primary text-white rounded-full font-black uppercase tracking-widest text-xs shadow-2xl flex items-center gap-3"
                            >
                                Start Your Story
                                <ArrowRight size={18} />
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-white/20 transition-all"
                            >
                                <Play size={18} className="fill-white" />
                                Watch Campus Life
                            </motion.button>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute bottom-12 right-12 z-10 hidden lg:block">
                    <div className="flex items-center gap-6 bg-white/5 backdrop-blur-xl p-8 rounded-[3rem] border border-white/10 shadow-2xl">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <img
                                    key={i}
                                    src={`https://i.pravatar.cc/100?img=${i + 20}`}
                                    className="w-12 h-12 rounded-full border-2 border-slate-900"
                                    alt="student"
                                />
                            ))}
                        </div>
                        <div>
                            <p className="text-white font-black text-xl leading-none mb-1">5000+</p>
                            <p className="text-white/50 text-[10px] font-black uppercase tracking-widest">Active Dreamers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Skills Section - Editorial Skewed Layout */}
            <section className="py-24 md:py-40 bg-white overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20 md:mb-32">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-primary leading-none mb-6"
                        >
                            Successful Career Skills
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl md:text-3xl font-bold text-slate-600 tracking-tight"
                        >
                            We train students for holistic growth
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-6">
                        {[
                            {
                                title: "Design Skills",
                                sub: "Create. Design. Execute.",
                                img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
                                skew: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)"
                            },
                            {
                                title: "Soft Skills",
                                sub: "Communicate. Present. Confidence.",
                                img: "https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800",
                                skew: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"
                            },
                            {
                                title: "AI Tools",
                                sub: "Prompt. Produce. Fast.",
                                img: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
                                skew: "polygon(15% 0, 100% 0, 85% 100%, 0 100%)"
                            },
                            {
                                title: "Entrepreneurial Skills",
                                sub: "Price. Sell. Build. Earn.",
                                img: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
                                skew: "polygon(0 0, 85% 0, 100% 100%, 15% 100%)"
                            }
                        ].map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-default"
                            >
                                <div
                                    className="relative h-[400px] mb-8 overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]"
                                    style={{ clipPath: skill.skew }}
                                >
                                    <img
                                        src={skill.img}
                                        alt={skill.title}
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>
                                <div className="px-4">
                                    <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-1 group-hover:text-primary transition-colors">
                                        {skill.title}
                                    </h3>
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                                        {skill.sub}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert Faculties Section - Enhanced Text-Driven Editorial */}
            <section className="py-32 md:py-64 bg-[#050505] text-white overflow-hidden relative">
                {/* 1. Grainy Texture Overlay */}
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none z-0 mix-blend-overlay">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <filter id="noiseFilter">
                            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
                        </filter>
                        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                    </svg>
                </div>

                {/* 2. Moving Light Source */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-primary rounded-full blur-[120px] pointer-events-none z-0"
                />

                {/* 3. Background Scrolling Marquee */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full rotate-[-5deg] opacity-[0.03] select-none pointer-events-none">
                    <motion.div
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="whitespace-nowrap flex gap-20 text-[20vw] font-black uppercase"
                    >
                        <span>Expert Faculty • Industry Mentors • Skill School • Expert Faculty •</span>
                        <span>Expert Faculty • Industry Mentors • Skill School • Expert Faculty •</span>
                    </motion.div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col items-center text-center space-y-24">

                            {/* Main Headline Group */}
                            <div className="space-y-12">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="px-6 py-2 border border-primary/30 rounded-full inline-block backdrop-blur-md"
                                >
                                    <span className="text-primary font-black uppercase tracking-[0.6em] text-[10px]">World-Class Mentors</span>
                                </motion.div>

                                <div className="space-y-4">
                                    <motion.h2
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="text-7xl md:text-[12rem] font-black uppercase tracking-tighter leading-[0.75] relative"
                                    >
                                        Learn <br />
                                        <span className="italic font-serif text-primary">From</span> <br />
                                        Expertise.
                                    </motion.h2>
                                </div>
                            </div>

                            {/* Accolade Card - Glassmorphism */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="w-full max-w-4xl"
                            >
                                <div className="group relative p-16 md:p-24 rounded-[4rem] overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl transition-all duration-1000 hover:border-primary/50">
                                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                                    <div className="relative z-10 space-y-6">
                                        <p className="text-primary font-black uppercase tracking-[0.5em] text-xs">Accreditation</p>
                                        <h3 className="text-6xl md:text-[9rem] font-black uppercase tracking-tighter leading-none">
                                            India's #1 <br />
                                            <span className="text-transparent stroke-text-white italic">Skill School</span>
                                        </h3>

                                        <div className="flex flex-wrap justify-center gap-12 mt-12 opacity-40">
                                            {["Innovation", "Creativity", "Leadership", "Success"].map((tag, idx) => (
                                                <span key={idx} className="text-[10px] font-black uppercase tracking-widest">• {tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-10 w-px h-64 bg-linear-to-b from-transparent via-primary/50 to-transparent"
                />
                <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 right-10 w-px h-64 bg-linear-to-b from-transparent via-primary/50 to-transparent"
                />
            </section>

            {/* Campus Experience Section - High Fidelity Collage */}
            <section className="py-24 md:py-40 bg-white overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:grid-rows-3 auto-rows-fr">

                        {/* Top Row */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 aspect-square rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-3 aspect-square lg:aspect-auto rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-2 aspect-square rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 aspect-square rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-3 aspect-square lg:aspect-auto rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>

                        {/* Middle Row */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 lg:row-span-1 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>

                        {/* Central Text Block */}
                        <div className="lg:col-span-6 flex flex-col items-center justify-center text-center p-8 lg:p-16 bg-white">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-linear-to-br from-[#db3436] to-[#134a84] py-4"
                            >
                                Our Campus <br />
                                Is Well-Equipped <br />
                                To Deliver The <br />
                                Perfect Training
                            </motion.h2>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3 lg:row-span-1 rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/159844/science-fair-school-education-learning-159844.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>

                        {/* Bottom Row */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 aspect-square rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="lg:col-span-4 aspect-square lg:aspect-auto rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-3 aspect-square lg:aspect-auto rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-3 aspect-square lg:aspect-auto rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Campus" />
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Placement Support Section - Industry standard UI */}
            <section className="py-24 md:py-40 bg-slate-50 overflow-hidden relative">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none">
                    <div className="text-[20vw] font-black uppercase tracking-tighter leading-none whitespace-nowrap animate-marquee">
                        Placements • Careers • Placements • Careers •
                    </div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col items-center">

                        {/* Top Image Row - Dynamic Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full mb-20">
                            {[
                                "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg",
                                "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
                                "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg",
                                "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg",
                                "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg",
                                "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                            ].map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="aspect-square rounded-3xl overflow-hidden shadow-xl border-4 border-white group"
                                >
                                    <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Placement" />
                                </motion.div>
                            ))}
                        </div>

                        {/* Central Stats Block */}
                        <div className="text-center space-y-10 max-w-5xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-transparent bg-clip-text bg-linear-to-br from-[#db3436] to-[#134a84]">
                                    100% Lifetime <br />
                                    Placement Support
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="inline-block px-10 py-6 bg-primary/10 rounded-full border-2 border-primary/20 backdrop-blur-md">
                                    <p className="text-primary font-black uppercase tracking-widest text-lg md:text-2xl">
                                        Starting Salary: <span className="text-slate-900">upto Rs. 50,000/-</span> per month
                                    </p>
                                </div>

                                <div className="pt-4">
                                    <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight text-slate-900">
                                        Highest Package 2025: <span className="text-primary">Rs. 1.5 Lacs</span> per month
                                    </h3>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bottom Image Row - Staggered */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full mt-24">
                            {[
                                "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
                                "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
                                "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg",
                                "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
                                "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg"
                            ].map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: -30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className={`aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group ${i % 2 === 0 ? 'mt-12' : '-mt-12'}`}
                                >
                                    <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Placement" />
                                </motion.div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* Comparison Section - The INSD Advantage */}
            <section className="py-24 md:py-40 bg-white overflow-hidden relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                                <span className="text-primary italic">INSD Students</span> <span className="text-slate-400">vs</span> <br />
                                <span className="text-secondary">Other Students</span>
                            </h2>
                            <p className="text-xl md:text-3xl font-bold text-primary tracking-tight">
                                We develop professionals, not just designers.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                label: "Skill-based education",
                                imgInsd: "https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=800",
                                imgOther: "https://images.pexels.com/photos/159844/science-fair-school-education-learning-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
                                comparison: {
                                    insd: "Direct Industry Mastery",
                                    others: "Theoretical Limitations"
                                }
                            },
                            {
                                label: "Industry preparation",
                                imgInsd: "https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg?auto=compress&cs=tinysrgb&w=800",
                                imgOther: "https://images.pexels.com/photos/1181311/pexels-photo-1181311.jpeg?auto=compress&cs=tinysrgb&w=800",
                                comparison: {
                                    insd: "Real Industry Briefs",
                                    others: "Classroom Mock-ups"
                                }
                            },
                            {
                                label: "Launching your career",
                                imgInsd: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=800",
                                imgOther: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=800",
                                comparison: {
                                    insd: "100% Career Support",
                                    others: "Generic Job Boards"
                                }
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group"
                            >
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter leading-tight border-l-4 border-primary pl-4">
                                        {item.label}
                                    </h3>
                                    
                                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-2 border-slate-100 flex">
                                        {/* Other Students Side */}
                                        <div className="relative w-1/2 h-full group/other overflow-hidden border-r border-white/20">
                                            <img 
                                                src={item.imgOther} 
                                                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-1000 group-hover:scale-105" 
                                                alt="Other Students" 
                                            />
                                            <div className="absolute inset-0 bg-slate-900/40" />
                                            <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full">
                                                <span className="text-[10px] font-black text-white uppercase tracking-widest">Other Students</span>
                                            </div>
                                            <div className="absolute bottom-6 left-4 right-4">
                                                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest line-through">{item.comparison.others}</p>
                                            </div>
                                        </div>

                                        {/* INSD Students Side */}
                                        <div className="relative w-1/2 h-full group/insd overflow-hidden">
                                            <img 
                                                src={item.imgInsd} 
                                                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                                                alt="INSD Students" 
                                            />
                                            <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-500" />
                                            <div className="absolute top-4 right-4 bg-primary px-3 py-1 rounded-full shadow-lg">
                                                <span className="text-[10px] font-black text-white uppercase tracking-widest">INSD Edge</span>
                                            </div>
                                            <div className="absolute bottom-6 left-4 right-4">
                                                <p className="text-white font-black text-[10px] uppercase tracking-widest">{item.comparison.insd}</p>
                                                <div className="w-8 h-1 bg-primary mt-2" />
                                            </div>
                                        </div>

                                        {/* Floating VS Badge */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-2xl flex items-center justify-center z-10 border-4 border-slate-50">
                                            <span className="text-primary font-black italic text-sm">VS</span>
                                        </div>
                                    </div>

                                    <p className="text-slate-500 font-bold text-center px-4 text-sm italic">
                                        "We develop professionals, not just designers."
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Largest Sectors Section - High Fashion Editorial */}
            <section className="py-24 md:py-40 px-6 bg-white overflow-hidden relative">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                        {/* Title Block */}
                        <div className="lg:col-span-4 mb-12 lg:mb-0">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-4"
                            >
                                <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-6">Industry Reach</span>
                                <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-950">
                                    Work <br />
                                    <span className="italic font-serif text-slate-700">in the</span> <br />
                                    <span className="text-primary">Largest</span> <br />
                                    Sectors
                                </h2>
                                <div className="w-20 h-2 bg-primary mt-8"></div>
                            </motion.div>
                        </div>

                        {/* Sectors Grid */}
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {[
                                    {
                                        label: "Hospitality Industry",
                                        img: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800",
                                        delay: 0.1
                                    },
                                    {
                                        label: "Retail Industry",
                                        img: "https://images.pexels.com/photos/1036856/pexels-photo-1036856.jpeg?auto=compress&cs=tinysrgb&w=800",
                                        delay: 0.2
                                    },
                                    {
                                        label: "Media & Entertainment",
                                        img: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=800",
                                        delay: 0.3
                                    },
                                    {
                                        label: "Design Industry",
                                        img: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=800",
                                        delay: 0.4
                                    }
                                ].map((sector, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: sector.delay, ease: "easeOut" }}
                                        className="group"
                                    >
                                        <div className="aspect-[4/9] md:aspect-[1/3] rounded-3xl overflow-hidden mb-6 shadow-2xl relative">
                                            <img
                                                src={sector.img}
                                                alt={sector.label}
                                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors duration-500" />

                                            {/* Hover Accent */}
                                            <div className="absolute bottom-0 left-0 w-full h-1 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />
                                        </div>
                                        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-900 text-center leading-tight">
                                            {sector.label.split(' ').map((word, idx) => (
                                                <span key={idx} className="block">{word}</span>
                                            ))}
                                        </h3>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Success Stories Section */}
            <SuccessStory />

            {/* Footer */}
            <Footer />
        </div >
    );
};

export default Student;
