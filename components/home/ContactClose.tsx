import React from 'react';
import { Profile } from '@/content/types';
import { FadeUp, ScrollReveal } from '@/components/animation';

export interface ContactCloseProps {
  profile: Profile;
}

interface ContactChannel {
  id: string;
  label: string;
  handle: string;
  url: string;
  actionText: string;
  accentColor: string;
  icon: React.ReactNode;
}

export function ContactClose({ profile }: ContactCloseProps) {
  const email = profile.contactEmail.replace(/\[|\]/g, '');
  const availabilityNotes = profile.availability.notes
    ? profile.availability.notes.replace(/\[|\]/g, '')
    : 'Seeking engineering internships and junior roles';

  const channels: ContactChannel[] = [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      handle: 'ericpraveen-alricprashanth',
      url: profile.socialLinks.find((s) => s.platform === 'linkedin')?.url || 'https://www.linkedin.com/in/ericpraveen-alricprashanth/',
      actionText: 'Connect ↗',
      accentColor: '#00E5FF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
        </svg>
      ),
    },
    {
      id: 'email',
      label: 'Direct Email',
      handle: email,
      url: `mailto:${email}`,
      actionText: 'Compose ↗',
      accentColor: '#D4FF00',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
    },
    {
      id: 'github',
      label: 'GitHub',
      handle: 'EricPraveen',
      url: profile.socialLinks.find((s) => s.platform === 'github')?.url || 'https://github.com/EricPraveen',
      actionText: 'View Code ↗',
      accentColor: '#FFFFFF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      ),
    },
    {
      id: 'medium',
      label: 'Medium',
      handle: '@ericpraveen123',
      url: profile.socialLinks.find((s) => s.platform === 'medium')?.url || 'https://medium.com/@ericpraveen123',
      actionText: 'Read Articles ↗',
      accentColor: '#00E5FF',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-close-section" aria-labelledby="contact-close-heading">
      <span id="contact-section" className="section-anchor" aria-hidden="true" />

      {/* ── SECTION HEADER STRIP (USUAL EDITORIAL / CYBER STYLE) ── */}
      <FadeUp className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">07 / CONTACT &amp; INQUIRY</span>
          <h2 id="contact-close-heading" className="section-title font-heading-2xl">
            Direct Technical Inquiry &amp; Collaboration
          </h2>
        </div>
        <p className="section-lead text-body">
          I welcome discussions regarding systems engineering internships, distributed backend roles, and open-source infrastructure projects.
        </p>
      </FadeUp>

      {/* ── CARD BODY (USUAL ARCADE BOX STYLE) ── */}
      <ScrollReveal variant="fade-up" className="contact-close-card arcade-box">
        <div className="contact-close-header">
          <div className="contact-close-status-tag">
            <span className="contact-close-pulse" aria-hidden="true" />
            <span className="text-mono-label font-mono">
              OPEN TO 2026/2027 OPPORTUNITIES
            </span>
          </div>

          <h3 className="contact-close-card-title font-heading-xl font-sans">
            Let&apos;s Build Something Resilient Together
          </h3>

          <p className="contact-close-card-lead font-sans">
            Whether you have an inquiry about software engineering roles, distributed architecture, or tech collaboration, reach out directly through any of the verified channels below.
          </p>
        </div>

        {/* ── PROMINENT CONTACT & COLLABORATION CHANNELS GRID ── */}
        <div className="contact-channels-grid" role="list" aria-label="Verified Contact and Social Channels">
          {channels.map((ch) => (
            <a
              key={ch.id}
              href={ch.url}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel-card arcade-box"
              style={{ ['--channel-accent' as any]: ch.accentColor }}
              aria-label={`${ch.label}: ${ch.handle} (opens in new tab)`}
            >
              <div className="contact-channel-card-top">
                <span className="contact-channel-icon" aria-hidden="true">
                  {ch.icon}
                </span>
                <span className="contact-channel-action font-mono text-xs">
                  {ch.actionText}
                </span>
              </div>
              <div className="contact-channel-card-info">
                <span className="contact-channel-name font-sans">
                  {ch.label}
                </span>
                <span className="contact-channel-handle font-mono text-xs">
                  {ch.handle}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* ── AVAILABILITY & RESUME ACTIONS FOOTER ── */}
        <div className="contact-close-bottom">
          <div className="contact-availability-box">
            <span className="contact-availability-label font-mono text-mono-label">
              AVAILABILITY TERMS
            </span>
            <p className="contact-availability-text font-sans">
              {availabilityNotes}
            </p>
          </div>

          <a
            href={profile.resume.path}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-close-btn-resume arcade-btn font-mono"
            aria-label="Download Curriculum Vitae in PDF format (opens in new tab)"
          >
            <span>Download Curriculum Vitae (PDF)</span>
            <span className="contact-resume-arrow" aria-hidden="true">↗</span>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
