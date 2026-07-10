import React, { useState } from "react";
import "./GetInTouchModal.css";

function GetInTouchModal({ onClose, onSubmitSuccess, isForced = false }) {
  const [formData, setFormData] = useState({
    fullName: "",
    emailId: "",
    contactNumber: "",
    serviceRequired: "",
    budgetRange: "",
    projectDetails: "",
  });

  const handleClose = () => {
    if (isForced) return; // Forced lock mein background click ya cross se close allowed nahi hai
    if (onClose) onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Lead Data Submitted:", formData);
    if (onSubmitSuccess) onSubmitSuccess();
  };

  return (
    <div className="modal-blur-overlay" onClick={handleClose}>
      <div className="get-in-touch-modal-card" onClick={(e) => e.stopPropagation()}>
        
        {/* Agar forced lock nahi hai tabhi cross icon dikhao */}
        {!isForced && (
          <button className="modal-close-cross" onClick={handleClose}>✕</button>
        )}

        <div className="modal-header-block">
          <h2>{isForced ? "🔒 Unlock Your Template & Schema" : "Get in Touch"}</h2>
          <p>{isForced ? "Please fill in your details to instantly copy or download the n8n JSON file." : "Our experts will reach out within 24 hours."}</p>
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
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* 🎯 CONDITION: Agar forced (Copy/Download click) hai toh niche ki extra details chipa do */}
          {!isForced && (
            <>
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
            </>
          )}

          <div className="modal-action-footer" style={{ justifyContent: isForced ? "center" : "space-between", marginTop: "10px" }}>
            {!isForced && (
              <button type="button" className="attach-document-btn">
                <span className="paperclip-icon">📎</span> Attach Your Document
              </button>
            )}
            
            <button 
              type="submit" 
              className="modal-submit-cta" 
              style={{ width: isForced ? "100%" : "auto" }}
            >
              {isForced ? "UNLOCK & DOWNLOAD NOW" : "SUBMIT"}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}

export default GetInTouchModal;