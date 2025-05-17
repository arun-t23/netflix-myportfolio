import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'proj1',
    title: 'CI/CD Pipeline Automation',
    description: 'Designed and implemented a fully automated CI/CD pipeline using Jenkins and Kubernetes, reducing deployment time by 70%.',
    techStack: ['Jenkins', 'Kubernetes', 'Docker', 'Helm', 'Nexus'],
    githubUrl: 'https://github.com/yourusername/cicd-pipeline',
    liveUrl: 'https://example.com/cicd-demo'
  },
  {
    id: 'proj2',
    title: 'Infrastructure as Code',
    description: 'Automated cloud infrastructure provisioning using Terraform across multiple cloud providers.',
    techStack: ['Terraform', 'AWS', 'GCP', 'Azure'],
    githubUrl: 'https://github.com/yourusername/iac-repo'
  },
  {
    id: 'proj3',
    title: 'Monitoring & Logging Stack',
    description: 'Implemented a centralized monitoring solution using Prometheus, Grafana, and ELK stack.',
    techStack: ['Prometheus', 'Grafana', 'ELK', 'Docker'],
    githubUrl: 'https://github.com/yourusername/monitoring-stack'
  },
  {
    id: 'proj4',
    title: 'Kubernetes Cluster Setup',
    description: 'Set up and managed a production-grade Kubernetes cluster with high availability and auto-scaling.',
    techStack: ['Kubernetes', 'AWS EKS', 'Terraform', 'Helm'],
    githubUrl: 'https://github.com/yourusername/k8s-cluster'
  }
];
