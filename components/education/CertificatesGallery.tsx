'use client';

import React, { useState, useMemo } from 'react';
import { CredentialItem } from '@/content/types';
import { CertificatePreviewModal } from './CertificatePreviewModal';
import { ScrollReveal, FadeUp } from '@/components/animation';

export interface CertificatesGalleryProps {
  certificates: CredentialItem[];
}

export function CertificatesGallery({ certificates }: CertificatesGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewItem, setPreviewItem] = useState<CredentialItem | null>(null);

  // Dynamic category tabs derived from actual certificates
  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    certificates.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });

    const list = Object.keys(counts).map((cat) => ({
      id: cat,
      label: cat,
      count: counts[cat],
    }));

    return [{ id: 'all', label: 'All Certificates', count: certificates.length }, ...list];
  }, [certificates]);

  // Filtered certificates list
  const filteredCertificates = useMemo(() => {
    if (selectedCategory === 'all') return certificates;
    return certificates.filter((c) => c.category === selectedCategory);
  }, [certificates, selectedCategory]);

  return (
    <div className="cert-gallery-container">
      {/* ── SUBSECTION HEADER ────────────────────────────────────────── */}
      <FadeUp className="cert-gallery-header">
        <div className="cert-gallery-header-left">
          <span className="cert-sub-eyebrow font-mono text-mono-label">
            <span className="cert-eyebrow-dot" aria-hidden="true" />
            PROFESSIONAL CREDENTIALS
          </span>
          <h4 className="cert-sub-title font-heading-2xl">
            Certificates &amp; Coursework
          </h4>
        </div>
        <p className="cert-gallery-lead font-sans">
          Verified digital certifications in software engineering, security operations, artificial intelligence, and systems architectures.
        </p>
      </FadeUp>

      {/* ── CATEGORY FILTER TABS ─────────────────────────────────────── */}
      <div className="cert-filter-tabs font-mono" role="tablist" aria-label="Certificate categories">
        {categories.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setSelectedCategory(tab.id)}
              className={`cert-filter-tab ${isActive ? 'cert-filter-tab--active' : ''}`}
            >
              <span>{tab.label}</span>
              <span className="cert-filter-count">{tab.count}</span>
            </button>
          );
        })}
      </div>

      {/* ── CERTIFICATE CARDS GRID ───────────────────────────────────── */}
      <div className="cert-cards-grid">
        {filteredCertificates.map((cert, idx) => {
          const displayTitle = cert.title.replace(/\[|\]/g, '');
          const displayIssuer = cert.issuer.replace(/\[|\]/g, '');
          const displaySummary = cert.summary ? cert.summary.replace(/\[|\]/g, '') : null;
          const isPdf = cert.previewDoc?.type === 'pdf' || cert.previewDoc?.src.endsWith('.pdf');

          return (
            <ScrollReveal
              key={cert.id}
              as="article"
              variant="fade-up"
              delay={Math.min((idx % 6) * 50, 250)}
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
              {/* Card Meta Header */}
              <div className="cert-card-top">
                <span className="cert-card-badge font-mono text-mono-label">
                  {cert.category}
                </span>
                <span className="cert-card-date font-mono text-xs">
                  {cert.issueDate}
                </span>
              </div>

              {/* Title & Issuer */}
              <div className="cert-card-info">
                <h5 className="cert-card-title font-sans">
                  {displayTitle}
                </h5>
                <p className="cert-card-issuer font-mono text-xs">
                  Issued by <span className="cert-card-issuer-name">{displayIssuer}</span>
                </p>
              </div>

              {/* Summary Description (if available) */}
              {displaySummary && (
                <p className="cert-card-desc font-sans text-xs">
                  {displaySummary}
                </p>
              )}

              {/* Skills Strip */}
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

              {/* Card Action Bar */}
              <div className="cert-card-actions">
                {cert.previewDoc && (
                  <span className="cert-action-view font-mono text-xs">
                    <span>{isPdf ? 'Inspect PDF ↗' : 'Inspect Image ↗'}</span>
                  </span>
                )}

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

      {/* ── PREVIEW MODAL ────────────────────────────────────────────── */}
      <CertificatePreviewModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
}
