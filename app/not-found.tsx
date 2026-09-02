import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 / Ledger Entry Not Found',
  description: 'The requested route does not exist in the Signal Ledger index.',
};

export default function NotFound() {
  return (
    <div className="container" style={{ padding: 'var(--space-3xl) var(--grid-margin)' }}>
      <div
        style={{
          maxWidth: 'var(--container-reading-width)',
          margin: '0 auto',
          border: 'var(--border-rule)',
          borderRadius: 'var(--radius-default)',
          padding: 'var(--space-xl)',
          backgroundColor: 'var(--color-bone-paper-elevated)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span className="text-mono-label font-mono" style={{ color: 'var(--color-oxide)', fontWeight: 'bold' }}>
            STATUS 404 &bull; RECORD UNRESOLVED
          </span>
        </div>

        <h1 className="font-heading-2xl font-display" style={{ marginBottom: '1rem', color: 'var(--color-mineral-ink)' }}>
          Ledger Entry Not Found
        </h1>

        <p className="text-body" style={{ color: 'var(--color-ink-muted)', marginBottom: '1.5rem', lineHeight: 'var(--line-height-base)' }}>
          The requested route or artifact ID does not correspond to an active production case study, architectural spec, or verified record in this ledger.
        </p>

        <div
          style={{
            padding: '1rem',
            backgroundColor: 'var(--color-bone-paper-subtle)',
            border: '1px solid var(--color-steel-light)',
            borderRadius: 'var(--radius-subtle)',
            marginBottom: '2rem',
            fontFamily: 'var(--font-family-mono)',
            fontSize: '0.8125rem',
          }}
        >
          <span style={{ color: 'var(--color-signal-cobalt)', fontWeight: 'bold' }}>QUICK SEARCH:</span> Press{' '}
          <kbd
            style={{
              padding: '0.15rem 0.4rem',
              backgroundColor: 'var(--color-bone-paper)',
              border: '1px solid var(--color-steel-light)',
              borderRadius: '2px',
            }}
          >
            ⌘K
          </kbd>{' '}
          or{' '}
          <kbd
            style={{
              padding: '0.15rem 0.4rem',
              backgroundColor: 'var(--color-bone-paper)',
              border: '1px solid var(--color-steel-light)',
              borderRadius: '2px',
            }}
          >
            /
          </kbd>{' '}
          anywhere to search all production systems, technical notes, and credentials.
        </div>

        <div>
          <h2 className="text-mono-label font-mono" style={{ marginBottom: '0.75rem' }}>
            PRIMARY LEDGER DIRECTORIES:
          </h2>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.5rem',
            }}
          >
            <li>
              <Link href="/" className="font-mono" style={{ color: 'var(--color-signal-cobalt)' }}>
                &rarr; 00 / Overview Ledger & System Summary
              </Link>
            </li>
            <li>
              <Link href="/work" className="font-mono" style={{ color: 'var(--color-signal-cobalt)' }}>
                &rarr; 01 / Production Systems & Case Studies Catalog
              </Link>
            </li>
            <li>
              <Link href="/notes" className="font-mono" style={{ color: 'var(--color-signal-cobalt)' }}>
                &rarr; 02 / Technical Notes & Postmortems
              </Link>
            </li>
            <li>
              <Link href="/contact" className="font-mono" style={{ color: 'var(--color-signal-cobalt)' }}>
                &rarr; 05 / Direct Communication & Inquiry
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
