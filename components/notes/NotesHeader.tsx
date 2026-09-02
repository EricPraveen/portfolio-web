import React from 'react';
import Link from 'next/link';

export interface NotesHeaderProps {
  totalCount: number;
  postmortemsCount: number;
  topicsCount: number;
}

export function NotesHeader({
  totalCount,
  postmortemsCount,
  topicsCount,
}: NotesHeaderProps) {
  return (
    <header className="notes-hero-header" aria-label="Field Notes & Engineering Notebook">
      {/* Top Ledger Strip */}
      <div className="notes-hero-strip">
        <div className="notes-hero-strip-left">
          <span className="notes-hero-index font-mono text-mono-label">
            05 / FIELD NOTES
          </span>
          <span className="notes-hero-divider" aria-hidden="true">&bull;</span>
          <span className="notes-hero-filter-status font-mono text-mono-label">
            ENGINEERING NOTEBOOK
          </span>
        </div>

        <div className="notes-hero-strip-right">
          <Link href="/feed.xml" className="notes-rss-link font-mono text-mono-label" title="Subscribe via RSS 2.0 Feed">
            <span className="notes-rss-dot" aria-hidden="true">●</span>
            <span>RSS FEED ↗</span>
          </Link>
          <span className="notes-status-text font-mono text-mono-label">
            HIGH-SIGNAL &bull; ZERO SEO FILLER
          </span>
        </div>
      </div>

      {/* Main Heading & Lead */}
      <div className="notes-hero-body">
        <p className="notes-hero-title-tag text-mono-label font-mono">
          DEBUGGING POSTMORTEMS &bull; ARCHITECTURAL TRADE-OFFS &bull; SECURITY NOTES &bull; CONCEPTS
        </p>

        <h1 className="notes-hero-name font-display">
          Field Notes, Systems Debugging & Lessons
        </h1>

        <p className="notes-hero-lead text-body">
          A working notebook documenting root-cause investigations, database locking trade-offs, low-level Linux socket hardening, and distributed lease algorithms. Designed to make engineering thinking and real learning transparent.
        </p>

        {/* Live Metrics Ledger Strip */}
        <div className="notes-metrics-strip" aria-label="Notes Summary Metrics">
          <div className="notes-metric-item">
            <span className="notes-metric-label font-mono text-mono-label">Documented Notes:</span>
            <span className="notes-metric-val font-sans">
              <strong>{totalCount}</strong> Deep Dives
            </span>
          </div>

          <div className="notes-metric-item">
            <span className="notes-metric-label font-mono text-mono-label">Root Cause Postmortems:</span>
            <span className="notes-metric-val font-sans">
              <strong style={{ color: 'var(--color-oxide-dark)' }}>{postmortemsCount}</strong> Debugging Cases
            </span>
          </div>

          <div className="notes-metric-item">
            <span className="notes-metric-label font-mono text-mono-label">Documented Topics:</span>
            <span className="notes-metric-val font-sans">
              <strong style={{ color: 'var(--color-signal-cobalt)' }}>{topicsCount}</strong> Engineering Tags
            </span>
          </div>

          <div className="notes-metric-item">
            <span className="notes-metric-label font-mono text-mono-label">Syndication:</span>
            <span className="notes-metric-val font-sans">
              Available via <Link href="/feed.xml" style={{ color: 'var(--color-signal-cobalt)' }}>/feed.xml</Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
