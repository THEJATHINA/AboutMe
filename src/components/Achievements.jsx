import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star } from 'lucide-react';
import './Achievements.css';

export default function Achievements() {
  const achievements = [
    {
      id: 1,
      title: "1st Place - National Creative Hackathon",
      category: "Competition",
      description: "Designed a comprehensive motion branding package in 48 hours for a sustainable energy startup.",
      icon: <Trophy size={28} />
    },
    {
      id: 2,
      title: "Featured on Behance Motion Gallery",
      category: "Recognition",
      description: "My project 'Neon Pulse' was curated and featured by the Behance editorial team.",
      icon: <Star size={28} />
    }
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Milestones and recognitions in the creative journey</p>
        </div>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div 
              key={achievement.id}
              className="achievement-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="achievement-icon-wrapper">
                {achievement.icon}
              </div>
              <div className="achievement-content">
                <span className="achievement-category">{achievement.category}</span>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
