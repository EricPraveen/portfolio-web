'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Note } from '@/content/types';

export interface NoteDetailHeaderProps {
  note: Note;
}

export function NoteDetailHeader({ note }: NoteDetailHeaderProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window !== 'undefined') {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Fallback
      }
    }
  };

  const typeAccentClass = `note-detail-badge--${note.type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <header className="note-detail-header" aria-label="Field Note Publication Header">
      {/* Top Breadcrumb & Share Strip */}
      <div className="note-detail-strip">
        <nav className="note-detail-breadcrumbs" aria-label="Breadcrumb navigation">
          <Link href="/notes" className="note-breadcrumb-link font-mono text-xs">
            &larr; ALL FIELD NOTES
          </Link>
          <span className="note-breadcrumb-sep" aria-hidden="true">/</span>
          <span className="note-breadcrumb-current font-mono text-xs">{note.slug}</span>
        </nav>

        <div className="note-detail-actions">
          <button
            type="button"
            onClick={handleShare}
            className="note-share-btn font-mono text-xs"
            title="Copy direct note link to clipboard"
          >
            {copied ? '✓ URL COPIED' : '⎘ SHARE LINK'}
          </button>
        </div>
      </div>

      {/* Note Meta Banner */}
      <div className="note-detail-meta-row">
        <span className={`note-detail-type-badge font-mono text-mono-label ${typeAccentClass}`}>
          {note.type}
        </span>
        <span className="note-detail-meta-divider" aria-hidden="true">&bull;</span>
        <span className="note-detail-meta-item font-mono text-xs">
          Published: <strong>{note.publishedAt}</strong>
        </span>
        {note.updatedAt && (
          <>
            <span className="note-detail-meta-divider" aria-hidden="true">&bull;</span>
            <span className="note-detail-meta-item font-mono text-xs">
              Updated: <strong>{note.updatedAt}</strong>
            </span>
          </>
        )}
        <span className="note-detail-meta-divider" aria-hidden="true">&bull;</span>
        <span className="note-detail-meta-item font-mono text-xs">
          {note.readingTimeMinutes} min read
        </span>
      </div>

      {/* Note Title */}
      <h1 className="note-detail-title font-display">
        {note.title}
      </h1>

      {/* Note Summary / Abstract */}
      <p className="note-detail-lead text-body">
        {note.summary}
      </p>

      {/* Tags Strip */}
      <div className="note-detail-tags-row">
        {note.tags.map((tag) => (
          <span key={tag} className="note-detail-tag-pill font-mono text-xs">
            #{tag}
          </span>
        ))}
      </div>
    </header>
  );
}
