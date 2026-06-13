import React from "react";
import "./TemplateInfo.css";

import ProfileImg from "../../assets/marketplace/yashpic.svg";
import VerifyIcon from "../../assets/marketplace/verifyed.png";

function TemplateInfo({ filename }) {
  return (
    <div className="template-lower-info-section">
      
      {/* LEFT COLUMN: META STATS */}
      <div className="lower-left-meta">
        
        <div className="meta-block">
          <h4>CREATED BY</h4>
          <div className="author-row">
            <img src={ProfileImg} alt="Author" className="author-avatar" />
            <span className="author-name">Yashveer Giri</span>
            <img src={VerifyIcon} alt="Verified" className="verify-icon-small" />
          </div>
        </div>

        <div className="meta-block">
          <h4>LAST UPDATE</h4>
          <p className="update-text">Last update 11 days ago</p>
        </div>

        <div className="meta-block">
          <h4>CATEGORIES</h4>
          <div className="category-tags-wrap">
            <span className="cat-tag">Personal Productivity</span>
            <span className="cat-tag">AI Chat Bot</span>
          </div>
        </div>

        <div className="meta-block">
          <h4>SHARE</h4>
          <div className="share-social-row">
            <button className="share-circle-btn link-icon" onClick={() => navigator.clipboard.writeText(window.location.href)} title="Copy Link">🔗</button>
            <button className="share-circle-btn x-icon" title="Share on X">𝕏</button>
            <button className="share-circle-btn in-icon" title="Share on LinkedIn">in</button>
          </div>
        </div>

      </div>

      {/* RIGHT COLUMN: TEXT DOCUMENT DETAILS */}
      <div className="lower-right-details">
        <h2>Details of the service</h2>
        
        {/* 🎯 FIXED: IS BOX KE ANDAR SAARA TEXT SIDE MEIN VERTICALLY SCROLL HOGA */}
        <div className="scrollable-text-box">
          
          <h3>How it works:</h3>
          <p className="details-para-text">
            This project teaches you to create a personal AI assistant named Jackie that operates through Telegram. 
            Jackie can summarize unread emails, check calendar events, manage Google Tasks, and handle both voice 
            and text interactions. The assistant provides a comprehensive digital life management solution accessible 
            via Telegram messaging.
          </p>

          <h3>Key Features:</h3>
          <ul className="features-list-points">
            <li>Supports hands-free voice interaction</li>
            <li>Maintains conversation memory</li>
            <li>Integrates with major Google services</li>
            <li>Provides personalized assistance for email management, scheduling, and task organization</li>
          </ul>

          <p className="step-tag-text">Step-by-step:</p>
          <h3>Telegram Trigger:</h3>
          <p className="details-para-text">
            The workflow starts with a Telegram trigger that listens for incoming message events. The system 
            determines if the incoming message is voice or text input.
          </p>

          <h3>Voice Processing:</h3>
          <p className="details-para-text">
            Processes incoming audio streams using advanced whisper transcription layers to interpret oral directives natively.
          </p>
          
        </div>

        {/* BOTTOM FIXED TITLE CAPSULE */}
        <div className="more-templates-inline-title">
          More Templates Like <span style={{color: '#ec962f'}}>AI Chat Bots</span>
        </div>

      </div>

    </div>
  );
}

export default TemplateInfo;
