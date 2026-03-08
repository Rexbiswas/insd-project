import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Courses = lazy(() => import('./pages/Courses'));
const About = lazy(() => import('./pages/About'));
const Campus = lazy(() => import('./pages/Campus'));
const Franchise = lazy(() => import('./pages/Franchise'));
const Insd360 = lazy(() => import('./pages/Insd360'));
const Admission = lazy(() => import('./pages/Admission'));
const InternationalPartner = lazy(() => import('./pages/InternationalPartner'));
const SouthDelhi = lazy(() => import('./pages/SouthDelhi'));
const NorthDelhi = lazy(() => import('./pages/NorthDelhi'));
const ParisCDP = lazy(() => import('./pages/Paris(CDP)'));
const WashingtonIBSW = lazy(() => import('./pages/WashingtonIBSW'));
const DubaiIBSW = lazy(() => import('./pages/DubaiIBSW'));
const UnitedKingdomUCA = lazy(() => import('./pages/UnitedKingdomUCA'));
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
const SuccessStory = lazy(() => import('./pages/SuccessStory'));
const Gallery = lazy(() => import('./pages/Gallery'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Components
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import WhatsappCTA from './components/WhatsappCTA';
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
    const [loading, setLoading] = useState(true);

    React.useEffect(() => {
        if (!loading) {
            setTimeout(() => {
                import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
                    ScrollTrigger.refresh();
                });
            }, 500);
        }
    }, [loading]);

    return (
        <AuthProvider>
            <RegisterModalProvider>
                <AnimatePresence mode="wait">
                    {loading && <Loader key="loader" setLoading={setLoading} />}
                </AnimatePresence>

                <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
                    <RegistrationModal />

                    <Router>
                        <ScrollToTop />
                        <Navbar />
                        <div className="relative z-0 bg-white min-h-screen pb-24 md:pb-0 overflow-x-hidden">
                            <Suspense fallback={<WebSkeleton />}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/about-us" element={<About />} />
                                    <Route path="/campuses" element={<Campus />} />
                                    <Route path="/campuses/south-delhi" element={<SouthDelhi />} />
                                    <Route path="/campuses/north-delhi" element={<NorthDelhi />} />
                                    <Route path="/campuses/paris" element={<ParisCDP />} />
                                    <Route path="/campuses/washington" element={<WashingtonIBSW />} />
                                    <Route path="/campuses/dubai" element={<DubaiIBSW />} />
                                    <Route path="/campuses/uk" element={<UnitedKingdomUCA />} />
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
                                    <Route path="/insd-360/events" element={<Events />} />
                                    <Route path="/insdian" element={<Insdian />} />
                                    <Route path="/profile" element={<ProfileDashboard />} />
                                    <Route path="/success-stories" element={<SuccessStory />} />
                                    <Route path="/gallery" element={<Gallery />} />

                                    <Route path="/test-404" element={<NotFound />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Suspense>
                        </div>
                        <WhatsappCTA />
                        <BackToTop />
                        <AIChatbot />
                    </Router>
                </div>
            </RegisterModalProvider>
        </AuthProvider>
    );
}

export default App;