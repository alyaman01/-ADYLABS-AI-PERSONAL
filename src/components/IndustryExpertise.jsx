import React, { useRef } from 'react';
import './IndustryExpertise.css';

// 📁 Apne 6 colored cards ke images yahan sahi path se import kar lo bhai
import CardImg1 from '../assets/cards/fintach.svg';
import CardImg2 from '../assets/cards/healthtech.svg';
import CardImg3 from '../assets/cards/saas.svg';
import CardImg4 from '../assets/cards/ecommerce.svg';
import CardImg5 from '../assets/cards/edtech.svg'; // 5th Card
import CardImg6 from '../assets/cards/marketing.svg'; // 6th Card

const IndustryExpertise = () => {
  const sliderRef = useRef(null);

  // Array mein humne saari 6 headings aur unke respective ready-made colored cards dal diye hain
  const industries = [
    { id: 1, title: 'Fintech', cardBgImage: CardImg1 },
    { id: 2, title: 'Health Tech', cardBgImage: CardImg2 },
    { id: 3, title: 'SaaS Apps', cardBgImage: CardImg3 },
    { id: 4, title: 'E-Commerce', cardBgImage: CardImg4 },
    { id: 5, title: 'Edtech', cardBgImage: CardImg5 },
    { id: 6, title: 'Marketing', cardBgImage: CardImg6 },
  ];

  return (
    <section className="industry-expertise-section">
      <div className="expertise-container">
        
        {/* 📝 Main Top Headings */}
        <div className="expertise-header-center">
          <h2 className="expertise-title">
            Industry <span className="gold-text-accent">Expertise</span>
          </h2>
          <p className="expertise-desc">
            We design exceptional UI/UX solutions at Musemind that are Customized for Fintech, Edtech,<br />
            Healthcare, SaaS, E-Commerce, and more industries. Our user-centric solutions<br />
            increase engagement and usability and fuel your business success.
          </p>
        </div>

        {/* 🎚️ Horizontal Infinite Slider Container */}
        <div className="expertise-slider-wrapper" ref={sliderRef}>
          <div className="expertise-cards-track">
            
            {/* Pehle 6 Original Cards */}
            {industries.map((item) => (
              <div key={item.id} className="expertise-slide-card">
                {/* Tumhara poora colored card as a background asset */}
                <img src={item.cardBgImage} alt={item.title} className="card-bg-full-image" />
                
                {/* Card ke upar overlay hone waali HTML heading text */}
                <h3 className="card-industry-title">{item.title}</h3>
              </div>
            ))}
            
            {/* Infinite loop effect smooth rakhne ke liye wahi 6 cards ka Clone */}
            {industries.map((item) => (
              <div key={`clone-${item.id}`} className="expertise-slide-card clone-card">
                <img src={item.cardBgImage} alt={item.title} className="card-bg-full-image" />
                <h3 className="card-industry-title">{item.title}</h3>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryExpertise;