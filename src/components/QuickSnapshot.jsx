import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock, CheckCircle } from 'lucide-react';
import './QuickSnapshot.css';

export default function QuickSnapshot() {
  const infoData = [
    {
      icon: <Briefcase className="snapshot-icon" />,
      label: "Specialization",
      value: "Creative Animator",
      sub: "Fresher"
    },
    {
      icon: <CheckCircle className="snapshot-icon" />,
      label: "Experience",
      value: "10+ Projects",
      sub: "5+ Certifications"
    },
    {
      icon: <Clock className="snapshot-icon" />,
      label: "Availability",
      value: "Open to Internships",
      sub: "& Full-Time Roles"
    }
  ];

  return (
    <section className="quick-snapshot">
      <div className="container">
        <motion.div 
          className="snapshot-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="snapshot-grid">
            {infoData.map((item, index) => (
              <div key={index} className="snapshot-item">
                <div className="snapshot-icon-wrapper">
                  {item.icon}
                </div>
                <div className="snapshot-content">
                  <span className="snapshot-label">{item.label}</span>
                  <strong className="snapshot-value">{item.value}</strong>
                  <span className="snapshot-sub">{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
