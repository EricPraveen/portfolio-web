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
      end: 'Mar 2025',
      isCurrent: false,
    },
    location: 'Moratuwa, Sri Lanka',
    context:
      'Organised the campus career fair and professional development events for students.',
    responsibilities: [
      'Worked with recruiters and alumni to plan company booths and interview schedules.',
      'Managed event logistics, student registration, and communications.',
      'Coordinated volunteer workflows and student participant registration for career sessions.',
    ],
    technologies: ['Event Planning', 'Team Leadership', 'Communication'],
    verifiedOutcomes: [
      'Connected students with software engineering employers through career networking sessions.',
    ],
    linkedProjectSlugs: ['edutrack-campus-portal'],
  },
  {
    id: 'exp-tla-batch-coordinator',
    organization: 'Tamil Literary Association (TLA) — University of Moratuwa',
    role: 'TLA Batch 23 Coordinator',
    type: 'Student Technical Role',
    dates: {
      start: '2026',
      end: 'Present',
      isCurrent: true,
    
    },
    location: 'Moratuwa, Sri Lanka',
    context:
      'Serving as Batch Coordinator for the Tamil Literary Association, coordinating cultural initiatives, student engagement, and event logistics across the IT batch.',
    responsibilities: [
      'Coordinate batch student participation in annual cultural programs, literary competitions, and university events.',
      'Facilitate communication between the TLA executive committee and batch members.',
      'Organize event logistics, volunteer teams, and student community outreach initiatives.',
    ],
    technologies: ['Event Coordination', 'Student Engagement', 'Communication'],
    verifiedOutcomes: [
      'Coordinated student participation and batch engagement across campus cultural and literary initiatives.',
    ],
    linkedProjectSlugs: [],
  },
];
