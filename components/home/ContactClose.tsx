import React from 'react';
import { Profile } from '@/content/types';
import { ContactForm } from '@/components/contact';
import { FadeUp, ScrollReveal, StaggerContainer, StaggerItem } from '@/components/animation';

export interface ContactCloseProps {
  profile: Profile;
}

export function ContactClose({ profile }: ContactCloseProps) {
  const email = profile.contactEmail.replace(/\[|\]/g, '');
  const availabilityNotes = profile.availability.notes
    ? profile.availability.notes.replace(/\[|\]/g, '')
    : 'Seeking engineering internships and junior roles';

  return (
    <section id="contact" className="contact-close-section" aria-labelledby="contact-close-heading">
      <span id="contact-section" className="section-anchor" aria-hidden="true" />
      <ScrollReveal variant="fade-up" className="contact-close-card">
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

        <StaggerContainer staggerDelay={75} className="contact-close-channels">
          <StaggerItem index={0} className="contact-channel-item">
            <span className="contact-channel-label text-mono-label font-mono">Direct Electronic Mail:</span>
            <a
              href={`mailto:${email}`}
              className="contact-channel-link font-mono"
            >
              {email} &rarr;
            </a>
          </StaggerItem>

          <StaggerItem index={1} className="contact-channel-item">
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
          </StaggerItem>

          <StaggerItem index={2} className="contact-channel-item">
            <span className="contact-channel-label text-mono-label font-mono">Availability Terms:</span>
            <p className="text-sm font-sans" style={{ color: 'var(--color-mineral-ink)', margin: 0 }}>
              {availabilityNotes}
            </p>
          </StaggerItem>
        </StaggerContainer>

        <div className="contact-close-footer">
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
      </ScrollReveal>

      {/* Structured In-Page Contact Form */}
      <ScrollReveal variant="fade-up" delay={120} className="contact-form-section" style={{ marginTop: 'var(--space-2xl)' }}>
        <header className="contact-form-section__header">
          <h3 id="form-heading" className="contact-form-section__title font-heading-xl font-sans">
            Send a Message
          </h3>
          <p className="contact-form-section__subtitle text-body">
            Fill in the form below. I aim to reply within two business days.
          </p>
        </header>

        <ContactForm contactEmail={profile.contactEmail} />
      </ScrollReveal>
    </section>
  );
}
