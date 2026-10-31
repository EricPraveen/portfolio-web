'use client';

import React from 'react';
import { ScrollReveal, ScrollRevealProps } from './ScrollReveal';

export type FadeUpProps = Omit<ScrollRevealProps, 'variant'>;

export function FadeUp(props: FadeUpProps) {
  return <ScrollReveal variant="fade-up" {...props} />;
}
