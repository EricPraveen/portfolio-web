import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  getAllNotes,
  getAllNoteTags,
  getNoteStats,
  assertContentValid,
} from '@/lib/content';
import { NoteType } from '@/content/types';
import {
  NotesHeader,
  NotesClient,
  TypeFilterOption,
} from '@/components/notes';

// Enforce content validity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Field Notes & Systems Debugging — Signal Ledger',
  description:
    'Engineering field notes, debugging postmortems, architectural trade-offs, and practical lessons learned building distributed systems.',
  alternates: {
    canonical: '/notes',
    types: {
      'application/rss+xml': '/feed.xml',
    },
  },
  openGraph: {
    title: 'Field Notes & Systems Debugging | Signal Ledger',
    description:
      'Engineering field notes, debugging postmortems, architectural trade-offs, and practical lessons learned building distributed systems.',
    url: 'https://signal-ledger.dev/notes',
  },
};

const TYPE_LABELS: Record<NoteType, string> = {
  'Debugging Postmortem': 'Debugging Postmortems',
  'Architecture Note': 'Architecture Notes',
  'Project Lesson': 'Project Lessons',
  'Security Note': 'Security Notes',
  'Tool Comparison': 'Tool Comparisons',
  'Concept in Practice': 'Concepts in Practice',
};

export default function NotesIndexPage() {
  const notes = getAllNotes();
  const allTags = getAllNoteTags();
  const stats = getNoteStats();

  const noteTypes: NoteType[] = [
    'Debugging Postmortem',
    'Architecture Note',
    'Project Lesson',
    'Security Note',
    'Tool Comparison',
    'Concept in Practice',
  ];

  const typeOptions: TypeFilterOption[] = [
    { id: 'all', label: 'All Notes', count: notes.length },
    ...noteTypes
      .map((type) => ({
        id: type,
        label: TYPE_LABELS[type],
        count: notes.filter((n) => n.type === type).length,
      }))
      .filter((opt) => opt.count > 0),
  ];

  return (
    <div className="notes-page-container">
      {/* 01 / FIELD NOTES HERO & METRICS STRIP */}
      <NotesHeader
        totalCount={stats.total}
        postmortemsCount={stats.postmortemsCount}
        topicsCount={stats.tagsCount}
      />

      {/* 02 / INTERACTIVE NOTES CLIENT (FILTERS & STREAM) */}
      <Suspense
        fallback={
          <div
            className="font-mono text-mono-label"
            style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-ink-muted)' }}
          >
            Loading engineering notebook stream...
          </div>
        }
      >
        <NotesClient
          notes={notes}
          typeOptions={typeOptions}
          allTags={allTags}
        />
      </Suspense>
    </div>
  );
}
