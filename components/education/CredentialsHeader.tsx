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
    <header className="cred-hero-header" aria-label="Education & Certifications">
      {/* Top Strip */}
      <div className="cred-hero-strip">
        <div className="cred-hero-strip-left">
          <span className="cred-hero-index font-mono text-mono-label">
            04 / EDUCATION
          </span>
        </div>

        <div className="cred-hero-strip-right">
          <span className="cred-status-beacon" aria-hidden="true">
            <span className="cred-status-dot" />
          </span>
          <span className="cred-status-text font-mono text-mono-label">
            Certificates with PDF links
          </span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="cred-hero-body">
        <p className="cred-hero-title-tag text-mono-label font-mono">
          Microsoft &bull; Coursera / IBM &bull; SoloLearn
        </p>

        <h1 className="cred-hero-name font-display">
          Education &amp; Certifications
        </h1>

        <p className="cred-hero-lead text-body">
          My academic background, online certificates, and achievements — covering software engineering, web development, security, and more.
        </p>

        {/* Metrics */}
        <div className="cred-metrics-strip" aria-label="Certification counts">
          <div className="cred-metric-item">
            <span className="cred-metric-label font-mono text-mono-label">Total:</span>
            <span className="cred-metric-val font-sans">
              <strong>{totalCount}</strong>
            </span>
          </div>

          <div className="cred-metric-item">
            <span className="cred-metric-label font-mono text-mono-label">With PDF:</span>
            <span className="cred-metric-val font-sans">
              <strong style={{ color: '#16a34a' }}>{verifiedCount}</strong>
            </span>
          </div>

          <div className="cred-metric-item">
            <span className="cred-metric-label font-mono text-mono-label">Linked to projects:</span>
            <span className="cred-metric-val font-sans">
              <strong style={{ color: 'var(--color-signal-cobalt)' }}>{projectLinkedCount}</strong>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
