import React, { useRef, useLayoutEffect } from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const instaPosts = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "1.2k",
        comments: "45",
        caption: "Republic Day Celebrations at INSD Campus! 🇮🇳 #INSD #Design"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "856",
        comments: "22",
        caption: "Top 5 Interior Design Trends for 2026. #InteriorDesign"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "2.5k",
        comments: "108",
        caption: "Fashion Week Highlights. Our students rocked the runway! 💃",
        featured: true // Big card
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "943",
        comments: "34",
        caption: "Artistry in motion. Graphic Design workshop results."
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "1.5k",
        comments: "56",
        caption: "Student Spotlight: Aravind's sustainable collection."
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/6610217/pexels-photo-6610217.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "3.1k",
        comments: "210",
        caption: "INSD x ESG Luxe Partnership Announcement! 🚀",
        featured: true // Wide card
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/3778214/pexels-photo-3778214.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "720",
        comments: "18",
        caption: "Campus Life: Creativity has no boundaries."
    },
    {
        id: 8,
        img: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=800",
        likes: "1.1k",
        comments: "42",
        caption: "Admissions Open for 2026 Batch. Apply Now!"
    }
];

const InstagramGallery = () => {
    const containerRef = useRef(null);
    const cursorRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {

            // 1. Entrance Animation - Scattered to Grid
            const cards = gsap.utils.toArray('.insta-card');
            gsap.from(cards, {
                y: 200,
                opacity: 0,
                rotate: () => gsap.utils.random(-15, 15),
                scale: 0.8,
                stagger: 0.1,
                duration: 1.5,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 70%",
                    end: "bottom 90%",
                    toggleActions: "play none none reverse"
                }
            });

            // 2. Parallax Hover Effect via MouseMove
            const handleMouseMove = (e) => {
                const { clientX, clientY } = e;
                const x = (clientX / window.innerWidth - 0.5) * 20;
                const y = (clientY / window.innerHeight - 0.5) * 20;

                // Move cards slightly for parallax
                gsap.to(cards, {
                    x: (i) => x * (i % 2 === 0 ? 1 : -1), // Alternate direction
                    y: (i) => y * (i % 3 === 0 ? 1 : -1),
                    duration: 1,
                    ease: "power2.out"
                });

                // Custom Cursor Follow
                if (cursorRef.current) {
                    gsap.to(cursorRef.current, {
                        x: e.clientX,
                        y: e.clientY,
                        duration: 0.2,
                        ease: "power2.out"
                    });
                }
            };

            window.addEventListener('mousemove', handleMouseMove);

            return () => window.removeEventListener('mousemove', handleMouseMove);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative bg-black text-white min-h-screen py-32 overflow-hidden cursor-none">

            {/* Custom Cursor */}
            <div ref={cursorRef} className="fixed top-0 left-0 w-32 h-32 bg-pink-500/20 rounded-full blur-2xl pointer-events-none z-50 mix-blend-screen -translate-x-1/2 -translate-y-1/2 border border-white/20 flex items-center justify-center opacity-0 md:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>

            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/30 blur-[120px] rounded-full pointer-events-none"></div>

            {/* Header */}
            <div className="container mx-auto px-6 mb-24 relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
                <div>
                    <h4 className="flex items-center gap-3 text-pink-500 font-mono tracking-widest uppercase text-sm mb-4">
                        <Instagram className="w-5 h-5" />
                        @INSD_OFFICIAL
                    </h4>
                    <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
                        Life On <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-pink-500 to-red-500">The Feed</span>
                    </h2>
                </div>
                <button className="group flex items-center gap-4 px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
                    <span className="font-bold tracking-widest uppercase text-sm">Follow Us</span>
                    <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
                </button>
            </div>

            {/* Bento Grid Gallery */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 auto-rows-[200px] md:auto-rows-[300px]">

                    {instaPosts.map((post) => (
                        <div
                            key={post.id}
                            className={`insta-card group relative bg-slate-900 rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer border border-white/5 
                                ${post.featured ? 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' : 'col-span-1 row-span-1 md:col-span-1 md:row-span-1'}
                            `}
                        >
                            {/* Image */}
                            <img
                                src={post.img}
                                alt="Instagram Post"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-6 backdrop-blur-sm">
                                <div className="flex items-center gap-6">
                                    <div className="flex items-center gap-2">
                                        <Heart className="w-6 h-6 fill-white text-white" />
                                        <span className="font-bold">{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <MessageCircle className="w-6 h-6 fill-white text-white" />
                                        <span className="font-bold">{post.comments}</span>
                                    </div>
                                </div>
                                <p className="text-center px-8 text-sm font-medium opacity-80 line-clamp-2 max-w-xs">{post.caption}</p>
                                <button className="px-6 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform">
                                    View Post
                                </button>
                            </div>

                            {/* Instagram Icon Watermark */}
                            <Instagram className="absolute top-4 right-4 text-white/50 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0" />
                        </div>
                    ))}

                </div>
            </div>

            {/* Floating 'Stories' Ring Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] border border-white/5 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]"></div>

        </div>
    );
};

export default InstagramGallery;
