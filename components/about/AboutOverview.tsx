'use client';

import React from 'react';
import { Profile } from '@/content/types';
import { ScrollReveal, FadeUp, StaggerContainer, StaggerItem } from '@/components/animation';

export interface AboutOverviewProps {
  profile: Profile;
  headingLevel?: 'h1' | 'h2';
  indexLabel?: string;
}

const TIMELINE_MILESTONES = [
  {
    year: '2003',
    title: 'Born',
    description: 'The beginning of the story in Sri Lanka.',
    badge: 'ORIGIN',
  },
  {
    year: '2019',
    title: 'GCE O/L completed',
    description: 'Completed Ordinary Level examinations with 8A C results.',
    badge: '8A C',
  },
  {
    year: '2020',
    title: 'First line of code',
    description: 'Started programming and discovered the craft of building software.',
    badge: 'CODE_01',
  },
  {
    year: '2023',
    title: 'GCE A/L completed',
    description: 'Completed Advanced Level examinations with A 2B results at St. Patrick\'s College.',
    badge: 'A 2B',
  },
  {
    year: '2024',
    title: 'University entered',
    description: 'Started my IT undergraduate journey at the University of Moratuwa.',
    badge: 'UOM // IT',
  },
  {
    year: '2025',
    title: 'Level 1 hardware project completed',
    description: 'Engineered an Intelligent Solar Energy Management System as my first university hardware milestone.',
    badge: 'HARDWARE',
  },
  {
    year: '2026',
    title: 'Level 2 software project completed',
    description: 'Successfully built and completed TravelHub — a full-stack Sri Lanka tourism booking platform as my Level 2 software engineering milestone.',
    badge: 'SOFTWARE',
  },
  {
    year: '2026',
    title: 'Looking for 6-month software engineering internship',
    description: 'Actively seeking a 6-month software engineering internship for Level 3 to build robust backends, scalable web applications, and production systems.',
    badge: 'LEVEL 3 // INTERNSHIP',
    isCurrent: true,
  },
];

const FOCUS_ITEMS = [
  {
    category: 'Building',
    title: 'TravelHub',
    description: 'Building TravelHub with a strong focus on architecture, clarity, and performance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    category: 'Learning',
    title: 'Docker & Microservices',
    description: 'Studying Docker containerization, microservices architecture, and scalable full-stack web systems.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="9" y1="18" x2="15" y2="18" />
        <line x1="10" y1="22" x2="14" y2="22" />
        <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
      </svg>
    ),
  },
  {
    category: 'Reading',
    title: 'Designing Data-Intensive Applications',
    description: '"Designing Data-Intensive Applications" and notes on scalable system design.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
];

export function AboutOverview({
  profile,
  headingLevel = 'h2',
  indexLabel = '02 / ABOUT',
}: AboutOverviewProps) {
  const HeadingTag = headingLevel;

  return (
    <div className="about-overview">
      {/* ── 1. BIO HERO BLOCK ────────────────────────────────────────── */}
      <ScrollReveal variant="fade-up" className="about-hero-block arcade-box">
        <div className="about-hero-strip">
          <div className="about-hero-strip-left">
            <span className="section-eyebrow font-mono text-mono-label">{indexLabel}</span>
            <span className="about-hero-loc font-mono text-mono-label">
              COLOMBO / MORATUWA, SRI LANKA
            </span>
          </div>
          <div className="about-hero-strip-right">
            <span className="about-status-beacon" aria-hidden="true">
              <span className="about-status-dot" />
            </span>
            <span className="about-status-text font-mono text-mono-label">
              AVAILABLE • 6-MONTH SWE INTERNSHIP 2026
            </span>
          </div>
        </div>

        <div className="about-hero-main">
          <HeadingTag id="about-heading" className="about-hero-name font-display">
            I&apos;m Eric Praveen.
          </HeadingTag>

          <p className="about-hero-roles font-mono">
            <span className="about-role-pill">IT undergraduate</span>
            <span className="about-role-sep">/</span>
            <span className="about-role-pill">Full-stack builder</span>
            <span className="about-role-sep">/</span>
            <span className="about-role-pill">Technical writer</span>
          </p>

          <p className="about-hero-bio font-sans">
            I craft digital products that feel sharp, useful, and human. My work blends strong engineering with editorial design thinking.
          </p>

          <div className="about-hero-actions">
            <a
              href={profile.resume.path}
              target="_blank"
              rel="noopener noreferrer"
              className="about-btn about-btn--volt arcade-btn font-mono"
            >
              <span>Download Resume ↗</span>
            </a>
            <a
              href="#contact"
              className="about-btn about-btn--dark arcade-btn font-mono"
            >
              <span>Get In Touch →</span>
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* ── 2. THE JOURNEY // LIFE TIMELINE ──────────────────────────── */}
      <div className="about-section-group">
        <FadeUp className="about-section-header">
          <span className="about-sub-eyebrow font-mono">THE JOURNEY</span>
          <h3 className="about-sub-title font-heading-2xl">Life Timeline</h3>
        </FadeUp>

        <div className="life-timeline-container" role="feed" aria-label="Life Timeline">
          <div className="life-timeline-rail" aria-hidden="true" />

          {TIMELINE_MILESTONES.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <ScrollReveal
                key={`${item.year}-${item.title}`}
                as="article"
                variant={isEven ? 'slide-left' : 'slide-right'}
                delay={Math.min(idx * 60, 240)}
                className={`life-timeline-item ${isEven ? 'life-timeline-item--left' : 'life-timeline-item--right'} ${
                  item.isCurrent ? 'is-current' : ''
                }`}
              >
                {/* Glowing Node Dot */}
                <div className="life-timeline-node" aria-hidden="true">
                  <span className="life-timeline-dot">
                    <span className="life-timeline-dot-inner" />
                  </span>
                </div>

                {/* Milestone Card */}
                <div className="life-timeline-card arcade-box">
                  <div className="life-timeline-card-header">
                    <span className="life-timeline-year font-mono">{item.year}</span>
                    <span className="life-timeline-badge font-mono text-mono-label">{item.badge}</span>
                  </div>
                  <h4 className="life-timeline-milestone font-sans">{item.title}</h4>
                  <p className="life-timeline-desc font-sans">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* ── 3. CURRENTLY // WHAT I'M FOCUSED ON ──────────────────────── */}
      <div className="about-section-group">
        <FadeUp className="about-section-header">
          <span className="about-sub-eyebrow font-mono">CURRENTLY</span>
          <h3 className="about-sub-title font-heading-2xl">What I&apos;m focused on</h3>
        </FadeUp>

        <StaggerContainer staggerDelay={95} className="currently-grid">
          {FOCUS_ITEMS.map((item, idx) => (
            <StaggerItem key={item.category} index={idx} className="currently-card arcade-box">
              <div className="currently-card-icon" aria-hidden="true">
                {item.icon}
              </div>
              <span className="currently-card-cat font-mono">{item.category}</span>
              <h4 className="currently-card-title font-sans">{item.title}</h4>
              <p className="currently-card-desc font-sans">{item.description}</p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
