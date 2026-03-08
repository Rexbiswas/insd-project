import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
    title, 
    description, 
    keywords, 
    canonical, 
    ogTitle, 
    ogDescription, 
    ogImage, 
    ogType = 'website',
    twitterCard = 'summary_large_image'
}) => {
    const siteName = "International School of Design (INSD)";
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const defaultDescription = "International School of Design (INSD) offers premium courses in Fashion, Interior, Graphic, and Animation designing in Delhi. Rank among the best designing institutes.";
    const metaDescription = description || defaultDescription;
    const defaultKeywords = "design school, fashion design courses, interior design courses, graphic design institute, INSD Delhi, best design college";
    const metaKeywords = keywords || defaultKeywords;

    return (
        <Helmet>
            {/* Standard metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:title" content={ogTitle || fullTitle} />
            <meta property="og:description" content={ogDescription || metaDescription} />
            <meta property="og:site_name" content={siteName} />
            {ogImage && <meta property="og:image" content={ogImage} />}

            {/* Twitter */}
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={ogTitle || fullTitle} />
            <meta name="twitter:description" content={ogDescription || metaDescription} />
            {ogImage && <meta name="twitter:image" content={ogImage} />}
        </Helmet>
    );
};

export default SEO;
