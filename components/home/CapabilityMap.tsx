import React from 'react';
import Link from 'next/link';
import { CapabilityCategory } from '@/content/types';

export interface CapabilityMapProps {
  categories: CapabilityCategory[];
}

export function CapabilityMap({ categories }: CapabilityMapProps) {
  return (
    <section className="capability-map-section" aria-labelledby="capability-map-heading">
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">03 / CAPABILITY ARCHITECTURE</span>
          <h2 id="capability-map-heading" className="section-title font-heading-2xl">
            Verified Engineering Capabilities
          </h2>
        </div>
        <p className="section-lead text-body">
          Concrete technical capabilities backed by source repositories, verified builds, and architectural case studies — zero arbitrary percentage bars or self-assigned ratings.
        </p>
      </div>

      <div className="capability-grid">
        {categories.map((category, catIndex) => (
          <div key={category.id} className="capability-card">
            <div className="capability-card-header">
              <span className="capability-card-index font-mono text-mono-label">
                0{catIndex + 1}
              </span>
              <h3 className="capability-card-title font-sans">
                {category.title}
              </h3>
            </div>

            <p className="capability-card-desc text-sm">
              {category.description}
            </p>

            <ul className="capability-item-list" role="list">
              {category.items.map((item) => (
                <li key={item.name} className="capability-item">
                  <div className="capability-item-head">
                    <span className="capability-item-name font-sans font-weight-bold">
                      {item.name}
                    </span>
                    <span className="capability-item-badge text-mono-label font-mono">
                      {item.level}
                    </span>
                  </div>

                  {item.context && (
                    <p className="capability-item-context text-xs">
                      {item.context}
                    </p>
                  )}

                  {item.appliedInProjectSlugs && item.appliedInProjectSlugs.length > 0 && (
                    <div className="capability-applied-strip">
                      <span className="capability-applied-label text-mono-label font-mono">
                        Applied in:
                      </span>
                      <div className="capability-applied-links">
                        {item.appliedInProjectSlugs.map((slug) => (
                          <Link
                            key={slug}
                            href={`/work/${slug}`}
                            className="capability-project-link font-mono"
                          >
                            {slug} &rarr;
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
