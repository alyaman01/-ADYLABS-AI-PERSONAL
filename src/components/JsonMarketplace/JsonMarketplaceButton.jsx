import { useState, useEffect } from "react";
import "./JsonMarketplaceButton.css";
import marketplaceBg from "../../assets/marketplace/jsonHome.png"; 
import Brands from "../brands";
import JsonSecondSection from "./JsonSecondSection";
import BonusSection from "./BonusSection";
import PricingBonusTable from "../PricingBonusTable";
import WhyChooseUs from "../WhyChooseUs";
import WorkingProcess from "../WorkingProcess";
import TestimonialSlider from "../TestimonialSlider";
import FaqSection from "../FaqSection";
import ContactEnquiry from "../ContactEnquiry";
import LetsTalkCTA from "../LetsTalkCTA";

// 🎯 DYNAMIC DETAIL PAGE IMPORT
import TemplateDetail from "./TemplateDetail"; 

function JsonMarketplaced() {
  const [activeTag, setActiveTag] = useState("AI");
  const [searchQuery, setSearchQuery] = useState("");
  
  // ⏳ SEARCHING LOADER STATES
  const [isSearching, setIsSearching] = useState(false);

  // 🎯 SINGLE PAGE CONTROLLER STATE
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const tags = ["AI", "Sales", "IT ops", "Marketing", "AI Ads", "Social media", "Support"];

  // ⚡ DEBOUNCE EFFECT FOR SEARCHING EFFECT
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsSearching(false);
      return;
    }

    // Jaise hi user type karna shuru karega, loading chalu
    setIsSearching(true);

    // 400ms tak agar user ne typing roki, toh loading band ho jayegi (results up-to-date)
    const delayDebounceFn = setTimeout(() => {
      setIsSearching(false);
    }, 450);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // 🎯 AGAR USER NE CARD PAR CLICK KIYA HAI:
  if (selectedTemplate) {
    return (
      <TemplateDetail 
        filename={selectedTemplate} 
        onBack={() => setSelectedTemplate(null)} 
      />
    );
  }

  return (
    <div 
      className="marketplace-container" 
      style={{ backgroundImage: `url(${marketplaceBg})` }}
    >
      
      {/* 🌟 Top Headings */}
      <div className="marketplace-header">
        <h3>3000+ Workflow</h3>
        <h2>Automation Templates</h2>
      </div>

      {/* 🔍 Search Box Section */}
      <div className="search-box-container" style={{ position: 'relative' }}>
        {activeTag && (
          <div className="input-active-tag">
            <span>{activeTag}</span>
            <button className="clear-tag-btn" onClick={() => setActiveTag("")}>✕</button>
          </div>
        )}

        <input 
          type="text" 
          placeholder="Search Json Template, Role, Usecases"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="marketplace-search-input"
        />

        {/* 🔄 DYNAMIC SEARCH ICON / SPINNER */}
        <div className="search-icon-wrapper">
          {isSearching ? (
            /* Premium CSS Loader Spinner */
            <div className="search-spinner-loader"></div>
          ) : (
            /* Normal Search Lens Icon */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7e7e7e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          )}
        </div>

        {/* ⚡ OPTIONAL: Choti niche flashing status line bar user ke feedback ke liye */}
        {isSearching && (
          <div className="search-status-text" style={{ position: 'absolute', bottom: '-22px', left: '15px', fontSize: '12px', color: '#ff9800', fontWeight: '500', animation: 'pulse 1s infinite' }}>
            Searching database...
          </div>
        )}
      </div>

      {/* 🏷️ Filter Pills Category */}
      <div className="filter-tags-row">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-pill-btn ${activeTag === tag ? "pill-active" : ""}`}
            onClick={() => {
              setActiveTag(tag);
              // Jab category tab change ho tab bhi thoda loading effect de dete hain seamless feel ke liye
              setIsSearching(true);
              setTimeout(() => setIsSearching(false), 300);
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 📞 🎯 FIXED: ALWAYS ANIMATED ARROW WITH PREMIUM BLACK THEME */}
      <div className="marketplace-action-block">
        <button className="market-book-call-cta">
          <span>Book Free Call</span>
          <svg 
            className="cta-arrow-svg" 
            width="22" 
            height="18" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      {/* Internal Sub Sections */}
      <Brands/>
      
      {/* Dynamic Results Grid Section */}
      <JsonSecondSection 
        searchQuery={searchQuery} 
        onSelectCard={(filename) => setSelectedTemplate(filename)} 
      />      
      
      <BonusSection/>
      <PricingBonusTable/>
      <WhyChooseUs/>
      <WorkingProcess/>
      <TestimonialSlider/>
      <FaqSection/>
      <ContactEnquiry/>
      <LetsTalkCTA/>
    </div>
  );
}

export default JsonMarketplaced;