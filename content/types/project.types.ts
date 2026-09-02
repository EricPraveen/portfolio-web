import { EvidenceLink, ProjectStatus } from './content.types';

export interface ProjectDecision {
  title: string;
  decision: string;
  why: string;
  tradeoff: string;
  alternativesConsidered?: string[];
}

/**
 * Alias for backward compatibility
 */
export type DecisionNote = ProjectDecision;

export interface HardProblemStory {
  problem: string;
  investigation: string;
  solution: string;
  takeaway: string;
}

export interface ProjectQuality {
  testing?: string;
  security?: string;
  accessibility?: string;
  performance?: string;
}

export interface ProjectArchitecture {
  summary: string;
  diagramUrl?: string;
  textAlternative?: string;
  keyComponents?: {
    name: string;
    role: string;
    description: string;
  }[];
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  tag?: string;
}

export interface BuildLogEntry {
  milestone: string;
  date?: string;
  details: string;
  tag?: string;
  commitRef?: string;
}

export interface ProjectArtifact {
  id: string;
  title: string;
  type: 'code' | 'schema' | 'benchmark' | 'config' | 'trace';
  description: string;
  codeSnippet?: string;
  language?: string;
  metrics?: {
    label: string;
    value: string;
    note?: string;
  }[];
  link?: string;
}

export interface Project {
  slug: string;
  title: string;
  headline: string;
  /** Concise, high-impact outcome summary statement */
  conciseOutcome?: string;
  featured: boolean;
  order: number;
  status: ProjectStatus;
  category: string;
  period: string;
  year?: string;
  duration?: string;
  role: string;
  teamSize?: number;
  isAcademic?: boolean;
  context: string;
  technologies: string[];
  /** Optional alias for technologies */
  stack?: string[];
  problem: string;
  constraints: string[];
  personalRole: string;
  contributions: string[];
  architecture: ProjectArchitecture;
  decisions: ProjectDecision[];
  buildLog?: BuildLogEntry[];
  artifacts?: ProjectArtifact[];
  hardProblemStory?: HardProblemStory;
  quality: ProjectQuality;
  outcomes: string[];
  lessonsLearned: string[];
  v2Improvements: string[];
  evidence: EvidenceLink[];
  coverImage: ProjectImage;
  gallery?: ProjectImage[];
  /** Direct link shortcuts */
  repoUrl?: string;
  demoUrl?: string;
  docsUrl?: string;
  reportUrl?: string;
  slidesUrl?: string;
  videoUrl?: string;
}
