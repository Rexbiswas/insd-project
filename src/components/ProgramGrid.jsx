import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const programs = [
    {
        title: "FASHION DESIGN & STYLING",
        tag: "FASHION",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20Fd%20.png?updatedAt=1774326592482",
    },
    {
        title: "GRAPHIC DESIGN & VISUAL COMMUNICATION",
        tag: "GRAPHIC",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20GD%20.png?updatedAt=1774326590920",
    },
    {
        title: "INTERIOR DESIGN",
        tag: "INTERIOR",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20ID%20.png?updatedAt=1774326590892",
    },
    {
        title: "JEWELLERY DESIGN",
        tag: "JEWELLERY",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20JD.PNG?updatedAt=1774326594063",
    },
    {
        title: "ANIMATION & VFX",
        tag: "ANIMATION",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20animation%20.png?updatedAt=1774326593242",
    },
    {
        title: "UI/UX & DIGITAL PRODUCT DESIGN",
        tag: "UI/UX",
        img: "https://ik.imagekit.io/fmldynl4j4/UIUX%20.png",
    },
    {
        title: "PHOTOGRAPHY & CONTENT CREATION",
        tag: "PHOTOGRAPHY",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20photography%20.png?updatedAt=1774326593691",
    },
    {
        title: "HAIR & BEAUTY",
        tag: "BEAUTY",
        img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Copy%20of%20hair%20&%20beauty%20.png?updatedAt=1774326593991",
    },
    {
        title: "TEXTILE DESIGN",
        tag: "TEXTILE",
        img: "https://ik.imagekit.io/fmldynl4j4/Gemini_Generated_Image_dwq9tvdwq9tvdwq9.png",
    }
];

const ProgramGrid = () => {
    return (
        <section id="programs-grid" className="py-24 bg-slate-50 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                {/* Header Section */}
                <div className="max-w-4xl mb-16 px-2">
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs mb-4 block">Our Schools</span>
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                        Programs That Build <span className="text-primary italic">Careers</span>.
                    </h2>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-sm border-l-4 border-primary pl-4 py-1">
                        Skill-Based Programs for the next generation of creatives
                    </p>
                </div>

                {/* High-Impact Dense Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.6 }}
                            className={`group relative aspect-4/5 rounded-4xl overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700 ${
                                index === 0 ? 'xl:col-span-1' : ''
                            }`}
                        >
                            {/* Program Image */}
                            <img
                                src={program.img}
                                alt={program.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                            />

                            {/* Overlays */}
                            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-5 left-5 z-20">
                                <span className="bg-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest text-slate-900 border border-slate-100 shadow-lg">
                                    {program.tag}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
                                <h3 className="text-white font-black text-xl md:text-2xl leading-none uppercase tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">
                                    {program.title}
                                </h3>
                                
                                <div className="mt-4 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                                    <span className="text-[10px] font-black text-white uppercase tracking-widest border-b border-primary pb-1">Explore Details</span>
                                    <ArrowUpRight className="text-primary w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProgramGrid;
