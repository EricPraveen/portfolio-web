import React from 'react';
import Link from 'next/link';
import { Profile } from '@/content/types';

export interface ContactCloseProps {
  profile: Profile;
}

export function ContactClose({ profile }: ContactCloseProps) {
  const email = profile.contactEmail.replace(/\[|\]/g, '');
  const availabilityNotes = profile.availability.notes
    ? profile.availability.notes.replace(/\[|\]/g, '')
    : 'Seeking engineering internships and junior roles';

  return (
    <section id="contact-close" className="contact-close-section" aria-labelledby="contact-close-heading">
      <div className="contact-close-card">
        <div className="contact-close-header">
          <div className="contact-close-status-tag">
            <span className="contact-close-pulse" aria-hidden="true" />
            <span className="text-mono-label font-mono">
              OPEN TO 2026/2027 OPPORTUNITIES
            </span>
          </div>

          <h2 id="contact-close-heading" className="contact-close-title font-display">
            Direct Technical Inquiry & Collaboration
          </h2>

          <p className="contact-close-lead text-body">
            I welcome discussions regarding systems engineering internships, distributed backend roles, and open-source infrastructure projects.
          </p>
        </div>

        <div className="contact-close-channels">
          <div className="contact-channel-item">
            <span className="contact-channel-label text-mono-label font-mono">Direct Electronic Mail:</span>
            <a
              href={`mailto:${email}`}
              className="contact-channel-link font-mono"
            >
              {email} &rarr;
            </a>
          </div>

          <div className="contact-channel-item">
            <span className="contact-channel-label text-mono-label font-mono">Verified Social & Code:</span>
            <div className="contact-social-pills">
              {profile.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-pill font-mono text-xs"
                >
                  {social.label} &#8599;
                </a>
              ))}
            </div>
          </div>

          <div className="contact-channel-item">
            <span className="contact-channel-label text-mono-label font-mono">Availability Terms:</span>
            <p className="text-sm font-sans" style={{ color: 'var(--color-mineral-ink)', margin: 0 }}>
              {availabilityNotes}
            </p>
          </div>
        </div>

        <div className="contact-close-footer">
          <Link href="/contact" className="contact-close-btn-primary">
            <span>Open Structured Contact Form</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>

          <a
            href={profile.resume.path}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-close-btn-secondary font-mono"
          >
            <span>Download Curriculum Vitae (PDF)</span>
            <span aria-hidden="true"> ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
