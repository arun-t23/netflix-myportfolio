import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { useTheme } from '../context/ThemeContext';
import '../styles/layout.css';

const Layout: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className={`layout ${theme}`}>
      <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Arun's Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
