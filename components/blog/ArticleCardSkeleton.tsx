import React from 'react';

export function ArticleCardSkeleton() {
  return (
    <div className="blog-card blog-card--skeleton arcade-box" aria-hidden="true">
      <div className="blog-card-media blog-skeleton-shimmer" />
      <div className="blog-card-body">
        <div className="blog-skeleton-line blog-skeleton-line--short blog-skeleton-shimmer" />
        <div className="blog-skeleton-line blog-skeleton-line--heading blog-skeleton-shimmer" />
        <div className="blog-skeleton-line blog-skeleton-line--heading-2 blog-skeleton-shimmer" />
        <div className="blog-skeleton-line blog-skeleton-line--desc blog-skeleton-shimmer" />
        <div className="blog-skeleton-line blog-skeleton-line--desc blog-skeleton-shimmer" />
        <div className="blog-skeleton-tags">
          <div className="blog-skeleton-tag blog-skeleton-shimmer" />
          <div className="blog-skeleton-tag blog-skeleton-shimmer" />
          <div className="blog-skeleton-tag blog-skeleton-shimmer" />
        </div>
        <div className="blog-skeleton-btn blog-skeleton-shimmer" />
      </div>
    </div>
  );
}

