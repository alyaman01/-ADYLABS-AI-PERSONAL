import React from 'react';
import './Footer.css';
import LogoImg from '../assets/logos/mainlogo.jpeg'; 

// Saare 8 social icons aur required arrow/eye/location icons
import { 
  FaLinkedin, 
  FaYoutube, 
  FaInstagram, 
  FaFacebook, 
  FaXTwitter,
  FaGlobe,
  FaWhatsapp,
  FaGithub, 
  FaArrowRightLong,
  FaRegEye,
  FaArrowDown,
  FaLocationDot 
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer-wrapper">
      
      {/* ==========================================
         PART 1: LOGO & 8 BIG SOCIAL ICONS ROW
         ========================================== */}
      <div className="footer-top-brand-row">
        <div className="footer-logo-block">
          <img src={LogoImg} alt="AdyLabs AI Logo" className="footer-main-logo-img" />
          <span className="footer-brand-name">AdyLabs AI</span>
        </div>
        
        {/* Poore 8 exact icons row */}
        <div className="footer-social-wrap">
          <a href="#" className="social-icon-box"><FaLinkedin className="social-icon" /></a>
          <a href="#" className="social-icon-box"><FaYoutube className="social-icon" /></a>
          <a href="#" className="social-icon-box"><FaXTwitter className="social-icon" /></a>
          <a href="#" className="social-icon-box"><FaInstagram className="social-icon" /></a>
          <a href="#" className="social-icon-box"><FaFacebook className="social-icon" /></a>
          <a href="#" className="social-icon-box"><FaGlobe className="social-icon" /></a>
          <a href="#" className="social-icon-box"><FaWhatsapp className="social-icon" /></a>
          <a href="#" className="social-icon-box"><FaGithub className="social-icon" /></a>
        </div>
      </div>

      {/* ==========================================
         PART 2: BOLD BLACK LINKS CONTAINER
         ========================================== */}
      <div className="footer-black-container">
        
        {/* Column 1: Join Us */}
        <div className="footer-links-col">
          <h4 className="col-heading">Join US</h4>
          <ul className="col-links-list">
            <li><a href="#">WhatsApp help</a></li>
            <li><a href="#">WhatsApp Channel</a></li>
            <li><a href="#">WhatsApp Group</a></li>
            <li><a href="#">Teligram Group</a></li>
            <li><a href="#">Teligram Channel</a></li>
          </ul>
          <button className="compney-deck-btn">
            <FaArrowDown size={18} className="deck-icon" />
            Compney Deck
          </button>
        </div>

        {/* Column 2: Compnies */}
        <div className="footer-links-col">
          <h4 className="col-heading">Compnies</h4>
          <ul className="col-links-list">
            <li><a href="https://adymire.com" target="_blank" rel="noreferrer">Adymire.com</a></li>
            <li><a href="#">Adytly.com</a></li>
            <li><a href="#">Graphio.design</a></li>
            <li><a href="#">CodeLencer.com</a></li>
            <li><a href="#">Brandimplus.com</a></li>
            <li><a href="#">ZooQ Consultancy Service</a></li>
            <li><a href="#">Zylobit.com</a></li>
            <li><a href="#">Adypreneur.com</a></li>
          </ul>
        </div>

        {/* Column 3: Compney */}
        <div className="footer-links-col">
          <h4 className="col-heading">Compney</h4>
          <ul className="col-links-list">
            <li><a href="#">About US</a></li>
            <li><a href="#">Contact US</a></li>
            <li><a href="#">Carriers& Jobs</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
        </div>

        {/* Column 4: Our Servises */}
        <div className="footer-links-col">
          <h4 className="col-heading">Our Servises</h4>
          <ul className="col-links-list">
            <li><a href="#">ChatBots</a></li>
            <li><a href="#">Voice AI Agents</a></li>
            <li><a href="#">AI Automations</a></li>
            <li><a href="#">LLMs Taraning</a></li>
            <li><a href="#">RAG System</a></li>
            <li><a href="#">WhatsApp Automation</a></li>
            <li><a href="#">Email Automation</a></li>
          </ul>
        </div>

      </div>

      {/* ==========================================
         PART 3: CONTACT SECTION & WATERMARK (SEPARATE FLOW)
         ========================================== */}
      <div className="footer-contact-zone">
        
        {/* Contact Info (Pehle top par Content block aayega) */}
        <div className="contact-content-main-block">
          <h3 className="contact-zone-title">Contect</h3>
          
          <div className="contact-grid-layout">
            {/* Helpline box */}
            <div className="contact-meta-box">
              <span className="meta-box-label">Compney Helpline</span>
              <a href="tel:+917302356804" className="yellow-action-bar">
                Call Us <FaArrowRightLong size={18} className="bar-arrow" />
              </a>
            </div>

            {/* Email box */}
            <div className="contact-meta-box">
              <span className="meta-box-label">Email:</span>
              <div className="action-with-view-wrap">
                <a href="mailto:hello@zylobit.com" className="yellow-action-bar">
                  Email Us <FaArrowRightLong size={18} className="bar-arrow" />
                </a>
                <FaRegEye size={24} className="side-eye-icon" />
              </div>
            </div>

            {/* Help Support Box */}
            <div className="contact-meta-box">
              <span className="meta-box-label">Help & Support :</span>
              <div className="action-with-view-wrap">
                <a href="#" className="yellow-action-bar">
                  Email US <FaArrowRightLong size={18} className="bar-arrow" />
                </a>
                <FaRegEye size={24} className="side-eye-icon" />
              </div>
            </div>

            {/* Address Box */}
            <div className="contact-meta-box address-box-override">
              <span className="meta-box-label">
                <FaLocationDot size={20} style={{ marginRight: '8px', color: '#111' }} /> 
                Address
              </span>
              <p className="address-para-text">
                City Gajraula , District Amroha ,<br />
                Uttar Predesh 244242 , India
              </p>
            </div>
          </div>
        </div>

        {/* Giant Watermark - Ab ye bilkul niche line ke flow mein aayega bina upar overlap kiye */}
        <div className="giant-watermark-text">AdyLabs</div>
        
      </div>

      {/* ==========================================
         PART 4: BOTTOM LEGAL ATTRIBUTION MARKS
         ========================================== */}
      <div className="footer-bottom-legal-block">
        <p className="from-attribution">
          From <span className="bold-company-brand">Adymire Technologies Pvt. Ltd.</span>
        </p>

        <div className="legal-links-row">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Cancelation Policy</a>
          <a href="#">Cookies Settings</a>
        </div>

        <p className="copyright-line-text">
          @2026 <span className="highlight-brand">AdyLabs AI</span> All Right Reserved
        </p>
      </div>

    </footer>
  );
}

export default Footer;