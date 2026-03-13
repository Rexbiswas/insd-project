import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
    Menu as MenuIcon, X, ArrowRight, Home, Sparkles, GraduationCap, LayoutGrid, User,
    Search, Folder, Users, CreditCard, Box, HelpCircle, Settings, LogOut, ChevronLeft, ChevronsLeft, Store
} from 'lucide-react';
import gsap from 'gsap';

const RollerLink = ({ to, children, colorClass, baseTextClass = "text-slate-800" }) => {
    return (
        <Link to={to} className="relative block h-[24px] group overflow-hidden">
            <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-1/2">
                <span className={`flex items-center justify-center h-[24px] text-[10px] lg:text-[11px] xl:text-xs 2xl:text-[13px] font-bold ${baseTextClass} uppercase tracking-wider whitespace-nowrap transition-all duration-300 leading-none px-1`}>
                    {children}
                </span>
                <span className={`flex items-center justify-center h-[24px] text-[10px] lg:text-[11px] xl:text-xs 2xl:text-[13px] font-bold uppercase tracking-wider whitespace-nowrap ${colorClass} transition-all duration-300 leading-none px-1`}>
                    {children}
                </span>
            </div>
        </Link>
    );
};

import { useRegisterModal } from '../context/RegisterModalContext';
import { useAuth } from '../context/AuthContext';

const RegisterButton = ({ className = "", isDarkTheme = false, isScrolled = false, theme = null }) => {
    const { openModal } = useRegisterModal();
    // If theme is 'dark', it's forced dark. If 'light', forced light. Otherwise dynamic.
    const isLightMode = theme === 'dark' ? false : theme === 'light' ? true : (!isDarkTheme || isScrolled);

    return (
        <button
            onClick={openModal}
            className={`group relative overflow-hidden shadow-lg transition-all duration-300 rounded-full ${isLightMode ? 'bg-slate-900/5 border-slate-900/10' : 'bg-white/10 hover:bg-white/20 border-white/20'} backdrop-blur-xl border ${className} flex items-center justify-center`}
        >
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-500" />

            {/* Shimmer Effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 -left-full w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] group-hover:animate-shimmer" />
            </div>

            {/* Glowing Border Animation */}
            <div className="absolute inset-0 border border-white/20 group-hover:border-primary/50 rounded-full transition-colors duration-500" />

            <div className="relative z-10 flex items-center justify-center gap-1.5 md:gap-2 h-full">
                <span className={`text-[10px] md:text-xs font-black tracking-widest uppercase transition-all duration-300 leading-none ${isLightMode ? 'text-slate-900 group-hover:text-white' : 'text-white'}`}>
                    Register
                </span>
                <ArrowRight size={14} className={`transition-all duration-300 group-hover:translate-x-1 ${isLightMode ? 'text-slate-900 group-hover:text-white' : 'text-white'}`} />
            </div>

            {/* Outer Glow Halo */}
            <div className="absolute -inset-[2px] bg-linear-to-r from-primary to-secondary rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10" />
        </button>
    );
};

