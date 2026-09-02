import React from 'react';

export interface WorkEmptyStateProps {
  onReset: () => void;
  selectedCategory: string;
}

export function WorkEmptyState({ onReset, selectedCategory }: WorkEmptyStateProps) {
  return (
    <div className="work-empty-state" role="status" aria-live="polite">
      <div className="work-empty-beacon" aria-hidden="true" />
      <span className="font-mono text-mono-label" style={{ color: 'var(--color-ink-faint)' }}>
        ZERO MATCHING LEDGER ENTRIES
      </span>

      <h3 className="work-empty-title font-sans">
        No projects found in category &ldquo;{selectedCategory}&rdquo;
      </h3>

      <p className="work-empty-desc text-sm font-sans">
        All project records in this portfolio are backed by verifiable repositories or specifications. Clear your filter to view all verified engineering cases.
      </p>

      <button
        type="button"
        onClick={onReset}
        className="work-empty-reset-btn font-mono"
      >
        <span>Reset Filter & View All Projects</span>
        <span aria-hidden="true">&rarr;</span>
      </button>
    </div>
  );
}
