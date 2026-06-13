import React from 'react';
import './FloatingWidgets.css';

// WhatsApp icon ko apne asset folder se import karo
import whatsappIcon from '../assets/contact/whatsapp.webp'; // Path apne hisab se verify kar lena bhai

function FloatingWidgets() {
  const handleWhatsAppClick = () => {
    // Apna active WhatsApp number lagao (with country code, bina '+' ke, jaise: 919999xxxxxx)
    window.open("https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20know%20more%20about%20your%20services.", "_blank");
  };

  return (
    <div className="floating-container">
      {/* Keval WhatsApp Button */}
      <button className="floating-btn whatsapp-btn" onClick={handleWhatsAppClick} title="Chat on WhatsApp">
        <img src={whatsappIcon} alt="WhatsApp" className="floating-icon" />
      </button>
    </div>
  );
}

export default FloatingWidgets;