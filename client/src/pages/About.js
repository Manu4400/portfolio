import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    fetch('/api/about')
      .then(res => res.json())
      .then(data => setAboutData(data));
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div className="about-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="about-header"
        >
          <h1>About Me</h1>
          <p>Get to know more about my background and experience</p>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-image"
          >
            <div className="image-container">
              <img 
                src="/profile.jpg" 
                alt={aboutData.name}
                className="profile-image"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="about-info"
          >
            <h2>{aboutData.name}</h2>
            <h3 className="title">{aboutData.title}</h3>
            <p className="description">{aboutData.description}</p>

            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>{aboutData.email}</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>{aboutData.phone}</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Bengaluru, India</span>
              </div>
              <div className="contact-item">
                <a href={aboutData.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            <div className="resume-download">
              <a 
                href="/Resume.pdf" 
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="about-highlights"
        >
          <div className="highlights-grid">
            <div className="highlight-item">
              <h4>Frontend Development</h4>
              <p>Creating responsive and interactive user interfaces with modern frameworks and libraries.</p>
            </div>
            <div className="highlight-item">
              <h4>Backend Development</h4>
              <p>Building robust server-side applications and RESTful APIs with various technologies.</p>
            </div>
            <div className="highlight-item">
              <h4>Database Design</h4>
              <p>Designing efficient database schemas and optimizing query performance.</p>
            </div>
            <div className="highlight-item">
              <h4>Problem Solving</h4>
              <p>Analytical thinking and creative solutions to complex technical challenges.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 