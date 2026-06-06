import React from 'react';
import { motion } from 'framer-motion';
import { Film, Video, Palette, MonitorPlay, PenTool, Layout, MessageSquare, Lightbulb } from 'lucide-react';
import './Skills.css';

export default function Skills() {
  const skillsData = [
    { name: 'Animation', icon: <Film size={28} />, desc: '2D & 3D Character Animation' },
    { name: 'Motion Design', icon: <MonitorPlay size={28} />, desc: 'Dynamic UI & Graphic Motion' },
    { name: 'Video Editing', icon: <Video size={28} />, desc: 'Narrative & Commercial Cuts' },
    { name: 'Visual Storytelling', icon: <Layout size={28} />, desc: 'Storyboarding & Direction' },
    { name: 'Design Tools', icon: <Palette size={28} />, desc: 'Figma, Photoshop, Illustrator' },
    { name: 'Creative Software', icon: <PenTool size={28} />, desc: 'After Effects, Premiere, C4D' },
    { name: 'Communication', icon: <MessageSquare size={28} />, desc: 'Articulate & Collaborative' },
    { name: 'Problem Solving', icon: <Lightbulb size={28} />, desc: 'Analytical & Adaptive' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Core Expertise</h2>
          <p className="section-subtitle">A multidisciplinary approach to creative solutions</p>
        </div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skill, index) => (
            <motion.div key={index} variants={itemVariants} className="skill-card">
              <div className="skill-icon-wrapper">
                {skill.icon}
              </div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-hover-effect"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
