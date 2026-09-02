import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  getProfile,
  getFeaturedProjects,
  getSkills,
  getEducation,
  getExperience,
  getFeaturedCredentials,
  getFeaturedAwards,
  getAllHackathons,
  assertContentValid,
} from '@/lib/content';
import {
  ThesisPanel,
  ProjectPlate,
  CapabilityMap,
  CurrentFocus,
  ProfileSnapshot,
  SelectedCredentials,
  ContactClose,
} from '@/components/home';

// Enforce content validity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Overview & Technical Thesis — Signal Ledger',
  description:
    'Evidence-first personal engineering portfolio and systems architecture ledger. Verified production systems, deterministic concurrency, and technical whitepapers.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const skillCategories = getSkills();
  const education = getEducation();
  const experience = getExperience();
  const featuredCredentials = getFeaturedCredentials();
  const featuredAwards = getFeaturedAwards();
  const hackathons = getAllHackathons();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://signal-ledger.dev/#website',
        url: 'https://signal-ledger.dev',
        name: 'Signal Ledger',
        description: 'Evidence-first engineering portfolio and technical ledger.',
        publisher: {
          '@id': 'https://signal-ledger.dev/#person',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://signal-ledger.dev/#person',
        name: profile.fullName.replace(/\[|\]/g, ''),
        jobTitle: profile.title.replace(/\[|\]/g, ''),
        url: 'https://signal-ledger.dev',
        sameAs: profile.socialLinks.map((s) => s.url),
        address: {
          '@type': 'PostalAddress',
          addressLocality: profile.location.city.replace(/\[|\]/g, ''),
          addressCountry: profile.location.country.replace(/\[|\]/g, ''),
        },
        knowsAbout: skillCategories.flatMap((c) => c.items.map((i) => i.name)),
      },
    ],
  };

  return (
    <div className="home-container">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 01 / THESIS & PROFESSIONAL IDENTITY */}
      <ThesisPanel profile={profile} />

      {/* 02 / SELECTED FLAGSHIP WORK */}
      <section id="selected-work" className="selected-work-section" aria-labelledby="selected-work-heading">
        <div className="section-header-strip">
          <div>
            <span className="section-eyebrow text-mono-label font-mono">02 / FLAGSHIP ARCHITECTURES</span>
            <h2 id="selected-work-heading" className="section-title font-heading-2xl">
              Selected Engineering Proof
            </h2>
          </div>

          <Link href="/work" className="section-link-more font-mono">
            View All Work & Case Studies ({featuredProjects.length}+) &rarr;
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {featuredProjects.map((project, idx) => (
            <ProjectPlate
              key={project.slug}
              project={project}
              index={idx}
              layoutVariant={idx % 2 === 0 ? 'split-right' : 'split-left'}
            />
          ))}
        </div>
      </section>

      {/* 03 / CAPABILITY ARCHITECTURE MAP */}
      <CapabilityMap categories={skillCategories} />

      {/* 04 / CURRENT FOCUS (NOW / BUILDING / LEARNING) */}
      <CurrentFocus />

      {/* 05 / PROFILE SNAPSHOT */}
      <ProfileSnapshot education={education} experience={experience} />

      {/* 06 / SELECTED CREDENTIALS & HONORS */}
      <SelectedCredentials
        credentials={featuredCredentials}
        awards={featuredAwards}
        hackathons={hackathons}
      />

      {/* 07 / CONTACT CLOSE */}
      <ContactClose profile={profile} />
    </div>
  );
}
