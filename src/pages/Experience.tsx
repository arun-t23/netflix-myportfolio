import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { experiences } from '../data/experience';
import Section from '../components/Section';
import '../styles/experience.css';

const Experience: React.FC = () => {
  return (
    <div className="experience-page">
      <Section title="Work Experience">
        <VerticalTimeline>
          {experiences.map((exp) => (
            <VerticalTimelineElement
              key={exp.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'var(--card-bg)', color: 'var(--text-color)' }}
              contentArrowStyle={{ borderRight: '7px solid var(--card-bg)' }}
              date={exp.duration}
              iconStyle={{ background: 'var(--primary-color)', color: '#fff' }}
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">{exp.role}</h3>
              <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
              <ul className="experience-description">
                {exp.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="experience-skills">
                {exp.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Section>
    </div>
  );
};

export default Experience;
