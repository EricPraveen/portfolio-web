import { projectsData } from '@/content/projects.data';
import { Project, ProjectStatus } from '@/content/types';

/**
 * Accessor service for project data with sorting, filtering, and integrity validation
 */

export function getAllProjects(): Project[] {
  return [...projectsData].sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured);
}

export function getFlagshipProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured && p.order <= 3);
}

export function getProjectBySlug(slug: string): Project | undefined {
  if (!slug) return undefined;
  const normalizedSlug = slug.toLowerCase().trim();
  return projectsData.find((p) => p.slug.toLowerCase() === normalizedSlug);
}

export function getProjectsByCategory(category?: string): Project[] {
  if (!category || category.toLowerCase() === 'all') {
    return getAllProjects();
  }
  const normalized = category.toLowerCase().trim();
  return getAllProjects().filter(
    (p) => p.category.toLowerCase() === normalized
  );
}

export function getProjectsByStatus(status: ProjectStatus): Project[] {
  return getAllProjects().filter((p) => p.status === status);
}

export function getAllProjectCategories(): string[] {
  const categories = new Set(projectsData.map((p) => p.category));
  return Array.from(categories);
}

export function getAllProjectStatuses(): ProjectStatus[] {
  const statuses = new Set(projectsData.map((p) => p.status));
  return Array.from(statuses);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((p) => p.slug);
}

export function getAdjacentProjects(currentSlug: string): {
  previous?: Project;
  next?: Project;
} {
  const projects = getAllProjects();
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  if (currentIndex === -1) {
    return {};
  }

  const previous = currentIndex > 0 ? projects[currentIndex - 1] : undefined;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : undefined;

  return { previous, next };
}

export function getProjectsByTechnology(tech: string): Project[] {
  const normalized = tech.toLowerCase().trim();
  return getAllProjects().filter((p) => {
    const techList = p.technologies || p.stack || [];
    return techList.some((t) => t.toLowerCase().includes(normalized));
  });
}

export function searchProjects(query: string): Project[] {
  if (!query || !query.trim()) return getAllProjects();
  const q = query.toLowerCase().trim();

  return getAllProjects().filter((p) => {
    const inTitle = p.title.toLowerCase().includes(q);
    const inHeadline = p.headline.toLowerCase().includes(q);
    const inProblem = p.problem.toLowerCase().includes(q);
    const inTech = (p.technologies || []).some((t) => t.toLowerCase().includes(q));
    const inCategory = p.category.toLowerCase().includes(q);

    return inTitle || inHeadline || inProblem || inTech || inCategory;
  });
}
