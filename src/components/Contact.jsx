import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import './Contact.css';

const GithubIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-8.3a5.4 5.4 0 0 0-1.5-3.9 5.4 5.4 0 0 0-.1-3.8s-1.2-.4-3.9 1.7a13.3 13.3 0 0 0-7 0C6.2 1.5 5 1.9 5 1.9a5.4 5.4 0 0 0-.1 3.8A5.4 5.4 0 0 0 3 9.6c0 6.8 3 8 6 8.3a4.8 4.8 0 0 0-1 3.2v4"></path>
    <path d="M9 18c-4.5 1.5-5-2.5-7-3"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-grid">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="contact-title">Let's Create Something <span className="text-gradient">Meaningful</span></h2>
            <p className="contact-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether it's an internship or a full-time role, let's connect.
            </p>
            
            <div className="contact-links">
              <a href="mailto:hello@thejashri.com" className="contact-link">
                <Mail size={24} />
                <span>hello@thejashri.com</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-link">
                <LinkedinIcon size={24} />
                <span>LinkedIn Profile</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-link">
                <GithubIcon size={24} />
                <span>GitHub Portfolio</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="How can we work together?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
