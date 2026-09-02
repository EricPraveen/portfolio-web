import React from 'react';
import Link from 'next/link';
import { ExperienceItem } from '@/content/types';

export interface ExperienceTimelineProps {
  experience: ExperienceItem[];
}

export function ExperienceTimeline({ experience }: ExperienceTimelineProps) {
  return (
    <section id="experience" className="profile-section" aria-labelledby="experience-heading">
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">Experience</span>
          <h2 id="experience-heading" className="section-title font-heading-2xl">
            Work &amp; Activities
          </h2>
        </div>
        <p className="section-lead text-body">
          Roles and responsibilities I&apos;ve taken on during my studies.
        </p>
      </div>

      <div className="timeline-rail-container">
        {experience.map((exp, index) => (
          <article key={exp.id} className="timeline-node" aria-labelledby={`exp-title-${exp.id}`}>
            {/* Timeline Rail Marker */}
            <div className="timeline-rail-marker" aria-hidden="true">
              <span className="timeline-dot" />
              {index < experience.length - 1 && <span className="timeline-line" />}
            </div>

            {/* Timeline Content Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-card-title-group">
                  <h3 id={`exp-title-${exp.id}`} className="timeline-role font-sans">
                    {exp.role.replace(/\[|\]/g, '')}
                  </h3>
                  <div className="timeline-org-row text-sm font-sans">
                    <strong className="timeline-org-name">{exp.organization.replace(/\[|\]/g, '')}</strong>
                    <span className="timeline-org-dot" aria-hidden="true">&bull;</span>
                    <span className="timeline-location">{exp.location.replace(/\[|\]/g, '')}</span>
                    <span className="timeline-badge font-mono text-mono-label">{exp.type}</span>
                  </div>
                </div>

                <div className="timeline-date-badge font-mono text-mono-label">
                  {exp.dates.end ? `${exp.dates.start} \u2013 ${exp.dates.end}` : exp.dates.start}
                </div>
              </div>

              {/* Context Summary */}
              <p className="timeline-context text-sm font-sans">
                {exp.context.replace(/\[|\]/g, '')}
              </p>

              {/* Responsibilities List */}
              <div className="timeline-responsibilities">
                <span className="timeline-subhead font-mono text-mono-label">
                  What I did:
                </span>
                <ul className="timeline-bullet-list" role="list">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="timeline-bullet-item text-sm">
                      {resp.replace(/\[|\]/g, '')}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Outcomes Highlight Box */}
              {exp.verifiedOutcomes && exp.verifiedOutcomes.length > 0 && (
                <div className="timeline-outcomes-box">
                  <span className="timeline-outcomes-tag font-mono text-mono-label">
                    Outcomes:
                  </span>
                  <ul className="timeline-outcomes-list" role="list">
                    {exp.verifiedOutcomes.map((outcome, i) => (
                      <li key={i} className="timeline-outcome-item text-xs font-sans">
                        &bull; {outcome.replace(/\[|\]/g, '')}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Applied Technologies & Project Cross-Links */}
              <div className="timeline-footer-strip">
                <div className="timeline-tech-group">
                  <span className="font-mono text-mono-label" style={{ color: 'var(--color-steel)' }}>
                    Stack:
                  </span>
                  <div className="timeline-tech-pills">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="timeline-tech-pill font-mono text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.linkedProjectSlugs && exp.linkedProjectSlugs.length > 0 && (
                  <div className="timeline-project-links">
                    <span className="font-mono text-mono-label" style={{ color: 'var(--color-steel)' }}>
                      Related Work:
                    </span>
                    {exp.linkedProjectSlugs.map((slug) => (
                      <Link
                        key={slug}
                        href={`/projects/${slug}`}
                        className="timeline-project-link font-mono text-xs"
                      >
                        {slug} &rarr;
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Documentation / Verification Note */}
              {exp.evidence && exp.evidence.length > 0 && (
                <div className="timeline-evidence-note font-mono text-xs">
                  <span style={{ color: 'var(--color-steel)' }}>Reference:</span>{' '}
                  <span style={{ color: 'var(--color-ink-muted)' }}>
                    {exp.evidence[0].note?.replace(/\[|\]/g, '') || 'Verification record available upon request'}
                  </span>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
