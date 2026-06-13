import { useState } from "react";
// 1️⃣ LINK IMPORT
import { Link } from 'react-router-dom';
import "./navbar.css";
import Logo from "../assets/logos/mainlogo.jpeg";
import DownloadIcon from "../assets/icons/download.svg";
import PhoneIcon from "../assets/icons/call icon.svg";

function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <nav className="navbar">

      {/* LEFT - Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo-link-wrapper" onClick={() => setActive("Home")}>
          <div className="logo-container">
            <img src={Logo} alt="logo" />
            <h1>AdyLabs AI</h1>
          </div>
        </Link>
      </div>

      {/* CENTER - Links */}
      <ul className="nav-links">
        <li
          className={active === "Home" ? "active" : ""}
          onClick={() => setActive("Home")}
        >
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Home</Link>
        </li>

        {/* 🎯 Services Dropdown Structure with 3 New Options */}
        <li
          className={`dropdown-nav-item ${active === "Services" ? "active" : ""}`}
          onClick={() => setActive("Services")}
        >
          <span className="dropdown-trigger-link">Services</span>
          
          <ul className="dropdown-menu-card">
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="dropdown-menu-icon">🤖</span> AI Chat Bot Automation
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="dropdown-menu-icon">🎙️</span> Voice AI Agent Automation
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="dropdown-menu-icon">📈</span> AI Sales Agent
              </Link>
            </li>
            {/* ✨ Naye Options Added 👇 */}
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="dropdown-menu-icon">💬</span> WhatsApp Automation
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="dropdown-menu-icon">⚙️</span> Custom CRM Integration
              </Link>
            </li>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <span className="dropdown-menu-icon">📊</span> AI Lead Qualification
              </Link>
            </li>
          </ul>
        </li>

        <li
          className={active === "Portfolio" ? "active" : ""}
          onClick={() => setActive("Portfolio")}
        >
          Portfolio
        </li>

        <li
          className={active === "About Us" ? "active" : ""}
          onClick={() => setActive("About Us")}
        >
          About Us
        </li>

        <li
          className={active === "Pricing Plan" ? "active" : ""}
          onClick={() => setActive("Pricing Plan")}
        >
          Pricing Plan
        </li>
      </ul>

      {/* RIGHT - Buttons */}
      <div className="navbar-right">
        <Link to="/marketplace" style={{ textDecoration: 'none' }}>
        <button className="navbar-market-btn">
        <img src={DownloadIcon} alt="download" />
          Json Marketplace
        </button>
       </Link>

        <Link to="/contact" style={{ textDecoration: 'none' }} onClick={() => setActive("")}>
          <button className="contact-btn">
            <img src={PhoneIcon} alt="phone" />
            Contact Us
          </button>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;