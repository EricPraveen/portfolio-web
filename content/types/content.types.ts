/**
 * Core generic data structures & primitives for portfolio content
 */

export type ProjectStatus = 'shipped' | 'active' | 'experimental' | 'archived';

export type EvidenceType =
  | 'github'
  | 'demo'
  | 'documentation'
  | 'paper'
  | 'slides'
  | 'certificate'
  | 'dataset'
  | 'docker'
  | 'figma'
  | 'external';

export interface EvidenceLink {
  label: string;
  url: string;
  type: EvidenceType;
  isExternal?: boolean;
  isPrimary?: boolean;
  note?: string;
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'email'
  | 'twitter'
  | 'bluesky'
  | 'kaggle'
  | 'leetcode'
  | 'devto'
  | 'medium';

export interface SocialLink {
  platform: SocialPlatform;
  label: string;
  url: string;
  handle?: string;
}

export interface DateRange {
  start: string;
  end: string | 'Present';
  isCurrent?: boolean;
}
