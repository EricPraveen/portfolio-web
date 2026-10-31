import { profileData } from '@/content/profile.data';
import { MediumArticle, MediumArticlesResponse } from '@/content/types/blog.types';

// Extract Medium profile information dynamically from profile configuration
const mediumSocial = profileData.socialLinks.find((s) => s.platform === 'medium');
export const MEDIUM_PROFILE_URL = mediumSocial?.url || 'https://medium.com/@ericpraveen123';
const mediumHandle = mediumSocial?.handle || '@ericpraveen123';
const username = mediumHandle.replace(/^@/, '').trim();
export const MEDIUM_FEED_URL = `https://medium.com/feed/@${username}`;

/**
 * Fallback articles in case of upstream network unavailability during builds or tests.
 * Reflects published articles on Eric Praveen's Medium profile.
 */
export const FALLBACK_ARTICLES: MediumArticle[] = [
  {
    id: '6c984ad62e67',
    title: 'SOLID Principles in Object-Oriented Programming',
    link: 'https://medium.com/@ericpraveen123/solid-principles-in-object-oriented-programming-6c984ad62e67',
    pubDate: 'Oct 31, 2026',
    isoDate: '2026-10-31T15:29:11.000Z',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*5NxwxPUt-zeqdHksjL-mEw.jpeg',
    categories: ['programming', 'solid-principles', 'java', 'software-engineering', 'oop'],
    excerpt:
      'Understanding the five fundamental design principles that help developers build clean, maintainable, flexible, and scalable software with practical Java examples.',
    readingTime: '5 min read',
    creator: 'Ericpraveen',
  },
  {
    id: '69ed8ea4a283',
    title: "Java 25 Made main() Simpler. Here's What Actually Changed.",
    link: 'https://medium.com/@ericpraveen123/java-25-made-main-simpler-heres-what-actually-changed-69ed8ea4a283',
    pubDate: 'Oct 20, 2026',
    isoDate: '2026-10-20T14:15:36.000Z',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*Jvsl2PGn86a7eQkJcLmbaw.jpeg',
    categories: ['programming', 'learn-to-code', 'technology', 'java', 'software-development'],
    excerpt:
      "From public static void main(String[] args) to void main() — understanding Java's new entry point and why it matters for beginners. How compact source files and instance main methods work.",
    readingTime: '4 min read',
    creator: 'Ericpraveen',
  },
  {
    id: 'd38fb995e670',
    title: 'Fixing the “br” Issue in WSO2 Micro Integrator',
    link: 'https://medium.com/@ericpraveen123/fixing-the-br-issue-in-wso2-micro-integrator-d38fb995e670',
    pubDate: 'Sep 23, 2026',
    isoDate: '2026-09-23T06:04:07.000Z',
    thumbnail: 'https://cdn-images-1.medium.com/max/1024/1*j3OK4BJshdL-1-jUF6AjvQ.png',
    categories: ['java', 'open-source', 'wso2-micro-integrator', 'wso2', 'api-integration'],
    excerpt:
      'A practical walkthrough of how an unneeded Brotli decoder dependency caused unsupported Accept-Encoding headers and parsing failures in WSO2 Micro Integrator (Issue #4488).',
    readingTime: '5 min read',
    creator: 'Ericpraveen',
  },
];

/**
 * Server-side in-memory cache to prevent redundant fetches within short intervals.
 */
interface CacheEntry {
  timestamp: number;
  data: MediumArticlesResponse;
}

let memoryCache: CacheEntry | null = null;
const CACHE_TTL_MS = 60 * 1000; // 60 seconds in-memory TTL

/**
 * Helper to unescape HTML entities and strip XML/HTML tags safely.
 */
function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, ' ')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&rdquo;/g, '”')
    .replace(/&ldquo;/g, '“')
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&mdash;/g, '—')
    .replace(/&#8212;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&#8211;/g, '–')
    .replace(/&hellip;/g, '…')
    .replace(/&#8230;/g, '…')
    .replace(/&#(\d+);/g, (_, dec) => {
      try {
        return String.fromCharCode(parseInt(dec, 10));
      } catch {
        return '';
      }
    })
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => {
      try {
        return String.fromCharCode(parseInt(hex, 16));
      } catch {
        return '';
      }
    });
}

/**
 * Parses raw Medium RSS XML into an array of typed MediumArticle objects.
 * If limit is omitted or <= 0, all published items are extracted.
 */
