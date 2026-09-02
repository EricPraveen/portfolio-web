import React from 'react';
import { BuildLogEntry } from '@/content/types';

export interface BuildLogProps {
  entries: BuildLogEntry[];
}

export function BuildLog({ entries }: BuildLogProps) {
  if (!entries || entries.length === 0) return null;

  return (
    <div className="cs-build-log" role="region" aria-label="Engineering Build Log & Milestones">
      <div className="cs-build-log-timeline">
        {entries.map((entry, idx) => {
          const stepNum = String(idx + 1).padStart(2, '0');

          return (
            <article key={idx} className="cs-build-log-item">
              {/* Timeline marker & connector */}
              <div className="cs-build-log-marker-col" aria-hidden="true">
                <div className="cs-build-log-dot">
                  <span className="cs-build-log-dot-inner" />
                </div>
                {idx < entries.length - 1 && <div className="cs-build-log-line" />}
              </div>

              {/* Log Entry Content */}
              <div className="cs-build-log-content">
                <div className="cs-build-log-meta">
                  <span className="cs-build-log-step text-mono-label">STAGE {stepNum}</span>
                  {entry.date && (
                    <>
                      <span className="cs-build-log-meta-divider" aria-hidden="true">&bull;</span>
                      <time className="cs-build-log-date text-mono-label">{entry.date}</time>
                    </>
                  )}
                  {entry.tag && (
                    <span className="cs-build-log-tag text-mono-label">{entry.tag}</span>
                  )}
                  {entry.commitRef && (
                    <span className="cs-build-log-commit text-mono-label">
                      <code>{entry.commitRef}</code>
                    </span>
                  )}
                </div>

                <h3 className="cs-build-log-title">{entry.milestone}</h3>
                <p className="cs-build-log-details">{entry.details}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
