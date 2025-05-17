import { Profile } from '../types';

export const profileData: Profile = {
  name: 'Arun',
  title: 'DevOps Engineer',
  summary: 'Experienced DevOps Engineer with expertise in CI/CD, cloud infrastructure, and automation. Passionate about building scalable and reliable systems.',
  email: 'arun@example.com',
  location: 'Your Location',
  linkedinUrl: 'https://linkedin.com/in/yourprofile',
  githubUrl: 'https://github.com/yourusername',
  resumeUrl: '/resume.pdf',
  profileImage: 'https://via.placeholder.com/150',
  bannerImage: 'https://via.placeholder.com/1920x600'
};

export const navLinks = [
  { name: 'Home', path: '/', icon: 'home' },
  { name: 'Experience', path: '/experience', icon: 'briefcase' },
  { name: 'Skills', path: '/skills', icon: 'code' },
  { name: 'Projects', path: '/projects', icon: 'laptop' },
  { name: 'Certifications', path: '/certifications', icon: 'award' },
  { name: 'Contact', path: '/contact', icon: 'envelope' },
];
