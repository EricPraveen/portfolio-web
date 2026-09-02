import React from 'react';
import { clsx } from 'clsx';

export interface MetadataItemProps {
  label: string;
  value: React.ReactNode;
  isMono?: boolean;
}

export function MetadataItem({ label, value, isMono = false }: MetadataItemProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3xs)' }}>
      <span
        style={{
          fontFamily: 'var(--font-family-mono)',
          fontSize: 'var(--font-size-xs)',
          letterSpacing: 'var(--letter-spacing-tracked)',
          textTransform: 'uppercase',
          color: 'var(--color-ink-faint)',
          fontWeight: 'var(--font-weight-medium)',
        }}
      >
        {label}
      </span>
      <div
        style={{
          fontFamily: isMono ? 'var(--font-family-mono)' : 'inherit',
          fontSize: 'var(--font-size-sm)',
          fontWeight: 'var(--font-weight-semibold)',
          color: 'var(--color-mineral-ink)',
          lineHeight: 'var(--line-height-snug)',
        }}
      >
        {value}
      </div>
    </div>
  );
}

export interface MetadataListProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: 'grid' | 'stack' | 'cluster';
  columns?: 2 | 3 | 4;
}

export function MetadataList({
  children,
  layout = 'grid',
  columns = 3,
  className,
  style,
  ...props
}: MetadataListProps) {
  const layoutStyles: Record<string, React.CSSProperties> = {
    grid: {
      display: 'grid',
      gridTemplateColumns: `repeat(auto-fit, minmax(180px, 1fr))`,
      gap: 'var(--space-md)',
      padding: 'var(--space-md)',
      background: 'var(--color-bone-paper-subtle)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-default)',
    },
    stack: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-sm)',
      padding: 'var(--space-md)',
      background: 'var(--color-bone-paper-subtle)',
      border: 'var(--border-hairline)',
      borderRadius: 'var(--radius-default)',
    },
    cluster: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-lg)',
      padding: 'var(--space-md) 0',
    },
  };

  return (
    <div
      className={clsx('signal-metadata-list', className)}
      style={{
        ...layoutStyles[layout],
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
