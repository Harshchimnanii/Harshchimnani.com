import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onEnter }) => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Show text animation after a brief delay
    const textTimer = setTimeout(() => setShowText(true), 300);
    // Auto-enter after 7 seconds
    const autoEnter = setTimeout(() => {
      setShowWelcome(false);
      onEnter();
    }, 7000);

    return () => {
      clearTimeout(textTimer);
      clearTimeout(autoEnter);
    };
  }, []);

  if (!showWelcome) return null;

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <div className={`welcome-text ${showText ? 'visible' : ''}`}>
          <h1 className="welcome-title">
            <span className="welcome-word">Namaste,</span>
            <span className="welcome-word">welcome</span>
            <span className="welcome-word">to</span>
            <span className="welcome-word highlight">my</span>
            <span className="welcome-word">website</span>
          </h1>
          <p className="welcome-subtitle">Enjoy the experience</p>
        </div>
      </div>
      <div className="welcome-particles">
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${Math.random() * 3 + 2}s`
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default WelcomeScreen;

