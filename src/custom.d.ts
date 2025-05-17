// Allow TypeScript to understand CSS modules
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Allow TypeScript to understand image imports
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Allow TypeScript to understand our custom modules
declare module './context/ThemeContext';
declare module './context/ProfileContext';
declare module './components/Layout';
declare module './pages/Home';
declare module './pages/Experience';
declare module './pages/Skills';
declare module './pages/Projects';
declare module './pages/Certifications';
declare module './pages/Contact';
declare module './pages/NotFound';
