import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '918791996677';
  const defaultMessage = encodeURIComponent('Hi Harsh! I came across your portfolio and would like to connect.');

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <div className="whatsapp-button" onClick={handleClick} aria-label="Contact on WhatsApp">
      <i className="fab fa-whatsapp"></i>
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </div>
  );
};

export default WhatsAppButton;

