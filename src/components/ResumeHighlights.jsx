import React from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './ResumeHighlights.css';

export default function ResumeHighlights() {
  return (
    <section className="resume-highlights" id="resume">
      <div className="container">
        <motion.div 
          className="resume-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="resume-header">
            <div>
              <h2 className="resume-title">Resume Highlights</h2>
              <p className="resume-subtitle">A quick overview of my professional profile</p>
            </div>
            <a href="#" className="btn btn-primary resume-download-btn">
              Download Full PDF <Download size={18} />
            </a>
          </div>

          <div className="resume-grid">
            <div className="resume-column">
              <h3 className="resume-col-title">Core Skills</h3>
              <ul className="resume-list">
                <li>Motion Graphics & 2D/3D Animation</li>
                <li>Visual Storytelling & Storyboarding</li>
                <li>Brand Identity & UI Motion</li>
                <li>Video Editing & Compositing</li>
              </ul>
            </div>
            <div className="resume-column">
              <h3 className="resume-col-title">Software</h3>
              <ul className="resume-list tags">
                <li>After Effects</li>
                <li>Cinema 4D</li>
                <li>Premiere Pro</li>
                <li>Illustrator</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="resume-column">
              <h3 className="resume-col-title">Career Interests</h3>
              <ul className="resume-list">
                <li>Motion Designer</li>
                <li>Creative Animator</li>
                <li>Video Editor</li>
                <li>Art Director Intern</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
