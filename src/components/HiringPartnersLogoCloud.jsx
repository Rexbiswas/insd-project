import React from 'react';
import { motion } from 'framer-motion';

const HiringPartnersLogoCloud = () => {
    const commonLogos = [
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
        
    ];

    return (
        <section className="py-20 bg-white border-y border-slate-100 overflow-hidden">
            <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-4">Elite Hiring Ecosystem</span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase">Our Partners in Excellence</h3>
            </div>

            <div className="relative">
                <motion.div
                    animate={{ x: [0, -1500] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex items-center gap-20 whitespace-nowrap px-10"
                >
                    {[...Array(3)].map((_, groupIndex) => (
                        <div key={groupIndex} className="flex items-center gap-20">
                            {commonLogos.map((logo, i) => (
                                <div key={i} className="h-12 md:h-16 w-32 md:w-48 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <img
                                        src={logo}
                                        alt="Brand Partner"
                                        className="max-h-full max-w-full object-contain"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                    <span className="hidden text-xl font-black text-slate-300 tracking-tighter uppercase whitespace-nowrap">Brand Global</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HiringPartnersLogoCloud;
