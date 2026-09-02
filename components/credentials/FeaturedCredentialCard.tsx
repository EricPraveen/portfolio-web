import React from 'react';
import Link from 'next/link';
import { CredentialItem } from '@/content/types';

export interface FeaturedCredentialCardProps {
  item: CredentialItem;
  onOpenPreview?: (item: CredentialItem) => void;
}

export function FeaturedCredentialCard({
  item,
  onOpenPreview,
}: FeaturedCredentialCardProps) {
  // Clean titles from any placeholder brackets for clean display
  const displayTitle = item.title.replace(/\[|\]/g, '');
  const displayIssuer = item.issuer.replace(/\[|\]/g, '');
  const displaySummary = item.summary ? item.summary.replace(/\[|\]/g, '') : null;
  const displayOutcome = item.rankOrOutcome ? item.rankOrOutcome.replace(/\[|\]/g, '') : null;

  const groupThemeClass = `cred-card-group--${item.group}`;

  return (
    <article className={`cred-evidence-card ${groupThemeClass}`} aria-labelledby={`cred-title-${item.id}`}>
      {/* Top Meta Bar */}
      <div className="cred-card-top-bar">
        <div className="cred-card-category-strip">
          <span className="cred-card-group-tag font-mono text-mono-label">
            {item.group.toUpperCase()}
          </span>
          <span className="cred-card-dot" aria-hidden="true">&bull;</span>
          <span className="cred-card-cat-label font-mono text-xs">
            {item.category}
          </span>
        </div>

        <div className="cred-card-date-badge font-mono text-xs">
          <span>{item.issueDate}</span>
          {item.expirationDate && (
            <span className="cred-card-expiry"> &bull; Exp: {item.expirationDate}</span>
          )}
        </div>
      </div>

      {/* Main Title & Issuer */}
      <div className="cred-card-header">
        <h3 id={`cred-title-${item.id}`} className="cred-card-title font-sans">
          {displayTitle}
        </h3>

        <p className="cred-card-issuer text-sm">
          Issuing Body: <strong>{displayIssuer}</strong>
        </p>
      </div>

      {/* Distinction or Placement Badge */}
      {displayOutcome && (
        <div className="cred-card-outcome-banner font-mono text-xs">
          <span className="cred-outcome-icon" aria-hidden="true">★</span>
          <span>{displayOutcome}</span>
        </div>
      )}

      {/* Safe Masked ID Badge (if applicable) */}
      {item.credentialId && item.isCredentialIdSafe && (
        <div className="cred-card-id-row">
          <span className="cred-id-label font-mono text-xs">Credential ID:</span>
          <code className="cred-id-code font-mono text-xs">{item.credentialId}</code>
          <span className="cred-id-safe-badge font-mono text-xs" title="Sensitive serials masked for verification security">
            [SAFE MASKED]
          </span>
        </div>
      )}

      {/* Narrative Scope / Summary */}
      {displaySummary && (
        <p className="cred-card-summary text-sm">
          {displaySummary}
        </p>
      )}

      {/* Demonstrated Skills Strip */}
      {item.skillsDemonstrated && item.skillsDemonstrated.length > 0 && (
        <div className="cred-card-skills-section">
          <span className="cred-skills-label font-mono text-mono-label">
            Skills Demonstrated:
          </span>
          <div className="cred-skills-strip">
            {item.skillsDemonstrated.map((skill) => (
              <span key={skill} className="cred-skill-pill font-mono text-xs">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Action Footer */}
      <div className="cred-card-footer">
        {/* Verification Link with External Semantics */}
        {item.verificationUrl ? (
          <a
            href={item.verificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cred-verify-action-btn font-mono text-xs"
            aria-label={`Verify credential for ${displayTitle} on external authority site (opens in new tab)`}
          >
            <span>Verify Evidence</span>
            <svg
              className="cred-external-icon"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        ) : (
          <span className="cred-verify-unlinked font-mono text-xs">
            Institutional Record Archived
          </span>
        )}

        {/* Linked Project Cross-Reference */}
        {item.relatedProjectSlug && (
          <Link
            href={`/work/${item.relatedProjectSlug}`}
            className="cred-related-project-link font-mono text-xs"
            title={`View case study: ${item.relatedProjectSlug}`}
          >
            <span>Applied in: <strong>{item.relatedProjectSlug}</strong> &rarr;</span>
          </Link>
        )}

        {/* Optional Document Preview Trigger */}
        {item.previewDoc && onOpenPreview && (
          <button
            type="button"
            onClick={() => onOpenPreview(item)}
            className="cred-preview-btn font-mono text-xs"
          >
            <span>Inspect Artifact</span>
          </button>
        )}
      </div>
    </article>
  );
}
