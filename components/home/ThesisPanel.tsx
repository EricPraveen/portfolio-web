'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Profile } from '@/content/types';

const ROLES = [
  'PRODUCT BUILDER',
  'TECHNICAL WRITER',
  'FULL-STACK DEVELOPER',
];

export interface ThesisPanelProps {
  profile: Profile;
  onOpenCommand?: () => void;
}

export function ThesisPanel({ profile, onOpenCommand }: ThesisPanelProps) {
  const [activeLetterIdx, setActiveLetterIdx] = useState<number>(6); // 'N' in PRAVEEN is index 6
  const [roleIndex, setRoleIndex] = useState<number>(0);
  const [displayText, setDisplayText] = useState<string>(ROLES[0]);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  // Typewriter effect: types out word, waits 1s, deletes, and switches to next
  useEffect(() => {
    const currentFullText = ROLES[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting) {
      if (displayText === currentFullText) {
        // Wait 1 second (1000ms) after completing word before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1000);
      } else {
        // Typing forward
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        }, 80);
      }
    } else {
      if (displayText === '') {
        // Brief pause when erased before typing next word
        timer = setTimeout(() => {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }, 220);
      } else {
        // Deleting backward
        timer = setTimeout(() => {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        }, 40);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const rawCity = profile.location.city.replace(/\[|\]/g, '');
  const rawCountry = profile.location.country.replace(/\[|\]/g, '');
  const locationStr = `${rawCity}, ${rawCountry}`.toUpperCase();

  const praveenLetters = ['P', 'R', 'A', 'V', 'E', 'E', 'N'];

  const handleCmdClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenCommand) {
      onOpenCommand();
    } else {
      // Trigger global Cmd+K event
      window.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'k', metaKey: true, bubbles: true })
      );
    }
  };

  return (
    <section id="home" className="editorial-hero" aria-label="Hero Section">
      <span id="hero" className="section-anchor" aria-hidden="true" />
      <span id="top" className="section-anchor" aria-hidden="true" />
      <span id="reveal" className="section-anchor" aria-hidden="true" />

      <div className="editorial-hero__stage">
        {/* 1. TOP META BAR */}
        <div className="editorial-hero__topbar hero-animate-fade-up" style={{ animationDelay: '80ms' }}>
          <span
            className="editorial-hero__role font-mono"
            aria-label={`Specialization: ${ROLES[roleIndex]}`}
          >
            <span aria-hidden="true">{displayText}</span>
            <span className="editorial-hero__role-cursor" aria-hidden="true" />
            <span className="sr-only">{ROLES[roleIndex]}</span>
          </span>
          <div className="editorial-hero__topbar-line" aria-hidden="true" />
          <span className="editorial-hero__location font-mono">{locationStr}</span>
        </div>

        {/* 2. MASSIVE TYPOGRAPHIC CENTERPIECE + PORTRAIT CARD */}
        <div className="editorial-hero__centerpiece">
          <div className="editorial-hero__identity-column hero-animate-slide-left" style={{ animationDelay: '180ms' }}>
            <h1 className="editorial-hero__name-block" aria-label="Eric Praveen">
              {/* First Name: ERIC (Solid Filled Bold Typography - No Hover) */}
              <div className="editorial-hero__name-row editorial-hero__name-row--solid">
                <span className="editorial-hero__solid-word font-display">ERIC</span>
              </div>

              {/* Last Name: PRAVEEN (Architectural Wireframe Outline with Interactive Accent Letter) */}
              <div className="editorial-hero__name-row editorial-hero__name-row--outline">
                <div className="editorial-hero__letters font-display" role="presentation">
                  {praveenLetters.map((char, idx) => {
                    const isActive = activeLetterIdx === idx;
                    return (
                      <span
                        key={idx}
                        className={`editorial-hero__letter ${isActive ? 'is-active' : ''}`}
                        onMouseEnter={() => setActiveLetterIdx(idx)}
                        tabIndex={0}
                        onFocus={() => setActiveLetterIdx(idx)}
                        role="button"
                        aria-label={`Letter ${char}`}
                      >
                        <span className="editorial-hero__letter-inner">{char}</span>
                        {isActive && (
                          <span className="editorial-hero__letter-target" aria-hidden="true">
                            <span className="editorial-hero__target-dot" />
                          </span>
                        )}
                      </span>
                    );
                  })}
                </div>
              </div>
            </h1>

            {/* Social Links Row directly under the name */}
            <div className="editorial-hero__social-strip hero-animate-fade-up" style={{ animationDelay: '300ms' }} aria-label="Social and Professional Profiles">
              <a
                href="https://github.com/EricPraveen"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="GitHub Profile (opens in a new tab)"
                title="GitHub — @EricPraveen"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/ericpraveen-alricprashanth/"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="LinkedIn Profile (opens in a new tab)"
                title="LinkedIn — Eric Praveen Alric Prashanth"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
              </a>

              <a
                href="https://medium.com/@ericpraveen123"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label="Medium Profile (opens in a new tab)"
                title="Medium — @ericpraveen123"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right-Side Architectural Tech Portrait Card */}
          <div className="editorial-hero__portrait hero-animate-scale-in" style={{ animationDelay: '250ms' }} aria-label="Profile Photo">
            <div className="editorial-hero__portrait-frame arcade-box">
              {/* Futuristic Corner L-Brackets */}
              <span className="portrait-corner portrait-corner--tl" aria-hidden="true" />
              <span className="portrait-corner portrait-corner--tr" aria-hidden="true" />
              <span className="portrait-corner portrait-corner--bl" aria-hidden="true" />
              <span className="portrait-corner portrait-corner--br" aria-hidden="true" />

              <div className="editorial-hero__portrait-inner">
                <Image
                  src="/images/profile.jpeg"
                  alt="Eric Praveen — Full-Stack Developer"
                  width={420}
                  height={520}
                  className="editorial-hero__portrait-photo"
                  priority
                />
                <div className="editorial-hero__portrait-glow" aria-hidden="true" />
                <div className="editorial-hero__portrait-scanlines" aria-hidden="true" />
              </div>

              <div className="editorial-hero__portrait-footer">
                <span className="editorial-hero__portrait-status-dot" aria-hidden="true" />
                <span className="editorial-hero__portrait-status-text font-mono text-mono-label">
                  ERIC PRAVEEN // MORATUWA
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. HAIRLINE SEPARATOR */}
        <div className="editorial-hero__divider hero-animate-fade-up" style={{ animationDelay: '380ms' }} aria-hidden="true" />

        {/* 4. STATEMENT / PITCH ROW */}
        <div className="editorial-hero__pitch-row hero-animate-fade-up" style={{ animationDelay: '460ms' }}>
          <p className="editorial-hero__pitch-text font-sans">
            Third-year IT undergraduate at University of Moratuwa — building full-stack web applications and robust distributed backends with clean code and verifiable reliability.
          </p>
          <div className="editorial-hero__radar-beacon" title="System Active">
            <span className="editorial-hero__radar-ring" />
            <span className="editorial-hero__radar-point" />
          </div>
        </div>

        {/* 5. BOTTOM ACTION CONTROLS */}
        <div className="editorial-hero__bottom-bar hero-animate-fade-up" style={{ animationDelay: '560ms' }}>
          <div className="editorial-hero__actions">
            <a href="#projects" className="hero-btn hero-btn--dark">
              <span>SEE THE WORK</span>
              <span className="hero-btn__arrow" aria-hidden="true">&darr;</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn--volt">
              <span>GET IN TOUCH</span>
              <span className="hero-btn__arrow" aria-hidden="true">&#x2197;</span>
            </a>
          </div>

          <div className="editorial-hero__scroll-cmd">
            <span className="editorial-hero__scroll-hint font-mono">SCROLL TO OPEN</span>
            <button
              type="button"
              className="hero-cmd-badge font-mono"
              onClick={handleCmdClick}
              aria-label="Open command palette (Press Command K)"
              title="Quick Search & Navigation (⌘K)"
            >
              <kbd className="hero-cmd-key">⌘</kbd>
              <kbd className="hero-cmd-key">K</kbd>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
