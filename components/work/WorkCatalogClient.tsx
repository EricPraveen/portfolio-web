'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Project } from '@/content/types';
import { WorkFilterBar, CategoryFilterOption } from './WorkFilterBar';
import { ProjectCard } from './ProjectCard';
import { WorkArchiveTable } from './WorkArchiveTable';
import { WorkEmptyState } from './WorkEmptyState';

export interface WorkCatalogClientProps {
  projects: Project[];
  categoryOptions: CategoryFilterOption[];
}

export function WorkCatalogClient({
  projects,
  categoryOptions,
}: WorkCatalogClientProps) {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const initialView = (searchParams.get('view') as 'plates' | 'ledger') || 'plates';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [viewMode, setViewMode] = useState<'plates' | 'ledger'>(initialView);

  // Sync state if URL query params change externally
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory && urlCategory !== selectedCategory) {
      setSelectedCategory(urlCategory);
    }
    const urlView = searchParams.get('view');
    if (urlView === 'plates' || urlView === 'ledger') {
      setViewMode(urlView);
    }
  }, [searchParams, selectedCategory]);

  // Handle category selection and update URL silently
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    const url = new URL(window.location.href);
    if (catId === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', catId);
    }
    window.history.replaceState({}, '', url.toString());
  };

  // Handle view toggle and update URL silently
  const handleToggleView = (mode: 'plates' | 'ledger') => {
    setViewMode(mode);
    const url = new URL(window.location.href);
    if (mode === 'plates') {
      url.searchParams.delete('view');
    } else {
      url.searchParams.set('view', mode);
    }
    window.history.replaceState({}, '', url.toString());
  };

  // Filter and sort projects (featured first)
  const filteredProjects = useMemo(() => {
    let result = [...projects];

    if (selectedCategory !== 'all') {
      result = result.filter(
        (p) =>
          p.category.toLowerCase().replace(/[^a-z0-9]+/g, '-') === selectedCategory ||
          p.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort: Featured flagships first, then by order
    return result.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return (a.order || 99) - (b.order || 99);
    });
  }, [projects, selectedCategory]);

  return (
    <div className="work-catalog-wrap">
      {/* Interactive Filter Bar & View Switcher */}
      <WorkFilterBar
        categories={categoryOptions}
        selectedCategory={selectedCategory}
        onSelectCategory={handleSelectCategory}
        viewMode={viewMode}
        onToggleViewMode={handleToggleView}
      />

      {/* Catalog Display: Plates View vs Ledger Table vs Empty State */}
      {filteredProjects.length > 0 ? (
        viewMode === 'plates' ? (
          <div className="work-projects-grid">
            {filteredProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={idx}
              />
            ))}
          </div>
        ) : (
          <WorkArchiveTable projects={filteredProjects} />
        )
      ) : (
        <WorkEmptyState
          selectedCategory={selectedCategory}
          onReset={() => handleSelectCategory('all')}
        />
      )}
    </div>
  );
}
