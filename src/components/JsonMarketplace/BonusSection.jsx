import React from "react";
import "./BonusSection.css";

import BotImg from "../../assets/marketplace/aibot3.png";
import FreeTag from "../../assets/icons/free.svg";
// NOTE: Agar aapke paas background image ka local import hai toh yahan un-comment karke path sahi kar lein:
// import BgImage from "../../assets/marketplace/background-pattern.png"; 

function BonusSection() {
  const bonuses = [
    {
      title: "We give You N8N hosting",
      free: "for 2 Year Free",
    },
    {
      title: "Get Your Desired 1 Domain",
      free: "for 1 Year Free",
    },
  ];

  return (
    // MAIN WRAPPER: Jo pure layout aur piche ki image ko hold karega
    <div className="bonus-section-wrapper">
      
      {/* BACKGROUND IMAGE CONTAINER (Yeh background ko niche khisatne se rokega) */}
      <div className="bonus-background-layer"></div>

      <section className="bonus-section-json">
        <h1 className="bonus-main-title">
          <span>Lifetime</span> free Bonus
        </h1>

        <h2 className="bonus-sub-title">
          Free for Lifetime Bonus
        </h2>

        {/* INNER GREY BOX */}
        <div className="bonus-box-container">
          
          {/* HEADING CENTERED */}
          <h2 className="setup-title-centered">
            Free N8N Setup for 2 Years
          </h2>
          
          {/* MAIN LAYOUT BODY */}
          <div className="bonus-layout-wrapper">
            
            {/* LEFT CONTENT BLOCK */}
            <div className="bonus-left-block">
              <div className="bonus-cards-stack">
                {bonuses.map((item, index) => (
                  <div className="bonus-card-wrap" key={index}>
                    <img
                      src={FreeTag}
                      alt="Free"
                      className="free-tag-straight"
                    />
                    <div className="bonus-card-box">
                      <h3>{item.title}</h3>
                      <h4>{item.free}</h4>
                    </div>
                  </div>
                ))}
              </div>

              <div className="worth-box-green">
                Total free worth of = $100K
              </div>
            </div>

            {/* RIGHT ROBOT FIXED OVERLAP (BIG SIZE) */}
            <div className="bonus-right-bot-floating">
              <img
                src={BotImg}
                alt="Robot"
                className="bonus-big-robot"
              />
            </div>

          </div>

          {/* FOOTER SECTION */}
          <div className="bonus-footer-section">
            <div className="offer-strip-dashed">
              <div className="offer-pill-yellowish">
                Grab This offer now
              </div>
              <p className="offer-text-orange">
                10 Peoples Grab this offer - Last Day
              </p>
            </div>

            <button className="contact-us-gradient-btn">
              CONTACT US
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}

export default BonusSection;