const Navbar = () => {
    const { openModal } = useRegisterModal();
    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);
    const [expandedSubItem, setExpandedSubItem] = useState(null);
    const { scrollY } = useScroll();
    const location = useLocation();

    // Pages that have a dark background/theme or high-impact gradient hero sections
    // Updated detection: Pages with permanent dark themes or sections
    const darkPages = ['/franchise', '/apply'];
    const [isHeaderDark, setIsHeaderDark] = useState(darkPages.includes(location.pathname));

    // Scroll values
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkColor = () => {
            const currentScroll = window.scrollY;
            setIsScrolled(currentScroll > 50);

            const is404 = document.body.classList.contains('is-404-page');

            if (location.pathname === '/') {
                // At the very top of Home, it's light (dark text). 
                // Between 1200 and 4000, it hits dark sections (AiFuture, LeadForm).
                setIsHeaderDark(currentScroll > 1200 && currentScroll < 4000);
            } else if (is404) {
                // 404 page is always dark, needs white text
                setIsHeaderDark(true);
            } else if (darkPages.includes(location.pathname)) {
                // Specialized dark pages transition to light header as you scroll
                setIsHeaderDark(currentScroll < 500);
            } else {
                // All other internal pages (Services, Courses, etc) are light at top
                setIsHeaderDark(false);
            }
        };

        checkColor(); // Initialize on mount and route change
        window.addEventListener('scroll', checkColor);
        return () => window.removeEventListener('scroll', checkColor);
    }, [location.pathname]);
    // Responsive check
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        return scrollY.on("change", (latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    // Scroll animations - using direct scrollY for instant responsiveness
    const scrollProgress = scrollY;
    const transitionRange = [0, 50]; // Quicker transition range

    const navWidth = useTransform(scrollProgress, transitionRange, ["100%", "96%"]);
    const navTop = useTransform(scrollProgress, transitionRange, ["0px", "20px"]);
    const navRadius = useTransform(scrollProgress, transitionRange, ["0px", "50px"]);

    // Frosted Glass Effect Transformations
    const navBackground = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.75)"]);
    const navBackdrop = useTransform(scrollProgress, transitionRange, ["blur(0px) saturate(100%)", "blur(25px) saturate(180%)"]);
    const navBorderColor = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.4)"]);
    const navShadow = useTransform(scrollProgress, transitionRange, ["none", "0 10px 40px -10px rgba(0, 0, 0, 0.1)"]);

    // Mobile Dynamic Island Animations
    const mobileWidth = useTransform(scrollProgress, transitionRange, ["100%", "360px"]);
    const mobileHeight = useTransform(scrollProgress, transitionRange, ["64px", "48px"]);
    const mobileTop = useTransform(scrollProgress, transitionRange, ["0px", "10px"]);
    const mobileRadius = useTransform(scrollProgress, transitionRange, ["0px", "10px"]);
    const mobileBackground = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.4)"]);
    const mobileBackdrop = useTransform(scrollProgress, transitionRange, ["blur(0px) saturate(100%)", "blur(20px) saturate(180%)"]);
    const mobileShadow = useTransform(scrollProgress, transitionRange, ["none", "0 10px 25px -5px rgba(0, 0, 0, 0.1)"]);
    const mobileBorder = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.4)"]);

    const navRef = useRef(null);
    const mobileNavRef = useRef(null);



    const menuItems = [
        { title: 'Dashboard', path: '/', icon: LayoutGrid, section: 'OVERVIEW' },
        {
            title: 'About INSD',
            path: '/about-us',
            icon: Folder,
            section: 'OVERVIEW',
            subItems: [
                { name: 'Industry Potential', path: '/industry-potential' },
                { name: 'Award Recognise', path: '/awards' },
                { name: 'Insdian', path: '/insdian' },
                { name: 'Student Career', path: '/student-careers' },
                { name: 'Campus', path: '/campuses' },
                { name: 'Placement', path: '/placement' },
            ]
        },
        {
            title: 'Our Courses',
            path: '/courses',
            icon: GraduationCap,
            section: 'OVERVIEW',
            subItems: [
                { name: 'Fashion Designing', path: '/courses/fashion-designing' },
                { name: 'Interior Designing', path: '/courses/interior-designing' },
                { name: 'Graphic Designing', path: '/courses/graphic-designing' },
                { name: 'Animation & VFX', path: '/courses/animation-and-vfx' },
                { name: 'Jewellery Designing', path: '/courses/jewellery-designing' },
                { name: 'UI/UX Design', path: '/courses/uiux-designing' },
                { name: 'Beauty & Makeup', path: '/courses/beauty-and-makeup' },
                { name: 'Photography', path: '/courses/photography' },
                { name: 'Textile Design', path: '/courses/textile-designing' },
            ]
        },
        { title: 'Admissions', path: '/apply', icon: CreditCard, section: 'OVERVIEW' },
        { title: 'Franchise', path: '/franchise', icon: Store, section: 'OVERVIEW' },
        { title: 'Settings', path: '/profile', icon: Settings, section: 'OTHER' },
    ];

    // Logic to lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setExpandedItem(null); // Reset expanded item when closing menu
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                style={{
                    width: navWidth,
                    top: navTop,
                    borderRadius: navRadius,
                    backgroundColor: navBackground,
                    backdropFilter: navBackdrop,
                    WebkitBackdropFilter: navBackdrop,
                    borderColor: navBorderColor,
                    boxShadow: navShadow,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    x: "-50%",
                }}
                ref={navRef}
                className="hidden md:flex fixed left-1/2 z-1000 px-6 lg:px-8 xl:px-10 py-4 items-center justify-between transition-all duration-300 pointer-events-auto w-full"
            >
                {/* Left: Logo */}
                <Link to="/" className="nav-logo relative z-50 shrink-0 block h-10 overflow-hidden" onClick={() => setIsOpen(false)}>
                    <motion.img
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className={`h-10 w-auto object-contain transition-all duration-500 ${isHeaderDark && !isScrolled ? 'brightness-0 invert' : 'drop-shadow-sm'}`}
                        src="https://insd.edu.in/wp-content/uploads/2022/02/Final-Logo.png"
                        alt="INSD Logo"
                    />
                </Link>
                {/* Right: Actions */}
                <div className="flex items-center gap-2 md:gap-3 lg:gap-4 2xl:gap-6">
                    {/* Quick Links - Visible on Desktop */}
                    <AnimatePresence>
                        {!isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="hidden lg:flex items-center gap-1.5 lg:gap-2 xl:gap-3 2xl:gap-4"
                            >
                                <div className="relative group/dropdown">
                                    <div className="flex items-center gap-1 cursor-pointer py-4">
                                        <RollerLink
                                            to="/about-us"
                                            colorClass="nav-hover-gradient"
                                            baseTextClass={isHeaderDark && !isScrolled ? "text-white" : "text-slate-800"}
                                        >
                                            About
                                        </RollerLink>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 group-hover/dropdown:rotate-180 ${isHeaderDark && !isScrolled ? 'text-white/70' : 'text-slate-500'}`}><path d="m6 9 6 6 6-6" /></svg>
                                    </div>

                                    {/* Dropdown Menu */}
                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 pt-6 w-64 opacity-0 invisible translate-y-4 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-50">
                                        <div className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden p-2 relative before:content-[''] before:absolute before:inset-0 before:bg-linear-to-b before:from-white/40 before:to-transparent before:pointer-events-none after:content-[''] after:absolute after:-top-px after:left-10 after:right-10 after:h-[1px] after:bg-linear-to-r after:from-transparent after:via-primary/30 after:to-transparent">
                                            <div className="max-h-[400px] overflow-y-auto dropdown-scrollbar pr-1 overscroll-contain">
                                                {[
                                                    { title: 'Industry Potential', path: '/industry-potential', icon: 'zap', desc: 'Explore industry trends' },
                                                    { title: 'Award Recognise', path: '/awards', icon: 'award', desc: 'Our achievements' },
                                                    { title: 'Insdian', path: '/insdian', icon: 'users', desc: 'Meet our community' },
                                                    { title: 'Student Career', path: '/student-careers', icon: 'briefcase', desc: 'Career opportunities' },
                                                    { title: 'Campus', path: '/campuses', icon: 'map-pin', desc: 'Our locations' },
                                                    { title: 'Placement', path: '/placement', icon: 'trending-up', desc: 'Placement records' },
                                                ].map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        to={item.path}
                                                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 group/item transition-all duration-300 relative overflow-hidden"
                                                    >
                                                        <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover/item:bg-primary group-hover/item:text-white group-hover/item:scale-110 transition-all duration-400 shadow-sm relative z-10">
                                                            {item.icon === 'info' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>}
                                                            {item.icon === 'zap' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>}
                                                            {item.icon === 'award' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7" /><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" /></svg>}
                                                            {item.icon === 'users' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>}
                                                            {item.icon === 'briefcase' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>}
                                                            {item.icon === 'map-pin' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>}
                                                            {item.icon === 'trending-up' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>}
                                                        </div>
                                                        <div className="flex flex-col relative z-10">
                                                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover/item:text-primary dark:group-hover/item:text-white transition-colors">{item.title}</span>
                                                            <span className="text-[11px] font-medium text-slate-400 group-hover/item:text-slate-500 transition-colors uppercase tracking-wider">{item.desc}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative group/dropdown">
                                    <div className="flex items-center gap-1 cursor-pointer py-4">
                                        <RollerLink
                                            to="/courses"
                                            colorClass="nav-hover-gradient"
                                            baseTextClass={isHeaderDark && !isScrolled ? "text-white" : "text-slate-800"}
                                        >
                                            Courses
                                        </RollerLink>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-300 group-hover/dropdown:rotate-180 ${isHeaderDark && !isScrolled ? 'text-white/70' : 'text-slate-500'}`}><path d="m6 9 6 6 6-6" /></svg>
                                    </div>

                                    <div className="absolute top-12 left-1/2 -translate-x-1/2 pt-6 w-80 opacity-0 invisible translate-y-4 group-hover/dropdown:opacity-100 group-hover/dropdown:visible group-hover/dropdown:translate-y-0 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] z-50">
                                        <div className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200/50 dark:border-white/10 rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden p-2 relative before:content-[''] before:absolute before:inset-0 before:bg-linear-to-b before:from-white/40 before:to-transparent before:pointer-events-none">
                                            <div className="max-h-[400px] overflow-y-auto dropdown-scrollbar pr-1 overscroll-contain">
                                                {[
                                                    { title: 'Fashion Designing', path: '/courses/fashion-designing', icon: 'fashion', desc: 'Couture & Apparel Design' },
                                                    { title: 'Interior Designing', path: '/courses/interior-designing', icon: 'interior', desc: 'Spatial & Interior Styling' },
                                                    { title: 'Graphic Designing', path: '/courses/graphic-designing', icon: 'graphic', desc: 'Visual Branding & Media' },
                                                    { title: 'Animation & VFX', path: '/courses/animation-and-vfx', icon: 'animation', desc: '3D Motion & Visual Effects' },
                                                    { title: 'Jewellery Designing', path: '/courses/jewellery-designing', icon: 'jewellery', desc: 'Gems & Jewelry Craft' },
                                                    { title: 'UI/UX Design', path: '/courses/uiux-designing', icon: 'uiux', desc: 'User Experience & Interface' },
                                                    { title: 'Beauty & Makeup', path: '/courses/beauty-and-makeup', icon: 'beauty', desc: 'Professional Esthetics' },
                                                    { title: 'Photography', path: '/courses/photography', icon: 'photography', desc: 'Visual Storytelling Art' },
                                                    { title: 'Textile Design', path: '/courses/textile-designing', icon: 'textile', desc: 'Material Science Arts' },
                                                ].map((item, i) => (
                                                    <Link
                                                        key={i}
                                                        to={item.path}
                                                        className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 group/item transition-all duration-300 relative overflow-hidden"
                                                    >
                                                        <div className="absolute inset-0 bg-linear-to-r from-primary/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                                        <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover/item:bg-primary group-hover/item:text-white group-hover/item:scale-110 transition-all duration-400 shadow-sm relative z-10">
                                                            {item.icon === 'fashion' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2z" /><path d="M6 8a2 2 0 0 0 2 2h7a3 3 0 0 1 3 3v5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1" /><path d="M12 22v-4" /><path d="M9 18v-2" /><path d="M15 18v-2" /></svg>}
                                                            {item.icon === 'interior' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>}
                                                            {item.icon === 'graphic' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.72 1.7-1.61 0-.43-.17-.83-.44-1.13-.29-.3-.47-.7-.47-1.13 0-.88.72-1.59 1.61-1.59h1.91c2.51 0 4.69-2.03 4.69-4.55 0-4.41-4.03-8-9-8z" /></svg>}
                                                            {item.icon === 'animation' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" /><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="2" y1="12" x2="22" y2="12" /><line x1="2" y1="7" x2="7" y2="7" /><line x1="2" y1="17" x2="7" y2="17" /><line x1="17" y1="17" x2="22" y2="17" /><line x1="17" y1="7" x2="22" y2="7" /></svg>}
                                                            {item.icon === 'jewellery' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z" /><path d="M11 3 8 9l4 13 4-13-3-6" /><path d="M2 9h20" /></svg>}
                                                            {item.icon === 'uiux' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="M7 14l5-5 5 5" /></svg>}
                                                            {item.icon === 'beauty' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M3 5h4" /><path d="M21 17v4" /><path d="M19 19h4" /></svg>}
                                                            {item.icon === 'photography' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" /><circle cx="12" cy="13" r="3" /></svg>}
                                                            {item.icon === 'textile' && <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 20.22 8.66 14a2 2 0 0 1 2.68 0L18 20.22" /><path d="m2 15.22 6.66-6.22a2 2 0 0 1 2.68 0L18 15.22" /><path d="m2 10.22 6.66-6.22a2 2 0 0 1 2.68 0L18 10.22" /></svg>}
                                                        </div>
                                                        <div className="flex flex-col relative z-10">
                                                            <span className="font-bold text-sm text-slate-800 dark:text-slate-200 group-hover/item:text-primary dark:group-hover/item:text-white transition-colors">{item.title}</span>
                                                            <span className="text-[11px] font-medium text-slate-400 group-hover/item:text-slate-500 transition-colors uppercase tracking-wider">{item.desc}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <RollerLink
                                    to="/apply"
                                    colorClass="nav-hover-gradient"
                                    baseTextClass={isHeaderDark && !isScrolled ? "text-white" : "text-slate-800"}
                                >
                                    Admission
                                </RollerLink>
                                <RollerLink
                                    to="/franchise"
                                    colorClass="nav-hover-gradient"
                                    baseTextClass={isHeaderDark && !isScrolled ? "text-white" : "text-slate-800"}
                                >
                                    Franchise
                                </RollerLink>
                            </motion.div>
                        )}
                    </AnimatePresence>


                    {/* Menu Toggle - Desktop Only */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`group relative hidden md:flex items-center gap-3 px-5 py-2.5 rounded-full overflow-hidden shadow-lg transition-all duration-300 ${isHeaderDark && !isScrolled ? 'bg-white text-slate-900 shadow-white/10' : 'bg-slate-900 text-white shadow-slate-900/20'}`}
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-primary to-secondary translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className={`relative z-10 font-bold text-sm hidden sm:inline-block tracking-wide transition-colors duration-300 ${isHeaderDark && !isScrolled ? 'group-hover:text-white' : ''}`}>
                            {isOpen ? "CLOSE" : "CONTACT"}
                        </span>
                    </motion.button>

                    {/* Profile Component */}
                    {user ? (
                        <Link
                            to="/profile"
                            className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 font-black text-sm ${isDarkTheme && !isScrolled ? 'border-primary bg-primary text-white hover:scale-105' : 'border-primary bg-primary text-white hover:scale-105'} shadow-xl`}
                            title="Profile Dashboard"
                        >
                            {user.username.charAt(0).toUpperCase()}
                        </Link>
                    ) : (
                        <button
                            onClick={openModal}
                            className={`hidden md:flex items-center justify-center w-10 h-10 rounded-full border transition-all duration-300 ${isHeaderDark && !isScrolled ? 'border-white/20 text-white hover:bg-white hover:text-slate-900' : 'border-slate-200 text-slate-800 bg-white hover:bg-slate-900 hover:border-slate-900 hover:text-white'} shadow-sm`}
                        >
                            <User size={18} strokeWidth={2.5} />
                        </button>
                    )}
                </div>
            </motion.nav>

            {/* Mobile Top Bar - Dynamic Island Style */}
            <motion.div
                style={{
                    width: mobileWidth,
                    height: mobileHeight,
                    top: mobileTop,
                    borderRadius: mobileRadius,
                    backgroundColor: isOpen ? "transparent" : mobileBackground,
                    backdropFilter: isOpen ? "none" : mobileBackdrop,
                    WebkitBackdropFilter: isOpen ? "none" : mobileBackdrop,
                    boxShadow: isOpen ? "none" : mobileShadow,
                    borderColor: isOpen ? "transparent" : mobileBorder,
                    borderWidth: "1px",
                    borderStyle: "solid",
                    x: "-50%",
                }}
                ref={mobileNavRef}
                className="md:hidden fixed left-1/2 z-50 flex items-center pointer-events-none"
            >
                <div className="relative w-full h-full flex items-center justify-center px-4 pointer-events-auto">
                    <Link to="/" onClick={() => setIsOpen(false)} className="h-full flex items-center justify-center">
                        <img
                            className={`h-7 md:h-8 w-auto object-contain transition-all duration-500 ${isHeaderDark && !isScrolled ? 'brightness-0 invert' : 'drop-shadow-sm'}`}
                            src="https://insd.edu.in/wp-content/uploads/2022/02/Final-Logo.png"
                            alt="INSD Logo"
                        />
                    </Link>
                </div>
            </motion.div >

            {/* Mobile Bottom Navigation Bar - Pill Glass Style */}
            <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] h-20 z-50 md:hidden">
                <div className={`w-full h-full flex items-center justify-around px-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-all duration-500 border ${isOpen || (isHeaderDark && !isScrolled) ? 'bg-slate-900/40 backdrop-blur-2xl border-white/10' : 'bg-white/40 backdrop-blur-2xl border-white/30'}`}>
                    
                    {/* HOME */}
                    <NavLink
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) =>
                            `relative flex flex-col items-center justify-center w-16 h-16 transition-all duration-500 scale-90 active:scale-75 ${isActive ? 'text-primary' : (isHeaderDark && !isScrolled) || isOpen ? 'text-white/40' : 'text-slate-900/40'}`
                        }
                    >
                        {({ isActive }) => (
                            <>
                                {isActive && (
                                    <motion.div 
                                        layoutId="activeBubble" 
                                        className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(219,52,54,0.1)]"
                                        transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                                    />
                                )}
                                <Home size={22} strokeWidth={isActive ? 2.5 : 2} className="relative z-10" />
                                <span className={`text-[9px] font-bold mt-1.5 uppercase tracking-widest relative z-10 ${isActive ? 'opacity-100' : 'opacity-60'}`}>Home</span>
                            </>
                        )}
                    </NavLink>

                    {/* APPLY */}
                    <button
                        onClick={() => {
                            setIsOpen(false);
                            openModal();
                        }}
                        className={`relative flex flex-col items-center justify-center w-16 h-16 transition-all duration-500 scale-90 active:scale-75 ${(isHeaderDark && !isScrolled) || isOpen ? 'text-white/40 hover:text-white' : 'text-slate-900/40 hover:text-slate-900'}`}
                    >
                        <GraduationCap size={22} strokeWidth={2} />
                        <span className="text-[9px] font-bold mt-1.5 uppercase tracking-widest opacity-60">Apply</span>
                    </button>

                    {/* MENU */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`relative flex flex-col items-center justify-center w-16 h-16 transition-all duration-500 scale-90 active:scale-75 ${isOpen ? 'text-primary' : (isHeaderDark && !isScrolled) ? 'text-white/40 hover:text-white' : 'text-slate-900/40 hover:text-slate-900'}`}
                    >
                        {isOpen && (
                            <motion.div 
                                layoutId="activeBubble" 
                                className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 shadow-[0_0_20px_rgba(219,52,54,0.1)]"
                                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                            />
                        )}
                        <div className="relative z-10">
                            {isOpen ? <X size={24} strokeWidth={2.5} /> : <LayoutGrid size={22} strokeWidth={2} />}
                        </div>
                        <span className={`text-[9px] font-bold mt-1.5 uppercase tracking-widest relative z-10 ${isOpen ? 'opacity-100' : 'opacity-60'}`}>{isOpen ? 'Close' : 'Menu'}</span>
                    </button>
                </div>
            </div >

            {/* Navigation Menu Sidebar/Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop Overlay - Mobile Only */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-1000 bg-slate-950/60 backdrop-blur-sm md:hidden"
                        />

                        <motion.div
                            initial={isMobile ? { x: "-100%" } : { clipPath: "circle(0% at 95% 40px)" }}
                            animate={isMobile ? { x: 0 } : { clipPath: "circle(150% at 95% 40px)" }}
                            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                            exit={isMobile ? { x: "-100%" } : { clipPath: "circle(0% at 95% 40px)", transition: { duration: 0.5 } }}
                            className={`fixed z-1001 text-white overflow-hidden shadow-2xl ${isMobile ? 'top-0 left-0 bottom-0 w-[85vw] max-w-[320px] bg-[#0a0a0a]/80 backdrop-blur-2xl border-r border-white/10 flex flex-col' : 'fixed inset-0 bg-slate-950/95'}`}
                        >
                            {/* Profile Header Block */}
                            <div className="p-6 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                                            {user ? (
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`} alt="Avatar" className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full bg-primary/20 flex items-center justify-center text-primary">
                                                    <User size={20} strokeWidth={2.5} />
                                                </div>
                                            )}
                                        </div>
                                        <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 border-2 border-[#111] rounded-full" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold text-white tracking-tight leading-tight">
                                            {user ? user.username : 'Welcome!'}
                                        </span>
                                        <span className="text-[10px] text-white/30 uppercase font-black tracking-widest">Student Hub</span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white/40 hover:text-white transition-all shadow-sm active:scale-90"
                                >
                                    <ChevronsLeft size={18} />
                                </button>
                            </div>



                            {/* Scrollable Nav Area */}
                            <div className="flex-1 overflow-y-auto min-h-0 custom-scrollbar px-4 space-y-6 pb-10">
                                {/* OVERVIEW SECTION */}
                                <div className="space-y-1">
                                    <h3 className="px-4 text-[10px] font-bold tracking-[0.2em] text-white/20 uppercase mb-3">Overview</h3>
                                    <div className="space-y-1">
                                        {menuItems.filter(item => item.section === 'OVERVIEW').map((item) => {
                                            const isActive = location.pathname === item.path;
                                            const Icon = item.icon;

                                            return (
                                                <div key={item.title}>
                                                    <NavLink
                                                        to={item.subItems ? '#' : item.path}
                                                        onClick={(e) => {
                                                            if (item.subItems) {
                                                                e.preventDefault();
                                                                setExpandedItem(expandedItem === item.title ? null : item.title);
                                                            } else {
                                                                setIsOpen(false);
                                                            }
                                                        }}
                                                        className={`flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive ? 'bg-primary/10 text-primary shadow-[inset_0_0_20px_rgba(219,52,54,0.05)]' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                                                    >
                                                        <Icon size={18} className={`${isActive ? 'text-primary' : 'text-white/30 group-hover:text-primary transition-colors'}`} strokeWidth={isActive ? 2.5 : 2} />
                                                        <span className="text-[13px] font-bold tracking-tight">{item.title}</span>

                                                        {item.title === 'Franchise' && (
                                                            <div className="ml-auto flex items-center gap-1.5">
                                                                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse shadow-[0_0_8px_rgba(219,52,54,0.6)]" />
                                                            </div>
                                                        )}

                                                        {item.subItems && (
                                                            <ChevronLeft
                                                                size={14}
                                                                className={`ml-auto transition-transform duration-300 ${expandedItem === item.title ? '-rotate-90' : ''}`}
                                                            />
                                                        )}
                                                    </NavLink>

                                                    {/* Sub-items dropdown */}
                                                    <AnimatePresence>
                                                        {item.subItems && expandedItem === item.title && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3, ease: "easeOut" }}
                                                                className="overflow-hidden bg-white/2 border-l border-white/5 ml-6 mt-1 rounded-br-xl"
                                                            >
                                                                {item.subItems.map(sub => (
                                                                    <NavLink
                                                                        key={sub.name}
                                                                        to={sub.path}
                                                                        onClick={() => setIsOpen(false)}
                                                                        className="flex items-center gap-3 px-6 py-3 text-[11px] font-bold text-white/30 hover:text-primary hover:bg-white/5 transition-all uppercase tracking-wider group/sub"
                                                                    >
                                                                        <div className="w-1.5 h-[1px] bg-white/10 group-hover/sub:w-3 group-hover/sub:bg-primary transition-all" />
                                                                        {sub.name}
                                                                    </NavLink>
                                                                ))}
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Account Section */}
                                <div className="mt-auto pt-6 border-t border-white/5 space-y-2">
                                    <button 
                                        onClick={() => {
                                            setIsOpen(false);
                                            // Handle logout here (e.g., clear localStorage, redirect, etc.)
                                            console.log("User logged out");
                                        }}
                                        className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-white/50 hover:bg-red-500/10 hover:text-red-500 transition-all group group"
                                    >
                                        <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-red-500/10 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-all shadow-sm">
                                            <LogOut size={16} />
                                        </div>
                                        <span className="text-[13px] font-bold tracking-tight">Sign Out</span>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                            <ArrowRight size={14} className="text-red-500" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
