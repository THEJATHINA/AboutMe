import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  const metrics = [
    { label: "Creative Projects", value: "15+" },
    { label: "Tools Mastered", value: "8" },
    { label: "Certifications Earned", value: "5+" },
    { label: "Learning Journey", value: "2 Yrs" },
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div 
            className="about-visual"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="about-image-wrapper">
              <div className="about-abstract-shape"></div>
              <img 
                src={`${import.meta.env.BASE_URL}portrait.png`} 
                alt="Creative Process" 
                className="about-image"
              />
            </div>
          </motion.div>

          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Beyond the Canvas</h2>
            <p className="about-description">
              I am a passionate creative animator and visual storyteller dedicated to transforming 
              abstract ideas into compelling visual narratives. My approach bridges the gap between 
              technical precision and artistic expression.
            </p>
            <p className="about-description">
              With a strong foundation in motion design and an insatiable curiosity for future-ready 
              technologies, I continuously explore new mediums to elevate brand identities and 
              user experiences. Discipline, attention to detail, and a forward-thinking mindset 
              are at the core of my creative process.
            </p>

            <div className="about-metrics">
              {metrics.map((metric, index) => (
                <div key={index} className="metric-item">
                  <span className="metric-value text-gradient">{metric.value}</span>
                  <span className="metric-label">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
