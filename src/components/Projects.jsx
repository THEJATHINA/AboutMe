import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './Projects.css';

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      title: "Neon Pulse App Promo",
      thumbnail: "/featured-project.png", // reusing for demo
      challenge: "Create a high-energy promotional video for a gen-Z fitness app that stands out in a crowded market.",
      solution: "Developed a kinetic typography system combined with fast-paced 3D abstract environments.",
      outcome: "Increased app downloads by 40% in the first month and won a student design award.",
      tools: ["After Effects", "Cinema 4D", "Premiere Pro"]
    },
    {
      id: 2,
      title: "Zenith Banking Identity",
      thumbnail: "/featured-project.png", // reusing for demo
      challenge: "Modernize a traditional bank's visual identity through motion to attract younger demographics.",
      solution: "Designed a clean, fluid motion system using soft gradients, glassmorphism, and subtle micro-interactions.",
      outcome: "Successfully rebranded across all digital touchpoints with highly positive user feedback.",
      tools: ["Figma", "After Effects", "Illustrator"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Case Studies</h2>
          <p className="section-subtitle">Deep dives into selected projects</p>
        </div>

        <div className="projects-list">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.id}
              className="case-study-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="case-study-image-wrapper">
                <img src={project.thumbnail} alt={project.title} className="case-study-image" />
                <div className="case-study-overlay"></div>
              </div>
              
              <div className="case-study-content">
                <h3 className="case-study-title">{project.title}</h3>
                
                <div className="case-study-details">
                  <div className="detail-group">
                    <h4>Challenge</h4>
                    <p>{project.challenge}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Solution</h4>
                    <p>{project.solution}</p>
                  </div>
                  <div className="detail-group">
                    <h4>Outcome</h4>
                    <p>{project.outcome}</p>
                  </div>
                </div>

                <div className="case-study-footer">
                  <div className="case-study-tools">
                    {project.tools.map((tool, i) => (
                      <span key={i}>{tool}</span>
                    ))}
                  </div>
                  <a href="#" className="view-details-btn">
                    View Details <ArrowUpRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
