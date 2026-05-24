import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Custom hook for Lenis smooth scroll with Safari optimization
 * Disables Lenis on Safari/mobile Safari due to performance issues
 * Falls back to native smooth scroll behavior instead
 */
export const useLenisSmoothScroll = (options = {}) => {
  useEffect(() => {
    // Detect Safari/WebKit browsers
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    // Skip Lenis on Safari and iOS for better performance
    if (isSafari || isIOS) {
      // Use native smooth scroll instead
      document.documentElement.style.scrollBehavior = 'smooth';
      return;
    }

    const lenis = new Lenis({
      lerp: 0.08, // Reduced from 0.1 for smoother animation
      smoothWheel: true,
      duration: 1.2, // Slightly longer duration for smoother feel
      ...options,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);
};

export default useLenisSmoothScroll;
