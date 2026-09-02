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
} from '@/components/education';

// Validate content integrity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Education & Certifications — Eric Praveen',
  description:
    'Academic background, online certificates, and achievements by Eric Praveen.',
  alternates: {
    canonical: '/education',
  },
  openGraph: {
    title: 'Education & Certifications — Eric Praveen',
    description:
      'Degree, certifications, awards, and academic distinctions.',
    url: 'https://signal-ledger.dev/education',
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
