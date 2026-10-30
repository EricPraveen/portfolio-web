'use client';

import React, { useState, useEffect } from 'react';
import { MediumArticle } from '@/content/types/blog.types';
import { ArticleCard } from './ArticleCard';
import { ArticleCardSkeleton } from './ArticleCardSkeleton';

export interface BlogSectionProps {
  initialArticles?: MediumArticle[];
  profileUrl?: string;
}

const DEFAULT_PROFILE_URL = 'https://medium.com/@ericpraveen123';

export function BlogSection({
  initialArticles = [],
  profileUrl = DEFAULT_PROFILE_URL,
}: BlogSectionProps) {
  const [articles, setArticles] = useState<MediumArticle[]>(initialArticles);
  const [isLoading, setIsLoading] = useState<boolean>(initialArticles.length === 0);
  const [hasError, setHasError] = useState<boolean>(false);

  const fetchArticles = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      const res = await fetch('/api/articles');
      if (!res.ok) {
        throw new Error(`Feed response status: ${res.status}`);
      }
      const data = await res.json();
      if (Array.isArray(data.articles) && data.articles.length > 0) {
        setArticles(data.articles);
      }
    } catch (err) {
      console.warn('[BlogSection] Live Medium RSS fetch error:', err);
      // If we don't already have initialArticles, show error state
      if (articles.length === 0) {
        setHasError(true);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="blog"
      className="blog-section"
      aria-labelledby="blog-heading"
    >
      {/* Invisible anchor aliases for seamless backward compatibility */}
      <span id="articles" className="section-anchor" aria-hidden="true" />
      <span id="medium" className="section-anchor" aria-hidden="true" />
      <span id="field" className="section-anchor" aria-hidden="true" />
      <span id="certificates" className="section-anchor" aria-hidden="true" />
      <span id="credentials" className="section-anchor" aria-hidden="true" />

      {/* ── SECTION HEADER STRIP ──────────────────────────────────── */}
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">
            05 / FROM THE BLOG &amp; WRITING
          </span>
          <h2 id="blog-heading" className="section-title font-heading-2xl">
            Latest Articles
          </h2>
        </div>
        <p className="section-lead text-body">
          Engineering deep dives, architecture notes, and open-source explorations published on Medium.
        </p>
      </div>

      {/* ── PROFILE & RSS FEED STATUS BAR ─────────────────────────── */}
      <div className="blog-profile-banner arcade-box">
        <div className="blog-profile-info">
          <span className="blog-profile-icon font-mono" aria-hidden="true">
            M
          </span>
          <div className="blog-profile-text">
            <span className="blog-profile-name font-sans">
              Eric Praveen on Medium
            </span>
            <span className="blog-profile-handle font-mono">
              @ericpraveen123
            </span>
          </div>
        </div>

        <div className="blog-profile-actions">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-profile-link font-mono"
          >
            <span>Follow on Medium</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      {/* ── ARTICLES GRID ─────────────────────────────────────────── */}
      {isLoading && articles.length === 0 ? (
        <div className="blog-grid" aria-label="Loading latest articles">
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
        </div>
      ) : hasError && articles.length === 0 ? (
        <div className="blog-state-box arcade-box">
          <p className="blog-state-msg font-sans">
            Unable to reach Medium RSS feed at the moment.
          </p>
          <div className="blog-state-actions">
            <button
              type="button"
              onClick={fetchArticles}
              className="about-btn about-btn--volt arcade-btn font-mono"
            >
              <span>Retry Sync ↻</span>
            </button>
            <a
              href={profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn about-btn--dark arcade-btn font-mono"
            >
              <span>Read on Medium ↗</span>
            </a>
          </div>
        </div>
      ) : articles.length === 0 ? (
        <div className="blog-state-box arcade-box">
          <p className="blog-state-msg font-sans">
            No published articles available yet. Check back soon!
          </p>
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="about-btn about-btn--volt arcade-btn font-mono"
          >
            <span>Visit Medium Profile ↗</span>
          </a>
        </div>
      ) : (
        <div className="blog-grid" role="feed" aria-label="Latest Medium Articles">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      )}

      {/* ── FOOTER VIEW ALL LINK ──────────────────────────────────── */}
      <div className="blog-footer-strip">
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="blog-view-all-btn arcade-btn font-mono"
        >
          <span>View All Articles on Medium</span>
          <span className="blog-view-all-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

