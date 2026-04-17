import React from 'react';
import { motion } from 'framer-motion';

const conclaveImages = [
    "https://ik.imagekit.io/fmldynl4j4/hello/P1023655.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1023659.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1023672.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1023679.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162628.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162631.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162635.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162641.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162653.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162754.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162757.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1162760.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1509183.jpg",
    "https://ik.imagekit.io/fmldynl4j4/hello/P1509192.jpg"
];

const ConclaveSlider = () => {
    return (
        <div className="w-full overflow-hidden py-12">
            <motion.div 
                className="flex gap-8 px-4"
                animate={{ x: [0, -2000] }}
                transition={{ 
                    duration: 40, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            >
                {[...conclaveImages, ...conclaveImages].map((img, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="flex-shrink-0 w-[400px] h-[550px] rounded-[3rem] overflow-hidden shadow-2xl relative group cursor-pointer"
                    >
                        <img 
                            src={img} 
                            alt={`Conclave Moment ${idx}`} 
                            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ConclaveSlider;
