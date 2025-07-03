import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const experiences = [
  {
    company: 'Vstan4u Solution, Bengaluru',
    position: 'Intern — Java FullStack',
    date: 'Feb - June 2025',
    description: [
      'Gained practical experience in developing website by using core java, Spring Boot, HTML, CSS, and JS'
    ]
  },
  {
    company: 'Inventron Technologies, Bengaluru',
    position: 'Intern — Innovation and Entrepreneurship',
    date: 'Oct – Nov 2023',
    description: [
      'Designed a solar-powered mobile charging case and developed its prototype and business plan.',
      'Conducted market research and collaborated in a team environment.'
    ]
  },
  {
    company: 'Teragon Ed.Tech, Hassan',
    position: 'Intern — Blockchain / Cloud Computing / Web 3.0',
    date: 'Oct – Nov 2022',
    description: [
      'Gained practical experience in decentralized systems, cloud platform, and web technologies.'
    ]
  }
];

const Experience = () => {
  return (
    <div className="experience-page">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="experience-header"
        >
          <h1>Professional Experience</h1>
          <p>My career journey and professional background</p>
        </motion.div>
        <div className="experience-timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className={`experience-item ${idx % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="position">{exp.position}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                  </div>
                </div>
                <div className="experience-meta">
                  <div className="date-range">
                    <FaCalendarAlt />
                    <span>{exp.date}</span>
                  </div>
                </div>
                <ul>
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience; 