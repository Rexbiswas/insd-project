import React, { useRef, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".footer-element", {
                y: 50,
                opacity: 0,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 80%",
                    end: "bottom 90%",
                    toggleActions: "play none none reverse"
                }
            });

            // "INSD" Giant Text Parallax
            gsap.to(".giant-text", {
                y: -100,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 1
                }
            });

        }, footerRef);
        return () => ctx.revert();
    }, []);

    const socialLinks = [
        { icon: Instagram, label: "Instagram", color: "hover:text-pink-500" },
        { icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-500" },
        { icon: Facebook, label: "Facebook", color: "hover:text-blue-600" },
        { icon: Youtube, label: "YouTube", color: "hover:text-red-500" },
        { icon: Twitter, label: "Twitter", color: "hover:text-sky-400" },
    ];

    const quickLinks = [
        ["Academics", "Admissions", "Campus Life", "Placements"],
        ["About Us", "Contact", "Careers", "Alumni"],
        ["Privacy Policy", "Terms of Service", "Sitemap"]
    ];

    return (
        <footer ref={footerRef} className="relative bg-black text-white overflow-hidden pt-24 pb-8 min-h-screen flex flex-col justify-between">

            {/* Ambient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-black to-black pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="relative z-10 container mx-auto px-6 md:px-12">

                {/* Top Section: CTA & Newsletter */}
                <div className="flex flex-col lg:flex-row gap-16 mb-24">
                    <div className="lg:w-1/2 footer-element">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                            Let's Design <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">The Future</span>
                        </h2>
                        <div className="relative group w-fit">
                            <button className="flex items-center gap-4 text-xl font-bold uppercase tracking-widest hover:text-purple-400 transition-colors duration-300">
                                Apply for 2026
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300 group-hover:scale-110">
                                    <ArrowUpRight className="w-5 h-5" />
                                </div>
                            </button>
                            <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:w-0 transition-all duration-500"></div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex flex-col justify-end footer-element">
                        <p className="text-slate-400 mb-6 uppercase tracking-widest text-xs font-bold">Stay Updated</p>
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full bg-transparent border-b border-white/10 py-4 text-xl md:text-2xl outline-none focus:border-purple-500 transition-colors duration-300 placeholder:text-slate-700 font-light"
                            />
                            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-sm font-bold uppercase tracking-widest hover:text-purple-400 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Middle Section: Links & Contact */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-white/10 pt-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-4 footer-element">
                        <div className="mb-8">
                            <img src="/logo-white.png" alt="INSD" className="h-12 w-auto mb-6 opacity-0" /> {/* Placeholder for logo logic if available, otherwise text */}
                            {/* Fallback Text Logo */}
                            <h3 className="text-3xl font-black tracking-tighter mb-6">INSD.</h3>
                            <p className="text-slate-400 leading-relaxed max-w-sm">
                                International School of Design. <br />
                                Shaping the next generation of creative leaders through innovation, luxury, and design excellence.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => (
                                <a key={idx} href="#" className={`w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 ${social.color} hover:border-white/30 hover:bg-white/5 transition-all duration-300 group`}>
                                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="col-span-1 md:col-span-2 footer-element">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {quickLinks[0].map((link, i) => (
                                <li key={i}><a href="#" className="text-slate-300 hover:text-white hover:translate-x-2 transition-transform duration-300 inline-block text-sm">{link}</a></li>
                            ))}
                        </ul>
                    </div>
                    <div className="col-span-1 md:col-span-2 footer-element">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Company</h4>
                        <ul className="space-y-4">
                            {quickLinks[1].map((link, i) => (
                                <li key={i}><a href="#" className="text-slate-300 hover:text-white hover:translate-x-2 transition-transform duration-300 inline-block text-sm">{link}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="col-span-1 md:col-span-4 footer-element">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">Contact</h4>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 text-purple-400">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <span className="text-slate-300 text-sm leading-relaxed">
                                    3rd Floor, Metro Station, INSD Building, <br />
                                    Preet Vihar, Delhi, 110092
                                </span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 text-purple-400">
                                    <Phone className="w-4 h-4" />
                                </div>
                                <span className="text-slate-300 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shrink-0 text-purple-400">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span className="text-slate-300 text-sm">admissions@insd.edu</span>
                            </li>
                        </ul>
                    </div>

                </div>

            </div>

            {/* Giant Text Animation Overlay */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-10">
                <h1 className="giant-text text-[25vw] font-black text-white leading-none tracking-tighter text-center whitespace-nowrap opacity-20">
                    INSD DESIGN
                </h1>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 container mx-auto px-6 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest">
                <p>&copy; 2026 INSD. All rights reserved.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms</a>
                    <a href="#" className="hover:text-white transition-colors">Credits</a>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
