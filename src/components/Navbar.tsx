import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '../context/ThemeContext';
import { useProfile } from '../context/ProfileContext';
import { navLinks } from '../data/profile';
import '../styles/navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { profile } = useProfile();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${theme}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">ARUN</span>
        </Link>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </div>

        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path} className="nav-item">
              <Link
                to={link.path}
                className={`nav-links ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="nav-item theme-toggle">
            <button onClick={toggleTheme} className="theme-button">
              {theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </button>
          </li>

          <li className="nav-item social-icons">
            <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="social-icon" />
            </a>
            <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="social-icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
