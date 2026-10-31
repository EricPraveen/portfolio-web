import React from 'react';
import { Award, CredentialItem, HackathonItem } from '@/content/types';
import { FadeUp, StaggerContainer, StaggerItem } from '@/components/animation';

export interface SelectedCredentialsProps {
  credentials: CredentialItem[];
  awards: Award[];
  hackathons: HackathonItem[];
}

export function SelectedCredentials({
  credentials,
  awards,
  hackathons,
}: SelectedCredentialsProps) {
  return (
    <section id="certificates" className="credentials-snapshot-section" aria-labelledby="credentials-snapshot-heading">
      <span id="credentials" className="section-anchor" aria-hidden="true" />
      <span id="field" className="section-anchor" aria-hidden="true" />
      <FadeUp className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">05 / FIELD CREDENTIALS & HONORS</span>
          <h2 id="credentials-snapshot-heading" className="section-title font-heading-2xl">
            Verified Credentials & Certifications
          </h2>
        </div>
      </FadeUp>

      <StaggerContainer staggerDelay={60} className="credentials-grid">
        {/* Industry Certifications */}
        {credentials.map((cred, idx) => (
          <StaggerItem key={cred.id} index={idx} className="credential-card">
            <div className="credential-card-meta">
              <span className="credential-card-cat text-mono-label font-mono">
                {cred.category}
              </span>
              <span className="credential-card-year text-mono-label font-mono">
                {cred.issueDate}
              </span>
            </div>

            <h3 className="credential-card-title font-sans">
              {cred.title.replace(/\[|\]/g, '')}
            </h3>

            <p className="credential-card-issuer text-sm">
              Issued by <strong>{cred.issuer}</strong>
            </p>

            <div className="credential-skills-strip">
              {cred.skillsDemonstrated.map((skill) => (
                <span key={skill} className="credential-skill-tag font-mono text-xs">
                  {skill}
                </span>
              ))}
            </div>

            {cred.verificationUrl && (
              <div className="credential-card-action">
                <a
                  href={cred.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="credential-verify-link font-mono text-xs"
                >
                  Verify Credential ID ↗
                </a>
              </div>
            )}
          </StaggerItem>
        ))}

        {/* Academic Honors & Hackathons */}
        {awards.slice(0, 1).map((award) => (
          <div key={award.id} className="credential-card credential-card--award">
            <div className="credential-card-meta">
              <span className="credential-card-cat text-mono-label font-mono" style={{ color: 'var(--color-signal-cobalt)' }}>
                Academic Honor
              </span>
              <span className="credential-card-year text-mono-label font-mono">
                {award.date}
              </span>
            </div>

            <h3 className="credential-card-title font-sans">
              {award.title.replace(/\[|\]/g, '')}
            </h3>

            <p className="credential-card-issuer text-sm">
              Conferred by <strong>{award.issuer.replace(/\[|\]/g, '')}</strong>
            </p>

            <p className="credential-card-summary text-xs">
              {award.summary.replace(/\[|\]/g, '')}
            </p>
          </div>
        ))}

        {hackathons.slice(0, 1).map((hack) => (
          <div key={hack.id} className="credential-card credential-card--hackathon">
            <div className="credential-card-meta">
              <span className="credential-card-cat text-mono-label font-mono" style={{ color: 'var(--color-oxide-dark)' }}>
                Competitive Hackathon
              </span>
              <span className="credential-card-year text-mono-label font-mono">
                {hack.date}
              </span>
            </div>

            <h3 className="credential-card-title font-sans">
              {hack.eventName.replace(/\[|\]/g, '')}
            </h3>

            <p className="credential-card-issuer text-sm">
              Award: <strong>{(hack.outcomeOrPlacement || 'Technical Finalist').replace(/\[|\]/g, '')}</strong>
            </p>

            <p className="credential-card-summary text-xs">
              {hack.takeaway}
            </p>
          </div>
        ))}
      </StaggerContainer>
    </section>
  );
}
