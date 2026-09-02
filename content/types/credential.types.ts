export type CredentialGroup =
  | 'certification'
  | 'award'
  | 'hackathon'
  | 'academic'
  | 'opensource'
  | 'research';

export type CredentialCategory =
  | 'Cloud & DevOps'
  | 'Security & Networking'
  | 'Software Engineering'
  | 'Systems & Backend'
  | 'Data & AI'
  | 'Academic & Distinctions'
  | 'Open-Source & Community'
  | 'Research & Technical Speaking';

export interface CredentialPreviewDoc {
  src: string;
  type: 'image' | 'pdf';
  alt: string;
  caption?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expirationDate?: string;
  group: CredentialGroup;
  category: CredentialCategory;
  verificationUrl?: string;
  credentialId?: string;
  isCredentialIdSafe?: boolean;
  skillsDemonstrated: string[];
  relatedProjectSlug?: string;
  summary?: string;
  previewDoc?: CredentialPreviewDoc;
  featured: boolean;
  rankOrOutcome?: string;
}

export type Credential = CredentialItem;

export interface AwardItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary: string;
  verificationUrl?: string;
  featured?: boolean;
}

export type Award = AwardItem;

export interface HackathonItem {
  id: string;
  eventName: string;
  organizer: string;
  date: string;
  role: string;
  teamSize?: number;
  projectTitle: string;
  projectSlug?: string;
  outcomeOrPlacement?: string;
  takeaway: string;
  verificationUrl?: string;
}

export type Hackathon = HackathonItem;

