import { credentialsData, awardsData, hackathonsData } from '@/content/credentials.data';
import { educationData } from '@/content/education.data';
import { experienceData } from '@/content/experience.data';
import { notesData } from '@/content/notes.data';
import { profileData } from '@/content/profile.data';
import { projectsData } from '@/content/projects.data';
import { skillsData } from '@/content/skills.data';
import { ProjectStatus } from '@/content/types';

export interface ValidationReport {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  stats: {
    projectsCount: number;
    notesCount: number;
    skillsCount: number;
    credentialsCount: number;
    awardsCount: number;
    hackathonsCount: number;
    experienceCount: number;
    educationCount: number;
  };
}

const VALID_STATUSES: ProjectStatus[] = ['shipped', 'active', 'experimental', 'archived'];
const SLUG_REGEX = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * Runs comprehensive integrity, schema, and referential validation across all content modules.
 */
export function validateAllContent(): ValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];

  const projectSlugs = new Set<string>();
  const noteSlugs = new Set<string>();

  // 1. Validate Projects
  for (const project of projectsData) {
    const id = project.slug || 'UNKNOWN_PROJECT';

    // Slug checks
    if (!project.slug) {
      errors.push(`Project "${project.title || 'Untitled'}" is missing a slug.`);
    } else if (!SLUG_REGEX.test(project.slug)) {
      errors.push(
        `Project "${id}" has an invalid slug format. Must be lowercase alphanumeric characters separated by single hyphens.`
      );
    } else if (projectSlugs.has(project.slug)) {
      errors.push(`Duplicate project slug detected: "${project.slug}".`);
    } else {
      projectSlugs.add(project.slug);
    }

    // Status check
    if (!VALID_STATUSES.includes(project.status)) {
      errors.push(
        `Project "${id}" has invalid status "${project.status}". Valid statuses: ${VALID_STATUSES.join(', ')}.`
      );
    }

    // Required string fields
    if (!project.title?.trim()) errors.push(`Project "${id}" is missing a title.`);
    if (!project.headline?.trim()) errors.push(`Project "${id}" is missing a headline.`);
    if (!project.category?.trim()) errors.push(`Project "${id}" is missing a category.`);
    if (!project.period?.trim()) errors.push(`Project "${id}" is missing a period.`);
    if (!project.role?.trim()) errors.push(`Project "${id}" is missing a role.`);
    if (!project.personalRole?.trim()) errors.push(`Project "${id}" is missing personalRole.`);
    if (!project.problem?.trim()) errors.push(`Project "${id}" is missing a problem statement.`);

    // Arrays
    const stack = project.technologies || project.stack;
    if (!Array.isArray(stack) || stack.length === 0) {
      errors.push(`Project "${id}" must list at least one technology/stack item.`);
    }
    if (!Array.isArray(project.constraints) || project.constraints.length === 0) {
      warnings.push(`Project "${id}" has no constraints listed.`);
    }
    if (!Array.isArray(project.contributions) || project.contributions.length === 0) {
      errors.push(`Project "${id}" must list at least one contribution.`);
    }

    // Architecture
    if (!project.architecture?.summary?.trim()) {
      errors.push(`Project "${id}" is missing architecture.summary.`);
    }

    // Decisions & Trade-offs
    if (!Array.isArray(project.decisions) || project.decisions.length === 0) {
      warnings.push(`Project "${id}" has no architectural decisions recorded.`);
    } else {
      project.decisions.forEach((d, idx) => {
        if (!d.title?.trim()) errors.push(`Project "${id}" decision #${idx + 1} is missing a title.`);
        if (!d.decision?.trim()) errors.push(`Project "${id}" decision #${idx + 1} is missing the decision text.`);
        if (!d.why?.trim()) errors.push(`Project "${id}" decision #${idx + 1} is missing the "why" rationale.`);
        if (!d.tradeoff?.trim()) errors.push(`Project "${id}" decision #${idx + 1} is missing the "tradeoff" analysis.`);
      });
    }

    // Outcomes & Quality
    if (!Array.isArray(project.outcomes) || project.outcomes.length === 0) {
      warnings.push(`Project "${id}" has no verified outcomes listed.`);
    }
    if (!Array.isArray(project.lessonsLearned) || project.lessonsLearned.length === 0) {
      warnings.push(`Project "${id}" has no lessons learned listed.`);
    }
    if (!Array.isArray(project.v2Improvements) || project.v2Improvements.length === 0) {
      warnings.push(`Project "${id}" has no v2 improvements listed.`);
    }

    // Cover Image
    if (!project.coverImage?.src?.trim() || !project.coverImage?.alt?.trim()) {
      errors.push(`Project "${id}" is missing coverImage src or alt text.`);
    }
  }

  // 2. Validate Notes
  for (const note of notesData) {
    const id = note.slug || 'UNKNOWN_NOTE';

    if (!note.slug) {
      errors.push(`Note "${note.title || 'Untitled'}" is missing a slug.`);
    } else if (!SLUG_REGEX.test(note.slug)) {
      errors.push(
        `Note "${id}" has an invalid slug format. Must be lowercase alphanumeric characters separated by single hyphens.`
      );
    } else if (noteSlugs.has(note.slug)) {
      errors.push(`Duplicate note slug detected: "${note.slug}".`);
    } else {
      noteSlugs.add(note.slug);
    }

    if (!note.title?.trim()) errors.push(`Note "${id}" is missing a title.`);
    if (!note.publishedAt?.trim()) errors.push(`Note "${id}" is missing publishedAt date.`);
    if (!note.summary?.trim()) errors.push(`Note "${id}" is missing a summary.`);
    if (!note.content?.trim()) errors.push(`Note "${id}" is missing content.`);
    if (!Array.isArray(note.tags) || note.tags.length === 0) {
      warnings.push(`Note "${id}" has no tags.`);
    }

    // Referential integrity: Note related projects
    if (note.relatedProjectSlugs) {
      for (const relSlug of note.relatedProjectSlugs) {
        if (!projectSlugs.has(relSlug)) {
          errors.push(`Note "${id}" references non-existent project slug "${relSlug}".`);
        }
      }
    }
  }

  // 3. Validate Profile
  if (!profileData.fullName?.trim()) errors.push('Profile is missing fullName.');
  if (!profileData.title?.trim()) errors.push('Profile is missing title.');
  if (!profileData.thesisStatement?.trim()) errors.push('Profile is missing thesisStatement.');
  if (!profileData.contactEmail?.trim()) errors.push('Profile is missing contactEmail.');

  // 4. Referential Integrity: Skills -> Projects
  let totalSkills = 0;
  for (const cat of skillsData) {
    if (!cat.title?.trim()) errors.push(`Skill category "${cat.id}" is missing a title.`);
    for (const skill of cat.items) {
      totalSkills++;
      if (skill.appliedInProjectSlugs) {
        for (const pSlug of skill.appliedInProjectSlugs) {
          if (!projectSlugs.has(pSlug)) {
            warnings.push(
              `Skill "${skill.name}" in category "${cat.title}" references project slug "${pSlug}" which is not in projectsData.`
            );
          }
        }
      }
    }
  }

  // 5. Referential Integrity: Experience -> Projects
  for (const exp of experienceData) {
    if (exp.linkedProjectSlugs) {
      for (const pSlug of exp.linkedProjectSlugs) {
        if (!projectSlugs.has(pSlug)) {
          warnings.push(
            `Experience "${exp.organization}" references project slug "${pSlug}" which is not in projectsData.`
          );
        }
      }
    }
  }

  // 6. Referential Integrity: Credentials -> Projects
  for (const cred of credentialsData) {
    if (cred.relatedProjectSlug && !projectSlugs.has(cred.relatedProjectSlug)) {
      warnings.push(
        `Credential "${cred.title}" references project slug "${cred.relatedProjectSlug}" which is not in projectsData.`
      );
    }
  }

  // 7. Referential Integrity: Hackathons -> Projects
  for (const hack of hackathonsData) {
    if (hack.projectSlug && !projectSlugs.has(hack.projectSlug)) {
      warnings.push(
        `Hackathon "${hack.eventName}" references project slug "${hack.projectSlug}" which is not in projectsData.`
      );
    }
  }

  // 8. Referential Integrity: Education Capstone -> Projects
  for (const edu of educationData) {
    if (edu.capstone?.slug && !projectSlugs.has(edu.capstone.slug)) {
      warnings.push(
        `Education capstone for "${edu.institution}" references slug "${edu.capstone.slug}" which is not in projectsData.`
      );
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    stats: {
      projectsCount: projectsData.length,
      notesCount: notesData.length,
      skillsCount: totalSkills,
      credentialsCount: credentialsData.length,
      awardsCount: awardsData.length,
      hackathonsCount: hackathonsData.length,
      experienceCount: experienceData.length,
      educationCount: educationData.length,
    },
  };
}

/**
 * Asserts content validity and throws a descriptive error if invalid.
 * Called during development/build or test scripts.
 */
export function assertContentValid(): void {
  const report = validateAllContent();
  if (!report.isValid) {
    const errorMsg = `\n========================================\n[CONTENT VALIDATION FAILED]\nFound ${
      report.errors.length
    } critical error(s):\n${report.errors
      .map((e, idx) => `  ${idx + 1}. ${e}`)
      .join('\n')}\n========================================\n`;
    throw new Error(errorMsg);
  }
}
