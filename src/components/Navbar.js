import React, { useState, useEffect } from 'react';
import './Navbar.css';
// Theme toggle removed per requirement
import WhatsAppButton from './WhatsAppButton';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text">Harsh Chimnani</span>
          <span className="logo-subtitle">Front-End Developer</span>
        </div>
        <div className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a>
          <a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
          <a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</a>
          <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
        </div>
        <div className="nav-right">
          <WhatsAppButton />
        </div>
        <div className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

