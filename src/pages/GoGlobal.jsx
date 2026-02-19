import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Globe, Plane, GraduationCap, Building2, ArrowRight, MapPin, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

gsap.registerPlugin(ScrollTrigger);

const GoGlobal = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Hero Animation - Safe check
            gsap.fromTo(".hero-text",
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.2 }
            );

            // Feature Cards Animation - using fromTo for reliability
            gsap.utils.toArray(".feature-card").forEach((card, i) => {
                gsap.fromTo(card,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 90%", // Trigger earlier
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

            // Steps Animation
            gsap.utils.toArray(".pathway-step").forEach((step, i) => {
                gsap.fromTo(step,
                    { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: step,
                            start: "top 85%",
                        }
                    }
                );
            });


            // Map Pulse
            gsap.to(".globe-icon", {
                scale: 1.05,
                opacity: 0.2,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    const destinations = [
        { city: "London", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop", country: "UK" },
        { city: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000&auto=format&fit=crop", country: "France" },
        { city: "New York", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1000&auto=format&fit=crop", country: "USA" },
        { city: "Milan", image: "https://images.unsplash.com/photo-1627964687289-e7d03ace1a3b?q=80&w=1000&auto=format&fit=crop", country: "Italy" },
        { city: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea936a7fe48?q=80&w=1000&auto=format&fit=crop", country: "UAE" },
        { city: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000&auto=format&fit=crop", country: "Asia" },
    ];

    return (
        <div className="min-h-screen bg-slate-50 overflow-hidden" ref={containerRef}>
            {/* Hero Section */}
            <div className="relative h-[90vh] flex items-center justify-center bg-[#0f172b] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-1"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 z-0 scale-105"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop')" }}
                ></div>
                <div className="absolute inset-0 bg-linear-to-t from-[#0f172b] via-transparent to-transparent z-2"></div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8 hero-text shadow-xl">
                        <Plane className="text-blue-400 -rotate-45" size={20} />
                        <span className="text-sm font-bold tracking-widest uppercase">Global Opportunities</span>
                    </div>
                    <h1 className="hero-text text-5xl md:text-7xl lg:text-9xl font-black mb-6 tracking-tight leading-none drop-shadow-2xl">
                        GO <span className="text-transparent bg-clip-text bg-linear-to-r from-[#db3436] to-[#134a84]">GLOBAL</span>
                    </h1>
                    <p className="hero-text text-lg md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed font-light drop-shadow-md">
                        Transform your design career with international exposure. Study abroad, intern globally, and build a portfolio that transcends borders.
                    </p>
                    <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link to="/apply" className="px-10 py-4 bg-white text-[#0f172b] font-extrabold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Apply Now <ArrowRight size={20} />
                        </Link>
                        <a href="#destinations" className="px-10 py-4 border border-white/30 backdrop-blur-sm text-white font-bold rounded-full hover:bg-white/10 transition-all animate-pulse-slow">
                            Explore Destinations
                        </a>
                    </div>
                </div>
            </div>

            {/* Marquee */}
            <div className="bg-[#0f172b] py-8 border-y border-white/5 relative z-20">
                <div className="overflow-hidden whitespace-nowrap mask-gradient-x flex gap-12 items-center">
                    {[...destinations, ...destinations, ...destinations].map((dest, i) => (
                        <span key={i} className="text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-white/10 uppercase tracking-widest inline-block mx-8 select-none">
                            {dest.city}
                        </span>
                    ))}
                </div>
            </div>

            {/* Why Go Global - Enhanced */}
            <div className="features-section py-24 bg-white relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/4"></div>

                <div className="container mx-auto px-6">
                    <div className="mb-20 text-center">
                        <h2 className="text-4xl md:text-6xl font-black text-[#0f172b] mb-6">WHY GO GLOBAL?</h2>
                        <div className="w-24 h-2 bg-linear-to-r from-[#db3436] to-[#134a84] rounded-full mx-auto"></div>
                        <p className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg">
                            International experience is no longer a luxury—it's a necessity in the design world.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Globe size={32} className="text-white" />,
                                title: "International Exposure",
                                desc: "Immerse yourself in different cultures and design philosophies. Learn how global trends shape the industry.",
                                color: "bg-blue-500",
                                img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                icon: <Building2 size={32} className="text-white" />,
                                title: "Global Internships",
                                desc: "Secure internships with leading international fashion houses and design studios. Build your network globally.",
                                color: "bg-purple-500",
                                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                icon: <GraduationCap size={32} className="text-white" />,
                                title: "Dual Certification",
                                desc: "Double the value of your degree with certifications from our prestigious partner universities in UK and France.",
                                color: "bg-pink-500",
                                img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                icon: <Users size={32} className="text-white" />,
                                title: "Cross-Cultural Networking",
                                desc: "Connect with students and professionals from around the world, creating lifelong friendships and industry contacts.",
                                color: "bg-indigo-500",
                                img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                icon: <Award size={32} className="text-white" />,
                                title: "Enhanced Portfolio",
                                desc: "Add international projects to your portfolio, showcasing your ability to design for diverse markets and audiences.",
                                color: "bg-orange-500",
                                img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop"
                            },
                            {
                                icon: <BookOpen size={32} className="text-white" />,
                                title: "Advanced Learning",
                                desc: "Access specialized workshops, masterclasses, and resources available exclusively at our global partner campuses.",
                                color: "bg-emerald-500",
                                img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop"
                            }
                        ].map((item, index) => (
                            <div key={index} className="feature-card group relative h-[400px] rounded-4xl overflow-hidden hover:shadow-2xl transition-all duration-500">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className={`inline-flex p-3 rounded-2xl ${item.color} mb-4 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Global Pathways Steps */}
            <div className="py-24 bg-slate-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-[#0f172b]">YOUR JOURNEY</h2>
                        <p className="text-slate-500 mt-4">How the Go Global program works</p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            { step: "01", title: "Enroll at INSD", desc: "Start your foundation years at your local INSD campus, building strong fundamentals in design.", align: "left" },
                            { step: "02", title: "Choose Your Path", desc: "Select your preferred international specialization and destination country during your 2nd year.", align: "right" },
                            { step: "03", title: "Global Transfer", desc: "Transfer to one of our partner universities abroad for your final year or semester.", align: "left" },
                            { step: "04", title: "International Degree", desc: "Graduate with an internationally recognized degree and global added value to your portfolio.", align: "right" }
                        ].map((item, i) => (
                            <div key={i} className={`pathway-step flex flex-col md:flex-row gap-8 items-center ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white ${item.align === 'right' ? 'bg-purple-600 md:order-last md:ml-8' : 'bg-blue-600 md:mr-8'}`}>
                                        {item.step}
                                    </div>
                                </div>
                                <div className={`w-full md:w-1/2 text-center ${item.align === 'right' ? 'md:text-right' : 'md:text-left'}`}>
                                    <h3 className="text-2xl font-bold text-[#0f172b] mb-2">{item.title}</h3>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Destinations Section */}
            <div id="destinations" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-[#0f172b]">DESTINATIONS</h2>
                        <p className="text-slate-500 mt-4">Where will your creativity take you?</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {destinations.map((dest, i) => (
                            <div key={i} className="group relative aspect-4/5 rounded-3xl overflow-hidden cursor-pointer">
                                <img src={dest.image} alt={dest.city} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                    <p className="text-sm font-bold tracking-widest uppercase mb-1 text-blue-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{dest.country}</p>
                                    <h3 className="text-4xl font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{dest.city}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-24 bg-[#0f172b] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-blue-900/10 to-transparent"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-8">READY TO FLY?</h2>
                    <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                        Your global design career starts here. Apply now for our upcoming batch.
                    </p>
                    <Link to="/apply" className="inline-block px-12 py-5 bg-white text-[#0f172b] text-xl font-bold rounded-full hover:bg-blue-50 hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)]">
                        Start Application
                    </Link>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default GoGlobal;
