import React from 'react';
import { clsx } from 'clsx';

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 12 | 6 | 4 | 3 | 2 | 1;
  gap?: 'sm' | 'md' | 'lg' | 'none';
  as?: React.ElementType;
}

export function Grid({
  children,
  columns = 12,
  gap = 'md',
  as: Component = 'div',
  className,
  style,
  ...props
}: GridProps) {
  const gapMap = {
    sm: 'var(--space-sm)',
    md: 'var(--grid-gutter)',
    lg: 'var(--space-xl)',
    none: '0',
  };

  return (
    <Component
      className={clsx('signal-grid', className)}
      style={{
        display: 'grid',
        gap: gapMap[gap],
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

export interface GridColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'full';
  tabletSpan?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: React.ElementType;
}

export function GridCol({
  children,
  span = 12,
  tabletSpan,
  as: Component = 'div',
  className,
  style,
  ...props
}: GridColProps) {
  const spanValue = span === 'full' ? '1 / -1' : `span ${span}`;

  return (
    <Component
      className={clsx('signal-grid-col', className)}
      style={{
        gridColumn: spanValue,
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
