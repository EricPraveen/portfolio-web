import React from 'react';
import Link from 'next/link';
import { Project } from '@/content/types';

export interface ProjectFactsProps {
  project: Project;
}

export function ProjectFacts({ project }: ProjectFactsProps) {
  const stack = project.technologies || project.stack || [];

  return (
    <section className="cs-facts" aria-labelledby="project-facts-heading">
      <h2 id="project-facts-heading" className="sr-only">
        Project Metadata & Technical Parameters
      </h2>

      <div className="cs-facts-grid">
        {/* Item 1: Role & Ownership */}
        <div className="cs-facts-item">
          <span className="cs-facts-label text-mono-label">ROLE / OWNERSHIP</span>
          <strong className="cs-facts-value">{project.role}</strong>
          <span className="cs-facts-subtext">{project.personalRole}</span>
        </div>

        {/* Item 2: Team Size */}
        <div className="cs-facts-item">
          <span className="cs-facts-label text-mono-label">TEAM STRUCTURE</span>
          <strong className="cs-facts-value">
            {project.teamSize && project.teamSize > 1
              ? `${project.teamSize} Engineers (Collab)`
              : 'Solo Architect & Builder'}
          </strong>
          <span className="cs-facts-subtext">
            {project.isAcademic ? 'Academic Systems Research' : 'Independent Production Project'}
          </span>
        </div>

        {/* Item 3: Timeline & Duration */}
        <div className="cs-facts-item">
          <span className="cs-facts-label text-mono-label">TIMELINE & DURATION</span>
          <strong className="cs-facts-value">{project.period}</strong>
          <span className="cs-facts-subtext">
            {project.duration ? `Duration: ${project.duration}` : `Year: ${project.year || '2026'}`}
          </span>
        </div>

        {/* Item 4: Status & Domain */}
        <div className="cs-facts-item">
          <span className="cs-facts-label text-mono-label">STATUS & DOMAIN</span>
          <strong className="cs-facts-value cs-facts-status">
            <span className={`cs-facts-status-dot status-${project.status}`} />
            {project.status.toUpperCase()}
          </strong>
          <span className="cs-facts-subtext">{project.category}</span>
        </div>
      </div>

      {/* Primary Stack Strip */}
      <div className="cs-facts-stack-row">
        <span className="cs-facts-stack-label text-mono-label">CORE TECHNOLOGY STACK:</span>
        <div className="cs-facts-stack-pills" role="list" aria-label="Project technologies">
          {stack.map((tech) => (
            <Link
              key={tech}
              href={`/work?q=${encodeURIComponent(tech)}`}
              className="cs-facts-tech-pill text-mono-label"
              role="listitem"
              title={`View all work built with ${tech}`}
            >
              {tech}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
