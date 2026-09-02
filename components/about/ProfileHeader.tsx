import React from 'react';
import Link from 'next/link';
import { Profile } from '@/content/types';

export interface ProfileHeaderProps {
  profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const cleanTitle = profile.title.replace(/\[|\]/g, '');
  const cleanThesis = profile.thesisStatement.replace(/\[|\]/g, '');
  const cleanLocation = `${profile.location.city.replace(/\[|\]/g, '')}, ${profile.location.country.replace(/\[|\]/g, '')}`;
  const targetRoles = profile.availability.targetRoles.map((r) => r.replace(/\[|\]/g, '')).join(' • ');

  return (
    <header className="profile-hero-header" aria-label="About Me">
      {/* Top Strip */}
      <div className="profile-hero-strip">
        <div className="profile-hero-strip-left">
          <span className="profile-hero-index font-mono text-mono-label">
            01 / ABOUT
          </span>
          <span className="profile-hero-divider" aria-hidden="true">&bull;</span>
          <span className="profile-hero-loc font-mono text-mono-label">
            {cleanLocation}
          </span>
        </div>

        <div className="profile-hero-strip-right">
          <span className="profile-status-beacon" aria-hidden="true">
            <span className="profile-status-dot" />
          </span>
          <span className="profile-status-text font-mono text-mono-label">
            {profile.availability.status.toUpperCase()} &bull; {profile.availability.stage.replace(/\[|\]/g, '')}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-hero-body">
        <div className="profile-hero-main">
          <p className="profile-hero-title-tag text-mono-label font-mono">
            {cleanTitle}
          </p>

          <h1 className="profile-hero-name font-display">
            {profile.fullName.replace(/\[|\]/g, '')}
          </h1>

          <p className="profile-hero-thesis font-sans text-body">
            {cleanThesis}
          </p>

          {/* Bio */}
          <div className="profile-hero-bio">
            <p className="profile-bio-lead text-body">
              {profile.shortBio.replace(/\[|\]/g, '')}
            </p>
            {profile.longBio.map((paragraph, idx) => (
              <p key={idx} className="profile-bio-text text-sm">
                {paragraph.replace(/\[|\]/g, '')}
              </p>
            ))}
          </div>

          {/* Target Info */}
          <div className="profile-hero-target-box">
            <div className="profile-target-row">
              <span className="profile-target-label font-mono text-mono-label">Looking for:</span>
              <span className="profile-target-value font-sans text-sm">{targetRoles}</span>
            </div>
            <div className="profile-target-row">
              <span className="profile-target-label font-mono text-mono-label">Availability:</span>
              <span className="profile-target-value font-sans text-sm" style={{ color: 'var(--color-signal-cobalt)', fontWeight: 600 }}>
                {profile.availability.notes ? profile.availability.notes.replace(/\[|\]/g, '') : 'Open to opportunities'}
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="profile-hero-actions">
            <a
              href={profile.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-btn profile-btn-primary font-mono"
            >
              <span>Download Resume</span>
              <span aria-hidden="true"> ↗</span>
            </a>

            <Link href="/contact" className="profile-btn profile-btn-secondary font-mono">
              <span>Contact Me</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* On-page nav */}
        <nav className="profile-jump-card" aria-label="On this page">
          <div className="profile-jump-header">
            <span className="font-mono text-mono-label">On this page</span>
          </div>
          <ul className="profile-jump-list" role="list">
            <li>
              <a href="#experience" className="profile-jump-link font-mono text-xs">
                <span>Experience</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#education" className="profile-jump-link font-mono text-xs">
                <span>Education</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#capabilities" className="profile-jump-link font-mono text-xs">
                <span>Skills</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#principles" className="profile-jump-link font-mono text-xs">
                <span>How I Work</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#collaboration" className="profile-jump-link font-mono text-xs">
                <span>Teamwork</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#resume-ledger" className="profile-jump-link font-mono text-xs">
                <span>Resume</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
