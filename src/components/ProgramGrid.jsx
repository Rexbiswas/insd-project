import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ProgramGrid = () => {
    const programs = [
        {
            title: "Fashion Design",
            img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",
            size: "large"
        },
        {
            title: "Interior Design",
            img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
            size: "small"
        },
        {
            title: "Graphic Design",
            img: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=600&q=80",
            size: "small"
        },
        {
            title: "Jewellery Design",
            img: "https://images.unsplash.com/photo-1515562141522-b3dc7305ce35?auto=format&fit=crop&w=600&q=80",
            size: "small"
        },
        {
            title: "Animation & VFX",
            img: "https://images.unsplash.com/photo-1550745679-33d01f01888a?auto=format&fit=crop&w=600&q=80",
            size: "small"
        },
        {
            title: "Product Design",
            img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80",
            size: "small"
        },
        {
            title: "Photography",
            img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&w=600&q=80",
            size: "small"
        }
    ];

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase marker:text-xs mb-4 block">Programs</span>
                        <h4 className="text-slate-500 font-bold text-sm mb-6 uppercase tracking-wider">Skill-Based Programs That Make You Job-Ready</h4>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1]">
                            Choose a program that fits your aspirations and <span className="text-primary italic">industry goals</span>.
                        </h2>
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-slate-900 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 group"
                    >
                        Explore All Courses
                        <div className="p-1 bg-white/10 rounded-full group-hover:bg-primary transition-colors">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                    </motion.button>
                </div>

                {/* Next-Level Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 auto-rows-[300px] md:auto-rows-[350px]">
                    {/* First Large Card (Fashion) */}
                    <div className="md:col-span-1 md:row-span-1">
                         <ProgramCard program={programs[0]} index={0} />
                    </div>
                    
                    {/* Top Right Cluster */}
                    <div className="md:col-span-1 md:row-span-1">
                         <ProgramCard program={programs[1]} index={1} />
                    </div>
                    <div className="md:col-span-1 md:row-span-1">
                         <ProgramCard program={programs[2]} index={2} />
                    </div>

                    {/* Bottom Row - 4 smaller cards */}
                    <div className="grid grid-cols-2 md:grid-cols-4 md:col-span-3 gap-6 lg:gap-8">
                         {programs.slice(3).map((p, i) => (
                             <ProgramCard key={i+3} program={p} index={i+3} h="h-full" />
                         ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ProgramCard = ({ program, index, h = "h-full" }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className={`group relative ${h} rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500`}
        >
            <img 
                src={program.img} 
                alt={program.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Soft Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
            
            {/* Text Overlay */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <span className="text-white font-black text-xl md:text-2xl tracking-tighter">{program.title}</span>
                <div className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>
        </motion.div>
    );
};

export default ProgramGrid;
