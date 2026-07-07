import React, { useState, useEffect } from "react";
import "./JsonSecondSection.css";

/* ================= TARGET ASSETS IMPORTS ================= */
import RobotImg from "../../assets/marketplace/robot.png";
import ProfileImg from "../../assets/marketplace/yashpic.svg";
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

function JsonSecondSection({ onSelectCard, searchQuery = "" }) {
  const [allCards, setAllCards] = useState([]); 
  const [visibleCount, setVisibleCount] = useState(12); 
  const [loading, setLoading] = useState(true);
  const [searchingFeedback, setSearchingFeedback] = useState(false);

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

  // 🎯 REALTIME VISUAL FEEDBACK LOGIC FOR ACTIVE SEARCHING STATE
  useEffect(() => {
    setVisibleCount(12);
    if (searchQuery.trim() !== "") {
      setSearchingFeedback(true);
      const timer = setTimeout(() => setSearchingFeedback(false), 300); // Dynamic feedback state loader animation feel
      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 12);
  };

  const filteredCards = allCards.filter((item) => {
    if (!item.name) return false;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;

    const rawTitle = item.name.toLowerCase();
    const cleanTitle = item.name.replace(/_/g, " ").replace(/^\d+[\s_]*/, "").toLowerCase();
    return rawTitle.includes(query) || cleanTitle.includes(query);
  });

  if (loading) {
    return <div style={{ color: "#000", textAlign: "center", padding: "100px", fontSize: "18px", fontWeight: "bold" }}>🔄 Synchronizing 3000+ Automation Logic Gates...</div>;
  }

  return (
    <section className="json-marketplace">
      
      {/* 🎯 SEARCH NOTIFIER STATE MECHANISM */}
      {searchQuery.trim() !== "" && (
        <div style={{ maxWidth: "1200px", margin: "20px auto", padding: "0 20px", color: "#64748b", fontSize: "16px", fontWeight: "500" }}>
          {searchingFeedback ? (
            <span>⚡ Filtering automation workflows...</span>
          ) : (
            <span>🔍 Found {filteredCards.length} templates matching "{searchQuery}"</span>
          )}
        </div>
      )}

      <div className="marketplace-heading">
        <h2>Newcomer essentials: learn by doing</h2>
      </div>

      {searchQuery.trim() === "" && allCards.length > 0 && (
        <div 
          className="featured-card"
          onClick={() => onSelectCard && onSelectCard(allCards[0].path)}
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

      <div className="market-grid">
        {filteredCards.slice(0, visibleCount).map((item, index) => {
          const rawTitle = item.name ? item.name.replace(/_/g, " ") : "N8N Workflow Template";
          const cleanTitle = rawTitle.replace(/^\d+[\s_]*/, "");
          const dynamicIcons = getDynamicIcons(cleanTitle);

          return (
            <div
              className="market-card"
              key={index}
              onClick={() => onSelectCard && onSelectCard(item.path)}
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
                  }}><img src={CopyIcon} alt="" /></button>
                  <button className="download-action"><img src={DownloadIcon} alt="" /></button>
                </div>
              </div>
            </div>
          );
        })}

        {filteredCards.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", padding: "60px 20px", color: "#94a3b8", fontSize: "16px" }}>
            ❌ No blueprints found matching "{searchQuery}". Try searching for 'Sheet', 'Telegram' or 'Gmail'.
          </div>
        )}
      </div>

      {visibleCount < filteredCards.length && (
        <div className="download-btn-wrap">
          <button className="load-more-btn" onClick={handleLoadMore}>
            LOAD MORE 
          </button>
        </div>
      )}
    </section>
  );
}

export default JsonSecondSection;