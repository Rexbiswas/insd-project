import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const About = lazy(() => import('./pages/About'));
const Awards = lazy(() => import('./pages/Awards'));
const Student = lazy(() => import('./pages/Student'));
const IndustryPotential = lazy(() => import('./pages/IndustryPotential'));
const Placement = lazy(() => import('./pages/Placement'));
const Campus = lazy(() => import('./pages/Campus'));
const Franchise = lazy(() => import('./pages/Franchise'));
const Insd360 = lazy(() => import('./pages/Insd360'));
const Admission = lazy(() => import('./pages/Admission'));
const InternationalPartner = lazy(() => import('./pages/InternationalPartner'));
const ParisCDP = lazy(() => import('./pages/Paris(CDP)'));
const Undergraduate = lazy(() => import('./pages/Undergraduate'));
const Postgraduate = lazy(() => import('./pages/Postgraduate'));
const DiplomaAndCertificate = lazy(() => import('./pages/DiplomaAndCertificate'));
const ShortTermCourse = lazy(() => import('./pages/ShortTermCourse'));
const Contact = lazy(() => import('./pages/Contact'));
const GoGlobal = lazy(() => import('./pages/GoGlobal'));
const MscLuxury = lazy(() => import('./pages/MscLuxury'));
const StudentCareers = lazy(() => import('./pages/StudentCareers'));
const OnlineCourse = lazy(() => import('./pages/OnlineCourse'));
const Blog = lazy(() => import('./pages/Blog'));
const FashionWeek = lazy(() => import('./pages/FashionWeek'));
const ParisProject = lazy(() => import('./pages/ParisProject'));
const Events = lazy(() => import('./pages/Events'));

const ProfileDashboard = lazy(() => import('./pages/ProfileDashboard'));
const Insdian = lazy(() => import('./pages/Insdian'));
const FashionDesigning = lazy(() => import('./pages/FashionDesigning'));
const InteriorDesigning = lazy(() => import('./pages/InteriorDesigning'));
const GraphicDesigning = lazy(() => import('./pages/GraphicDesigning'));
const AnimationAndVFX = lazy(() => import('./pages/AnimationAndVFX'));
const JewelleryDesigning = lazy(() => import('./pages/JewelleryDesigning'));
const UIUXDesigning = lazy(() => import('./pages/UIUXDesigning'));
const BeautyAndMakeup = lazy(() => import('./pages/BeautyAndMakeup'));
const Photography = lazy(() => import('./pages/Photography'));
const TextileDesigning = lazy(() => import('./pages/TextileDesigning'));
const SuccessStory = lazy(() => import('./pages/SuccessStory'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Components
import BackToTop from './components/BackToTop';
import WhatsappCTA from './components/WhatsappCTA';
import StepLeadCTA from './components/StepLeadCTA';
import WebSkeleton from './components/WebSkeleton';
import RegistrationModal from './components/RegistrationModal';
import AIChatbot from './components/AIChatbot';
import { RegisterModalProvider } from './context/RegisterModalContext';
import { AuthProvider } from './context/AuthContext';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    React.useEffect(() => {
        setTimeout(() => {
            import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                ScrollTrigger.refresh();
            });
        }, 500);
    }, []);

    return (
        <AuthProvider>
            <RegisterModalProvider>
                <Router>
                    <Suspense fallback={<WebSkeleton />}>
                        <Navbar />
                        <div className="transition-opacity duration-1000 opacity-100">
                            <RegistrationModal />
                            <ScrollToTop />
                            <div className="relative z-0 bg-white min-h-screen pb-24 md:pb-0 overflow-x-hidden">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about-us" element={<About />} />
                                    <Route path="/awards" element={<Awards />} />
                                    <Route path="/student" element={<Student />} />
                                    <Route path="/industry-potential" element={<IndustryPotential />} />
                                    <Route path="/placement" element={<Placement />} />
                                    <Route path="/campuses" element={<Campus />} />
                                    <Route path="/campuses/:campusId" element={<Campus />} />
                                    <Route path="/campuses/paris-cdp" element={<ParisCDP />} />
                                    <Route path="/courses" element={<Courses />} />
                                    <Route path="/courses/undergraduate" element={<Undergraduate />} />
                                    <Route path="/courses/postgraduate" element={<Postgraduate />} />
                                    <Route path="/courses/diploma-and-certificates" element={<DiplomaAndCertificate />} />
                                    <Route path="/courses/short-term-courses" element={<ShortTermCourse />} />
                                    <Route path="/courses/msc-luxury-brand-management" element={<MscLuxury />} />
                                    <Route path="/courses/fashion-designing" element={<FashionDesigning />} />
                                    <Route path="/courses/interior-designing" element={<InteriorDesigning />} />
                                    <Route path="/courses/graphic-designing" element={<GraphicDesigning />} />
                                    <Route path="/courses/animation-and-vfx" element={<AnimationAndVFX />} />
                                    <Route path="/courses/jewellery-designing" element={<JewelleryDesigning />} />
                                    <Route path="/courses/uiux-designing" element={<UIUXDesigning />} />
                                    <Route path="/courses/beauty-and-makeup" element={<BeautyAndMakeup />} />
                                    <Route path="/courses/photography" element={<Photography />} />
                                    <Route path="/courses/textile-designing" element={<TextileDesigning />} />
                                    <Route path="/student-careers" element={<StudentCareers />} />
                                    <Route path="/insd-360" element={<Insd360 />} />
                                    <Route path="/franchise" element={<Franchise />} />
                                    <Route path="/contact-us" element={<Contact />} />
                                    <Route path="/go-global" element={<GoGlobal />} />
                                    <Route path="/international-partners" element={<InternationalPartner />} />
                                    <Route path="/apply" element={<Admission />} />
                                    <Route path="/courses/online-courses" element={<OnlineCourse />} />
                                    <Route path="/insd-360/blog" element={<Blog />} />
                                    <Route path="/insd-360/fashion-week" element={<FashionWeek />} />
                                    <Route path="/insd-360/paris-project" element={<ParisProject />} />
                                    <Route path="/events" element={<Events />} />
                                    <Route path="/insdian" element={<Insdian />} />
                                    <Route path="/profile" element={<ProfileDashboard />} />
                                    <Route path="/success-stories" element={<SuccessStory />} />
                                    <Route path="/gallery" element={<Gallery />} />

                                    <Route path="/test-404" element={<NotFound />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </div>
                            <WhatsappCTA />
                            <StepLeadCTA />
                            <BackToTop />
                            <AIChatbot />
                            <Analytics />
                            <SpeedInsights />
                        </div>
                    </Suspense>
                </Router>
            </RegisterModalProvider>
        </AuthProvider>
    );
}

export default App;