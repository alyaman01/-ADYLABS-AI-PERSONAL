import React from "react";
import "./RelatedTemplates.css";

/* ================= TARGET ASSETS IMPORTS ================= */
import ProfileImg from "../../assets/marketplace/yashpic.svg";
import VerifyIcon from "../../assets/marketplace/verifyed.png";
import CopyIcon from "../../assets/marketplace/copy.svg";
import DownloadIcon from "../../assets/marketplace/download.svg";

/* TOP LEVEL UTILITIES ICONS */
import CursorIcon from "../../assets/marketplace/airo.png";
import Web from "../../assets/marketplace/web icon.png";
import GmailIcon from "../../assets/marketplace/gmail.png";
import MessageBox from "../../assets/marketplace/messagebox.png";

function RelatedTemplates({ onSelectCard }) {
  
  /* 🎯 DYNAMIC CLICK LOGIC FIXED (Ab direct state update karega) */
  const handleCardClick = (title) => {
    const cleanFilename = title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replaceAll(" ", "-")
      + ".json";
    
    if (onSelectCard) {
      onSelectCard(cleanFilename); // Direct state target hit call
    }
  };

  /* ================= RELATED CARDS DATA ================= */
  const relatedCards = [
    {
      title: "Personal life manger with telegram, Goggle & Voice AI Agent Enable AI for Marketing Data Scaper",
      icons: [Web, GmailIcon, MessageBox, CursorIcon],
    },
    {
      title: "Personal life manger with telegram, Goggle & Voice AI Agent Enable AI for Marketing Data Scaper",
      icons: [Web, GmailIcon, MessageBox, CursorIcon],
    },
    {
      title: "Personal life manger with telegram, Goggle & Voice AI Agent Enable AI for Marketing Data Scaper",
      icons: [Web, GmailIcon, MessageBox, CursorIcon],
    },
    {
      title: "Personal life manger with telegram, Goggle & Voice AI Agent Enable AI for Marketing Data Scaper",
      icons: [Web, GmailIcon, MessageBox, CursorIcon],
    },
    {
      title: "Personal life manger with telegram, Goggle & Voice AI Agent Enable AI for Marketing Data Scaper",
      icons: [Web, GmailIcon, MessageBox, CursorIcon],
    },
    {
      title: "Personal life manger with telegram, Goggle & Voice AI Agent Enable AI for Marketing Data Scaper",
      icons: [Web, GmailIcon, MessageBox, CursorIcon],
    },
  ];

  return (
    <div className="related-templates-section">
      
      {/* GRID CONTAINER - 100% CLEAN BACKGROUND */}
      <div className="related-market-grid">
        {relatedCards.map((item, index) => (
          <div
            className="related-market-card"
            key={index}
            onClick={() => handleCardClick(item.title)}
            style={{ cursor: "pointer" }}
          >
            {/* TOP ICONS ROW */}
            <div className="related-tool-icons">
              {item.icons.map((icon, i) => (
                <div className="related-tool-box" key={i}>
                  <img src={icon} alt="Tool" className="related-tool-icon-img" />
                </div>
              ))}
            </div>

            {/* TITLE */}
            <h3>{item.title}</h3>

            {/* BOTTOM SEGMENT */}
            <div className="related-card-bottom" onClick={(e) => e.stopPropagation()}>
              {/* AUTHOR */}
              <div className="related-author">
                <img src={ProfileImg} alt="Profile" className="related-profile-img" />
                <div className="related-author-name">
                  <span>Yashveer Giri</span>
                  <img src={VerifyIcon} alt="Verified" className="related-verify-icon" />
                </div>
              </div>

              {/* ACTIONS AREA */}
              <div className="related-actions">
                <button className="rel-btn"><img src={CopyIcon} alt="Copy" /></button>
                <button className="rel-btn rel-download"><img src={DownloadIcon} alt="Download" /></button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* 🎯 NEW: MOCKUP STYLE ASSET BACKGROUND LOAD MORE BUTTON */}
      <div className="related-load-more-wrap">
        <button className="related-load-more-btn">
          Load More
        </button>
      </div>

    </div>
  );
}

export default RelatedTemplates;