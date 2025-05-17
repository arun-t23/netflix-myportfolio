import React, { useState } from 'react';
import { useProfile } from '../context/ProfileContext';
import Section from '../components/Section';
import '../styles/contact.css';

const Contact: React.FC = () => {
  const { profile } = useProfile();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean | null;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real app, you would typically make an API call here
      // await axios.post('/api/contact', formData);
      
      setSubmitStatus({
        success: true,
        message: 'Your message has been sent successfully! I\'ll get back to you soon.'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <Section title="Get In Touch">
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-linkedin"></i>
                <div>
                  <h4>LinkedIn</h4>
                  <a href={profile.linkedinUrl} target="_blank" rel="noopener noreferrer">
                    Connect with me
                  </a>
                </div>
              </div>
              
              <div className="contact-item">
                <i className="fab fa-github"></i>
                <div>
                  <h4>GitHub</h4>
                  <a href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
                    View my work
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h3>Send me a message</h3>
            {submitStatus && (
              <div className={`alert ${submitStatus.success ? 'success' : 'error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
