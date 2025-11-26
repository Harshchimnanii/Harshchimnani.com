import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} Harsh Chimnani. All rights reserved.</p>
            <p className="footer-tagline">creating my own universe in the world of fake narratives</p>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/Harshchimnani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/harshchimnanii"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="mailto:chimnaniharsh4@gmail.com"
              aria-label="Email"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/918791996677"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

