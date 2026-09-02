import React from 'react';
import { clsx } from 'clsx';

export interface ClusterProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg';
  align?: 'flex-start' | 'center' | 'flex-end' | 'baseline';
  justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  as?: React.ElementType;
}

export function Cluster({
  children,
  gap = 'sm',
  align = 'center',
  justify = 'flex-start',
  as: Component = 'div',
  className,
  style,
  ...props
}: ClusterProps) {
  const gapMap = {
    '3xs': 'var(--space-3xs)',
    '2xs': 'var(--space-2xs)',
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
  };

  return (
    <Component
      className={clsx('signal-cluster', className)}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: align,
        justifyContent: justify,
        gap: gapMap[gap],
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
