import "./MeetTeam.css";

import FounderImg from "../assets/team/yashteam.svg";

import { useState } from "react";

import LogoImg from "../assets/logos/mainlogo.jpeg";
import Team1 from "../assets/team/team1.svg";
import Team2 from "../assets/team/team2.svg";
import Team3 from "../assets/team/team3.svg";
import Team4 from "../assets/team/team1.svg";
import Team5 from "../assets/team/team2.svg";

import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

function MeetTeam() {


    const [currentSlide, setCurrentSlide] = useState(0);

const teamMembers = [
  {
    image: Team1,
    name: "Ankit Giri",
    role: "Co-Founder & Director",
  },
  {
    image: Team2,
    name: "Shiva Giri",
    role: "Co-Founder",
  },
  {
    image: Team3,
    name: "Anuj Giri",
    role: "Co-Founder",
  },
  {
    image: Team4,
    name: "Rahul Sharma",
    role: "AI Engineer",
  },
  {
    image: Team5,
    name: "Aman Gupta",
    role: "Developer",
  },
];

const cardsPerView = 3;
const totalSlides = teamMembers.length - cardsPerView;

const nextSlide = () => {
  if (currentSlide < totalSlides) {
    setCurrentSlide(currentSlide + 1);
  }
};

const prevSlide = () => {
  if (currentSlide > 0) {
    setCurrentSlide(currentSlide - 1);
  }
};

  return (

    <section className="meet-team-section">

      {/* ================= TOP HEADING ================= */}

      <div className="meet-heading">

        <h1>
          Meet Our Team
        </h1>

      </div>

      {/* ================= MAIN BOX ================= */}

      <div className="team-box">

        {/* LEFT CONTENT */}

        <div className="team-left">

          <h2>
            Our Founder
          </h2>

          <h3>
            Yashveer Giri
          </h3>

          <p>
            Founder of ZCS | Adymire.com |
            <span> 5+ more</span>
          </p>

          {/* SOCIAL ICONS */}

          <div className="social-icons">

            <a href="#">
              <FaLinkedin size={24} />
            </a>

            <a href="#">
              <FaYoutube size={24} />
            </a>

            <a href="#">
              <FaXTwitter size={24} />
            </a>

            <a href="#">
              <FaInstagram size={22} />
            </a>

            <a href="#">
              <FaFacebook size={24} />
            </a>

            <a href="#">
              <FaWhatsapp size={24} />
            </a>

          </div>

          {/* BUTTON */}

          <button className="founder-btn">
            Founder Story →
          </button>

        </div>

        {/* RIGHT IMAGE */}

        <div className="team-right">

          <img
            src={FounderImg}
            alt=""
            className="founder-img"
          />

        </div>

        

      </div>

      {/* ================= TEAM HEADING ================= */}

<div className="team-title">
  <h2>Team Behind</h2>

  <img
    src={LogoImg}
    alt="AdyLabs Logo"
    className="team-logo"
  />

  <h2 className="gradient-text">
    AdyLabs AI
  </h2>
</div>

      {/* ================= TEAM MEMBERS ================= */}

<div className="team-slider-section">

  <div className="team-slider-wrapper">

    <div
      className="team-slider-track"
      style={{
        transform: `translateX(-${currentSlide * 33.33}%)`,
      }}
    >

      {teamMembers.map((member, index) => (

        <div
          className="team-card"
          key={index}
        >

          <img
            src={member.image}
            alt=""
          />

          <div className="team-card-info">

            <h3>{member.name}</h3>

            <p>{member.role}</p>

          </div>

        </div>

      ))}

    </div>

  </div>

  <div className="team-controls">

    <button
      className="team-arrow"
      onClick={prevSlide}
    >
      ←
    </button>

    <div className="team-dots">

      {[...Array(totalSlides + 1)].map((_, index) => (

        <span
          key={index}
          className={`team-dot ${
            currentSlide === index
              ? "active"
              : ""
          }`}
        ></span>

      ))}

    </div>

    <button
      className="team-arrow"
      onClick={nextSlide}
    >
      →
    </button>

  </div>

</div>

    </section>

  );
}

export default MeetTeam;