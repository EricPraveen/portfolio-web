import React from 'react';
import Link from 'next/link';
import { Profile } from '@/content/types';

export interface ResumeActionProps {
  profile: Profile;
}

export function ResumeAction({ profile }: ResumeActionProps) {
  return (
    <section id="resume-ledger" className="profile-resume-section" aria-labelledby="resume-heading">
      <div className="profile-resume-card">
        <div className="profile-resume-left">
          <div className="profile-resume-badge-group">
            <span className="profile-resume-beacon" aria-hidden="true" />
            <span className="font-mono text-mono-label">VERIFIED CURRICULUM VITAE ARTIFACT</span>
          </div>

          <h2 id="resume-heading" className="profile-resume-title font-display">
            Comprehensive Resume & Academic Record
          </h2>

          <p className="profile-resume-desc text-body">
            Official PDF document summarizing formal degree progress, core competencies, verified internship deliverables, and institutional honors.
          </p>

          <div className="profile-resume-meta-grid font-mono text-xs">
            <div>
              <span style={{ color: 'var(--color-steel)' }}>File Name:</span> {profile.resume.fileName}
            </div>
            <div>
              <span style={{ color: 'var(--color-steel)' }}>Last Ledger Revision:</span> {profile.resume.lastUpdated}
            </div>
            <div>
              <span style={{ color: 'var(--color-steel)' }}>Format:</span> PDF (ATS-Optimized & Screen-Reader Accessible)
            </div>
          </div>
        </div>

        <div className="profile-resume-actions">
          <a
            href={profile.resume.path}
            target="_blank"
            rel="noopener noreferrer"
            className="profile-resume-btn-download font-mono"
          >
            <span>Download Curriculum Vitae (PDF)</span>
            <span aria-hidden="true"> ↗</span>
          </a>

          <Link href="/contact" className="profile-resume-btn-contact font-mono">
            <span>Direct Inquiry / Contact Channel</span>
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
