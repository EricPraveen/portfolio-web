import React from 'react';
import Link from 'next/link';
import { Profile } from '@/content/types';

export interface ThesisPanelProps {
  profile: Profile;
}

export function ThesisPanel({ profile }: ThesisPanelProps) {
  const title = profile.title.replace(/\[|\]/g, '');
  const thesisStatement = profile.thesisStatement.replace(/\[|\]/g, '');
  const availabilityStatus = profile.availability.status;
  const stage = profile.availability.stage.replace(/\[|\]/g, '');
  const location = `${profile.location.city.replace(/\[|\]/g, '')}, ${profile.location.country.replace(/\[|\]/g, '')}`;
  const targetRoles = profile.availability.targetRoles.map((r) => r.replace(/\[|\]/g, '')).join(' • ');

  return (
    <header className="thesis-panel" aria-label="Hero section">
      {/* Top Strip */}
      <div className="thesis-ledger-strip">
        <div className="thesis-strip-left">
          <span className="thesis-section-index text-mono-label font-mono">
            Portfolio &bull; {location}
          </span>
        </div>

        <div className="thesis-strip-right">
          <span className="thesis-status-beacon" aria-hidden="true">
            <span className="thesis-status-dot" />
          </span>
          <span className="thesis-status-text text-mono-label font-mono">
            {availabilityStatus.toUpperCase()} &bull; {stage}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="thesis-body-grid">
        <div className="thesis-main-content">
          <p className="thesis-title-tag text-mono-label">
            {title}
          </p>

          <h1 className="thesis-headline font-display">
            Building full-stack web apps with clean code and solid backends.
          </h1>

          <p className="thesis-statement font-sans">
            {thesisStatement}
          </p>

          {/* Target Roles */}
          <div className="thesis-focus-card">
            <div className="thesis-focus-item">
              <span className="thesis-focus-label text-mono-label font-mono">Looking for:</span>
              <span className="thesis-focus-value text-sm font-sans">{targetRoles}</span>
            </div>
            <div className="thesis-focus-item">
              <span className="thesis-focus-label text-mono-label font-mono">Work mode:</span>
              <span className="thesis-focus-value text-sm font-sans">
                {profile.location.remotePreference}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="thesis-actions">
            <a href="#selected-work" className="thesis-btn thesis-btn-primary">
              <span>View Projects</span>
              <span className="thesis-btn-arrow" aria-hidden="true">&darr;</span>
            </a>

            <Link href="/about" className="thesis-btn thesis-btn-secondary">
              <span>About Me</span>
              <span className="thesis-btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>

            <a
              href={profile.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="thesis-btn thesis-btn-ghost font-mono"
            >
              <span>Resume</span>
              <span className="thesis-btn-arrow" aria-hidden="true"> ↗</span>
            </a>

            <Link href="/contact" className="thesis-btn thesis-btn-ghost font-mono">
              <span>Contact</span>
              <span className="thesis-btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Sidebar Info Card */}
        <aside className="thesis-sidebar-card" aria-label="Quick info">
          <div className="thesis-sidebar-header">
            <span className="text-mono-label font-mono">Quick Info</span>
          </div>

          <ul className="thesis-sidebar-list" role="list">
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">Degree:</span>
              <span className="thesis-meta-val font-sans">BSc (Hons.) Information Technology</span>
            </li>
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">Focus:</span>
              <span className="thesis-meta-val font-sans">Full-Stack Web Development</span>
            </li>
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">GPA:</span>
              <span className="thesis-meta-val font-sans">3.7 / 4.0</span>
            </li>
            <li className="thesis-sidebar-item">
              <span className="thesis-meta-key text-mono-label">Available:</span>
              <span className="thesis-meta-val font-sans" style={{ color: 'var(--color-signal-cobalt)', fontWeight: 600 }}>
                {profile.availability.notes ? profile.availability.notes.replace(/\[|\]/g, '') : 'Open to opportunities'}
              </span>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
}