export function parseMediumRssXml(xml: string, limit?: number): MediumArticle[] {
  const items = xml.split('<item>').slice(1);
  if (!items || items.length === 0) return [];

  const candidateItems = limit && limit > 0 ? items.slice(0, limit) : items;
  const articles: MediumArticle[] = [];

  for (const item of candidateItems) {
    // 1. Title
    const titleMatch =
      item.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) ||
      item.match(/<title>([\s\S]*?)<\/title>/);
    const rawTitle = titleMatch ? titleMatch[1].trim() : 'Untitled Article';
    const title = decodeHtmlEntities(rawTitle);

    // 2. Link
    const linkMatch = item.match(/<link>([\s\S]*?)<\/link>/);
    const rawLink = linkMatch ? linkMatch[1].trim() : '';
    // Strip trailing tracking params from Medium RSS links
    const link = rawLink.split('?')[0] || MEDIUM_PROFILE_URL;

    // 3. GUID / ID
    const guidMatch = item.match(/<guid[^>]*>([\s\S]*?)<\/guid>/);
    const guidStr = guidMatch ? guidMatch[1].trim() : '';
    const id = guidStr.split('/').pop() || String(Math.random().toString(36).substring(2, 9));

    // 4. Publication Date
    const pubDateMatch = item.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
    let pubDate = 'Recent';
    let isoDate = new Date().toISOString();
    if (pubDateMatch) {
      try {
        const parsedDate = new Date(pubDateMatch[1].trim());
        if (!isNaN(parsedDate.getTime())) {
          isoDate = parsedDate.toISOString();
          pubDate = parsedDate.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          });
        }
      } catch {
        // fallback to default
      }
    }

    // 5. Creator
    const creatorMatch =
      item.match(/<dc:creator><!\[CDATA\[([\s\S]*?)\]\]><\/dc:creator>/) ||
      item.match(/<dc:creator>([\s\S]*?)<\/dc:creator>/);
    const creator = creatorMatch ? creatorMatch[1].trim() : 'Eric Praveen';

    // 6. Content & Thumbnail Extraction
    const contentMatch =
      item.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) ||
      item.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
    const rawContent = contentMatch ? contentMatch[1] : '';

    let thumbnail: string | null = null;
    const imgRegex = /<img[^>]+src="([^">]+)"/g;
    let imgMatch: RegExpExecArray | null;
    while ((imgMatch = imgRegex.exec(rawContent)) !== null) {
      const src = imgMatch[1];
      // Exclude Medium's 1x1 tracking pixel
      if (src && !src.includes('stat?event=')) {
        thumbnail = src;
        break;
      }
    }

    // 7. Categories
    const categories: string[] = [];
    const catRegex = /<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g;
    let catMatch: RegExpExecArray | null;
    while ((catMatch = catRegex.exec(item)) !== null) {
      const cat = catMatch[1].trim().toLowerCase();
      if (cat && !categories.includes(cat)) {
        categories.push(cat);
      }
    }

    // 8. Excerpt (Strip pre, code, figcaption, html tags)
    const cleanText = rawContent
      .replace(/<figcaption>[\s\S]*?<\/figcaption>/gi, ' ')
      .replace(/<pre[\s\S]*?<\/pre>/gi, ' ')
      .replace(/<code[\s\S]*?<\/code>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();

    const decodedText = decodeHtmlEntities(cleanText);
    const excerpt =
      decodedText.length > 175
        ? `${decodedText.slice(0, 175).trim()}...`
        : decodedText || 'Read the full story on Medium.';

    // 9. Reading time calculation (~200 words / min)
    const wordCount = decodedText.split(/\s+/).filter(Boolean).length;
    const readingTime = `${Math.max(2, Math.ceil(wordCount / 200))} min read`;

    articles.push({
      id,
      title,
      link,
      pubDate,
      isoDate,
      thumbnail,
      excerpt,
      categories: categories.slice(0, 5),
      readingTime,
      creator,
    });
  }

  return articles;
}

/**
 * Server-side function to fetch and cache all published Medium articles.
 * When limit is omitted, returns all published articles from the user's Medium profile.
 */
export async function getMediumArticles(limit?: number): Promise<MediumArticlesResponse> {
  const now = new Date().toISOString();
  const currentTime = Date.now();

  // Return in-memory cached response if fresh
  if (memoryCache && currentTime - memoryCache.timestamp < CACHE_TTL_MS) {
    const cachedArticles = limit && limit > 0
      ? memoryCache.data.articles.slice(0, limit)
      : memoryCache.data.articles;
    return {
      ...memoryCache.data,
      articles: cachedArticles,
      total: cachedArticles.length,
      cached: true,
    };
  }

  try {
    const res = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 }, // 1 hour Next.js cache
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Portfolio-Web/1.0; RSS-Reader)',
      },
    });

    if (!res.ok) {
      console.warn(`[Medium Service] Feed request returned status ${res.status}. Using fallback.`);
      const fallbackList = limit && limit > 0 ? FALLBACK_ARTICLES.slice(0, limit) : FALLBACK_ARTICLES;
      return {
        articles: fallbackList,
        profileUrl: MEDIUM_PROFILE_URL,
        fetchedAt: now,
        cached: true,
        total: fallbackList.length,
      };
    }

    const xml = await res.text();
    const allArticles = parseMediumRssXml(xml);

    if (!allArticles || allArticles.length === 0) {
      const fallbackList = limit && limit > 0 ? FALLBACK_ARTICLES.slice(0, limit) : FALLBACK_ARTICLES;
      return {
        articles: fallbackList,
        profileUrl: MEDIUM_PROFILE_URL,
        fetchedAt: now,
        cached: true,
        total: fallbackList.length,
      };
    }

    const fullResponse: MediumArticlesResponse = {
      articles: allArticles,
      profileUrl: MEDIUM_PROFILE_URL,
      fetchedAt: now,
      cached: false,
      total: allArticles.length,
    };

    // Update in-memory cache with all articles
    memoryCache = {
      timestamp: currentTime,
      data: fullResponse,
    };

    const returnedArticles = limit && limit > 0 ? allArticles.slice(0, limit) : allArticles;

    return {
      ...fullResponse,
      articles: returnedArticles,
      total: returnedArticles.length,
    };
  } catch (error) {
    console.error('[Medium Service] Error fetching RSS feed:', error);
    const fallbackList = limit && limit > 0 ? FALLBACK_ARTICLES.slice(0, limit) : FALLBACK_ARTICLES;
    return {
      articles: fallbackList,
      profileUrl: MEDIUM_PROFILE_URL,
      fetchedAt: now,
      cached: true,
      total: fallbackList.length,
    };
  }
}
