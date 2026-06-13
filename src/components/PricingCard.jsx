import React from 'react';
import StarIconImg from "../assets/pricing/premium.svg"; 
import FreeTextImg from "../assets/icons/free.svg"; // ya .svg/.jpg jo bhi ho

function PricingCard({
  icon,
  title,
  description,
  price,
  features,
  popular
}) {
  return (
    <div className={`pricing-card ${popular ? "popular" : ""}`}>
      
      {/* Most Popular Badge */}
      {popular && (
        <div className="popular-badge">
          🔥 Most Popular
        </div>
      )}

      <img src={icon} alt={title} className="plan-icon" />

      <h2>{title}</h2>
      <p className="plan-desc">{description}</p>

      <h4>Starts from</h4>
      <h1 className="price-tag"><span className="currency">$</span>{price}</h1>
      <span className="billing">Billing monthly</span>

      <button className="start-btn">
        Start Now →
      </button>

      <button className="call-btn">
        Book Free Call
      </button>

      <div className="features">
        {features.map((item, index) => (
          <div className="feature" key={index}>
            <img src={StarIconImg} alt="star" className="feature-star-img" /> 
            <span className="feature-text">{item}</span>
          </div>
        ))}
      </div>

      <div className="free-benefits">
  {/* Text hatakar humne image lagayi hai */}
      <img src={FreeTextImg} alt="FREE" className="free-badge-img" /> Benefits

      </div>

      <div className="view-more-container">
        <span className="view-more-text">View more features</span>
      </div>

      <button className="down-btn">
        ↓
      </button>

    </div>
  );
}

export default PricingCard;