import { ExperienceItem } from './types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-batch-rep',
    organization: 'University of Moratuwa — Faculty of Information Technology',
    role: 'Batch Representative (3rd Year)',
    type: 'Student Technical Role',
    dates: {
      start: 'Sep 2026',
      end: 'Present',
      isCurrent: true,
    },
    location: 'Moratuwa, Sri Lanka',
    context:
      'Elected representative serving as the main point of contact between 3rd-year IT students and the faculty.',
    responsibilities: [
      'Coordinate exam schedules, coursework deadlines, and semester plans with lecturers.',
      'Relay student feedback to resolve lab resource issues and timetable conflicts.',
      'Organize study groups and project milestone check-ins for team modules.',
    ],
    technologies: ['Communication', 'Coordination', 'Leadership'],
    verifiedOutcomes: [
      'Helped coordinate academic workflows for the entire 3rd-year IT batch.',
    ],
    linkedProjectSlugs: ['travel-hub-platform', 'edutrack-campus-portal'],
    evidence: [
      {
        label: 'Reference: Ms. Adshayani Pirapaharan',
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
    role: 'Career Fair Coordinator & Volunteer',
    type: 'Student Technical Role',
    dates: {
      start: 'Mar 2025',
      isCurrent: true,
    },
    location: 'Moratuwa, Sri Lanka',
    context:
      'Helping organise the campus career fair and professional development events for students.',
    responsibilities: [
      'Worked with recruiters and alumni to plan company booths and interview schedules.',
      'Managed event logistics, student registration, and communications.',
      'Supported Tamil Literary Association events as Batch Coordinator.',
    ],
    technologies: ['Event Planning', 'Team Leadership', 'Communication'],
    verifiedOutcomes: [
      'Connected students with software engineering employers through career networking sessions.',
    ],
    linkedProjectSlugs: ['edutrack-campus-portal'],
  },
];
