import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/section.css';

type SectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  viewAllLink?: string;
};

const Section: React.FC<SectionProps> = ({
  title,
  children,
  className = '',
  viewAllLink,
}) => {
  return (
    <section className={`section ${className}`}>
      <div className="section-header">
        <h2 className="section-title">{title}</h2>
        {viewAllLink && (
          <Link to={viewAllLink} className="view-all">
            View All
          </Link>
        )}
      </div>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
};

export default Section;
