import React from 'react';
import './Experience.css';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <h2>
          <span className="exp-icon">Experience</span>
        </h2>

        <div className="experience-grid">
          <div className="experience-card">
            <div className="experience-header">
              <h3>Software Development Engineer</h3>
              <span className="company">Indihood, Bengaluru, India</span>
              <span className="exp-date">Jun 2025 – Present</span>
            </div>
            <ul className="exp-points">
              <li>Improving the Loan App platform, covering the full lifecycle from loan initiation to disbursal and repayment.</li>
              <li>Developing scalable APIs and robust automation test suites in Dart to significantly reduce manual testing time.</li>
              <li><strong>Technologies:</strong> Dart, TypeScript, Flutter, Protobuf, Exalt, Jira.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Software Development Engineer Intern</h3>
              <span className="company">MeshWorks, Ahmedabad, India</span>
              <span className="exp-date">Jun 2024 – Aug 2024</span>
            </div>
            <ul className="exp-points">
              <li>Enhanced an Angular-based web application by resolving over 75 bugs; improved code efficiency by 20%.</li>
              <li>Added Tooltips and Text Editors replacing the Textarea to improve customer assistance.</li>
              <li><strong>Technologies:</strong> TypeScript, Angular, MySQL, Git/GitHub, Microsoft DevOps.</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Software Development Engineer Intern</h3>
              <span className="company">Beans.ai, Palo Alto, USA</span>
              <span className="exp-date">Jun 2023 – Aug 2023</span>
            </div>
            <ul className="exp-points">
              <li>Designed 100+ Figma screens visualizing optimized delivery routes and geospatial data across U.S. streets.</li>
              <li>Implemented new features and fixed critical bugs to improve performance and reliability of the Beans Route app.</li>
              <li><strong>Technologies:</strong> JavaScript, Python, Django, MySQL, Git/GitHub, GIS (ArcGIS).</li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <h3>Founder&apos;s Office Intern</h3>
              <span className="company">BuildFastWithAI, Bengaluru, India</span>
              <span className="exp-date">—</span>
            </div>
            <ul className="exp-points">
              <li>Worked directly with the founder on strategy and outreach; reduced CAC by 50%.</li>
              <li>Ran targeted Google and LinkedIn ads; led lead outreach and social media.</li>
              <li>Organized and ran an event at Google Bengaluru office.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
