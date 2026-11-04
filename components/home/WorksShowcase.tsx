'use client';

import React, { useState, useMemo, useRef } from 'react';
import { Project, ProjectTrack } from '@/content/types';
import { ProjectPlate } from './ProjectPlate';
import { FadeUp } from '@/components/animation';

export interface WorksShowcaseProps {
  projects: Project[];
}

type FilterTabKey = 'all' | ProjectTrack;

interface TabConfig {
  key: FilterTabKey;
  label: string;
  icon: string;
}

const TABS: TabConfig[] = [
  { key: 'all', label: 'All Works', icon: '⚡' },
  { key: 'software', label: 'Software', icon: '💻' },
  { key: 'hardware', label: 'Hardware', icon: '⚙️' },
  { key: 'figma', label: 'Figma', icon: '🎨' },
];

export function WorksShowcase({ projects }: WorksShowcaseProps) {
  const [activeTab, setActiveTab] = useState<FilterTabKey>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const showcaseRef = useRef<HTMLDivElement | null>(null);

  const counts = useMemo(() => {
    return {
      all: projects.length,
      software: projects.filter((p) => p.track === 'software').length,
      hardware: projects.filter((p) => p.track === 'hardware').length,
      figma: projects.filter((p) => p.track === 'figma').length,
    };
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeTab === 'all') return projects;
    return projects.filter((p) => p.track === activeTab);
  }, [projects, activeTab]);

  // Initially show 6 works; expand for the rest
  const initialCount = 6;
  const canToggle = filteredProjects.length > initialCount;
  const visibleProjects = isExpanded ? filteredProjects : filteredProjects.slice(0, initialCount);
  const remainingCount = Math.max(0, filteredProjects.length - initialCount);

  const handleTabChange = (tabKey: FilterTabKey) => {
    setActiveTab(tabKey);
    setIsExpanded(false);
  };

  const handleToggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smoothly scroll back to the works showcase top when minimizing
      if (showcaseRef.current) {
        const topOffset = showcaseRef.current.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div ref={showcaseRef} className="works-showcase-container">
      {/* 1. Track Filter Tabs */}
      <FadeUp>
        <div className="works-track-header-row">
          <div
            className="works-track-tabs"
            role="tablist"
            aria-label="Filter project showcase by category"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              const count = counts[tab.key] ?? 0;

              return (
                <button
                  key={tab.key}
                  role="tab"
                  type="button"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  className={`works-track-tab ${isActive ? 'works-track-tab--active' : ''}`}
                  onClick={() => handleTabChange(tab.key)}
                >
                  <span className="works-track-tab-icon" aria-hidden="true">
                    {tab.icon}
                  </span>
                  <span>{tab.label}</span>
                  <span className="works-track-tab-count font-mono">
                    {count}
                  </span>
                  {isActive && (
                    <span className="works-track-tab-beacon" aria-hidden="true" />
                  )}
                </button>
              );
            })}
          </div>

          {canToggle && (
            <div className="works-status-badge font-mono text-xs">
              <span>
                {isExpanded
                  ? `Showing all ${filteredProjects.length}`
                  : `Showing 6 of ${filteredProjects.length}`}
              </span>
              {isExpanded && (
                <button
                  type="button"
                  onClick={handleToggleExpand}
                  className="works-header-quick-toggle font-mono"
                  aria-label="Minimize works back to 6"
                >
                  Minimize ▲
                </button>
              )}
            </div>
          )}
        </div>
      </FadeUp>

      {/* 2. Responsive 2-Column Showcase Grid */}
      <div id="project-showcase-grid" className="project-showcase-grid" role="region" aria-live="polite">
        {visibleProjects.map((project, idx) => (
          <ProjectPlate
            key={project.slug}
            project={project}
            index={idx}
          />
        ))}
      </div>

      {/* 3. Section Footer: View More / Minimize Button */}
      {canToggle && (
        <FadeUp className="works-showcase-footer">
          <button
            type="button"
            onClick={handleToggleExpand}
            className={`works-showcase-toggle-btn ${isExpanded ? 'is-expanded' : ''} font-mono`}
            aria-expanded={isExpanded}
            aria-controls="project-showcase-grid"
          >
            <span className="works-toggle-icon" aria-hidden="true">
              {isExpanded ? '▲' : '▼'}
            </span>
            <span>
              {isExpanded ? 'Minimize Works' : 'View More Works'}
            </span>
            <span className="works-toggle-badge font-mono">
              {isExpanded ? 'Show 6 Works' : `+${remainingCount}`}
            </span>
          </button>
        </FadeUp>
      )}
    </div>
  );
}

