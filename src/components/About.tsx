import React, { useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const techStack = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'Dart', 'TypeScript'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Google Cloud Platform', 'CI/CD'],
    },
    {
      category: 'Databases & Caching',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Jira', 'Microsoft Azure DevOps', 'Figma', 'Linux (Ubuntu)'],
    },
    {
      category: 'Full-Stack Development',
      skills: ['React', 'Node.js', 'Django', 'Flutter', 'HTML', 'CSS', 'JavaScript', 'RESTful APIs', 'Protobuf'],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-container">
            <h2>About Me</h2>
            <p className="about-bio">
              I am a Software Development Engineer at Indihood, with a B.Tech in Computer Science and Engineering from Sitare University (CGPA: 8.40). I have a strong foundation in full-stack development, scalable systems, and have completed internships at MeshWorks and Beans.ai.
            </p>

            <p className="about-bio">
              I enjoy building robust APIs, automation tools, and user-focused applications. I am a continuous learner with experience across Dart, TypeScript, Python, and modern DevOps practices.
            </p>

            <p className="about-bio highlight">
              Open to collaboration and new opportunities. You can reach me at{' '}
              <a href="mailto:nag2mani@gmail.com" className="accent-text">nag2mani@gmail.com</a>.
            </p>

            <div className="tabs-navigation">
              <button
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>
              <button
                className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                onClick={() => setActiveTab('education')}
              >
                Education
              </button>
              <button
                className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                onClick={() => setActiveTab('achievements')}
              >
                Achievements
              </button>
              <button
                className={`tab-btn ${activeTab === 'extracurricular' ? 'active' : ''}`}
                onClick={() => setActiveTab('extracurricular')}
              >
                Extracurricular
              </button>
            </div>

            {activeTab === 'skills' && (
              <div className="skills-content">
                {techStack.map((category, index) => (
                  <div key={index} className="skill-card">
                    <h4>{category.category}</h4>
                    <p>{category.skills.join(', ')}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'education' && (
              <div className="education-content">
                <div className="education-item">
                  <h4>B.Tech in Computer Science and Engineering</h4>
                  <p className="institution">Sitare University</p>
                  <p className="year">Aug 2022 – May 2026 · CGPA: 8.40</p>
                </div>
                <div className="education-item">
                  <h4>Senior Secondary &amp; Foundation</h4>
                  <p className="institution">Jawahar Navodaya Vidyalaya &amp; Dakshana Foundation</p>
                  <p className="year">Jul 2015 – Mar 2022</p>
                  <p className="year">10th: 94.4% · 12th: 91.6% · IIT JEE 2022: 96.5 Percentile</p>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="certifications-content">
                <div className="achievement-card">
                  Selected as a scholar at a premier residential school under the <strong>Ministry of Education, Government of India</strong>.
                </div>
                <div className="achievement-card">
                  Selected as a <strong>Dakshana Scholar</strong>, with full sponsorship for 2 years of IIT-JEE coaching at JNV Bengaluru Urban.
                </div>
                <div className="achievement-card">
                  Received Letters of Recommendation from startup founders and a <strong>Senior Vice President at Google</strong>.
                </div>
                <div className="achievement-card">
                  Secured paid SDE internships in 1st and 2nd years of college, and received a full-time SDE offer in third year.
                </div>
                <div className="achievement-card">
                  Awarded a <strong>100% merit-based scholarship</strong> covering full tuition, accommodation, food, and living expenses for the four-year B.Tech in CSE at Sitare University.
                </div>
              </div>
            )}

            {activeTab === 'extracurricular' && (
              <div className="extracurricular-content">
                <div className="activity-card">
                  <strong>Secretary of the Startup and Business Club</strong> at Sitare University.
                </div>
                <div className="activity-card">
                  <strong>College Representative and Center Head</strong> for JDST/NDST under the Dakshana Foundation.
                </div>
                <div className="activity-card">
                  Create <strong>LinkedIn content</strong> on scholarships, internships, and finance, reaching an audience of <strong>19,000+</strong>.
                </div>
                <div className="activity-card">
                  <strong>Marathon running</strong> — regular runner; track runs on Strava.
                </div>
                <div className="activity-card">
                  Read <strong>25+ books</strong> in college on business & finance, philosophy, and self-development.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
