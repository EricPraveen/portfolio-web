'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { NAV_ITEMS } from '@/lib/navigation';

export interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ className, onItemClick }: NavigationProps) {
  const pathname = usePathname() || '/';

  return (
    <nav
      className={clsx('editorial-nav', className)}
      aria-label="Main Navigation"
    >
      <ul className="editorial-nav-list" role="list">
        {NAV_ITEMS.map((item) => {
          const isActive = item.matchPattern
            ? item.matchPattern(pathname)
            : pathname === item.href;

          return (
            <li key={item.href} className="editorial-nav-item">
              <Link
                href={item.href}
                className={clsx('editorial-nav-link', {
                  'is-active': isActive,
                })}
                aria-current={isActive ? 'page' : undefined}
                onClick={onItemClick}
              >
                <span className="editorial-nav-index" aria-hidden="true">
                  {item.index}
                </span>
                <span className="editorial-nav-slash" aria-hidden="true">
                  /
                </span>
                <span className="editorial-nav-label">{item.label}</span>
                {isActive && (
                  <span className="editorial-nav-active-indicator" aria-hidden="true" />
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
