import React from 'react';
import Link from 'next/link';

export function CollaborationEvidence() {
  const collaborationItems = [
    {
      id: 'batch-representative-leadership',
      tag: 'STUDENT LEADERSHIP',
      title: 'Batch Representative (3rd Year IT Cohort)',
      organization: 'Faculty of Information Technology, University of Moratuwa',
      timeframe: 'Sep 2026 – Present',
      summary:
        'Elected student representative acting as the central liaison between the undergraduate batch, department heads, and lecturers for academic coordination.',
      keyPoints: [
        'Coordinated academic milestones, semester schedules, and laboratory resource requirements with faculty leadership.',
        'Facilitated student feedback channels to resolve coursework deadlines and exam preparation timelines.',
        'Organized batch-wide peer review sessions for collaborative software engineering and database modules.',
      ],
      impactBadge: 'Elected Cohort Representative',
      relatedSlug: 'travel-hub-platform',
    },
    {
      id: 'capstone-collaboration',
      tag: 'TEAM ENGINEERING',
      title: 'Travel Hub Capstone Development & UI/UX Design',
      organization: 'University of Moratuwa Software Engineering Module',
      timeframe: '2024 – 2025',
      summary:
        'Coordinated frontend-backend integration and Figma UI/UX prototyping for a 4-person team building a Sri Lanka tourism booking platform.',
      keyPoints: [
        'Designed high-fidelity interactive Figma wireframes and UML sequence diagrams establishing clean module boundaries.',
        'Built the Tourist Dashboard module in React.js, integrating Spring Boot REST API endpoints and PostgreSQL persistence.',
        'Conducted team code reviews and synchronized Git branch merges ensuring zero merge conflicts during Netlify deployment.',
      ],
      impactBadge: 'Live Netlify Release',
      relatedSlug: 'travel-hub-platform',
    },
    {
      id: 'technical-writing-notes',
      tag: 'ENGINEERING DISCIPLINE',
      title: 'Technical Documentation & Postmortem Analysis',
      organization: 'Independent & Academic Engineering Projects',
      timeframe: '2024 – 2025',
      summary:
        'Maintaining structured technical field notes, debugging postmortems, and architectural decision records across full-stack projects.',
      keyPoints: [
        'Documented atomic query patterns in MongoDB to eliminate race conditions and overselling during simultaneous checkouts.',
        'Analyzed optimistic concurrency vs. pessimistic locking trade-offs in booking systems.',
        'Authored comprehensive README files and API guides across all public GitHub repositories.',
      ],
      impactBadge: 'Reproducible Bug Postmortems',
      relatedNoteSlug: 'preventing-ecommerce-inventory-overselling',
    },
  ];

  return (
    <section id="collaboration" className="profile-section" aria-labelledby="collaboration-heading">
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">Teamwork</span>
          <h2 id="collaboration-heading" className="section-title font-heading-2xl">
            Collaboration & Leadership
          </h2>
        </div>
        <p className="section-lead text-body">
          How I&apos;ve worked with others — in teams, events, and campus initiatives.
        </p>
      </div>

      <div className="collaboration-grid">
        {collaborationItems.map((item) => (
          <article key={item.id} className="collaboration-card">
            <div className="collaboration-card-header">
              <div className="collaboration-card-meta">
                <span className="collaboration-tag font-mono text-mono-label">
                  {item.tag}
                </span>
                <span className="collaboration-timeframe font-mono text-mono-label">
                  {item.timeframe}
                </span>
              </div>

              <h3 className="collaboration-title font-sans">
                {item.title}
              </h3>

              <p className="collaboration-org text-sm font-sans">
                <strong>{item.organization}</strong>
              </p>
            </div>

            <p className="collaboration-summary text-sm font-sans">
              {item.summary}
            </p>

            <div className="collaboration-points-box">
              <span className="collaboration-points-head font-mono text-mono-label">
                Key contributions:
              </span>
              <ul className="collaboration-points-list" role="list">
                {item.keyPoints.map((point, i) => (
                  <li key={i} className="collaboration-point-item text-xs font-sans">
                    &bull; {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="collaboration-card-footer">
              <span className="collaboration-impact-badge font-mono text-xs">
                {item.impactBadge}
              </span>

              {item.relatedSlug && (
                <Link
                  href={`/projects/${item.relatedSlug}`}
                  className="collaboration-project-link font-mono text-xs"
                >
                  View Team Project &rarr;
                </Link>
              )}

              {item.relatedNoteSlug && (
                <Link
                  href={`/notes/${item.relatedNoteSlug}`}
                  className="collaboration-project-link font-mono text-xs"
                >
                  Read Technical Note &rarr;
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
