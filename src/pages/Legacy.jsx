import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LegacyTimeline from '../components/LegacyTimeline';
import SEO from '../components/SEO';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Legacy = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <SEO 
                title="15 Years of Legacy | INSD - International School of Design"
                description="Explore INSD's 15-year journey of nurturing creative talent and shaping design futures. From our foundation in 2011 to becoming India's fastest-growing design institute."
            />
            
            <Navbar />
            
            <main className="pt-20">
                {/* The LegacyTimeline component now encompasses the core design from the mockup */}
                <LegacyTimeline />
                
                {/* Optional: Additional Roadmap or Vision section if desired, 
                    but strictly following the user's mockup which is complete as is. */}
                <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
                    <div className="container mx-auto px-6 text-center relative z-10">
                        <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4 block">The Future</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                            Vision <span className="text-transparent stroke-text-white italic font-serif">2030</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl font-light leading-relaxed">
                            Building India's largest design education network, connecting elite talent with global industry standards.
                        </p>
                    </div>
                    
                    {/* Decorative Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Legacy;
