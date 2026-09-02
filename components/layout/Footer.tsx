import React from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/lib/navigation';
import { Profile } from '@/content/types';

export interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer" role="contentinfo">
      <div className="app-footer-inner">
        {/* Top Section: 4-Column Editorial Ledger Grid */}
        <div className="app-footer-grid">
          {/* Column 1: Identity & Availability */}
          <div className="app-footer-col app-footer-col-identity">
            <div className="app-footer-brand">
              <span className="app-footer-monogram font-mono">
                {profile.fullName
                  .replace(/\[|\]/g, '')
                  .split(' ')
                  .filter(Boolean)
                  .map((w) => w[0])
                  .join('')
                  .slice(0, 2)
                  .toUpperCase() || 'SL'}
              </span>
              <div>
                <h2 className="app-footer-title font-sans">
                  {profile.fullName.replace(/\[|\]/g, '')}
                </h2>
                <p className="app-footer-subtitle text-mono-label">
                  {profile.title.replace(/\[|\]/g, '')}
                </p>
              </div>
            </div>

            <div className="app-footer-availability-card">
              <div className="app-footer-availability-header">
                <span className="app-footer-status-dot" aria-hidden="true" />
                <span className="text-mono-label" style={{ color: 'var(--color-mineral-ink)', fontWeight: 600 }}>
                  {profile.availability.status}
                </span>
              </div>
              <p className="app-footer-availability-notes text-sm">
                {profile.availability.stage.replace(/\[|\]/g, '')}
                {profile.availability.notes ? ` • ${profile.availability.notes.replace(/\[|\]/g, '')}` : ''}
              </p>
              <p className="app-footer-location text-mono-label">
                {profile.location.city.replace(/\[|\]/g, '')}, {profile.location.country.replace(/\[|\]/g, '')} ({profile.location.timezone.replace(/\[|\]/g, '')})
              </p>
            </div>
          </div>

          {/* Column 2: Key Navigation / Sitemap */}
          <div className="app-footer-col">
            <h3 className="app-footer-heading text-mono-label">Sitemap & Index</h3>
            <ul className="app-footer-nav-list" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} className="app-footer-nav-item">
                  <Link href={item.href} className="app-footer-nav-link">
                    <span className="app-footer-nav-index font-mono" aria-hidden="true">
                      {item.index}
                    </span>
                    <span className="app-footer-nav-slash" aria-hidden="true">
                      /
                    </span>
                    <span className="app-footer-nav-label">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Outbound Signals */}
          <div className="app-footer-col">
            <h3 className="app-footer-heading text-mono-label">Signals & Inquiry</h3>
            <ul className="app-footer-contact-list" role="list">
              <li className="app-footer-contact-item">
                <span className="app-footer-contact-role text-mono-label">Direct Mail:</span>
                <a
                  href={`mailto:${profile.contactEmail.replace(/\[|\]/g, '')}`}
                  className="app-footer-contact-link font-mono"
                >
                  {profile.contactEmail.replace(/\[|\]/g, '')}
                </a>
              </li>
              {profile.socialLinks.map((social) => (
                <li key={social.platform} className="app-footer-contact-item">
                  <span className="app-footer-contact-role text-mono-label">{social.label}:</span>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="app-footer-contact-link font-mono"
                    aria-label={`${social.label} profile (opens in a new tab)`}
                  >
                    {(social.handle || social.label).replace(/\[|\]/g, '')} ↗
                  </a>
                </li>
              ))}
              <li className="app-footer-contact-item">
                <span className="app-footer-contact-role text-mono-label">Curriculum Vitae:</span>
                <a
                  href={profile.resume.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="app-footer-contact-link font-mono"
                  aria-label={`Download curriculum vitae PDF: ${profile.resume.fileName} (opens in a new tab)`}
                >
                  {profile.resume.fileName} (v{profile.resume.lastUpdated}) ↓
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Technical Colophon */}
          <div className="app-footer-col app-footer-col-colophon">
            <h3 className="app-footer-heading text-mono-label">Technical Colophon</h3>
            <div className="app-footer-colophon-body text-xs">
              <p>
                <strong>Typography:</strong> Newsreader (Editorial Display), Plus Jakarta Sans (Grotesk UI), JetBrains Mono (Technical).
              </p>
              <p>
                <strong>Architecture:</strong> Next.js 14 App Router, TypeScript strict, CSS Custom Properties Design System.
              </p>
              <p>
                <strong>Standards:</strong> Zero tracking cookies, static artifact delivery, WCAG 2.2 AA compliant.
              </p>
            </div>
            <div className="app-footer-back-to-top">
              <a
                href="#main-content"
                className="app-footer-top-link text-mono-label"
                aria-label="Back to top of page"
              >
                ↑ Back to top
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & System Ledger Signature */}
        <div className="app-footer-bottom">
          <div className="app-footer-bottom-meta text-mono-label">
            <span>
              &copy; {currentYear} {profile.fullName.replace(/\[|\]/g, '')} &bull; All Rights Reserved
            </span>
            <span className="app-footer-bottom-divider">&bull;</span>
            <span>Signal Ledger &bull; Phase 3 Architecture</span>
          </div>
          <div className="app-footer-bottom-status text-mono-label">
            <span>Static Ledger Build &bull; Production</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
