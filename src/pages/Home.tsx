import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProfile } from '../context/ProfileContext';
import Hero from '../components/Hero';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';
import '../styles/home.css';

const Home: React.FC = () => {
  const { profile } = useProfile();

  useEffect(() => {
    document.title = `${profile.name} | ${profile.title}`;
  }, [profile]);

  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="home">
      <Hero />
      
      <Section title="About Me">
        <div className="about-content">
          <div className="about-text">
            <h2>Hello, I'm {profile.name}</h2>
            <h3>{profile.title}</h3>
            <p>{profile.summary}</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Me
              </Link>
              <a 
                href={profile.resumeUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="profile-image">
            <img 
              src={profile.profileImage} 
              alt={profile.name} 
              className="profile-img"
            />
          </div>
        </div>
      </Section>

      <Section title="Featured Projects" viewAllLink="/projects">
        <div className="projects-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section title="My Skills" viewAllLink="/skills">
        <div className="skills-preview">
          <div className="skill-category">
            <h4>DevOps</h4>
            <div className="skills-list">
              {['Docker', 'Kubernetes', 'AWS', 'CI/CD'].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="skill-category">
            <h4>Cloud & Infrastructure</h4>
            <div className="skills-list">
              {['AWS', 'Terraform', 'Serverless', 'Kubernetes'].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
