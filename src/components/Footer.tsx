import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <a href="mailto:nag2mani@gmail.com" className="footer-email">nag2mani@gmail.com</a>
      <h3>© {new Date().getFullYear()} Nagmani Kumar. All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
