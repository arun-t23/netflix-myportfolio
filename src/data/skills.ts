import { Skill } from '../types';

export const skills: Skill[] = [
  // DevOps
  { name: 'Docker', category: 'devops', level: 5 },
  { name: 'Kubernetes', category: 'devops', level: 4 },
  { name: 'Jenkins', category: 'devops', level: 4 },
  { name: 'GitHub Actions', category: 'devops', level: 4 },
  { name: 'Terraform', category: 'devops', level: 4 },
  { name: 'Ansible', category: 'devops', level: 3 },
  
  // Cloud
  { name: 'AWS', category: 'cloud', level: 5 },
  { name: 'GCP', category: 'cloud', level: 4 },
  { name: 'Azure', category: 'cloud', level: 3 },
  { name: 'Serverless', category: 'cloud', level: 4 },
  
  // Tools
  { name: 'Linux', category: 'tools', level: 5 },
  { name: 'Bash', category: 'tools', level: 5 },
  { name: 'Git', category: 'tools', level: 5 },
  { name: 'Prometheus', category: 'tools', level: 4 },
  { name: 'Grafana', category: 'tools', level: 4 },
  { name: 'ELK Stack', category: 'tools', level: 3 },
  
  // Languages
  { name: 'Python', category: 'languages', level: 4 },
  { name: 'JavaScript/TypeScript', category: 'languages', level: 3 },
  { name: 'Go', category: 'languages', level: 2 },
  { name: 'SQL', category: 'languages', level: 4 }
];
