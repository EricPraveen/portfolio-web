import React from 'react';
import { OperatingPrinciple } from '@/content/types';

export interface OperatingPrinciplesProps {
  principles: OperatingPrinciple[];
}

export function OperatingPrinciples({ principles }: OperatingPrinciplesProps) {
  return (
    <section id="principles" className="profile-section" aria-labelledby="principles-heading">
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">04 / OPERATING DISCIPLINE</span>
          <h2 id="principles-heading" className="section-title font-heading-2xl">
            Engineering Operating Principles
          </h2>
        </div>
        <p className="section-lead text-body">
          Core mental models and execution standards guiding how I design systems, evaluate trade-offs, write tests, and collaborate with engineering teams.
        </p>
      </div>

      <div className="principles-grid">
        {principles.map((principle) => (
          <article key={principle.number} className="principle-card">
            <div className="principle-card-header">
              <span className="principle-number font-mono text-mono-label">
                {principle.number}
              </span>
              <h3 className="principle-title font-sans">
                {principle.title}
              </h3>
            </div>

            <p className="principle-summary font-sans text-sm">
              {principle.summary}
            </p>

            <div className="principle-detail-box">
              <p className="principle-detail-text text-xs">
                {principle.detail}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
