import React from 'react';
import Link from 'next/link';
import { Profile } from '@/content/types';

export interface ProfileHeaderProps {
  profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
  const cleanTitle = profile.title.replace(/\[|\]/g, '');
  const cleanThesis = profile.thesisStatement.replace(/\[|\]/g, '');
  const cleanLocation = `${profile.location.city.replace(/\[|\]/g, '')}, ${profile.location.country.replace(/\[|\]/g, '')} (${profile.location.timezone.replace(/\[|\]/g, '')})`;
  const targetRoles = profile.availability.targetRoles.map((r) => r.replace(/\[|\]/g, '')).join(' • ');

  return (
    <header className="profile-hero-header" aria-label="Professional Profile & Engineering Direction">
      {/* Top Breadcrumb & Section Ledger Strip */}
      <div className="profile-hero-strip">
        <div className="profile-hero-strip-left">
          <span className="profile-hero-index font-mono text-mono-label">
            03 / PROFILE &bull; EVIDENCE LEDGER
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

      {/* Main Profile Heading & Bio */}
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

          {/* Bio Paragraphs */}
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

          {/* Target Focus Metadata Block */}
          <div className="profile-hero-target-box">
            <div className="profile-target-row">
              <span className="profile-target-label font-mono text-mono-label">Target Roles:</span>
              <span className="profile-target-value font-sans text-sm">{targetRoles}</span>
            </div>
            <div className="profile-target-row">
              <span className="profile-target-label font-mono text-mono-label">Availability:</span>
              <span className="profile-target-value font-sans text-sm" style={{ color: 'var(--color-signal-cobalt)', fontWeight: 600 }}>
                {profile.availability.notes ? profile.availability.notes.replace(/\[|\]/g, '') : 'Available for upcoming terms'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="profile-hero-actions">
            <a
              href={profile.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="profile-btn profile-btn-primary font-mono"
            >
              <span>Download Verified Resume ({profile.resume.lastUpdated})</span>
              <span aria-hidden="true"> ↗</span>
            </a>

            <Link href="/contact" className="profile-btn profile-btn-secondary font-mono">
              <span>Contact & Inquiries</span>
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>

        {/* Section Navigation Jump Card */}
        <nav className="profile-jump-card" aria-label="Profile Page Navigation">
          <div className="profile-jump-header">
            <span className="font-mono text-mono-label">ON-PAGE EVIDENCE SECTIONS</span>
          </div>
          <ul className="profile-jump-list" role="list">
            <li>
              <a href="#experience" className="profile-jump-link font-mono text-xs">
                <span>01 / Practical Experience</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#education" className="profile-jump-link font-mono text-xs">
                <span>02 / Academic Foundation</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#capabilities" className="profile-jump-link font-mono text-xs">
                <span>03 / Capability Matrix</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#principles" className="profile-jump-link font-mono text-xs">
                <span>04 / Operating Principles</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#collaboration" className="profile-jump-link font-mono text-xs">
                <span>05 / Teamwork & Mentoring</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
            <li>
              <a href="#resume-ledger" className="profile-jump-link font-mono text-xs">
                <span>06 / Verified Resume Artifact</span>
                <span aria-hidden="true">&darr;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
