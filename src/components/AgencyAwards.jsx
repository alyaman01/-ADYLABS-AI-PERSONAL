import React from 'react';
import './AgencyAwards.css';

// 📁 Apne actual assets folder ke paths yahan verify kar lena bhai
import RewardCupImg from '../assets/awards/reward.svg'; // Ya fir trophy.svg
import LogoUpwork from '../assets/awards/upwork.svg';
import LogoSortlist from '../assets/awards/sortlist.svg';
import LogoMarketingHub from '../assets/awards/influencer.svg';
import LogoClutch from '../assets/awards/clutch.svg';

// Jo cards ke bottom-right mein chote icons hain unhe bhi import kar lo (optional/assets ke according)
import BadgePlay from '../assets/awards/upworkicon.svg';
import BadgeDoc from '../assets/awards/sortlisticon.svg';
import BadgeLayers from '../assets/awards/influencericon.svg';
import BadgeBox from '../assets/awards/clutchicon.svg';

const AgencyAwards = () => {
  const awardsData = [
    {
      id: 1,
      tagline: "100% Job Success Among top providers for enterprises",
      logo: LogoUpwork,
      alt: "Upwork",
      miniBadge: BadgePlay
    },
    {
      id: 2,
      tagline: "Best Web Design Agencies",
      logo: LogoSortlist,
      alt: "Sortlist",
      miniBadge: BadgeDoc
    },
    {
      id: 3,
      tagline: "Best UX/UI Agencies for SME and Enterprise brands globally",
      logo: LogoMarketingHub,
      alt: "Influencer Marketing Hub",
      miniBadge: BadgeLayers
    },
    {
      id: 4,
      tagline: "Top 1 Graphic Design Companies 2026",
      logo: LogoClutch,
      alt: "Clutch",
      miniBadge: BadgeBox
    }
  ];

  return (
    <section className="agency-awards-section">
      <div className="awards-main-container">
        
        {/* 🏆 Top Header Area: Heading & Floating Trophy */}
        <div className="awards-header-block">
          <h2 className="awards-gradient-title">
            Best AI Automation<br />Agency
          </h2>
          <div className="reward-cup-wrapper">
            <img src={RewardCupImg} alt="40+ Awards Trophy" className="reward-cup-img" />
          </div>
        </div>

        {/* 🎴 2x2 Grid Layout for Company Trust Cards */}
        <div className="awards-companies-grid">
          {awardsData.map((item) => (
            <div key={item.id} className="award-company-card">
              <span className="award-card-tagline">{item.tagline}</span>
              
              <div className="award-card-body">
                <img src={item.logo} alt={item.alt} className="award-company-logo" />
                
                {/* Bottom Right Corner Mini Badge Component */}
                {item.miniBadge && (
                  <img src={item.miniBadge} alt="badge" className="award-mini-corner-badge" />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AgencyAwards;