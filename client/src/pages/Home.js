import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero/Hero.jsx';
import ProjectCard from '../components/ProjectCard/ProjectCard.jsx';
import SkillCard from '../components/SkillCard/SkillCard.jsx';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      
      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>Featured Projects</h2>
            <p>Some of my recent work</p>
          </motion.div>

          <div className="projects-grid">
            {/* Add your project cards here */}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="view-all-projects"
          >
            <Link to="/projects" className="btn btn-outline">
              View All Projects <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="skills-preview">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
          >
            <h2>Skills & Technologies</h2>
            <p>Technologies I work with</p>
          </motion.div>

          <div className="skills-grid">
            {/* Add your skill cards here */}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="view-all-skills"
          >
            <Link to="/skills" className="btn btn-outline">
              View All Skills <FaArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="cta-content"
          >
            <h2>Let's Work Together</h2>
            <p>Have a project in mind? Let's discuss how we can bring your ideas to life.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 