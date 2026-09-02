export type NoteType =
  | 'Debugging Postmortem'
  | 'Architecture Note'
  | 'Project Lesson'
  | 'Security Note'
  | 'Tool Comparison'
  | 'Concept in Practice';

export interface NoteItem {
  slug: string;
  title: string;
  publishedAt: string;
  updatedAt?: string;
  readingTimeMinutes?: number;
  summary: string;
  type: NoteType;
  tags: string[];
  content: string;
  relatedProjectSlugs?: string[];
  relatedSkills?: string[];
  lead?: string;
  featured?: boolean;
}

export type Note = NoteItem;

