import React, { useState } from 'react';
import "./FaqSection.css";

import PeopleImg from "../assets/faq/people.svg"; 
import GlobeImg from "../assets/faq/globe.svg"; 

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  // Saare 7-8 questions jo aapke design mein hain, sab yahan list kar diye hain
  const faqData = [
    {
      question: "Why Choose Zylobit Agency ?",
    },
    {
      question: "What services do you offer?",
    },
    {
      question: "How long does it take to develop a custom software project?",
    },
    {
      question: "Why should I choose custom software over off-the-shelf solutions?",
    },
    {
      question: "What industries do you specialize in?",
    },
    {
      question: "Do I need to be tech-savvy to work with you?",
    },
    {
      question: "Why Choose Zylobit Agency ?",
    },
    {
      question: "What services do you offer?",
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        
        {/* LEFT COLUMN: Contains Heading + Subtext AND the Black Card underneath */}
        <div className="faq-left-column">
          <div className="faq-text-header">
            <h1 className="main-faq-heading">Have questions?</h1>
            <p className="main-faq-sub">Here's a list of FAQs that will help you learn more about DianApps.</p>
          </div>

          {/* Premium Black Promo Card */}
          <div className="faq-left-card">
            <h2 className="card-title">Find the right solution for you now</h2>
            
            <div className="audience-trust-row">
              <img src={PeopleImg} alt="Trusted Users" className="faq-people-img" />
              <p className="trust-text">
                Trusted by <span className="highlight-text">1.3L+ Audience</span>
              </p>
            </div>

            <button className="quick-call-btn">
              Book A Quick Call
            </button>

            <div className="globe-vector-box">
              <img src={GlobeImg} alt="Globe Connection Vector" className="globe-img" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Purely just the clean list of Accordions */}
        <div className="faq-right-accordion">
          <div className="accordion-list">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`accordion-item ${isOpen ? 'active-item' : ''}`}
                >
                  <div className="accordion-header" onClick={() => toggleFaq(index)}>
                    <h3>{item.question}</h3>
                    <span className={`arrow-icon ${isOpen ? 'rotate-arrow' : ''}`}>▼</span>
                  </div>
                  
                  <div className={`accordion-body ${isOpen ? 'show-body' : ''}`}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

export default FaqSection;