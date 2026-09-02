import React from 'react';
import Link from 'next/link';
import { Note } from '@/content/types';

export interface NoteCardProps {
  note: Note;
}

export function NoteCard({ note }: NoteCardProps) {
  const typeAccentClass = `note-card--${note.type.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

  return (
    <article className={`note-card ${typeAccentClass}`} aria-labelledby={`note-title-${note.slug}`}>
      {/* Top Meta Strip */}
      <div className="note-card-meta-strip">
        <div className="note-card-type-box">
          <span className="note-card-type-tag font-mono text-mono-label">
            {note.type}
          </span>
        </div>

        <div className="note-card-time-box font-mono text-xs">
          <span className="note-card-pub-date">{note.publishedAt}</span>
          <span className="note-card-dot" aria-hidden="true">&bull;</span>
          <span className="note-card-reading-time">{note.readingTimeMinutes} min read</span>
        </div>
      </div>

      {/* Note Title */}
      <h2 id={`note-title-${note.slug}`} className="note-card-title font-sans">
        <Link href={`/notes/${note.slug}`} className="note-card-title-link">
          {note.title}
        </Link>
      </h2>

      {/* Note Summary */}
      <p className="note-card-summary text-body">
        {note.summary}
      </p>

      {/* Tags Strip */}
      <div className="note-card-tags-row">
        {note.tags.map((tag) => (
          <span key={tag} className="note-card-tag font-mono text-xs">
            #{tag}
          </span>
        ))}
      </div>

      {/* Card Footer: Related Project & Read Link */}
      <div className="note-card-footer">
        {note.relatedProjectSlugs && note.relatedProjectSlugs.length > 0 && (
          <div className="note-card-related-project font-mono text-xs">
            <span className="text-ink-faint">Linked Project:</span>
            <Link
              href={`/work/${note.relatedProjectSlugs[0]}`}
              className="note-card-proj-link"
              title={`View project case study: ${note.relatedProjectSlugs[0]}`}
            >
              {note.relatedProjectSlugs[0]} &rarr;
            </Link>
          </div>
        )}

        <Link
          href={`/notes/${note.slug}`}
          className="note-card-read-action font-mono text-xs"
        >
          <span>Read Field Note</span>
          <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </article>
  );
}
