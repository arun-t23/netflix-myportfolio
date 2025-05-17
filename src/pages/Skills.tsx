import React from 'react';
import { skills } from '../data/skills';
import Section from '../components/Section';
import '../styles/skills.css';

const Skills: React.FC = () => {
  const skillCategories = {
    devops: 'DevOps',
    cloud: 'Cloud',
    tools: 'Tools',
    languages: 'Languages'
  };

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div className="skills-page">
      <Section title="Technical Skills">
        <div className="skills-container">
          {Object.entries(skillCategories).map(([key, title]) => (
            <div key={key} className="skill-category">
              <h3 className="skill-category-title">{title}</h3>
              <div className="skills-grid">
                {getSkillsByCategory(key).map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}/5</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Skills;
