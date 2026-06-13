import { useState } from "react";
import "./Pricing.css";
import PricingCard from "./PricingCard";

// Assets
import BasicIcon from "../assets/pricing/basicAi.svg";
import StarterIcon from "../assets/pricing/starter.svg";
import PremiumIcon from "../assets/pricing/premium.svg";
import AdvancedIcon from "../assets/pricing/cash.svg"; // Apne path ke hisab se check kr lena bhai
import EnterpriseIcon from "../assets/pricing/custom.svg"; 

import PricingHeaderBg from "../assets/pricing/pricingCard.svg";

function Pricing() {
  const [activeTab, setActiveTab] = useState("AI Automation");
  const [currentSlide, setCurrentSlide] = useState(0);

  const tabs = ["AI Automation", "WhatsApp Automation", "Email Automation", "Add Ons"];

  // 🎯 Ordered exactly as requested: Premium is 3rd, Advanced is 4th
  const plans = [
    {
      icon: BasicIcon,
      title: "Basic AI Plan",
      description: "Perfect for Lead capture → Auto reply → CRM entry",
      price: "1,699",
      features: [
        "1 AI Automation Workflow",
        "Basic Process Mapping",
        "1 Platform Integration",
        "AI Prompt Setup",
        "7 Days Support",
        "Basic Training Video",
      ],
    },
    {
      icon: StarterIcon,
      title: "Starter Plan",
      description: "Perfect for businesses with Lead Qualification",
      price: "2,499",
      features: [
        "3 AI Automation Workflows",
        "Multi-step Automation",
        "2 Platform Integrations",
        "AI Chatbot Setup",
        "Lead Routing System",
        "14 Days Support",
      ],
    },
    {
      icon: PremiumIcon,
      title: "Premium Plan",
      description: "Best for Ads → AI Qualification → CRM",
      price: "4,999",
      popular: true, // Colored/Gradient active background
      features: [
        "5 Advanced AI Automations",
        "WhatsApp / Email Integration",
        "AI Lead Scoring",
        "Smart Follow-up",
        "Dashboard Tracking",
        "API Integrations",
      ],
    },
    {
      icon: AdvancedIcon,
      title: "Advanced Plan",
      description: "Great for multi-channel sync & data analytics scaling",
      price: "3,499",
      features: [
        "4 Advanced Workflows",
        "Cross-platform Syncing",
        "Custom Webhook Hooks",
        "Condition Filters Logic",
        "Priority Support Line",
        "Operational Analytics",
      ],
    },
    {
      icon: EnterpriseIcon,
      title: "Enterprise Plan",
      description: "Complete hands-off custom infrastructure and security",
      price: "7,999",
      features: [
        "Unlimited Workflows",
        "Custom LLM Fine-tuning",
        "Dedicated Server Deployment",
        "24/7 SLA Fast Response",
        "Full Team Dashboard",
        "Monthly Advisory Audits",
      ],
    },
  ];

  // 🎯 FIX: Screen khali hone se rokne ki math logic
  // Total 5 cards hain, desktop par ek sath 3 dikhte hain, toh max index shift 2 hi hona chahiye (5 - 3 = 2)
  const maxSlides = plans.length - 3; 

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlides : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === maxSlides ? 0 : prev + 1));
  };

  return (
    <section className="pricing-section">
      
      {/* Header Block */}
      <div className="pricing-header-container">
        <div className="header-bg-wrapper">
          <img src={PricingHeaderBg} alt="Pricing Header Background" className="header-svg-bg" />
          <div className="glass-overlay">
            <h1 className="pricing-title">Pricing</h1>
          </div>
        </div>
        
        <h2 className="join-text">Join <span className="brand-highlight">AdyLabs.AI</span> now</h2>
        
        <div className="pricing-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active-tab" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Slider Window */}
      <div className="pricing-slider-container">
        <div 
          className="pricing-grid" 
          /* 440px = Card Width (410px) + Gap (30px) */
          style={{ transform: `translateX(-${currentSlide * 440}px)` }} 
        >
          {plans.map((plan, index) => (
            <div key={index} className={`slide-item ${index === currentSlide ? "active-slide" : ""}`}>
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>

      {/* Slider Controls */}
      <div className="slider-nav">
        <button className="nav-arrow" onClick={handlePrev}>←</button>

        <div className="dots">
          {/* Dots bhi utne hi banyenge jitne actually valid slides hain taaki empty space na dikhe */}
          {Array.from({ length: maxSlides + 1 }).map((_, index) => (
            <span 
              key={index} 
              className={index === currentSlide ? "active" : ""}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>

        <button className="nav-arrow" onClick={handleNext}>→</button>
      </div>

    </section>
  );
}

export default Pricing;