import React from 'react';
import { motion } from 'framer-motion';

const HiringPartnersLogoCloud = () => {
    const commonLogos = [
        "https://upload.wikimedia.org/wikipedia/commons/f/fd/Zara_Logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/53/H%26M-Logo.svg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaD24vay_jTexDQFlC7WcCwUKLfABsLq7Mxg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOZ9NYd0ET0u7rmr-IYI0j4dkTbDYwQnEL0w&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOUScvNv7C9KjvolThJ-fcj4IfvxSP8-m1Ig&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfp9UQE8vWcX8g8W1ik-1S5PhWyrwTt3Jj0Q&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVXoy4-M6CZEADkAg3EKtGTrBZh8Xn5ZeDg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi4adrv8AqJDPhunb3_km2idzotwLuroAWHw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkD7P83txvJ2sKJ9R5N_-qmQw94coPUq8J5A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAX7Ow-fSUhmokgxv7oaSro64M9jvc8HUF0Q&s"
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
                                <div key={i} className="h-12 md:h-16 w-32 md:w-48 flex items-center justify-center opacity-80 transition-all duration-500">
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
