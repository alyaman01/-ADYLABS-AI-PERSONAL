import React from 'react';
import './TrustShowcase.css';

// 📁 Apne images directory se saare matching gold-tint icons import kar lo bhai
import IconGoogle from '../assets/trustSection/google.svg';
import IconNotion from '../assets/trustSection/notion.svg';
import IconSlack from '../assets/trustSection/slack.svg';
import IconChatGPT from '../assets/trustSection/chatgpt.svg';
import IconWhatsApp from '../assets/trustSection/whatshapp.svg';
import IconPowerBI from '../assets/trustSection/lines.svg'; // Jo upar center me h 

const TrustShowcase = () => {
  return (
    <section className="trust-showcase-section">
      <div className="trust-inner-card-board">
        
        {/* Upper Split Split Row Layout */}
        <div className="trust-upper-split">
          
          {/* Left Text and Inline Metrics Block */}
          <div className="trust-left-content">
            <h2 className="trust-main-heading">Trusted by teams at</h2>
            <p className="trust-sub-paragraph">
              Frome Fast - Growling Startups To Fortune 500 Companies <br />
              Top Brands Trust Us Trust Their Digital Future
            </p>

            <div className="trust-why-metric-box">
              <h4 className="trust-here-is-why-lbl">Here Is Why</h4>
              
              <div className="inline-metric-item">
                <span className="metric-gold-num">99.99</span>
                <span className="metric-dark-text">Uptime Across Services</span>
              </div>
              
              <div className="inline-metric-item">
                <span className="metric-gold-num">50M+</span>
                <span className="metric-dark-text">User Served From The Platform</span>
              </div>
            </div>
          </div>

          {/* Right Brand Grid Layout (3x2 Matrix matching mockup) */}
          <div className="trust-brands-gold-matrix">
            <div className="brand-matrix-icon-slot"><img src={IconGoogle} alt="Google" /></div>
            <div className="brand-matrix-icon-slot"><img src={IconPowerBI} alt="Analytics" /></div>
            <div className="brand-matrix-icon-slot"><img src={IconNotion} alt="Notion" /></div>
            <div className="brand-matrix-icon-slot"><img src={IconSlack} alt="Slack" /></div>
            <div className="brand-matrix-icon-slot"><img src={IconChatGPT} alt="ChatGPT" /></div>
            <div className="brand-matrix-icon-slot"><img src={IconWhatsApp} alt="WhatsApp" /></div>
          </div>

        </div>

        {/* Lower Horizontal Highlight Pill Cards */}
        <div className="trust-lower-stats-row">
          <div className="stat-pill-outline-box dynamic-trust-hover">
            <span className="stat-pill-label">Projects</span>
            <h3 className="stat-pill-big-number">200+</h3>
          </div>
          
          <div className="stat-pill-outline-box dynamic-trust-hover">
            <span className="stat-pill-label">Countries</span>
            <h3 className="stat-pill-big-number">25+</h3>
          </div>
          
          <div className="stat-pill-outline-box dynamic-trust-hover">
            <span className="stat-pill-label">Avg CSAT</span>
            <h3 className="stat-pill-big-number">4.9 / 5</h3>
          </div>
        </div>

        {/* CTA Button Block */}
        <div className="trust-cta-action-container">
          <button className="trust-book-call-btn">
            BOOK A CALL <span className="arrow-icon-shift">➔</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default TrustShowcase;