import { notesData } from '@/content/notes.data';
import { Note, NoteType } from '@/content/types';

/**
 * Calculates estimated reading time automatically based on 200 words per minute.
 */
export function calculateReadingTime(content: string): number {
  if (!content) return 1;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function getAllNotes(): Note[] {
  return [...notesData]
    .map((n) => ({
      ...n,
      readingTimeMinutes: n.readingTimeMinutes || calculateReadingTime(n.content),
    }))
    .sort(
      (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getFeaturedNotes(): Note[] {
  return getAllNotes().filter((n) => n.featured);
}

export function getNoteBySlug(slug: string): Note | undefined {
  if (!slug) return undefined;
  const normalized = slug.toLowerCase().trim();
  const found = notesData.find((n) => n.slug.toLowerCase() === normalized);
  if (!found) return undefined;
  return {
    ...found,
    readingTimeMinutes: found.readingTimeMinutes || calculateReadingTime(found.content),
  };
}

export function getAllNoteSlugs(): string[] {
  return notesData.map((n) => n.slug);
}

export function getNotesByTag(tag: string): Note[] {
  if (!tag) return getAllNotes();
  const normalized = tag.toLowerCase().trim();
  return getAllNotes().filter((n) =>
    n.tags.some((t) => t.toLowerCase() === normalized)
  );
}

export function getNotesByType(type: NoteType): Note[] {
  return getAllNotes().filter((n) => n.type === type);
}

export function getAllNoteTags(): string[] {
  const tags = new Set<string>();
  for (const note of notesData) {
    for (const tag of note.tags) {
      tags.add(tag);
    }
  }
  return Array.from(tags);
}

export function getAllNoteTypes(): NoteType[] {
  return [
    'Debugging Postmortem',
    'Architecture Note',
    'Project Lesson',
    'Security Note',
    'Tool Comparison',
    'Concept in Practice',
  ];
}

export function getNoteStats() {
  const all = getAllNotes();
  const total = all.length;
  const postmortemsCount = all.filter((n) => n.type === 'Debugging Postmortem').length;
  const architectureCount = all.filter((n) => n.type === 'Architecture Note').length;
  const tagsCount = getAllNoteTags().length;

  return {
    total,
    postmortemsCount,
    architectureCount,
    tagsCount,
  };
}

export function getNotesForProject(projectSlug: string): Note[] {
  const normalized = projectSlug.toLowerCase().trim();
  return getAllNotes().filter((n) =>
    n.relatedProjectSlugs?.some((s) => s.toLowerCase() === normalized)
  );
}

