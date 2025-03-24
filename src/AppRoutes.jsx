import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Hero from './components/hero/Hero';

const AppRoutes = () => {
  return (
    <Router>
 <Navbar/>
 <Hero/>    
    <Routes>
        <Route>
        </Route>
    </Routes>
   </Router>
  )
}

export default AppRoutes
