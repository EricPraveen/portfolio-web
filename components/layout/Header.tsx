'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { Navigation } from './Navigation';
import { MobileNav } from './MobileNav';
import { CommandPalette } from './CommandPalette';
import { getCurrentSection } from '@/lib/navigation';
import { Profile } from '@/content/types';

export interface HeaderProps {
  profile: Profile;
}

export function Header({ profile }: HeaderProps) {
  const pathname = usePathname() || '/';
  const currentSection = getCurrentSection(pathname);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const mobileTriggerRef = useRef<HTMLButtonElement>(null);
  const cmdTriggerRef = useRef<HTMLButtonElement>(null);

  // Global keyboard shortcut listener for Cmd+K / Ctrl+K and '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const isInput =
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable;

      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        setIsCommandOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Generate clean initials for compact identity mark
  const rawFullName = profile.fullName.replace(/\[|\]/g, '').trim();
  const rawPreferredName = profile.preferredName.replace(/\[|\]/g, '').trim();
  const displayName = rawPreferredName.includes(' / ')
    ? rawPreferredName.split(' / ')[0].trim()
    : rawPreferredName || rawFullName;

  const initials = rawFullName
    .split(' ')
    .filter((word) => word.length > 0 && !word.includes('/'))
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase() || 'SL';

  return (
    <>
      <header className="app-header" role="banner">
        <div className="app-header-inner">
          {/* 1. Identity Mark & Name Area */}
          <div className="app-header-brand">
            <Link
              href="/"
              className="app-header-brand-link"
              aria-label={`${profile.fullName} - Home`}
            >
              <span className="app-header-monogram font-mono" aria-hidden="true">
                {initials}
              </span>
              <div className="app-header-identity">
                <span className="app-header-name font-sans">
                  {displayName}
                </span>
                <span className="app-header-tag text-mono-label">
                  Signal Ledger
                </span>
              </div>
            </Link>

            {/* Current Section Indicator */}
            <div className="app-header-section-indicator" aria-hidden="true">
              <span className="app-header-section-divider">/</span>
              <span className="app-header-section-badge text-mono-label">
                {currentSection.index} &bull; {currentSection.label}
              </span>
            </div>
          </div>

          {/* 2. Desktop Navigation */}
          <div className="app-header-nav-desktop">
            <Navigation />
          </div>

          {/* 3. Command Palette Trigger & Availability Badge & Mobile Toggle */}
          <div className="app-header-actions">
            {/* Quick Command Palette Button */}
            <button
              ref={cmdTriggerRef}
              type="button"
              className="app-header-cmd-trigger"
              onClick={() => setIsCommandOpen(true)}
              aria-label="Open command palette (Press Command K)"
              title="Quick Search & Commands (⌘K or /)"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="app-header-cmd-text text-mono-label">Search</span>
              <kbd className="app-header-cmd-kbd font-mono">⌘K</kbd>
            </button>

            <div className="app-header-availability" title={`Status: ${profile.availability.status}`}>
              <span className="app-header-status-beacon" aria-hidden="true">
                <span className="app-header-status-pulse" />
              </span>
              <span className="app-header-status-label text-mono-label">
                {profile.availability.status}
              </span>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              ref={mobileTriggerRef}
              type="button"
              className="app-header-mobile-trigger"
              onClick={() => setIsMobileNavOpen(true)}
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation-drawer"
              aria-label="Open navigation menu"
            >
              <span className="mobile-trigger-text text-mono-label">Menu</span>
              <svg
                className="mobile-trigger-icon"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Global Command Palette Dialog */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => {
          setIsCommandOpen(false);
          cmdTriggerRef.current?.focus();
        }}
      />

      {/* Mobile Navigation Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        onOpenCommand={() => {
          setIsMobileNavOpen(false);
          setIsCommandOpen(true);
        }}
        profile={profile}
        triggerRef={mobileTriggerRef}
      />
    </>
  );
}
