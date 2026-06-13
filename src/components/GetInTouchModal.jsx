import { useState, useEffect } from "react";
import "./GetInTouchModal.css";

function GetInTouchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggeredSecondTime, setHasTriggeredSecondTime] = useState(false);

  // Form Field States
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    contactNumber: "",
    serviceRequired: "",
    budgetRange: "",
    projectDetails: "",
  });

  useEffect(() => {
    // 1️⃣ First Trigger: Jaise hi banda website pe aaye
    setIsOpen(true);
  }, []);

  const handleClose = () => {
    setIsOpen(false);

    // 2️⃣ Second Trigger Logic
    if (!hasTriggeredSecondTime) {
      setTimeout(() => {
        setIsOpen(true);
        setHasTriggeredSecondTime(true); 
      }, 10000); 
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead Data Submitted Successfully:", formData);
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    /* 🎯 FIX 1: Main overlay par handleClose lagaya taaki baahar click hone par popup band ho */
    <div className="modal-blur-overlay" onClick={handleClose}>
      
      {/* 🎯 FIX 2: e.stopPropagation() lagaya taaki form ke andar click karne par galti se modal band na ho */}
      <div className="get-in-touch-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button Cross Icon */}
        <button className="modal-close-cross" onClick={handleClose}>✕</button>

        <div className="modal-header-block">
          <h2>Get in Touch</h2>
          <p>Our experts will reach out within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="modal-lead-form">
          
          <div className="form-input-group">
            <label>Full Name<span className="required-star">*</span></label>
            <input 
              type="text" 
              name="fullName"
              placeholder="Enter Name" 
              required 
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div className="form-input-group">
            <label>Email ID<span className="required-star">*</span></label>
            <input 
              type="email" 
              name="emailId"
              placeholder="Enter Email ID" 
              required 
              value={formData.emailId}
              onChange={handleChange}
            />
          </div>

          <div className="form-input-group">
            <label>Contact Number<span className="required-star">*</span></label>
            <div className="phone-input-wrapper">
              <span className="country-code-flag">🇮🇳 +91</span>
              <input 
                type="tel" 
                name="contactNumber"
                placeholder="Enter Contact Number" 
                required 
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Row layout for Custom Select Fields */}
          <div className="form-row-grid">
            <div className="form-input-group">
              <label>Service Required<span className="required-star">*</span></label>
              <select 
                name="serviceRequired" 
                required 
                value={formData.serviceRequired}
                onChange={handleChange}
              >
                <option value="">Select Your Service</option>
                <option value="AI Chat Bot">AI Chat Bot Automation</option>
                <option value="Voice AI Agent">Voice AI Agent Automation</option>
                <option value="AI Sales Agent">AI Sales Agent Automation</option>
                <option value="WhatsApp Automation">WhatsApp Automation</option>
              </select>
            </div>

            <div className="form-input-group">
              <label>Budget Range<span className="required-star">*</span></label>
              <select 
                name="budgetRange" 
                required 
                value={formData.budgetRange}
                onChange={handleChange}
              >
                <option value="">Select Budget Range</option>
                <option value="1k-3k">$1,000 - $3,000</option>
                <option value="3k-5k">$3,000 - $5,000</option>
                <option value="5k+">$5,000+</option>
              </select>
            </div>
          </div>

          <div className="form-input-group">
            <label>Project Details<span className="required-star">*</span></label>
            <textarea 
              name="projectDetails"
              rows="3" 
              placeholder="Enter Project Details" 
              required
              value={formData.projectDetails}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Bottom Action Footer Control Panel */}
          <div className="modal-action-footer">
            <button type="button" className="attach-document-btn">
              <span className="paperclip-icon">📎</span> Attach Your Document
            </button>
            <button type="submit" className="modal-submit-cta">SUBMIT</button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default GetInTouchModal;