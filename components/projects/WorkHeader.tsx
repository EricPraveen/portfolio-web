import React from 'react';

export interface WorkHeaderProps {
  totalCount: number;
  shippedCount: number;
  activeCount: number;
}

export function WorkHeader({
  totalCount,
  shippedCount,
  activeCount,
}: WorkHeaderProps) {
  return (
    <header className="work-hero-header" aria-label="Projects">
      {/* Top Strip */}
      <div className="work-hero-strip">
        <div className="work-hero-strip-left">
          <span className="work-hero-index font-mono text-mono-label">
            03 / PROJECTS
          </span>
        </div>

        <div className="work-hero-strip-right">
          <span className="work-status-beacon" aria-hidden="true">
            <span className="work-status-dot" />
          </span>
          <span className="work-status-text font-mono text-mono-label">
            Available for review
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="work-hero-body">
        <p className="work-hero-title-tag text-mono-label font-mono">
          Full-Stack &bull; Backend &bull; Web Apps
        </p>

        <h1 className="work-hero-name font-display">
          My Projects
        </h1>

        <p className="work-hero-lead text-body">
          A collection of projects I&apos;ve built — from team capstones to solo experiments. Each one includes the stack used, my role, and what I learned.
        </p>

        {/* Metrics */}
        <div className="work-metrics-strip" aria-label="Project counts">
          <div className="work-metric-item">
            <span className="work-metric-label font-mono text-mono-label">Total Projects:</span>
            <span className="work-metric-val font-sans"><strong>{totalCount}</strong></span>
          </div>

          <div className="work-metric-item">
            <span className="work-metric-label font-mono text-mono-label">Completed:</span>
            <span className="work-metric-val font-sans">
              <strong style={{ color: '#16a34a' }}>{shippedCount}</strong>
            </span>
          </div>

          <div className="work-metric-item">
            <span className="work-metric-label font-mono text-mono-label">In Progress:</span>
            <span className="work-metric-val font-sans">
              <strong style={{ color: 'var(--color-signal-cobalt)' }}>{activeCount}</strong>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
