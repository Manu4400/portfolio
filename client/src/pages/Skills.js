import React, { useEffect, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    fetch('/api/skills')
      .then(res => res.json())
      .then(data => setSkills(data));
  }, []);

  if (!skills) return <div>Loading...</div>;
  if (!Array.isArray(skills)) return <div>No skills found.</div>;

  // Group by category
  const grouped = skills.reduce((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-page">
      <div className="container">
        <h1>Technical Skills</h1>
        {Object.entries(grouped).map(([category, items]) => (
          <div className="skills-section" key={category}>
            <h3>{category}</h3>
            <div className="skill-badges">
              {items.map((s, i) => <span key={s.id || i} className="skill-badge">{s.name}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 