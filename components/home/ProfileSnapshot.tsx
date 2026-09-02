import React from 'react';
import Link from 'next/link';
import { Education, Experience } from '@/content/types';

export interface ProfileSnapshotProps {
  education: Education[];
  experience: Experience[];
}

export function ProfileSnapshot({ education, experience }: ProfileSnapshotProps) {
  return (
    <section className="profile-snapshot-section" aria-labelledby="profile-snapshot-heading">
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">05 / PROFILE SNAPSHOT</span>
          <h2 id="profile-snapshot-heading" className="section-title font-heading-2xl">
            Education & Industry Experience
          </h2>
        </div>

        <Link href="/about" className="section-link-more font-mono">
          Full Profile & Operating Principles &rarr;
        </Link>
      </div>

      <div className="profile-snapshot-grid">
        {/* Experience Column */}
        <div className="profile-snapshot-col">
          <div className="profile-snapshot-subhead">
            <span className="text-mono-label font-mono">PRACTICAL EXPERIENCE & INTERNSHIPS</span>
          </div>

          <div className="profile-timeline-list">
            {experience.map((exp) => (
              <div key={exp.id} className="profile-timeline-card">
                <div className="profile-timeline-header">
                  <span className="profile-timeline-role font-sans font-weight-bold">
                    {exp.role.replace(/\[|\]/g, '')}
                  </span>
                  <span className="profile-timeline-dates font-mono text-mono-label">
                    {exp.dates.start} &ndash; {exp.dates.end}
                  </span>
                </div>

                <div className="profile-timeline-org text-sm font-sans">
                  <strong>{exp.organization.replace(/\[|\]/g, '')}</strong> &bull; {exp.location.replace(/\[|\]/g, '')}
                </div>

                <p className="profile-timeline-context text-sm">
                  {exp.context.replace(/\[|\]/g, '')}
                </p>

                {exp.verifiedOutcomes && exp.verifiedOutcomes.length > 0 && (
                  <div className="profile-timeline-outcomes">
                    <span className="text-mono-label font-mono" style={{ color: 'var(--color-ink-faint)', fontSize: '0.6875rem' }}>
                      Key Verified Outcome:
                    </span>
                    <p className="text-xs font-sans" style={{ color: 'var(--color-mineral-ink)', fontWeight: 500 }}>
                      &bull; {exp.verifiedOutcomes[0].replace(/\[|\]/g, '')}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="profile-snapshot-col">
          <div className="profile-snapshot-subhead">
            <span className="text-mono-label font-mono">ACADEMIC FOUNDATION</span>
          </div>

          <div className="profile-timeline-list">
            {education.map((edu) => (
              <div key={edu.id} className="profile-timeline-card">
                <div className="profile-timeline-header">
                  <span className="profile-timeline-role font-sans font-weight-bold">
                    {edu.degree} in {edu.major}
                  </span>
                  <span className="profile-timeline-dates font-mono text-mono-label">
                    {edu.dates.start} &ndash; {edu.dates.end}
                  </span>
                </div>

                <div className="profile-timeline-org text-sm font-sans">
                  <strong>{edu.institution.replace(/\[|\]/g, '')}</strong> &bull; {edu.status}
                </div>

                <div className="profile-coursework-box">
                  <span className="text-mono-label font-mono" style={{ color: 'var(--color-steel)', fontSize: '0.6875rem' }}>
                    Core Relevant Coursework:
                  </span>
                  <div className="profile-coursework-tags">
                    {edu.relevantCoursework.slice(0, 6).map((course) => (
                      <span key={course} className="profile-coursework-pill font-mono text-xs">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {edu.capstone && (
                  <div className="profile-capstone-note text-xs font-sans">
                    <strong>Capstone Focus:</strong>{' '}
                    <Link href={`/projects/${edu.capstone.slug}`} className="profile-capstone-link">
                      {edu.capstone.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
