import React from 'react';
import { useProfile } from '../context/ProfileContext';
import '../styles/hero.css';

const Hero: React.FC = () => {
  const { profile } = useProfile();

  return (
    <section className="hero" style={{ backgroundImage: `url(${profile.bannerImage})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">{profile.name}</h1>
          <h2 className="hero-subtitle">{profile.title}</h2>
          <div className="hero-buttons">
            <a href="#about" className="hero-button primary">
              Learn More
            </a>
            <a 
              href={profile.resumeUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-button secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
