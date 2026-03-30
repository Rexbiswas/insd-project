import React from 'react';
import { motion } from 'framer-motion';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const JobReady = () => {
    const { openAdmissionModal } = useAdmissionModal();
    return (
        <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.span 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-6 block"
                    >
                        Success Driven Education
                    </motion.span>
                    
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8"
                    >
                        Get Job Ready in <br />
                        <span className="text-secondary italic font-serif">Design & Luxury</span>
                    </motion.h2>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mb-12 leading-relaxed"
                    >
                        Employability-focused, work-integrated, skill-based training for fast growing creative industries.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-x-6 gap-y-3 mb-12 text-slate-500 font-bold uppercase tracking-wide text-sm border-l-4 border-primary pl-6"
                    >
                        <span>Fashion</span>
                        <span className="text-slate-300">•</span>
                        <span>Interior</span>
                        <span className="text-slate-300">•</span>
                        <span>Graphic</span>
                        <span className="text-slate-300">•</span>
                        <span>Luxury Management</span>
                    </motion.div>
                    
                    <motion.button 
                        onClick={openAdmissionModal}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-linear-to-r from-primary to-secondary text-white px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-2xl shadow-primary/20 transition-all duration-300"
                    >
                        Apply Now
                    </motion.button>
                </div>
            </div>
        </section>
    );
};

export default JobReady;
