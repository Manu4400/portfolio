-- Create database
CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

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
    proficiency_level INT NOT NULL CHECK (proficiency_level BETWEEN 1 AND 100),
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
INSERT INTO about (name, title, description, email, phone, location, linkedin_url, github_url) VALUES 
('Your Name', 'Full Stack Developer', 'Passionate full-stack developer with expertise in modern web technologies. I love creating innovative solutions and turning ideas into reality through clean, efficient code.', 'your.email@example.com', '+1 (555) 123-4567', 'Your City, Country', 'https://linkedin.com/in/yourprofile', 'https://github.com/yourusername');

-- Skills data
INSERT INTO skills (name, category, proficiency_level, icon) VALUES 
('JavaScript', 'Frontend', 90, 'fab fa-js-square'),
('React', 'Frontend', 85, 'fab fa-react'),
('Node.js', 'Backend', 80, 'fab fa-node-js'),
('Express.js', 'Backend', 85, 'fas fa-server'),
('MySQL', 'Database', 75, 'fas fa-database'),
('MongoDB', 'Database', 70, 'fas fa-leaf'),
('HTML5', 'Frontend', 95, 'fab fa-html5'),
('CSS3', 'Frontend', 90, 'fab fa-css3-alt'),
('Python', 'Backend', 75, 'fab fa-python'),
('Git', 'Tools', 85, 'fab fa-git-alt'),
('Docker', 'DevOps', 65, 'fab fa-docker'),
('AWS', 'Cloud', 60, 'fab fa-aws');

-- Projects data
INSERT INTO projects (title, description, long_description, technologies, project_url, github_url, image_url, featured, status) VALUES 
('E-Commerce Platform', 'A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.', 'Built a comprehensive e-commerce solution using React for the frontend and Node.js with Express for the backend. Features include user registration/login, product catalog, shopping cart, payment processing with Stripe, order management, and an admin panel for inventory management.', 'React, Node.js, Express, MySQL, Stripe API, JWT', 'https://yourproject.com', 'https://github.com/yourusername/ecommerce', '/uploads/ecommerce-project.jpg', TRUE, 'completed'),

('Task Management App', 'A collaborative task management application with real-time updates and team collaboration features.', 'Developed a modern task management application that allows teams to create projects, assign tasks, set deadlines, and track progress in real-time. Implemented WebSocket for live updates and used Redux for state management.', 'React, Redux, Socket.io, Node.js, MongoDB', 'https://taskmanager.com', 'https://github.com/yourusername/taskmanager', '/uploads/taskmanager-project.jpg', TRUE, 'completed'),

('Weather Dashboard', 'A responsive weather dashboard that displays current weather and forecasts for multiple cities.', 'Created a beautiful weather dashboard that fetches data from multiple weather APIs, displays current conditions, 7-day forecasts, and weather maps. Features include location search, favorites, and weather alerts.', 'React, Weather API, Chart.js, Styled Components', 'https://weatherdash.com', 'https://github.com/yourusername/weather', '/uploads/weather-project.jpg', FALSE, 'completed'),

('Portfolio Website', 'This portfolio website showcasing my projects and skills.', 'Built this portfolio website using the MERN stack with MySQL to showcase my projects, skills, and experience. Features a modern design, responsive layout, contact form, and admin panel for content management.', 'React, Node.js, Express, MySQL, CSS3', NULL, 'https://github.com/yourusername/portfolio', '/uploads/portfolio-project.jpg', TRUE, 'completed');

-- Experience data
INSERT INTO experience (company, position, description, start_date, end_date, is_current, company_url, location) VALUES 
('Tech Solutions Inc.', 'Full Stack Developer', 'Developed and maintained web applications using React, Node.js, and MySQL. Collaborated with cross-functional teams to deliver high-quality software solutions. Implemented responsive designs and optimized application performance.', '2022-01-15', NULL, TRUE, 'https://techsolutions.com', 'Remote'),

('Digital Innovations LLC', 'Frontend Developer', 'Created user-friendly web interfaces using React and modern CSS frameworks. Worked closely with UX/UI designers to implement pixel-perfect designs. Improved website performance and implemented accessibility best practices.', '2021-03-01', '2021-12-31', FALSE, 'https://digitalinnovations.com', 'New York, NY'),

('StartupXYZ', 'Junior Web Developer', 'Built responsive websites and web applications using HTML, CSS, JavaScript, and PHP. Participated in code reviews and learned best practices for web development. Contributed to both frontend and backend development tasks.', '2020-06-01', '2021-02-28', FALSE, 'https://startupxyz.com', 'San Francisco, CA'); 