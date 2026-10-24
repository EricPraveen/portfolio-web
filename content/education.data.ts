import { EducationItem } from './types';

export const educationData: EducationItem[] = [
  {
    id: 'edu-moratuwa-bsc',
    institution: 'University of Moratuwa',
    degree: 'BSc (Hons.) in Information Technology',
    major: 'Faculty of Information Technology',
    dates: {
      start: '2024',
      end: 'Present (Expected 2027)',
      isCurrent: true,
    },
    status: 'In Progress — 3rd Year Undergraduate',
    gpa: '3.7 / 4.0',
    honors: [
      '3rd Year Batch Representative (Elected Student Leadership)',
      'Academic Reference: Ms. Adshayani Pirapaharan (Lecturer, Faculty of IT)',
    ],
    relevantCoursework: [
      'Object-Oriented Programming (Java & C++)',
      'Data Structures & Algorithms',
      'Database Management Systems (PostgreSQL, MySQL, SQL)',
      'Web Application Development (React.js, Node.js, Spring Boot)',
      'Software Engineering Principles & UML Modeling',
      'Computer Networks & Protocols',
      'Operating Systems & Linux System Administration',
      'IoT & Embedded Systems (Arduino & Microcontrollers)',
    ],
    capstone: {
      title: 'Travel Hub — Sri Lanka Tourism Booking Platform',
      slug: 'travel-hub-platform',
      description:
        'A comprehensive full-stack tourism management and booking web application integrating a Spring Boot REST API with a React.js client and PostgreSQL database.',
    },
    activities: [
      'Batch Representative – 3rd Year (Coordinating faculty-student academic communication)',
      'Tamil Literary Association – Batch Coordinator',
      'Rotaract Club – Career Fair Coordinator',
    ],
  },
  {
    id: 'edu-patricks-al',
    institution: "St. Patrick's College, Jaffna",
    degree: 'Primary, Secondary & Collegiate Education',
    major: 'Physical Science Stream (Combined Maths, Physics, Chemistry)',
    dates: {
      start: '2009',
      end: '2023',
      isCurrent: false,
    },
    status: 'Completed (Entered 2009 • Completed 2023)',
    gpa: 'A/L: A 2B • O/L: 8A C',
    honors: [
      'GCE Advanced Level (2023): A 2B in Physical Science',
      'GCE Ordinary Level (2019): 8A C',
      'Qualified for State University Admission to University of Moratuwa',
    ],
    relevantCoursework: [
      'Combined Mathematics (Calculus, Trigonometry, Statistics & Mechanics)',
      'Physics (Electronics, Mechanics, Wave Optics & Thermodynamics)',
      'Chemistry (Physical, Organic & Inorganic)',
    ],
    activities: [
      'Active participant in Science Union and College Academic Clubs',
    ],
  },
];
