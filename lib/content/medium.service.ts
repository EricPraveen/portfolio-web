import { MediumArticle, MediumArticlesResponse } from '@/content/types/blog.types';

export const MEDIUM_PROFILE_URL = 'https://medium.com/@ericpraveen123';
export const MEDIUM_FEED_URL = 'https://medium.com/feed/@ericpraveen123';

/**
 * Fallback articles in case of network unavailability during builds or tests.
 * Reflects real articles published on Eric Praveen's Medium profile.
 */
export const FALLBACK_ARTICLES: MediumArticle[] = [
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
 * Helper to unescape HTML entities and strip XML/HTML tags safely.
 */
function decodeHtmlEntities(str: string): string {
  return str
    .replace(/&amp;/g, '&')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '“')
    .replace(/&#8221;/g, '”')
    .replace(/&#8212;/g, '—')
    .replace(/&#8211;/g, '–');
}

/**
 * Parses raw Medium RSS XML into an array of typed MediumArticle objects.
 */
export function parseMediumRssXml(xml: string, limit: number = 4): MediumArticle[] {
  const items = xml.split('<item>').slice(1);
  if (!items || items.length === 0) return [];

  const articles: MediumArticle[] = [];

  for (const item of items.slice(0, limit)) {
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
      categories: categories.slice(0, 4),
      readingTime,
      creator,
    });
  }

  return articles;
}

/**
 * Server-side function to fetch and cache Medium articles.
 */
export async function getMediumArticles(limit: number = 4): Promise<MediumArticlesResponse> {
  const now = new Date().toISOString();

  try {
    const res = await fetch(MEDIUM_FEED_URL, {
      next: { revalidate: 3600 }, // 1 hour Next.js server cache
      headers: {
        Accept: 'application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8',
        'User-Agent': 'Mozilla/5.0 (Portfolio-Web/1.0; RSS-Reader)',
      },
    });

    if (!res.ok) {
      console.warn(`[Medium Service] Feed request returned status ${res.status}. Using fallback.`);
      return {
        articles: FALLBACK_ARTICLES.slice(0, limit),
        profileUrl: MEDIUM_PROFILE_URL,
        fetchedAt: now,
        cached: true,
        total: FALLBACK_ARTICLES.length,
      };
    }

    const xml = await res.text();
    const articles = parseMediumRssXml(xml, limit);

    if (!articles || articles.length === 0) {
      return {
        articles: FALLBACK_ARTICLES.slice(0, limit),
        profileUrl: MEDIUM_PROFILE_URL,
        fetchedAt: now,
        cached: true,
        total: FALLBACK_ARTICLES.length,
      };
    }

    return {
      articles,
      profileUrl: MEDIUM_PROFILE_URL,
      fetchedAt: now,
      cached: false,
      total: articles.length,
    };
  } catch (error) {
    console.error('[Medium Service] Error fetching RSS feed:', error);
    return {
      articles: FALLBACK_ARTICLES.slice(0, limit),
      profileUrl: MEDIUM_PROFILE_URL,
      fetchedAt: now,
      cached: true,
      total: FALLBACK_ARTICLES.length,
    };
  }
}
