import { CapabilityCategory, CapabilityItem } from './types';

export type SkillItem = CapabilityItem;
export type SkillCategory = CapabilityCategory;

export const skillsData: CapabilityCategory[] = [
  {
    id: 'backend-architecture',
    title: 'Backend & API Engineering',
    description:
      'Designing robust RESTful microservices, JWT-secured authentication workflows, and scalable server-side logic in Spring Boot and Node.js.',
    items: [
      {
        name: 'Spring Boot',
        level: 'Advanced Production Exposure',
        context: 'Built enterprise REST APIs with Spring Security, JPA/Hibernate, and role-based JWT authentication.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'Node.js & Express.js',
        level: 'Proficient',
        context: 'Constructed asynchronous REST API services, inventory processing routers, and middleware pipelines.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
      {
        name: 'REST APIs & JWT Authentication',
        level: 'Advanced Production Exposure',
        context: 'Designed stateless JSON endpoints with bearer token validation, refresh tokens, and RBAC authorization.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform'],
      },
      {
        name: 'Java (OOP & Concurrency)',
        level: 'Proficient',
        context: 'Core programming language for academic systems, design patterns, and Spring enterprise applications.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'Python',
        level: 'Working Knowledge',
        context: 'Scripting, algorithmic problem solving, and data manipulation.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'PHP & C',
        level: 'Working Knowledge',
        context: 'Low-level memory modeling, procedural fundamentals, and server-side web scripting.',
        appliedInProjectSlugs: [],
      },
    ],
  },
  {
    id: 'frontend-engineering',
    title: 'Frontend & UI Craft',
    description:
      'Building performant, accessible, and responsive user interfaces with React.js, Tailwind CSS, Bootstrap, and modern web standards.',
    items: [
      {
        name: 'React.js',
        level: 'Advanced Production Exposure',
        context: 'Component-driven SPA development with hooks, state management, router integration, and custom UI components.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform'],
      },
      {
        name: 'JavaScript (ES6+)',
        level: 'Advanced Production Exposure',
        context: 'Modern asynchronous JavaScript (Promises, async/await, DOM manipulation, functional array methods).',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'Tailwind CSS & CSS3',
        level: 'Advanced Production Exposure',
        context: 'Responsive grid systems, custom utility token design, flexbox layouts, and accessible color tokens.',
        appliedInProjectSlugs: ['travel-hub-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'Bootstrap',
        level: 'Proficient',
        context: 'Rapid responsive styling for e-commerce dashboards and administrative data tables.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
      {
        name: 'HTML5 & Responsive Web Design',
        level: 'Advanced Production Exposure',
        context: 'Semantic landmark hierarchy, mobile-first fluid viewports, and WCAG accessibility standards.',
        appliedInProjectSlugs: ['edutrack-campus-portal', 'travel-hub-platform'],
      },
    ],
  },
  {
    id: 'database-systems',
    title: 'Database Architecture & Modeling',
    description:
      'Designing normalized relational schemas and document stores with ACID transaction guarantees and efficient query execution.',
    items: [
      {
        name: 'PostgreSQL',
        level: 'Advanced Production Exposure',
        context: 'Relational data modeling, foreign key constraints, indexed searches, and Spring Data JPA integration.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'MySQL & SQL',
        level: 'Proficient',
        context: 'Complex multi-table joins, normalization (3NF), and ACID transactional modeling.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'MongoDB',
        level: 'Proficient',
        context: 'Schema design for e-commerce product catalogs, nested order documents, and dynamic query filtering.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
    ],
  },
  {
    id: 'tools-design-systems',
    title: 'Developer Tools & Systems Engineering',
    description:
      'Professional version control workflows, IDE toolchains, UI/UX prototyping, Linux administration, and embedded hardware.',
    items: [
      {
        name: 'Git & GitHub',
        level: 'Advanced Production Exposure',
        context: 'Feature branching, pull requests, merge conflict resolution, and collaborative team code reviews.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'Figma UI/UX & Prototyping',
        level: 'Advanced Production Exposure',
        context: 'User flow wireframing, high-fidelity responsive component prototypes, and UML design specifications.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'Linux & Command Line',
        level: 'Proficient',
        context: 'Bash scripting, file permissions, service process inspection, and environment setup.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'Arduino & IoT Embedded Systems',
        level: 'Working Knowledge',
        context: 'Microcontroller sensor interfacing, serial communication, and hardware-software integration.',
        appliedInProjectSlugs: [],
      },
    ],
  },
];
