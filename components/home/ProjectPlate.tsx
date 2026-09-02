import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { Project } from '@/content/types';
import { ProjectVisualDiagram } from './ProjectVisualDiagram';

export interface ProjectPlateProps {
  project: Project;
  layoutVariant?: 'split-right' | 'split-left' | 'stacked';
  index: number;
}

export function ProjectPlate({
  project,
  layoutVariant = 'split-right',
  index,
}: ProjectPlateProps) {
  const primaryDecision = project.decisions?.[0];
  const primaryEvidence = project.evidence?.find((e) => e.isPrimary) || project.evidence?.[0];

  return (
    <article
      className={clsx('project-plate', `project-plate--${layoutVariant}`)}
      aria-labelledby={`project-title-${project.slug}`}
    >
      {/* Plate Header Strip */}
      <div className="project-plate-strip">
        <div className="project-plate-strip-left">
          <span className="project-plate-index font-mono text-mono-label">
            PLATE 0{index + 1} &bull; {project.category.toUpperCase()}
          </span>
          <span className="project-plate-divider" aria-hidden="true">&bull;</span>
          <span className="project-plate-period font-mono text-mono-label">
            {project.period}
          </span>
        </div>

        <div className="project-plate-strip-right">
          <span className="project-plate-status-badge text-mono-label">
            [{project.status.toUpperCase()}]
          </span>
        </div>
      </div>

      {/* Plate Grid Body */}
      <div className="project-plate-content-grid">
        {/* Narrative Column */}
        <div className="project-plate-narrative">
          <h3 id={`project-title-${project.slug}`} className="project-plate-title font-sans">
            <Link href={`/work/${project.slug}`} className="project-plate-title-link">
              {project.title}
            </Link>
          </h3>

          <p className="project-plate-headline text-body">
            {project.headline}
          </p>

          {/* Problem & Verified Outcome Ledger */}
          <div className="project-plate-evidence-box">
            <div className="project-plate-evidence-row">
              <span className="project-plate-evidence-tag text-mono-label font-mono">Core Constraint:</span>
              <p className="project-plate-evidence-text text-sm font-sans">
                {project.problem}
              </p>
            </div>

            {project.outcomes && project.outcomes.length > 0 && (
              <div className="project-plate-evidence-row">
                <span className="project-plate-evidence-tag text-mono-label font-mono" style={{ color: '#15803d' }}>
                  Verified Outcome:
                </span>
                <p className="project-plate-evidence-text text-sm font-sans" style={{ fontWeight: 500 }}>
                  {project.outcomes[0]}
                </p>
              </div>
            )}
          </div>

          {/* Key Architectural Decision Highlight */}
          {primaryDecision && (
            <div className="project-plate-decision-card">
              <div className="project-plate-decision-header">
                <span className="project-plate-decision-label text-mono-label font-mono">
                  Architectural Trade-off & Decision
                </span>
              </div>
              <h4 className="project-plate-decision-title font-sans text-sm">
                {primaryDecision.title}
              </h4>
              <p className="project-plate-decision-why text-xs font-sans">
                <strong>Decision:</strong> {primaryDecision.decision}
              </p>
            </div>
          )}

          {/* Stack & Role Footer */}
          <div className="project-plate-meta-strip">
            <div className="project-plate-technologies">
              <span className="text-mono-label font-mono" style={{ color: 'var(--color-steel)' }}>
                Stack:
              </span>
              <ul className="project-plate-tech-list" role="list">
                {project.technologies.slice(0, 5).map((tech) => (
                  <li key={tech} className="project-plate-tech-pill font-mono">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="project-plate-role text-mono-label">
              Role: <strong style={{ color: 'var(--color-mineral-ink)' }}>{project.role}</strong>
            </div>
          </div>

          {/* Actions */}
          <div className="project-plate-actions">
            <Link
              href={`/work/${project.slug}`}
              className="project-plate-btn-primary"
            >
              <span>Read Full Architectural Case Study</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>

            {primaryEvidence && primaryEvidence.url && primaryEvidence.url !== '#' && (
              <a
                href={primaryEvidence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-plate-btn-secondary font-mono"
              >
                <span>{primaryEvidence.label}</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual / Architectural Diagram Column */}
        <div className="project-plate-visual">
          <ProjectVisualDiagram slug={project.slug} />
        </div>
      </div>
    </article>
  );
}
