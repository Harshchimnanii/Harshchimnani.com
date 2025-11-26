import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-content">
          <div className="experience-card">
            <div className="experience-header">
              <div className="experience-icon">
                <i className="fas fa-briefcase"></i>
              </div>
              <div className="experience-info">
                <h3>Internship</h3>
                <h4>Orinson Technologies Private Limited</h4>
                <span className="experience-duration">1 Month</span>
              </div>
            </div>
            <div className="experience-description">
              <p>
                Completed a one-month internship where I worked on multiple front-end projects 
                using HTML, CSS, and JavaScript.
              </p>
              <div className="experience-projects">
                <h5>Projects Completed:</h5>
                <ul>
                  <li>
                    <i className="fas fa-check"></i>
                    Restaurant landing page (HTML/CSS/JS)
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Personal profile page (CSS + responsive design)
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Basic eCommerce landing page
                  </li>
                  <li>
                    <i className="fas fa-check"></i>
                    Laptop product showcase page (HP Victus, HP Pavilion, ASUS Vivobook)
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="other-projects-section">
            <h3 className="other-projects-title">Other Notable Projects</h3>
            <div className="other-projects-grid">
              <div className="other-project-card">
                <div className="project-icon">
                  <i className="fas fa-robot"></i>
                </div>
                <h4>Voice-based AI Assistant</h4>
                <p>Created "Pasta" - an AI assistant that can talk, control apps, and respond like ChatGPT</p>
              </div>
              <div className="other-project-card">
                <div className="project-icon">
                  <i className="fas fa-cloud"></i>
                </div>
                <h4>CI/CD Learning</h4>
                <p>Implemented CI/CD pipeline with AWS (GitHub → S3 deployment)</p>
              </div>
              <div className="other-project-card">
                <div className="project-icon">
                  <i className="fas fa-code"></i>
                </div>
                <h4>Java & Python Tasks</h4>
                <p>Completed various coding tasks and projects in Java and Python</p>
              </div>
              <div className="other-project-card">
                <div className="project-icon">
                  <i className="fas fa-layer-group"></i>
                </div>
                <h4>MERN Stack Learning</h4>
                <p>Currently learning and building projects with the MERN stack</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

