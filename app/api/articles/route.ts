import { NextResponse } from 'next/server';
import { getMediumArticles } from '@/lib/content/medium.service';

export const revalidate = 3600; // 1 hour ISR

export async function GET() {
  try {
    const data = await getMediumArticles(4);
    return NextResponse.json(data, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('[API /api/articles] Failed to fetch articles:', error);
    return NextResponse.json(
      { error: 'Failed to retrieve articles from Medium' },
      { status: 500 }
    );
  }
}

