import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/welcome.css';

interface WelcomeProps {
  onComplete: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showName, setShowName] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // Play sound effect
  const playSound = () => {
    try {
      const audio = new Audio(`${process.env.PUBLIC_URL}/tudum.mp3`);
      audioRef.current = audio;
      audio.volume = 1.0;
      
      // Play sound when component mounts
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Audio playback failed:', error);
        });
      }
    } catch (error) {
      console.error('Error with audio:', error);
    }
  };

  useEffect(() => {
    // Show name after a short delay
    const nameTimer = setTimeout(() => {
      setShowName(true);
      playSound();
    }, 300);

    // Start fade out after 1.5 seconds of showing the name
    const fadeOutTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // Navigate after fade out completes
    const navigateTimer = setTimeout(() => {
      onComplete();
      navigate('/who-is-watching');
    }, 2300);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(navigateTimer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [navigate, onComplete]);

  return (
    <div className={`welcome-container ${fadeOut ? 'fade-out' : ''}`}>
      <div className={`welcome-content ${showName ? 'show' : ''}`}>
        <h1 className="welcome-name">ARUN</h1>
      </div>
    </div>
  );
};

export default Welcome;
