import { educationData } from '@/content/education.data';
import { experienceData } from '@/content/experience.data';
import { operatingPrinciples, profileData } from '@/content/profile.data';
import { skillsData } from '@/content/skills.data';
import {
  Capability,
  CapabilityCategory,
  Education,
  Experience,
  OperatingPrinciple,
  Profile,
} from '@/content/types';

export function getProfile(): Profile {
  return profileData;
}

export function getEducation(): Education[] {
  return educationData;
}

export function getExperience(): Experience[] {
  return experienceData;
}

export function getSkills(): CapabilityCategory[] {
  return skillsData;
}

export function getOperatingPrinciples(): OperatingPrinciple[] {
  return operatingPrinciples;
}

export function getSkillCategoryById(id: string): CapabilityCategory | undefined {
  return skillsData.find((cat) => cat.id.toLowerCase() === id.toLowerCase());
}

export function getSkillsForProject(projectSlug: string): Capability[] {
  const normalized = projectSlug.toLowerCase().trim();
  const matchedSkills: Capability[] = [];

  for (const cat of skillsData) {
    for (const item of cat.items) {
      if (item.appliedInProjectSlugs?.some((s) => s.toLowerCase() === normalized)) {
        matchedSkills.push(item);
      }
    }
  }

  return matchedSkills;
}
