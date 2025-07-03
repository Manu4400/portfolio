import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode } from 'react-icons/fa';
import './ProjectCard.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  project_url?: string;
  github_url?: string;
  image_url?: string;
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay = 0 }) => {
  const technologies = project.technologies.split(',').map(tech => tech.trim());

  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10 }}
    >
      <div className="project-image">
        {project.image_url ? (
          <img src={project.image_url} alt={project.title} />
        ) : (
          <div className="project-placeholder">
            <FaCode />
          </div>
        )}
        {project.featured && (
          <div className="featured-badge">
            Featured
          </div>
        )}
      </div>

      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-technologies">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {project.project_url && (
            <a
              href={project.project_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="View Live Project"
            >
              <FaExternalLinkAlt />
              <span>Live Demo</span>
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              aria-label="View Source Code"
            >
              <FaGithub />
              <span>Source</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard; 