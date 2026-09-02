import React from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { EvidenceType } from '@/content/types';

export interface EvidenceLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  label: string;
  evidenceType?: EvidenceType;
  isPrimary?: boolean;
  isExternal?: boolean;
  note?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function EvidenceLink({
  href,
  label,
  evidenceType,
  isPrimary = false,
  isExternal = true,
  note,
  size = 'md',
  className,
  style,
  ...props
}: EvidenceLinkProps) {
  const isExternalUrl = isExternal || href.startsWith('http') || href.startsWith('mailto:');

  const paddingMap = {
    sm: '0.35rem 0.65rem',
    md: '0.5rem 0.9rem',
    lg: '0.75rem 1.25rem',
  };

  const fontSizeMap = {
    sm: 'var(--font-size-xs)',
    md: 'var(--font-size-sm)',
    lg: 'var(--font-size-base)',
  };

  const linkStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.4rem',
    fontFamily: 'var(--font-family-mono)',
    fontSize: fontSizeMap[size],
    fontWeight: 'var(--font-weight-medium)',
    letterSpacing: 'var(--letter-spacing-mono)',
    padding: paddingMap[size],
    borderRadius: 'var(--radius-default)',
    textDecoration: 'none',
    transition: 'background var(--motion-duration-fast) var(--motion-ease-out), color var(--motion-duration-fast) var(--motion-ease-out), border-color var(--motion-duration-fast) var(--motion-ease-out)',
    ...(isPrimary
      ? {
          background: 'var(--color-mineral-ink)',
          color: 'var(--color-bone-paper)',
          border: '1px solid var(--color-mineral-ink)',
        }
      : {
          background: 'var(--color-bone-paper-elevated)',
          color: 'var(--color-mineral-ink)',
          border: 'var(--border-hairline)',
        }),
    ...style,
  };

  const content = (
    <>
      <span>{label}</span>
      <span aria-hidden="true" style={{ fontSize: '1.1em', lineHeight: 1 }}>
        {isExternalUrl ? '↗' : '→'}
      </span>
      {note && (
        <span
          style={{
            fontSize: '0.75em',
            color: isPrimary ? 'var(--color-steel-light)' : 'var(--color-ink-faint)',
            marginLeft: '0.25rem',
          }}
        >
          ({note})
        </span>
      )}
    </>
  );

  if (isExternalUrl) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx('signal-evidence-link', className)}
        style={linkStyle}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className={clsx('signal-evidence-link', className)}
      style={linkStyle}
      {...props}
    >
      {content}
    </Link>
  );
}
