import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';

const socialLinks = [
    { icon: Instagram, label: "Instagram", color: "#E4405F", link: "https://www.instagram.com/insd_official" },
    { icon: Linkedin, label: "LinkedIn", color: "#0A66C2", link: "https://www.linkedin.com/school/international-school-of-design/" },
    { icon: Facebook, label: "Facebook", color: "#1877F2", link: "https://www.facebook.com/share/1CMuRdTV69/" },
    { icon: Youtube, label: "YouTube", color: "#FF0000", link: "https://youtube.com/@insd-internationalschoolof5139?feature=shared" },
    { icon: Twitter, label: "X / Twitter", color: "#000000", link: "#" }
];

const SocialIcons = ({ className = "" }) => {
    return (
        <div className={`flex items-center gap-4 ${className}`}>
            {socialLinks.map((social, idx) => (
                <motion.a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover="hover"
                    initial="initial"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 relative group overflow-visible"
                >
                    {/* Glassmorphic Frost Background */}
                    <div className="absolute inset-0 bg-white/5 backdrop-blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-inherit"></div>
                    
                    {/* Brand Color Aura (Glowing behind) */}
                    <motion.div
                        variants={{
                            hover: { opacity: 0.2, scale: 1.5 }
                        }}
                        className="absolute inset-0 blur-2xl pointer-events-none rounded-full"
                        style={{ backgroundColor: social.color, opacity: 0 }}
                    />

                    {/* Minimalist White Outline Reveal */}
                    <div className="absolute inset-0 border border-white/30 rounded-inherit scale-[0.8] opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out"></div>

                    {/* The Icon itself */}
                    <motion.div
                        variants={{
                            initial: { color: "#ffffff", opacity: 0.8 },
                            hover: {
                                scale: 1.15,
                                y: -3,
                                rotate: [0, -12, 12, 0],
                                color: social.color,
                                opacity: 1
                            }
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            color: { duration: 0.3 }
                        }}
                        className="relative z-10"
                    >
                        <social.icon className="w-5 h-5 md:w-6 md:h-6 stroke-[1.8px]" />
                    </motion.div>

                    {/* High-Fidelity Floating Tooltip */}
                    <span className="absolute bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
                        <span className="relative px-3 py-1.5 bg-white text-slate-900 text-[10px] font-black uppercase tracking-widest rounded-lg shadow-[0_10px_30px_rgba(0,0,0,0.2)] whitespace-nowrap">
                            {social.label}
                            {/* Arrow Tip */}
                            <span className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45 -translate-y-[4px]"></span>
                        </span>
                    </span>
                </motion.a>
            ))}
        </div>
    );
};

export default SocialIcons;
