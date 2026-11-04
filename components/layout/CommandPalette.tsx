'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useActiveSection } from './ActiveSectionContext';

export interface CommandItem {
  id: string;
  category: 'Pages' | 'Case Studies' | 'Education' | 'Actions';
  title: string;
  subtitle?: string;
  badge?: string;
  url?: string;
  action?: () => void;
  keywords?: string[];
}

export interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const router = useRouter();
  const { scrollToSection } = useActiveSection();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Define static & searchable command catalogue
  const commandItems: CommandItem[] = useMemo(() => [
    // 1. Navigation Pages
    {
      id: 'page-home',
      category: 'Pages',
      title: '01 / Home',
      subtitle: 'Engineering summary and thesis overview',
      badge: 'PAGE',
      url: '/#home',
      keywords: ['home', 'index', 'overview', 'summary', 'reveal'],
    },
    {
      id: 'page-about',
      category: 'Pages',
      title: '02 / About',
      subtitle: 'Personal bio, life timeline, and current focus',
      badge: 'PAGE',
      url: '/#about',
      keywords: ['about', 'profile', 'resume', 'cv', 'timeline'],
    },
    {
      id: 'page-education',
      category: 'Pages',
      title: '03 / Education',
      subtitle: 'Degree, student leadership, practical experience, and verified certifications',
      badge: 'PAGE',
      url: '/#education',
      keywords: ['education', 'credentials', 'certifications', 'degree', 'leadership', 'experience', 'academics'],
    },
    {
      id: 'page-projects',
      category: 'Pages',
      title: '04 / Projects',
      subtitle: 'Software, hardware, and Figma works with LinkedIn walkthroughs',
      badge: 'PAGE',
      url: '/#projects',
      keywords: ['projects', 'work', 'software', 'hardware', 'figma', 'systems'],
    },
    {
      id: 'page-skills',
      category: 'Pages',
      title: '05 / Skills & Stack',
      subtitle: 'Technical stack trays — languages, frontend, backend, devops, and tools',
      badge: 'PAGE',
      url: '/#skills',
      keywords: ['skills', 'stack', 'technologies', 'languages', 'frameworks', 'tools'],
    },
    {
      id: 'page-blog',
      category: 'Pages',
      title: '06 / Blog',
      subtitle: 'Technical engineering publications and architectural articles on Medium',
      badge: 'PAGE',
      url: '/#blog',
      keywords: ['blog', 'articles', 'writing', 'medium', 'notes'],
    },
    {
      id: 'page-contact',
      category: 'Pages',
      title: '07 / Contact',
      subtitle: 'Get in touch — electronic mail and direct networking',
      badge: 'PAGE',
      url: '/#contact',
      keywords: ['contact', 'email', 'message', 'hire', 'reach'],
    },

    // 2. Quick Actions
    {
      id: 'action-copy-email',
      category: 'Actions',
      title: 'Copy Direct Engineering Email',
      subtitle: 'Copies contact email address to clipboard',
      badge: 'CLIPBOARD',
      action: async () => {
        try {
          await navigator.clipboard.writeText('ericpraveen123@gmail.com');
          setToastMessage('Copied: ericpraveen123@gmail.com');
          setTimeout(() => setToastMessage(null), 2500);
        } catch {
          setToastMessage('Failed to copy. Email: ericpraveen123@gmail.com');
        }
      },
      keywords: ['email', 'copy', 'clipboard', 'contact', 'address'],
    },
    {
      id: 'action-github',
      category: 'Actions',
      title: 'Open GitHub Source Repositories',
      subtitle: 'Inspect open-source reference implementations and test suites',
      badge: 'EXTERNAL',
      action: () => {
        window.open('https://github.com/EricPraveen', '_blank', 'noopener,noreferrer');
      },
      keywords: ['github', 'source', 'repo', 'code', 'git'],
    },
    {
      id: 'action-linkedin',
      category: 'Actions',
      title: 'Open LinkedIn Profile',
      subtitle: 'Connect on LinkedIn, view professional experience and verified network',
      badge: 'EXTERNAL',
      action: () => {
        window.open('https://www.linkedin.com/in/ericpraveen-alricprashanth/', '_blank', 'noopener,noreferrer');
      },
      keywords: ['linkedin', 'social', 'network', 'connect', 'profile', 'experience', 'career'],
    },
    {
      id: 'action-medium',
      category: 'Actions',
      title: 'Read Medium Technical Articles',
      subtitle: 'Read publications on system architecture and software engineering',
      badge: 'EXTERNAL',
      action: () => {
        window.open('https://medium.com/@ericpraveen123', '_blank', 'noopener,noreferrer');
      },
      keywords: ['medium', 'blog', 'articles', 'writing', 'publications', 'notes'],
    },
    {
      id: 'action-resume',
      category: 'Actions',
      title: 'Download Curriculum Vitae (PDF)',
      subtitle: 'View and download verified software engineering resume',
      badge: 'PDF',
      action: () => {
        window.open('/documents/eric-praveen-resume.pdf', '_blank', 'noopener,noreferrer');
      },
      keywords: ['resume', 'cv', 'pdf', 'download', 'curriculum', 'vitae'],
    },
  ], []);

  // Filter items according to search query
  const filteredItems = useMemo(() => {
    const cleanQuery = query.trim().toLowerCase();
    if (!cleanQuery) return commandItems;

    return commandItems.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(cleanQuery);
      const inSubtitle = item.subtitle?.toLowerCase().includes(cleanQuery);
      const inCategory = item.category.toLowerCase().includes(cleanQuery);
      const inKeywords = item.keywords?.some((k) => k.toLowerCase().includes(cleanQuery));
      return inTitle || inSubtitle || inCategory || inKeywords;
    });
  }, [query, commandItems]);

  // Keep selectedIndex within bounds when results filter change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems.length]);

  // Handle opening and closing lifecycle
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
      // Auto focus input after render
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Execute selected command
  const executeCommand = useCallback((item: CommandItem) => {
    if (item.action) {
      item.action();
      if (item.id !== 'action-copy-email') {
        onClose();
      }
    } else if (item.url) {
      onClose();
      if (item.url.startsWith('/#') || item.url.startsWith('#')) {
        const targetId = item.url.replace(/^\/?#/, '');
        if (typeof window !== 'undefined' && window.location.pathname === '/') {
          scrollToSection(targetId);
          return;
        }
      }
      router.push(item.url);
    }
  }, [onClose, router, scrollToSection]);

  // Key navigation handling
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
      return;
    }

    if (filteredItems.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
      scrollItemIntoView((selectedIndex + 1) % filteredItems.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      scrollItemIntoView((selectedIndex - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const selectedItem = filteredItems[selectedIndex];
      if (selectedItem) {
        executeCommand(selectedItem);
      }
    }
  };

  const scrollItemIntoView = (index: number) => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('li');
    const target = items[index];
    if (target) {
      target.scrollIntoView({ block: 'nearest' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="cmd-palette-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        ref={dialogRef}
        className="cmd-palette-dialog"
        role="dialog"
        aria-modal="true"
        aria-label="Command Palette and Quick Navigation"
        onKeyDown={handleKeyDown}
      >
        {/* Header Search Input */}
        <div className="cmd-palette-input-box">
          <span className="cmd-palette-search-icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </span>

          <input
            ref={inputRef}
            type="text"
            role="combobox"
            aria-expanded="true"
            aria-haspopup="listbox"
            aria-autocomplete="list"
            aria-controls="cmd-palette-results"
            aria-activedescendant={
              filteredItems[selectedIndex] ? `cmd-item-${filteredItems[selectedIndex].id}` : undefined
            }
            className="cmd-palette-input font-mono"
            placeholder="Search systems, notes, credentials, or type a command..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="cmd-palette-input-meta">
            {toastMessage ? (
              <span className="cmd-palette-toast text-mono-label" role="status" aria-live="polite">
                {toastMessage}
              </span>
            ) : (
              <span className="cmd-palette-esc-hint text-mono-label font-mono">ESC TO CLOSE</span>
            )}
            <button
              type="button"
              className="cmd-palette-close-btn"
              onClick={onClose}
              aria-label="Close command palette"
            >
              &times;
            </button>
          </div>
        </div>

        {/* Results List */}
        <div className="cmd-palette-body">
          {filteredItems.length === 0 ? (
            <div className="cmd-palette-empty" role="status">
              <p className="cmd-palette-empty-title font-sans">No matching entries found</p>
              <p className="cmd-palette-empty-desc font-mono text-xs">
                Try searching for &apos;redis&apos;, &apos;concurrency&apos;, &apos;vector&apos;, &apos;notes&apos;, or &apos;email&apos;.
              </p>
            </div>
          ) : (
            <ul
              ref={listRef}
              id="cmd-palette-results"
              role="listbox"
              aria-label="Search suggestions"
              className="cmd-palette-list"
            >
              {filteredItems.map((item, idx) => {
                const isSelected = selectedIndex === idx;
                return (
                  <li
                    key={item.id}
                    id={`cmd-item-${item.id}`}
                    role="option"
                    aria-selected={isSelected}
                    className={`cmd-palette-item ${isSelected ? 'cmd-palette-item-selected' : ''}`}
                    onClick={() => executeCommand(item)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                  >
                    <div className="cmd-palette-item-main">
                      <div className="cmd-palette-item-head">
                        <span className="cmd-palette-item-category text-mono-label font-mono">
                          {item.category}
                        </span>
                        <span className="cmd-palette-item-title font-sans font-weight-bold">
                          {item.title}
                        </span>
                      </div>
                      {item.subtitle && (
                        <p className="cmd-palette-item-sub font-mono text-xs">
                          {item.subtitle}
                        </p>
                      )}
                    </div>

                    <div className="cmd-palette-item-side">
                      {item.badge && (
                        <span className="cmd-palette-item-badge text-mono-label font-mono">
                          {item.badge}
                        </span>
                      )}
                      <span className="cmd-palette-item-enter font-mono" aria-hidden="true">
                        &crarr;
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer Shortcut Ledger */}
        <div className="cmd-palette-footer">
          <div className="cmd-palette-shortcuts text-mono-label font-mono">
            <span><kbd className="cmd-kbd">&uarr;</kbd> <kbd className="cmd-kbd">&darr;</kbd> Navigate</span>
            <span><kbd className="cmd-kbd">&crarr;</kbd> Select</span>
            <span><kbd className="cmd-kbd">ESC</kbd> Close</span>
          </div>
          <div className="cmd-palette-count text-mono-label font-mono">
            {filteredItems.length} {filteredItems.length === 1 ? 'RESULT' : 'RESULTS'}
          </div>
        </div>
      </div>
    </div>
  );
}
