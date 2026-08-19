'use client';

import React, { useEffect } from 'react';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    canonical = "https://insd.edu.in/",
    ogTitle, 
    ogDescription, 
    ogImage = "https://ik.imagekit.io/fmldynl4j4/insd-awards/Gemini_Generated_Image_wy3si8wy3si8wy3s.png?tr=w-1200,h-630,fo-auto", 
    ogType = 'website',
    twitterCard = 'summary_large_image',
    robots = 'max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    courseSchema = null
}) => {
    const siteName = "INSD";
    const metaDescription = description || "Best design institute in Delhi, India. Join INSD is one of the top design colleges in Delhi, NCR offers fashion, interior, textile and graphic design courses in UG and PG.";

    useEffect(() => {
        if (typeof document !== 'undefined' && title) {
            document.title = `${title} | INSD`;
        }
    }, [title]);

    // JSON-LD Structured Data for Ranking Enhancement
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": siteName,
        "url": "https://insd.edu.in",
        "logo": "https://ik.imagekit.io/fmldynl4j4/INSD-Logo_Horizontal-removebg-preview.png",
        "sameAs": [
            "https://www.facebook.com/INSD.Official/",
            "https://www.instagram.com/insd_official/",
            "https://twitter.com/INSDofficial",
            "https://www.youtube.com/user/INSDofficial"
        ],
        "description": metaDescription,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi NCR",
            "addressCountry": "IN"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            {courseSchema && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
                />
            )}
        </>
    );
};

export default SEO;