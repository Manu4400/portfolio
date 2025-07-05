import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    fetch('/api/experience')
      .then(res => res.json())
      .then(data => setExperiences(data));
  }, []);

  if (!experiences) return <div>Loading...</div>;
  if (!Array.isArray(experiences)) return <div>No experience found.</div>;

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
              key={exp.id || idx}
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
                    <span>{exp.start_date} - {exp.is_current ? 'Present' : exp.end_date}</span>
                  </div>
                </div>
                <ul>
                  <li>{exp.description}</li>
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