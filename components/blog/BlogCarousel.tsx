'use client';

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from 'react';
import { MediumArticle } from '@/content/types/blog.types';
import { ArticleCard } from './ArticleCard';

export interface BlogCarouselProps {
  articles: MediumArticle[];
  autoSlideInterval?: number;
}

interface CarouselDisplayItem {
  article: MediumArticle;
  instanceId: string;
  isClone: boolean;
}

export function BlogCarousel({
  articles,
  autoSlideInterval = 3500,
}: BlogCarouselProps) {
  const total = articles.length;

  // Base list duplicated if only 2 articles to enable smooth circular 2-card sliding
  const baseArticles = useMemo(() => {
    if (total === 2) {
      return [...articles, ...articles];
    }
    return articles;
  }, [articles, total]);

  const M = baseArticles.length;

  // Clones: prepend 2 items from end, append 2 items from start
  const displayItems = useMemo<CarouselDisplayItem[]>(() => {
    if (total <= 1) {
      return articles.map((a, i) => ({
        article: a,
        instanceId: `single-${i}`,
        isClone: false,
      }));
    }
    const clonesBefore = baseArticles.slice(-2);
    const clonesAfter = baseArticles.slice(0, 2);
    return [
      ...clonesBefore.map((a, i) => ({
        article: a,
        instanceId: `pre-${i}`,
        isClone: true,
      })),
      ...baseArticles.map((a, i) => ({
        article: a,
        instanceId: `real-${i}`,
        isClone: false,
      })),
      ...clonesAfter.map((a, i) => ({
        article: a,
        instanceId: `post-${i}`,
        isClone: true,
      })),
    ];
  }, [baseArticles, articles, total]);

  // Track state: starting index is 2 (first real article at position 0)
  const [currentIndex, setCurrentIndex] = useState(2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isUserPlaying, setIsUserPlaying] = useState(true);

  // Exact pixel measurement state with robust initial defaults
  const [metrics, setMetrics] = useState<{
    cardWidth: number;
    gap: number;
    step: number;
    isMobile: boolean;
  }>({
    cardWidth: 560,
    gap: 32,
    step: 592,
    isMobile: false,
  });

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);
  const safetyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Active original article index (0 to total - 1)
  const activeArticleIndex = useMemo(() => {
    if (total === 0) return 0;
    return (((currentIndex - 2) % total) + total) % total;
  }, [currentIndex, total]);

  // Viewport measurement with ResizeObserver + fallback
  const updateMetrics = useCallback(() => {
    if (!viewportRef.current) return;
    const width =
      viewportRef.current.clientWidth ||
      viewportRef.current.getBoundingClientRect().width ||
      (typeof window !== 'undefined' ? window.innerWidth : 1200);

    if (width <= 0) return;

    const isMobile = width < 900;
    const gap = isMobile ? 24 : 32;
    const cardWidth = isMobile ? width : Math.floor((width - gap) / 2);
    const step = cardWidth + gap;

    setMetrics({ cardWidth, gap, step, isMobile });
  }, []);

  useEffect(() => {
    updateMetrics();

    const el = viewportRef.current;
    if (!el) return;

    const ro = new ResizeObserver(() => {
      updateMetrics();
    });
    ro.observe(el);

    window.addEventListener('resize', updateMetrics);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateMetrics);
    };
  }, [updateMetrics]);

  // Navigate to Next card
  const handleNext = useCallback(() => {
    if (total <= 1) return;
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);

    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    safetyTimeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);
  }, [total]);

  // Navigate to Previous card
  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);

    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
    safetyTimeoutRef.current = setTimeout(() => {
      isAnimatingRef.current = false;
    }, 700);
  }, [total]);

  // Navigate directly to a specific article index via dot indicator
  const handleDotClick = useCallback(
    (targetIndex: number) => {
      if (total <= 1 || isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      setIsTransitioning(true);
      setCurrentIndex(2 + targetIndex);

      if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);
      safetyTimeoutRef.current = setTimeout(() => {
        isAnimatingRef.current = false;
      }, 700);
    },
    [total]
  );

  // Infinite boundary reset handler on transition end
  const handleTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== trackRef.current || e.propertyName !== 'transform') return;

    if (safetyTimeoutRef.current) clearTimeout(safetyTimeoutRef.current);

    if (currentIndex >= M + 2) {
      // Reached post-clones: instant invisible warp to matching start position
      setIsTransitioning(false);
      setCurrentIndex(currentIndex - M);
    } else if (currentIndex < 2) {
      // Reached pre-clones: instant invisible warp to matching end position
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + M);
    }
    isAnimatingRef.current = false;
  };

  // Re-enable smooth transition in next animation frame after instant position reset
  useEffect(() => {
    if (!isTransitioning) {
      const frame1 = requestAnimationFrame(() => {
        const frame2 = requestAnimationFrame(() => {
          setIsTransitioning(true);
        });
        return () => cancelAnimationFrame(frame2);
      });
      return () => cancelAnimationFrame(frame1);
    }
  }, [isTransitioning]);

  // Unstoppable auto-scroll timer using stable refs
  const isHoveredRef = useRef(isHovered);
  const isUserPlayingRef = useRef(isUserPlaying);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    isUserPlayingRef.current = isUserPlaying;
  }, [isUserPlaying]);

  useEffect(() => {
    if (total <= 1) return;

    const timerId = setInterval(() => {
      // Pause only if actively hovered or user clicked pause
      if (isHoveredRef.current || !isUserPlayingRef.current) {
        return;
      }
      handleNext();
    }, autoSlideInterval);

    return () => clearInterval(timerId);
  }, [total, autoSlideInterval, handleNext]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Touch tracking for mobile swipe gestures
  const touchStartX = useRef<number | null>(null);
  const touchDeltaX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null) {
      if (touchDeltaX.current < -45) {
        handleNext();
      } else if (touchDeltaX.current > 45) {
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  // If only 1 article is available, render clean single card
  if (total === 1) {
    return (
      <div className="blog-single-container" aria-label="Single Medium Article">
        <ArticleCard article={articles[0]} />
      </div>
    );
  }

  const isActuallySliding = isUserPlaying && !isHovered;

  // Exact pixel transform
  const translateX = -1 * currentIndex * metrics.step;
  const trackStyle: React.CSSProperties = {
    gap: `${metrics.gap}px`,
    transform: `translateX(${translateX}px)`,
    transition: isTransitioning
      ? 'transform 0.65s cubic-bezier(0.2, 0.9, 0.3, 1)'
      : 'none',
  };

  return (
    <div
      className="blog-carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label="Published Medium Articles Horizontal Carousel"
      onKeyDown={handleKeyDown}
    >
      {/* ── CAROUSEL CONTROL TOOLBAR ───────────────────────────────── */}
      <div className="blog-carousel-toolbar">
        <div className="blog-carousel-meta">
          <div className="blog-carousel-counter font-mono" aria-live="polite">
            <span className="blog-carousel-counter-active">
              {String(activeArticleIndex + 1).padStart(2, '0')}
            </span>
            <span className="blog-carousel-counter-sep">/</span>
            <span className="blog-carousel-counter-total">
              {String(total).padStart(2, '0')}
            </span>
          </div>

          <div
            className={`blog-carousel-status font-mono ${
              isActuallySliding ? 'blog-carousel-status--active' : 'blog-carousel-status--paused'
            }`}
          >
            <span className="blog-carousel-status-dot" aria-hidden="true" />
            <span>
              {isActuallySliding
                ? 'AUTO-SLIDING'
                : isHovered
                ? 'HOVER PAUSED'
                : 'PAUSED'}
            </span>
          </div>
        </div>

        <div className="blog-carousel-actions">
          {/* Pause / Play Accessible Toggle */}
          <button
            type="button"
            onClick={() => setIsUserPlaying((prev) => !prev)}
            className="blog-nav-btn arcade-btn font-mono"
            aria-label={
              isUserPlaying
                ? 'Pause automatic carousel sliding'
                : 'Start automatic carousel sliding'
            }
            title={isUserPlaying ? 'Pause Auto-slide' : 'Resume Auto-slide'}
          >
            {isUserPlaying ? (
              <span aria-hidden="true">❚❚</span>
            ) : (
              <span aria-hidden="true">▶</span>
            )}
          </button>

          {/* Previous Button */}
          <button
            type="button"
            onClick={handlePrev}
            className="blog-nav-btn arcade-btn font-mono"
            aria-label="Previous article slide"
            title="Previous article"
          >
            <span aria-hidden="true">←</span>
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={handleNext}
            className="blog-nav-btn arcade-btn font-mono"
            aria-label="Next article slide"
            title="Next article"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      {/* ── CAROUSEL VIEWPORT & TRACK ──────────────────────────────── */}
      <div
        ref={viewportRef}
        className="blog-carousel-viewport"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className="blog-carousel-track"
          style={trackStyle}
          onTransitionEnd={handleTransitionEnd}
        >
          {displayItems.map((item, idx) => (
            <div
              key={`${item.instanceId}-${item.article.id}-${idx}`}
              className="blog-carousel-slide"
              style={{
                width: `${metrics.cardWidth}px`,
                flex: `0 0 ${metrics.cardWidth}px`,
              }}
              role="group"
              aria-roledescription="slide"
              aria-label={`${item.article.title}`}
              aria-hidden={item.isClone ? 'true' : undefined}
            >
              <ArticleCard
                article={item.article}
                instanceId={item.instanceId}
                isClone={item.isClone}
                className="blog-carousel-card"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── PAGINATION DOT INDICATORS ──────────────────────────────── */}
      <div className="blog-carousel-pagination" role="tablist" aria-label="Article slides">
        {articles.map((article, idx) => {
          const isActive = idx === activeArticleIndex;
          return (
            <button
              key={`dot-${article.id}-${idx}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${idx + 1}: ${article.title}`}
              className={`blog-carousel-dot ${isActive ? 'is-active' : ''}`}
              onClick={() => handleDotClick(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}
