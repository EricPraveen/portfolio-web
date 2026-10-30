import React from 'react';
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

  return (
    <article
      className={clsx('project-plate', 'cartridge-card', 'arcade-box', `project-plate--${layoutVariant}`)}
      aria-labelledby={`project-title-${project.slug}`}
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
      <div className="project-plate-strip cartridge-sticker">
        <div className="project-plate-strip-left">
          <span className="work-card-cartridge-badge font-mono text-mono-label">
            16-BIT CARTRIDGE // 0{index + 1}
          </span>
          <span className="project-plate-divider" aria-hidden="true">&bull;</span>
          <span className="project-plate-index font-mono text-mono-label">
            {project.category.toUpperCase()}
          </span>
          <span className="project-plate-divider" aria-hidden="true">&bull;</span>
          <span className="project-plate-period font-mono text-mono-label">
            {project.period}
          </span>
        </div>

        <div className="project-plate-strip-right">
          <span className="project-plate-status-badge font-mono text-mono-label">
            [{project.status.toUpperCase()}]
          </span>
        </div>
      </div>

      {/* Plate Grid Body */}
      <div className="project-plate-content-grid">
        {/* Narrative Column */}
        <div className="project-plate-narrative">
          <h3 id={`project-title-${project.slug}`} className="project-plate-title font-sans">
            {project.title}
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
            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-plate-btn-primary arcade-btn font-mono"
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
                    ? 'project-plate-btn-secondary arcade-btn font-mono'
                    : 'project-plate-btn-primary arcade-btn font-mono'
                }
              >
                <span>GITHUB REPO ↗</span>
              </a>
            )}
          </div>
        </div>

        {/* Visual / Architectural Diagram Column with Camera Viewfinder Frame */}
        <div className="project-plate-visual camera-frame">
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
