'use client';

import React, { useEffect, Suspense } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import RegistrationModal from './RegistrationModal';
import AdmissionModal from './AdmissionModal';
import CookieConsent from './CookieConsent';
import FloatingActionPanel from './FloatingActionPanel';
import { RegisterModalProvider } from '../context/RegisterModalContext';
import { AdmissionModalProvider } from '../context/AdmissionModalContext';
import { AuthProvider } from '../context/AuthContext';
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

const ViewportHeightOptimizer = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const setVH = () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', setVH);
        return () => {
            window.removeEventListener('resize', setVH);
            window.removeEventListener('orientationchange', setVH);
        };
    }, []);
    return null;
};

const ScrollToTop = () => {
    const pathname = usePathname();
    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo(0, 0);
        }
    }, [pathname]);
    return null;
};

const ScrollTriggerRefresher = () => {
    const pathname = usePathname();
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const timer = setTimeout(() => {
            import('gsap/ScrollTrigger')
                .then(({ ScrollTrigger }) => {
                    ScrollTrigger.refresh();
                })
                .catch(() => {});
        }, 500);
        return () => clearTimeout(timer);
    }, [pathname]);
    return null;
};

export default function ClientLayoutWrapper({ children }) {
    return (
        <AuthProvider>
            <AdmissionModalProvider>
                <RegisterModalProvider>
                    <ViewportHeightOptimizer />
                    <ScrollTriggerRefresher />
                    <Navbar />
                    <div className="transition-opacity duration-1000 opacity-100">
                        <RegistrationModal />
                        <AdmissionModal />
                        <CookieConsent />
                        <ScrollToTop />
                        <Suspense fallback={
                            <div className="min-h-screen bg-white">
                                <div className="h-20 w-full border-b border-slate-100" />
                                <div className="max-w-7xl mx-auto px-6 py-20 animate-pulse">
                                    <div className="h-12 w-2/3 bg-slate-50 rounded-lg mb-6" />
                                    <div className="h-6 w-1/2 bg-slate-50 rounded-lg" />
                                </div>
                            </div>
                        }>
                            <div className="relative z-0 bg-white min-h-screen app-content-wrapper overflow-x-hidden">
                                {children}
                            </div>
                        </Suspense>
                        <FloatingActionPanel />
                        <Analytics />
                        <SpeedInsights />
                    </div>
                </RegisterModalProvider>
            </AdmissionModalProvider>
        </AuthProvider>
    );
}
