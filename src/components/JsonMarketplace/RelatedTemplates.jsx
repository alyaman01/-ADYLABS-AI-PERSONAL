import React, { useState, useEffect } from "react";
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
  const [allTemplates, setAllTemplates] = useState([]); // Poori list github se
  const [visibleCount, setVisibleCount] = useState(6); // Pagination state
  const [loading, setLoading] = useState(true);

  // Default hardcoded icons map agar list ke according badalna ho
  const mockIcons = [Web, GmailIcon, MessageBox, CursorIcon];

  /* 🎯 FETCH ALL FILES FROM GITHUB INDEX */
  useEffect(() => {
    const fetchGithubTemplates = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://raw.githubusercontent.com/adymire/automation-json/main/index.json");
        if (res.ok) {
          const list = await res.json();
          setAllTemplates(list);
        } else {
          throw new Error("Repository link error");
        }
      } catch (err) {
        console.warn("Using fallback templates inside grid.");
        // Static layout list fallback agar internet down ho
        setAllTemplates([
          { name: "0001 Telegram Schedule Automation", path: "templates/0001_Telegram_Schedule_Automation.json" },
          { name: "0002 Manual Totp Automation Trigger", path: "templates/0002_Manual_Totp_Automation_Trigger.json" },
          { name: "0003 Bitwarden Automate", path: "templates/0003_Bitwarden_Automate.json" },
          { name: "0004 GoogleSheets Typeform Automation", path: "templates/0004_GoogleSheets_Typeform_Automation.json" },
          { name: "0015 HTTP Cron Update Webhook", path: "templates/0015_HTTP_Cron_Update_Webhook.json" }
        ]);
      } finally {
        setLoading(false);
      }
    };
    fetchGithubTemplates();
  }, []);

  /* 🎯 CLICK LOGIC: Direct exact github path target karega */
  const handleCardClick = (filePath) => {
    if (onSelectCard && filePath) {
      // Direct state target hit call with accurate repo filename
      onSelectCard(filePath); 
    }
  };

  /* 🎯 LOAD MORE LOGIC */
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Agle 6 cards open honge
  };

  // Slice list for pagination
  const templatesToDisplay = allTemplates.slice(0, visibleCount);

  if (loading) {
    return <div style={{ color: "#fff", textAlign: "center", padding: "40px" }}>🔄 Syncing Marketplace Cards...</div>;
  }

  return (
    <div className="related-templates-section">
      
      {/* GRID CONTAINER - 100% CLEAN BACKGROUND */}
      <div className="related-market-grid">
        {templatesToDisplay.map((item, index) => {
          // 🎯 FIXED: Pehle name ya path se raw title nikala, underscores hataye, aur fir regex se starting numbers udaye
          const targetString = item.name ? item.name : item.path.split("/").pop().replace(".json", "");
          const rawTitle = targetString.replace(/_/g, " ");
          const cleanTitle = rawTitle.replace(/^\d+[\s_]*/, "");

          return (
            <div
              className="related-market-card"
              key={index}
              onClick={() => handleCardClick(item.path)}
              style={{ cursor: "pointer" }}
            >
              {/* TOP ICONS ROW */}
              <div className="related-tool-icons">
                {mockIcons.map((icon, i) => (
                  <div className="related-tool-box" key={i}>
                    <img src={icon} alt="Tool" className="related-tool-icon-img" />
                  </div>
                ))}
              </div>

              {/* TITLE */}
              <h3>{cleanTitle}</h3>

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
          );
        })}
      </div>

      {/* 🎯 DYNAMIC LOAD MORE BUTTON */}
      {allTemplates.length > visibleCount && (
        <div className="related-load-more-wrap">
          <button className="related-load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

    </div>
  );
}

export default RelatedTemplates;