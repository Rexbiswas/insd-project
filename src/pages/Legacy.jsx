import React, { useEffect } from 'react';
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
            
            <main className="pt-20">
                {/* 
                  Recreated the page to be an exact match for the user's high-end mockup image.
                  The LegacyTimeline component now contains the full design including hero and stats.
                */}
                <LegacyTimeline />
            </main>

            <Footer />
        </div>
    );
};

export default Legacy;
