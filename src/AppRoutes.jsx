import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/hero/Hero";
import Mac from "./components/navbarFeatures/Mac";
import Ipad from "./components/navbarFeatures/Ipad";
import Iphone from "./components/navbarFeatures/Iphone";

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);

// Animation variants for route transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const AnimatedRoutes = () => {
  const location = useLocation(); // Detects route changes

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div key={location.pathname} initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <Routes location={location}>
          <Route path="/" element={<Layout><Hero /></Layout>} />
          <Route path="/mac" element={<Layout><Mac /></Layout>} />
          <Route path="/ipad" element={<Layout><Ipad /></Layout>} />
          <Route path="/iphone" element={<Layout><Iphone /></Layout>} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const AppRoutes = () => (
  <Router>
    <AnimatedRoutes />
  </Router>
);

export default AppRoutes;
