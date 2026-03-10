import React, { useState } from 'react';
import './About.css';

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const techStack = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'TypeScript', 'Dart'],
    },
    {
      category: 'Full-Stack Development',
      skills: ['React', 'Node.js', 'Django', 'Flutter', 'HTML', 'CSS', 'JavaScript', 'REST APIs', 'Protobuf'],
    },
    {
      category: 'Databases & Caching',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    },
    {
      category: 'DevOps & Cloud',
      skills: ['Docker', 'Kubernetes', 'Google Cloud Platform', 'CI/CD'],
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git/GitHub', 'Jira', 'Azure DevOps', 'Figma', 'Linux'],
    },
  ];

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text-container">
            <h2>About Me</h2>

            <p className="about-bio">
              I am a Software Engineer focused on building scalable systems,
              intelligent automation tools, and data-driven applications. I
              enjoy solving complex problems by designing reliable backends,
              efficient APIs, and intuitive user interfaces.
            </p>

            <p className="about-bio">
              My work spans full-stack development, distributed systems, and
              machine learning applications. I build products that handle large
              datasets, automate workflows, and transform raw data into
              meaningful insights for users and businesses.
            </p>

            <p className="about-bio highlight">
              I enjoy working on challenging engineering problems from backend
              architectures and APIs to intelligent systems powered by data and
              AI. If you are building something interesting, feel free to reach
              out at{' '}
              <a href="mailto:nag2mani@gmail.com" className="accent-text">
                nag2mani@gmail.com
              </a>.
            </p>

            <div className="tabs-navigation">
              <button
                className={`tab-btn ${activeTab === 'skills' ? 'active' : ''}`}
                onClick={() => setActiveTab('skills')}
              >
                Skills
              </button>

              <button
                className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </button>

              <button
                className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
                onClick={() => setActiveTab('achievements')}
              >
                Achievements
              </button>

              <button
                className={`tab-btn ${activeTab === 'interests' ? 'active' : ''}`}
                onClick={() => setActiveTab('interests')}
              >
                Interests
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

            {activeTab === 'experience' && (
              <div className="education-content">
                <div className="education-item">
                  <h4>Software Development Engineer</h4>
                  <p className="institution">Indihood</p>
                  <p className="year">
                    Building scalable backend services, APIs, and infrastructure
                    for production systems.
                  </p>
                </div>

                <div className="education-item">
                  <h4>Frontend Developer Intern</h4>
                  <p className="institution">MeshWorks</p>
                  <p className="year">
                    Developed frontend applications using Angular and
                    TypeScript, focusing on performance and clean UI design.
                  </p>
                </div>

                <div className="education-item">
                  <h4>Backend Developer Intern</h4>
                  <p className="institution">Beans.ai</p>
                  <p className="year">
                    Built backend services using Python and Django and worked
                    with geospatial datasets for logistics applications.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="certifications-content">
                <div className="achievement-card">
                  Received <strong>Letters of Recommendation</strong> from
                  startup founders and a <strong>Senior Vice President at Google</strong>.
                </div>

                <div className="achievement-card">
                  Secured <strong>paid software engineering internships</strong>
                  during early college years and received a full-time SDE offer
                  before graduation.
                </div>

                <div className="achievement-card">
                  Built and launched multiple engineering projects spanning
                  backend systems, machine learning platforms, and automation
                  tools.
                </div>

                <div className="achievement-card">
                  Created technical and career content reaching an audience of
                  <strong>19K+ professionals on LinkedIn</strong>.
                </div>
              </div>
            )}

            {activeTab === 'interests' && (
              <div className="extracurricular-content">
                <div className="activity-card">
                  Write about startups, technology, and ideas for an audience of 
                  <strong> 19K+ followers on LinkedIn</strong>.
                </div>

                <div className="activity-card">
                  Interested in <strong>AI systems, automation tools, and scalable product engineering</strong>.
                </div>

                <div className="activity-card">
                  Regular <strong>marathon runner</strong> and track runs on Strava.
                </div>

                <div className="activity-card">
                  Read <strong>25+ books</strong> on business, philosophy, and
                  technology.
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