import React from 'react';
import "./App.css";
// 1. Router ke tools import kiye
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TemplateDetail from "./components/JsonMarketplace/TemplateDetail"; // Path sahi check kar lena

// 2. Global elements jo hamesha dikhenge
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import FloatingWidgets from "./components/FloatingWidgets";
import GetInTouchModal from './components/GetInTouchModal';
import ScrollToTop from './components/ScrollToTop';
import JsonMarketplace from './components/JsonMarketplace/JsonMarketplaceButton';
// 3. Humare dono main pages (Home aur ContactUs)
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Router>

    <GetInTouchModal/>
    <ScrollToTop/>

      <Navbar />

      {/* Routes check karega browser ke URL ko */}
      <Routes>
        {/* Jab normal website khule (/) toh saara purana Home content dikhao */}
        <Route path="/" element={<Home />} />
        
        {/* Jab URL me /contact ho, toh naya ContactUs page dikhao */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/marketplace" element={<JsonMarketplace />} />
        <Route path="/template-detail" element={<TemplateDetail />} />
      </Routes>

      <Footer />
      <FloatingWidgets />
    </Router>
  );
}

export default App;