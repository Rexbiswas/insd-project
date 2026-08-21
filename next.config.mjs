import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
  turbopack: {
    resolveAlias: {
      'react-router-dom': './src/utils/navigation.jsx',
    },
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-router-dom': path.resolve(__dirname, 'src/utils/navigation.jsx'),
    };
    return config;
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
    return [
      {
        source: '/api/:path*',
        destination: process.env.NODE_ENV === 'production' 
          ? '/api/:path*' 
          : 'http://127.0.0.1:5001/api/:path*',
      },
    ];
  },
};

export default nextConfig;
