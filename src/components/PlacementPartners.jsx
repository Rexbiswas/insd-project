import React from 'react';
import { Briefcase, Palette } from 'lucide-react';

const hospitalityLogos = [
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400"
];

const fashionLogos = [
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400",
    "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-400"
];

const PlacementPartners = () => {
    const LogoCard = ({ logo }) => (
        <div className="bg-white border border-slate-100 shadow-sm px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl flex items-center justify-center min-w-[120px] md:min-w-[180px] h-14 md:h-20 hover:border-primary/20 transition-colors group grayscale hover:grayscale-0">
            <img 
                src={logo} 
                alt="Partner Logo" 
                className="h-full w-auto max-w-[80px] md:max-w-[130px] object-contain opacity-60 group-hover:opacity-100 transition-opacity" 
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
            />
            <span className="hidden text-slate-400 font-bold text-[8px] md:text-[10px] uppercase tracking-widest">Partner Logo</span>
        </div>
    );

    return (
        <div className="pt-8 md:pt-20 space-y-8 md:space-y-12 w-full overflow-hidden">
            {/* Hospitality Partners */}
            <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-2 opacity-50 px-4">
                    <Briefcase size={10} className="text-slate-400 md:w-3 md:h-3" />
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">Placement Partners</span>
                </div>
                <div className="relative flex overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap gap-3 md:gap-4 py-2 md:py-4 pr-3 md:pr-4">
                        {hospitalityLogos.map((logo, i) => (
                            <LogoCard key={`h1-${i}`} logo={logo} />
                        ))}
                    </div>
                    <div className="flex animate-marquee whitespace-nowrap gap-3 md:gap-4 py-2 md:py-4 pr-3 md:pr-4">
                        {hospitalityLogos.map((logo, i) => (
                            <LogoCard key={`h2-${i}`} logo={logo} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Fashion & Design Partners */}
            <div className="space-y-4 md:space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-2 opacity-50 px-4">
                    <Palette size={10} className="text-slate-400 md:w-3 md:h-3" />
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">traning partners</span>
                </div>
                <div className="relative flex overflow-hidden">
                    <div className="flex animate-marquee-reverse whitespace-nowrap gap-3 md:gap-4 py-2 md:py-4 pr-3 md:pr-4">
                        {fashionLogos.map((logo, i) => (
                            <LogoCard key={`f1-${i}`} logo={logo} />
                        ))}
                    </div>
                    <div className="flex animate-marquee-reverse whitespace-nowrap gap-3 md:gap-4 py-2 md:py-4 pr-3 md:pr-4">
                        {fashionLogos.map((logo, i) => (
                            <LogoCard key={`f2-${i}`} logo={logo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlacementPartners;
