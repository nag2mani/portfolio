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
      description:
        'Scalable reporting engine designed to process large-scale datasets with tenant isolation and role-based access.',
      points: [
        'Built a multi-tenant reporting engine capable of processing millions of records using optimized PostgreSQL queries and Redis caching.',
        'Designed RBAC-secured analytics dashboards using NestJS services and containerized deployment via Docker and Kubernetes.',
      ],
      tags: ['NestJS', 'PostgreSQL', 'Redis', 'TypeORM', 'Docker', 'Kubernetes'],
    },
    {
      title: 'PowerPoint Generator',
      repoUrl: 'https://github.com/nag2mani/PowerPointGenerator',
      description:
        'API-driven platform that generates PowerPoint presentations automatically from user inputs.',
      points: [
        'Developed a FastAPI service that generates structured PPTX presentations from user prompts using Google Gemini for AI-powered content generation.',
        'Implemented modular REST APIs for slide creation, customization, and automated download using python-pptx.',
      ],
      tags: ['Python', 'FastAPI', 'Google Gemini API', 'python-pptx', 'HTML/CSS', 'JS/TS'],
    },
    {
      title: 'Search Engine Implementation',
      repoUrl: 'https://github.com/nag2mani/SearchEngines_and_InformationRetrieval/tree/main/search_engine',
      description:
        'End-to-end search engine built from scratch including crawling, indexing, and ranking algorithms.',
      points: [
        'Implemented a document indexing pipeline using TF-IDF vectorization to represent and rank documents efficiently.',
        'Applied cosine similarity and SimHash techniques for accurate ranking and near-duplicate detection.',
      ],
      tags: ['Python', 'NumPy', 'Pandas', 'Web Scraping', 'N-grams', 'SimHash', 'IR'],
    },
    {
      title: 'Coding Profile Tracker',
      repoUrl: 'https://github.com/nag2mani/CodingProfileTracker',
      description:
        'Web application for tracking coding performance of Sitare University students.',
      points: [
        'Built a Flask-based analytics dashboard that tracks rankings, problems solved, and difficulty distribution.',
        'Designed visual insights to compare student performance and highlight progress trends.',
      ],
      tags: ['Python', 'Flask', 'Dashboard', 'Data Visualization'],
    },
    {
      title: 'BiteBase',
      repoUrl: 'https://github.com/nag2mani/BiteBase',
      description:
        'Platform aggregating global hackathons, coding contests, job listings, and summarized tech news.',
      points: [
        'Developed automated scrapers to collect hackathons, contests, and job listings from multiple global sources.',
        'Integrated ML-based summarization to convert long-form tech news into concise insights.',
      ],
      tags: ['HTML', 'Bootstrap', 'JavaScript', 'Python', 'Django', 'SQLite', 'ML'],
    },
    {
      title: 'ChurnInsightHub',
      repoUrl: 'https://github.com/nag2mani/ChurnInsightHub',
      description:
        'Machine learning platform that predicts customer churn and provides retention insights.',
      points: [
        'Built a churn prediction pipeline using machine learning models trained on customer behavioral data.',
        'Delivered actionable dashboards through Django that help businesses identify at-risk customers and plan retention strategies.',
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