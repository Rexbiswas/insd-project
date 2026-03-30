import React from 'react';
import { Briefcase, Palette } from 'lucide-react';

const hospitalityLogos = [
    "https://ik.imagekit.io/fmldynl4j4/logos/radisson.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/taj.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/hyatt.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/marriott.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/itc.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/hilton.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/oberoi.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/le-meridien.png"
];

const fashionLogos = [
    "https://ik.imagekit.io/fmldynl4j4/logos/zara.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/hm.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/reliance.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/aditya-birla.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/marks-spencer.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/lifestyle.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/pantaloons.png",
    "https://ik.imagekit.io/fmldynl4j4/logos/shoppers-stop.png"
];

const PlacementPartners = () => {
    const LogoCard = ({ logo }) => (
        <div className="bg-white border border-slate-100 shadow-sm px-6 py-4 rounded-2xl flex items-center justify-center min-w-[140px] md:min-w-[180px] h-16 md:h-20 hover:border-primary/20 transition-colors group grayscale hover:grayscale-0">
            <img 
                src={logo} 
                alt="Partner Logo" 
                className="h-full w-auto max-w-[100px] md:max-w-[130px] object-contain opacity-60 group-hover:opacity-100 transition-opacity" 
                onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'block'; }} 
            />
            <span className="hidden text-slate-400 font-bold text-[10px] uppercase tracking-widest">Partner Logo</span>
        </div>
    );

    return (
        <div className="pt-12 md:pt-20 space-y-12 w-full overflow-hidden">
            {/* Hospitality Partners */}
            <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-2 opacity-50 px-4">
                    <Briefcase size={12} className="text-slate-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Placement Partners</span>
                </div>
                <div className="relative flex overflow-hidden">
                    <div className="flex animate-marquee whitespace-nowrap gap-4 py-4 pr-4">
                        {hospitalityLogos.map((logo, i) => (
                            <LogoCard key={`h1-${i}`} logo={logo} />
                        ))}
                    </div>
                    <div className="flex animate-marquee whitespace-nowrap gap-4 py-4 pr-4">
                        {hospitalityLogos.map((logo, i) => (
                            <LogoCard key={`h2-${i}`} logo={logo} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Fashion & Design Partners */}
            <div className="space-y-6">
                <div className="flex items-center justify-center md:justify-start gap-2 opacity-50 px-4">
                    <Palette size={12} className="text-slate-400" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">traning partners</span>
                </div>
                <div className="relative flex overflow-hidden">
                    <div className="flex animate-marquee-reverse whitespace-nowrap gap-4 py-4 pr-4">
                        {fashionLogos.map((logo, i) => (
                            <LogoCard key={`f1-${i}`} logo={logo} />
                        ))}
                    </div>
                    <div className="flex animate-marquee-reverse whitespace-nowrap gap-4 py-4 pr-4">
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
