import React, { useState } from 'react';
import './ContactUs.css';
import ConnectExperts from './ConnectExperts'; // Naya split component
import SchedulerSection from './SchedulerSection';
import OfficeLocationsMap from './OfficeLocationsMap';
import AgencyAwards from './AgencyAwards';
import TrustShowcase from './TrustShowcase';
import IndustryExpertise from './IndustryExpertise';
import TestimonialSlider from './TestimonialSlider';
import FaqSection from './FaqSection';
import ContactEnquiry from './ContactEnquiry';
import LetsTalkCTA from './LetsTalkCTA';

// Existing Assets
import GlobeIcon from '../assets/faq/globe.svg'; 
import PhoneIcon from '../assets/contact/phones.jpg'; 
import MailIcon from '../assets/contact/mail.webp';
import FlagIcon from '../assets/contact/flag.jpg'; 
import FeaturesGrid from './FeaturesGrid';

function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '', email: '', contactNumber: '', service: '', budget: '', projectDetails: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted Data:", formData);
  };

  return (
    /* 
      💡 HTML structural fix: Humne ek independent fragment/wrapper use kiya hai.
      Isse pehla flexbox section upar block level par load hoga, 
      aur ConnectExperts uske just niche automatic shift ho jayega.
    */
    <>
      {/* UPPER BLOCK: Tumhara upar waala complex flex container */}
      <div className="contact-page-container">
        
        {/* LEFT SIDE: Headings, Widget & White Info Box */}
        <div className="contact-left-section">
          <h1 className="contact-main-heading">
            <span className="gradient-text">Let's Build</span> <br />
            <span className="black-text-bold">Something Great Together!</span>
          </h1>
          
          <p className="contact-subtext">
            Have a project in mind? We're just a message away. Connect with our experts to transform your idea into a digital success.
          </p>
          
          <div className="direct-call-widget">
            <div className="phone-black-icon">
              <img src={PhoneIcon} alt="Call Icon" className="custom-widget-icon" />
            </div>
            <div>
              <p className="not-interested-text">Not Interested To Submit The Form?</p>
              <a href="tel:+917302356804" className="book-call-link">Book A Call Directly</a>
            </div>
          </div>
          
          <div className="contact-info-card-wrapper">
            <div className="contact-info-text-side">
              <div className="info-block-item">
                <h4>Call Us</h4>
                <p>
                  <img src={FlagIcon} alt="India Flag" className="custom-flag-icon" />
                  <strong>+91 7302356804</strong>
                </p>
              </div>
              <div className="info-block-item" style={{ marginTop: '30px' }}>
                <h4>Email Us</h4>
                <p>
                  <img src={MailIcon} alt="Mail Icon" className="custom-mail-icon" />
                  <strong>contact@graphio.design</strong>
                </p>
              </div>
            </div>
            <div className="contact-globe-graphic-side">
              <img src={GlobeIcon} alt="Global Network Map" className="globe-asset-img" />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Smooth Form Card */}
        <div className="contact-right-card">
          <form onSubmit={handleSubmit} className="contact-main-form">
            <div className="form-group">
              <label>Full Name <span className="required-star">*</span></label>
              <input type="text" name="fullName" placeholder="Enter Name" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Email ID <span className="required-star">*</span></label>
              <input type="email" name="email" placeholder="Enter Email ID" required onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>Contact Number <span className="required-star">*</span></label>
              <div className="phone-input-wrapper">
                <span className="country-code">
                  <img src={FlagIcon} alt="India Flag" className="form-flag-icon" />
                  +91
                </span>
                <input type="tel" name="contactNumber" placeholder="Enter Contact Number" required onChange={handleChange} />
              </div>
            </div>
            <div className="form-row-grid">
              <div className="form-group">
                <label>Service Required *</label>
                <select name="service" required onChange={handleChange}>
                  <option value="">Select Your Service</option>
                  <option value="ai">AI Agent Build</option>
                  <option value="web-dev">Web Development</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget Range *</label>
                <select name="budget" required onChange={handleChange}>
                  <option value="">Select Budget</option>
                  <option value="1k-3k">$1,000 - $3,000</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Project Details *</label>
              <textarea name="projectDetails" rows="4" placeholder="Enter Project Details" required onChange={handleChange}></textarea>
            </div>
            <div className="form-actions-footer">
              <div className="attach-doc-btn">📎 Attach Your Document</div>
              <button type="submit" className="form-submit-btn">SUBMIT</button>
            </div>
          </form>
        </div>

      </div>

      {/* LOWER BLOCK: Tumhara Robot Asset Section bina layout kharab kiye yahan load hoga */}
      <ConnectExperts />
      <SchedulerSection/>
      <OfficeLocationsMap/>
      <FeaturesGrid/>
      <AgencyAwards/>
      <TrustShowcase/>
      <IndustryExpertise/>
      <TestimonialSlider/>
      <FaqSection/>
      <ContactEnquiry/>
      <LetsTalkCTA/>
    </>
  );
}

export default ContactUs;