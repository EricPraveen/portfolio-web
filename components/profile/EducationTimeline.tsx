import React from 'react';
import Link from 'next/link';
import { EducationItem } from '@/content/types';

export interface EducationTimelineProps {
  education: EducationItem[];
}

export function EducationTimeline({ education }: EducationTimelineProps) {
  return (
    <section id="education" className="profile-section" aria-labelledby="education-heading">
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">02 / ACADEMIC FOUNDATION</span>
          <h2 id="education-heading" className="section-title font-heading-2xl">
            Formal Education & Systems Coursework
          </h2>
        </div>
        <p className="section-lead text-body">
          Rigorous computer science and IT curriculum with deep emphasis on data structures, distributed networking, operating systems, and transactional databases.
        </p>
      </div>

      <div className="timeline-rail-container">
        {education.map((edu, index) => (
          <article key={edu.id} className="timeline-node" aria-labelledby={`edu-title-${edu.id}`}>
            {/* Timeline Marker */}
            <div className="timeline-rail-marker" aria-hidden="true">
              <span className="timeline-dot" style={{ backgroundColor: 'var(--color-signal-cobalt)' }} />
              {index < education.length - 1 && <span className="timeline-line" />}
            </div>

            {/* Timeline Card */}
            <div className="timeline-card">
              <div className="timeline-card-header">
                <div className="timeline-card-title-group">
                  <h3 id={`edu-title-${edu.id}`} className="timeline-role font-sans">
                    {edu.degree} in {edu.major}
                  </h3>
                  <div className="timeline-org-row text-sm font-sans">
                    <strong className="timeline-org-name">{edu.institution.replace(/\[|\]/g, '')}</strong>
                    <span className="timeline-org-dot" aria-hidden="true">&bull;</span>
                    <span className="timeline-status-badge font-mono text-mono-label">{edu.status}</span>
                  </div>
                </div>

                <div className="timeline-date-badge font-mono text-mono-label">
                  {edu.dates.start} &ndash; {edu.dates.end}
                </div>
              </div>

              {/* Academic Honors */}
              {edu.honors && edu.honors.length > 0 && (
                <div className="timeline-honors-strip">
                  <span className="font-mono text-mono-label" style={{ color: 'var(--color-signal-cobalt)' }}>
                    Academic Honors:
                  </span>
                  <div className="timeline-honors-list">
                    {edu.honors.map((h, i) => (
                      <span key={i} className="timeline-honor-tag font-mono text-xs">
                        {h.replace(/\[|\]/g, '')}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Capstone Project Showcase Card */}
              {edu.capstone && (
                <div className="timeline-capstone-card">
                  <div className="timeline-capstone-header">
                    <span className="timeline-capstone-tag font-mono text-mono-label">
                      CAPSTONE ENGINEERING PROJECT
                    </span>
                    {edu.capstone.slug && (
                      <Link
                        href={`/work/${edu.capstone.slug}`}
                        className="timeline-capstone-link font-mono text-xs"
                      >
                        Read Case Study &rarr;
                      </Link>
                    )}
                  </div>

                  <h4 className="timeline-capstone-title font-sans">
                    {edu.capstone.title}
                  </h4>

                  <p className="timeline-capstone-desc text-xs font-sans">
                    {edu.capstone.description.replace(/\[|\]/g, '')}
                  </p>
                </div>
              )}

              {/* Core Coursework Grid */}
              <div className="timeline-coursework-block">
                <span className="timeline-subhead font-mono text-mono-label">
                  Core Relevant Coursework & Systems Topics:
                </span>
                <div className="timeline-coursework-grid">
                  {edu.relevantCoursework.map((course) => (
                    <div key={course} className="timeline-course-badge font-mono text-xs">
                      {course}
                    </div>
                  ))}
                </div>
              </div>

              {/* Activities & Peer Leadership */}
              {edu.activities && edu.activities.length > 0 && (
                <div className="timeline-activities-strip">
                  <span className="font-mono text-mono-label" style={{ color: 'var(--color-steel)' }}>
                    Academic Activities:
                  </span>
                  <p className="timeline-activities-text text-xs font-sans">
                    {edu.activities.map((a) => a.replace(/\[|\]/g, '')).join(' • ')}
                  </p>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
