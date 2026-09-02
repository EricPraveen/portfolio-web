import React from 'react';

export interface CredentialsHeaderProps {
  totalCount: number;
  verifiedCount: number;
  projectLinkedCount: number;
}

export function CredentialsHeader({
  totalCount,
  verifiedCount,
  projectLinkedCount,
}: CredentialsHeaderProps) {
  return (
    <header className="cred-hero-header" aria-label="Verified Credentials & Evidence Archive">
      {/* Top Ledger Strip */}
      <div className="cred-hero-strip">
        <div className="cred-hero-strip-left">
          <span className="cred-hero-index font-mono text-mono-label">
            04 / VERIFIED CREDENTIALS
          </span>
          <span className="cred-hero-divider" aria-hidden="true">&bull;</span>
          <span className="cred-hero-filter-status font-mono text-mono-label">
            EVIDENCE ARCHIVE
          </span>
        </div>

        <div className="cred-hero-strip-right">
          <span className="cred-status-beacon" aria-hidden="true">
            <span className="cred-status-dot" />
          </span>
          <span className="cred-status-text font-mono text-mono-label">
            VERIFIED PROOF &bull; NO VANITY BADGES
          </span>
        </div>
      </div>

      {/* Main Heading & Editorial Lead */}
      <div className="cred-hero-body">
        <p className="cred-hero-title-tag text-mono-label font-mono">
          16 VERIFIED TECHNICAL CERTIFICATES &bull; MICROSOFT &bull; COURSERA / IBM &bull; UOM &bull; SOLOLEARN
        </p>

        <h1 className="cred-hero-name font-display">
          Verified Technical Certifications & Credentials
        </h1>

        <p className="cred-hero-lead text-body">
          An authoritative evidence archive of 16 verified technical certificates covering software engineering, React, Spring Boot fundamentals, Python, web standards, security operations, and AI. Every record includes direct PDF document view links.
        </p>

        {/* Live Metrics Ledger Strip */}
        <div className="cred-metrics-strip" aria-label="Credentials Summary Metrics">
          <div className="cred-metric-item">
            <span className="cred-metric-label font-mono text-mono-label">Archived Credentials:</span>
            <span className="cred-metric-val font-sans">
              <strong>{totalCount}</strong> Documented Records
            </span>
          </div>

          <div className="cred-metric-item">
            <span className="cred-metric-label font-mono text-mono-label">Direct Verification Links:</span>
            <span className="cred-metric-val font-sans">
              <strong style={{ color: '#16a34a' }}>{verifiedCount}</strong> External Validations
            </span>
          </div>

          <div className="cred-metric-item">
            <span className="cred-metric-label font-mono text-mono-label">Applied in Project Cases:</span>
            <span className="cred-metric-val font-sans">
              <strong style={{ color: 'var(--color-signal-cobalt)' }}>{projectLinkedCount}</strong> System Cross-Refs
            </span>
          </div>

          <div className="cred-metric-item">
            <span className="cred-metric-label font-mono text-mono-label">Verification Rigor:</span>
            <span className="cred-metric-val font-sans">
              Masked Safe IDs &bull; 0 Invented Badges
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
