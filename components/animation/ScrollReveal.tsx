'use client';

import React from 'react';
import { useScrollReveal, UseScrollRevealOptions } from './useScrollReveal';

export type ScrollRevealVariant =
  | 'fade-up'
  | 'fade-in'
  | 'slide-left'
  | 'slide-right'
  | 'scale-in';

export interface ScrollRevealProps extends UseScrollRevealOptions {
  as?: React.ElementType;
  variant?: ScrollRevealVariant;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
  id?: string;
  role?: string;
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export function ScrollReveal({
  as: Component = 'div',
  variant = 'fade-up',
  delay = 0,
  duration = 750,
  threshold = 0.12,
  rootMargin = '0px 0px -40px 0px',
  triggerOnce = true,
  className = '',
  style = {},
  children,
  ...rest
}: ScrollRevealProps) {
  const { ref, isRevealed } = useScrollReveal<HTMLDivElement>({
    threshold,
    rootMargin,
    triggerOnce,
    delay,
  });

  const customStyle: React.CSSProperties = {
    ...style,
    ['--reveal-duration' as any]: `${duration}ms`,
    ['--reveal-delay' as any]: `${delay}ms`,
  };

  const classes = [
    'scroll-reveal',
    `scroll-reveal--${variant}`,
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
