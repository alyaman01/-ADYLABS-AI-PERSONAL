import "./Portfolio.css";

import { useState } from "react";

import PortfolioBg from "../assets/illustration/portfolio.svg";
import ButtonBg from "../assets/illustration/buttonbg.jpg";

/* CARD IMAGES */

import Card1 from "../assets/videos/video1.webp";
import Card2 from "../assets/videos/video2.webp";
import Card3 from "../assets/videos/video3.jpeg";
import Card4 from "../assets/videos/video4.jpg";
import Card5 from "../assets/videos/video5.jpeg";
import Card6 from "../assets/videos/video6.jpeg";

function Portfolio() {

  const [activeTab, setActiveTab] = useState("All AI Agents");

  const [currentSlide, setCurrentSlide] = useState(0);

  const cardsPerView = 3;

  const tabs = [
    "All AI Agents",
    "Chat bots",
    "Voice Agents",
    "AI Content creation",
    "UGC Ads",
  ];

  const portfolioData = [

    {
      image: Card1,
      title: "Website Chat Bot with Memory and its LLm",
      desc: "Can Be Added Website , Handel all of your business",
      tag: "Chat Bot",
    },

    {
      image: Card2,
      title: "AI Voice Calling Agent For Business",
      desc: "Automates customer calls and lead handling",
      tag: "Voice AI",
    },

    {
      image: Card3,
      title: "AI Video Content Generator",
      desc: "Create social media videos instantly using AI",
      tag: "UGC Ads",
    },

    {
      image: Card4,
      title: "AI Sales Automation System",
      desc: "Automates lead tracking and conversion",
      tag: "Sales AI",
    },

    {
      image: Card5,
      title: "AI Appointment Booking Bot",
      desc: "Handles bookings and customer scheduling",
      tag: "Booking AI",
    },

    {
      image: Card6,
      title: "AI Social Media Generator",
      desc: "Generate engaging AI social media content",
      tag: "Content AI",
    },

    {
      image: Card1,
      title: "AI Customer Support Assistant",
      desc: "24/7 AI support for your customers",
      tag: "Support AI",
    },

    {
      image: Card2,
      title: "AI Outreach Calling Agent",
      desc: "Automatically calls and qualifies leads",
      tag: "Calling AI",
    },

    {
      image: Card3,
      title: "AI UGC Advertisement Generator",
      desc: "Creates realistic AI UGC advertisements",
      tag: "UGC AI",
    },

  ];

  const totalSlides =
    portfolioData.length - cardsPerView;

  const nextSlide = () => {

    if(currentSlide < totalSlides){
      setCurrentSlide(currentSlide + 1);
    }

  };

  const prevSlide = () => {

    if(currentSlide > 0){
      setCurrentSlide(currentSlide - 1);
    }

  };

  return (

    <section className="portfolio">

      {/* HERO */}

      <div
        className="portfolio-hero"
        style={{
          backgroundImage: `url(${PortfolioBg})`,
        }}
      >

        {/* BLUR GLASS */}

        <div className="hero-overlay"></div>

       

        {/* TEXT */}

        <h1 className="hero-title">
          See
        </h1>

  <div className="hero-blur"></div>

      </div>

      
     {/* BUTTON */}

        <button
          className="consult-btn"
          style={{
            backgroundImage: `url(${ButtonBg})`,
          }}
        >
          Book Consultation
        </button>


      {/* CONTENT */}

      <div className="portfolio-content">

        <h1 className="portfolio-watermark">
          Portfolio
        </h1>

        {/* TABS */}

        <div className="portfolio-tabs">

          {tabs.map((tab, index) => (

            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${
                activeTab === tab ? "active" : ""
              }`}
            >
              {tab}
            </button>

          ))}

        </div>

        {/* SLIDER */}

        <div className="slider-wrapper">

          <div
            className="portfolio-grid"
            style={{
              transform: `translateX(-${
                currentSlide * 33.33
              }%)`,
            }}
          >

            {portfolioData.map((item, index) => (

              <div
                className="portfolio-card"
                key={index}
              >

                {/* IMAGE */}

                <div className="card-image">

                  <img
                    src={item.image}
                    alt=""
                  />

                  <div className="play-btn">
                    ▶
                  </div>

                </div>

                {/* CONTENT */}

                <div className="card-content">

                  <div className="card-top">

                    <h3>
                      {item.title}
                    </h3>

                    <span className="card-tag">
                      {item.tag}
                    </span>

                  </div>

                  <p>
                    {item.desc}
                  </p>

                  <button className="workflow-btn">
                    See Workflow
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CONTROLS */}

        <div className="slider-controls">

          <button
            className="arrow-btn"
            onClick={prevSlide}
          >
            ←
          </button>

          <div className="dots">

            {[...Array(totalSlides + 1)].map((_, index) => (

              <span
                key={index}
                className={`dot ${
                  currentSlide === index ? "active" : ""
                }`}
              ></span>

            ))}

          </div>

          <button
            className="arrow-btn"
            onClick={nextSlide}
          >
            →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Portfolio;