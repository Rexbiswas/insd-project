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
import Undergraduate from './pages/Undergraduate';
import Contact from './pages/Contact';
import GoGlobal from './pages/GoGlobal';
import MscLuxury from './pages/MscLuxury';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import StudentCareers from './pages/StudentCareers';
import OnlineCourse from './pages/OnlineCourse';
import Blog from './pages/Blog';
import FashionWeek from './pages/FashionWeek';
import WhatsappCTA from './components/WhatsappCTA';


import { RegisterModalProvider } from './context/RegisterModalContext';
import RegistrationModal from './components/RegistrationModal';

const Placeholder = ({ title }) => (
  <div className="min-h-screen flex items-center justify-center bg-slate-50">
    <h1 className="text-4xl font-black uppercase tracking-tighter text-slate-300">{title} Coming Soon</h1>
  </div>
);

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
    <RegisterModalProvider>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <RegistrationModal />

        <Router>
          <ScrollToTop />
          <Navbar />
          <div className="relative z-0 bg-slate-50 min-h-screen pb-24 md:pb-0 overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<About />} />
              <Route path="/campuses" element={<Campus />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/courses/undergraduate" element={<Undergraduate />} />
              <Route path="/courses/msc-luxury-brand-management" element={<MscLuxury />} />
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

              <Route path="*" element={<Placeholder title="404 Not Found" />} />
            </Routes>
          </div>
          <WhatsappCTA />
          <BackToTop />
        </Router>
      </div>
    </RegisterModalProvider>
  );
}

export default App;