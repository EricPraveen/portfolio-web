import { MetadataRoute } from 'next';
import { getAllProjects } from '@/lib/content/projects.service';
import { getAllNotes } from '@/lib/content/notes.service';

const SITE_URL = 'https://signal-ledger.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // 1. Static Core Route Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/work`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/notes`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/profile`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/credentials`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/feed.xml`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ];

  // 2. Case Studies (Dynamic project routes)
  const projects = getAllProjects();
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: project.featured ? 0.9 : 0.7,
  }));

  // 3. Technical Notes & Deep Dives
  const notes = getAllNotes();
  const noteRoutes: MetadataRoute.Sitemap = notes.map((note) => ({
    url: `${SITE_URL}/notes/${note.slug}`,
    lastModified: new Date(note.publishedAt || lastModified),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...noteRoutes];
}
