'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CredentialItem } from '@/content/types';
import { CredentialsFilterBar, GroupFilterOption } from './CredentialsFilterBar';
import { FeaturedCredentialCard } from './FeaturedCredentialCard';
import { CredentialsDenseLedger } from './CredentialsDenseLedger';
import { CredentialPreviewModal } from './CredentialPreviewModal';

export interface CredentialsClientProps {
  credentials: CredentialItem[];
  groupOptions: GroupFilterOption[];
}

export function CredentialsClient({
  credentials,
  groupOptions,
}: CredentialsClientProps) {
  const searchParams = useSearchParams();
  const initialGroup = searchParams.get('group') || 'all';
  const initialView = (searchParams.get('view') as 'cards' | 'ledger') || 'cards';

  const [selectedGroup, setSelectedGroup] = useState<string>(initialGroup);
  const [viewMode, setViewMode] = useState<'cards' | 'ledger'>(initialView);
  const [previewItem, setPreviewItem] = useState<CredentialItem | null>(null);

  // Sync state if URL query params change externally
  useEffect(() => {
    const urlGroup = searchParams.get('group');
    if (urlGroup && urlGroup !== selectedGroup) {
      setSelectedGroup(urlGroup);
    }
    const urlView = searchParams.get('view');
    if (urlView === 'cards' || urlView === 'ledger') {
      setViewMode(urlView);
    }
  }, [searchParams, selectedGroup]);

  // Handle classification filter change & silently update URL
  const handleSelectGroup = (groupId: string) => {
    setSelectedGroup(groupId);
    const url = new URL(window.location.href);
    if (groupId === 'all') {
      url.searchParams.delete('group');
    } else {
      url.searchParams.set('group', groupId);
    }
    window.history.replaceState({}, '', url.toString());
  };

  // Handle view toggle & silently update URL
  const handleToggleView = (mode: 'cards' | 'ledger') => {
    setViewMode(mode);
    const url = new URL(window.location.href);
    if (mode === 'cards') {
      url.searchParams.delete('view');
    } else {
      url.searchParams.set('view', mode);
    }
    window.history.replaceState({}, '', url.toString());
  };

  // Filter items according to classification
  const filteredItems = useMemo(() => {
    let list = [...credentials];

    if (selectedGroup !== 'all') {
      list = list.filter((item) => item.group === selectedGroup);
    }

    // Sort: Featured items first, then by date descending
    return list.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return b.issueDate.localeCompare(a.issueDate);
    });
  }, [credentials, selectedGroup]);

  return (
    <div className="cred-catalog-container">
      {/* 01 / Filter Bar & View Mode Switcher */}
      <CredentialsFilterBar
        groups={groupOptions}
        selectedGroup={selectedGroup}
        onSelectGroup={handleSelectGroup}
        viewMode={viewMode}
        onToggleViewMode={handleToggleView}
      />

      {/* 02 / Display Area: Spotlight Evidence Cards vs Dense Archive Ledger */}
      {filteredItems.length > 0 ? (
        viewMode === 'cards' ? (
          <div className="cred-cards-grid">
            {filteredItems.map((item) => (
              <FeaturedCredentialCard
                key={item.id}
                item={item}
                onOpenPreview={setPreviewItem}
              />
            ))}
          </div>
        ) : (
          <CredentialsDenseLedger items={filteredItems} />
        )
      ) : (
        <div className="cred-empty-state">
          <p className="cred-empty-title font-sans">
            No credentials archived under &ldquo;{selectedGroup}&rdquo;
          </p>
          <p className="cred-empty-desc text-sm">
            All records adhere to strict verification standards.
          </p>
          <button
            type="button"
            onClick={() => handleSelectGroup('all')}
            className="cred-empty-reset-btn font-mono text-xs"
          >
            Reset to All Classifications
          </button>
        </div>
      )}

      {/* 03 / Optional Document Preview Modal */}
      <CredentialPreviewModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
}
