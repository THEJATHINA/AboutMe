import React from 'react';
import { motion } from 'framer-motion';
import './Education.css';

export default function Education() {
  const educationData = [
    {
      id: 1,
      degree: "B.Sc. in Animation and Visual Effects",
      institution: "National Institute of Creative Arts",
      duration: "2023 - 2026",
      achievements: "First Class Honors • Top 5% of cohort"
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "St. Xavier's High School",
      duration: "2021 - 2023",
      achievements: "Major in Arts & Computer Science"
    }
  ];

  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Academic Background</h2>
          <p className="section-subtitle">A foundation built on creative excellence</p>
        </div>

        <div className="edu-timeline">
          {educationData.map((edu, index) => (
            <motion.div 
              key={edu.id} 
              className="edu-timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="edu-timeline-marker"></div>
              <div className="edu-timeline-content">
                <span className="edu-duration">{edu.duration}</span>
                <h3 className="edu-degree">{edu.degree}</h3>
                <h4 className="edu-institution">{edu.institution}</h4>
                <p className="edu-achievements">{edu.achievements}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
