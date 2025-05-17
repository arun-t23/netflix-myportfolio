import React, { useRef, useEffect } from 'react';
import { useProfile } from '../context/ProfileContext';
import '../styles/hero.css';

const Hero: React.FC = () => {
  const { profile } = useProfile();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Mute the video by default and ensure it plays
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.play().catch(error => {
        console.error('Error playing video:', error);
      });
    }
  }, []);

  return (
    <section className="hero">
      {/* Video Background */}
      <div className="video-background">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source src="/netflix-intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      {/* Hero Content */}
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
    </section>
  );
};

export default Hero;
