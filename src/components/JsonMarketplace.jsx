import React, { useState, useEffect } from "react";
import "./JsonMarketplace.css";

/* ================= IMAGES ================= */
import RobotImg from "../assets/marketplace/robot.png";
import ProfileImg from "../assets/marketplace/yashpic.svg";

/* ================= ICONS ================= */
import CurleyIcon from "../assets/marketplace/curlybraces.svg";
import MessageBox from "../assets/marketplace/messagebox.png";
import Trigger from "../assets/marketplace/trigeer.svg";
import GmailIcon from "../assets/marketplace/gmail.png";
import CursorIcon from "../assets/marketplace/airo.png";
import Web from "../assets/marketplace/web icon.png";
import Drive from "../assets/marketplace/google drive.png";
import Sheet from "../assets/marketplace/gogle sheets.png";
import Button from "../assets/illustration/buttonbg.jpg";

import CopyIcon from "../assets/marketplace/copy.svg";
import DownloadIcon from "../assets/marketplace/download.svg";
import VerifyIcon from "../assets/marketplace/verifyed.png";

// 🌐 Dynamic Icon Assigner Tool
const getDynamicIcons = (title) => {
  const matched = [];
  const lower = title.toLowerCase();
  
  if (lower.includes("sheet")) matched.push(Sheet);
  if (lower.includes("gmail") || lower.includes("mail")) matched.push(GmailIcon);
  if (lower.includes("drive")) matched.push(Drive);
  
  if (matched.length === 0) matched.push(Web, CurleyIcon);
  
  matched.push(MessageBox, CursorIcon);
  return matched.slice(0, 4);
};

function JsonMarketplace({ onNavigateToMarketplace, onSelectTemplate }) {
  const [homeCards, setHomeCards] = useState([]); 
  const [loading, setLoading] = useState(true);

  // 📡 GitHub se data pull karenge dynamic preview ke liye
  useEffect(() => {
    const fetchHomeTemplates = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://raw.githubusercontent.com/adymire/automation-json/main/index.json");
        if (res.ok) {
          const data = await res.json();
          setHomeCards(data.slice(0, 6));
        }
      } catch (err) {
        console.error("Home Marketplace fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeTemplates();
  }, []);

  if (loading) {
    return <div style={{ color: "#000", textAlign: "center", padding: "60px", fontSize: "18px", fontWeight: "bold" }}>🔄 Loading Automation Preview...</div>;
  }

  return (
    <section className="json-marketplace">
      {/* ================= TOP SECTION ================= */}
      <div className="marketplace-heading">
        <button className="market-btn" style={{ backgroundImage: `url(${Button})` }}>
          Book Consultation
        </button>
        <h1>Json Marketplace</h1>
        <h2>Download <span>Templates</span></h2>
        <p>Jason Templates</p>
      </div>

      {/* ================= FEATURED CARD ================= */}
      <div className="featured-card">
        <div className="featured-left">
          <div className="tool-icons">
            <div className="tool-box"><img src={CurleyIcon} alt="" /></div>
            <div className="tool-box"><img src={Trigger} alt="" /></div>
            <div className="tool-box"><img src={CursorIcon} alt="" /></div>
            <div className="tool-box"><img src={MessageBox} alt="" /></div>
          </div>
          <h2>Build Your First AI Agent</h2>
          <div className="author">
            <img src={ProfileImg} alt="" className="profile-img" />
            <div className="author-name">
              <span>Yashveer Giri</span>
              <img src={VerifyIcon} alt="" className="verify-icon" />
            </div>
          </div>
        </div>
        <div className="featured-right">
          <img src={RobotImg} alt="" />
        </div>
      </div>

      {/* ================= DYNAMIC GRID (MAX 6 CARDS FOR HOME) ================= */}
      <div className="market-grid">
        {homeCards.map((item, index) => {
          // 🎯 FIXED: Pehle underscores ko space banaya, fir shuruat ke saare digits (0001, 0002) aur spaces ko uda diya!
          const rawTitle = item.name ? item.name.replace(/_/g, " ") : "N8N Workflow Template";
          const cleanTitle = rawTitle.replace(/^\d+[\s_]*/, ""); 
          
          const dynamicIcons = getDynamicIcons(cleanTitle);

          return (
            <div 
              className="market-card" 
              key={index}
              /* 🚀 CLICK EVENT FIXED: Yeh direct parent routing template toggle function ko call karega */
              onClick={() => onSelectTemplate && onSelectTemplate(item.path)} 
              style={{ cursor: "pointer" }}
            >
              <div className="tool-icons">
                {dynamicIcons.map((icon, i) => (
                  <div className="tool-box" key={i}>
                    <img src={icon} alt="" className="tool-icon-img" />
                  </div>
                ))}
              </div>

              <h3>{cleanTitle}</h3>

              <div className="card-bottom" onClick={(e) => e.stopPropagation()}>
                <div className="author">
                  <img src={ProfileImg} alt="" className="profile-img" />
                  <div className="author-name">
                    <span>Yashveer Giri</span>
                    <img src={VerifyIcon} alt="" className="verify-icon" />
                  </div>
                </div>

                <div className="actions">
                  <button onClick={() => {
                    navigator.clipboard.writeText(item.path);
                    alert("Path copied! 🔥");
                  }}>
                    <img src={CopyIcon} alt="" />
                  </button>
                  <button className="download-action">
                    <img src={DownloadIcon} alt="" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= BUTTON ================= */}
      <div className="download-btn-wrap">
        <button className="download-btn" onClick={onNavigateToMarketplace}>
          Download Json & Visit Marketplace
        </button>
      </div>
    </section>
  );
}

export default JsonMarketplace;