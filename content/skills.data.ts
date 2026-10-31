import { CapabilityCategory, CapabilityItem } from './types';

export type SkillItem = CapabilityItem;
export type SkillCategory = CapabilityCategory;

export interface StackTrayItem {
  name: string;
  categoryCode: string;
  description: string;
  icon: string;
  badge?: string;
  highlight?: boolean;
  context?: string;
  level: 'Working Knowledge' | 'Proficient' | 'Advanced Production Exposure';
  appliedInProjectSlugs: string[];
}

export interface StackTray {
  id: string;
  trayNumber: string; // e.g. "01 / 08"
  code: string;       // "LANG", "FE", "BE", "DATA", "OPS", "TOOLS", "DSGN", "ENGR"
  title: string;
  count: number;
  description: string;
  items: StackTrayItem[];
}

export interface ProjectRegisterItem {
  number: string;
  name: string;
  slug?: string;
  tagline: string;
  isHardware?: boolean;
}

export const projectRegister: ProjectRegisterItem[] = [
  {
    number: '01',
    name: 'TravelHub',
    slug: 'travel-hub-platform',
    tagline: 'Sri Lanka Tourist Booking Platform (Spring Boot + React)',
  },
  {
    number: '02',
    name: 'IdeaPad',
    slug: 'ideapad-blog-platform',
    tagline: 'Publishing & Blog Platform (Spring Boot + React)',
  },
  {
    number: '03',
    name: 'Solar BMS',
    tagline: 'Intelligent Solar Energy Management System (Microcontroller / IoT)',
    isHardware: true,
  },
  {
    number: '04',
    name: 'EduTrack',
    slug: 'edutrack-campus-portal',
    tagline: 'Campus Academic Portal (HTML5 + Tailwind CSS)',
  },
  {
    number: '05',
    name: 'EShop',
    slug: 'eshop-ecommerce-platform',
    tagline: 'Dynamic E-Commerce Platform (Node.js + Express + MongoDB)',
  },
];

