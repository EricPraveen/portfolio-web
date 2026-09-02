import {
  awardsData,
  credentialsData,
  hackathonsData,
} from '@/content/credentials.data';
import {
  Award,
  Credential,
  CredentialCategory,
  CredentialGroup,
  Hackathon,
} from '@/content/types';

export function getAllCredentials(): Credential[] {
  return credentialsData;
}

export function getFeaturedCredentials(): Credential[] {
  return credentialsData.filter((c) => c.featured);
}

export function getArchivedCredentials(): Credential[] {
  return credentialsData.filter((c) => !c.featured);
}

export function getCredentialsByGroup(group: CredentialGroup): Credential[] {
  return credentialsData.filter((c) => c.group === group);
}

export function getCredentialsByCategory(category: CredentialCategory): Credential[] {
  return credentialsData.filter((c) => c.category === category);
}

export function getAllCredentialCategories(): CredentialCategory[] {
  const categories = new Set(credentialsData.map((c) => c.category));
  return Array.from(categories);
}

export function getAllCredentialGroups(): CredentialGroup[] {
  return ['certification', 'award', 'hackathon', 'academic', 'opensource', 'research'];
}

export function getCredentialsStats() {
  const total = credentialsData.length;
  const verifiedCount = credentialsData.filter((c) => Boolean(c.verificationUrl)).length;
  const projectLinkedCount = credentialsData.filter((c) => Boolean(c.relatedProjectSlug)).length;
  const certificationsCount = credentialsData.filter((c) => c.group === 'certification').length;
  const awardsCount = credentialsData.filter((c) => c.group === 'award' || c.group === 'academic').length;
  const hackathonsCount = credentialsData.filter((c) => c.group === 'hackathon').length;

  return {
    total,
    verifiedCount,
    projectLinkedCount,
    certificationsCount,
    awardsCount,
    hackathonsCount,
  };
}

export function getAllAwards(): Award[] {
  return awardsData;
}

export function getFeaturedAwards(): Award[] {
  return awardsData.filter((a) => a.featured);
}

export function getAllHackathons(): Hackathon[] {
  return hackathonsData;
}

export function getCredentialsForProject(projectSlug: string): Credential[] {
  const normalized = projectSlug.toLowerCase().trim();
  return credentialsData.filter(
    (c) => c.relatedProjectSlug?.toLowerCase() === normalized
  );
}

export function getHackathonsForProject(projectSlug: string): Hackathon[] {
  const normalized = projectSlug.toLowerCase().trim();
  return hackathonsData.filter(
    (h) => h.projectSlug?.toLowerCase() === normalized
  );
}

