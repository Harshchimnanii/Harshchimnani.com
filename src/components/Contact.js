import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form submission logic
    // For now, we'll use mailto or WhatsApp
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nMessage: ${formData.message}`;
    const whatsappMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918791996677?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      projectType: '',
      message: '',
    });
    
    alert('Redirecting to WhatsApp...');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>Get In Touch</h3>
              <p>
                I'm available for new opportunities and would love to discuss your project requirements. 
                Feel free to reach out via any of the methods below.
              </p>
              <div className="contact-methods">
                <a href="mailto:chimnaniharsh4@gmail.com" className="contact-item">
                  <i className="fas fa-envelope"></i>
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">chimnaniharsh4@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+918791996677" className="contact-item">
                  <i className="fas fa-phone"></i>
                  <div>
                    <span className="contact-label">Phone</span>
                    <span className="contact-value">+91 8791996677</span>
                  </div>
                </a>
                <a
                  href="https://wa.me/918791996677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item whatsapp-item"
                >
                  <i className="fab fa-whatsapp"></i>
                  <div>
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-value">Message me on WhatsApp</span>
                  </div>
                </a>
                <div className="contact-item">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <span className="contact-label">Location</span>
                    <span className="contact-value">Agra, India</span>
                  </div>
                </div>
              </div>
              <div className="social-links">
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
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Project Type</option>
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="ai">AI/ML Solution</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                <i className="fab fa-whatsapp"></i>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

