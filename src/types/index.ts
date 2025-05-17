// Types for the portfolio application
export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  category: 'devops' | 'cloud' | 'tools' | 'languages';
  level: number; // 1-5
  icon?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  imageUrl?: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  email: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  resumeUrl: string;
  profileImage: string;
  bannerImage: string;
}

export interface NavLink {
  name: string;
  path: string;
  icon: string;
}
