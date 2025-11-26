import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              Aspiring Front-End Developer and tech enthusiast pursuing B.Tech CSE at GLA University. 
              Passionate about creating clean UI, building smart digital solutions, and learning modern technologies.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <h4>Education</h4>
                  <p>B.Tech Computer Science (Core) - GLA University, Mathura</p>
                  <span className="detail-year">Graduating 2027</span>
                </div>
              </div>
              <div className="detail-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4>Location</h4>
                  <p>Agra, India</p>
                </div>
              </div>
              <div className="detail-item">
                <i className="fas fa-birthday-cake"></i>
                <div>
                  <h4>Date of Birth</h4>
                  <p>22nd November 2005</p>
                </div>
              </div>
            </div>
            <div className="about-goals">
              <h3>Career Goals</h3>
              <div className="goals-grid">
                <div className="goal-card">
                  <i className="fas fa-laptop-code"></i>
                  <h4>Primary Role</h4>
                  <p>Front-End Developer</p>
                </div>
                <div className="goal-card">
                  <i className="fas fa-mobile-alt"></i>
                  <h4>Long-term Goal</h4>
                  <p>Become an App Developer</p>
                </div>
                <div className="goal-card">
                  <i className="fas fa-lightbulb"></i>
                  <h4>Interests</h4>
                  <p>Web Dev, UI/UX, DevOps, Cloud, AI</p>
                </div>
              </div>
            </div>
            <div className="about-personality">
              <h3>Strengths & Personality</h3>
              <div className="personality-tags">
                <span className="tag">Curious</span>
                <span className="tag">Hardworking</span>
                <span className="tag">Tech-obsessed</span>
                <span className="tag">Good Communication</span>
                <span className="tag">Disciplined</span>
                <span className="tag">Consistent</span>
              </div>
            </div>
            <div className="about-hobbies">
              <h3>Hobbies & Interests</h3>
              <div className="hobbies-list">
                <div className="hobby-item">
                  <i className="fas fa-music"></i>
                  <span>Music</span>
                </div>
                <div className="hobby-item">
                  <i className="fas fa-film"></i>
                  <span>Watching Movies</span>
                </div>
                <div className="hobby-item">
                  <i className="fas fa-code"></i>
                  <span>Coding</span>
                </div>
                <div className="hobby-item">
                  <i className="fas fa-guitar"></i>
                  <span>Plays Kadence Ukulele</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

