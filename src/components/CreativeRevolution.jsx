import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';
import { useAdmissionModal } from '../context/AdmissionModalContext';

const CreativeRevolution = () => {
    const { openAdmissionModal } = useAdmissionModal();

    return (
        <div className="container mx-auto px-6 py-12 md:py-24">
            <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative rounded-[3rem] md:rounded-[4.5rem] overflow-hidden bg-[#0a0c10] group/cta"
            >
                {/* Ambient Glow */}
                <div className="absolute top-0 left-0 w-1/2 h-full bg-[#db3436] opacity-10 blur-[120px] -translate-x-1/4 pointer-events-none" />
                
                <div className="relative z-10 p-12 md:p-24 text-center">
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                            READY TO LEAD THE <br /> 
                            <span className="text-[#db3436] italic block mt-2">CREATIVE REVOLUTION?</span>
                        </h2>
                        
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openAdmissionModal({ 
                                formType: 'step'
                            })}
                            className="inline-flex items-center justify-center gap-4 bg-white text-slate-950 px-8 md:px-12 py-5 md:py-7 rounded-full font-black text-[10px] md:text-[13px] uppercase tracking-[0.2em] shadow-2xl transition-all duration-300 hover:shadow-[#db3436]/20 w-full sm:w-auto"
                        >
                            <Zap className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                            <span>Start Your Creative Career Today</span>
                            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default CreativeRevolution;
