import React from 'react';
import type { Metadata } from 'next';
import { getSkills, assertContentValid } from '@/lib/content';
import { SkillsGrid } from '@/components/skills';

// Validate content integrity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Technical Skills — Eric Praveen',
  description:
    'Technical skills and capabilities across backend engineering, frontend development, database architecture, and developer tools.',
  alternates: {
    canonical: '/skills',
  },
  openGraph: {
    title: 'Technical Skills — Eric Praveen',
    description:
      'Languages, frameworks, and tools across the full engineering stack.',
    url: 'https://signal-ledger.dev/skills',
  },
};

export default function SkillsPage() {
  const skillCategories = getSkills();

  return (
    <div className="skills-page-container">
      <SkillsGrid categories={skillCategories} />
    </div>
  );
}
