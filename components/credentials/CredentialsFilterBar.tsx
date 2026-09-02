import React from 'react';
import { clsx } from 'clsx';
import { CredentialGroup } from '@/content/types';

export interface GroupFilterOption {
  id: 'all' | CredentialGroup;
  label: string;
  count: number;
}

export interface CredentialsFilterBarProps {
  groups: GroupFilterOption[];
  selectedGroup: string;
  onSelectGroup: (groupId: string) => void;
  viewMode: 'cards' | 'ledger';
  onToggleViewMode: (mode: 'cards' | 'ledger') => void;
}

export function CredentialsFilterBar({
  groups,
  selectedGroup,
  onSelectGroup,
  viewMode,
  onToggleViewMode,
}: CredentialsFilterBarProps) {
  return (
    <div className="cred-filter-bar" aria-label="Credentials Filters and View Mode">
      {/* Group Pills */}
      <div className="cred-filter-groups" role="toolbar" aria-label="Filter credentials by classification">
        <span className="cred-filter-label font-mono text-mono-label">
          Classification:
        </span>
        <div className="cred-filter-pills">
          {groups.map((grp) => {
            const isSelected = selectedGroup === grp.id;
            return (
              <button
                key={grp.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => onSelectGroup(grp.id)}
                className={clsx(
                  'cred-filter-btn',
                  isSelected && 'cred-filter-btn--active'
                )}
              >
                <span>{grp.label}</span>
                <span className="cred-filter-badge font-mono">{grp.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* View Switcher: Spotlight Cards vs Dense Ledger Archive */}
      <div className="cred-view-switch-group" role="radiogroup" aria-label="Display Format">
        <span className="cred-filter-label font-mono text-mono-label">
          View:
        </span>
        <div className="cred-view-switch-pills">
          <button
            type="button"
            role="radio"
            aria-checked={viewMode === 'cards'}
            onClick={() => onToggleViewMode('cards')}
            className={clsx(
              'cred-view-btn',
              viewMode === 'cards' && 'cred-view-btn--active'
            )}
            title="Switch to detailed spotlight evidence cards"
          >
            <span className="cred-view-icon" aria-hidden="true">■</span>
            <span>Evidence Cards</span>
          </button>

          <button
            type="button"
            role="radio"
            aria-checked={viewMode === 'ledger'}
            onClick={() => onToggleViewMode('ledger')}
            className={clsx(
              'cred-view-btn',
              viewMode === 'ledger' && 'cred-view-btn--active'
            )}
            title="Switch to dense tabular archive ledger"
          >
            <span className="cred-view-icon" aria-hidden="true">≡</span>
            <span>Dense Ledger</span>
          </button>
        </div>
      </div>
    </div>
  );
}
