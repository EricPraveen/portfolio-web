import React from 'react';
import { EvidenceLink } from '@/content/types';

export interface EvidenceGroupProps {
  evidence: EvidenceLink[];
  title?: string;
}

export function EvidenceGroup({ evidence, title = 'Primary Evidence & Verifiable Artifacts' }: EvidenceGroupProps) {
  if (!evidence || evidence.length === 0) return null;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'github':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      case 'demo':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
          </svg>
        );
      case 'documentation':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        );
      case 'paper':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case 'slides':
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
        );
      default:
        return (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        );
    }
  };

  return (
    <div className="cs-evidence-group" role="region" aria-label={title}>
      <div className="cs-evidence-header">
        <span className="cs-evidence-eyebrow text-mono-label">VERIFICATION ARCHIVE</span>
        <h3 className="cs-evidence-title">{title}</h3>
      </div>

      <div className="cs-evidence-grid">
        {evidence.map((item, idx) => {
          const isExt = item.isExternal !== false && item.url.startsWith('http');

          return (
            <a
              key={idx}
              href={item.url}
              target={isExt ? '_blank' : undefined}
              rel={isExt ? 'noopener noreferrer' : undefined}
              className={`cs-evidence-card ${item.isPrimary ? 'cs-evidence-card-primary' : ''}`}
              aria-label={`${item.label} (${item.type.toUpperCase()}) ${isExt ? 'opens in new tab' : ''}`}
            >
              <div className="cs-evidence-card-top">
                <div className="cs-evidence-type-badge text-mono-label">
                  <span className="cs-evidence-icon">{getTypeIcon(item.type)}</span>
                  <span>{item.type.toUpperCase()}</span>
                </div>
                {item.isPrimary && (
                  <span className="cs-evidence-primary-badge text-mono-label">PRIMARY SOURCE</span>
                )}
              </div>

              <div className="cs-evidence-card-body">
                <strong className="cs-evidence-label">
                  {item.label}
                  <span className="cs-evidence-arrow" aria-hidden="true">&nearr;</span>
                </strong>
                {item.note && <p className="cs-evidence-note">{item.note}</p>}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
