import React from 'react';
import { clsx } from 'clsx';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: 'default' | 'reading' | 'wide' | 'full';
  as?: React.ElementType;
}

export function Container({
  children,
  width = 'default',
  as: Component = 'div',
  className,
  style,
  ...props
}: ContainerProps) {
  const maxWidthMap = {
    default: 'var(--container-max-width)',
    reading: 'var(--container-reading-width)',
    wide: 'var(--container-wide-width)',
    full: '100%',
  };

  return (
    <Component
      className={clsx('signal-container', className)}
      style={{
        maxWidth: maxWidthMap[width],
        margin: '0 auto',
        paddingLeft: 'var(--grid-margin)',
        paddingRight: 'var(--grid-margin)',
        width: '100%',
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
