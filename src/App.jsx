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
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';
import StudentCareers from './pages/StudentCareers';

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

  return (
    <RegisterModalProvider>
      <AnimatePresence>
        {loading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      <RegistrationModal />

      <Router>
        <ScrollToTop />
        <Navbar />
        <div className="relative z-0 bg-slate-50 min-h-screen pb-24 md:pb-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/campuses" element={<Campus />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/undergraduate" element={<Undergraduate />} />
            <Route path="/student-careers" element={<StudentCareers />} />
            <Route path="/insd-360" element={<Insd360 />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/go-global" element={<GoGlobal />} />
            <Route path="/international-partners" element={<InternationalPartner />} />
            <Route path="/apply" element={<Admission />} />
            <Route path="*" element={<Placeholder title="404 Not Found" />} />
          </Routes>
        </div>
        <BackToTop />
      </Router>
    </RegisterModalProvider>
  );
}


export default App;