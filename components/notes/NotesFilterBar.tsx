import React from 'react';
import { clsx } from 'clsx';
import { NoteType } from '@/content/types';

export interface TypeFilterOption {
  id: 'all' | NoteType;
  label: string;
  count: number;
}

export interface NotesFilterBarProps {
  types: TypeFilterOption[];
  selectedType: string;
  onSelectType: (typeId: string) => void;
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
}

export function NotesFilterBar({
  types,
  selectedType,
  onSelectType,
  tags,
  selectedTag,
  onSelectTag,
}: NotesFilterBarProps) {
  return (
    <div className="notes-filter-bar" aria-label="Field Notes Filter Controls">
      {/* 1. Note Type / Classification Pills */}
      <div className="notes-filter-types-row">
        <span className="notes-filter-label font-mono text-mono-label">
          Category:
        </span>
        <div className="notes-filter-pills">
          {types.map((t) => {
            const isSelected = selectedType === t.id;
            return (
              <button
                key={t.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectType(t.id)}
                className={clsx(
                  'notes-filter-btn',
                  isSelected && 'notes-filter-btn--active'
                )}
              >
                <span>{t.label}</span>
                <span className="notes-filter-badge font-mono">{t.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Topics / Tags Strip */}
      {tags.length > 0 && (
        <div className="notes-filter-tags-row">
          <span className="notes-filter-label font-mono text-mono-label">
            Topic Tags:
          </span>
          <div className="notes-tags-pills-wrap">
            <button
              type="button"
              onClick={() => onSelectTag(null)}
              className={clsx(
                'notes-tag-pill font-mono text-xs',
                selectedTag === null && 'notes-tag-pill--active'
              )}
            >
              #all-topics
            </button>
            {tags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => onSelectTag(isSelected ? null : tag)}
                  className={clsx(
                    'notes-tag-pill font-mono text-xs',
                    isSelected && 'notes-tag-pill--active'
                  )}
                >
                  #{tag}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
