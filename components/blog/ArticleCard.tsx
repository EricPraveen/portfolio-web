'use client';

import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { MediumArticle } from '@/content/types/blog.types';

export interface ArticleCardProps {
  article: MediumArticle;
  instanceId?: string;
  isClone?: boolean;
  className?: string;
}

export function ArticleCard({
  article,
  instanceId,
  isClone = false,
  className,
}: ArticleCardProps) {
  const [imgError, setImgError] = React.useState(false);
  const titleId = `article-title-${instanceId ? `${instanceId}-` : ''}${article.id}`;

  return (
    <article
      className={clsx('blog-card arcade-box', className)}
      aria-labelledby={titleId}
      aria-hidden={isClone ? 'true' : undefined}
    >
      {/* Article Thumbnail */}
      <div className="blog-card-media">
        {article.thumbnail && !imgError ? (
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="blog-card-img"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="blog-card-placeholder" aria-hidden="true">
            <svg
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="blog-card-placeholder-icon"
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <span className="blog-card-placeholder-tag font-mono">MEDIUM STORY</span>
          </div>
        )}
        <div className="blog-card-overlay" aria-hidden="true" />
        <span className="blog-card-platform-badge font-mono">MEDIUM</span>
      </div>

      {/* Card Content Body */}
      <div className="blog-card-body">
        {/* Meta Header */}
        <div className="blog-card-meta">
          <time dateTime={article.isoDate} className="blog-card-date font-mono">
            {article.pubDate}
          </time>
          <span className="blog-card-meta-sep" aria-hidden="true">&bull;</span>
          <span className="blog-card-readtime font-mono">
            {article.readingTime}
          </span>
        </div>

        {/* Title */}
        <h3 id={titleId} className="blog-card-title font-sans">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card-title-link"
            tabIndex={isClone ? -1 : undefined}
          >
            {article.title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="blog-card-excerpt font-sans">
          {article.excerpt}
        </p>

        {/* Categories / Tags */}
        {article.categories && article.categories.length > 0 && (
          <div className="blog-card-tags" aria-label="Article Topics">
            {article.categories.map((cat) => (
              <span key={cat} className="blog-card-tag font-mono">
                #{cat}
              </span>
            ))}
          </div>
        )}

        {/* Action Button */}
        <div className="blog-card-footer">
          <a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-card-btn arcade-btn font-mono"
            aria-label={`Read "${article.title}" on Medium (opens in new tab)`}
            tabIndex={isClone ? -1 : undefined}
          >
            <span>Read Article</span>
            <span className="blog-card-btn-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

