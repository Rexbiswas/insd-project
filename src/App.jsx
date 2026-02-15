import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';


import About from './pages/About';
import Campus from './pages/Campus';
import Franchise from './pages/Franchise';
import Admission from './pages/Admission';
import Loader from './components/Loader';
import BackToTop from './components/BackToTop';

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

import { RegisterModalProvider } from './context/RegisterModalContext';
import RegistrationModal from './components/RegistrationModal';

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
            <Route path="/student-careers" element={<Placeholder title="Student Careers" />} />
            <Route path="/insd-360" element={<Placeholder title="INSD 360" />} />
            <Route path="/franchise" element={<Franchise />} />
            <Route path="/contact-us" element={<Placeholder title="Contact Us" />} />
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