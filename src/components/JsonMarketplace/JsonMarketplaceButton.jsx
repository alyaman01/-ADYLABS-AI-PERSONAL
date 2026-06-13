import { useState } from "react";
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

// 🎯 DYNAMIC DETAIL PAGE IMPORT (Jahan n8n automation screen chalegi)
import TemplateDetail from "./TemplateDetail"; 

function JsonMarketplaced() {
  const [activeTag, setActiveTag] = useState("AI");
  const [searchQuery, setSearchQuery] = useState("");
  
  // 🎯 SINGLE PAGE CONTROLLER STATE (Bina routing ke screen change karne ke liye)
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const tags = ["AI", "Sales", "IT ops", "Marketing", "AI Ads", "Social media", "Support"];

  // 🎯 AGAR USER NE CARD PAR CLICK KIYA HAI: Toh direct detail page render hoga
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
      <div className="search-box-container">
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

        <div className="search-icon-wrapper">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7e7e7e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
      </div>

      {/* 🏷️ Filter Pills Category */}
      <div className="filter-tags-row">
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-pill-btn ${activeTag === tag ? "pill-active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* 📞 Bottom Button */}
      <div className="marketplace-action-block">
        <button className="market-book-call-cta">Book Free Call</button>
      </div>

      {/* Internal Sub Sections */}
      <Brands/>
      
      {/* 🎯 SECOND SECTION: Isme props pass kiya hai click trigger ke liye */}
      <JsonSecondSection onSelectCard={(filename) => setSelectedTemplate(filename)} />
      
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