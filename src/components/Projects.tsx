import React from 'react';
import './Projects.css';

type Project = {
  title: string;
  description: string;
  points?: string[];
  tags: string[];
  repoUrl: string;
  liveUrl?: string;
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="project-card">
    <div className="project-content">
      <div className="project-title-row">
        <h3>{project.title}</h3>
        <div className="project-links">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="project-live-link"
            >
              Live Demo →
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="project-live-link"
          >
            View on GitHub →
          </a>
        </div>
      </div>
      <p>{project.description}</p>
      {project.points && project.points.length > 0 && (
        <ul className="project-points">
          {project.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
      <div className="project-tags">
        {project.tags.map((tag, tagIndex) => (
          <span key={tagIndex} className="tech-tag">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Reporting Engine for Large Data',
      repoUrl: 'https://github.com/nag2mani/ReportingEngine-for-LargeData',
      description: 'Scalable reporting engine handling millions of records with multi-tenant isolation and fine-grained RBAC.',
      points: [
        'Implemented real-time dashboard reports with caching and optimized queries for high-performance analytics.',
      ],
      tags: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis', 'TypeORM', 'React', 'Docker', 'Kubernetes'],
    },
    {
      title: 'PowerPoint Generator',
      repoUrl: 'https://github.com/nag2mani/PowerPointGenerator',
      description: 'API-based system to generate PPTX presentations from user inputs (topic, slide count, user-defined content).',
      points: [
        'Designed modular REST endpoints for presentation creation, retrieval, configuration, and download.',
      ],
      tags: ['Python', 'FastAPI', 'Google Gemini API', 'python-pptx', 'HTML/CSS', 'JavaScript'],
    },
    {
      title: 'Search Engine Implementation',
      repoUrl: 'https://github.com/nag2mani/SearchEngines_and_InformationRetrieval/tree/main/search_engine',
      description: 'Search engine from scratch using web scraping, indexing, and ranking. Built tf-idf weighted vectors and computed pairwise cosine similarity to rank documents.',
      tags: ['Python', 'NumPy', 'Pandas', 'Web Scraping', 'N-grams', 'SimHash', 'Information Retrieval'],
    },
    {
      title: 'Coding Profile Tracker',
      repoUrl: 'https://github.com/nag2mani/CodingProfileTracker',
      description: 'Flask web app for analyzing the coding profiles of Sitare University students. Tracks rankings, problems solved, and categorizes solutions by difficulty level.',
      points: [
        'Presents the data on a visually appealing dashboard for easy comparison and insights.',
      ],
      tags: ['Python', 'Flask', 'Dashboard', 'Data Visualization'],
    },
    {
      title: 'BiteBase',
      repoUrl: 'https://github.com/nag2mani/BiteBase',
      description: 'Comprehensive platform that aggregates real-time data from various sources: hackathons and coding contests, job listings, and curated tech news with summaries.',
      points: [
        'Scrapes and stores hackathon and contest data from multiple websites worldwide.',
        'Collects job listings from diverse sources for easy browsing.',
        'Uses a machine learning model for content processing and summarization.',
      ],
      tags: ['HTML5', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django', 'SQLite', 'Machine Learning'],
    },
    {
      title: 'ChurnInsightHub',
      repoUrl: 'https://github.com/nag2mani/ChurnInsightHub',
      liveUrl: 'https://churninsighthub.onrender.com',
      description: 'Customer churn prediction platform that helps businesses anticipate customer departures and retain valuable customers with actionable insights.',
      points: [
        'Churn Prediction: Advanced algorithms to forecast churn and enable targeted retention strategies.',
        'Customer Longevity: Nurture long-term relationships by understanding needs and behaviors.',
        'Customer Engagement: Personalized communication and targeted campaigns for higher satisfaction.',
      ],
      tags: ['Python', 'Django', 'Machine Learning', 'Data Analysis', 'Render'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
