'use client';

import React, { useState, useMemo } from 'react';
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

  return (
    <div className="works-showcase-container">
      {/* 1. Track Filter Tabs */}
      <FadeUp>
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
                onClick={() => setActiveTab(tab.key)}
              >
                <span className="works-track-tab-icon" aria-hidden="true">
                  {tab.icon}
                </span>
                <span>{tab.label}</span>
                <span className="works-track-tab-count font-mono">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </FadeUp>

      {/* 2. Responsive 2-Column Showcase Grid */}
      <div className="project-showcase-grid" role="region" aria-live="polite">
        {filteredProjects.map((project, idx) => (
          <ProjectPlate
            key={project.slug}
            project={project}
            index={idx}
          />
        ))}
      </div>
    </div>
  );
}

