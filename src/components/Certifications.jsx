import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import './Certifications.css';

export default function Certifications() {
  const certs = [
    {
      title: "Advanced Motion Design",
      issuer: "School of Motion",
      date: "2025",
      link: "#"
    },
    {
      title: "UI/UX for Animators",
      issuer: "Google Career Certificates",
      date: "2024",
      link: "#"
    },
    {
      title: "Cinema 4D Masterclass",
      issuer: "Maxon",
      date: "2024",
      link: "#"
    }
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Certifications</h2>
          <p className="section-subtitle">Verified skills and continuous learning</p>
        </div>

        <div className="certs-grid">
          {certs.map((cert, index) => (
            <motion.div 
              key={index}
              className="cert-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="cert-icon">
                <Award size={24} />
              </div>
              <div className="cert-content">
                <h3 className="cert-title">{cert.title}</h3>
                <div className="cert-meta">
                  <span className="cert-issuer">{cert.issuer}</span>
                  <span className="cert-dot">•</span>
                  <span className="cert-date">{cert.date}</span>
                </div>
              </div>
              <a href={cert.link} className="cert-link" aria-label="View credential">
                <ExternalLink size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
