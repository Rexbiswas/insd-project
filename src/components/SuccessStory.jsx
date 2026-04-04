import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ArrowUpRight, Award, Star } from 'lucide-react';

const SuccessStory = () => {
    const stories = [
        {
            name: "Ankit Khera",
            course: "Fashion Design",
            placedAt: "Jobs Mall",
            title: "Fashion Designer",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Ankit%20Khera.jpeg",
            quote: "INSD helped me move from basic sketches to a strong portfolio and a full-time job as a Fashion Designer. The shows, juries and software training made interviews feel easy."
        },
        {
            name: "Sanchita Pal",
            course: "Graphic Design",
            placedAt: "Freelance",
            title: "Graphic Designer",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sanchita%20Pal.jfif",
            quote: "I started taking small freelance graphic design projects in my second year. The feedback on my portfolio and support from faculty gave me the confidence to charge for my skills."
        },
        {
            name: "Sameer Siddiqui",
            course: "Jewellery Design",
            placedAt: "Gold Mark",
            title: "Jewellery Designer",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Sameer%20Siddiqui.jpeg",
            quote: "The hands-on training in jewellery design and the exposure to industry techniques helped me build strong technical skills. The mentor guidance played a key role in helping me secure a position."
        },
        {
            name: "Nitika Gautam",
            course: "Interior Design",
            placedAt: "Virgo Clothing",
            title: "Interior Designer",
            img: "https://ik.imagekit.io/fmldynl4j4/Untitled%20folder/Untitled%20folder/Copy%20of%20Nitika%20Gautam%20.jpeg",
            quote: "The placement cell connected me with a top interior design firm in Gurgaon. My 3D visualisation skills and studio projects made me job-ready from day one."
        }
    ];

    return (
        <section className="py-24 md:py-32 bg-slate-50 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100/50 -skew-x-12 translate-x-20 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 items-end justify-between mb-20">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className="w-12 h-px bg-primary"></div>
                            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs">Industry Placements</span>
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-5xl md:text-8xl font-black text-slate-950 leading-none tracking-tighter uppercase mb-6 py-2"
                        >
                            They made it.<br />
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary to-slate-500 italic inline-block py-4 pr-4">So Can You!</span>
                        </motion.h2>
                        
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl md:text-3xl font-bold text-slate-500 tracking-tight"
                        >
                            Be a part of the INSD Success story!
                        </motion.p>
                    </div>

                    
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stories.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative bg-white rounded-4xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 h-full flex flex-col"
                        >
                            <div className="aspect-4/5 relative overflow-hidden shrink-0">
                                <img 
                                    src={story.img} 
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                                    alt={story.name} 
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Award size={14} className="text-primary" />
                                        <span className="text-[10px] font-black text-white uppercase tracking-widest">{story.placedAt}</span>
                                    </div>
                                    <h3 className="text-white font-black text-xl leading-none uppercase tracking-tighter">
                                        {story.name}
                                    </h3>
                                    <p className="text-primary font-black text-[10px] uppercase tracking-widest mt-1">
                                        {story.placement || story.title}
                                    </p>
                                </div>
                            </div>
                            
                            <div className="p-8 relative flex-1 flex flex-col">
                                <Quote className="absolute top-4 right-8 text-slate-100 w-16 h-16 pointer-events-none" />
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <p className="text-slate-500 text-xs font-semibold leading-relaxed italic mb-6">
                                        "{story.quote}"
                                    </p>
                                    <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={10} className="fill-primary text-primary" />
                                            ))}
                                        </div>
                                        <ArrowUpRight size={16} className="text-slate-300 group-hover:text-primary transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer CTA Section */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center text-center space-y-10"
                >
                    <div className="w-24 h-px bg-slate-200" />
                    
                    

                    <button 
                        onClick={() => {
                            const el = document.getElementById('step-lead-form');
                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="group relative px-12 py-6 bg-slate-950 text-white rounded-full font-black uppercase tracking-widest text-xs overflow-hidden shadow-3xl hover:shadow-primary/40 transition-all duration-500 hover:-translate-y-2 cursor-pointer z-20"
                    >
                        <span className="relative z-10 flex items-center gap-4">
                            Download Placement Report
                            <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                        </span>
                        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default SuccessStory;
