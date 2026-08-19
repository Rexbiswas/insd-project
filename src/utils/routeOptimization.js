/**
 * Route-based code splitting optimization
 * Only loads code needed for the current route
 */

import { lazy } from 'react';

/**
 * Define route chunks for optimal code splitting
 * Each route gets its own chunk to minimize initial bundle
 */
export const routeChunks = {
  // Public routes
  home: () => import('../views/Home'),
  admission: () => import('../views/Admission'),
  campus: () => import('../views/Campus'),
  contact: () => import('../views/Contact'),
  
  // Program routes
  fashion: () => import('../views/FashionDesigning'),
  interior: () => import('../views/InteriorDesigning'),
  graphic: () => import('../views/GraphicDesigning'),
  animation: () => import('../views/AnimationAndVFX'),
  jewellery: () => import('../views/JewelleryDesigning'),
  uiux: () => import('../views/UIUXDesigning'),
  beauty: () => import('../views/BeautyAndMakeup'),
  photography: () => import('../views/Photography'),
  textile: () => import('../views/TextileDesigning'),
  
  // Academic routes
  undergraduate: () => import('../views/Undergraduate'),
  postgraduate: () => import('../views/Postgraduate'),
  diploma: () => import('../views/DiplomaAndCertificate'),
  shortterm: () => import('../views/ShortTermCourse'),
  mscLuxury: () => import('../views/MscLuxury'),
  onlineCourse: () => import('../views/OnlineCourse'),
  
  // Information routes
  placement: () => import('../views/Placement'),
  placements: () => import('../views/PlacementAndTraining'),
  awards: () => import('../views/AwardsRecognition'),
  events: () => import('../views/Events'),
  blog: () => import('../views/Blog'),
  gallery: () => import('../views/Gallery'),
  legacy: () => import('../views/Legacy'),
  
  // Special routes
  paris: () => import('../views/Paris(CDP)'),
  franchise: () => import('../views/Franchise'),
  aviation: () => import('../views/Aviation'),
  successStory: () => import('../views/SuccessStory'),
  
  // Policy routes (load on demand)
  privacy: () => import('../views/PrivacyPolicy'),
  terms: () => import('../views/TermsAndConditions'),
  cookies: () => import('../views/CookiePolicy'),
  faq: () => import('../views/FAQ'),
  
  // Error route
  notFound: () => import('../views/NotFound'),
};

/**
 * Prefetch route chunks when user hovers over links
 */
export const prefetchRoute = (routeKey) => {
  if (routeChunks[routeKey]) {
    routeChunks[routeKey]();
  }
};

/**
 * Prefetch multiple routes for better UX
 */
export const prefetchRoutes = (routeKeys) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(() => {
      routeKeys.forEach(key => prefetchRoute(key));
    });
  } else {
    setTimeout(() => {
      routeKeys.forEach(key => prefetchRoute(key));
    }, 3000);
  }
};

/**
 * Create lazy component with fallback
 */
export const createLazyRoute = (importFunc, fallback = null) => {
  return lazy(importFunc);
};
