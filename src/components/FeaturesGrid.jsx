import React from 'react';
import './FeaturesGrid.css';

// 📁 Code paths as per your project setup
import BrandLogo from '../assets/logos/mainlogo.jpeg'; 
import IconMonthly from '../assets/mapSection/monthly.svg';
import IconRequests from '../assets/mapSection/unlimited.svg';
import IconRevisions from '../assets/mapSection/revesion.svg';
import IconDelivery from '../assets/mapSection/sameday.svg';
import IconDesigners from '../assets/mapSection/professional.svg';
import IconMatch from '../assets/mapSection/designer.svg';

const FeaturesGrid = () => {
  const featuresData = [
    {
      id: 1,
      icon: IconMonthly,
      title: "Fixed monthly rate",
      desc: "No hidden costs. Pay the same price every month."
    },
    {
      id: 2,
      icon: IconRequests,
      title: "Unlimited requests",
      desc: "Don't limit your creativity. Request as many designs as you need."
    },
    {
      id: 3,
      icon: IconRevisions,
      title: "Unlimited revisions",
      desc: "Request changes without limits. We iterate until you say it's perfect."
    },
    {
      id: 4,
      icon: IconDelivery,
      title: "Same-day delivery",
      desc: "Receive your designs on the same day with our higher-tier package."
    },
    {
      id: 5,
      icon: IconDesigners,
      title: "Professional designers",
      desc: "Work with experienced designers who bring creativity and precision to every project."
    },
    {
      id: 6,
      icon: IconMatch,
      title: "Designer match",
      desc: "Each request goes to the most qualified designer for the job."
    }
  ];

  return (
    <section className="features-grid-section">
      <div className="features-main-wrapper">
        
        {/* 📈 1st Banner Row: Heading & Magnified Stats Cards */}
        <div className="stats-top-split-row">
          
          {/* Left Large Branding Typography Layout */}
          <div className="stats-brand-branding-box">
            <h2 className="collab-main-heading">Why<br />Collaborate With</h2>
            <div className="collab-brand-identity">
              <img src={BrandLogo} alt="AdyLabs AI Logo" className="collab-brand-logo-img" />
              <span className="collab-brand-name-gold">AdyLabs AI</span>
            </div>
          </div>

          {/* Right Heavy Grid Counters Layout */}
          <div className="stats-numerical-quad-grid">
            <div className="stat-counter-mini-card dynamic-hover-card">
              <h3>350+</h3>
              <p>PROJECT DELEVERED</p>
            </div>
            <div className="stat-counter-mini-card dynamic-hover-card">
              <h3>89%</h3>
              <p>GROWTH IN REVENUE</p>
            </div>
            <div className="stat-counter-mini-card dynamic-hover-card">
              <h3>150+</h3>
              <p>SKILLED PROFESSIONALS</p>
            </div>
            <div className="stat-counter-mini-card dynamic-hover-card">
              <h3>25+</h3>
              <p>COUNTRIES SERVED WORLDWIDE</p>
            </div>
          </div>

        </div>

        {/* 📊 2nd Grid Row: 6 Expanded Cards Layout */}
        <div className="features-inner-container">
          {featuresData.map((feature) => (
            <div key={feature.id} className="feature-premium-card dynamic-hover-card">
              <div className="feature-icon-wrapper">
                <img src={feature.icon} alt={feature.title} className="feature-actual-icon" />
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-desc">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturesGrid;