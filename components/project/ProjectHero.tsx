import React from 'react';
import Link from 'next/link';
import { Project } from '@/content/types';

export interface ProjectHeroProps {
  project: Project;
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const indexStr = String(project.order).padStart(2, '0');

  return (
    <header className="cs-hero">
      {/* Top Breadcrumb & Return Link */}
      <nav className="cs-hero-breadcrumb" aria-label="Breadcrumb navigation">
        <Link href="/projects" className="cs-hero-back-link">
          <span aria-hidden="true">&larr;</span> Return to Work Catalog
        </Link>
        <span className="cs-hero-crumb-divider" aria-hidden="true">/</span>
        <span className="cs-hero-crumb-current" aria-current="page">Case Study: {project.slug}</span>
      </nav>

      {/* Meta Eyebrow Strip */}
      <div className="cs-hero-meta-strip">
        <div className="cs-hero-meta-left">
          <span className="cs-hero-index text-mono-label">{indexStr} / CASE STUDY</span>
          <span className="cs-hero-separator" aria-hidden="true">&bull;</span>
          <span className="cs-hero-category text-mono-label">{project.category}</span>
        </div>
        <div className="cs-hero-meta-right">
          <span className="cs-hero-year text-mono-label">{project.year || project.period}</span>
          <span className={`cs-hero-status-stamp status-${project.status} text-mono-label`}>
            {project.status.toUpperCase()}
          </span>
          {project.isAcademic && (
            <span className="cs-hero-academic-badge text-mono-label">
              Academic Systems Lab
            </span>
          )}
        </div>
      </div>

      {/* Main Title */}
      <h1 className="cs-hero-title">{project.title}</h1>

      {/* Subtitle / Headline */}
      <p className="cs-hero-headline">{project.headline}</p>

      {/* High-Impact Concise Outcome Callout Box */}
      {project.conciseOutcome && (
        <div className="cs-hero-outcome-banner" role="region" aria-label="Key Outcome Highlight">
          <div className="cs-hero-outcome-icon" aria-hidden="true">
            <span className="cs-hero-outcome-beacon" />
          </div>
          <div className="cs-hero-outcome-content">
            <span className="cs-hero-outcome-label text-mono-label">VERIFIED ENGINEERING OUTCOME</span>
            <p className="cs-hero-outcome-text">{project.conciseOutcome}</p>
          </div>
        </div>
      )}

      {/* Primary Action Buttons */}
      <div className="cs-hero-actions">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cs-hero-btn cs-hero-btn-primary"
            aria-label={`View ${project.title} source code on GitHub (opens in new tab)`}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>Source Code</span>
            <span className="cs-hero-ext-arrow" aria-hidden="true">&nearr;</span>
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cs-hero-btn cs-hero-btn-secondary"
            aria-label={`Open interactive demonstration for ${project.title} (opens in new tab)`}
          >
            <span className="cs-hero-live-indicator" aria-hidden="true" />
            <span>Interactive Demo</span>
            <span className="cs-hero-ext-arrow" aria-hidden="true">&nearr;</span>
          </a>
        )}

        {project.docsUrl && (
          <a
            href={project.docsUrl}
            target={project.docsUrl.startsWith('http') ? '_blank' : undefined}
            rel={project.docsUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="cs-hero-btn cs-hero-btn-ghost"
            aria-label={`Read technical specification and architecture documentation for ${project.title}`}
          >
            <span>Technical Spec</span>
            <span className="cs-hero-ext-arrow" aria-hidden="true">&rarr;</span>
          </a>
        )}
      </div>
    </header>
  );
}
