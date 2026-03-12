import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, X } from 'lucide-react';

const ProgramSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFilter, setActiveFilter] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const programs = {
        masters: ["Luxury Brand Management", "Fashion Design", "Graphic Design", "Jewellery Design", "Textile Design", "Interior Design", "Animation"],
        bachelors: ["Fashion Design", "Interior Design", "Communication Design", "Textile Design", "Product Design", "Strategic Innovation & Design"],
        diploma_two: ["Fashion Design & Tech", "Interior Design & Tech", "Animation & VFX", "Graphic Design", "Textile Design"],
        diploma_one: ["Fashion Design", "Interior Design", "Graphic Design", "Photography"],
        short: ["Fashion Styling", "Luxury Brand Management", "Jewellery Design", "Photography"]
    };

    const tags = ["Fashion", "Interior", "Luxury", "Graphic", "Animation"];

    const filterPrograms = (list) => {
        return list.filter(item => {
            const matchesFilter = !activeFilter || item.includes(activeFilter);
            const matchesSearch = item.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesFilter && matchesSearch;
        });
    };

    const hasItems = (list) => filterPrograms(list).length > 0;

    return (
        <section className="py-20 md:py-32 bg-white flex flex-col items-center justify-center px-4 md:px-12">
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-7xl bg-slate-900 text-white p-8 md:p-20 rounded-[3rem] md:rounded-[5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5"
            >
                {/* Background Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-linear-to-b from-primary/10 to-transparent pointer-events-none" />

                <div className="relative z-10">
                    <span className="block text-[10px] md:text-xs font-mono uppercase tracking-[0.4em] text-slate-500 mb-8 md:mb-12">
                        Find Your Path
                    </span>

                    {/* Search Field Area */}
                    <div className="relative group border-b border-white/10 pb-6 md:pb-10 mb-8 md:mb-12 transition-all duration-500 focus-within:border-primary">
                        <div className="flex items-center gap-4 md:gap-8">
                            <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-primary animate-pulse" />
                            <input 
                                type="text"
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    if (e.target.value) setIsExpanded(true);
                                }}
                                placeholder="Type to explore your future..."
                                className="bg-transparent border-none outline-none text-2xl md:text-7xl font-black text-white placeholder-slate-800 w-full tracking-tighter"
                            />
                            <Search className="w-8 h-8 md:w-16 md:h-16 text-slate-800 group-focus-within:text-primary group-focus-within:scale-110 transition-all duration-500 opacity-50" strokeWidth={1.5} />
                        </div>
                    </div>

                    {/* Filter & Expand Logic */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-0">
                        <div className="flex items-center gap-6 group/btn cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                            <div className="flex items-center gap-4">
                                <motion.div 
                                    animate={{ width: isExpanded ? 48 : 24 }}
                                    className="h-px bg-slate-500 group-hover:bg-primary"
                                />
                                <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
                                    {isExpanded ? "Hide All Programs" : "Browse All Programs"}
                                </span>
                            </div>
                        </div>

                        {/* Animated Filter Pills */}
                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
                            <button 
                                onClick={() => { setActiveFilter(null); setIsExpanded(true); }}
                                className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border ${!activeFilter ? 'bg-white text-slate-950 border-white shadow-lg' : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/40'}`}
                            >
                                All
                            </button>
                            {tags.map((tag) => (
                                <button 
                                    key={tag}
                                    onClick={() => { setActiveFilter(tag === activeFilter ? null : tag); setIsExpanded(true); }}
                                    className={`px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border whitespace-nowrap ${activeFilter === tag ? 'bg-white text-slate-950 border-white shadow-lg' : 'bg-white/5 text-slate-400 border-white/10 hover:border-white/40'}`}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Expanded Content */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div 
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 md:pt-20 border-t border-white/5 mt-12 md:mt-16">
                                    
                                    {/* Masters Section */}
                                    {hasItems(programs.masters) && (
                                        <div className="space-y-6">
                                            <h4 className="text-primary font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Masters Courses</h4>
                                            <ul className="space-y-4">
                                                {filterPrograms(programs.masters).map((p, i) => (
                                                    <motion.li 
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all cursor-pointer font-bold text-sm md:text-base flex items-center gap-3 group"
                                                    >
                                                        <ChevronRight className="w-3 h-3 text-primary opacity-0 group-hover:opacity-100 -ml-6 transition-all" />
                                                        {p}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Bachelors Section */}
                                    {hasItems(programs.bachelors) && (
                                        <div className="space-y-6">
                                            <h4 className="text-secondary font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Bachelors Degree</h4>
                                            <ul className="space-y-4">
                                                {filterPrograms(programs.bachelors).map((p, i) => (
                                                    <motion.li 
                                                        key={i}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="text-slate-400 hover:text-white hover:translate-x-2 transition-all cursor-pointer font-bold text-sm md:text-base flex items-center gap-3 group"
                                                    >
                                                        <ChevronRight className="w-3 h-3 text-secondary opacity-0 group-hover:opacity-100 -ml-6 transition-all" />
                                                        {p}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {/* Professional Course Section */}
                                    <div className="space-y-12">
                                        {hasItems(programs.short) && (
                                            <div className="space-y-6">
                                                <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">Short Term</h4>
                                                <ul className="space-y-4">
                                                    {filterPrograms(programs.short).map((p, i) => (
                                                        <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all cursor-pointer font-bold text-xs uppercase tracking-tight">
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                        {hasItems(programs.diploma_one) && (
                                            <div className="space-y-6">
                                                <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">1 Year Specialization</h4>
                                                <ul className="space-y-4">
                                                    {filterPrograms(programs.diploma_one).map((p, i) => (
                                                        <li key={i} className="text-slate-400 hover:text-white hover:translate-x-2 transition-all cursor-pointer font-bold text-xs uppercase tracking-tight">
                                                            {p}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* No Results Message */}
                                {!hasItems(Object.values(programs).flat()) && (
                                    <div className="py-20 text-center">
                                        <X className="w-12 h-12 text-slate-700 mx-auto mb-6" />
                                        <p className="text-slate-500 font-bold uppercase tracking-widest">No programs found matching your search</p>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
};

export default ProgramSearch;
