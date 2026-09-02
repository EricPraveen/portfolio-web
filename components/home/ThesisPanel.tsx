import React from 'react';
import Link from 'next/link';
import { Profile } from '@/content/types';

export interface ThesisPanelProps {
  profile: Profile;
}

export function ThesisPanel({ profile }: ThesisPanelProps) {
  // Clean placeholders for display
  const title = profile.title.replace(/\[|\]/g, '');
  const thesisStatement = profile.thesisStatement.replace(/\[|\]/g, '');
  const availabilityStatus = profile.availability.status;
  const stage = profile.availability.stage.replace(/\[|\]/g, '');
  const location = `${profile.location.city.replace(/\[|\]/g, '')}, ${profile.location.country.replace(/\[|\]/g, '')}`;
  const targetRoles = profile.availability.targetRoles.map((r) => r.replace(/\[|\]/g, '')).join(' • ');

  return (
    <header className="thesis-panel" aria-label="Professional Thesis & Engineering Ledger">
      {/* Top Ledger Strip */}
      <div className="thesis-ledger-strip">
        <div className="thesis-strip-left">
          <span className="thesis-section-index text-mono-label font-mono">
            01 / THESIS &bull; EVIDENCE SYSTEM
          </span>
          <span className="thesis-strip-divider text-mono-label" aria-hidden="true">&bull;</span>
          <span className="thesis-location text-mono-label font-mono">
            {location} ({profile.location.timezone.replace(/\[|\]/g, '')})
          </span>
        </div>

        <div className="thesis-strip-right">
          <span className="thesis-status-beacon" aria-hidden="true">
            <span className="thesis-status-dot" />
          </span>
          <span className="thesis-status-text text-mono-label font-mono">
            STATUS: {availabilityStatus.toUpperCase()} ({stage})
          </span>
        </div>
      </div>

      {/* Main Thesis Content */}
      <div className="thesis-body-grid">
        <div className="thesis-main-content">
          <p className="thesis-title-tag text-mono-label">
            {title}
          </p>

          <h1 className="thesis-headline font-display">
            Designing resilient distributed systems, transactional backends, and evidence-first web architectures.
          </h1>

          <p className="thesis-statement font-sans">
            {thesisStatement}
          </p>

          {/* Target Focus Metadata */}
          <div className="thesis-focus-card">
            <div className="thesis-focus-item">
              <span className="thesis-focus-label text-mono-label font-mono">Target Engineering Scope:</span>
              <span className="thesis-focus-value text-sm font-sans">{targetRoles}</span>
            </div>
            <div className="thesis-focus-item">
              <span className="thesis-focus-label text-mono-label font-mono">Engineering Modality:</span>
              <span className="thesis-focus-value text-sm font-sans">
                {profile.location.remotePreference} &bull; Measurable Benchmarks &bull; Zero Fluff
              </span>
            </div>
          </div>

          {/* Primary Action Button Group */}
          <div className="thesis-actions">
            <a
              href="#selected-work"
              className="thesis-btn thesis-btn-primary"
            >
              <span>View Selected Work</span>
              <span className="thesis-btn-arrow" aria-hidden="true">&darr;</span>
            </a>

            <Link
              href="/profile"
              className="thesis-btn thesis-btn-secondary"
            >
              <span>Read Profile & Experience</span>
              <span className="thesis-btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>

            <a
              href={profile.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="thesis-btn thesis-btn-ghost font-mono"
            >
              <span>Download Resume</span>
              <span className="thesis-btn-arrow" aria-hidden="true"> ↗</span>
            </a>

            <Link
              href="/contact"
              className="thesis-btn thesis-btn-ghost font-mono"
            >
              <span>Contact / Inquiry</span>
              <span className="thesis-btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Aside: Ledger Metadata Block */}
        <aside className="thesis-sidebar-card" aria-label="System Metadata Ledger">
          <div className="thesis-sidebar-header">
            <span className="text-mono-label font-mono">LEDGER RECORD ID</span>
            <span className="thesis-badge-code font-mono">SL-2026-v3</span>
          </div>

          <ul className="thesis-sidebar-list" role="list">
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">Academic Baseline:</span>
              <span className="thesis-meta-val font-sans">Bachelor of Science, Information Technology</span>
            </li>
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">Core Specialization:</span>
              <span className="thesis-meta-val font-sans">Distributed Task Scheduling & Concurrency</span>
            </li>
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">Operating Rigor:</span>
              <span className="thesis-meta-val font-sans">Strict WCAG 2.2 AA &bull; Zero Inferred Metrics</span>
            </li>
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">Current Availability:</span>
              <span className="thesis-meta-val font-sans" style={{ color: 'var(--color-signal-cobalt)', fontWeight: 600 }}>
                {profile.availability.notes ? profile.availability.notes.replace(/\[|\]/g, '') : 'Available for 2026/2027'}
              </span>
            </li>
          </ul>

          <div className="thesis-sidebar-footer">
            <span className="text-mono-label font-mono" style={{ fontSize: '0.6875rem', color: 'var(--color-ink-faint)' }}>
              Verified Artifact Ledger &bull; Immutable Content Model
            </span>
          </div>
        </aside>
      </div>
    </header>
  );
}
