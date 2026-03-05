import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';


import About from './pages/About';
import Campus from './pages/Campus';
import Franchise from './pages/Franchise';
import Insd360 from './pages/Insd360';
import Admission from './pages/Admission';
import InternationalPartner from './pages/InternationalPartner';
import SouthDelhi from './pages/SouthDelhi';
import NorthDelhi from './pages/NorthDelhi';
import ParisCDP from './pages/Paris(CDP)';
import WashingtonIBSW from './pages/WashingtonIBSW';
import DubaiIBSW from './pages/DubaiIBSW';
import UnitedKingdomUCA from './pages/UnitedKingdomUCA';
import Undergraduate from './pages/Undergraduate';
import Postgraduate from './pages/Postgraduate';
import DiplomaAndCertificate from './pages/DiplomaAndCertificate';
import ShortTermCourse from './pages/ShortTermCourse';
import Contact from './pages/Contact';
import GoGlobal from './pages/GoGlobal';
import MscLuxury from './pages/MscLuxury';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import StudentCareers from './pages/StudentCareers';
import OnlineCourse from './pages/OnlineCourse';
import Blog from './pages/Blog';
import FashionWeek from './pages/FashionWeek';
import ParisProject from './pages/ParisProject';
import Events from './pages/Events';
import WhatsappCTA from './components/WhatsappCTA';
// import AIChatbot from './components/AIChatbot';


import { RegisterModalProvider } from './context/RegisterModalContext';
import RegistrationModal from './components/RegistrationModal';
import { AuthProvider } from './context/AuthContext';
import ProfileDashboard from './pages/ProfileDashboard';
import Insdian from './pages/Insdian';
import FashionDesigning from './pages/FashionDesigning';
import InteriorDesigning from './pages/InteriorDesigning';
import GraphicDesigning from './pages/GraphicDesigning';
import AnimationAndVFX from './pages/AnimationAndVFX';
import SuccessStory from './pages/SuccessStory';

import NotFound from './pages/NotFound';

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

                <Route path="/test-404" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
            <WhatsappCTA />
            <BackToTop />
            {/* <AIChatbot /> */}
          </Router>
        </div>
      </RegisterModalProvider>
    </AuthProvider>
  );
}

export default App;