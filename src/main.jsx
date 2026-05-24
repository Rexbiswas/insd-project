import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import { initializeWebVitalsMonitoring, deferLoad, prefersReducedData } from './utils/loadingOptimization'

// Initialize performance monitoring
if (process.env.NODE_ENV === 'production') {
  initializeWebVitalsMonitoring();
}

// Optimize route prefetching for critical routes
deferLoad(() => {
  const { prefetchRoutes } = require('./utils/routeOptimization');
  // Prefetch frequently accessed routes
  prefetchRoutes(['home', 'admission', 'campus', 'placement']);
}, prefersReducedData() ? 5000 : 3000);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)

// Service Worker Registration for PWA Features
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
          console.log('[PWA] Service Worker Registered Successfully', reg.scope);
      })
      .catch(err => console.error('[PWA] Service Worker Registration Failed', err));
  });
}
