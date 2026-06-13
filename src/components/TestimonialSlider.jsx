import React, { useState } from 'react';
import "./TestimonialSlider.css";

import ClientManImg from "../assets/faq/man.jpg"; 
import BottomGlobeVector from "../assets/faq/globe2.svg"; 

function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Amit Bharadwaj",
      role: "Architect",
      rating: 4, 
      image: ClientManImg,
      quote: "Royaloak Has A Variety Of Recliner Designs To Fit Anylifestyle And Living Room Setup. Whether Relaxing Alone Or On Movie Nights With The Entire Family, There Is A Recliner That Will Fit Every Requirement:"
    }
  ];

  const current = testimonials[currentIndex];

  return (
    // Outer section - jisse page par separation milegi
    <section className="testimonial-outer-section">
      
      {/* INNER CONTAINER: Jo badia white shape dega border-radius ke sath */}
      <div className="testimonial-inner-white-box">
        
        {/* HEADING ZONE */}
        <h2 className="section-title">What Clients Say's</h2>
        <div className="title-underline"></div>

        {/* PROFILE CARD */}
        <div className="testimonial-card">
          
          {/* Left Side Image */}
          <div className="client-image-wrapper">
            <img src={current.image} alt={current.name} className="client-img" />
          </div>

          {/* Right Side Info */}
          <div className="client-content-wrapper">
            <div className="client-meta">
              <h3 className="client-name">{current.name}</h3>
              <span className="client-role">{current.role}</span>
              
              <div className="client-rating">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className={`star ${i < current.rating ? 'filled-star' : 'empty-star'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="quote-body-box">
              <span className="quote-icon open-quote">“</span>
              <p className="quote-text">{current.quote}</p>
              <span className="quote-icon close-quote">”</span>
            </div>
          </div>

        </div>

        {/* SLIDER CONTROLS WITH LARGER GLOBE */}
        <div className="slider-controls-wrapper">
          <button className="nav-arrow-btn">←</button>
          
          <div className="center-vector-container">
            <img src={BottomGlobeVector} alt="Envelope Globe Graphic" className="bottom-vector-img" />
          </div>
          
          <button className="nav-arrow-btn">→</button>
        </div>

      </div>

    </section>
  );
}

export default TestimonialSlider;