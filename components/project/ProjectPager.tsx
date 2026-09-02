import React from 'react';
import Link from 'next/link';
import { Project } from '@/content/types';

export interface ProjectPagerProps {
  previous?: Project;
  next?: Project;
}

export function ProjectPager({ previous, next }: ProjectPagerProps) {
  return (
    <nav className="cs-pager" aria-label="Adjacent Case Studies Navigation">
      <div className="cs-pager-grid">
        {/* Previous Project */}
        {previous ? (
          <Link
            href={`/work/${previous.slug}`}
            className="cs-pager-card cs-pager-card-prev"
            aria-label={`Previous Case Study: ${previous.title}`}
          >
            <div className="cs-pager-direction">
              <span className="cs-pager-arrow" aria-hidden="true">&larr;</span>
              <span className="cs-pager-dir-label text-mono-label">PREVIOUS CASE STUDY</span>
            </div>
            <strong className="cs-pager-title">{previous.title}</strong>
            <div className="cs-pager-meta text-mono-label">
              <span>{previous.category}</span>
              <span className="cs-pager-dot" aria-hidden="true">&bull;</span>
              <span>{previous.year || previous.period}</span>
            </div>
          </Link>
        ) : (
          <Link href="/work" className="cs-pager-card cs-pager-card-return" aria-label="Return to Work Catalog">
            <div className="cs-pager-direction">
              <span className="cs-pager-arrow" aria-hidden="true">&larr;</span>
              <span className="cs-pager-dir-label text-mono-label">WORK CATALOG</span>
            </div>
            <strong className="cs-pager-title">Return to Full Project Archive</strong>
            <span className="cs-pager-meta text-mono-label">Browse all engineering systems</span>
          </Link>
        )}

        {/* Next Project */}
        {next ? (
          <Link
            href={`/work/${next.slug}`}
            className="cs-pager-card cs-pager-card-next"
            aria-label={`Next Case Study: ${next.title}`}
          >
            <div className="cs-pager-direction">
              <span className="cs-pager-dir-label text-mono-label">NEXT CASE STUDY</span>
              <span className="cs-pager-arrow" aria-hidden="true">&rarr;</span>
            </div>
            <strong className="cs-pager-title">{next.title}</strong>
            <div className="cs-pager-meta text-mono-label">
              <span>{next.category}</span>
              <span className="cs-pager-dot" aria-hidden="true">&bull;</span>
              <span>{next.year || next.period}</span>
            </div>
          </Link>
        ) : (
          <Link href="/work" className="cs-pager-card cs-pager-card-return cs-pager-card-next" aria-label="Return to Work Catalog">
            <div className="cs-pager-direction">
              <span className="cs-pager-dir-label text-mono-label">WORK CATALOG</span>
              <span className="cs-pager-arrow" aria-hidden="true">&rarr;</span>
            </div>
            <strong className="cs-pager-title">Return to Full Project Archive</strong>
            <span className="cs-pager-meta text-mono-label">End of catalog reached</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
