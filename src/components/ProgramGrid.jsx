import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, Heart, TrendingUp, Award, DollarSign, Navigation, ArrowLeft } from 'lucide-react';
import StepLeadForm from './StepLeadForm';

const programs = [
    {
        title: "FASHION DESIGN",
        tag: "FASHION",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20Fd%20.png?updatedAt=1774326592482",
        headline: "Create Trends. Build Your Label.",
        subtitle: "From styling to runway — step into the world of fashion.",
        careerPath: {
            title: "Fashion Careers That Define Trends",
            tracks: [
                { title: "Fashion Designer", desc: "Create collections, build labels, launch your brand", img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Fashion Stylist", desc: "Style celebrities, shoots & fashion campaigns", img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Textile Designer", desc: "Design fabrics, prints & materials for global brands", img: "https://images.pexels.com/photos/4622437/pexels-photo-4622437.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Fashion Entrepreneur", desc: "Start your own label or boutique business", img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "2-6 LPA", mid: "6-10 LPA", senior: "12-20 LPA" }
        }
    },
    {
        title: "INTERIOR DESIGN",
        tag: "INTERIOR",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20ID%20.png?updatedAt=1774326590892",
        headline: "Design Spaces That Inspire.",
        subtitle: "Turn ideas into real-world environments people live in.",
        careerPath: {
            title: "Interior Careers in Modern Spaces",
            tracks: [
                { title: "Interior Designer", desc: "Design homes, offices & commercial spaces", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Space Planner", desc: "Optimize layouts for functionality & aesthetics", img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Furniture Designer", desc: "Create custom furniture & décor products", img: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Set Designer", desc: "Design spaces for films, events & exhibitions", img: "https://images.pexels.com/photos/271816/pexels-photo-271816.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "2-5 LPA", mid: "6-12 LPA", senior: "15-25+ LPA" }
        }
    },
    {
        title: "GRAPHIC DESIGN",
        tag: "GRAPHIC",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20GD%20.png?updatedAt=1774326590920",
        headline: "Design Brands That Stand Out.",
        subtitle: "Create visuals, identities & campaigns that people remember.",
        careerPath: {
            title: "Graphic Careers That Build Brands",
            tracks: [
                { title: "Graphic Designer", desc: "Create logos, branding & marketing creatives", img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Brand Identity Designer", desc: "Shape how brands look, feel & communicate", img: "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Packaging Designer", desc: "Design product packaging for retail & e-commerce", img: "https://images.pexels.com/photos/3951901/pexels-photo-3951901.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Social Media Designer", desc: "Create viral content & digital creatives", img: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "2-4 LPA", mid: "5-10 LPA", senior: "10-18 LPA" }
        }
    },
    {
        title: "UI/UX DESIGN",
        tag: "UI/UX",
        img: "https://ik.imagekit.io/fmldynl4j4/UIUX%20.png",
        headline: "Design the Digital World.",
        subtitle: "Build apps, websites & experiences used by millions",
        careerPath: {
            title: "UI/UX Careers in Digital Innovation",
            tracks: [
                { title: "UI Designer", desc: "Design apps, websites & interfaces", img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "UX Designer", desc: "Improve user experience & product usability", img: "https://images.pexels.com/photos/3183186/pexels-photo-3183186.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Product Designer", desc: "Build digital products used by millions", img: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Web Designer", desc: "Create modern, responsive websites", img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "2.5-5 LPA", mid: "8-18 LPA", senior: "20-35+ LPA" }
        }
    },
    {
        title: "ANIMATION & VFX",
        tag: "ANIMATION",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20animation%20.png?updatedAt=1774326593242",
        headline: "Bring Stories to Life.",
        subtitle: "Work in films, gaming & digital entertainment.",
        careerPath: {
            title: "Animation Careers in Visual Storytelling",
            tracks: [
                { title: "Animator", desc: "Work in films, OTT & gaming", img: "https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "VFX Artist", desc: "Create visual effects for movies & ads", img: "https://images.pexels.com/photos/2510428/pexels-photo-2510428.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Game Designer", desc: "Design characters & game environments", img: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Video Editor", desc: "Edit content for brands, creators & media", img: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "2-4 LPA", mid: "5-10 LPA", senior: "12-20 LPA" }
        }
    },
    {
        title: "PHOTOGRAPHY",
        tag: "PHOTOGRAPHY",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20photography%20.png?updatedAt=1774326593691",
        headline: "Create Content That Connects.",
        subtitle: "From shoots to social media — become a visual storyteller.",
        careerPath: {
            title: "Photography Careers as Visual Creators",
            tracks: [
                { title: "Photographer", desc: "Fashion, product, wedding & commercial shoots", img: "https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Content Creator", desc: "Build your personal brand or work with brands", img: "https://images.pexels.com/photos/3052848/pexels-photo-3052848.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Influencer / Visual Creator", desc: "Create content for social media platforms", img: "https://images.pexels.com/photos/2531551/pexels-photo-2531551.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "2-5 LPA", mid: "6-12 LPA", senior: "15-30+ LPA" }
        }
    },
    {
        title: "HAIR, BEAUTY & MAKEUP",
        tag: "BEAUTY",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20hair%20&%20beauty%20.png?updatedAt=1774326593991",
        headline: "Build a Career in Beauty & Glam.",
        subtitle: "Work in fashion, media, salons & personal branding.",
        careerPath: {
            title: "Beauty Careers in Glamour",
            tracks: [
                { title: "Makeup Artist", desc: "Work in fashion, films & bridal industry", img: "https://images.pexels.com/photos/3373739/pexels-photo-3373739.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Hair Stylist", desc: "Professional styling for salons & shoots", img: "https://images.pexels.com/photos/3993444/pexels-photo-3993444.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Beauty Expert", desc: "Skincare, personal grooming & consulting", img: "https://images.pexels.com/photos/3762875/pexels-photo-3762875.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "2-4 LPA", mid: "5-10 LPA", senior: "10-25+ LPA" }
        }
    },
    {
        title: "TEXTILE DESIGN",
        tag: "TEXTILE",
        img: "https://ik.imagekit.io/fmldynl4j4/Gemini_Generated_Image_dwq9tvdwq9tvdwq9.png",
        headline: "Create Fabrics. Define Trends.",
        subtitle: "Blend creativity with craftsmanship and innovation.",
        careerPath: {
            title: "Textile Careers in Global Innovation",
            tracks: [
                { title: "Textile Designer", desc: "Create fabrics, patterns & materials for fashion and lifestyle brands", img: "https://images.pexels.com/photos/4622437/pexels-photo-4622437.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Print & Surface Designer", desc: "Design prints for apparel, home décor, and global collections", img: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Fabric Production Specialist", desc: "Work with mills & manufacturers to bring designs to life", img: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Textile Merchandiser", desc: "Manage product lines, sourcing & market trends for brands", img: "https://images.pexels.com/photos/4622437/pexels-photo-4622437.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "3-5 LPA", mid: "6-12 LPA", senior: "12-25 LPA" }
        }
    },
    {
        title: "JEWELLERY DESIGN",
        tag: "JEWELLERY",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20JD.PNG?updatedAt=1774326594063",
        headline: "Design Precious Legacies.",
        subtitle: "From gemstone styling to luxury manufacturing — become a master crafter.",
        careerPath: {
            title: "Precious Design Careers & Luxury Markets",
            tracks: [
                { title: "Jewellery Designer", desc: "Design bespoke pieces, wedding collections & brand labels", img: "https://images.pexels.com/photos/1458867/pexels-photo-1458867.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Gemologist / Stone Grader", desc: "Expert assessment, grading and sourcing of precious stones", img: "https://images.pexels.com/photos/265906/pexels-photo-265906.jpeg?auto=compress&cs=tinysrgb&w=800" },
                { title: "Luxury Retail Merchant", desc: "Manage high-value inventory and luxury brand operations", img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800" }
            ],
            salaries: { entry: "3-6 LPA", mid: "7-15 LPA", senior: "20-45+ LPA" }
        }
    }
];

const ProgramGrid = () => {
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [showLeadForm, setShowLeadForm] = useState(false);

    useEffect(() => {
        if (selectedProgram) {
            document.body.classList.add('hide-navbar');
            document.body.style.overflow = 'hidden';
        } else {
            document.body.classList.remove('hide-navbar');
            document.body.style.overflow = 'unset';
            setShowLeadForm(false);
        }
        return () => {
            document.body.classList.remove('hide-navbar');
            document.body.style.overflow = 'unset';
            setShowLeadForm(false);
        };
    }, [selectedProgram]);

    const ProgramCard = ({ program, index, onClick }) => (
        <motion.div
            onClick={onClick}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.8 }}
            className="group relative aspect-4/5 rounded-4xl overflow-hidden cursor-pointer shadow-xl hover:shadow-primary/20 border border-white/5 hover:border-primary/40 transition-all duration-700"
        >
            <img
                src={program.img}
                alt={program.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/30 to-transparent opacity-95 group-hover:opacity-75 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-white/3 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-all duration-700 pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
                <h3 className="text-white font-black text-xl md:text-2xl leading-none uppercase tracking-tighter transition-transform duration-700 group-hover:-translate-y-6">
                    {program.title}
                </h3>
                {program.headline && (
                    <div className="overflow-hidden">
                        <p className="text-primary font-black text-[11px] md:text-sm uppercase tracking-[0.25em] mb-3 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-100 transform translate-y-8 group-hover:translate-y-0">
                            {program.headline}
                        </p>
                    </div>
                )}
                {program.subtitle && (
                    <div className="overflow-hidden">
                        <p className="text-slate-200 text-[10px] md:text-sm font-bold leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200 transform translate-y-8 group-hover:translate-y-0">
                            {program.subtitle}
                        </p>
                    </div>
                )}
                <div className="mt-2 flex items-center gap-3 opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-700 border-t border-white/10 pt-6">
                    <span className="text-[11px] font-black text-white uppercase tracking-widest pb-1">View Career Path</span>
                    <ArrowUpRight className="text-primary w-5 h-5 ml-auto group-hover:rotate-45 transition-transform duration-500" />
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="programs-grid" className="py-12 md:py-16 bg-slate-50 overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-6">
                {/* Balanced High-End Grid (4 cards in first row, 5 in second row) */}
                <div className="space-y-6 md:space-y-8">
                    {/* First Row (4 cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                        {programs.slice(0, 4).map((program, index) => (
                            <ProgramCard 
                                key={index} 
                                program={program} 
                                index={index} 
                                onClick={() => setSelectedProgram(program)} 
                            />
                        ))}
                    </div>

                    {/* Second Row (5 cards) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                        {programs.slice(4, 9).map((program, index) => (
                            <ProgramCard 
                                key={index + 4} 
                                program={program} 
                                index={index + 4} 
                                onClick={() => setSelectedProgram(program)} 
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Career Path Modal - Rendered via Portal to escape stacking contexts */}
            {typeof document !== 'undefined' && createPortal(
                <AnimatePresence mode="wait">
                    {selectedProgram && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100000] flex items-center justify-center p-4 md:p-6 lg:p-12 pointer-events-auto"
                        >
                            {/* Backdrop */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProgram(null)}
                                className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
                            />

                            {/* Modal Content */}
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0, y: 30 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.9, opacity: 0, y: 30 }}
                                className="relative w-full max-w-5xl h-full max-h-[92vh] bg-white rounded-[2.5rem] md:rounded-[4xl] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row"
                            >
                                {/* Left Side: Program Branding */}
                                <div className="hidden md:flex md:w-1/3 relative overflow-hidden bg-slate-900 group/modal">
                                    <div className="absolute inset-0 bg-slate-950/60 z-10" />
                                    <img 
                                        src={selectedProgram.img} 
                                        className="absolute inset-0 w-full h-full object-cover grayscale-50 group-hover/modal:grayscale-0 group-hover/modal:scale-110 transition-all duration-1000" 
                                        alt={selectedProgram.title} 
                                    />
                                    
                                    <div className="relative z-20 p-10 flex flex-col justify-end h-full">
                                        <motion.div
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            <div className="w-12 h-px bg-primary mb-6" />
                                            <h2 className="text-white text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4 italic">
                                                {selectedProgram.title}
                                            </h2>
                                        </motion.div>
                                    </div>

                                    <button 
                                        onClick={() => setSelectedProgram(null)}
                                        className="md:hidden absolute top-6 right-6 p-3 rounded-full bg-slate-950/50 backdrop-blur-md text-white border border-white/20 z-50 shadow-2xl"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                {/* Right Side: Career Data */}
                                <div className="flex-1 md:w-2/3 flex flex-col bg-slate-50 relative overflow-hidden">
                                    {/* Desktop Top Bar with Close */}
                                    <div className="hidden md:flex items-center justify-between p-8 pb-4 border-b border-slate-100 bg-slate-50/80 backdrop-blur-xs z-40 sticky top-0">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-px bg-primary" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Global Career Pathways</span>
                                        </div>
                                        <button 
                                            onClick={() => setSelectedProgram(null)}
                                            className="p-3 rounded-full bg-white shadow-xl hover:bg-primary hover:text-white transition-all duration-300 border border-slate-100 group"
                                        >
                                            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                                        </button>
                                    </div>

                                    <div className="flex-1 overflow-x-hidden overflow-y-auto p-8 md:p-12 md:pt-6 custom-scrollbar space-y-10 pb-24 md:pb-16">

                                        <AnimatePresence mode="wait">
                                            {showLeadForm ? (
                                                <motion.div
                                                    key="lead-form"
                                                    initial={{ opacity: 0, x: 20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: -20 }}
                                                    className="w-full"
                                                >
                                                    <button 
                                                        onClick={() => setShowLeadForm(false)}
                                                        className="mb-6 flex items-center gap-2 text-slate-400 hover:text-primary transition-colors font-bold uppercase tracking-widest text-[10px]"
                                                    >
                                                        <ArrowLeft size={14} />
                                                        Back to Program Details
                                                    </button>
                                                    <StepLeadForm 
                                                        isModal={true} 
                                                        title={`Apply for ${selectedProgram.title}`}
                                                    />
                                                </motion.div>
                                            ) : (
                                                <motion.div
                                                    key="career-data"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    exit={{ opacity: 0, x: 20 }}
                                                    className="space-y-10"
                                                >
                                                    {/* Header Text */}
                                                    <div className="max-w-xl">
                                                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight mb-4 tracking-tighter uppercase italic">
                                                            {selectedProgram.careerPath.title}
                                                        </h3>
                                                        <p className="text-slate-500 font-medium text-base md:text-lg italic border-l-4 border-slate-200 pl-6">
                                                            "{selectedProgram.subtitle}"
                                                        </p>
                                                    </div>

                                                    {/* Career Tracks Grid */}
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                                        {selectedProgram.careerPath.tracks.map((track, i) => (
                                                            <div key={i} className="group/track relative bg-white p-5 md:p-6 rounded-3xl border border-slate-200/60 hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
                                                                <div className="flex items-start gap-4">
                                                                    <div className="w-14 h-14 rounded-2xl overflow-hidden shrink-0 shadow-xl border-2 border-white transform transition-transform duration-500 group-hover/track:scale-105">
                                                                        <img src={track.img} className="w-full h-full object-cover" alt={track.title} />
                                                                    </div>
                                                                    <div>
                                                                        <h4 className="font-black text-slate-900 uppercase tracking-tight text-xs mb-1">{track.title}</h4>
                                                                        <p className="text-slate-500 text-[10px] leading-relaxed font-semibold">{track.desc}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    {/* Salary Expectations UI */}
                                                    {selectedProgram.careerPath.salaries && (
                                                        <div className="mt-8">
                                                            <div className="flex items-center gap-3 mb-6">
                                                                <div className="w-8 h-px bg-primary" />
                                                                <h4 className="font-black text-slate-900 uppercase tracking-widest text-xs">Salary Trajectory</h4>
                                                            </div>
                                                            
                                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                {/* Entry Level */}
                                                                <div className="bg-white p-6 rounded-3xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 hover:shadow-lg overflow-hidden relative">
                                                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-4 shadow-inner">
                                                                        <TrendingUp className="w-4 h-4 text-slate-400" />
                                                                    </div>
                                                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 relative z-10">Entry Level</p>
                                                                    <p className="text-xl font-black text-slate-900 tracking-tight relative z-10">{selectedProgram.careerPath.salaries.entry}</p>
                                                                </div>
                                                                
                                                                {/* Mid Level */}
                                                                <div className="bg-white p-6 rounded-3xl border border-slate-200/60 hover:border-slate-300 transition-all duration-300 hover:shadow-lg overflow-hidden relative">
                                                                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-4 shadow-inner">
                                                                        <Award className="w-4 h-4 text-slate-400" />
                                                                    </div>
                                                                    <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 relative z-10">Mid Level</p>
                                                                    <p className="text-xl font-black text-slate-900 tracking-tight relative z-10">{selectedProgram.careerPath.salaries.mid}</p>
                                                                </div>
                                                                
                                                                {/* Senior Level */}
                                                                <div className="bg-white p-6 rounded-3xl border border-primary/20 bg-linear-to-br from-white to-red-50/50 shadow-md hover:shadow-xl relative overflow-hidden group/salary hover:border-primary/40 transition-all duration-300 [transform:translateZ(0)]">
                                                                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[100px] rounded-tr-3xl transition-transform duration-500 group-hover/salary:scale-110" />
                                                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4 relative z-10 shadow-inner">
                                                                        <DollarSign className="w-4 h-4 text-primary" />
                                                                    </div>
                                                                    <p className="text-primary text-[10px] font-black uppercase tracking-widest mb-1 relative z-10">Senior Level</p>
                                                                    <p className="text-xl font-black text-slate-900 tracking-tight relative z-10">{selectedProgram.careerPath.salaries.senior}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )}

                                                    
                                                    {/* Professional Outcomes Disclaimer */}
                                                    <div className="pt-6 border-t border-slate-100 italic">
                                                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                                            Program outcomes may vary based on individual portfolio excellence and industry demand.
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default ProgramGrid;
