'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorBoundary({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Signal Ledger Application Exception:', error);
  }, [error]);

  return (
    <div className="container" style={{ padding: 'var(--space-3xl) var(--grid-margin)' }}>
      <div
        role="alert"
        aria-labelledby="error-title"
        style={{
          maxWidth: 'var(--container-reading-width)',
          margin: '0 auto',
          border: '1px solid var(--color-oxide)',
          borderLeft: '4px solid var(--color-oxide)',
          borderRadius: 'var(--radius-default)',
          padding: 'var(--space-xl)',
          backgroundColor: 'var(--color-bone-paper-elevated)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span className="text-mono-label font-mono" style={{ color: 'var(--color-oxide-dark)', fontWeight: 'bold' }}>
            SYSTEM FAULT EXCEPTION
          </span>
          {error.digest && (
            <span className="text-mono-label font-mono" style={{ color: 'var(--color-ink-faint)', fontSize: '0.625rem' }}>
              DIGEST: {error.digest}
            </span>
          )}
        </div>

        <h1 id="error-title" className="font-heading-2xl font-display" style={{ marginBottom: '1rem', color: 'var(--color-mineral-ink)' }}>
          Ledger Renderer Exception
        </h1>

        <p className="text-body" style={{ color: 'var(--color-ink-muted)', marginBottom: '1.5rem', lineHeight: 'var(--line-height-base)' }}>
          An unhandled runtime error interrupted client rendering. The execution state has been isolated to prevent cascade failures.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn--primary"
            style={{
              padding: '0.6rem 1.25rem',
              backgroundColor: 'var(--color-signal-cobalt)',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: 'var(--radius-subtle)',
              fontFamily: 'var(--font-family-mono)',
              fontSize: '0.875rem',
              cursor: 'pointer',
            }}
          >
            &circlearrowright; Re-initialize Ledger State
          </button>

          <Link
            href="/"
            style={{
              padding: '0.6rem 1.25rem',
              border: '1px solid var(--color-steel-light)',
              borderRadius: 'var(--radius-subtle)',
              color: 'var(--color-mineral-ink)',
              fontFamily: 'var(--font-family-mono)',
              fontSize: '0.875rem',
              textDecoration: 'none',
            }}
          >
            Return to Overview Ledger
          </Link>
        </div>
      </div>
    </div>
  );
}
