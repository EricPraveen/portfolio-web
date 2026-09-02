'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { CapabilityCategory } from '@/content/types';

export interface SkillsGridProps {
  categories: CapabilityCategory[];
}

// Map category IDs to display icons (emoji-based, clean)
const CATEGORY_ICONS: Record<string, string> = {
  'programming-languages': '💻',
  'backend-architecture': '⚙️',
  'frontend-engineering': '🎨',
  'database-systems': '🗄️',
  'tools-design-systems': '🛠️',
};

// Map proficiency levels to visual weight
const LEVEL_CONFIG: Record<string, { label: string; color: string }> = {
  'Advanced Production Exposure': { label: 'Advanced', color: 'var(--color-signal-cobalt)' },
  'Proficient': { label: 'Proficient', color: 'var(--color-mineral-ink)' },
  'Working Knowledge': { label: 'Familiar', color: 'var(--color-steel)' },
};

export function SkillsGrid({ categories }: SkillsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayCategories =
    activeCategory === 'all'
      ? categories
      : categories.filter((c) => c.id === activeCategory);

  const totalSkills = categories.reduce((acc, c) => acc + c.items.length, 0);

  return (
    <div className="skills-page-inner">
      {/* ── PAGE HEADER ─────────────────────────────────── */}
      <header className="skills-page-header">
        <div className="skills-page-header-meta">
          <span className="skills-eyebrow text-mono-label font-mono">02 / SKILLS</span>
          <h1 className="skills-page-title font-heading-2xl">
            Skills
          </h1>
          <p className="skills-page-lead text-body">
            Languages, frameworks, and tools I&apos;ve worked with — applied across real projects.
          </p>
        </div>

        {/* Stats row */}
        <div className="skills-stats-row">
          <div className="skills-stat-chip">
            <span className="skills-stat-value font-mono">{totalSkills}</span>
            <span className="skills-stat-label text-mono-label">Total Skills</span>
          </div>
          <div className="skills-stat-chip">
            <span className="skills-stat-value font-mono">{categories.length}</span>
            <span className="skills-stat-label text-mono-label">Domains</span>
          </div>
          <div className="skills-stat-chip">
            <span className="skills-stat-value font-mono">
              {categories.reduce((acc, c) => acc + c.items.filter((i) => i.level === 'Advanced Production Exposure').length, 0)}
            </span>
            <span className="skills-stat-label text-mono-label">Advanced</span>
          </div>
        </div>
      </header>

      {/* ── FILTER TABS ──────────────────────────────────── */}
      <nav className="skills-filter-bar" aria-label="Filter skills by category">
        <button
          className={`skills-filter-btn${activeCategory === 'all' ? ' is-active' : ''}`}
          onClick={() => setActiveCategory('all')}
          type="button"
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`skills-filter-btn${activeCategory === cat.id ? ' is-active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
            type="button"
          >
            {CATEGORY_ICONS[cat.id] || '📦'} {cat.title.split('&')[0].trim()}
          </button>
        ))}
      </nav>

      {/* ── CATEGORY SECTIONS ────────────────────────────── */}
      <div className="skills-categories-stack">
        {displayCategories.map((cat, catIdx) => (
          <section
            key={cat.id}
            id={`skills-${cat.id}`}
            className="skills-category-section"
            aria-labelledby={`cat-heading-${cat.id}`}
          >
            {/* Category header */}
            <div className="skills-category-header">
              <div className="skills-category-title-group">
                <span className="skills-category-icon" aria-hidden="true">
                  {CATEGORY_ICONS[cat.id] || '📦'}
                </span>
                <div>
                  <span className="skills-category-index font-mono text-mono-label">
                    0{catIdx + 1}
                  </span>
                  <h2 id={`cat-heading-${cat.id}`} className="skills-category-title font-sans">
                    {cat.title}
                  </h2>
                </div>
              </div>
              <p className="skills-category-desc text-body">
                {cat.description}
              </p>
            </div>

            {/* Skills card grid */}
            <div className="skills-card-grid">
              {cat.items.map((skill) => {
                const levelConf = LEVEL_CONFIG[skill.level] ?? { label: skill.level, color: 'var(--color-steel)' };

                return (
                  <div key={skill.name} className="skills-card">
                    {/* Card header */}
                    <div className="skills-card-top">
                      <span className="skills-card-name font-sans">{skill.name}</span>
                      <span
                        className="skills-card-level text-mono-label font-mono"
                        style={{ color: levelConf.color }}
                      >
                        {levelConf.label}
                      </span>
                    </div>

                    {/* Context description */}
                    {skill.context && (
                      <p className="skills-card-context text-xs">{skill.context}</p>
                    )}

                    {/* Project links */}
                    {skill.appliedInProjectSlugs && skill.appliedInProjectSlugs.length > 0 && (
                      <div className="skills-card-projects">
                        <span className="skills-card-projects-label text-mono-label font-mono">
                          Used in:
                        </span>
                        <div className="skills-card-project-links">
                          {skill.appliedInProjectSlugs.map((slug) => (
                            <Link
                              key={slug}
                              href={`/projects/${slug}`}
                              className="skills-card-project-link font-mono"
                            >
                              {slug} →
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* ── CTA FOOTER ───────────────────────────────────── */}
      <div className="skills-page-cta">
        <p className="skills-cta-text text-body">
          See these skills applied in real-world engineering projects.
        </p>
        <Link href="/projects" className="skills-cta-link font-mono">
          View All Projects →
        </Link>
      </div>
    </div>
  );
}
