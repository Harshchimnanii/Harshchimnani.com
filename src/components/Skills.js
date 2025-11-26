import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills = () => {
  const skillRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBar = entry.target.querySelector('.skill-progress');
            const width = progressBar.getAttribute('data-width');
            progressBar.style.width = width;
          }
        });
      },
      { threshold: 0.5 }
    );

    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const frontendSkills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
  ];

  const backendSkills = [
    { name: 'Java', level: 65 },
    { name: 'MySQL', level: 60 },
  ];

  const toolsSkills = [
    { name: 'Git', level: 75 },
    { name: 'GitHub', level: 75 },
    { name: 'VS Code', level: 80 },
    { name: 'Linux', level: 70 },
  ];

  const otherSkills = [
    { name: 'DSA', level: 70 },
    { name: 'DevOps Basics', level: 50 },
    { name: 'Cloud Computing', level: 45 },
  ];

  const softSkills = [
    'Communication',
    'Teamwork',
    'Problem Solving',
    'Quick Learner',
    'Consistent',
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-code"></i>
              Front-End
            </h3>
            <div className="skill-list">
              {frontendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  ref={(el) => (skillRefs.current[index] = el)}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-server"></i>
              Backend / DB
            </h3>
            <div className="skill-list">
              {backendSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  ref={(el) => (skillRefs.current[frontendSkills.length + index] = el)}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-tools"></i>
              Tools
            </h3>
            <div className="skill-list">
              {toolsSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  ref={(el) => (skillRefs.current[frontendSkills.length + backendSkills.length + index] = el)}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <h3 className="category-title">
              <i className="fas fa-star"></i>
              Other Skills
            </h3>
            <div className="skill-list">
              {otherSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="skill-item"
                  ref={(el) => (skillRefs.current[frontendSkills.length + backendSkills.length + toolsSkills.length + index] = el)}
                >
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      data-width={`${skill.level}%`}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="soft-skills">
          <h3 className="soft-skills-title">Soft Skills</h3>
          <div className="soft-skills-list">
            {softSkills.map((skill) => (
              <div key={skill} className="soft-skill-item">
                <i className="fas fa-check-circle"></i>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

