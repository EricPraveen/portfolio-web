import React from 'react';
import { clsx } from 'clsx';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  as?: React.ElementType;
}

export function Stack({
  children,
  gap = 'md',
  as: Component = 'div',
  className,
  style,
  ...props
}: StackProps) {
  const gapMap = {
    '3xs': 'var(--space-3xs)',
    '2xs': 'var(--space-2xs)',
    xs: 'var(--space-xs)',
    sm: 'var(--space-sm)',
    md: 'var(--space-md)',
    lg: 'var(--space-lg)',
    xl: 'var(--space-xl)',
    '2xl': 'var(--space-2xl)',
  };

  return (
    <Component
      className={clsx('signal-stack', className)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: gapMap[gap],
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
