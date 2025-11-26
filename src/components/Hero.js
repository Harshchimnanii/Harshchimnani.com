import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <i className="fas fa-code"></i>
              <span>Aspiring Front-End Developer</span>
            </div>
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Harsh Chimnani</span>
            </h1>
            <p className="hero-subtitle">
              Passionate about creating clean UI, building smart digital solutions, 
              and learning modern technologies. Currently pursuing B.Tech CSE at GLA University.
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">2027</span>
                <span className="stat-label">Graduation Year</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Agra</span>
                <span className="stat-label">Location</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Available</span>
                <span className="stat-label">For Opportunities</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>
                <i className="fas fa-envelope"></i>
                Get In Touch
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('projects')}>
                <i className="fas fa-briefcase"></i>
                View Projects
              </button>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Harshchimnani" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/harshchimnanii" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:chimnaniharsh4@gmail.com" aria-label="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-wrapper">
              <img src="/profile.jpg" alt="Harsh Chimnani" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

