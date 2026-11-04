'use client';

import React, { useEffect, useRef } from 'react';
import { CredentialItem } from '@/content/types';

export interface CertificatePreviewModalProps {
  item: CredentialItem | null;
  onClose: () => void;
}

export function CertificatePreviewModal({
  item,
  onClose,
}: CertificatePreviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press, handle focus trap, lock background scroll
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    // Prevent background scrolling while modal is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [item, onClose]);

  if (!item || !item.previewDoc) return null;

  const displayTitle = item.title.replace(/\[|\]/g, '');
  const displayIssuer = item.issuer.replace(/\[|\]/g, '');
  const isPdf = item.previewDoc.type === 'pdf' || item.previewDoc.src.endsWith('.pdf');

  return (
    <div
      className="cert-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
    >
      <div
        ref={modalRef}
        className="cert-modal-card arcade-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="cert-modal-header">
          <div className="cert-modal-meta">
            <span className="cert-modal-tag font-mono text-mono-label">
              VERIFIED ARTIFACT &bull; {item.category.toUpperCase()}
            </span>
            <h3 id="cert-modal-title" className="cert-modal-title font-sans">
              {displayTitle}
            </h3>
            <p className="cert-modal-issuer font-mono text-xs">
              Conferred by <strong>{displayIssuer}</strong> &bull; {item.issueDate}
              {item.credentialId && (
                <span className="cert-modal-id"> &bull; ID: <code>{item.credentialId}</code></span>
              )}
            </p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="cert-modal-close-btn arcade-btn font-mono text-xs"
            aria-label="Close certificate preview"
          >
            ✕ CLOSE
          </button>
        </div>

        {/* Modal Body / Viewer */}
        <div className="cert-modal-body">
          {isPdf ? (
            <div className="cert-modal-pdf-wrap">
              <iframe
                src={item.previewDoc.src}
                title={item.previewDoc.alt || displayTitle}
                className="cert-modal-iframe"
              />
            </div>
          ) : (
            <div className="cert-modal-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.previewDoc.src}
                alt={item.previewDoc.alt || displayTitle}
                className="cert-modal-img"
              />
            </div>
          )}

          {item.previewDoc.caption && (
            <p className="cert-modal-caption font-mono text-xs">
              {item.previewDoc.caption}
            </p>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="cert-modal-footer">
          <div className="cert-modal-footer-left">
            {isPdf && (
              <a
                href={item.previewDoc.src}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn-modal-open font-mono text-xs"
              >
                <span>Open PDF in New Window ↗</span>
              </a>
            )}
            {item.verificationUrl && (
              <a
                href={item.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn-modal-verify font-mono text-xs"
              >
                <span>Verify Authority Record ↗</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="cert-btn-modal-done arcade-btn font-mono text-xs"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

