import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PillarCard = ({ pillar, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="pillar-card-premium group relative h-full min-h-[500px] rounded-[3rem] p-8 md:p-12 bg-white border border-slate-100/80 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_60px_100px_-20px_rgba(0,0,0,0.08)] hover:border-primary/10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden cursor-default flex flex-col justify-between"
        >
            {/* 1. Dynamic Gradient Background (Holographic feel) */}
            <div className={`absolute inset-0 bg-linear-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-1000`} />

            {/* 2. Intelligent Mesh Background Effect */}
            <div className="absolute inset-0 opacity-[0.01] group-hover:opacity-[0.03] transition-opacity duration-700 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

            <div className="relative z-10 w-full">
                {/* 3. Header: Centered Image Focal Point */}
                <div className="flex flex-col items-center mb-14">
                    <div className="w-full flex justify-end mb-6">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-200 group-hover:text-primary/30 transition-colors duration-500">
                            / 0{index + 1}
                        </span>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-40 h-40 rounded-[2.5rem] bg-slate-50 border-4 border-white overflow-hidden shadow-2xl shadow-black/10 group-hover:border-primary/20 transition-all duration-700 relative z-10"
                    >
                        <img 
                            src={pillar.image} 
                            alt={pillar.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                        />
                    </motion.div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-200 group-hover:text-primary/30 transition-colors duration-500">
                        / 0{index + 1}
                    </span>
                </div>

                {/* 4. Identity: Centered Tag & Title */}
                <div className="space-y-4 mb-8 text-center flex flex-col items-center">
                    <div className="flex items-center gap-2 overflow-hidden">
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="bg-primary/10 px-3 py-1 rounded-full"
                        >
                            <span className="text-[9px] font-black uppercase tracking-widest text-primary">{pillar.tag}</span>
                        </motion.div>
                    </div>

                    <h3 className="text-3xl md:text-3xl font-black text-slate-900 leading-[1.1] tracking-tighter flex flex-col items-center">
                        <span className="text-primary text-xl mb-1 group-hover:scale-150 transition-transform duration-500">●</span>
                        {pillar.title}
                    </h3>
                </div>

                {/* 5. Content: Centered Description */}
                <p className="text-slate-500 text-base md:text-lg font-medium leading-[1.6] group-hover:text-slate-600 transition-colors duration-500 text-center">
                    {pillar.desc}
                </p>
            </div>

            {/* 6. Footer: Interactive Element */}
            <div className="relative z-10 mt-12 pt-8 border-t border-slate-50 flex items-center justify-center gap-4 group-hover:border-primary/10 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-slate-900 transition-colors">
                    Path to Excellence
                </span>
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500"
                >
                    <ArrowUpRight size={18} />
                </motion.div>
            </div>

            {/* 7. Corner Shine Effect */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-linear-to-br from-primary/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
    );
};

export default PillarCard;
