import React from 'react';
import { Project } from '@/content/types';
import { ProjectVisualDiagram } from '../home/ProjectVisualDiagram';

export interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const primaryDecision = project.decisions?.[0];

  // Explicit status labels (not color-only)
  const statusLabel =
    project.status === 'shipped'
      ? 'SHIPPED • BENCHMARKED'
      : project.status === 'active'
      ? 'ACTIVE • PROTOTYPE'
      : 'COMPLETED • ARCHIVE';

  return (
    <article
      className="work-project-card cartridge-card arcade-box"
      aria-labelledby={`work-project-title-${project.slug}`}
    >
      {/* 16-Bit Cartridge Top Ribbed Grip */}
      <div className="cartridge-grip" aria-hidden="true">
        <div className="cartridge-grip-ridge" />
        <div className="cartridge-grip-ridge" />
        <div className="cartridge-grip-ridge" />
      </div>

      {/* Simulated Hardware Corner Rivets */}
      <span className="corner-screw corner-screw--tl" aria-hidden="true" />
      <span className="corner-screw corner-screw--tr" aria-hidden="true" />
      <span className="corner-screw corner-screw--bl" aria-hidden="true" />
      <span className="corner-screw corner-screw--br" aria-hidden="true" />

      {/* Plate Header Strip / Cartridge Sticker */}
      <div className="work-card-strip cartridge-sticker">
        <div className="work-card-strip-left">
          <span className="work-card-cartridge-badge font-mono text-mono-label">
            16-BIT ROM // PLATE 0{index + 1}
          </span>
          <span className="work-card-divider" aria-hidden="true">&bull;</span>
          <span className="work-card-index font-mono text-mono-label">
            {project.category.toUpperCase()}
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
            {project.title}
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
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="work-card-btn-primary arcade-btn font-mono"
              >
                <span>LIVE DEMO ↗</span>
              </a>
            )}

            {project.repoUrl && project.repoUrl !== '#' && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  project.demoUrl && project.demoUrl !== '#'
                    ? 'work-card-btn-secondary arcade-btn font-mono'
                    : 'work-card-btn-primary arcade-btn font-mono'
                }
              >
                <span>GITHUB REPO ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual Architectural Diagram Column with Camera Viewfinder Frame */}
        <div className="work-card-visual-col camera-frame">
          <span className="camera-viewfinder-rec font-mono">[● REC]</span>
          <span className="camera-corner camera-corner--tl" aria-hidden="true" />
          <span className="camera-corner camera-corner--tr" aria-hidden="true" />
          <span className="camera-corner camera-corner--bl" aria-hidden="true" />
          <span className="camera-corner camera-corner--br" aria-hidden="true" />
          <ProjectVisualDiagram slug={project.slug} />
        </div>
      </div>
    </article>
  );
}
