import React from 'react';
import type { Project } from '../utils/Project';
import './styles/ProjectCard.css'

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  // Split the name to get the title and technologies
  const [title, techString] = project.name.split('|').map(s => s.trim());
  const technologies = techString ? techString.split(',').map(s => s.trim()) : [];

  return (
    <div className="project-card">
      {project.image && <img src={project.image} alt={title} className="project-image" />}
      <div className="project-content">
        <h3 className="title">{title}</h3>

        {project.associated_with && (
          <p className="subtitle">Associated with: {project.associated_with}</p>
        )}

        <div className="technologies">
          {technologies.map((tech, index) => (
            <React.Fragment key={tech}>
              <span className="tech-tag">{tech}</span>
              {index < technologies.length - 1 && ', '}
            </React.Fragment>
          ))}
        </div>

        <p className="description">{project.description}</p>

        <div className="buttons">
          <a
            href="https://github.com/GaGaNRaJ2003"
            className="cta-btn"
            target="_blank"
            rel="noreferrer"
          >
            View on GitHub
          </a>

          <a
            href="https://github.com/GaGaNRaJ2003"
            className="cta-btn secondary"
            target="_blank"
            rel="noreferrer"
          >
            View All Projects →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
