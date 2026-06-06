import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import './FeaturedWork.css';

export default function FeaturedWork() {
  return (
    <section className="featured-work" id="featured">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">Showcasing creativity through motion</p>
        </motion.div>

        <motion.div 
          className="featured-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="featured-image-container">
            <img 
              src={`${import.meta.env.BASE_URL}featured-project.png`} 
              alt="Featured Project" 
              className="featured-image"
            />
            <div className="featured-overlay">
              <a href="#" className="view-project-btn">
                View Project <ArrowUpRight size={20} />
              </a>
            </div>
          </div>
          
          <div className="featured-content">
            <div className="featured-meta">
              <span className="featured-category">Motion Design</span>
              <span className="featured-year">2026</span>
            </div>
            <h3 className="featured-title">Ethereal Branding Identity</h3>
            <p className="featured-description">
              A comprehensive motion branding package for a forward-thinking tech agency. 
              The project involved creating a fluid, dynamic visual system that adapts 
              across digital platforms, emphasizing elegance and limitless potential.
            </p>
            <div className="featured-tools">
              <span>After Effects</span>
              <span>Cinema 4D</span>
              <span>Illustrator</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
