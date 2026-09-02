'use client';

import React, { useEffect, useRef } from 'react';
import { CredentialItem } from '@/content/types';

export interface CredentialPreviewModalProps {
  item: CredentialItem | null;
  onClose: () => void;
}

export function CredentialPreviewModal({
  item,
  onClose,
}: CredentialPreviewModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape key press and manage focus
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    // Prevent body scroll while modal is active
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [item, onClose]);

  if (!item || !item.previewDoc) return null;

  const displayTitle = item.title.replace(/\[|\]/g, '');
  const displayIssuer = item.issuer.replace(/\[|\]/g, '');

  return (
    <div
      className="cred-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cred-modal-title"
    >
      <div
        ref={modalRef}
        className="cred-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="cred-modal-header">
          <div>
            <span className="font-mono text-mono-label" style={{ color: 'var(--color-signal-cobalt)' }}>
              VERIFIED ARTIFACT PREVIEW &bull; {item.group.toUpperCase()}
            </span>
            <h3 id="cred-modal-title" className="cred-modal-title font-sans">
              {displayTitle}
            </h3>
            <p className="cred-modal-issuer text-xs">
              Conferred by: <strong>{displayIssuer}</strong> ({item.issueDate})
            </p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="cred-modal-close-btn font-mono text-xs"
            aria-label="Close document preview"
          >
            ✕ Close
          </button>
        </div>

        {/* Modal Body / Document Preview */}
        <div className="cred-modal-body">
          {item.previewDoc.type === 'image' ? (
            <div className="cred-modal-img-wrap">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.previewDoc.src}
                alt={item.previewDoc.alt}
                className="cred-modal-img"
              />
            </div>
          ) : (
            <div className="cred-modal-pdf-wrap">
              <iframe
                src={item.previewDoc.src}
                title={item.previewDoc.alt}
                className="cred-modal-iframe"
              />
            </div>
          )}

          {item.previewDoc.caption && (
            <p className="cred-modal-caption font-mono text-xs">
              {item.previewDoc.caption}
            </p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="cred-modal-footer">
          {item.verificationUrl && (
            <a
              href={item.verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cred-modal-verify-link font-mono text-xs"
            >
              Verify Direct on Issuer Ledger ↗
            </a>
          )}
          <button
            type="button"
            onClick={onClose}
            className="cred-modal-dismiss-btn font-sans text-xs"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
