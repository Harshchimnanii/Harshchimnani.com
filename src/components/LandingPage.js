import React, { useState, useEffect, useRef } from 'react';
import './LandingPage.css';

const LandingPage = ({ onEnter }) => {
  const [currentText, setCurrentText] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [canEnter, setCanEnter] = useState(false);
  const startTimeRef = useRef(Date.now());

  const texts = [
    "Front-End Developer",
    "UI/UX Enthusiast",
    "Creative Coder",
    "Tech Innovator"
  ];

  useEffect(() => {
    setShowContent(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    
    // Enable enter button after 7 seconds
    const enableTimer = setTimeout(() => {
      setCanEnter(true);
    }, 7000);
    
    // Auto-enter after 7 seconds
    const autoEnterTimer = setTimeout(() => {
      onEnter();
    }, 7000);

    return () => {
      clearInterval(interval);
      clearTimeout(enableTimer);
      clearTimeout(autoEnterTimer);
    };
  }, []);
  
  const handleEnter = () => {
    const elapsed = Date.now() - startTimeRef.current;
    // Only allow enter if 7 seconds have passed
    if (elapsed >= 7000) {
      onEnter();
    }
  };

  return (
    <div className="landing-page">
      <div className="landing-background">
        <div className="landing-gradient"></div>
        <div className="landing-particles">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="landing-particle" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className={`landing-content ${showContent ? 'visible' : ''}`}>
        <div className="landing-greeting">
          <span className="greeting-text">Hello, I'm</span>
        </div>
        
        <h1 className="landing-name">
          <span className="name-letter">H</span>
          <span className="name-letter">a</span>
          <span className="name-letter">r</span>
          <span className="name-letter">s</span>
          <span className="name-letter">h</span>
          <span className="name-space"> </span>
          <span className="name-letter">C</span>
          <span className="name-letter">h</span>
          <span className="name-letter">i</span>
          <span className="name-letter">m</span>
          <span className="name-letter">n</span>
          <span className="name-letter">a</span>
          <span className="name-letter">n</span>
          <span className="name-letter">i</span>
        </h1>

        <div className="landing-role">
          <span className="role-prefix">I'm a </span>
          <span className="role-text typing">{texts[currentText]}</span>
          <span className="cursor">|</span>
        </div>

        <p className="landing-description">
          Passionate about creating clean UI, building smart digital solutions, 
          and learning modern technologies. Currently pursuing B.Tech CSE at GLA University.
        </p>

        <div className="landing-buttons">
          <button 
            className={`landing-btn primary ${!canEnter ? 'disabled' : ''}`} 
            onClick={handleEnter}
            disabled={!canEnter}
          >
            <span>{canEnter ? 'Explore Portfolio' : 'Loading...'}</span>
            {canEnter && <i className="fas fa-arrow-right"></i>}
            {!canEnter && <i className="fas fa-spinner fa-spin"></i>}
          </button>
          <a 
            href="https://wa.me/918791996677" 
            target="_blank" 
            rel="noopener noreferrer"
            className="landing-btn secondary"
          >
            <i className="fab fa-whatsapp"></i>
            <span>Let's Talk</span>
          </a>
        </div>

        <div className="landing-scroll">
          <span>Scroll to explore</span>
          <div className="scroll-indicator">
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>
      </div>

      <div className="landing-stats">
        <div className="stat-item">
          <div className="stat-number">2027</div>
          <div className="stat-label">Graduation</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Agra</div>
          <div className="stat-label">Location</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Available</div>
          <div className="stat-label">Status</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

