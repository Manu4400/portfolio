import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

// About services
export const aboutService = {
  getAbout: () => api.get('/about'),
  updateAbout: (data: any) => api.put('/about', data),
};

// Projects services
export const projectService = {
  getAllProjects: () => api.get('/projects'),
  getFeaturedProjects: () => api.get('/projects/featured'),
  getProjectById: (id: number) => api.get(`/projects/${id}`),
  createProject: (data: any) => api.post('/projects', data),
  updateProject: (id: number, data: any) => api.put(`/projects/${id}`, data),
  deleteProject: (id: number) => api.delete(`/projects/${id}`),
};

// Skills services
export const skillService = {
  getSkills: () => api.get('/skills'),
  getSkillsByCategory: (category: string) => api.get(`/skills/category/${category}`),
  getGroupedSkills: () => api.get('/skills/grouped'),
  getSkillById: (id: number) => api.get(`/skills/${id}`),
  createSkill: (data: any) => api.post('/skills', data),
  updateSkill: (id: number, data: any) => api.put(`/skills/${id}`, data),
  deleteSkill: (id: number) => api.delete(`/skills/${id}`),
};

// Experience services
export const experienceService = {
  getAllExperience: () => api.get('/experience'),
  getCurrentExperience: () => api.get('/experience/current'),
  getExperienceById: (id: number) => api.get(`/experience/${id}`),
  createExperience: (data: any) => api.post('/experience', data),
  updateExperience: (id: number, data: any) => api.put(`/experience/${id}`, data),
  deleteExperience: (id: number) => api.delete(`/experience/${id}`),
};

// Contact services
export const contactService = {
  sendMessage: (data: any) => api.post('/contact', data),
  getAllMessages: () => api.get('/contact'),
  getUnreadMessages: () => api.get('/contact/unread'),
  getMessageById: (id: number) => api.get(`/contact/${id}`),
  markAsRead: (id: number, isRead: boolean = true) => 
    api.put(`/contact/${id}/read`, { is_read: isRead }),
  deleteMessage: (id: number) => api.delete(`/contact/${id}`),
  getStats: () => api.get('/contact/stats/overview'),
};

export default api; 