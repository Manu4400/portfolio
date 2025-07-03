import './Skills.css';

const skills = [
  'Java', 'C', 'Python', 'HTML', 'CSS', 'SQL', 'DSA'
];
const tools = [
  'MongoDB', 'Node.js', 'TensorFlow', 'Raspberry Pi', 'React.js', 'SpringBoot'
];
const design = ['Figma'];
const interests = ['Painting', 'Photography', 'Travelling', 'Dancing'];

const Skills = () => (
  <div className="skills-page">
    <div className="container">
      <h1>Technical Skills and Interests</h1>
      <div className="skills-section">
        <h3>Languages</h3>
        <div className="skill-badges">
          {skills.map((s, i) => <span key={i} className="skill-badge">{s}</span>)}
        </div>
      </div>
      <div className="skills-section">
        <h3>Tools & Tech</h3>
        <div className="skill-badges">
          {tools.map((t, i) => <span key={i} className="skill-badge">{t}</span>)}
        </div>
      </div>
      <div className="skills-section">
        <h3>Design</h3>
        <div className="skill-badges">
          {design.map((d, i) => <span key={i} className="skill-badge">{d}</span>)}
        </div>
      </div>
      <div className="skills-section">
        <h3>Interests</h3>
        <div className="skill-badges">
          {interests.map((int, i) => <span key={i} className="skill-badge">{int}</span>)}
        </div>
      </div>
    </div>
  </div>
);

export default Skills; 