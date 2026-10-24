'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { NAV_ITEMS } from '@/lib/navigation';
import { useActiveSection } from './ActiveSectionContext';

export interface NavigationProps {
  className?: string;
  onItemClick?: () => void;
}

export function Navigation({ className, onItemClick }: NavigationProps) {
  const pathname = usePathname() || '/';
  const { activeSection, scrollToSection } = useActiveSection();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    onItemClick?.();
    if (pathname === '/') {
      e.preventDefault();
      scrollToSection(targetId);
    }
  };

  return (
    <nav
      className={clsx('editorial-nav', className)}
      aria-label="Main Navigation"
    >
      <ul className="editorial-nav-list" role="list">
        {NAV_ITEMS.map((item) => {
          const isActive =
            pathname === '/'
              ? activeSection === item.targetId
              : item.matchPattern
              ? item.matchPattern(pathname)
              : pathname === item.href;

          return (
            <li key={item.href} className="editorial-nav-item">
              <Link
                href={item.href}
                className={clsx('editorial-nav-link', {
                  'is-active': isActive,
                })}
                aria-current={isActive ? 'location' : undefined}
                onClick={(e) => handleLinkClick(e, item.targetId)}
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
