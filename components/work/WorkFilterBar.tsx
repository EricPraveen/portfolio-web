import React from 'react';
import { clsx } from 'clsx';

export interface CategoryFilterOption {
  id: string;
  label: string;
  count: number;
}

export interface WorkFilterBarProps {
  categories: CategoryFilterOption[];
  selectedCategory: string;
  onSelectCategory: (categoryId: string) => void;
  viewMode: 'plates' | 'ledger';
  onToggleViewMode: (mode: 'plates' | 'ledger') => void;
}

export function WorkFilterBar({
  categories,
  selectedCategory,
  onSelectCategory,
  viewMode,
  onToggleViewMode,
}: WorkFilterBarProps) {
  return (
    <div className="work-filter-bar" aria-label="Project Catalog Filters & View Mode">
      {/* Category Pills */}
      <div className="work-filter-categories" role="toolbar" aria-label="Filter projects by engineering domain">
        <span className="work-filter-label font-mono text-mono-label">
          Filter Domain:
        </span>
        <div className="work-filter-pills">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isSelected}
                aria-label={`Filter by ${cat.label}, ${cat.count} ${cat.count === 1 ? 'project' : 'projects'} available`}
                onClick={() => onSelectCategory(cat.id)}
                className={clsx(
                  'work-filter-btn',
                  isSelected && 'work-filter-btn--active'
                )}
              >
                <span>{cat.label}</span>
                <span className="work-filter-badge font-mono" aria-hidden="true">{cat.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* View Switcher: Plates vs. Ledger Table */}
      <div className="work-view-switch-group" role="radiogroup" aria-label="Display View Mode">
        <span className="work-filter-label font-mono text-mono-label">
          View:
        </span>
        <div className="work-view-switch-pills">
          <button
            type="button"
            role="radio"
            aria-checked={viewMode === 'plates'}
            onClick={() => onToggleViewMode('plates')}
            className={clsx(
              'work-view-btn',
              viewMode === 'plates' && 'work-view-btn--active'
            )}
            title="Switch to detailed architectural plate view"
          >
            <span className="work-view-icon" aria-hidden="true">■</span>
            <span>Plates View</span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={viewMode === 'ledger'}
            onClick={() => onToggleViewMode('ledger')}
            className={clsx(
              'work-view-btn',
              viewMode === 'ledger' && 'work-view-btn--active'
            )}
            title="Switch to compact tabular ledger table view"
          >
            <span className="work-view-icon" aria-hidden="true">≡</span>
            <span>Ledger Table</span>
          </button>
        </div>
      </div>
    </div>
  );
}
