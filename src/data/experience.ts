import { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 'exp1',
    company: 'Your Current/Most Recent Company',
    role: 'DevOps Engineer',
    duration: 'Jan 2022 - Present',
    description: [
      'Designed and implemented CI/CD pipelines using Jenkins/GitHub Actions',
      'Managed cloud infrastructure on AWS/GCP/Azure',
      'Containerized applications using Docker and orchestrated with Kubernetes',
      'Implemented infrastructure as code using Terraform'
    ],
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD']
  },
  {
    id: 'exp2',
    company: 'Previous Company',
    role: 'Site Reliability Engineer',
    duration: 'Jun 2019 - Dec 2021',
    description: [
      'Monitored and maintained production systems',
      'Improved system reliability and performance',
      'Automated deployment processes',
      'Participated in on-call rotations'
    ],
    skills: ['Monitoring', 'Linux', 'Bash', 'Python', 'Docker']
  }
];
