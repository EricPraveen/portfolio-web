'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { CredentialItem } from '@/content/types';
import { CertificatePreviewModal } from './CertificatePreviewModal';
import { ScrollReveal, FadeUp } from '@/components/animation';

export interface CertificatesGalleryProps {
  certificates: CredentialItem[];
}

function getIssuerShortName(issuer: string): string {
  if (issuer.includes('AWS')) return 'AWS';
  if (issuer.includes('Microsoft')) return 'Microsoft';
  if (issuer.includes('IBM')) return 'IBM';
  if (issuer.includes('Moratuwa')) return 'UOM (CODL)';
  if (issuer.includes('SoloLearn')) return 'SoloLearn';
  return issuer;
}

export function CertificatesGallery({ certificates }: CertificatesGalleryProps) {
  const [previewItem, setPreviewItem] = useState<CredentialItem | null>(null);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [columns, setColumns] = useState<number>(3);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  const galleryRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Automatically sort certificates year-wise descending: 2026 -> 2024 -> 2023
  const sortedCertificates = useMemo(() => {
    return [...certificates].sort((a, b) => {
      const yearA = parseInt(a.issueDate.match(/\b(20\d{2})\b/)?.[1] || '0', 10);
      const yearB = parseInt(b.issueDate.match(/\b(20\d{2})\b/)?.[1] || '0', 10);

      if (yearB !== yearA) {
        return yearB - yearA;
      }

      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;

      return 0;
    });
  }, [certificates]);

  // Dynamically calculate grid columns based on rendered CSS grid
  useEffect(() => {
    setIsMounted(true);

    const updateColumns = () => {
      if (!gridRef.current) return;
      const computed = window.getComputedStyle(gridRef.current);
      const cols = computed.getPropertyValue('grid-template-columns').split(' ').filter(Boolean).length;
      if (cols > 0) {
        setColumns(cols);
      }
    };

    updateColumns();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined' && gridRef.current) {
      ro = new ResizeObserver(() => {
        updateColumns();
      });
      ro.observe(gridRef.current);
    }

    window.addEventListener('resize', updateColumns);
    return () => {
      window.removeEventListener('resize', updateColumns);
      if (ro) ro.disconnect();
    };
  }, []);

  // Display exactly 2 rows of certificates initially:
  // Desktop (3 columns) -> 6 cards
  // Tablet (2 columns)  -> 4 cards
  // Mobile (1 column)   -> 2 cards
  const initialCount = isMounted ? Math.max(2, columns * 2) : 6;
  const canToggle = sortedCertificates.length > initialCount;
  const visibleCertificates = isExpanded ? sortedCertificates : sortedCertificates.slice(0, initialCount);
  const remainingCount = Math.max(0, sortedCertificates.length - initialCount);

  const handleToggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(false);
      // Smoothly scroll back to the gallery subsection header to prevent disorientation
      if (galleryRef.current) {
        const topOffset = galleryRef.current.getBoundingClientRect().top + window.scrollY - 90;
        window.scrollTo({
          top: topOffset,
          behavior: 'smooth',
        });
      }
    } else {
      setIsExpanded(true);
    }
  };

  return (
    <div ref={galleryRef} className="cert-gallery-container">
      {/* ── SUBSECTION HEADER ────────────────────────────────────────── */}
      <FadeUp className="cert-gallery-header">
        <div className="cert-gallery-header-left">
          <div className="cert-sub-eyebrow-row">
            <span className="cert-sub-eyebrow font-mono text-mono-label">
              <span className="cert-eyebrow-dot" aria-hidden="true" />
              PROFESSIONAL CREDENTIALS &bull; {sortedCertificates.length} VERIFIED
            </span>
            {canToggle && (
              <div className="cert-gallery-count-badge font-mono text-xs">
                <span>
                  {isExpanded
                    ? `Showing all ${sortedCertificates.length}`
                    : `Showing 2 rows (${visibleCertificates.length} of ${sortedCertificates.length})`}
                </span>
                {isExpanded && (
                  <button
                    type="button"
                    onClick={handleToggleExpand}
                    className="cert-header-quick-toggle font-mono"
                    aria-label="Minimize certificates back to 2 rows"
                  >
                    Minimize ▲
                  </button>
                )}
              </div>
            )}
          </div>
          <h4 className="cert-sub-title font-heading-2xl">
            Certificates &amp; Coursework
          </h4>
        </div>
        <p className="cert-gallery-lead font-sans">
          Verified digital certifications in cloud infrastructure, security operations, software engineering, and artificial intelligence.
        </p>
      </FadeUp>

      {/* ── CERTIFICATE CARDS GRID WITH VISIBLE THUMBNAILS (SORTED 2026 TO 2023) ── */}
      <div id="cert-cards-grid" ref={gridRef} className="cert-cards-grid">
        {visibleCertificates.map((cert, idx) => {
          const displayTitle = cert.title.replace(/\[|\]/g, '');
          const displayIssuer = cert.issuer.replace(/\[|\]/g, '');
          const displaySummary = cert.summary ? cert.summary.replace(/\[|\]/g, '') : null;
          const issuerShort = getIssuerShortName(cert.issuer);
          const thumbSrc = cert.thumbnail || cert.previewDoc?.thumbnailSrc;

          return (
            <ScrollReveal
              key={cert.id}
              as="article"
              variant="fade-up"
              delay={Math.min((idx % 6) * 45, 220)}
              className="cert-card arcade-box"
              onClick={() => {
                if (cert.previewDoc) setPreviewItem(cert);
              }}
              tabIndex={0}
              role="button"
              aria-label={`View certificate: ${displayTitle} issued by ${displayIssuer}`}
              onKeyDown={(e) => {
                if ((e.key === 'Enter' || e.key === ' ') && cert.previewDoc) {
                  e.preventDefault();
                  setPreviewItem(cert);
                }
              }}
            >
              {/* 1. Visible Small Certificate Preview Thumbnail */}
              <div className="cert-card-media">
                {thumbSrc ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={thumbSrc}
                    alt={`Certificate preview for ${displayTitle}`}
                    className="cert-card-thumb"
                    loading="lazy"
                  />
                ) : (
                  <div className="cert-card-thumb-placeholder font-mono text-xs">
                    CERTIFICATE ARTIFACT
                  </div>
                )}
                
                {/* Floating Meta Badges */}
                <div className="cert-card-media-pills">
                  <span className="cert-card-issuer-pill font-mono text-mono-label">
                    {issuerShort}
                  </span>
                  <span className="cert-card-date-pill font-mono text-mono-label">
                    {cert.issueDate}
                  </span>
                </div>

                <div className="cert-card-media-overlay" aria-hidden="true">
                  <span className="cert-card-media-cta font-mono text-xs">
                    View Certificate ↗
                  </span>
                </div>
              </div>

              {/* 2. Certificate Information */}
              <div className="cert-card-info">
                <h5 className="cert-card-title font-sans">
                  {displayTitle}
                </h5>
                <p className="cert-card-issuer font-mono text-xs">
                  Issued by <span className="cert-card-issuer-name">{displayIssuer}</span>
                </p>
                {displaySummary && (
                  <p className="cert-card-desc font-sans text-xs">
                    {displaySummary}
                  </p>
                )}
              </div>

              {/* 3. Skills Strip */}
              {cert.skillsDemonstrated && cert.skillsDemonstrated.length > 0 && (
                <div className="cert-card-skills">
                  {cert.skillsDemonstrated.slice(0, 3).map((skill) => (
                    <span key={skill} className="cert-skill-tag font-mono text-xs">
                      {skill}
                    </span>
                  ))}
                  {cert.skillsDemonstrated.length > 3 && (
                    <span className="cert-skill-more font-mono text-xs">
                      +{cert.skillsDemonstrated.length - 3}
                    </span>
                  )}
                </div>
              )}

              {/* 4. Action Footer */}
              <div className="cert-card-actions">
                <span className="cert-action-view font-mono text-xs">
                  <span>View Certificate ↗</span>
                </span>

                {cert.verificationUrl && (
                  <a
                    href={cert.verificationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-action-verify font-mono text-xs"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Verify ${displayTitle} on official credential portal (opens in new tab)`}
                  >
                    <span>Verify ↗</span>
                  </a>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* ── SECTION FOOTER: READ MORE / MINIMIZE & VIEW MORE ON LINKEDIN ── */}
      <FadeUp className="cert-gallery-footer">
        {canToggle && (
          <button
            type="button"
            onClick={handleToggleExpand}
            className={`cert-gallery-toggle-btn ${isExpanded ? 'is-expanded' : ''} font-mono`}
            aria-expanded={isExpanded}
            aria-controls="cert-cards-grid"
          >
            <span className="cert-toggle-icon" aria-hidden="true">
              {isExpanded ? '▲' : '▼'}
            </span>
            <span>
              {isExpanded ? 'Minimize Certificates' : 'Read More Certificates'}
            </span>
            <span className="cert-toggle-badge font-mono">
              {isExpanded ? 'Show 2 Rows' : `+${remainingCount}`}
            </span>
          </button>
        )}

        <a
          href="https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/"
          target="_blank"
          rel="noopener noreferrer"
          className="cert-gallery-more-btn font-mono"
          aria-label="View complete certifications and credentials history on LinkedIn (opens in new tab)"
        >
          <span>View More on LinkedIn &nearr;</span>
        </a>
      </FadeUp>

      {/* ── PREVIEW MODAL (CENTERED VIA PORTAL) ─────────────────────── */}
      <CertificatePreviewModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
}
