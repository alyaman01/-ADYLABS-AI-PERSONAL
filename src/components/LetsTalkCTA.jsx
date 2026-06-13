import React from 'react';
import './LetsTalkCTA.css';

function LetsTalkCTA() {
  return (
    <section className="cta-outer-section">
      <div className="cta-yellow-border-box">
        
        {/* BIG LET'S TALK TEXT WITH GRADIENT */}
        <h1 className="cta-main-title">Let's Talk</h1>

        {/* MID SUBTITLE */}
        <p className="cta-sub-heading">We are Excited to Be a Part of Your</p>

        {/* MULTI-COLOR MIXED HIGHLIGHT TEXT */}
        <h2 className="cta-project-highlight">
          <span className="text-teal">Next </span>
          <span className="text-brown">Big </span>
          <span className="text-orange">Project!</span>
        </h2>

        {/* BIG ROUNDED CONTACT BUTTON */}
        <div className="cta-btn-wrapper">
          <button className="cta-contact-btn">Contact US</button>
        </div>

      </div>
    </section>
  );
}

export default LetsTalkCTA;