import React from 'react';
import { clsx } from 'clsx';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  index?: string;
  as?: React.ElementType;
}

export function Eyebrow({
  children,
  index,
  as: Component = 'span',
  className,
  style,
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={clsx('signal-eyebrow', className)}
      style={{
        fontFamily: 'var(--font-family-mono)',
        fontSize: 'var(--font-size-xs)',
        letterSpacing: 'var(--letter-spacing-tracked)',
        textTransform: 'uppercase',
        color: 'var(--color-ink-muted)',
        fontWeight: 'var(--font-weight-medium)',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2xs)',
        ...style,
      }}
      {...props}
    >
      {index && (
        <span style={{ color: 'var(--color-signal-cobalt)', fontWeight: 'var(--font-weight-bold)' }}>
          {index}
        </span>
      )}
      {index && children && <span>/</span>}
      {children && <span>{children}</span>}
    </Component>
  );
}
