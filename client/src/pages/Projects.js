import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data));
  }, []);

  if (!projects) return <div>Loading...</div>;
  if (!Array.isArray(projects)) return <div>No projects found.</div>;

  return (
    <div className="projects-page">
      <div className="container">
        <h1>Projects</h1>
        <div className="projects-list">
          {projects.map((proj, idx) => (
            <div key={proj.id || idx} className="project-card">
              <h3 className="project-title">{proj.title}</h3>
              <h4>{proj.description}</h4>
              <span className="project-date">{proj.start_date} - {proj.end_date || 'Present'}</span>
              <ul>
                <li>{proj.long_description || proj.description}</li>
              </ul>
              {proj.project_url && (
                <a href={proj.project_url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  Live Project
                </a>
              )}
              {proj.github_url && (
                <a href={proj.github_url} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                  GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 