export const stackTrays: StackTray[] = [
  {
    id: 'languages',
    trayNumber: '01 / 08',
    code: 'LANG',
    title: 'Languages',
    count: 8,
    description:
      'Core programming and query languages used for production backend services, interactive client interfaces, and systems engineering.',
    items: [
      {
        name: 'Java',
        categoryCode: 'LANG',
        icon: 'java',
        level: 'Proficient',
        description: 'Core OOP, multithreading, data structures, and enterprise Spring Boot services.',
        context: 'Enterprise backend architecture and Spring Boot services.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'JavaScript',
        categoryCode: 'LANG',
        icon: 'javascript',
        level: 'Advanced Production Exposure',
        description: 'Modern ES6+ asynchronous programming, Promises, DOM manipulation, and full-stack modules.',
        context: 'Modern asynchronous client/server applications.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'TypeScript',
        categoryCode: 'LANG',
        icon: 'typescript',
        level: 'Proficient',
        description: 'Type-safe interfaces, strict typing, generics, and component contracts.',
        context: 'Type-safe frontend and full-stack architectures.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Python',
        categoryCode: 'LANG',
        icon: 'python',
        level: 'Working Knowledge',
        description: 'Algorithmic problem solving, automation scripting, AI fundamentals, and data utilities.',
        context: 'Scripting, algorithmic workflows, and automation.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'C',
        categoryCode: 'LANG',
        icon: 'c',
        level: 'Working Knowledge',
        description: 'Low-level memory management, pointers, and foundational computer systems engineering.',
        context: 'Memory management and foundational systems coursework.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'C++',
        categoryCode: 'LANG',
        icon: 'cpp',
        level: 'Proficient',
        description: 'Object-oriented systems, 2D game physics, OpenGL graphics, and WebAssembly compilation.',
        context: 'High-performance graphics algorithms and game engineering.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'PHP',
        categoryCode: 'LANG',
        icon: 'php',
        level: 'Working Knowledge',
        description: 'Server-side web scripting, relational database queries, and backend processing.',
        context: 'Backend web scripting and request processing.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'SQL',
        categoryCode: 'LANG',
        icon: 'sql',
        level: 'Proficient',
        description: 'Relational query design, multi-table joins, subqueries, and database indexing.',
        context: 'Relational data modeling for PostgreSQL and MySQL.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
    ],
  },
  {
    id: 'frontend',
    trayNumber: '02 / 08',
    code: 'FE',
    title: 'Frontend',
    count: 7,
    description:
      'Component-driven client SPAs, server-rendered applications, responsive web interfaces, and mobile applications.',
    items: [
      {
        name: 'React.js',
        categoryCode: 'FE',
        icon: 'react',
        level: 'Advanced Production Exposure',
        description: 'Component-driven SPAs, custom hooks, reusable state pipelines, and design systems.',
        context: 'Interactive client SPAs with reusable component hierarchies.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform'],
      },
      {
        name: 'Next.js',
        categoryCode: 'FE',
        icon: 'nextjs',
        level: 'Proficient',
        description: 'Server-side rendering, App Router architecture, API route proxies, and static generation.',
        context: 'Modern production React applications with App Router.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'React Native',
        categoryCode: 'FE',
        icon: 'reactnative',
        level: 'Proficient',
        description: 'Cross-platform mobile apps, native device integration, Expo Router, and touch gestures.',
        context: 'Offline-first mobile development with SQLite integration.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'HTML5',
        categoryCode: 'FE',
        icon: 'html5',
        level: 'Advanced Production Exposure',
        description: 'Semantic markup, accessible structure, WCAG standards, and SEO metadata.',
        context: 'Semantic, highly accessible document structuring.',
        appliedInProjectSlugs: ['edutrack-campus-portal', 'travel-hub-platform'],
      },
      {
        name: 'CSS3',
        categoryCode: 'FE',
        icon: 'css3',
        level: 'Advanced Production Exposure',
        description: 'Modern CSS Grid, Flexbox, custom properties, animations, and responsive viewports.',
        context: 'Fluid responsive styling and cross-browser layouts.',
        appliedInProjectSlugs: ['edutrack-campus-portal', 'travel-hub-platform'],
      },
      {
        name: 'Tailwind CSS',
        categoryCode: 'FE',
        icon: 'tailwind',
        level: 'Advanced Production Exposure',
        description: 'Utility-first rapid UI styling, custom design tokens, dark themes, and responsive layouts.',
        context: 'Tokenized arcade design systems and responsive interfaces.',
        appliedInProjectSlugs: ['travel-hub-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'Bootstrap',
        categoryCode: 'FE',
        icon: 'bootstrap',
        level: 'Proficient',
        description: 'Responsive grid systems, modular UI components, dashboards, and modal interfaces.',
        context: 'Rapid UI layouts and administrative dashboard components.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
    ],
  },
  {
    id: 'backend',
    trayNumber: '03 / 08',
    code: 'BE',
    title: 'Backend',
    count: 5,
    description:
      'Enterprise RESTful APIs, Spring Security with JWT authentication, relational transaction management, and Node middleware.',
    items: [
      {
        name: 'Spring Boot',
        categoryCode: 'BE',
        icon: 'springboot',
        level: 'Advanced Production Exposure',
        description: 'Enterprise REST microservices, Spring Security, Spring Data JPA, and MVC architecture.',
        context: 'Production REST APIs with role-based JWT authentication.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'Node.js',
        categoryCode: 'BE',
        icon: 'nodejs',
        level: 'Proficient',
        description: 'Asynchronous event-driven server runtime, stream processing, and NPM package ecosystems.',
        context: 'Asynchronous server environments and API gateways.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
      {
        name: 'Express.js',
        categoryCode: 'BE',
        icon: 'express',
        level: 'Proficient',
        description: 'RESTful API routing, middleware chains, CORS handling, and JSON payload serialization.',
        context: 'Middleware-driven REST APIs and request pipelines.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
      {
        name: 'REST APIs',
        categoryCode: 'BE',
        icon: 'rest',
        level: 'Advanced Production Exposure',
        description: 'Stateless resource endpoints, HTTP status standards, query parameters, and pagination.',
        context: 'Stateless JSON endpoints adhering to REST architectural standards.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform'],
      },
      {
        name: 'JWT Authentication',
        categoryCode: 'BE',
        icon: 'jwt',
        level: 'Advanced Production Exposure',
        description: 'Stateless security tokens, HMAC-SHA signature verification, and role-based access control.',
        context: 'Secure token authentication, refresh tokens, and route protection.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
    ],
  },
  {
    id: 'data',
    trayNumber: '04 / 08',
    code: 'DATA',
    title: 'Data',
    count: 6,
    description:
      'Relational schema design, ACID transactional integrity, PostgreSQL performance indexing, and document data models.',
    items: [
      {
        name: 'PostgreSQL',
        categoryCode: 'DATA',
        icon: 'postgresql',
        level: 'Advanced Production Exposure',
        description: 'Relational data schemas, ACID transactional guarantees, foreign keys, and indexes.',
        context: 'Relational data models and Spring Data JPA integration.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'MySQL',
        categoryCode: 'DATA',
        icon: 'mysql',
        level: 'Proficient',
        description: 'Normalized database design (3NF), relational table joins, and transactional consistency.',
        context: 'Normalized schema modeling and transactional integrity.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'MongoDB',
        categoryCode: 'DATA',
        icon: 'mongodb',
        level: 'Proficient',
        description: 'NoSQL document modeling, BSON schema validation, aggregation pipelines, and Mongoose ORM.',
        context: 'Flexible document schemas for product catalogs and orders.',
        appliedInProjectSlugs: ['eshop-ecommerce-platform'],
      },
      {
        name: 'SQLite',
        categoryCode: 'DATA',
        icon: 'sqlite',
        level: 'Proficient',
        description: 'Embedded zero-configuration local database, mobile offline caching, and query storage.',
        context: 'Local embedded storage for offline-first mobile applications.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Supabase',
        categoryCode: 'DATA',
        icon: 'supabase',
        level: 'Proficient',
        description: 'Postgres-backed cloud services, auto-generated REST APIs, and authentication backends.',
        context: 'PostgreSQL-backed cloud database and authentication layer.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'Firebase',
        categoryCode: 'DATA',
        icon: 'firebase',
        level: 'Proficient',
        description: 'Real-time database synchronisation, Cloud Firestore document stores, and authentication.',
        context: 'Real-time cloud database and client synchronization.',
        appliedInProjectSlugs: [],
      },
    ],
  },
  {
    id: 'cloud-devops',
    trayNumber: '05 / 08',
    code: 'OPS',
    title: 'Cloud & DevOps',
    count: 7,
    description:
      'Containerization, automated build workflows, continuous integration, and edge-deployed cloud hosting infrastructure.',
    items: [
      {
        name: 'Docker',
        categoryCode: 'OPS',
        icon: 'docker',
        level: 'Proficient',
        description: 'Containerized application packaging, Dockerfile builds, and multi-service development.',
        context: 'Container environments for reproducible local execution.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Git',
        categoryCode: 'OPS',
        icon: 'git',
        level: 'Advanced Production Exposure',
        description: 'Branching models, merge conflict resolution, rebase workflows, and commit hygiene.',
        context: 'Collaborative version control and Git-flow release cycles.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'GitHub',
        categoryCode: 'OPS',
        icon: 'github',
        level: 'Advanced Production Exposure',
        description: 'Pull request reviews, issue tracking, release tagging, and project documentation.',
        context: 'Centralized collaborative code review and repository hosting.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'CI/CD Pipelines',
        categoryCode: 'OPS',
        icon: 'cicd',
        level: 'Proficient',
        description: 'Automated test runners, build pipelines, and continuous deployment workflows.',
        context: 'Automated validation, linting, and deployment triggers.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Linux',
        categoryCode: 'OPS',
        icon: 'linux',
        level: 'Proficient',
        description: 'Unix shell command-line environments, Bash scripting, process management, and SSH.',
        context: 'Server environment configuration and shell scripting.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'Vercel',
        categoryCode: 'OPS',
        icon: 'vercel',
        level: 'Advanced Production Exposure',
        description: 'Edge cloud hosting, serverless functions, automated PR preview deployments, and analytics.',
        context: 'Global edge deployment and continuous delivery.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'AWS',
        categoryCode: 'OPS',
        icon: 'aws',
        level: 'Working Knowledge',
        description: 'Cloud infrastructure essentials, S3 storage, IAM security roles, and cloud computing fundamentals.',
        context: 'AWS Cloud practitioner fundamentals and object storage.',
        appliedInProjectSlugs: [],
      },
    ],
  },
  {
    id: 'dev-tools',
    trayNumber: '06 / 08',
    code: 'TOOLS',
    title: 'Dev Tools',
    count: 5,
    description:
      'Distributed version control, collaborative code reviews, integrated development environments, and debuggers.',
    items: [
      {
        name: 'Postman',
        categoryCode: 'TOOLS',
        icon: 'postman',
        level: 'Advanced Production Exposure',
        description: 'REST API testing, request collections, automated integration checks, and environment variables.',
        context: 'Automated endpoint testing and API contract verification.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'VS Code',
        categoryCode: 'TOOLS',
        icon: 'vscode',
        level: 'Advanced Production Exposure',
        description: 'Full-stack development workspace, TypeScript linting, extensions, and integrated terminal.',
        context: 'Primary frontend and JavaScript/TypeScript IDE.',
        appliedInProjectSlugs: ['travel-hub-platform', 'eshop-ecommerce-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'IntelliJ IDEA',
        categoryCode: 'TOOLS',
        icon: 'intellij',
        level: 'Advanced Production Exposure',
        description: 'Enterprise Java development, Spring Boot tooling, JVM debuggers, and Maven dependency management.',
        context: 'Enterprise backend development and JVM profiling.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
      {
        name: 'Expo',
        categoryCode: 'TOOLS',
        icon: 'expo',
        level: 'Proficient',
        description: 'React Native development framework, mobile simulator testing, and OTA update toolchains.',
        context: 'Mobile development toolchain and emulator runtime.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Figma',
        categoryCode: 'TOOLS',
        icon: 'figma',
        level: 'Advanced Production Exposure',
        description: 'Wireframing, interactive UI/UX prototyping, design systems, and responsive asset exports.',
        context: 'High-fidelity UI prototyping and component design specifications.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
    ],
  },
  {
    id: 'design',
    trayNumber: '07 / 08',
    code: 'DSGN',
    title: 'Design & Modeling',
    count: 4,
    description:
      'User interface prototyping, UML architecture diagrams, design systems, and responsive viewport specifications.',
    items: [
      {
        name: 'Figma UI/UX',
        categoryCode: 'DSGN',
        icon: 'figma',
        level: 'Advanced Production Exposure',
        description: 'User experience journeys, design systems, high-fidelity mockups, and client flows.',
        context: 'End-to-end user flows and responsive visual design.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'UML Modeling',
        categoryCode: 'DSGN',
        icon: 'uml',
        level: 'Proficient',
        description: 'Class diagrams, sequence diagrams, entity-relationship models, and system architectures.',
        context: 'System domain models and architecture blueprints.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
      {
        name: 'Responsive UI',
        categoryCode: 'DSGN',
        icon: 'responsive',
        level: 'Advanced Production Exposure',
        description: 'Fluid grid layouts, adaptive touch targets, breakpoint scaling, and mobile-first design.',
        context: 'Accessible, mobile-first layouts across all screen resolutions.',
        appliedInProjectSlugs: ['travel-hub-platform', 'edutrack-campus-portal'],
      },
      {
        name: 'Design Systems',
        categoryCode: 'DSGN',
        icon: 'designsystems',
        level: 'Proficient',
        description: 'Atomic component design, tokenized colors, accessible typography, and UI consistency.',
        context: 'Design token architecture and reusable UI patterns.',
        appliedInProjectSlugs: ['travel-hub-platform'],
      },
    ],
  },
  {
    id: 'engineering',
    trayNumber: '08 / 08',
    code: 'ENGR',
    title: 'Engineering & IoT',
    count: 6,
    description:
      'Hardware-software interfacing, embedded firmware, sensor telemetry, graphics programming, and WebAssembly.',
    items: [
      {
        name: 'Arduino',
        categoryCode: 'ENGR',
        icon: 'arduino',
        level: 'Working Knowledge',
        description: 'Microcontroller programming, GPIO sensor interfacing, serial communication, and actuators.',
        context: 'Microcontroller hardware-software interfacing and sensors.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Embedded Systems',
        categoryCode: 'ENGR',
        icon: 'embedded',
        level: 'Working Knowledge',
        description: 'Hardware-level firmware, interrupt handlers, analog-to-digital conversion, and power optimization.',
        context: 'Firmware development and embedded logic.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'IoT Telemetry',
        categoryCode: 'ENGR',
        icon: 'iot',
        level: 'Working Knowledge',
        description: 'Remote sensor data collection, wireless communication, and battery monitoring telemetry.',
        context: 'Sensor telemetry streams and remote monitoring.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'OpenGL',
        categoryCode: 'ENGR',
        icon: 'opengl',
        level: 'Proficient',
        description: '2D/3D graphics pipelines, rasterization algorithms, clipping, matrices, and shader concepts.',
        context: 'Rasterization algorithms and graphics pipeline implementations.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'WebAssembly',
        categoryCode: 'ENGR',
        icon: 'webassembly',
        level: 'Proficient',
        description: 'Compiling high-performance C++ binaries into WebAssembly (Emscripten) for browser execution.',
        context: 'Browser-compiled high-performance C++ runtime.',
        appliedInProjectSlugs: [],
      },
      {
        name: 'Object-Oriented Programming (OOP)',
        categoryCode: 'ENGR',
        icon: 'oop',
        level: 'Advanced Production Exposure',
        description: 'Encapsulation, inheritance, polymorphism, abstraction, and clean SOLID architectural principles.',
        context: 'SOLID principles, software design patterns, and modular OOP architecture.',
        appliedInProjectSlugs: ['travel-hub-platform', 'ideapad-blog-platform'],
      },
    ],
  },
];

// Unified skillsData derived directly from stackTrays for profile.service and validator compatibility
export const skillsData: CapabilityCategory[] = stackTrays.map((tray) => ({
  id: tray.id,
  title: tray.title,
  description: tray.description,
  items: tray.items.map((item) => ({
    name: item.name,
    level: item.level,
    context: item.description,
    appliedInProjectSlugs: item.appliedInProjectSlugs,
  })),
}));
