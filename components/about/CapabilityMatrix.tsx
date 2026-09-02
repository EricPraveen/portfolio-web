import React from 'react';
import Link from 'next/link';
import { CapabilityCategory } from '@/content/types';

export interface CapabilityMatrixProps {
  categories: CapabilityCategory[];
}

export function CapabilityMatrix({ categories }: CapabilityMatrixProps) {
  return (
    <section id="capabilities" className="profile-section" aria-labelledby="capabilities-heading">
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">Skills</span>
          <h2 id="capabilities-heading" className="section-title font-heading-2xl">
            Technical Skills
          </h2>
        </div>
        <p className="section-lead text-body">
          Technologies, frameworks, and tools I use across full-stack development.
        </p>
      </div>

      <div className="capability-matrix-grid">
        {categories.map((cat, catIdx) => (
          <div key={cat.id} className="capability-matrix-card">
            <div className="capability-matrix-card-header">
              <div className="capability-matrix-title-group">
                <span className="capability-matrix-index font-mono text-mono-label">
                  0{catIdx + 1}
                </span>
                <h3 className="capability-matrix-card-title font-sans">
                  {cat.title}
                </h3>
              </div>
              <p className="capability-matrix-card-desc text-xs">
                {cat.description}
              </p>
            </div>

            <div className="capability-matrix-items-table">
              {cat.items.map((item) => (
                <div key={item.name} className="capability-matrix-row">
                  <div className="capability-matrix-row-head">
                    <span className="capability-matrix-name font-sans font-weight-bold">
                      {item.name}
                    </span>
                    <span className="capability-matrix-level font-mono text-mono-label">
                      {item.level}
                    </span>
                  </div>

                  {item.context && (
                    <p className="capability-matrix-context text-xs">
                      {item.context}
                    </p>
                  )}

                  {item.appliedInProjectSlugs && item.appliedInProjectSlugs.length > 0 && (
                    <div className="capability-matrix-links font-mono text-xs">
                      <span style={{ color: 'var(--color-steel)' }}>Verified in:</span>{' '}
                      {item.appliedInProjectSlugs.map((slug, sIdx) => (
                        <span key={slug}>
                          {sIdx > 0 && ' • '}
                          <Link href={`/projects/${slug}`} className="capability-matrix-project-link">
                            {slug} &rarr;
                          </Link>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
