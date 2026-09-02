import React from 'react';
import { clsx } from 'clsx';
import { ProjectStatus } from '@/content/types';

export interface StatusStampProps extends React.HTMLAttributes<HTMLSpanElement> {
  status: ProjectStatus;
  variant?: 'stamp' | 'badge' | 'minimal';
  showIndicator?: boolean;
}

export function StatusStamp({
  status,
  variant = 'stamp',
  showIndicator = true,
  className,
  style,
  ...props
}: StatusStampProps) {
  const configMap: Record<
    ProjectStatus,
    { label: string; symbol: string; bg: string; color: string; border: string }
  > = {
    shipped: {
      label: 'SHIPPED',
      symbol: '●',
      bg: 'var(--color-mineral-ink)',
      color: 'var(--color-lab-chartreuse)',
      border: '1px solid var(--color-mineral-ink)',
    },
    active: {
      label: 'ACTIVE',
      symbol: '⚡',
      bg: 'var(--color-lab-chartreuse)',
      color: 'var(--color-lab-chartreuse-ink)',
      border: '1px solid #B8DF3D',
    },
    experimental: {
      label: 'EXPERIMENTAL',
      symbol: '▲',
      bg: 'var(--color-oxide-subtle)',
      color: 'var(--color-oxide-dark)',
      border: '1px solid rgba(196, 91, 67, 0.3)',
    },
    archived: {
      label: 'ARCHIVED',
      symbol: '○',
      bg: 'var(--color-bone-paper-subtle)',
      color: 'var(--color-ink-muted)',
      border: 'var(--border-hairline)',
    },
  };

  const current = configMap[status] || configMap.shipped;

  return (
    <span
      className={clsx('signal-status-stamp', className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.35rem',
        fontFamily: 'var(--font-family-mono)',
        fontSize: 'var(--font-size-xs)',
        fontWeight: 'var(--font-weight-semibold)',
        letterSpacing: 'var(--letter-spacing-tracked)',
        textTransform: 'uppercase',
        padding: variant === 'minimal' ? '0' : '0.2rem 0.55rem',
        borderRadius: 'var(--radius-subtle)',
        backgroundColor: variant === 'minimal' ? 'transparent' : current.bg,
        color: current.color,
        border: variant === 'minimal' ? 'none' : current.border,
        lineHeight: 1.2,
        ...style,
      }}
      {...props}
    >
      {showIndicator && (
        <span style={{ fontSize: '0.7em', lineHeight: 1 }}>{current.symbol}</span>
      )}
      <span>{current.label}</span>
    </span>
  );
}
