import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Motion Design Intern",
      company: "Creative Studio X",
      duration: "Jan 2026 - Present",
      description: "Assisting in the creation of motion graphics for digital marketing campaigns. Collaborating with senior designers to build reusable animation templates."
    },
    {
      id: 2,
      role: "Freelance Visual Storyteller",
      company: "Self-Employed",
      duration: "Jun 2025 - Dec 2025",
      description: "Designed animated explainer videos for local startups, translating complex concepts into easily digestible visual content."
    },
    {
      id: 3,
      role: "Creative Lead",
      company: "University Design Club",
      duration: "Sep 2024 - May 2025",
      description: "Led a team of 5 student designers to create promotional materials for campus events, including video teasers and interactive posters."
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">Experiences that shaped my creative perspective</p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-role">{exp.role}</h3>
                  <span className="timeline-duration">{exp.duration}</span>
                </div>
                <h4 className="timeline-company">{exp.company}</h4>
                <p className="timeline-description">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
