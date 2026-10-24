'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { useActiveSection } from './ActiveSectionContext';

export interface RailItem {
  id: string;
  num: string;
  label: string;
  href: string;
  targetId: string;
}

export const RAIL_ITEMS: RailItem[] = [
  { id: 'home', num: 'EP', label: 'INDEX', href: '/#home', targetId: 'home' },
  { id: 'home', num: '01', label: 'HOME', href: '/#home', targetId: 'home' },
  { id: 'about', num: '02', label: 'ABOUT', href: '/#about', targetId: 'about' },
  { id: 'projects', num: '03', label: 'WORK', href: '/#projects', targetId: 'projects' },
  { id: 'skills', num: '04', label: 'STACK', href: '/#skills', targetId: 'skills' },
  { id: 'education', num: '05', label: 'LOG', href: '/#education', targetId: 'education' },
  { id: 'certificates', num: '06', label: 'FIELD', href: '/#certificates', targetId: 'certificates' },
  { id: 'contact', num: '07', label: 'CONTACT', href: '/#contact', targetId: 'contact' },
];

export function LeftRailNav() {
  const pathname = usePathname() || '/';
  const { activeSection, scrollToSection } = useActiveSection();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      scrollToSection(targetId);
    }
  };

  return (
    <aside className="left-rail" aria-label="Vertical Section Navigation">
      <div className="left-rail__inner">
        {/* Rail Brand / Top Item */}
        <Link
          href="/#home"
          className="left-rail__item left-rail__item--brand"
          aria-label="Eric Praveen Index"
          onClick={(e) => handleClick(e, 'home')}
        >
          <span className="left-rail__brand-indicator" aria-hidden="true" />
          <span className="left-rail__text">EP / INDEX</span>
        </Link>

        {/* Section Links */}
        <nav className="left-rail__nav" role="list">
          {RAIL_ITEMS.slice(1).map((item) => {
            const isActive = activeSection === item.id;
            const isTealDivider = item.id === 'projects'; // teal divider after WORK (Plate 03)
            const isOrangeDivider = item.id === 'education'; // orange divider after LOG (Plate 06)

            return (
              <React.Fragment key={`${item.num}-${item.id}`}>
                <Link
                  href={item.href}
                  className={clsx('left-rail__item', {
                    'is-active': isActive,
                  })}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => handleClick(e, item.targetId)}
                >
                  <span className="left-rail__text">
                    <span className="left-rail__num">{item.num}</span>{' '}
                    <span className="left-rail__label">{item.label}</span>
                  </span>
                </Link>
                {isTealDivider && (
                  <div className="left-rail__divider" aria-hidden="true" />
                )}
                {isOrangeDivider && (
                  <div className="left-rail__divider left-rail__divider--orange" aria-hidden="true" />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
