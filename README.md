# Portfolio Website - MERN Stack with MySQL

A modern, responsive portfolio website built using the MERN stack with MySQL database. Features a clean design, smooth animations, and a comprehensive admin backend.

## 🚀 Features

- **Modern Design**: Clean, responsive interface with smooth animations using Framer Motion
- **Full Stack**: Complete MERN implementation with MySQL database
- **TypeScript**: Type-safe development with TypeScript for better code quality
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Contact Form**: Functional contact form with backend integration
- **Admin Ready**: API endpoints ready for admin panel integration

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **React Router** for navigation
- **Framer Motion** for animations
- **React Icons** for consistent iconography
- **Axios** for API communication

### Backend
- **Node.js** with Express.js
- **MySQL** database with connection pooling
- **CORS** for cross-origin requests
- **Helmet** for security headers
- **Rate limiting** for API protection

## 📁 Project Structure

```
portfolioApplication/
├── client/                 # React frontend
│   ├── public/
│   │   ├── components/     # Reusable components
│   │   │   ├── Navbar/
│   │   │   ├── Hero/
│   │   │   ├── ProjectCard/
│   │   │   ├── SkillCard/
│   │   │   ├── Footer/
│   │   │   └── ScrollToTop/
│   │   ├── pages/          # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   └── Contact.tsx
│   │   ├── services/       # API services
│   │   └── styles/         # CSS files
│   └── package.json
├── server/                 # Node.js backend
│   ├── config/            # Database configuration
│   │   ├── database.js
│   │   └── database.sql
│   ├── routes/            # API routes
│   │   ├── about.js
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── contact.js
│   ├── server.js          # Main server file
│   └── package.json
└── package.json           # Root package.json
```

## ⚙️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### 1. Clone the Repository
```bash
git clone <repository-url>
cd portfolioApplication
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install server dependencies
npm run install-server

# Install client dependencies
npm run install-client
```

### 3. Database Setup
1. Create a MySQL database named `portfolio_db`
2. Import the database schema:
```bash
mysql -u your_username -p portfolio_db < server/config/database.sql
```

### 4. Environment Configuration
Create a `.env` file in the `server` directory:
```env
# Database Configuration
DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=portfolio_db
DB_PORT=3306

# Server Configuration
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:3000

# JWT Secret (for future authentication)
JWT_SECRET=your_jwt_secret_key_here
```

### 5. Start the Application
```bash
# Start both frontend and backend
npm run dev

# Or start them separately
npm run server  # Backend on http://localhost:5000
npm run client  # Frontend on http://localhost:3000
```

## 🗄️ Database Schema

The application uses the following main tables:

- **about**: Personal information and social links
- **projects**: Portfolio projects with descriptions and links
- **skills**: Technical skills with proficiency levels
- **experience**: Professional work experience
- **contact_messages**: Messages from the contact form

## 🔧 API Endpoints

### About
- `GET /api/about` - Get personal information
- `PUT /api/about` - Update personal information

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Skills
- `GET /api/skills` - Get all skills
- `GET /api/skills/grouped` - Get skills grouped by category
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill

### Experience
- `GET /api/experience` - Get all experience
- `GET /api/experience/current` - Get current positions
- `POST /api/experience` - Create new experience
- `PUT /api/experience/:id` - Update experience
- `DELETE /api/experience/:id` - Delete experience

### Contact
- `POST /api/contact` - Send contact message
- `GET /api/contact` - Get all messages (admin)
- `PUT /api/contact/:id/read` - Mark message as read

## 🎨 Customization

### Colors & Branding
The main color scheme uses a gradient from `#667eea` to `#764ba2`. You can customize this in the CSS files:

```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Content
Update the sample data in `server/config/database.sql` with your own:
- Personal information
- Projects
- Skills
- Work experience

### Fonts
The project uses Inter and JetBrains Mono fonts from Google Fonts. You can change this in `client/public/index.html`.

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the client: `cd client && npm run build`
2. Deploy the `build` folder to your hosting service

### Backend (Heroku/DigitalOcean)
1. Set up environment variables on your hosting platform
2. Deploy the `server` directory
3. Update the client's API URL to point to your deployed backend

### Database
- Use services like PlanetScale, AWS RDS, or Google Cloud SQL for production MySQL hosting

## 🔐 Security Features

- **Helmet.js**: Sets various HTTP headers for security
- **CORS**: Configured for specific origins
- **Rate Limiting**: Prevents API abuse
- **Input Validation**: Server-side validation for all inputs
- **SQL Injection Protection**: Using parameterized queries

## 🧪 Testing

```bash
# Run frontend tests
cd client && npm test

# Run backend tests (if implemented)
cd server && npm test
```

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support and questions, please open an issue in the GitHub repository or contact [manoharmr1234@gmail.com].

## 🙏 Acknowledgments

- React team for the amazing framework
- Framer Motion for smooth animations
- All the open-source contributors who made this project possible 
