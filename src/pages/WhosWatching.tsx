import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/whos-watching.css';

const profiles = [
  {
    id: 1,
    name: 'Recruiter',
    image: '/profile-recruiter.png',
    type: 'recruiter',
    description: 'View my professional experience and skills'
  },
  {
    id: 2,
    name: 'Visitor',
    image: '/profile-visitor.png',
    type: 'visitor',
    description: 'Explore my portfolio and projects'
  }
];

const WhosWatching: React.FC = () => {
  const navigate = useNavigate();
  const [selectedProfile, setSelectedProfile] = React.useState<string | null>(null);

  const handleProfileSelect = (type: string) => {
    setSelectedProfile(type);
    
    // Store the selected profile type in localStorage
    localStorage.setItem('profileType', type);
    
    // Add a small delay for better UX
    setTimeout(() => {
      navigate('/');
    }, 300);
  };

  return (
    <div className="whos-watching">
      <div className="whos-watching-container">
        <h1>Who's watching?</h1>
        <div className="profiles">
          {profiles.map((profile) => (
            <div 
              key={profile.id} 
              className="profile"
              onClick={() => handleProfileSelect(profile.type)}
            >
              <div className="profile-avatar">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  onError={(e) => {
                    // Fallback to a colored div with initials if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = document.createElement('div');
                    fallback.className = 'profile-fallback';
                    fallback.textContent = profile.name.charAt(0);
                    target.parentNode?.insertBefore(fallback, target.nextSibling);
                  }}
                />
              </div>
              <span className="profile-name">{profile.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhosWatching;
