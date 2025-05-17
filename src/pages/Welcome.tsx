import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/welcome.css';

interface WelcomeProps {
  onComplete: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showContent, setShowContent] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioError, setAudioError] = useState<string | null>(null);

  useEffect(() => {
    // Show content after a small delay to allow the component to mount
    const showTimer = setTimeout(() => setShowContent(true), 100);
    
    // Initialize audio - using require to ensure the file is included in the build
    const audioPath = process.env.PUBLIC_URL + '/tudum.mp3';
    console.log('Audio path:', audioPath);
    
    // Create audio element directly
    const audio = new Audio(audioPath);
    audioRef.current = audio;
    
    // Set volume (0.0 to 1.0)
    audio.volume = 1.0;
    
    // Preload the audio
    audio.preload = 'auto';
    
    // Handle audio play promise
    const playAudio = async () => {
      try {
        // First, load the audio
        await audio.load();
        
        // Then play it
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              console.log('Audio is playing');
            })
            .catch(error => {
              console.error('Error playing audio:', error);
              setAudioError('Audio playback failed. Please interact with the page first.');
            });
        }
      } catch (error) {
        console.error('Error with audio:', error);
        setAudioError('Error initializing audio.');
      }
    };
    
    // Try to play the audio
    playAudio();

    // Add event listeners for user interaction
    const handleFirstInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.error('Still cannot play:', e));
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
    
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    // Navigate to who's watching after animation
    const timer = setTimeout(() => {
      onComplete();
      navigate('/who-is-watching');
    }, 4000);

    // Cleanup function
    return () => {
      clearTimeout(showTimer);
      clearTimeout(timer);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };
  }, [navigate, onComplete]);

  // Debug information - moved to top level
  useEffect(() => {
    if (showContent) { // Only log when content is shown
      console.log('Audio debug info:', {
        audioElement: audioRef.current,
        audioPath: process.env.PUBLIC_URL + '/tudum.mp3',
        publicUrl: process.env.PUBLIC_URL,
        audioError
      });
      
      if (audioError) {
        console.warn('Audio error:', audioError);
      }
    }
  }, [audioError, showContent]);

  if (!showContent) {
    return <div className="welcome-container" style={{ backgroundColor: 'black' }} />;
  }

  return (
    <div className="welcome-container">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="welcome-video"
        playsInline
      >
        <source src="/netflix-intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="welcome-logo">
        <h1>ARUN</h1>
      </div>
    </div>
  );
};

export default Welcome;
