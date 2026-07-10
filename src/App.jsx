import React, { useState, useEffect } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateDetail from "./components/JsonMarketplace/TemplateDetail"; 

import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import ScrollToTop from "./components/ScrollToTop";
import JsonMarketplace from "./components/JsonMarketplace/JsonMarketplaceButton";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import GetInTouchModal from './components/GetInTouchModal';

function App() {
  const [showGlobalModal, setShowGlobalModal] = useState(true); // Default true taaki website khulte hi turant aaye
  const [globalModalCount, setGlobalModalCount] = useState(1); // Pehla trigger on load

  // 10 Seconds Re-trigger Logic for normal browsing (sirf ek baar aur aane ke liye)
  useEffect(() => {
    let timer;
    if (!showGlobalModal && globalModalCount === 1) {
      timer = setTimeout(() => {
        setShowGlobalModal(true);
        setGlobalModalCount(2); // Count badha diya taaki iske baad dubara na aaye
      }, 10000); // Exact 10 seconds ka delay
    }
    return () => clearTimeout(timer);
  }, [showGlobalModal, globalModalCount]);

  return (
    <Router>
      <ScrollToTop />
      
      {/* Global normal popup (Saari details wala) */}
      {showGlobalModal && (
        <GetInTouchModal 
          isForced={false} 
          onClose={() => setShowGlobalModal(false)} 
          onSubmitSuccess={() => setShowGlobalModal(false)} 
        />
      )}

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/marketplace" element={<JsonMarketplace />} />
        {/* Template Detail page apna forced lock modal khud handle karega */}
        <Route path="/template-detail" element={<TemplateDetail />} />
      </Routes>

      <Footer />
      <FloatingWidgets />
    </Router>
  );
}

export default App;