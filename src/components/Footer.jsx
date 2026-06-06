import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            THEJASHRI<span className="logo-dot">.</span>
          </div>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Thejashri T. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#hero">Back to Top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
