import "./AwardsSection.css";

import Upwork from "../assets/awards/upwork.svg";
import Sortlist from "../assets/awards/sortlist.svg";
import Influencer from "../assets/awards/influencer.svg";
import Clutch from "../assets/awards/clutch.svg";

import AwardIcon1 from "../assets/awards/upworkicon.svg";
import AwardIcon2 from "../assets/awards/sortlisticon.svg";
import AwardIcon3 from "../assets/awards/influencericon.svg";
import AwardIcon4 from "../assets/awards/clutchicon.svg";

function AwardsSection() {
  const awards = [
    {
      title: "100% Job Success Among top providers for enterprises",
      logo: Upwork,
      icon: AwardIcon1,
    },

    {
      title: "Best Web Design Agencies",
      logo: Sortlist,
      icon: AwardIcon2,
    },

    {
      title: "Best UX/UI Agencies for SME and Enterprise brands globally",
      logo: Influencer,
      icon: AwardIcon3,
    },

    {
      title: "Top 1 Graphic Design Companies 2026",
      logo: Clutch,
      icon: AwardIcon4,
    },
  ];

  return (
    <section className="awards-section">

      <div className="awards-heading">
        <h1>
          Award-Winning
          <br />
          Design Agency
        </h1>
      </div>

      <div className="awards-grid">

        {awards.map((item, index) => (
          <div className="award-card" key={index}>

            <h3>{item.title}</h3>

            <div className="award-bottom">

              <img
                src={item.logo}
                alt=""
                className="award-logo"
              />

              <img
                src={item.icon}
                alt=""
                className="award-icon"
              />

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default AwardsSection;