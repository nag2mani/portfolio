import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  const titles = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Nagmani Kumar'];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = titles[currentTitle];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText !== currentWord) {
      timer = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, 100);
    } else if (isDeleting && displayedText !== '') {
      timer = setTimeout(() => {
        setDisplayedText(displayedText.substring(0, displayedText.length - 1));
      }, 50);
    } else if (!isDeleting && displayedText === currentWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitle, titles]);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="availability">
            <span className="ping-dot"></span>
            <span className="availability-label">
              Software Developer @ Indihood
            </span>
          </div>

          <h1>
            Hello, I'm <br />
            <span className="gradient-text">{displayedText}</span>
            <span className="name-separator">|</span>
          </h1>

          <p>
            Building scalable systems and full-stack applications. Former SDE intern at Palo Alto based startup Beans.ai & MeshWorks.
          </p>

          <div className="hero-buttons">
            <a
              href="https://www.linkedin.com/in/nag2mani/"
              target="_blank"
              rel="noreferrer"
              className="hero-link-btn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/nag2mani"
              target="_blank"
              rel="noreferrer"
              className="hero-link-btn"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-glow"></div>
          <img
            src="/profilepic/pf.jpg"
            alt="Nagmani Kumar"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
