import './Projects.css';

const projects = [
  {
    title: 'EcoTrap – Wildlife Protection',
    description: 'AI-powered smart trap using IoT and image processing',
    date: 'Jan 2025',
    details: [
      'Developed ethical animal detection and alert system.',
      'Tools: Python, TensorFlow, OpenCV, Raspberry Pi, ESP32, Telegram API.'
    ],
    extra: 'IJIRT 171882'
  },
  {
    title: 'PrepSprint – Placement Guide',
    description: 'Interview prep web app',
    date: 'Live',
    details: [
      'Built with HTML, CSS, and JavaScript.'
    ],
    extra: 'Netlify Link',
    link: 'https://curious-rabanadas-8cf4f7.netlify.app'
  },
  {
    title: 'E-commerce website',
    description: 'proshop',
    date: '--',
    details: [
      'Technologies: MongoDB, Node.js, Express.js, React.js.'
    ]
  },
  {
    title: 'Case Management System',
    description: 'Reminder system for legal professionals',
    date: '--',
    details: [
      'Technologies: MongoDB, Node.js, HTML, CSS, JavaScript.'
    ]
  }
];

const Projects = () => (
  <div className="projects-page">
    <div className="container">
      <h1>Projects</h1>
      <div className="projects-list">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3 className="project-title">{proj.title}</h3>
            <h4>{proj.description}</h4>
            <span className="project-date">{proj.date}</span>
            <ul>
              {proj.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
            {proj.link && (
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                {proj.extra}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects; 