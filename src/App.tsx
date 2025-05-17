import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ProfileProvider } from './context/ProfileContext';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import WhosWatching from './pages/WhosWatching';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './styles/index.css';

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const profileType = localStorage.getItem('profileType');
  return profileType ? <>{children}</> : <Navigate to="/who-is-watching" replace />;
};

function App() {
  const location = useLocation();
  const [showWelcome, setShowWelcome] = useState(!localStorage.getItem('hasSeenWelcome'));
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  // Add theme class to body
  useEffect(() => {
    document.body.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Show welcome page on first visit
  useEffect(() => {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setShowWelcome(true);
      localStorage.setItem('hasSeenWelcome', 'true');
    }
  }, []);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Clear any existing profile selection when showing welcome
    localStorage.removeItem('profileType');
  };

  // If it's the first visit, show welcome page
  if (showWelcome) {
    return (
      <div className="app dark">
        <Welcome onComplete={handleWelcomeComplete} />
      </div>
    );
  }

  // If no profile is selected, show who's watching
  if (!localStorage.getItem('profileType') && location.pathname !== '/who-is-watching') {
    return (
      <div className="app dark">
        <WhosWatching />
      </div>
    );
  }

  return (
    <div className={`app ${theme}`}>
      <Routes>
        <Route path="/who-is-watching" element={<WhosWatching />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="experience" element={<Experience />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
