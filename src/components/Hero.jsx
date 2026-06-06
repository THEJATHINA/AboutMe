import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import './Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="hero" id="hero">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="hero-tagline-wrapper">
            <span className="hero-tagline">Where Creativity Meets Movement</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="hero-title">
            THEJASHRI T
          </motion.h1>
          
          <motion.h2 variants={itemVariants} className="hero-statement">
            Animating Ideas Into <br/>
            <span className="text-gradient">Meaningful Experiences</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="hero-subtitle">
            Creative Animator • Visual Storyteller • Motion Designer
          </motion.p>

          <motion.div variants={itemVariants} className="hero-cta-group">
            <a href="#featured" className="btn btn-primary magnetic-btn">
              View My Work <ArrowRight size={18} />
            </a>
            <a href="#resume" className="btn btn-secondary magnetic-btn">
              Download Resume <Download size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-glow"></div>
          <div className="hero-image-container">
            <img 
              src="/portrait.png" 
              alt="Thejashri T - Portrait" 
              className="hero-image"
            />
          </div>
          {/* Floating Particles */}
          <motion.div 
            className="floating-shape shape-1"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="floating-shape shape-2"
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
        </motion.div>
      </div>
    </section>
  );
}
