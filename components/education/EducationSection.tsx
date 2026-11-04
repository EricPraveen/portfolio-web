'use client';

import React from 'react';
import { Education, Experience, CredentialItem } from '@/content/types';
import { ScrollReveal, FadeUp } from '@/components/animation';
import { CertificatesGallery } from './CertificatesGallery';

export interface EducationSectionProps {
  education: Education[];
  experience: Experience[];
  credentials: CredentialItem[];
  indexLabel?: string;
}

export function EducationSection({
  education,
  experience,
  credentials,
  indexLabel = '03 / EDUCATION & CREDENTIALS',
}: EducationSectionProps) {
  return (
    <div className="education-overview">
      {/* ── 1. SECTION INTRO HEADER ──────────────────────────────────── */}
      <FadeUp className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">
            {indexLabel}
          </span>
          <h2 id="education-heading" className="section-title font-heading-2xl">
            Academic &amp; Professional Foundation
          </h2>
        </div>
        <p className="section-lead text-body">
          Undergraduate studies at University of Moratuwa, elected student leadership, practical campus coordination, and verified digital credentials.
        </p>
      </FadeUp>

      {/* ── 2. TWO-COLUMN TRACK (EXPERIENCE & ACADEMIC FOUNDATIONS) ──── */}
      <div className="edu-track-group">
        <div className="about-track-grid">
          {/* Practical Experience & Leadership Column */}
          <ScrollReveal variant="slide-left" delay={80} className="about-track-col">
            <div className="about-track-subhead">
              <span className="about-track-subhead-title font-mono">
                <span className="about-track-subhead-dot" aria-hidden="true" />
                PRACTICAL EXPERIENCE &amp; LEADERSHIP
              </span>
              <span className="about-track-subhead-count font-mono">{experience.length} ROLES</span>
            </div>

            <div className="about-track-list">
              {experience.map((exp) => (
                <div key={exp.id} className="about-track-card about-track-card--experience arcade-box">
                  <div className="about-track-header">
                    <h3 className="about-track-role font-sans">
                      {exp.role.replace(/\[|\]/g, '')}
                    </h3>
                    <span className={`about-track-badge font-mono ${exp.dates.isCurrent ? 'is-current' : ''}`}>
                      {exp.dates.isCurrent
                        ? `${exp.dates.start} \u2013 ${exp.dates.end || 'PRESENT'}`
                        : exp.dates.end && exp.dates.end !== exp.dates.start
                        ? `${exp.dates.start} \u2013 ${exp.dates.end}`
                        : exp.dates.start}
                    </span>
                  </div>

                  <div className="about-track-org font-mono">
                    <span className="about-track-org-name">{exp.organization.replace(/\[|\]/g, '')}</span>
                    <span className="about-track-org-sep">/</span>
                    <span className="about-track-org-meta">{exp.location.replace(/\[|\]/g, '')}</span>
                  </div>

                  <p className="about-track-desc font-sans">
                    {exp.context.replace(/\[|\]/g, '')}
                  </p>

                  {exp.verifiedOutcomes && exp.verifiedOutcomes.length > 0 && (
                    <div className="about-track-outcome">
                      <span className="about-track-outcome-label font-mono">
                        Key Verified Outcome
                      </span>
                      <p className="about-track-outcome-text font-sans">
                        &bull; {exp.verifiedOutcomes[0].replace(/\[|\]/g, '')}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Academic Foundation Column */}
          <ScrollReveal variant="slide-right" delay={140} className="about-track-col">
            <div className="about-track-subhead about-track-subhead--academic">
              <span className="about-track-subhead-title font-mono">
                <span className="about-track-subhead-dot" aria-hidden="true" />
                ACADEMIC FOUNDATION
              </span>
              <span className="about-track-subhead-count font-mono">{education.length} INSTITUTIONS</span>
            </div>

            <div className="about-track-list">
              {education.map((edu) => (
                <div key={edu.id} className="about-track-card about-track-card--academic arcade-box">
                  <div className="about-track-header">
                    <h3 className="about-track-role font-sans">
                      {edu.degree}
                    </h3>
                    <span className={`about-track-badge font-mono ${edu.dates.isCurrent ? 'is-current' : ''}`}>
                      {edu.dates.start} &ndash; {edu.dates.end}
                    </span>
                  </div>

                  <div className="about-track-org font-mono">
                    <span className="about-track-org-name">{edu.institution.replace(/\[|\]/g, '')}</span>
                    <span className="about-track-org-sep">/</span>
                    <span className="about-track-org-meta">
                      {edu.major ? `${edu.major} • ` : ''}{edu.status}
                    </span>
                  </div>

                  <div className="about-track-coursework">
                    <span className="about-track-coursework-label font-mono">
                      Core Relevant Coursework
                    </span>
                    <div className="about-track-tags">
                      {edu.relevantCoursework.slice(0, 6).map((course) => (
                        <span key={course} className="about-track-tag font-mono">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>

                  {edu.capstone && (
                    <div className="about-track-capstone">
                      <span className="about-track-capstone-label font-mono">Capstone Focus:</span>
                      <span className="about-track-capstone-title font-mono">
                        {edu.capstone.title}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── 3. CERTIFICATES GALLERY SUBSECTION ───────────────────────── */}
      <CertificatesGallery certificates={credentials} />
    </div>
  );
}
