-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db   ;

-- About table
CREATE TABLE IF NOT EXISTS about (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    location VARCHAR(100),
    resume_url VARCHAR(500),
    profile_image VARCHAR(500),
    linkedin_url VARCHAR(500),
    github_url VARCHAR(500),
    twitter_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    icon VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL,
    long_description TEXT,
    technologies TEXT NOT NULL,
    project_url VARCHAR(500),
    github_url VARCHAR(500),
    image_url VARCHAR(500),
    featured BOOLEAN DEFAULT FALSE,
    status ENUM('completed', 'in-progress', 'planned') DEFAULT 'completed',
    start_date DATE,
    end_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Experience table
CREATE TABLE IF NOT EXISTS experience (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company VARCHAR(100) NOT NULL,
    position VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE,
    is_current BOOLEAN DEFAULT FALSE,
    company_url VARCHAR(500),
    location VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    subject VARCHAR(200),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data

-- About data
INSERT INTO about (
  name, 
  title, 
  description, 
  email, 
  phone, 
  location, 
  linkedin_url, 
  github_url,
  resume_url,
  profile_image
) VALUES (
  'M R MANOHAR',
  'Computer Science Student',
  'Detail-oriented computer science student with strong problem-solving skills in data structures and algorithms, adept at optimising solutions. Proficient in Java, C, HTML, and CSS. Committed to writing clean, scalable, and efficient code.',
  'manoharmr1234@gmail.com',
  '+91 8296705600',
  'Bengaluru, India',
  'https://www.linkedin.com/in/manohar-m-r-a6411222b/',
  'https://github.com/Manu4400',
  '/Resume.pdf',
  '/WhatsApp Image 2025-07-03 at 7.07.24 PM.jpeg'
);

-- Skills data
INSERT INTO skills (name, category, icon) VALUES
('Java', 'Programming Language', 'fab fa-java'),
('C', 'Programming Language', 'fas fa-c'),
('Python', 'Programming Language', 'fab fa-python'),
('HTML', 'Frontend', 'fab fa-html5'),
('CSS', 'Frontend', 'fab fa-css3-alt'),
('JavaScript', 'Frontend', 'fab fa-js-square'),
('SQL', 'Database', 'fas fa-database'),
('DSA', 'Programming Concept', 'fas fa-code'),
('React.js', 'Frontend', 'fab fa-react'),
('Node.js', 'Backend', 'fab fa-node-js'),
('Spring Boot', 'Backend', 'fas fa-leaf'),
('MongoDB', 'Database', 'fas fa-leaf'),
('TensorFlow', 'Tools', 'fas fa-brain'),
('Raspberry Pi', 'Tools', 'fas fa-microchip'),
('Figma', 'Design', 'fab fa-figma');

-- Projects data
INSERT INTO projects (
  title,
  description,
  long_description,
  technologies,
  project_url,
  github_url,
  image_url,
  featured,
  status
) VALUES
('EcoTrap – Wildlife Protection', 'AI-powered smart trap using IoT and image processing', 'Developed an ethical animal detection and alert system using Python, TensorFlow, OpenCV, Raspberry Pi, ESP32, and Telegram API. Published in IJIRT 171882.', 'Python, TensorFlow, OpenCV, Raspberry Pi, ESP32, Telegram API', NULL, NULL, NULL, TRUE, 'completed'),

('PrepSprint – Placement Guide', 'Interview prep web app', 'Built with HTML, CSS, and JavaScript. Provides resources and practice for placement preparation. Deployed on Netlify.', 'HTML, CSS, JavaScript', 'https://curious-rabanadas-8cf4f7.netlify.app', NULL, NULL, TRUE, 'completed'),

('E-commerce Website', 'Proshop: Full-featured e-commerce website', 'Developed using MongoDB, Node.js, Express.js, and React.js. Includes product catalog, shopping cart, and user authentication.', 'MongoDB, Node.js, Express.js, React.js', NULL, NULL, NULL, FALSE, 'completed'),

('Case Management System', 'Reminder system for legal professionals', 'Built a system to help legal professionals manage case reminders using MongoDB, Node.js, HTML, CSS, and JavaScript.', 'MongoDB, Node.js, HTML, CSS, JavaScript', NULL, NULL, NULL, FALSE, 'completed');

-- Experience data
INSERT INTO experience (
  company,
  position,
  description,
  start_date,
  end_date,
  is_current,
  company_url,
  location
) VALUES
('Vstan4u Solution, Bengaluru', 'Intern — Java FullStack', 'Gained practical experience in developing websites using core Java, Spring Boot, HTML, CSS, and JS.', '2025-02-01', '2025-06-30', FALSE, NULL, 'Bengaluru, India'),

('Inventron Technologies, Bengaluru', 'Intern — Innovation and Entrepreneurship', 'Designed a solar-powered mobile charging case and developed its prototype and business plan. Conducted market research and collaborated in a team environment.', '2023-10-01', '2023-11-30', FALSE, NULL, 'Bengaluru, India'),

('Teragon Ed.Tech, Hassan', 'Intern — Blockchain / Cloud Computing / Web 3.0', 'Gained practical experience in decentralized systems, cloud platforms, and web technologies.', '2022-10-01', '2022-11-30', FALSE, NULL, 'Hassan, India'); 