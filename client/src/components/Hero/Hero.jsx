import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

const heroData = {
  name: 'M R MANOHAR',
  title: 'Full Stack Developer',
  description: 'Detail-orientated computer science student with strong problem-solving skills in data structures and algorithms, adept at optimising solutions. Proficient in Java, C, HTML, and CSS. Committed to writing clean, scalable, and efficient code.',
  github_url: 'https://github.com/Manu4400?tab=repositories',
  linkedin_url: 'https://www.linkedin.com/in/manohar-m-r-a6411222b/',
  twitter_url: 'https://twitter.com/',
  profile_image: '/profile.jpg'
};

const Hero = () => {
  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-title"
            >
              Hi, I'm{' '}
              <span className="gradient-text">
                {heroData.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-subtitle"
            >
              {heroData.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="hero-description"
            >
              {heroData.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="hero-buttons"
            >
              <Link to="/contact" className="btn btn-primary">
                Get In Touch
              </Link>
              <Link to="/projects" className="btn btn-outline">
                View My Work
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="social-links"
            >
              <a
                href={heroData.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={heroData.linkedin_url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={heroData.twitter_url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-image"
          >
            <div className="image-container">
              <img 
                src={heroData.profile_image} 
                alt={heroData.name}
                className="profile-image"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="scroll-indicator"
          onClick={scrollToNext}
        >
          <FaArrowDown className="scroll-arrow" />
          <span>Scroll to explore</span>
        </motion.div>
      </div>

      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="floating-elements">
          <motion.div
            className="floating-element"
            animate={{
              y: [-20, 20, -20],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div
            className="floating-element"
            animate={{
              y: [20, -20, 20],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 