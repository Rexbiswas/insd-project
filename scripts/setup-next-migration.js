import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

// 1. Define route mapping
const routes = [
  { path: '', component: 'Home' },
  { path: 'awards-recognition', component: 'AwardsRecognition' },
  { path: 'student', component: 'Student' },
  { path: 'entrepreneur', component: 'Entrepreneur' },
  { path: 'industry-interaction', component: 'IndustryInteraction' },
  { path: 'industry-potential', component: 'IndustryPotential' },
  { path: 'placementandtraining', component: 'PlacementAndTraining' },
  { path: 'placement', component: 'Placement' },
  { path: 'future-of-design', component: 'FutureOfDesign' },
  { path: 'campuses', component: 'Campus' },
  { path: 'campuses/[campusId]', component: 'Campus' },
  { path: 'campuses/paris-cdp', component: 'Paris(CDP)' },
  { path: 'courses', component: 'Courses' },
  { path: 'courses/undergraduate', component: 'Undergraduate' },
  { path: 'courses/postgraduate', component: 'Postgraduate' },
  { path: 'courses/diploma-and-certificates', component: 'DiplomaAndCertificate' },
  { path: 'courses/short-term-courses', component: 'ShortTermCourse' },
  { path: 'courses/short-term-interior-design', component: 'short-term-interior-design' },
  { path: 'courses/diploma-in-graphic-design', component: 'diploma-in-graphic-design' },
  { path: 'courses/diploma-in-textile-design', component: 'diploma-in-textile-design' },
  { path: 'courses/bachelors-in-graphic-design', component: 'bachelors-in-graphic-design' },
  { path: 'courses/masters-in-animation', component: 'masters-in-animation' },
  { path: 'courses/advanced-diploma-in-animation', component: 'advanced-diploma-in-animation' },
  { path: 'courses/diploma-in-jewellery-design', component: 'diploma-in-jewellery-design' },
  { path: 'courses/msc-luxury-brand-management', component: 'luxury-brand-management-msc' },
  { path: 'courses/fashion-designing', component: 'FashionDesigning' },
  { path: 'courses/interior-designing', component: 'InteriorDesigning' },
  { path: 'courses/graphic-designing', component: 'GraphicDesigning' },
  { path: 'courses/animation-and-vfx', component: 'AnimationAndVFX' },
  { path: 'courses/jewellery-designing', component: 'JewelleryDesigning' },
  { path: 'courses/uiux-designing', component: 'UIUXDesigning' },
  { path: 'courses/beauty-and-makeup', component: 'BeautyAndMakeup' },
  { path: 'courses/photography', component: 'Photography' },
  { path: 'courses/textile-designing', component: 'TextileDesigning' },
  { path: 'insd-luxe', component: 'InsdLuxe' },
  { path: 'student-careers', component: 'StudentCareers' },
  { path: 'franchise', component: 'Franchise' },
  { path: 'courses/aviation', component: 'Aviation' },
  { path: 'contact-us', component: 'Contact' },
  { path: 'international-partners', component: 'InternationalPartner' },
  { path: 'course-apply-now', component: 'Admission' },
  { path: 'courses/online-courses', component: 'OnlineCourse' },
  { path: 'insd-360/blog', component: 'Blog' },
  { path: 'insd-360/fashion-week', component: 'FashionWeek' },
  { path: 'insd-360/paris-project', component: 'ParisProject' },
  { path: 'events', component: 'Events' },
  { path: 'mentors', component: 'Mentors' },
  { path: '15-years-legacy', component: 'Legacy' },
  { path: 'locations', component: 'location' },
  { path: 'profile', component: 'ProfileDashboard' },
  { path: 'success-stories', component: 'SuccessStory' },
  { path: 'gallery', component: 'Gallery' },
  { path: 'thank-you', component: 'ThankYou' },
  { path: 'aviation-thankyou', component: 'AviationThankYou' },
  { path: 'privacy-policy', component: 'PrivacyPolicy' },
  { path: 'faq', component: 'FAQ' },
  { path: 'cookie-policy', component: 'CookiePolicy' },
  { path: 'terms-and-conditions', component: 'TermsAndConditions' },
  { path: 'test-404', component: 'NotFound' }
];

const appDir = path.join(rootDir, 'src', 'app');
if (!fs.existsSync(appDir)) {
  fs.mkdirSync(appDir, { recursive: true });
}

for (const route of routes) {
  const targetDir = path.join(appDir, ...route.path.split('/'));
  fs.mkdirSync(targetDir, { recursive: true });
  const pagePath = path.join(targetDir, 'page.jsx');

  const content = `'use client';

import { Suspense } from 'react';
import PageComponent from '@/views/${route.component}';

export default function Page() {
  return (
    <Suspense fallback={null}>
      <PageComponent />
    </Suspense>
  );
}
`;
  fs.writeFileSync(pagePath, content, 'utf8');
}

// Create not-found.jsx
const notFoundPath = path.join(appDir, 'not-found.jsx');
const notFoundContent = `'use client';

import { Suspense } from 'react';
import NotFound from '@/views/NotFound';

export default function GlobalNotFound() {
  return (
    <Suspense fallback={null}>
      <NotFound />
    </Suspense>
  );
}
`;
fs.writeFileSync(notFoundPath, notFoundContent, 'utf8');

console.log('✅ Generated all pages with Suspense boundaries');
