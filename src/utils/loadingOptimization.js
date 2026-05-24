/**
 * Loading optimization utilities
 * Monitors and optimizes page load performance
 */

export const reportWebVitals = (metric) => {
  if ('sendBeacon' in navigator) {
    navigator.sendBeacon('/api/analytics', JSON.stringify(metric));
  }
};

/**
 * Monitor Core Web Vitals performance
 */
export const initializeWebVitalsMonitoring = () => {
  // Largest Contentful Paint (LCP)
  if ('PerformanceObserver' in window) {
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            console.log('CLS:', clsValue);
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // First Input Delay (FID) / Interaction to Next Paint (INP)
      const inputObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('Input Delay:', entry.processingEnd - entry.startTime);
        }
      });
      inputObserver.observe({ entryTypes: ['first-input', 'event'] });
    } catch (e) {
      console.warn('Web Vitals monitoring not available:', e);
    }
  }
};

/**
 * Defer non-critical work until the main thread is idle
 */
export const deferLoad = (callback, timeout = 2000) => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, timeout);
  }
};

/**
 * Check if user prefers reduced data usage
 */
export const prefersReducedData = () => {
  return navigator.connection?.saveData ?? false;
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Check connection speed (4g, 3g, 2g, slow-4g)
 */
export const getConnectionSpeed = () => {
  return navigator.connection?.effectiveType ?? '4g';
};

/**
 * Dynamically adjust image quality based on connection
 */
export const getImageQuality = () => {
  const speed = getConnectionSpeed();
  const saveData = prefersReducedData();

  if (saveData) return 50;
  if (speed === '4g') return 85;
  if (speed === '3g') return 65;
  if (speed === '2g') return 45;
  return 50;
};

/**
 * Monitor when the page becomes interactive
 */
export const measureFirstInteractive = () => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Time to Interactive:', entry.startTime);
      }
    });
    try {
      observer.observe({ entryTypes: ['first-input', 'navigation'] });
    } catch (e) {
      console.warn('Interaction monitoring not available');
    }
  }
};

/**
 * Estimate time to load based on connection
 */
export const estimateLoadTime = (bundleSize = 150) => {
  // bundleSize in KB
  const speed = getConnectionSpeed();
  const speedMap = {
    '4g': 16, // Mbps (optimistic)
    '3g': 2,
    '2g': 0.4,
    'slow-4g': 4,
  };

  const mbps = speedMap[speed] || 16;
  const kbps = mbps * 1000 / 8;
  const seconds = (bundleSize / kbps);

  return Math.round(seconds);
};
