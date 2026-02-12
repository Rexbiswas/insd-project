import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Page from './pages/Page';
import Loader from './components/Loader';

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
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      {!loading && (
        <Router>
          <ScrollToTop />
          <Navbar />
          <div className="relative z-0 bg-slate-50 min-h-screen pb-24 md:pb-0">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<Page title="About Us" />} />
              <Route path="/courses" element={<Page title="Courses" />} />
              <Route path="/campuses" element={<Page title="Campuses" />} />
              <Route path="/student-careers" element={<Page title="Student Careers" />} />
              <Route path="/insd-360" element={<Page title="INSD 360" />} />
              <Route path="/franchise" element={<Page title="Franchise" />} />
              <Route path="/contact-us" element={<Page title="Contact Us" />} />
              <Route path="/apply" element={<Page title="Apply Now" />} />
              <Route path="*" element={<Page title="404 Not Found" />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;