import React, { useRef, useState, useEffect } from "react";
import "./services.css";

import Service1 from "../assets/services/aisalesagent.svg";
import Service2 from "../assets/services/chatbotautomation.svg";
import Service3 from "../assets/services/voiceaiagent.svg";
import Service4 from "../assets/services/aiconsulting.svg"; 
import Service5 from "../assets/services/aisolution.svg";
import Service6 from "../assets/services/aiwhtsp.svg";

function Services() {
  const services = [
    { image: Service2, title: "AI Chat Bot Automation", text: "Apps, Platforms ( Ecom , AI , Education Health ,Vpn , Media Apps, Ott Apps) Etc." },
    { image: Service3, title: "Voice AI Agent Automation", text: "Web Apps & Platforms ( Ecommerce ,AI, LMS Health , Service Websites , Media Apps, Ott , Agency Landing Pages Apps) Etc." },
    { image: Service1, title: "AI Sales Agent", text: "Web & App , Platforms ( Enterprise , Software At Scale , Saas Systems , Platforms Etc)" },
    { image: Service4, title: "AI Consulting", text: "Strategic AI roadmaps, technical feasibility analysis, and tailored automation architecture for your workflow." },
    { image: Service5, title: "Custom AI Solutions", text: "End-to-end development of custom LLMs, predictive analytics models, and enterprise-grade neural networks." },
    { image: Service6, title: "AI WhatsApp Automation", text: "Transform WhatsApp into a 24/7 sales machine with automated broadcasts, user retargeting, and instant CRM sync." }
  ];

  // Infinite loop ke liye double array data
  const totalSlides = [...services, ...services];

  // 🎯 Cursor Dragging logic variables
  const windowRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse Down Event (Pakadne par)
  const handleMouseDown = (e) => {
    setIsDown(true);
    setStartX(e.pageX - windowRef.current.offsetLeft);
    setScrollLeft(windowRef.current.scrollLeft);
  };

  // Mouse Leave (Window se bahar cursor jaane par)
  const handleMouseLeave = () => {
    setIsDown(false);
    setIsHovered(false);
  };

  // Mouse Up (Click chhodne par)
  const handleMouseUp = () => {
    setIsDown(false);
  };

  // Mouse Move (Mone karne par slide scroll logic)
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - windowRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Slide speed sensitivity multiplying multiplier
    windowRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="services">
      <div className="services-container">

        {/* HEADING */}
        <h1 className="services-heading">
          <span>Services</span> we offer
        </h1>

        {/* TEXT */}
        <p className="services-text">
          We help companies automate operations, generate more leads, reduce costs, and scale faster using custom AI solutions.
        </p>

        {/* 🎚️ TRACK WINDOW WITH MOUSE/CURSOR DRAG EVENTS */}
        <div 
          className={`services-slider-window ${isDown ? 'grabbing-active' : ''}`}
          ref={windowRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          style={{ cursor: isDown ? 'grabbing' : 'grab' }}
        >
          {/* Agar user hover ya grab kar rha h to animation pause ho jayegi taki user khud scroll kr ske */}
          <div className={`services-slider-track ${(isHovered || isDown) ? 'pause-marquee' : ''}`}>
            {totalSlides.map((service, index) => (
              <div className="service-card" key={index}>
                <img src={service.image} alt="service" draggable="false" /> {/* draggable false taaki image pop up na ho drag krte time */}
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BENEFITS SECTION */}
      <div className="benefits-section">
        <div className="benefits-heading">
          <h1>
            <span>Services</span> Benifits
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Services;