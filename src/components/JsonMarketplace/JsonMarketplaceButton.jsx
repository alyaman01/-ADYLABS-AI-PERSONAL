import { useState, useEffect, useRef } from "react";
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
import TemplateDetail from "./TemplateDetail"; 

function JsonMarketplaced() {
  const [activeTag, setActiveTag] = useState("AI");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  // 🎯 SCROLL REF FOR BOXES
  const resultsSectionRef = useRef(null);

  const tags = ["AI", "Sales", "IT ops", "Marketing", "AI Ads", "Social media", "Support"];

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setIsSearching(false);
      return;
    }
    setIsSearching(true);
    const delayDebounceFn = setTimeout(() => {
      setIsSearching(false);
    }, 450);
    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery]);

  // 🎯 SCROLL FUNCTION
  const handleSearchScroll = () => {
    if (resultsSectionRef.current) {
      resultsSectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle Enter Key Press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchScroll();
    }
  };

  if (selectedTemplate) {
    return (
      <TemplateDetail 
        filename={selectedTemplate} 
        onBack={() => setSelectedTemplate(null)} 
      />
    );
  }

  return (
    <div className="marketplace-container" style={{ backgroundImage: `url(${marketplaceBg})` }}>
      
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
          onKeyDown={handleKeyDown} // ⚡ Enter key check
          className="marketplace-search-input"
        />

        {/* 🔄 Dynamic Search Icon Trigger */}
        <div className="search-icon-wrapper" onClick={handleSearchScroll} style={{ cursor: "pointer" }}>
          {isSearching ? (
            <div className="search-spinner-loader"></div>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7e7e7e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          )}
        </div>
      </div>

      <div className="filter-tags-row">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-pill-btn ${activeTag === tag ? "pill-active" : ""}`}
            onClick={() => {
              setActiveTag(tag);
              setIsSearching(true);
              setTimeout(() => {
                setIsSearching(false);
                handleSearchScroll(); // ⚡ Tag click par bhi auto scroll
              }, 300);
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="marketplace-action-block">
        <button className="market-book-call-cta">
          <span>Book Free Call</span>
          <svg className="cta-arrow-svg" width="22" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </button>
      </div>

      <Brands/>
      
      {/* 🎯 TARGET SECTION FOR SCROLL */}
      <div ref={resultsSectionRef} style={{ scrollMarginTop: "40px" }}>
        <JsonSecondSection 
          searchQuery={searchQuery} 
          onSelectCard={(filename) => setSelectedTemplate(filename)} 
        />      
      </div>

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