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
  ProfileSnapshot,
  SelectedCredentials,
  ContactClose,
} from '@/components/home';
import { AboutOverview } from '@/components/about';

// Enforce content validity at build time
assertContentValid();

export const metadata: Metadata = {
  title: {
    absolute: 'Eric Praveen | Portfolio',
  },
  description:
    'Full-stack developer and software engineer based in Sri Lanka. Building web applications, distributed systems, and robust backends.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Eric Praveen | Portfolio',
    description:
      'Full-stack developer and software engineer based in Sri Lanka. Building web applications, distributed systems, and robust backends.',
    url: 'https://ericpraveen.dev',
    siteName: 'Eric Praveen | Portfolio',
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
        '@id': 'https://ericpraveen.dev/#website',
        url: 'https://ericpraveen.dev',
        name: 'Eric Praveen | Portfolio',
        description: 'Personal portfolio and engineering work of Eric Praveen.',
        publisher: {
          '@id': 'https://ericpraveen.dev/#person',
        },
      },
      {
        '@type': 'Person',
        '@id': 'https://ericpraveen.dev/#person',
        name: profile.fullName.replace(/\[|\]/g, ''),
        jobTitle: profile.title.replace(/\[|\]/g, ''),
        url: 'https://ericpraveen.dev',
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
      {/* 01 / HOME */}
      <ThesisPanel profile={profile} />

      {/* 02 / ABOUT */}
      <section id="about" className="profile-section" aria-labelledby="about-heading">
        <span id="profile" className="section-anchor" aria-hidden="true" />
        <span id="bio" className="section-anchor" aria-hidden="true" />
        <AboutOverview
          profile={profile}
          headingLevel="h2"
          indexLabel="02 / ABOUT"
        />
      </section>

      {/* 03 / SELECTED FLAGSHIP WORK */}
      <section id="projects" className="selected-work-section" aria-labelledby="selected-work-heading">
        <span id="selected-work" className="section-anchor" aria-hidden="true" />
        <span id="work" className="section-anchor" aria-hidden="true" />
        <div className="section-header-strip">
          <div>
            <span className="section-eyebrow text-mono-label font-mono">03 / SELECTED WORK</span>
            <h2 id="selected-work-heading" className="section-title font-heading-2xl">
              Projects I&apos;ve Built
            </h2>
          </div>

          <Link href="/projects" className="section-link-more font-mono">
            View All Projects ({featuredProjects.length}+) &rarr;
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

      {/* 04 / CAPABILITY ARCHITECTURE MAP */}
      <CapabilityMap categories={skillCategories} />

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
