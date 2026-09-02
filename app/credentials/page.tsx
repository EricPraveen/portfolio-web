import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  getAllCredentials,
  getCredentialsStats,
  assertContentValid,
} from '@/lib/content';
import { CredentialGroup } from '@/content/types';
import {
  CredentialsHeader,
  CredentialsPrincipleNote,
  CredentialsClient,
  GroupFilterOption,
} from '@/components/credentials';

// Validate content integrity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Verified Credentials & Evidence Archive — Signal Ledger',
  description:
    'Verified evidence archive of professional cloud certifications, competitive hackathons, academic distinctions, and research presentations.',
  alternates: {
    canonical: '/credentials',
  },
  openGraph: {
    title: 'Verified Credentials & Evidence Archive | Signal Ledger',
    description:
      'Verified evidence archive of professional cloud certifications, competitive hackathons, academic distinctions, and research presentations.',
    url: 'https://signal-ledger.dev/credentials',
  },
};

const GROUP_LABELS: Record<CredentialGroup, string> = {
  certification: 'Certifications',
  award: 'Awards & Honors',
  hackathon: 'Hackathons',
  academic: 'Academic Distinctions',
  opensource: 'Open-Source & Community',
  research: 'Presentations & Talks',
};

export default function CredentialsPage() {
  const credentials = getAllCredentials();
  const stats = getCredentialsStats();

  const groupKeys: CredentialGroup[] = [
    'certification',
    'award',
    'hackathon',
    'academic',
    'opensource',
    'research',
  ];

  const groupOptions: GroupFilterOption[] = [
    { id: 'all', label: 'All Evidence', count: credentials.length },
    ...groupKeys
      .map((key) => ({
        id: key,
        label: GROUP_LABELS[key],
        count: credentials.filter((c) => c.group === key).length,
      }))
      .filter((opt) => opt.count > 0),
  ];

  return (
    <div className="credentials-page-container">
      {/* 01 / CREDENTIALS HERO HEADER & SUMMARY METRICS */}
      <CredentialsHeader
        totalCount={stats.total}
        verifiedCount={stats.verifiedCount}
        projectLinkedCount={stats.projectLinkedCount}
      />

      {/* 02 / EDITORIAL OPERATING PRINCIPLE: CREDENTIALS CORROBORATE SKILLS */}
      <CredentialsPrincipleNote />

      {/* 03 / INTERACTIVE CREDENTIALS CLIENT (FILTER BAR, CARDS & DENSE LEDGER) */}
      <Suspense
        fallback={
          <div
            className="font-mono text-mono-label"
            style={{ padding: '3rem', textAlign: 'center', color: 'var(--color-ink-muted)' }}
          >
            Loading verified evidence archive...
          </div>
        }
      >
        <CredentialsClient
          credentials={credentials}
          groupOptions={groupOptions}
        />
      </Suspense>
    </div>
  );
}
