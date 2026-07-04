import React, { useState, useEffect } from "react";
import "./JsonSecondSection.css";

/* ================= IMAGES ================= */
import RobotImg from "../../assets/marketplace/robot.png";
import ProfileImg from "../../assets/marketplace/yashpic.svg";

/* ================= ICONS ================= */
import CurleyIcon from "../../assets/marketplace/curlybraces.svg";
import MessageBox from "../../assets/marketplace/messagebox.png";
import Trigger from "../../assets/marketplace/trigeer.svg";
import GmailIcon from "../../assets/marketplace/gmail.png";
import CursorIcon from "../../assets/marketplace/airo.png";
import Web from "../../assets/marketplace/web icon.png";
import Drive from "../../assets/marketplace/google drive.png";
import Sheet from "../../assets/marketplace/gogle sheets.png";

import CopyIcon from "../../assets/marketplace/copy.svg";
import DownloadIcon from "../../assets/marketplace/download.svg";
import VerifyIcon from "../../assets/marketplace/verifyed.png";

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

function JsonSecondSection({ onSelectCard }) {
  const [allCards, setAllCards] = useState([]); // 🔥 Saari 3000+ files ka data yahan rahega
  const [visibleCount, setVisibleCount] = useState(12); // 🛑 Shuruat mein 12 cards dikhenge
  const [loading, setLoading] = useState(true);

  // 📡 Repo se saari public index data automatic fetch karo
  useEffect(() => {
    const fetchLiveTemplates = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://raw.githubusercontent.com/adymire/automation-json/main/index.json");
        if (res.ok) {
          const data = await res.json();
          setAllCards(data);
        }
      } catch (err) {
        console.error("Marketplace fetch error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchLiveTemplates();
  }, []);

  // 🔄 "Load More" function jo har click pe 12 naye cards badhayega
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  if (loading) {
    return <div style={{ color: "#000", textAlign: "center", padding: "100px", fontSize: "20px", fontWeight: "bold" }}>🔄 Loading 3000+ Live Automation Templates...</div>;
  }

  return (
    <section className="json-marketplace">

      {/* ================= TOP SECTION ================= */}
      <div className="marketplace-heading">
        <h2>Newcomer essentials: learn by doing</h2>
      </div>

      {/* ================= FEATURED CARD (CLICKABLE) ================= */}
      {allCards.length > 0 && (
        <div 
          className="featured-card"
          onClick={() => onSelectCard && onSelectCard(allCards[0].path)} // Pehli unique file ka asli path pass hoga
          style={{ cursor: "pointer" }}
        >
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
      )}

      {/* ================= DYNAMIC GRID (ALL CARDS AUTOMATIC) ================= */}
      <div className="market-grid">
        {allCards.slice(0, visibleCount).map((item, index) => {
          // 🎯 FIXED: Pehle underscores ko space banaya, fir numbers (0001, 0002) ko uraya
          const rawTitle = item.name ? item.name.replace(/_/g, " ") : "N8N Workflow Template";
          const cleanTitle = rawTitle.replace(/^\d+[\s_]*/, "");
          
          const dynamicIcons = getDynamicIcons(cleanTitle);

          return (
            <div
              className="market-card"
              key={index}
              onClick={() => onSelectCard && onSelectCard(item.path)} // 🚀 Sahi path seedha detail page par jayega!
              style={{ cursor: "pointer" }}
            >
              {/* TOP ICONS */}
              <div className="tool-icons">
                {dynamicIcons.map((icon, i) => (
                  <div className="tool-box" key={i}>
                    <img src={icon} alt="" className="tool-icon-img" />
                  </div>
                ))}
              </div>

              {/* TITLE */}
              <h3>{cleanTitle}</h3>

              {/* BOTTOM SEGMENT */}
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
                  }}><img src={CopyIcon} alt="" /></button>
                  <button className="download-action"><img src={DownloadIcon} alt="" /></button>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* ================= AUTOMATIC LOAD MORE SYSTEM ================= */}
      {visibleCount < allCards.length && (
        <div className="download-btn-wrap" >
          <button className="load-more-btn" onClick={handleLoadMore}>
            LOAD MORE 
          </button>
        </div>
      )}

    </section>
  );
}

export default JsonSecondSection;