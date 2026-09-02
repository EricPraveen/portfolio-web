import { getAllNotes, getProfile } from '@/lib/content';

export const dynamic = 'force-static';

export async function GET() {
  const notes = getAllNotes();
  const profile = getProfile();
  const baseUrl = 'https://signal-ledger.dev';

  const feedItems = notes
    .map((note) => {
      const pubDate = new Date(note.publishedAt).toUTCString();
      const link = `${baseUrl}/notes/${note.slug}`;
      const escapedTitle = escapeXml(note.title);
      const escapedSummary = escapeXml(note.summary);
      const escapedCategory = escapeXml(note.type);

      return `
    <item>
      <title>${escapedTitle}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pubDate}</pubDate>
      <description>${escapedSummary}</description>
      <category>${escapedCategory}</category>
      <author>${escapeXml(profile.contactEmail)} (${escapeXml(profile.fullName)})</author>
    </item>`;
    })
    .join('');

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Field Notes &amp; Systems Postmortems | Signal Ledger</title>
    <link>${baseUrl}/notes</link>
    <description>Engineering field notes, debugging postmortems, architecture trade-offs, and distributed systems lessons.</description>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    ${feedItems}
  </channel>
</rss>`;

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
