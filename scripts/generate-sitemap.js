import { writeFileSync } from 'fs';
import { globby } from 'globby';
import { create } from 'xmlbuilder2';

async function generateSitemap() {
    const pages = await globby([
        'src/pages/**/*.jsx',
        '!src/pages/**/[*.jsx',
        '!src/pages/NotFound.jsx',
        '!src/pages/ProfileDashboard.jsx',
    ]);

    const siteUrl = 'https://insd-project.vercel.app';

    const root = create({ version: '1.0', encoding: 'UTF-8' })
        .ins('xml-stylesheet', 'type="text/xsl" href="/sitemap.xsl"')
        .ele('urlset', { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' });

    // Add routes manually to match App.jsx paths exactly
    const routes = [
        { path: '/', priority: '1.0' },
        { path: '/about-us', priority: '0.8' },
        { path: '/campuses', priority: '0.8' },
        { path: '/campuses/south-delhi', priority: '0.7' },
        { path: '/campuses/north-delhi', priority: '0.7' },
        { path: '/campuses/paris', priority: '0.7' },
        { path: '/campuses/washington', priority: '0.7' },
        { path: '/campuses/dubai', priority: '0.7' },
        { path: '/campuses/uk', priority: '0.7' },
        { path: '/courses', priority: '0.9' },
        { path: '/courses/undergraduate', priority: '0.8' },
        { path: '/courses/postgraduate', priority: '0.8' },
        { path: '/courses/diploma-and-certificates', priority: '0.7' },
        { path: '/courses/short-term-courses', priority: '0.7' },
        { path: '/courses/msc-luxury-brand-management', priority: '0.7' },
        { path: '/courses/fashion-designing', priority: '0.8' },
        { path: '/courses/interior-designing', priority: '0.8' },
        { path: '/courses/graphic-designing', priority: '0.8' },
        { path: '/courses/animation-and-vfx', priority: '0.8' },
        { path: '/student-careers', priority: '0.8' },
        { path: '/insd-360', priority: '0.7' },
        { path: '/franchise', priority: '0.8' },
        { path: '/contact-us', priority: '0.7' },
        { path: '/go-global', priority: '0.8' },
        { path: '/international-partners', priority: '0.7' },
        { path: '/apply', priority: '0.9' },
        { path: '/courses/online-courses', priority: '0.7' },
        { path: '/insd-360/blog', priority: '0.6' },
        { path: '/insd-360/fashion-week', priority: '0.7' },
        { path: '/insd-360/paris-project', priority: '0.7' },
        { path: '/insd-360/events', priority: '0.7' },
        { path: '/insdian', priority: '0.6' },
        { path: '/success-stories', priority: '0.7' },
        { path: '/gallery', priority: '0.7' },
    ];

    routes.forEach((route) => {
        root.ele('url')
            .ele('loc').txt(`${siteUrl}${route.path === '/' ? '' : route.path}`).up()
            .ele('lastmod').txt(new Date().toISOString().split('T')[0]).up()
            .ele('priority').txt(route.priority).up();
    });

    const xml = root.end({ prettyPrint: true });
    writeFileSync('public/sitemap.xml', xml);
    console.log('Sitemap generated successfully!');
}

generateSitemap();
