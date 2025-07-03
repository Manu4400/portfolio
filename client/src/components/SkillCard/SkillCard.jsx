import React from 'react';
import { motion } from 'framer-motion';
import './SkillCard.css';

interface Skill {
  id: number;
  name: string;
  category: string;
  proficiency_level: number;
  icon?: string;
}

interface SkillCardProps {
  skill: Skill;
  delay?: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, delay = 0 }) => {
  return (
    <motion.div
      className="skill-card"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="skill-icon">
        {skill.icon ? (
          <i className={skill.icon}></i>
        ) : (
          <span className="skill-initial">{skill.name.charAt(0)}</span>
        )}
      </div>
      
      <div className="skill-info">
        <h4 className="skill-name">{skill.name}</h4>
        <span className="skill-category">{skill.category}</span>
      </div>

      <div className="skill-progress">
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.proficiency_level}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: delay + 0.2 }}
          />
        </div>
        <span className="progress-percentage">{skill.proficiency_level}%</span>
      </div>
    </motion.div>
  );
};

export default SkillCard; 
 