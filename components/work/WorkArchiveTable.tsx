import React from 'react';
import Link from 'next/link';
import { Project } from '@/content/types';

export interface WorkArchiveTableProps {
  projects: Project[];
}

export function WorkArchiveTable({ projects }: WorkArchiveTableProps) {
  return (
    <div className="work-archive-table-wrap">
      <table className="work-archive-table">
        <caption className="sr-only">
          Tabular Ledger Archive of Verified Engineering Work and Case Studies
        </caption>
        <thead>
          <tr>
            <th scope="col" className="font-mono text-mono-label">ID / Year</th>
            <th scope="col" className="font-mono text-mono-label">Project Title & Focus</th>
            <th scope="col" className="font-mono text-mono-label">Engineering Domain</th>
            <th scope="col" className="font-mono text-mono-label">Role & Scope</th>
            <th scope="col" className="font-mono text-mono-label">Primary Stack</th>
            <th scope="col" className="font-mono text-mono-label">Status</th>
            <th scope="col" className="font-mono text-mono-label" style={{ textAlign: 'right' }}>Case Study</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, idx) => (
            <tr key={project.slug} className="work-table-row">
              {/* ID & Period */}
              <td className="work-table-cell-id font-mono text-xs">
                <span className="work-table-id-tag">0{idx + 1}</span>
                <span className="work-table-period-tag">{project.period}</span>
              </td>

              {/* Title & Headline */}
              <td className="work-table-cell-title">
                <Link
                  href={`/work/${project.slug}`}
                  className="work-table-title-link font-sans font-weight-bold"
                  aria-label={`${project.title} - ${project.headline}`}
                >
                  {project.title}
                </Link>
                <p className="work-table-headline text-xs font-sans">
                  {project.headline}
                </p>
              </td>

              {/* Domain */}
              <td className="work-table-cell-domain font-mono text-xs">
                {project.category}
              </td>

              {/* Role */}
              <td className="work-table-cell-role text-xs font-sans">
                <strong>{project.role}</strong>
                {project.teamSize && (
                  <span className="work-table-team-size font-mono text-xs">
                    {' '}(Team of {project.teamSize})
                  </span>
                )}
              </td>

              {/* Stack */}
              <td className="work-table-cell-stack">
                <div className="work-table-tech-pills">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="work-table-tech-tag font-mono text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="font-mono text-xs" style={{ color: 'var(--color-steel)' }}>
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </td>

              {/* Status */}
              <td className="work-table-cell-status font-mono text-xs">
                <span className="work-table-status-pill">
                  {project.status.toUpperCase()}
                </span>
              </td>

              {/* Action */}
              <td className="work-table-cell-action font-mono text-xs" style={{ textAlign: 'right' }}>
                <Link
                  href={`/work/${project.slug}`}
                  className="work-table-action-link"
                  aria-label={`Open case study for ${project.title}`}
                >
                  Open Case Study &rarr;
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
