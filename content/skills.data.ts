import { CapabilityCategory, CapabilityItem } from './types';

export type SkillItem = CapabilityItem;
export type SkillCategory = CapabilityCategory;

export const skillsData: CapabilityCategory[] = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    description:
      'Core languages used for full-stack web applications, backend services, systems programming, and algorithms.',
    items: [
      {
        name: 'Java',
        level: 'Proficient',
        context: 'Object-oriented programming, data structures, concurrency, and enterprise Spring Boot applications.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Advanced Production Exposure',
        context: 'Modern asynchronous programming (Promises, async/await, DOM manipulation, ES modules).',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'TypeScript',
        level: 'Proficient',
        context: 'Typed interfaces, strict typing, component props, and robust full-stack web development.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Python',
        level: 'Working Knowledge',
        context: 'Scripting, algorithmic problem solving, automation, and basic data processing.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'C',
        level: 'Working Knowledge',
        context: 'Memory management, pointers, and foundational computer systems coursework.',
        appliedInProjectSlugs: [],
      },
    ],
  },
  {
    id: 'backend-architecture',
    title: 'Backend & APIs',
    description:
      'Designing RESTful microservices, secure JWT authentication workflows, and server-side logic in Spring Boot and Node.js.',
    items: [
      {
        name: 'Spring Boot',
        level: 'Advanced Production Exposure',
        context: 'Enterprise REST APIs with Spring Security, Spring Data JPA, and role-based JWT authentication.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'Node.js & Express.js',
        level: 'Proficient',
        context: 'Asynchronous REST APIs, routing middleware, and server-side request processing.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
      {
        name: 'REST APIs & JWT Authentication',
        level: 'Advanced Production Exposure',
        context: 'Stateless JSON endpoints with token verification, refresh tokens, and role-based authorization.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform'],
      },
    ],
  },
  {
    id: 'frontend-engineering',
    title: 'Frontend Development',
    description:
      'Building responsive, accessible, and component-driven user interfaces with React.js, Tailwind CSS, and web standards.',
    items: [
      {
        name: 'React.js',
        level: 'Advanced Production Exposure',
        context: 'Component-driven SPAs with hooks, state management, router integration, and custom reusable components.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform'],
      },
      {
        name: 'Tailwind CSS & CSS3',
        level: 'Advanced Production Exposure',
        context: 'Responsive layouts, custom utilities, flexbox, CSS Grid, and accessible UI styling.',
        appliedInProjectSlugs: ['travel-hub-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'Bootstrap',
        level: 'Proficient',
        context: 'Fast responsive styling for dashboards, data tables, and administrative interfaces.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
      {
        name: 'HTML5 & Responsive Web Design',
        level: 'Advanced Production Exposure',
        context: 'Semantic markup, accessible structure (WCAG), and fluid mobile-first layouts.',
        appliedInProjectSlugs: ['edutrack-campus-portal', 'travel-hub-platform'],
      },
    ],
  },
  {
    id: 'database-systems',
    title: 'Databases & Modeling',
    description:
      'Designing relational schemas and document stores with ACID transaction guarantees and optimized queries.',
    items: [
      {
        name: 'PostgreSQL',
        level: 'Advanced Production Exposure',
        context: 'Relational data modeling, foreign keys, indexes, and Spring Data JPA integration.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'MySQL & SQL',
        level: 'Proficient',
        context: 'Multi-table queries, joins, schema normalization (3NF), and transactional integrity.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'MongoDB',
        level: 'Proficient',
        context: 'Document modeling for product catalogs, nested order data, and flexible query filtering.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
    ],
  },
  {
    id: 'tools-design-systems',
    title: 'Developer Tools',
    description:
      'Version control workflows, UI/UX prototyping, Linux command line, and IoT systems.',
    items: [
      {
        name: 'Git & GitHub',
        level: 'Advanced Production Exposure',
        context: 'Branching strategies, pull requests, merge conflict resolution, and collaborative reviews.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'Figma UI/UX',
        level: 'Advanced Production Exposure',
        context: 'User flow wireframes, high-fidelity responsive UI prototypes, and design specs.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'Linux & Command Line',
        level: 'Proficient',
        context: 'Bash scripting, file permissions, process monitoring, and development environment setup.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'Arduino & IoT Systems',
        level: 'Working Knowledge',
        context: 'Microcontroller sensors, serial communication, and hardware-software interfacing.',
        appliedInProjectSlugs: [],
      },
    ],
  },
];
