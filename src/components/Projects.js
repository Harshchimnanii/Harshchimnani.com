import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Restaurant Landing Page',
      description: 'Responsive restaurant website with interactive navigation and clean layout built with HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/Harshchimnani',
    },
    {
      id: 2,
      title: 'Personal Profile Page',
      description: 'Personal profile page with responsive design and modern CSS styling.',
      tech: ['HTML', 'CSS'],
      category: 'web',
      github: 'https://github.com/Harshchimnani',
    },
    {
      id: 3,
      title: 'E-Commerce Landing Page',
      description: 'Product-focused layout with pricing sections and clear CTAs for an e-commerce platform.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'web',
      github: 'https://github.com/Harshchimnani',
    },
    {
      id: 4,
      title: 'Laptop Product Showcase',
      description: 'GitHub-style laptop showcase highlighting HP Victus, HP Pavilion, and ASUS Vivobook models.',
      tech: ['HTML', 'CSS'],
      category: 'web',
      github: 'https://github.com/Harshchimnani',
    },
    {
      id: 5,
      title: 'Voice-based AI Assistant (Pasta)',
      description: 'AI assistant that can talk, control apps, and respond like ChatGPT. Built with voice recognition and AI integration.',
      tech: ['Python', 'AI/ML', 'Voice Recognition'],
      category: 'ai',
      github: 'https://github.com/Harshchimnani',
    },
    {
      id: 6,
      title: 'CI/CD Pipeline with AWS',
      description: 'Implemented CI/CD pipeline for automated deployment from GitHub to AWS S3.',
      tech: ['Git', 'GitHub Actions', 'AWS', 'DevOps'],
      category: 'devops',
      github: 'https://github.com/Harshchimnani',
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-filter">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'web' ? 'active' : ''}`}
            onClick={() => setFilter('web')}
          >
            Web
          </button>
          <button
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI/ML
          </button>
          <button
            className={`filter-btn ${filter === 'devops' ? 'active' : ''}`}
            onClick={() => setFilter('devops')}
          >
            DevOps
          </button>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <div className="project-icon">
                  <i className="fas fa-folder"></i>
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

