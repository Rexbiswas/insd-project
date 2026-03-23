import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    canonical, 
    ogTitle, 
    ogDescription, 
    ogImage = "https://insd.edu.in/wp-content/uploads/2019/11/INSD-circle-Logo_black_100pxl.png", 
    ogType = 'website',
    twitterCard = 'summary_large_image',
    robots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    courseSchema = null
}) => {
    const siteName = "International School of Design (INSD)";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDescription = "INSD is India's leading Skill School for creative careers. Offering job-oriented diplomas in Fashion, Interior & Graphic Design with 100% placement in Delhi.";
    const metaDescription = description || defaultDescription;
    const defaultKeywords = "best design institute in Delhi, skill school design, job oriented fashion design, interior design placement, graphic design course, INSD India";
    const metaKeywords = keywords || defaultKeywords;

    // JSON-LD Structured Data for Ranking Enhancement
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": siteName,
        "url": "https://insd.edu.in",
        "logo": "https://insd.edu.in/wp-content/uploads/2019/11/INSD-circle-Logo_black_100pxl.png",
        "sameAs": [
            "https://www.facebook.com/INSD.Official/",
            "https://www.instagram.com/insd_official/",
            "https://twitter.com/INSDofficial",
            "https://www.youtube.com/user/INSDofficial"
        ],
        "description": defaultDescription,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Delhi NCR",
            "addressCountry": "IN"
        }
    };

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="robots" content={robots} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Mobile / Interaction */}
            <meta name="theme-color" content="#b30000" />
            <meta name="apple-mobile-web-app-capable" content="yes" />

            {/* Open Graph / Facebook */}
            <meta property="og:locale" content="en_IN" />
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || metaDescription} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || metaDescription} />
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:site" content="@INSDofficial" />

            {/* Structured Data (Schema.org) */}
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
            {courseSchema && (
                <script type="application/ld+json">
                    {JSON.stringify(courseSchema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
