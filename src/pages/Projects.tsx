import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import Section from '../components/Section';
import '../styles/projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects-page">
      <Section title="My Projects">
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Projects;
