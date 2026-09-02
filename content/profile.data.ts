import { OperatingPrinciple, Profile } from './types';

export const profileData: Profile = {
  fullName: 'Eric Praveen Alric Prashanth',
  preferredName: 'Eric Praveen',
  title: 'Full-Stack Developer | Software Engineering Intern',
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
    notes: 'Looking for a 6-month software engineering internship starting 2026.',
  },
  thesisStatement:
    'Third-year IT student at University of Moratuwa, building full-stack web apps with React, Spring Boot, Node.js, and PostgreSQL.',
  shortBio:
    'I enjoy building clean, end-to-end web applications — from designing REST APIs and database schemas to crafting responsive UIs in React.',
  longBio: [
    'Currently in my third year of a BSc (Hons.) in Information Technology at the University of Moratuwa, with a 3.7 / 4.0 GPA. I like writing code that is easy to understand, well-structured, and actually works.',
    'Outside of coding, I serve as 3rd Year Batch Representative, help coordinate the Rotaract Career Fair, and contribute to the Tamil Literary Association on campus.',
  ],
  resume: {
    path: '/documents/eric-praveen-resume.pdf',
    fileName: 'eric-praveen-resume.pdf',
    displayName: 'Eric Praveen — Resume',
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
    title: 'Test Before Assuming',
    summary: 'Validate API contracts, database logic, and edge cases through proper tests — not guesswork.',
    detail:
      'Every feature should have clear contracts, consistent error handling, and repeatable tests.',
  },
  {
    number: '02',
    title: 'Keep It Readable',
    summary: 'Clear code structure and clean separation of concerns beats clever shortcuts.',
    detail:
      'Code is read far more often than it is written. Typed DTOs, clean schemas, and modular components make maintenance easier.',
  },
  {
    number: '03',
    title: 'Build for Everyone',
    summary: 'A UI that breaks on mobile or ignores keyboard navigation is not finished.',
    detail:
      'Semantic HTML, responsive layouts, and accessible color contrast are baseline requirements — not extras.',
  },
  {
    number: '04',
    title: 'Communicate Clearly',
    summary: 'Good documentation, Figma designs, and clean Git history make team work easier.',
    detail:
      'From UML diagrams to README files, clear communication and proactive updates keep projects on track.',
  },
];
