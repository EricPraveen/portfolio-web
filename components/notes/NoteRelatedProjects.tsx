import React from 'react';
import Link from 'next/link';

export interface NoteRelatedProjectsProps {
  projectSlugs?: string[];
  skills?: string[];
}

export function NoteRelatedProjects({
  projectSlugs,
  skills,
}: NoteRelatedProjectsProps) {
  if ((!projectSlugs || projectSlugs.length === 0) && (!skills || skills.length === 0)) {
    return null;
  }

  return (
    <section className="note-cross-ref-card" aria-label="Related Systems & Applied Capabilities">
      <div className="note-cross-ref-header">
        <span className="font-mono text-mono-label" style={{ color: 'var(--color-signal-cobalt)' }}>
          SYSTEMS CROSS-REFERENCE &bull; APPLIED PROOF
        </span>
      </div>

      <div className="note-cross-ref-body">
        {projectSlugs && projectSlugs.length > 0 && (
          <div className="note-cross-ref-block">
            <span className="note-cross-ref-label font-mono text-xs">
              Demonstrated In Case Study:
            </span>
            <div className="note-cross-ref-links">
              {projectSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/work/${slug}`}
                  className="note-cross-ref-project-link font-sans"
                >
                  <span>{slug}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {skills && skills.length > 0 && (
          <div className="note-cross-ref-block">
            <span className="note-cross-ref-label font-mono text-xs">
              Corroborated Capabilities:
            </span>
            <div className="note-cross-ref-skills-strip">
              {skills.map((skill) => (
                <span key={skill} className="note-cross-ref-skill font-mono text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
