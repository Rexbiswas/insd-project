/**
 * Performance optimization utilities for Chrome and Safari
 */

/**
 * Defer non-critical animations until the page is fully loaded
 * and the main thread is idle
 */
export const deferAnimation = (callback, delay = 100) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: delay });
  } else {
    setTimeout(callback, delay);
  }
};

/**
 * Optimize GSAP animations for better performance
 * Reduces frame rate and updates on slower devices
 */
export const getOptimalTicksFPS = () => {
  // Check device capabilities
  const connection = navigator.connection;
  const deviceMemory = navigator.deviceMemory;

  // Conservative settings for low-end devices or slow connections
  if ((connection && connection.effectiveType === '4g') === false || deviceMemory < 4) {
    return 30; // 30 FPS for low-end devices
  }

  return 60; // Default 60 FPS
};

/**
 * Enable GPU acceleration for animations
 */
export const enableGPUAcceleration = () => {
  if (typeof document !== 'undefined') {
    const style = document.documentElement.style;
    style.willChange = 'transform, opacity';
    style.transform = 'translateZ(0)';
  }
};

/**
 * Detect if browser can handle heavy animations
 */
export const canHandleHeavyAnimations = () => {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const isLowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;

  return !isSafari && !isIOS && !isLowMemory;
};

/**
 * Reduce motion if user prefers it
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};
