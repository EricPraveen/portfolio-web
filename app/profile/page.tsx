import React from 'react';
import type { Metadata } from 'next';
import {
  getProfile,
  getEducation,
  getExperience,
  getSkills,
  getOperatingPrinciples,
  assertContentValid,
} from '@/lib/content';
import {
  ProfileHeader,
  ExperienceTimeline,
  EducationTimeline,
  CapabilityMatrix,
  OperatingPrinciples,
  CollaborationEvidence,
  ResumeAction,
} from '@/components/profile';

// Validate content integrity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Engineering Profile & Operating Principles — Signal Ledger',
  description:
    'Authoritative engineering profile, formal systems education, professional experience, comprehensive capability matrix, and operating discipline.',
  alternates: {
    canonical: '/profile',
  },
  openGraph: {
    title: 'Engineering Profile & Operating Principles — Signal Ledger',
    description:
      'Authoritative engineering profile, formal systems education, professional experience, and capability matrix.',
    url: 'https://signal-ledger.dev/profile',
  },
};

export default function ProfilePage() {
  const profile = getProfile();
  const education = getEducation();
  const experience = getExperience();
  const skills = getSkills();
  const principles = getOperatingPrinciples();

  return (
    <div className="profile-page-container">
      {/* 01 / PROFILE IDENTITY & THESIS */}
      <ProfileHeader profile={profile} />

      {/* 02 / PRACTICAL EXPERIENCE TIMELINE */}
      <ExperienceTimeline experience={experience} />

      {/* 03 / FORMAL EDUCATION TIMELINE */}
      <EducationTimeline education={education} />

      {/* 04 / TECHNICAL CAPABILITY MATRIX */}
      <CapabilityMatrix categories={skills} />

      {/* 05 / ENGINEERING OPERATING PRINCIPLES */}
      <OperatingPrinciples principles={principles} />

      {/* 06 / COLLABORATION & INSTRUCTIONAL MENTORING */}
      <CollaborationEvidence />

      {/* 07 / VERIFIED RESUME ARTIFACT ACTION */}
      <ResumeAction profile={profile} />
    </div>
  );
}
