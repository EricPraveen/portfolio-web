import React from 'react';
import Link from 'next/link';
import { Project } from '@/content/types';
import { ProjectVisualDiagram } from '../home/ProjectVisualDiagram';

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryDecision = project.decisions?.[0];
  const primaryEvidence = project.evidence?.find((e) => e.isPrimary) || project.evidence?.[0];
  const demoEvidence = project.evidence?.find((e) => e.type === 'demo');

  // Explicit status labels (not color-only)
  const statusLabel =
    project.status === 'shipped'
      ? 'SHIPPED • BENCHMARKED'
      : project.status === 'active'
      ? 'ACTIVE • PROTOTYPE'
      : 'COMPLETED • ARCHIVE';

  return (
    <article
      className="work-project-card"
      aria-labelledby={`work-project-title-${project.slug}`}
    >
      {/* Plate Header Strip */}
      <div className="work-card-strip">
        <div className="work-card-strip-left">
          <span className="work-card-index font-mono text-mono-label">
            PLATE 0{index + 1} &bull; {project.category.toUpperCase()}
          </span>
          <span className="work-card-divider" aria-hidden="true">&bull;</span>
          <span className="work-card-period font-mono text-mono-label">
            {project.period}
          </span>
        </div>

        <div className="work-card-strip-right">
          {project.featured && (
            <span className="work-card-flagship-badge font-mono text-mono-label">
              ★ FLAGSHIP
            </span>
          )}
          <span className="work-card-status-badge font-mono text-mono-label">
            [{statusLabel}]
          </span>
        </div>
      </div>

      {/* Plate Content Grid */}
      <div className="work-card-body-grid">
        {/* Narrative & Constraints Column */}
        <div className="work-card-narrative">
          <h2 id={`work-project-title-${project.slug}`} className="work-card-title font-sans">
            <Link href={`/projects/${project.slug}`} className="work-card-title-link">
              {project.title}
            </Link>
          </h2>

          <p className="work-card-headline text-body">
            {project.headline}
          </p>

          {/* Problem & Outcome Ledger Box */}
          <div className="work-card-evidence-box">
            <div className="work-card-evidence-row">
              <span className="work-card-evidence-tag font-mono text-mono-label">
                Problem & Constraints:
              </span>
              <p className="work-card-evidence-text font-sans text-sm">
                {project.problem}
              </p>
            </div>

            {project.outcomes && project.outcomes.length > 0 && (
              <div className="work-card-evidence-row">
                <span className="work-card-evidence-tag font-mono text-mono-label" style={{ color: '#15803d' }}>
                  Verified Outcome:
                </span>
                <p className="work-card-evidence-text font-sans text-sm" style={{ fontWeight: 500 }}>
                  {project.outcomes[0]}
                </p>
              </div>
            )}
          </div>

          {/* Key Decision Note */}
          {primaryDecision && (
            <div className="work-card-decision-box">
              <span className="work-card-decision-label font-mono text-mono-label">
                Key Architectural Decision:
              </span>
              <h3 className="work-card-decision-title font-sans text-sm">
                {primaryDecision.title}
              </h3>
              <p className="work-card-decision-why font-sans text-xs">
                {primaryDecision.decision}
              </p>
            </div>
          )}

          {/* Tech Stack & Role Strip */}
          <div className="work-card-meta-strip">
            <div className="work-card-tech-group">
              <span className="font-mono text-mono-label" style={{ color: 'var(--color-steel)' }}>
                Stack:
              </span>
              <div className="work-card-tech-pills">
                {project.technologies.map((tech) => (
                  <span key={tech} className="work-card-tech-pill font-mono text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="work-card-role font-mono text-mono-label">
              Role: <strong style={{ color: 'var(--color-mineral-ink)' }}>{project.role}</strong>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="work-card-actions">
            <Link
              href={`/projects/${project.slug}`}
              className="work-card-btn-primary font-mono"
            >
              <span>Read Full Case Study</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>

            {primaryEvidence && primaryEvidence.url && primaryEvidence.url !== '#' && (
              <a
                href={primaryEvidence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card-btn-secondary font-mono"
              >
                <span>{primaryEvidence.label}</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            )}

            {demoEvidence && demoEvidence.url && demoEvidence.url !== '#' && (
              <a
                href={demoEvidence.url}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card-btn-ghost font-mono"
              >
                <span>Live Demonstration</span>
                <span aria-hidden="true"> ↗</span>
              </a>
            )}

            {/* Note for internal/academic projects without public demo */}
            {!demoEvidence && (
              <span className="work-card-note font-mono text-xs">
                [Academic Benchmark Specimen]
              </span>
            )}
          </div>
        </div>

        {/* Visual Architectural Diagram Column */}
        <div className="work-card-visual-col">
          <ProjectVisualDiagram slug={project.slug} />
        </div>
      </div>
    </article>
  );
}
