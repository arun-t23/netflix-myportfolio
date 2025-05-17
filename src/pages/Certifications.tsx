import React from 'react';
import { certifications } from '../data/certifications';
import Section from '../components/Section';
import '../styles/certifications.css';

const Certifications: React.FC = () => {
  return (
    <div className="certifications-page">
      <Section title="My Certifications">
        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.name} className="certification-card">
              <div className="certification-image">
                {cert.imageUrl ? (
                  <img src={cert.imageUrl} alt={cert.name} />
                ) : (
                  <div className="certification-placeholder">
                    {cert.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="certification-details">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
                <p className="certification-date">Issued: {cert.date}</p>
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-credential"
                >
                  View Credential
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Certifications;
