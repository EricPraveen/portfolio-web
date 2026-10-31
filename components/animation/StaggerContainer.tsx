'use client';

import React from 'react';
import { useScrollReveal, UseScrollRevealOptions } from './useScrollReveal';

export interface StaggerContainerProps extends UseScrollRevealOptions {
  as?: React.ElementType;
  staggerDelay?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
  role?: string;
  'aria-label'?: string;
}

export function StaggerContainer({
  as: Component = 'div',
  staggerDelay = 75,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  className = '',
  style = {},
  children,
  ...rest
}: StaggerContainerProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const customStyle: React.CSSProperties = {
    ...style,
    ['--stagger-delay' as any]: `${staggerDelay}ms`,
  };

  const classes = [
    'stagger-container',
    isRevealed ? 'is-revealed' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component ref={ref} className={classes} style={customStyle} {...rest}>
      {children}
    </Component>
  );
}

export interface StaggerItemProps {
  index: number;
  as?: React.ElementType;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function StaggerItem({
  index,
  as: Component = 'div',
  className = '',
  style = {},
  children,
  ...rest
}: StaggerItemProps) {
  const customStyle: React.CSSProperties = {
    ...style,
    ['--stagger-idx' as any]: index,
  };

  return (
    <Component
      className={`stagger-item ${className}`.trim()}
      style={customStyle}
      {...rest}
    >
      {children}
    </Component>
  );
}
