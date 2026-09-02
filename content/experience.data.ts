import { ExperienceItem } from './types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-batch-rep',
    organization: 'University of Moratuwa — Faculty of Information Technology',
    role: 'Batch Representative (3rd Year)',
    type: 'Student Technical Role',
    dates: {
      start: 'Jan 2025',
      end: 'Present',
      isCurrent: true,
    },
    location: 'Moratuwa, Sri Lanka',
    context:
      'Elected representative serving as the primary liaison between 3rd-year Information Technology undergraduates, academic department heads, and faculty lecturers.',
    responsibilities: [
      'Coordinate academic scheduling, coursework milestone timelines, and semester evaluations with faculty leadership.',
      'Facilitate student feedback channels to resolve technical laboratory resource constraints and exam schedules.',
      'Organize batch-wide technical study groups and project milestone reviews for collaborative software engineering modules.',
    ],
    technologies: ['Communication', 'Academic Coordination', 'Leadership', 'Agile Planning'],
    verifiedOutcomes: [
      'Successfully coordinated academic workflows and milestone reviews for the entire 3rd-year IT undergraduate cohort.',
    ],
    linkedProjectSlugs: ['travel-hub-platform', 'edutrack-campus-portal'],
    evidence: [
      {
        label: 'Academic Reference: Ms. Adshayani Pirapaharan',
        url: 'mailto:padshayani@uom.lk',
        type: 'documentation',
        isExternal: true,
        note: 'Lecturer, Faculty of Information Technology, University of Moratuwa',
      },
    ],
  },
  {
    id: 'exp-rotaract-career',
    organization: 'Rotaract Club of University of Moratuwa',
    role: 'Career Fair Coordinator & Volunteer Lead',
    type: 'Student Technical Role',
    dates: {
      start: '2024',
      end: 'Present',
      isCurrent: true,
    },
    location: 'Moratuwa, Sri Lanka',
    context:
      'Coordinating campus career fair operations, enterprise sponsor communications, and university-wide professional development events.',
    responsibilities: [
      'Collaborated with tech industry recruiters and alumni to coordinate company interview booths and presentation schedules.',
      'Managed event logistics, student registration workflows, and information dissemination across faculty channels.',
      'Supported Tamil Literary Association activities as Batch Coordinator, facilitating cultural programs and student participation.',
    ],
    technologies: ['Event Logistics', 'Team Leadership', 'Stakeholder Communication', 'Public Relations'],
    verifiedOutcomes: [
      'Facilitated career networking sessions connecting undergraduate students directly with software engineering employers.',
    ],
    linkedProjectSlugs: ['edutrack-campus-portal'],
  },
];
