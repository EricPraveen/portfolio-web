import { DateRange, EvidenceLink, SocialLink } from './content.types';

export interface LocationInfo {
  city: string;
  country: string;
  timezone: string;
  remotePreference: 'Remote' | 'Hybrid' | 'On-site' | 'Flexible';
}

export interface AvailabilityInfo {
  status: 'Available' | 'Exploring' | 'Committed';
  stage: string;
  targetRoles: string[];
  notes?: string;
}

export interface ResumeInfo {
  path: string;
  fileName: string;
  displayName?: string;
  lastUpdated: string;
  lastUpdatedLabel?: string;
}

export interface Profile {
  fullName: string;
  preferredName: string;
  title: string;
  location: LocationInfo;
  availability: AvailabilityInfo;
  thesisStatement: string;
  shortBio: string;
  longBio: string[];
  resume: ResumeInfo;
  contactEmail: string;
  socialLinks: SocialLink[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  major: string;
  dates: DateRange;
  status: string;
  gpa?: string;
  honors?: string[];
  relevantCoursework: string[];
  capstone?: {
    title: string;
    slug?: string;
    description: string;
  };
  activities?: string[];
}

export type Education = EducationItem;

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  type:
    | 'Internship'
    | 'Full-time'
    | 'Part-time'
    | 'Research'
    | 'Teaching Assistant'
    | 'Student Technical Role';
  dates: DateRange;
  location: string;
  context: string;
  responsibilities: string[];
  technologies: string[];
  verifiedOutcomes?: string[];
  linkedProjectSlugs?: string[];
  evidence?: EvidenceLink[];
}

export type Experience = ExperienceItem;

export interface CapabilityItem {
  name: string;
  level: 'Working Knowledge' | 'Proficient' | 'Advanced Production Exposure';
  context: string;
  appliedInProjectSlugs: string[];
}

export type Capability = CapabilityItem;

export interface CapabilityCategory {
  id: string;
  title: string;
  description: string;
  items: CapabilityItem[];
}

export interface OperatingPrinciple {
  number: string;
  title: string;
  summary: string;
  detail: string;
}
