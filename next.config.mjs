import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: process.env.BUILD_STANDALONE === 'true' ? 'standalone' : undefined,
  reactStrictMode: true,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
      {
        protocol: 'https',
        hostname: 'insd.edu.in',
      },
      {
        protocol: 'https',
        hostname: 'www.insd.edu.in',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'grainy-gradients.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/admissions',
        destination: '/course-apply-now',
        permanent: true,
      },
      {
        source: '/apply',
        destination: '/course-apply-now',
        permanent: true,
      },
      {
        source: '/courses/short-term-interior-design-courses',
        destination: '/courses/short-term-courses',
        permanent: true,
      },
      {
        source: '/courses/diploma-in-graphic-design',
        destination: '/courses/graphic-designing',
        permanent: true,
      },
      {
        source: '/courses/diploma-in-textile-design',
        destination: '/courses/textile-designing',
        permanent: true,
      },
      {
        source: '/courses/bachelors-in-graphic-design',
        destination: '/courses/graphic-designing',
        permanent: true,
      },
      {
        source: '/courses/masters-in-animation',
        destination: '/courses/animation-and-vfx',
        permanent: true,
      },
      {
        source: '/courses/diploma-in-jewellery-design',
        destination: '/courses/jewellery-designing',
        permanent: true,
      },
      {
        source: '/courses/advanced-diploma-in-animation',
        destination: '/courses/animation-and-vfx',
        permanent: true,
      },
      {
        source: '/luxury-brand-management-msc',
        destination: '/courses/msc-luxury-brand-management',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/insd-360/blog',
        permanent: true,
      },
      {
        source: '/centers-across-india',
        destination: '/locations',
        permanent: true,
      },
      {
        source: '/courses/aviation',
        destination: '/aviation',
        permanent: true,
      },
      {
        source: '/courses/aviation/',
        destination: '/aviation',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    if (process.env.BACKEND_URL) {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.BACKEND_URL}/api/:path*`,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
