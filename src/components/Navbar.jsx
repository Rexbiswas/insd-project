import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu as MenuIcon, X, ArrowRight, Home, Sparkles, GraduationCap, LayoutGrid } from 'lucide-react';
import gsap from 'gsap';

const RollerLink = ({ to, children, colorClass, baseTextClass = "text-slate-800" }) => {
    return (
        <Link to={to} className="relative block h-[20px] overflow-hidden group">
            <div className="relative transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
                <span className={`block text-sm font-bold ${baseTextClass} uppercase tracking-wider ${colorClass} transition-colors`}>
                    {children}
                </span>
                <span className={`block text-sm font-bold uppercase tracking-wider ${colorClass} absolute top-full left-0`}>
                    {children}
                </span>
            </div>
        </Link>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedItem, setExpandedItem] = useState(null);
    const { scrollY } = useScroll();
    const location = useLocation();

    // Pages that have a dark background/theme
    const darkPages = ['/apply', '/admission'];
    const isDarkTheme = darkPages.includes(location.pathname);

    // Scroll values
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        return scrollY.onChange((latest) => {
            setIsScrolled(latest > 50);
        });
    }, [scrollY]);

    // Scroll animations - using direct scrollY for instant responsiveness
    const scrollProgress = scrollY;
    const transitionRange = [0, 50]; // Quicker transition range

    const navWidth = useTransform(scrollProgress, transitionRange, ["100%", "90%"]);
    const navTop = useTransform(scrollProgress, transitionRange, ["0px", "20px"]);
    const navRadius = useTransform(scrollProgress, transitionRange, ["0px", "50px"]);

    // Frosted Glass Effect Transformations
    const navBackground = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.65)"]);
    const navBackdrop = useTransform(scrollProgress, transitionRange, ["blur(0px)", "blur(12px)"]);
    const navBorderColor = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.5)"]);
    const navShadow = useTransform(scrollProgress, transitionRange, ["none", "0 8px 32px 0 rgba(31, 38, 135, 0.1)"]);

    // Mobile Dynamic Island Animations
    const mobileWidth = useTransform(scrollProgress, transitionRange, ["100%", "360px"]);
    const mobileHeight = useTransform(scrollProgress, transitionRange, ["64px", "48px"]);
    const mobileTop = useTransform(scrollProgress, transitionRange, ["0px", "10px"]);
    const mobileRadius = useTransform(scrollProgress, transitionRange, ["0px", "10px"]);
    const mobileBackground = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]);
    const mobileBackdrop = useTransform(scrollProgress, transitionRange, ["blur(0px)", "blur(12px)"]);
    const mobileShadow = useTransform(scrollProgress, transitionRange, ["none", "0 10px 15px -3px rgba(0, 0, 0, 0.1)"]);
    const mobileBorder = useTransform(scrollProgress, transitionRange, ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.5)"]);

    const navRef = useRef(null);
    const mobileNavRef = useRef(null);

    useEffect(() => {
        // Delayed reveal to wait for Home loading animation
        // We use xPercent: -50 to maintain centering since we remove the CSS translate class to avoid conflicts
        gsap.fromTo([navRef.current, mobileNavRef.current],
            { yPercent: -100, xPercent: -50, autoAlpha: 0 },
            { yPercent: 0, xPercent: -50, autoAlpha: 1, duration: 1.5, ease: "expo.out", delay: 0.5 }
        );
    }, []);

    const menuItems = [
        {
            title: 'About Us',
            path: '/about-us',
            subItems: [
                { name: 'About Us', path: '/about-us' },
                { name: 'International Partners', path: '/international-partners' },
                { name: 'Go Global', path: '/go-global' }
            ]
        },
        {
            title: 'Courses',
            path: '/courses',
            subItems: [
                { name: 'Fashion Design', path: '/courses/fashion-design' },
                { name: 'Interior Design', path: '/courses/interior-design' },
                { name: 'Graphic Design', path: '/courses/graphic-design' },
                { name: 'Animation', path: '/courses/animation' },
                { name: 'Textile Design', path: '/courses/textile-design' }
            ]
        },
        {
            title: 'Campuses',
            path: '/campuses',
            subItems: [
                { name: 'Delhi', path: '/campuses/delhi' },
                { name: 'Mumbai', path: '/campuses/mumbai' },
                { name: 'Bangalore', path: '/campuses/bangalore' },
                { name: 'Pune', path: '/campuses/pune' }
            ]
        },
        { title: 'Student Careers', path: '/student-careers' },
        { title: 'INSD 360', path: '/insd-360' },
        { title: 'Franchise', path: '/franchise' },
        { title: 'Apply', path: '/apply' },
        { title: 'Contact Us', path: '/contact-us' },
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
                    borderColor: navBorderColor,
                    boxShadow: navShadow,
                    borderWidth: "1px",
                    borderStyle: "solid",
                }}
                ref={navRef}
                className="hidden md:flex fixed left-1/2 z-100 px-6 py-4 items-center justify-between transition-all duration-300 pointer-events-auto w-full"
            >
                {/* Left: Logo */}
                <Link to="/" className="nav-logo relative z-50 shrink-0 block h-10 overflow-hidden" onClick={() => setIsOpen(false)}>
                    <motion.img
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="h-10 w-auto object-contain drop-shadow-sm"
                        src="https://insd.edu.in/wp-content/uploads/2022/02/Final-Logo.png"
                        alt="INSD Logo"
                    />
                </Link>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 md:gap-8">
                    {/* Quick Links - Visible on Desktop */}
                    <AnimatePresence>
                        {!isOpen && (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                className="hidden md:flex items-center gap-6"
                            >
                                <RollerLink
                                    to="/apply"
                                    colorClass="group-hover:text-pink-600"
                                    baseTextClass={isDarkTheme && !isScrolled ? "text-white" : "text-slate-800"}
                                >
                                    <span>Admission</span>
                                </RollerLink>
                                <RollerLink
                                    to="/franchise"
                                    colorClass="group-hover:text-violet-600"
                                    baseTextClass={isDarkTheme && !isScrolled ? "text-white" : "text-slate-800"}
                                >
                                    <span>Franchise</span>
                                </RollerLink>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Menu Toggle - Desktop Only */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="group relative hidden md:flex items-center gap-3 px-5 py-2.5 bg-slate-900 text-white rounded-full overflow-hidden shadow-lg shadow-slate-900/20"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-violet-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 font-bold text-sm hidden sm:inline-block tracking-wide">
                            {isOpen ? "CLOSE" : "MENU"}
                        </span>
                    </motion.button>
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
                    boxShadow: isOpen ? "none" : mobileShadow,
                    borderColor: isOpen ? "transparent" : mobileBorder,
                    borderWidth: "1px",
                    borderStyle: "solid",
                }}
                ref={mobileNavRef}
                className="md:hidden fixed left-1/2 z-50 flex items-center justify-center pointer-events-none"
            >
                <Link to="/" onClick={() => setIsOpen(false)} className="pointer-events-auto h-full flex items-center justify-center">
                    <img
                        className="h-8 w-auto object-contain drop-shadow-sm"
                        src="https://insd.edu.in/wp-content/uploads/2022/02/Final-Logo.png"
                        alt="INSD Logo"
                    />
                </Link>
            </motion.div >

            {/* Mobile Bottom Navigation Bar */}
            < div className={`fixed bottom-0 left-0 right-0 h-20 flex items-center justify-around px-6 border-t z-50 md:hidden pb-2 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] backdrop-blur-xl transition-all duration-300 ${isOpen ? 'bg-[#0f172b] border-white/10' : 'bg-white/80 border-slate-200/50'}`
            }>
                <NavLink
                    to="/"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isActive ? 'text-pink-600 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.3)]' : isOpen ? 'text-white/60 hover:text-white' : 'text-[#0f172b]/60 hover:text-[#0f172b]'}`
                    }
                >
                    <Home size={24} strokeWidth={2} />
                    <span className="text-[10px] font-bold mt-1">Home</span>
                </NavLink>

                <NavLink
                    to="/courses"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isActive ? 'text-violet-600 bg-violet-500/10 shadow-[0_0_20px_rgba(139,92,246,0.3)]' : isOpen ? 'text-white/60 hover:text-white' : 'text-[#0f172b]/60 hover:text-[#0f172b]'}`
                    }
                >
                    <Sparkles size={24} strokeWidth={2} />
                    <span className="text-[10px] font-bold mt-1">Courses</span>
                </NavLink>

                <NavLink
                    to="/apply"
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                        `relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isActive ? 'text-pink-600 bg-pink-500/10 shadow-[0_0_20px_rgba(236,72,153,0.3)]' : isOpen ? 'text-white/60 hover:text-white' : 'text-[#0f172b]/60 hover:text-[#0f172b]'}`
                    }
                >
                    <GraduationCap size={24} strokeWidth={2} />
                    <span className="text-[10px] font-bold mt-1">Apply</span>
                </NavLink>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-300 ${isOpen ? 'text-white bg-white/10' : 'text-[#0f172b]/60 hover:text-[#0f172b]'}`}
                >
                    {isOpen ? <X size={26} strokeWidth={2} /> : <LayoutGrid size={24} strokeWidth={2} />}
                    <span className="text-[10px] font-bold mt-1">{isOpen ? 'Close' : 'Menu'}</span>
                </button>
            </div >

            {/* Full Screen Menu Overlay */}
            < AnimatePresence >
                {isOpen && (
                    <motion.div
                        initial={{ clipPath: "circle(0% at 95% 40px)" }}
                        animate={{ clipPath: "circle(150% at 95% 40px)" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                        exit={{ clipPath: "circle(0% at 95% 40px)", transition: { duration: 0.8, ease: "circIn", delay: 0.1 } }}
                        className="fixed inset-0 z-39 bg-[#0f172b] text-white overflow-hidden"
                    >
                        {/* Background shapes */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-pink-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
                            <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-violet-600/30 rounded-full blur-[120px] mix-blend-screen animate-pulse delay-1000" />
                            <div className="absolute top-[40%] left-[40%] w-[40vw] h-[40vw] bg-indigo-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse delay-2000" />
                        </div>

                        <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-6 py-24 flex items-center">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full h-full">

                                {/* Navigation Links Area (Main focus) */}
                                <div className="lg:col-span-8 flex flex-col justify-start md:justify-center space-y-2 h-full overflow-y-auto no-scrollbar pb-32 pt-34 md:pt-0">

                                    {/* Search Bar - Mobile/Menu Responsive */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="mb-8 w-full max-w-md shrink-0"
                                    >
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                placeholder="Search programs, campuses..."
                                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-pink-500 focus:bg-white/10 transition-all font-mono text-sm tracking-wide"
                                            />
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-pink-500 transition-colors">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                            </div>
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
                                                    <div
                                                        className="flex items-center justify-between group/link cursor-pointer"
                                                        onClick={() => {
                                                            if (link.subItems) {
                                                                setExpandedItem(expandedItem === link.title ? null : link.title);
                                                            }
                                                        }}
                                                    >
                                                        <NavLink
                                                            to={link.subItems ? '#' : link.path}
                                                            onClick={(e) => {
                                                                if (link.subItems) {
                                                                    e.preventDefault();
                                                                    setExpandedItem(expandedItem === link.title ? null : link.title);
                                                                } else {
                                                                    setIsOpen(false);
                                                                }
                                                            }}
                                                            className={() => {
                                                                const isPathActive = location.pathname === link.path ||
                                                                    (link.subItems && link.subItems.some(sub => location.pathname === sub.path));

                                                                return `relative inline-flex items-center text-xl md:text-3xl lg:text-4xl font-black tracking-tighter uppercase transition-colors duration-300 ${isPathActive ? 'text-white' : 'text-slate-600 hover:text-white'}`;
                                                            }}
                                                        >
                                                            <span className="absolute -left-12 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 text-pink-500 text-4xl hidden lg:block">
                                                                <ArrowRight />
                                                            </span>
                                                            <span className="relative z-10 group-hover/link:translate-x-4 transition-transform duration-300">
                                                                {link.title}
                                                            </span>
                                                        </NavLink>

                                                        {link.subItems && (
                                                            <motion.div
                                                                animate={{ rotate: expandedItem === link.title ? 180 : 0 }}
                                                                className={`p-2 transition-colors ${expandedItem === link.title ? 'text-pink-500' : 'text-slate-500 group-hover/link:text-white'}`}
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                                            </motion.div>
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
                                                                    className="overflow-hidden flex flex-col pl-4 md:pl-8 mt-4 space-y-4 border-l-2 border-pink-500/30 ml-2"
                                                                >
                                                                    {link.subItems.map((subItem) => (
                                                                        <NavLink
                                                                            key={subItem.name}
                                                                            to={subItem.path}
                                                                            onClick={() => setIsOpen(false)}
                                                                            className={({ isActive }) =>
                                                                                `group/sub relative flex items-center text-lg md:text-xl font-bold transition-all duration-300 uppercase tracking-tight ${isActive ? 'text-pink-500' : 'text-slate-400 hover:text-white'}`
                                                                            }
                                                                        >
                                                                            <span className="w-0 h-[2px] bg-pink-500 mr-0 transition-all duration-300 group-hover/sub:w-4 group-hover/sub:mr-3" />
                                                                            <span className="group-hover/sub:translate-x-1 transition-transform duration-300">
                                                                                {subItem.name}
                                                                            </span>
                                                                        </NavLink>
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
                                        <h3 className="text-pink-500 font-bold uppercase tracking-widest text-sm">Contact</h3>
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
                                        <h3 className="text-violet-500 font-bold uppercase tracking-widest text-sm">Address</h3>
                                        <div className="space-y-2 text-base text-slate-300">
                                            <h1 className="text-xl font-bold">INSD CORPORATE CENTRES</h1>
                                            <p>INSD North: A11, Gujranwala Town,</p>
                                            <p>Block A, New Delhi, Delhi 110009</p>
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
                                            {['Instagram', 'LinkedIn', 'Facebook'].map(social => (
                                                <a key={social} href="#" className="text-slate-400 hover:text-white hover:underline decoration-pink-500 underline-offset-4 transition-all">
                                                    {social}
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
