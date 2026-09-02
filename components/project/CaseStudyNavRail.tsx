'use client';

import React, { useEffect, useState, useCallback } from 'react';

export interface SectionItem {
  id: string;
  label: string;
  index: string;
}

export interface CaseStudyNavRailProps {
  sections: SectionItem[];
}

export function CaseStudyNavRail({ sections }: CaseStudyNavRailProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [progressPercent, setProgressPercent] = useState<number>(0);

  const handleScroll = useCallback(() => {
    // 1. Calculate overall case study reading progress
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? Math.min(100, Math.max(0, Math.round((scrollTop / docHeight) * 100))) : 0;
    setProgressPercent(scrollPercent);

    // 2. Identify current active section
    const scrollPosition = scrollTop + 200;
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const top = el.offsetTop;
        if (scrollPosition >= top) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    }
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      el.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      // Update URL hash cleanly
      window.history.pushState(null, '', `#${id}`);
      el.focus({ preventScroll: true });
      setActiveSection(id);
    }
  };

  const activeSectionIndex = sections.findIndex((s) => s.id === activeSection);
  const activeSectionNumber = activeSectionIndex >= 0 ? activeSectionIndex + 1 : 1;

  return (
    <aside className="cs-nav-rail" aria-label="Case study reading progress and ledger index">
      <div className="cs-nav-rail-sticky">
        {/* Rail Header with Reading Progress Telemetry */}
        <div className="cs-nav-rail-header">
          <div className="cs-nav-rail-meta">
            <span className="cs-nav-rail-title text-mono-label font-mono">LEDGER INDEX</span>
            <span className="cs-nav-rail-progress-pct text-mono-label font-mono">
              {progressPercent}% READ
            </span>
          </div>

          {/* Reading Progress Visual Rail Bar */}
          <div
            className="cs-nav-rail-progressbar"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Article reading progress"
          >
            <div
              className="cs-nav-rail-progressbar-fill"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="cs-nav-rail-submeta">
            <span className="cs-nav-rail-count text-mono-label font-mono">
              SECTION 0{activeSectionNumber} OF 0{sections.length}
            </span>
          </div>
        </div>

        {/* Section List */}
        <nav className="cs-nav-rail-list" aria-label="Section navigation links">
          {sections.map((sec, idx) => {
            const isActive = activeSection === sec.id;
            const isPassed = activeSectionIndex > idx;

            return (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                onClick={(e) => scrollToSection(e, sec.id)}
                className={`cs-nav-rail-link ${
                  isActive ? 'cs-nav-rail-link-active' : ''
                } ${isPassed ? 'cs-nav-rail-link-passed' : ''}`}
                aria-current={isActive ? 'location' : undefined}
              >
                <div className="cs-nav-rail-link-left">
                  <span className="cs-nav-rail-dot" aria-hidden="true" />
                  <span className="cs-nav-rail-index text-mono-label font-mono">{sec.index}</span>
                  <span className="cs-nav-rail-text font-sans">{sec.label}</span>
                </div>
                {isActive && (
                  <span className="cs-nav-rail-status-tag text-mono-label font-mono">
                    VIEWING
                  </span>
                )}
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
