import React from 'react';
import { ProjectQuality } from '@/content/types';

export interface ProjectQualityGridProps {
  quality: ProjectQuality;
}

export function ProjectQualityGrid({ quality }: ProjectQualityGridProps) {
  const items = [
    {
      key: 'testing',
      title: 'Testing Strategy & Rigor',
      badge: 'VERIFICATION',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      content: quality.testing,
    },
    {
      key: 'security',
      title: 'Security Posture & Controls',
      badge: 'DEFENSE-IN-DEPTH',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      content: quality.security,
    },
    {
      key: 'accessibility',
      title: 'Accessibility (WCAG 2.2 AA)',
      badge: 'INCLUSION & A11Y',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="m4.93 4.93 4.24 4.24" />
          <path d="m14.83 9.17 4.24-4.24" />
          <path d="m14.83 14.83 4.24 4.24" />
          <path d="m9.17 14.83-4.24 4.24" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      content: quality.accessibility,
    },
    {
      key: 'performance',
      title: 'Performance & Latency Guarantees',
      badge: 'EFFICIENCY',
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      content: quality.performance,
    },
  ].filter((item) => Boolean(item.content));

  if (items.length === 0) return null;

  return (
    <div className="cs-quality-grid" role="region" aria-label="Quality, Security, and Performance Guarantees">
      <div className="cs-quality-cards">
        {items.map((item) => (
          <article key={item.key} className="cs-quality-card" aria-labelledby={`quality-title-${item.key}`}>
            <div className="cs-quality-card-header">
              <div className="cs-quality-card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <div className="cs-quality-card-titles">
                <span className="cs-quality-badge text-mono-label">{item.badge}</span>
                <h3 id={`quality-title-${item.key}`} className="cs-quality-title">
                  {item.title}
                </h3>
              </div>
            </div>
            <p className="cs-quality-text">{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
