import { OperatingPrinciple, Profile } from './types';

export const profileData: Profile = {
  fullName: 'Eric Praveen Alric Prashanth',
  preferredName: 'Eric Praveen',
  title: 'Software Engineering Intern | Full-Stack Developer',
  location: {
    city: 'Colombo',
    country: 'Sri Lanka',
    timezone: 'UTC+05:30 (SLST)',
    remotePreference: 'Flexible',
  },
  availability: {
    status: 'Available',
    stage: 'Third-Year Undergraduate, University of Moratuwa',
    targetRoles: [
      'Software Engineering Intern',
      'Full-Stack Developer',
      'Backend Developer (Java / Node.js)',
      'Frontend Developer (React.js)',
    ],
    notes: 'Actively seeking a 6-month software engineering internship starting 2026.',
  },
  thesisStatement:
    'Third-year Information Technology undergraduate at the University of Moratuwa specializing in full-stack web engineering, resilient REST API design, and structured database modeling across React, Spring Boot, Node.js, and PostgreSQL.',
  shortBio:
    'Third-year IT undergraduate with hands-on experience designing end-to-end full-stack architectures, integrating JWT-authenticated Spring Boot & Node.js backends, and building clean, responsive React interfaces with PostgreSQL and MongoDB.',
  longBio: [
    'Currently pursuing a BSc (Hons.) in Information Technology at the University of Moratuwa with a 3.7 / 4.0 GPA. My engineering approach centers on building practical, dependable systems that unite structured relational databases, clean RESTful microservices, and responsive user interfaces.',
    'Across academic team capstones and solo engineering projects, I have implemented end-to-end user workflows: role-based JWT authentication, transactional tourist package booking pipelines, Cloudinary media upload integration, and automated inventory reconciliation.',
    'Beyond development, I serve as 3rd Year Batch Representative, coordinating communication between faculty leadership and students, and actively contribute to campus community initiatives through the Rotaract Club and Tamil Literary Association.',
  ],
  resume: {
    path: '/documents/eric-praveen-resume.pdf',
    fileName: 'eric-praveen-resume.pdf',
    displayName: 'Eric Praveen — Curriculum Vitae',
    lastUpdated: '2026-09',
    lastUpdatedLabel: 'September 2026',
  },
  contactEmail: 'ericpraveen123@gmail.com',
  socialLinks: [
    {
      platform: 'github',
      label: 'GitHub',
      url: 'https://github.com/EricPraveen',
      handle: 'EricPraveen',
    },
    {
      platform: 'linkedin',
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/',
      handle: 'ericpraveen-alricprashanth',
    },
    {
      platform: 'email',
      label: 'Email',
      url: 'mailto:ericpraveen123@gmail.com',
      handle: 'ericpraveen123@gmail.com',
    },
  ],
};

export const operatingPrinciples: OperatingPrinciple[] = [
  {
    number: '01',
    title: 'Evidence Before Assumption',
    summary: 'Validate API contracts, database schema integrity, and system edge cases through explicit tests rather than intuition.',
    detail:
      'Every feature—whether a Spring Boot REST endpoint or a React state transition—should have clear data contracts, deterministic error handling, and repeatable validation.',
  },
  {
    number: '02',
    title: 'Architectural Legibility',
    summary: 'Favor explicit schemas, clean separation of concerns, and modular component boundaries over clever abstractions.',
    detail:
      'Code is read far more often than it is written. Structured PostgreSQL relations, typed DTOs, and clean component hierarchies prevent regression bugs.',
  },
  {
    number: '03',
    title: 'User Craft & Accessibility',
    summary: 'A web application is incomplete if it fails keyboard navigation, ignores screen readers, or breaks on mobile viewports.',
    detail:
      'Semantic HTML, responsive layouts with Tailwind CSS/Bootstrap, and clear visual feedback states are foundational requirements across all user flows.',
  },
  {
    number: '04',
    title: 'Collaborative Discipline',
    summary: 'Clear communication, Figma prototyping, and structured Git workflows turn complex requirements into dependable deliverables.',
    detail:
      'From UML sequence modeling to team milestone coordination, transparent documentation and proactive communication ensure cohesive team execution.',
  },
];
