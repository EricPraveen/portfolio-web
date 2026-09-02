import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getAllNoteSlugs,
  getNoteBySlug,
  getAllNotes,
  assertContentValid,
} from '@/lib/content';
import {
  NoteDetailHeader,
  NoteContentRenderer,
  NoteRelatedProjects,
  NotePager,
} from '@/components/notes';

// Enforce content validity at build time
assertContentValid();

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = getAllNoteSlugs();
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const note = getNoteBySlug(params.slug);
  if (!note) {
    return {
      title: 'Note Not Found | Signal Ledger',
      description: 'The requested engineering field note was not found.',
    };
  }

  const title = `${note.title} — Technical Field Note | Signal Ledger`;

  return {
    title,
    description: note.summary,
    keywords: note.tags,
    alternates: {
      canonical: `/notes/${note.slug}`,
    },
    openGraph: {
      title,
      description: note.summary,
      type: 'article',
      url: `https://signal-ledger.dev/notes/${note.slug}`,
      publishedTime: note.publishedAt,
      modifiedTime: note.updatedAt || note.publishedAt,
      tags: note.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: note.summary,
    },
  };
}

export default function NoteDetailPage({ params }: Props) {
  const note = getNoteBySlug(params.slug);

  if (!note) {
    notFound();
  }

  const allNotes = getAllNotes();
  const currentIndex = allNotes.findIndex((n) => n.slug === note.slug);
  const prevNote = currentIndex > 0 ? allNotes[currentIndex - 1] : undefined;
  const nextNote =
    currentIndex < allNotes.length - 1 ? allNotes[currentIndex + 1] : undefined;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: note.title,
    description: note.summary,
    datePublished: note.publishedAt,
    dateModified: note.updatedAt || note.publishedAt,
    keywords: note.tags.join(', '),
    author: {
      '@type': 'Person',
      name: 'Signal Ledger Engineer',
      url: 'https://signal-ledger.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Signal Ledger',
      url: 'https://signal-ledger.dev',
    },
  };

  return (
    <div className="note-detail-container">
      {/* Structured JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 01 / NOTE PUBLICATION HEADER */}
      <NoteDetailHeader note={note} />

      {/* 02 / SEMANTIC NOTE ARTICLE CONTENT WITH CODE PARSER */}
      <NoteContentRenderer content={note.content} />

      {/* 03 / RELATED PROJECT SYSTEMS & APPLIED CAPABILITIES */}
      <NoteRelatedProjects
        projectSlugs={note.relatedProjectSlugs}
        skills={note.relatedSkills}
      />

      {/* 04 / ADJACENT NOTE NAVIGATION PAGER */}
      <NotePager prevNote={prevNote} nextNote={nextNote} />
    </div>
  );
}
