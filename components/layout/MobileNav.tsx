'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { NAV_ITEMS } from '@/lib/navigation';
import { Profile } from '@/content/types';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCommand?: () => void;
  profile: Profile;
  triggerRef: React.RefObject<HTMLButtonElement>;
}

export function MobileNav({
  isOpen,
  onClose,
  onOpenCommand,
  profile,
  triggerRef,
}: MobileNavProps) {
  const pathname = usePathname() || '/';
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // 1. Body scroll lock when drawer is open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      
      // Calculate scrollbar width to prevent layout shift
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollBarWidth > 0) {
        document.body.style.paddingRight = `${scrollBarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      // Focus close button upon opening
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isOpen]);

  // 2. Escape key listener & Focus Trap
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        triggerRef.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        if (!drawerRef.current) return;
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, triggerRef]);

  // If closed and not animating, return null or hidden
  if (!isOpen) return null;

  return (
    <div
      className="mobile-nav-portal"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      id="mobile-navigation-drawer"
    >
      {/* Backdrop */}
      <div
        className="mobile-nav-backdrop"
        onClick={() => {
          onClose();
          triggerRef.current?.focus();
        }}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="mobile-nav-drawer" ref={drawerRef}>
        {/* Drawer Header */}
        <div className="mobile-nav-header">
          <div className="mobile-nav-header-meta">
            <span className="mobile-nav-status-indicator" aria-hidden="true">
              <span className="mobile-nav-status-dot" />
            </span>
            <span className="mobile-nav-status-text text-mono-label">
              {profile.availability.status} &bull; {profile.location.city}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-nav-close-btn"
            onClick={() => {
              onClose();
              triggerRef.current?.focus();
            }}
            aria-label="Close navigation menu"
          >
            <span className="mobile-nav-close-label text-mono-label">Close</span>
            <svg
              className="mobile-nav-close-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Search / Command Trigger for Mobile */}
        {onOpenCommand && (
          <div className="mobile-nav-search-wrap">
            <button
              type="button"
              className="mobile-nav-search-btn"
              onClick={onOpenCommand}
              aria-label="Open command palette search"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span className="mobile-nav-search-text font-mono text-sm">Quick Search / Cmd &bull; ⌘K</span>
            </button>
          </div>
        )}

        {/* Navigation List */}
        <nav className="mobile-nav-body" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = item.matchPattern
                ? item.matchPattern(pathname)
                : pathname === item.href;

              return (
                <li key={item.href} className="mobile-nav-item">
                  <Link
                    href={item.href}
                    className={clsx('mobile-nav-link', {
                      'is-active': isActive,
                    })}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => {
                      onClose();
                      triggerRef.current?.focus();
                    }}
                  >
                    <div className="mobile-nav-link-content">
                      <span className="mobile-nav-index font-mono">
                        {item.index}
                      </span>
                      <span className="mobile-nav-label font-sans">
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <span className="mobile-nav-active-badge text-mono-label">
                        Active
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer */}
        <div className="mobile-nav-footer">
          <div className="mobile-nav-footer-colophon">
            <p className="text-mono-label" style={{ color: 'var(--color-ink-faint)', marginBottom: '0.25rem' }}>
              Direct Inquiries
            </p>
            <a
              href={`mailto:${profile.contactEmail}`}
              className="mobile-nav-email font-mono"
            >
              {profile.contactEmail}
            </a>
          </div>

          <div className="mobile-nav-socials">
            {profile.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-nav-social-link text-mono-label"
              >
                {social.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
