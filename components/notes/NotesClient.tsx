'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Note } from '@/content/types';
import { NotesFilterBar, TypeFilterOption } from './NotesFilterBar';
import { NoteCard } from './NoteCard';

export interface NotesClientProps {
  notes: Note[];
  typeOptions: TypeFilterOption[];
  allTags: string[];
}

export function NotesClient({
  notes,
  typeOptions,
  allTags,
}: NotesClientProps) {
  const searchParams = useSearchParams();
  const initialType = searchParams.get('type') || 'all';
  const initialTag = searchParams.get('tag') || null;

  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedTag, setSelectedTag] = useState<string | null>(initialTag);

  // Sync state if URL query params change externally
  useEffect(() => {
    const urlType = searchParams.get('type');
    if (urlType && urlType !== selectedType) {
      setSelectedType(urlType);
    }
    const urlTag = searchParams.get('tag');
    if (urlTag !== selectedTag) {
      setSelectedTag(urlTag);
    }
  }, [searchParams, selectedType, selectedTag]);

  // Handle classification filter change & update URL
  const handleSelectType = (typeId: string) => {
    setSelectedType(typeId);
    const url = new URL(window.location.href);
    if (typeId === 'all') {
      url.searchParams.delete('type');
    } else {
      url.searchParams.set('type', typeId);
    }
    window.history.replaceState({}, '', url.toString());
  };

  // Handle topic tag filter change & update URL
  const handleSelectTag = (tag: string | null) => {
    setSelectedTag(tag);
    const url = new URL(window.location.href);
    if (!tag) {
      url.searchParams.delete('tag');
    } else {
      url.searchParams.set('tag', tag);
    }
    window.history.replaceState({}, '', url.toString());
  };

  // Filter notes
  const filteredNotes = useMemo(() => {
    let list = [...notes];

    if (selectedType !== 'all') {
      list = list.filter((n) => n.type === selectedType);
    }

    if (selectedTag) {
      const normalizedTag = selectedTag.toLowerCase();
      list = list.filter((n) =>
        n.tags.some((t) => t.toLowerCase() === normalizedTag)
      );
    }

    return list;
  }, [notes, selectedType, selectedTag]);

  return (
    <div className="notes-catalog-wrapper">
      {/* Interactive Filter Bar */}
      <NotesFilterBar
        types={typeOptions}
        selectedType={selectedType}
        onSelectType={handleSelectType}
        tags={allTags}
        selectedTag={selectedTag}
        onSelectTag={handleSelectTag}
      />

      {/* Notes Stream */}
      {filteredNotes.length > 0 ? (
        <div className="notes-stream-grid">
          {filteredNotes.map((note) => (
            <NoteCard key={note.slug} note={note} />
          ))}
        </div>
      ) : (
        <div className="notes-empty-state">
          <p className="notes-empty-title font-sans">
            No notes found matching the selected filter criteria
          </p>
          <p className="notes-empty-desc text-sm">
            Try resetting the topic tag or category filter.
          </p>
          <button
            type="button"
            onClick={() => {
              handleSelectType('all');
              handleSelectTag(null);
            }}
            className="notes-empty-reset-btn font-mono text-xs"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}
