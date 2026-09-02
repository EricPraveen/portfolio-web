import React from 'react';
import Link from 'next/link';
import { Note } from '@/content/types';

export interface NotePagerProps {
  prevNote?: Note;
  nextNote?: Note;
}

export function NotePager({ prevNote, nextNote }: NotePagerProps) {
  if (!prevNote && !nextNote) return null;

  return (
    <nav className="note-pager-nav" aria-label="Adjacent Field Notes Navigation">
      <div className="note-pager-grid">
        {prevNote ? (
          <Link href={`/notes/${prevNote.slug}`} className="note-pager-card note-pager-card--prev">
            <span className="note-pager-dir font-mono text-mono-label">
              &larr; PREVIOUS NOTE
            </span>
            <span className="note-pager-title font-sans">
              {prevNote.title}
            </span>
            <span className="note-pager-meta font-mono text-xs">
              {prevNote.type} &bull; {prevNote.publishedAt}
            </span>
          </Link>
        ) : (
          <div className="note-pager-placeholder" />
        )}

        {nextNote ? (
          <Link href={`/notes/${nextNote.slug}`} className="note-pager-card note-pager-card--next">
            <span className="note-pager-dir font-mono text-mono-label">
              NEXT NOTE &rarr;
            </span>
            <span className="note-pager-title font-sans">
              {nextNote.title}
            </span>
            <span className="note-pager-meta font-mono text-xs">
              {nextNote.type} &bull; {nextNote.publishedAt}
            </span>
          </Link>
        ) : (
          <div className="note-pager-placeholder" />
        )}
      </div>
    </nav>
  );
}
