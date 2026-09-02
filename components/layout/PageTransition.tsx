'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

export interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-transition-wrapper">
      {children}
    </div>
  );
}
