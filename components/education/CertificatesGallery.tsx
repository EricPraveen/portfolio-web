'use client';

import React, { useState } from 'react';
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

  return (
    <div className="cert-gallery-container">
      {/* ── SUBSECTION HEADER (NO UNWANTED CATEGORY TABS) ───────────── */}
      <FadeUp className="cert-gallery-header">
        <div className="cert-gallery-header-left">
          <span className="cert-sub-eyebrow font-mono text-mono-label">
            <span className="cert-eyebrow-dot" aria-hidden="true" />
            PROFESSIONAL CREDENTIALS &bull; {certificates.length} VERIFIED
          </span>
          <h4 className="cert-sub-title font-heading-2xl">
            Certificates &amp; Coursework
          </h4>
        </div>
        <p className="cert-gallery-lead font-sans">
          Verified digital certifications in cloud infrastructure, security operations, software engineering, and artificial intelligence.
        </p>
      </FadeUp>

      {/* ── CERTIFICATE CARDS GRID WITH VISIBLE THUMBNAILS ──────────── */}
      <div className="cert-cards-grid">
        {certificates.map((cert, idx) => {
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

      {/* ── PREVIEW MODAL (CENTERED VIA PORTAL) ─────────────────────── */}
      <CertificatePreviewModal
        item={previewItem}
        onClose={() => setPreviewItem(null)}
      />
    </div>
  );
}
