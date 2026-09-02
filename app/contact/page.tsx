import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getProfile } from '@/lib/content';
import { ContactForm } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact & Engineering Availability — Signal Ledger',
  description:
    'Direct contact channels, verified social profiles, current engineering availability, resume download, and secure contact form.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Engineering Availability — Signal Ledger',
    description:
      'Direct contact channels, verified social profiles, current engineering availability, and resume download.',
    url: 'https://signal-ledger.dev/contact',
  },
};

/* Platform icon glyphs — no external icon dependency needed here */
const PLATFORM_GLYPHS: Record<string, string> = {
  github: 'GH',
  linkedin: 'LI',
  twitter: 'TW',
  x: 'X',
  email: '@',
  devto: 'DV',
  medium: 'MD',
  hashnode: 'HN',
  stackoverflow: 'SO',
  youtube: 'YT',
  website: '↗',
};

function getPlatformGlyph(platform: string): string {
  return PLATFORM_GLYPHS[platform.toLowerCase()] ?? '↗';
}

const AVAILABILITY_COLORS: Record<string, string> = {
  Available: 'availability-pill--green',
  Exploring: 'availability-pill--amber',
  Committed: 'availability-pill--steel',
};

export default function ContactPage() {
  const profile = getProfile();
  const availClass = AVAILABILITY_COLORS[profile.availability.status] ?? 'availability-pill--steel';

  return (
    <div className="contact-page">
      {/* ── Page Header ──────────────────────────────────────────────────── */}
      <header className="contact-page__header">
        <nav className="contact-page__breadcrumb" aria-label="Breadcrumb">
          <Link href="/" className="breadcrumb-link">
            ← Index
          </Link>
          <span className="breadcrumb-sep" aria-hidden="true">/</span>
          <span aria-current="page">Contact</span>
        </nav>

        <p className="contact-page__eyebrow font-mono">06 / CONTACT &amp; CONVERSION</p>
        <h1 className="contact-page__title font-display">Get in Touch</h1>
        <p className="contact-page__subtitle">
          Open to engineering internships, junior systems roles, and research collaborations.
          The fastest path is a direct email.
        </p>
      </header>

      <div className="contact-page__body">
        {/* ── Left Column ─────────────────────────────────────────────── */}
        <aside className="contact-sidebar">

          {/* 1. AVAILABILITY */}
          <section className="contact-card" aria-labelledby="avail-heading">
            <h2 id="avail-heading" className="contact-card__title">
              Current Availability
            </h2>

            <div className={`availability-pill ${availClass}`}>
              <span className="availability-pulse" aria-hidden="true" />
              <span>{profile.availability.status}</span>
            </div>

            <dl className="availability-grid">
              <div className="availability-grid__row">
                <dt>Academic stage</dt>
                <dd>{profile.availability.stage}</dd>
              </div>
              <div className="availability-grid__row">
                <dt>Location</dt>
                <dd>
                  {profile.location.city}, {profile.location.country}
                </dd>
              </div>
              <div className="availability-grid__row">
                <dt>Timezone</dt>
                <dd className="font-mono">{profile.location.timezone}</dd>
              </div>
              <div className="availability-grid__row">
                <dt>Remote</dt>
                <dd>{profile.location.remotePreference}</dd>
              </div>
            </dl>

            {profile.availability.targetRoles?.length > 0 && (
              <div className="target-roles">
                <p className="target-roles__label">Target roles</p>
                <ul className="target-roles__list" aria-label="Target roles">
                  {profile.availability.targetRoles.map((role) => (
                    <li key={role} className="target-roles__item">
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {profile.availability.notes && (
              <p className="availability-note">{profile.availability.notes}</p>
            )}
          </section>

          {/* 2. DIRECT EMAIL */}
          <section className="contact-card contact-card--email" aria-labelledby="email-heading">
            <h2 id="email-heading" className="contact-card__title">
              Direct Email
            </h2>
            <p className="direct-email__description">
              For internship inquiries, collaboration proposals, or interview invitations:
            </p>
            <a
              href={`mailto:${profile.contactEmail}`}
              className="direct-email__link"
              aria-label={`Send email to ${profile.contactEmail}`}
            >
              <span className="direct-email__icon" aria-hidden="true">@</span>
              <span>{profile.contactEmail}</span>
              <span className="direct-email__arrow" aria-hidden="true">→</span>
            </a>
          </section>

          {/* 3. VERIFIED PROFILES */}
          {profile.socialLinks.filter((l) => l.platform !== 'email').length > 0 && (
            <section className="contact-card" aria-labelledby="profiles-heading">
              <h2 id="profiles-heading" className="contact-card__title">
                Verified Profiles
              </h2>
              <ul className="social-profile-list" aria-label="Social and professional profiles">
                {profile.socialLinks
                  .filter((l) => l.platform !== 'email')
                  .map((link) => (
                    <li key={link.platform}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-profile-card"
                        aria-label={`${link.label} — opens in new tab`}
                      >
                        <span
                          className="social-profile-card__glyph font-mono"
                          aria-hidden="true"
                        >
                          {getPlatformGlyph(link.platform)}
                        </span>
                        <span className="social-profile-card__body">
                          <strong className="social-profile-card__label">{link.label}</strong>
                          <span className="social-profile-card__handle">
                            {link.handle ?? link.url}
                          </span>
                        </span>
                        <span className="social-profile-card__arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
              </ul>
            </section>
          )}

          {/* 4. RESUME */}
          <section className="contact-card contact-card--resume" aria-labelledby="resume-heading">
            <h2 id="resume-heading" className="contact-card__title">
              Curriculum Vitae
            </h2>
            <p className="resume-meta">
              Last updated:{' '}
              <time dateTime={profile.resume.lastUpdated} className="font-mono">
                {profile.resume.lastUpdatedLabel ?? profile.resume.lastUpdated}
              </time>
            </p>
            <p className="resume-description">
              PDF document with academic background, technical projects, and verifiable outcomes.
            </p>
            <div className="resume-actions">
              {/* View — opens in-browser */}
              <a
                href={profile.resume.path}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn resume-btn--view"
                aria-label={`View ${profile.resume.displayName ?? profile.resume.fileName} in browser`}
              >
                View PDF
              </a>
              {/* Download — forces download with stable filename */}
              <a
                href={profile.resume.path}
                download={profile.resume.fileName}
                className="resume-btn resume-btn--download"
                aria-label={`Download ${profile.resume.displayName ?? profile.resume.fileName}`}
              >
                ↓ Download
              </a>
            </div>
            <p className="resume-filename font-mono">
              {profile.resume.fileName}
            </p>
          </section>
        </aside>

        {/* ── Right Column: Contact Form ─────────────────────────────── */}
        <section className="contact-form-section" aria-labelledby="form-heading">
          <header className="contact-form-section__header">
            <h2 id="form-heading" className="contact-form-section__title">
              Send a Message
            </h2>
            <p className="contact-form-section__subtitle">
              Fill in the form below. I aim to reply within two business days.
              If the form fails for any reason, the email link is always available.
            </p>
          </header>

          {/* ContactForm is a Client Component — receives only serialisable props */}
          <ContactForm contactEmail={profile.contactEmail} />
        </section>
      </div>
    </div>
  );
}
