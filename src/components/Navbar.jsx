import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu as MenuIcon, X, ArrowRight, Home, Sparkles, GraduationCap, LayoutGrid, User } from 'lucide-react';
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
    const darkPages = ['/franchise', '/apply', '/courses', '/student-careers'];
    const [isHeaderDark, setIsHeaderDark] = useState(darkPages.includes(location.pathname));

    // Scroll values
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const checkColor = () => {
            const currentScroll = window.scrollY;
            setIsScrolled(currentScroll > 50);

            // On Home page, we might want to detect specific dark sections
            // For now, let's use the route logic + extra detection if needed
            if (darkPages.includes(location.pathname)) {
                setIsHeaderDark(true);
            } else {
                // Dynamic detection for sections like AiFutureDesign or LeadForm (dark)
                // If scroll is in certain ranges or we detect background
                setIsHeaderDark(currentScroll > 1200 && currentScroll < 4000); // Approximate LeadForm/AI sections range
            }
        };

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
    const navBackground = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0.8)", "rgba(255, 255, 255, 0.8)"]);
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



    const menuItems = [];

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
                className="hidden md:flex fixed left-1/2 z-100 px-6 lg:px-8 xl:px-10 py-4 items-center justify-between transition-all duration-300 pointer-events-auto w-full"
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
                <div className="relative w-full h-full flex items-center justify-between px-4 pointer-events-auto">
                    {/* Ghost spacer to keep logo centered */}
                    <div className="w-20 hidden md:block" />

                    <Link to="/" onClick={() => setIsOpen(false)} className="h-full flex items-center justify-center mx-auto">
                        <img
                            className={`h-7 md:h-8 w-auto object-contain transition-all duration-500 ${isHeaderDark && !isScrolled ? 'brightness-0 invert' : 'drop-shadow-sm'}`}
                            src="https://insd.edu.in/wp-content/uploads/2022/02/Final-Logo.png"
                            alt="INSD Logo"
                        />
                    </Link>

                    {/* Register button removed from here for cleaner mobile look */}
                </div>
            </motion.div >

            {/* Mobile Bottom Navigation Bar - iPhone Style */}
            <div className={`fixed bottom-2 left-2 right-2 h-20 flex items-center justify-around px-4 border z-50 md:hidden rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 ${isOpen || (isHeaderDark && !isScrolled) ? 'apple-glass-dark bg-slate-900/40!' : 'apple-glass'}`}>
                <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isActive ? 'text-primary' : (isHeaderDark && !isScrolled) || isOpen ? 'text-white/40 hover:text-white' : 'text-slate-900/40 hover:text-slate-900'}`
                    }
                >
                    {({ isActive }) => (
                        <>
                            {isActive && <motion.div layoutId="activePill" className="absolute inset-2 bg-primary/20 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.2)]" />}
                            <Home size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={`text-[10px] font-black mt-1 uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-40'}`}>Home</span>
                        </>
                    )}
                </NavLink>

                <NavLink
                    to="/courses"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isActive ? 'text-secondary' : (isHeaderDark && !isScrolled) || isOpen ? 'text-white/40 hover:text-white' : 'text-slate-900/40 hover:text-slate-900'}`
                    }
                >
                    {({ isActive }) => (
                        <>
                            {isActive && <motion.div layoutId="activePill" className="absolute inset-2 bg-secondary/20 rounded-full shadow-[0_0_20px_rgba(139,92,246,0.2)]" />}
                            <Sparkles size={24} strokeWidth={isActive ? 2.5 : 2} />
                            <span className={`text-[10px] font-black mt-1 uppercase tracking-tighter ${isActive ? 'opacity-100' : 'opacity-40'}`}>Courses</span>
                        </>
                    )}
                </NavLink>

                <button
                    onClick={() => {
                        setIsOpen(false);
                        openModal();
                    }}
                    className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${(isHeaderDark && !isScrolled) || isOpen ? 'text-white/40 hover:text-white' : 'text-slate-900/40 hover:text-slate-900'}`}
                >
                    <GraduationCap size={24} strokeWidth={2} />
                    <span className="text-[10px] font-black mt-1 uppercase tracking-tighter opacity-40">Apply</span>
                </button>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isOpen ? 'text-primary bg-primary/5' : (isHeaderDark && !isScrolled) ? 'text-white/40 hover:text-white' : 'text-slate-900/40 hover:text-slate-900'}`}
                >
                    {isOpen ? <X size={26} strokeWidth={2} /> : <LayoutGrid size={24} strokeWidth={2} />}
                    <span className={`text-[10px] font-black mt-1 uppercase tracking-tighter ${isOpen ? 'opacity-100' : 'opacity-40'}`}>{isOpen ? 'Close' : 'Menu'}</span>
                </button>
            </div>

            {/* Full Screen Menu Overlay */}
            < AnimatePresence >
                {isOpen && (
                    <motion.div
                        initial={isMobile ? { y: "100%", borderRadius: "2rem 2rem 0 0" } : { clipPath: "circle(0% at 95% 40px)" }}
                        animate={isMobile ? { y: 0, borderRadius: "0 0 0 0" } : { clipPath: "circle(150% at 95% 40px)" }}
                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                        exit={isMobile ? { y: "100%", borderRadius: "2rem 2rem 0 0" } : { clipPath: "circle(0% at 95% 40px)", transition: { duration: 0.8, ease: "circIn" } }}
                        className="fixed inset-0 z-39 bg-[#0f172b] text-white overflow-hidden shadow-2xl"
                    >
                        {/* Background shapes */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-primary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-secondary/30 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
                            <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-2000" />
                        </div>

                        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 py-24 flex items-center">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full h-full">

                                {/* Navigation Links Area (Main focus) */}
                                <div className="lg:col-span-8 flex flex-col justify-start md:justify-center space-y-2 h-full overflow-y-auto no-scrollbar pb-32 pt-12 md:pt-0">

                                    {/* Search Bar - Mobile/Menu Responsive */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mb-8 w-full max-w-md shrink-0 flex flex-col gap-4"
                                    >
                                        {/* Register CTA for Mobile Drawer - Forced Dark for dark menu */}
                                        <div className="md:hidden">
                                            <RegisterButton
                                                className="w-full py-4 rounded-2xl! flex justify-center items-center"
                                                theme="dark"
                                            />
                                        </div>
                                    </motion.div>

                                    {menuItems.map((link, index) => (
                                        <div key={link.title} className="group perspective-[1000px] shrink-0">
                                            <motion.div
                                                initial={{ y: "100%", rotateX: -90, opacity: 0 }}
                                                animate={{ y: "0%", rotateX: 0, opacity: 1 }}
                                                exit={{ y: "-100%", rotateX: 90, opacity: 0 }}
                                                transition={{
                                                    delay: 0.2 + index * 0.08,
                                                    duration: 0.8,
                                                    ease: [0.215, 0.61, 0.355, 1]
                                                }}
                                                className="origin-bottom"
                                            >
                                                <div className="flex flex-col">
                                                    <div className="flex items-center justify-between group/link">
                                                        <NavLink
                                                            to={link.subItems ? '#' : (link.title === 'Apply' || link.title === 'Register' ? '#' : link.path)}
                                                            onClick={(e) => {
                                                                if (link.subItems) {
                                                                    e.preventDefault();
                                                                    setExpandedItem(expandedItem === link.title ? null : link.title);
                                                                } else if (link.title === 'Apply' || link.title === 'Register') {
                                                                    e.preventDefault();
                                                                    setIsOpen(false);
                                                                    openModal();
                                                                } else {
                                                                    setIsOpen(false);
                                                                }
                                                            }}
                                                            className={({ isActive }) => {
                                                                const isPathActive = location.pathname === link.path ||
                                                                    (link.subItems && link.subItems.some(sub => location.pathname === sub.path));

                                                                return `relative inline-flex items-center text-base md:text-lg lg:text-xl font-bold tracking-tight uppercase transition-colors duration-300 ${isPathActive ? 'text-white' : 'text-slate-600 hover:text-white'}`;
                                                            }}
                                                        >
                                                            <span className="absolute -left-12 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-primary text-3xl hidden lg:block">
                                                                <ArrowRight />
                                                            </span>
                                                            <span className="relative z-10 group-hover/link:translate-x-4 transition-transform duration-300">
                                                                {link.title}
                                                            </span>
                                                        </NavLink>

                                                        {link.subItems && (
                                                            <motion.button
                                                                animate={{ rotate: expandedItem === link.title ? 180 : 0 }}
                                                                onClick={() => setExpandedItem(expandedItem === link.title ? null : link.title)}
                                                                className={`p-4 transition-colors rounded-full hover:bg-white/5 ${expandedItem === link.title ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                            </motion.button>
                                                        )}
                                                    </div>

                                                    {link.subItems && (
                                                        <AnimatePresence>
                                                            {expandedItem === link.title && (
                                                                <motion.div
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: "auto", opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                                                                    className="overflow-hidden flex flex-col pl-4 md:pl-8 mt-4 space-y-4 border-l-2 border-primary/30 ml-2"
                                                                >
                                                                    {link.subItems.map((subItem) => (
                                                                        <div key={subItem.name} className="flex flex-col">
                                                                            {subItem.subItems ? (
                                                                                <>
                                                                                    <div className="flex items-center justify-between group/sub w-full">
                                                                                        <NavLink
                                                                                            to={subItem.subItems ? '#' : subItem.path}
                                                                                            onClick={(e) => {
                                                                                                if (subItem.subItems) {
                                                                                                    e.preventDefault();
                                                                                                    setExpandedSubItem(expandedSubItem === subItem.name ? null : subItem.name);
                                                                                                } else {
                                                                                                    setIsOpen(false);
                                                                                                }
                                                                                            }}
                                                                                            className={({ isActive }) =>
                                                                                                `relative flex items-center text-sm md:text-base font-bold transition-all duration-300 uppercase tracking-tight ${isActive ? 'text-primary' : 'text-slate-400 hover:text-white'}`
                                                                                            }
                                                                                        >
                                                                                            <span className="w-0 h-[2px] bg-primary mr-0 transition-all duration-300 group-hover/sub:w-4 group-hover/sub:mr-3" />
                                                                                            <span className="group-hover/sub:translate-x-1 transition-transform duration-300">
                                                                                                {subItem.name}
                                                                                            </span>
                                                                                        </NavLink>
                                                                                        <motion.button
                                                                                            animate={{ rotate: expandedSubItem === subItem.name ? 180 : 0 }}
                                                                                            onClick={(e) => {
                                                                                                e.preventDefault();
                                                                                                e.stopPropagation();
                                                                                                setExpandedSubItem(expandedSubItem === subItem.name ? null : subItem.name);
                                                                                            }}
                                                                                            className={`p-1 transition-colors rounded-full hover:bg-white/5 ${expandedSubItem === subItem.name ? 'text-primary' : 'text-slate-500 hover:text-white'}`}
                                                                                        >
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                                                        </motion.button>
                                                                                    </div>
                                                                                    <AnimatePresence>
                                                                                        {expandedSubItem === subItem.name && (
                                                                                            <motion.div
                                                                                                initial={{ height: 0, opacity: 0 }}
                                                                                                animate={{ height: "auto", opacity: 1 }}
                                                                                                exit={{ height: 0, opacity: 0 }}
                                                                                                transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                                                                                className="overflow-hidden flex flex-col pl-4 mt-2 space-y-2 border-l border-primary/20 ml-2"
                                                                                            >
                                                                                                {subItem.subItems.map((nestedItem) => (
                                                                                                    <NavLink
                                                                                                        key={nestedItem.name}
                                                                                                        to={nestedItem.path}
                                                                                                        onClick={() => setIsOpen(false)}
                                                                                                        className={({ isActive }) =>
                                                                                                            `block text-xs md:text-sm font-medium transition-all duration-300 uppercase tracking-wide ${isActive ? 'text-primary' : 'text-slate-500 hover:text-slate-300'}`
                                                                                                        }
                                                                                                    >
                                                                                                        {nestedItem.name}
                                                                                                    </NavLink>
                                                                                                ))}
                                                                                            </motion.div>
                                                                                        )}
                                                                                    </AnimatePresence>
                                                                                </>
                                                                            ) : (
                                                                                <NavLink
                                                                                    to={subItem.path}
                                                                                    onClick={() => setIsOpen(false)}
                                                                                    className={({ isActive }) =>
                                                                                        `group/sub relative flex items-center text-sm md:text-base font-bold transition-all duration-300 uppercase tracking-tight ${isActive ? 'text-primary' : 'text-slate-400 hover:text-white'}`
                                                                                    }
                                                                                >
                                                                                    <span className="w-0 h-[2px] bg-primary mr-0 transition-all duration-300 group-hover/sub:w-4 group-hover/sub:mr-3" />
                                                                                    <span className="group-hover/sub:translate-x-1 transition-transform duration-300">
                                                                                        {subItem.name}
                                                                                    </span>
                                                                                </NavLink>
                                                                            )}
                                                                        </div>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    )}
                                                </div>
                                            </motion.div>
                                        </div>
                                    ))}
                                </div>

                                {/* Side Info (Visible on large screens) */}
                                <div className="hidden lg:flex lg:col-span-4 flex-col justify-center space-y-12 border-l border-white/10 pl-12">
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="space-y-4"
                                    >
                                        <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Contact</h3>
                                        <div className="space-y-2 text-base text-slate-300">
                                            <a href="tel:+917701933935">+91 7701933935</a>
                                            <br />
                                            <a href="tel:+917827066618">+91 7827066618</a>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="space-y-4"
                                    >
                                        <div className="space-y-2 text-base text-slate-300">
                                            <h1 className="text-xl font-bold">INSD CORPORATE CENTRES</h1>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.7 }}
                                        className="space-y-4"
                                    >
                                        <h3 className="text-white font-bold uppercase tracking-widest text-sm">Follow Us</h3>
                                        <div className="flex gap-4">
                                            {[
                                                { name: 'Instagram', link: 'https://www.instagram.com/insd_official' },
                                                { name: 'LinkedIn', link: 'https://www.linkedin.com/school/international-school-of-design/' },
                                                { name: 'Facebook', link: 'https://www.facebook.com/share/1CMuRdTV69/' }
                                            ].map(social => (
                                                <a key={social.name} href={social.link} target="_blank" rel="noopener noreferrer" className="relative group text-slate-400 hover:text-white transition-colors duration-300 py-1">
                                                    {social.name}
                                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full" />
                                                </a>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence >
        </>
    );
};

export default Navbar;
