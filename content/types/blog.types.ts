export interface MediumArticle {
  id: string;
  title: string;
  link: string;
  pubDate: string; // e.g. "Oct 20, 2026"
  isoDate: string; // ISO string
  thumbnail: string | null;
  excerpt: string;
  categories: string[];
  readingTime: string;
  creator: string;
}

export interface MediumArticlesResponse {
  articles: MediumArticle[];
  profileUrl: string;
  fetchedAt: string;
  cached?: boolean;
  total: number;
}

