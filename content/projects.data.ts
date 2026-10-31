import { Project } from './types';

export const projectsData: Project[] = [
  {
    slug: 'travel-hub-platform',
    title: 'Travel Hub — Sri Lanka Tourist Package Platform',
    headline:
      'A full-stack tourism booking web application connecting travelers to curated Sri Lankan tour packages with interactive filtering and booking workflows.',
    conciseOutcome:
      'Engineered tourist dashboard module, package search & filtering, booking workflow, and responsive React/Spring Boot integration.',
    featured: true,
    order: 1,
    status: 'shipped',
    category: 'Full-Stack Web Application',
    period: '2024 – 2025',
    year: '2025',
    duration: '4 Months',
    role: 'Full-Stack Developer & UI/UX Designer',
    teamSize: 4,
    isAcademic: true,
    context:
      'Developed as an academic software engineering capstone project at the University of Moratuwa to solve fragmented tour discovery and booking management for tourists exploring Sri Lanka.',
    technologies: ['React.js', 'Spring Boot', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'REST APIs', 'Figma'],
    stack: ['React.js', 'Spring Boot', 'Tailwind CSS', 'PostgreSQL', 'Supabase', 'REST APIs', 'Figma'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7518732678418886656/',
    repoUrl: 'https://github.com/EricPraveen/travelhub',
    demoUrl: 'https://travelhublanka.netlify.app/',
    coverImage: {
      src: '/images/projects/travelhub-linkedin.jpg',
      alt: 'Travel Hub — Sri Lanka Tourist Package Search & Booking Platform Interface',
      width: 1200,
      height: 675,
      caption: 'Travel Hub Tourist Dashboard and Package Exploration Interface',
    },
    problem:
      'Travelers visiting Sri Lanka often struggle with scattered tour options, opaque booking processes, and inconsistent itinerary filtering across multiple local agencies.',
    constraints: [
      'Must provide a unified tourist dashboard for browsing, filtering, and managing package reservations.',
      'Must maintain clean separation between React frontend client and Spring Boot REST API microservices.',
      'Must persist structured package itineraries, user reviews, and reservation records in a relational PostgreSQL schema.',
      'UI must be fully responsive across mobile, tablet, and desktop viewports.',
    ],
    personalRole:
      'Led the Tourist Dashboard module development: designed high-fidelity Figma prototypes and UML diagrams, implemented React package search/filtering components, engineered booking request flows, and built review/rating integrations.',
    contributions: [
      'Designed interactive high-fidelity user interface wireframes and prototypes in Figma, establishing responsive UI components.',
      'Constructed modular React.js frontend views with Tailwind CSS for package discovery, multi-facet category filtering (location, budget, duration), and real-time search.',
      'Engineered the end-to-end tourist booking workflow with dynamic reservation status tracking and form validation.',
      'Implemented user review and rating submission interfaces integrated with Spring Boot REST API endpoints.',
      'Formulated the conceptual recommendation system architecture to suggest complementary travel packages based on destination preferences.',
      'Authored UML sequence and class diagrams to document data flows between React client components, Spring Boot controllers, and PostgreSQL tables.',
    ],
    architecture: {
      summary:
        'A component-driven React.js single-page application communicating via stateless RESTful JSON APIs with a Spring Boot backend, persisting relational travel packages, user bookings, and reviews in PostgreSQL.',
      textAlternative:
        'Architectural diagram showing Tourist interacting with React.js Client UI (Tailwind CSS), making HTTP REST API calls to Spring Boot Controller Services, persisting booking and package data in PostgreSQL Database, and referencing Figma UI/UX specifications.',
      keyComponents: [
        {
          name: 'Tourist Dashboard Client (React.js)',
          role: 'UI & State Management',
          description:
            'Delivers responsive package browsing, dynamic category filtering, search bars, and interactive booking modal components with Tailwind CSS styling.',
        },
        {
          name: 'Spring Boot REST Controller Layer',
          role: 'Business Logic & Endpoints',
          description:
            'Exposes structured RESTful API endpoints for package querying, reservation creation, user authentication, and review submissions.',
        },
        {
          name: 'PostgreSQL Relational Ledger',
          role: 'Data Persistence',
          description:
            'Stores normalized entity tables for packages, tourist profiles, reservations, itinerary schedules, and ratings with relational integrity.',
        },
        {
          name: 'Figma Design System & UML Models',
          role: 'UX & Architecture Specification',
          description:
            'Comprehensive design system and UML class/sequence specifications aligning team development across frontend and backend milestones.',
        },
      ],
    },
    decisions: [
      {
        title: 'Spring Boot REST API with React.js vs. Monolithic Server Templates',
        decision:
          'Decoupled the architecture into an independent React SPA frontend and a stateless Spring Boot REST API backend.',
        why: 'Enables parallel team development, clean separation of concerns, and distinct deployment lifecycles (Netlify for frontend, cloud container for Spring Boot).',
        tradeoff:
          'Requires explicit CORS configuration, client-side token management, and structured error handling across network boundaries.',
        alternativesConsidered: [
          'Server-Side Thymeleaf templates (Tighter coupling making modern responsive mobile UI harder to maintain)',
          'Node.js Express backend (Team chose Java/Spring Boot to leverage strong typing, JPA repository abstractions, and enterprise coursework alignment)',
        ],
      },
      {
        title: 'PostgreSQL Relational Schema vs. NoSQL Document Store',
        decision:
          'Used PostgreSQL for storing tour packages, bookings, user profiles, and ratings.',
        why: 'Booking records require strict relational integrity, foreign key constraints (tourist_id -> package_id), and transactional consistency for reservation statuses.',
        tradeoff:
          'Schema migrations require explicit DDL updates when introducing new package attributes.',
        alternativesConsidered: [
          'MongoDB (Flexible schemas, but lack of strict relational constraints risks orphaned reservation records during concurrent updates)',
        ],
      },
    ],
    buildLog: [
      {
        milestone: 'UI/UX Prototyping & UML Specification',
        date: 'Month 1',
        details:
          'Constructed high-fidelity Figma interactive prototypes and authored UML class and sequence diagrams mapping out tourist booking flows.',
      },
      {
        milestone: 'Frontend Discovery & Filter Implementation',
        date: 'Month 2',
        details:
          'Implemented React package cards, multi-facet category filters, search bars, and responsive grid layouts using Tailwind CSS.',
      },
      {
        milestone: 'REST API Integration & Booking Flow',
        date: 'Month 3',
        details:
          'Integrated Spring Boot REST endpoints for booking creation, package listing retrieval, and dynamic review submissions.',
      },
      {
        milestone: 'End-to-End Testing & Live Deployment',
        date: 'Month 4',
        details:
          'Conducted cross-browser responsive testing, validated PostgreSQL queries, and deployed live client build to Netlify.',
      },
    ],
    artifacts: [
      {
        id: 'art-travel-filter',
        title: 'Tourist Package Filter & Search Handler',
        type: 'code',
        description: 'React custom hook managing multi-criteria destination and query filtering.',
        language: 'typescript',
      },
    ],
    quality: {
      testing: 'Component testing on React filter logic and endpoint integration testing in Spring Boot.',
      security: 'CORS protection, input validation on booking requests, and parameterized JPA queries preventing SQL injection.',
      accessibility: 'WCAG 2.2 AA compliant contrast, semantic buttons, and responsive touch targets.',
      performance: 'Static bundle optimized on Netlify with sub-second API JSON response times.',
    },
    outcomes: [
      'Successfully deployed live platform accessible at travelhublanka.netlify.app.',
      'Delivered fully functional Tourist Dashboard module with search, filter, booking flow, and review interfaces.',
      'Completed comprehensive Figma prototypes and UML design artifacts aligning team execution.',
    ],
    lessonsLearned: [
      'Early Figma component prototyping drastically accelerates React frontend development and reduces CSS refactoring.',
      'Establishing clean DTO contracts between frontend and backend teams prevents schema misalignment during API integration.',
    ],
    v2Improvements: [
      'Integrate payment gateway (Stripe / PayHere) for automated checkout completion.',
      'Implement machine-learning-based personalized tour package recommendations.',
    ],
    evidence: [
      {
        label: 'LinkedIn Project Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7518732678418886656/',
        type: 'external',
        isExternal: true,
        note: 'Complete video presentation and architectural overview on LinkedIn',
      },
      {
        label: 'Live Netlify Deployment',
        url: 'https://travelhublanka.netlify.app/',
        type: 'demo',
        isExternal: true,
        note: 'Live interactive production build',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/EricPraveen/travelhub',
        type: 'github',
        isExternal: true,
        note: 'Complete source code repository',
      },
      {
        label: 'Figma Interactive Prototype',
        url: 'https://www.figma.com/proto/WAY9zYrASNhdr0Fjej69zb/Travel-Hub?node-id=0-1&t=jnBrkBLbAn8TDWtC-1',
        type: 'figma',
        isExternal: true,
        note: 'High-fidelity UI/UX design prototype',
      },
    ],
  },
  {
    slug: 'chicken-shooting-game',
    title: 'Chicken Invaders — 2D Retro Arcade Space Shooter',
    headline:
      'A retro arcade space shooting game featuring custom computer graphics algorithms, enemy waves, boss battles, collision physics, and WebAssembly compilation for seamless browser gameplay.',
    conciseOutcome:
      'Implemented foundational computer graphics algorithms in C++, designed particle physics and collision detection, and compiled to WebAssembly via Emscripten.',
    featured: true,
    order: 2,
    status: 'shipped',
    category: 'Computer Graphics & WebAssembly',
    period: '2024 – 2025',
    year: '2025',
    duration: '3 Months',
    role: 'Graphics & Engine Programmer',
    teamSize: 3,
    isAcademic: true,
    context:
      'Developed as an academic computer graphics engineering project at the University of Moratuwa to implement low-level 2D rasterization algorithms from scratch and compile native C++ OpenGL to modern WebAssembly.',
    technologies: ['C++', 'OpenGL', 'GLUT', 'WebAssembly', 'HTML5 Canvas'],
    stack: ['C++', 'OpenGL', 'GLUT', 'WebAssembly', 'HTML5 Canvas'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7501263644329058304/',
    repoUrl: 'https://github.com/EricPraveen/Chicken-Shooting',
    demoUrl: 'https://chicken-shooting.vercel.app',
    coverImage: {
      src: '/images/projects/chicken-shooting-linkedin.jpg',
      alt: 'Chicken Invaders — 2D Retro Arcade Space Shooter in C++ and OpenGL',
      width: 1200,
      height: 675,
      caption: 'Chicken Invaders WebAssembly Gameplay and Boss Battle Interface',
    },
    problem:
      'Implementing classic arcade game mechanics from pure mathematical principles requires custom rasterization algorithms, 60fps frame loop management, and cross-platform compilation without heavy game engines.',
    constraints: [
      'Must implement Bresenham line algorithm, Midpoint circle algorithm, and Scan-Line polygon fill from mathematical scratch.',
      'Must handle real-time AABB collision detection and particle explosion effects.',
      'Must compile native C++ code to WebAssembly (Wasm) using Emscripten for zero-install web browser execution.',
    ],
    personalRole:
      'Programmed core rasterization algorithms, engineered particle physics and projectile trajectories, built collision detection systems, and configured the Emscripten WebAssembly compilation pipeline.',
    contributions: [
      'Implemented Bresenham line and Midpoint circle drawing algorithms to render vector game assets on raw pixel buffers.',
      'Developed Cohen-Sutherland line clipping and 2D matrix transformation pipelines for dynamic sprite scaling and rotation.',
      'Engineered multi-phase boss battle AI state machines, escalating attack waves, and player life counters.',
      'Configured Emscripten toolchain to cross-compile C++/OpenGL code into WebAssembly with HTML5 canvas bindings.',
    ],
    architecture: {
      summary:
        'A high-performance C++ game engine utilizing OpenGL and GLUT compiled via Emscripten into WebAssembly, running directly inside an HTML5 canvas element at 60fps.',
      keyComponents: [
        {
          name: 'Core Graphics Math Pipeline',
          role: 'Rasterization & Transformations',
          description:
            'Implements mathematical drawing algorithms (Bresenham, Midpoint, Scan-Line) and 2D matrix transformations.',
        },
        {
          name: 'Game Loop & Physics Engine',
          role: 'Collision & Wave Management',
          description:
            'Executes 60fps game loop, AABB collision detection, bullet trajectories, and particle systems.',
        },
        {
          name: 'Emscripten WebAssembly Bridge',
          role: 'Browser Compilation & Canvas I/O',
          description:
            'Bridges native OpenGL/GLUT calls to WebGL and HTML5 canvas APIs for zero-dependency browser execution.',
        },
      ],
    },
    decisions: [
      {
        title: 'Custom Math Rasterization vs. Prebuilt Game Engines (Unity/Godot)',
        decision:
          'Built the entire graphics rendering pipeline in C++ and OpenGL without third-party game engines.',
        why: 'Required deep academic mastery of low-level graphics algorithms, computational geometry, and pixel-level frame manipulation.',
        tradeoff:
          'Required manual implementation of collision physics, matrix math, and window event listeners.',
        alternativesConsidered: [
          'Unity / Unreal Engine (Heavy runtime overhead, hides fundamental computer graphics algorithms)',
        ],
      },
    ],
    buildLog: [
      {
        milestone: 'Algorithm Implementation & Window Setup',
        date: 'Month 1',
        details: 'Implemented Bresenham, Midpoint Circle, and Cohen-Sutherland clipping in OpenGL.',
      },
      {
        milestone: 'Game Mechanics & Boss Battles',
        date: 'Month 2',
        details: 'Engineered wave spawning, collision detection, and particle explosion systems.',
      },
      {
        milestone: 'Emscripten WebAssembly Compilation & Vercel Deploy',
        date: 'Month 3',
        details: 'Compiled C++ codebase to Wasm and deployed live interactive build to Vercel.',
      },
    ],
    quality: {
      testing: 'Rigorous 60fps benchmark testing across Chrome, Firefox, and Safari with WebAssembly.',
      security: 'Sandboxed WebAssembly execution environment inside modern browser security contexts.',
      accessibility: 'Keyboard accessible controls (Arrow keys + Spacebar) with on-screen visual hints.',
      performance: 'Near-native C++ performance running at consistent 60 frames per second in browser.',
    },
    outcomes: [
      'Successfully compiled and deployed playable WebAssembly build live on Vercel at chicken-shooting.vercel.app.',
      'Achieved stable 60fps retro arcade experience with boss battles, particle effects, and scoring.',
    ],
    lessonsLearned: [
      'WebAssembly bridges the gap between low-level systems programming and universal web accessibility.',
      'Understanding fundamental rasterization algorithms provides intuition for modern GPU shaders and WebGL pipelines.',
    ],
    v2Improvements: [
      'Add local leaderboard persistence using IndexedDB.',
      'Support multi-player co-op mode over WebSockets.',
    ],
    evidence: [
      {
        label: 'LinkedIn Project Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7501263644329058304/',
        type: 'external',
        isExternal: true,
        note: 'Complete video demo and graphics explanation on LinkedIn',
      },
      {
        label: 'Live WebAssembly Playable Game',
        url: 'https://chicken-shooting.vercel.app',
        type: 'demo',
        isExternal: true,
        note: 'Playable WebAssembly build in web browser',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/EricPraveen/Chicken-Shooting',
        type: 'github',
        isExternal: true,
        note: 'Complete C++ and OpenGL source code repository',
      },
    ],
  },
  {
    slug: 'cricketscore-mobile-app',
    title: 'CricketScore — Offline Cricket Scoring & Analytics Mobile App',
    headline:
      'An offline-first mobile cricket scoring application supporting match setup, interactive toss, scoring engine with strike rotation, undo delivery mechanism, and SQLite ball-by-ball analytics.',
    conciseOutcome:
      'Engineered custom scoring state machine, strike rotation logic, extras handling, undo mechanism, and offline SQLite relational persistence.',
    featured: true,
    order: 3,
    status: 'shipped',
    category: 'Mobile Application',
    period: '2025',
    year: '2025',
    duration: '3 Months',
    role: 'Sole Mobile App Developer',
    teamSize: 1,
    isAcademic: false,
    context:
      'Developed as an independent software engineering project to solve the lack of dependable, offline-capable scoring applications for local cricket matches and club tournaments.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Expo Router', 'Reanimated'],
    stack: ['React Native', 'TypeScript', 'Expo', 'SQLite', 'Expo Router', 'Reanimated'],
    linkedInUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/projects/',
    repoUrl: 'https://github.com/EricPraveen/CricketScore',
    coverImage: {
      src: '/images/projects/cricketscore-cover.svg',
      alt: 'CricketScore Offline Cricket Scoring and Analytics Mobile App Interface',
      width: 1200,
      height: 675,
      caption: 'CricketScore Live Match Scoring and Ball-by-Ball Analytics Dashboard',
    },
    problem:
      'Community cricket grounds often lack reliable mobile internet access, causing web-based scoring tools to freeze, lose delivery records, or fail during critical match moments.',
    constraints: [
      'Must operate completely offline without internet connectivity, storing all matches locally.',
      'Must enforce complex cricket scoring rules: strike rotation, wide/no-ball extras, bye/leg-bye, free hits, and overs change.',
      'Must provide an instant undo delivery mechanism that rolls back database state cleanly without data corruption.',
      'Must maintain 60fps smooth UI animations using React Native Reanimated.',
    ],
    personalRole:
      'Architected and implemented the entire mobile application: designed SQLite relational schema, wrote the cricket rule engine state machine, built responsive touch keypad interfaces, and implemented animated milestone overlays.',
    contributions: [
      'Engineered an offline-first SQLite database schema modeling matches, innings, player rosters, and ball-by-ball delivery events with transactional consistency.',
      'Developed an immutable cricket scoring engine managing strike rotation, boundary counts, bowler spell quotas, and extras calculations.',
      'Built a robust delivery undo mechanism that reconstructs previous innings state atomically.',
      'Designed a high-visibility scoring UI with large tactile buttons optimized for direct sunlight outdoor mobile use.',
      'Integrated React Native Reanimated for milestone celebration animations (fifties, centuries, hat-tricks) and live worm graphs.',
    ],
    architecture: {
      summary:
        'A local-first React Native mobile application built on Expo and TypeScript, executing scoring state machine calculations locally and persisting normalized relational data in SQLite.',
      keyComponents: [
        {
          name: 'Tactile Scoring Interface (React Native / Expo)',
          role: 'Touchpad & Scorecard UI',
          description:
            'Delivers responsive ball input keypad, live scorecard summaries, partnership charts, and milestone visual celebrations.',
        },
        {
          name: 'Cricket Rules State Machine Engine',
          role: 'Match Logic & Rule Validation',
          description:
            'Enforces strike rotation, bowler over change, extras calculations, free-hit flags, and player statistics.',
        },
        {
          name: 'Local SQLite Relational Ledger',
          role: 'Offline-First Persistence',
          description:
            'Stores structured tables for teams, matches, innings, deliveries, and fall of wickets with transactional ACID guarantees.',
        },
      ],
    },
    decisions: [
      {
        title: 'Local-First SQLite vs. Cloud-Only Firebase Database',
        decision:
          'Adopted an offline-first SQLite relational database embedded directly inside the mobile app bundle.',
        why: 'Cricket matches played on community grounds often have zero or spotty cellular connectivity. Local SQLite guarantees instant response times and zero data loss.',
        tradeoff:
          'Requires explicit export/import routines to share scorecards between devices rather than automatic real-time cloud sync.',
        alternativesConsidered: [
          'Firebase Realtime Database (Requires constant internet connection; drops scoring inputs when signal is lost in open fields)',
        ],
      },
    ],
    buildLog: [
      {
        milestone: 'Cricket Rules Engine & State Machine',
        date: 'Month 1',
        details: 'Architected state transitions for strike rotation, extras, wickets, and undo delivery stack.',
      },
      {
        milestone: 'SQLite Schema & Transactional Operations',
        date: 'Month 2',
        details: 'Implemented SQLite migrations and CRUD operations for match creation and ball recording.',
      },
      {
        milestone: 'Tactile UI & Reanimated Milestone Celebrations',
        date: 'Month 3',
        details: 'Crafted outdoor-optimized UI with large touch targets and celebratory animations.',
      },
    ],
    quality: {
      testing: 'Unit tests covering all edge-case scoring rules (e.g. no-ball run-out, overthrow boundaries, tie-breakers).',
      security: 'Fully sandboxed local storage on device with zero telemetry tracking.',
      accessibility: 'High contrast text and large touch target hit-boxes suitable for outdoor daylight usage.',
      performance: 'Instantaneous touch feedback with sub-5ms local SQLite delivery insert times.',
    },
    outcomes: [
      'Created and published complete open-source mobile application on GitHub at github.com/EricPraveen/CricketScore.',
      'Successfully scored live university practice matches with zero network dependency.',
    ],
    lessonsLearned: [
      'Offline-first architectures provide superior reliability and user trust for critical real-time recording tasks.',
      'State machines with reversible event logs simplify complex undo and redo functionality.',
    ],
    v2Improvements: [
      'Add PDF match summary report generation and export.',
      'Implement Bluetooth / WiFi-Direct match sync between scorekeepers.',
    ],
    evidence: [
      {
        label: 'LinkedIn Project Details',
        url: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/projects/',
        type: 'external',
        isExternal: true,
        note: 'Project listing and documentation on LinkedIn',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/EricPraveen/CricketScore',
        type: 'github',
        isExternal: true,
        note: 'Complete React Native source code repository',
      },
    ],
  },
  {
    slug: 'ideapad-blog-platform',
    title: 'IdeaPad — Full-Stack Editorial Publishing Platform',
    headline:
      'A full-stack editorial blogging platform featuring stateless JWT authentication, role-based authorization, post CRUD, genre filtering, bookmarks, and Cloudinary media upload pipelines.',
    conciseOutcome:
      'Engineered end-to-end full-stack application with React.js, Spring Boot, PostgreSQL schema, and Cloudinary image pipelines.',
    featured: true,
    order: 4,
    status: 'shipped',
    category: 'Full-Stack Web Application',
    period: '2024 – 2025',
    year: '2025',
    duration: '3 Months',
    role: 'Sole Full-Stack Developer',
    teamSize: 1,
    isAcademic: false,
    context:
      'Developed as an independent full-stack engineering project to master secure user authentication, role-based content moderation, relational data modeling, and cloud asset pipeline integration.',
    technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'Cloudinary', 'JWT', 'REST APIs'],
    stack: ['React.js', 'Spring Boot', 'PostgreSQL', 'Cloudinary', 'JWT', 'REST APIs'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7468553897041838081/',
    repoUrl: 'https://github.com/EricPraveen/IdeaPad',
    coverImage: {
      src: '/images/projects/ideapad-linkedin.jpg',
      alt: 'IdeaPad Full-Stack Publishing and Blog Platform Interface',
      width: 1200,
      height: 675,
      caption: 'IdeaPad Editorial Publishing and Genre Discovery Interface',
    },
    problem:
      'Content publishing platforms require secure authentication, responsive editorial tools, rich image asset hosting, and multi-faceted discovery while preventing unauthorized post modifications.',
    constraints: [
      'Must enforce secure JWT authentication with role-based access control (Admin vs. Author vs. Reader).',
      'Must support complete post CRUD operations with rich media attachment via cloud storage.',
      'Must provide genre-based content discovery, interactive likes, and user bookmarking.',
      'Must persist relational user profiles, articles, categories, and engagements in PostgreSQL.',
    ],
    personalRole:
      'Developed the application end-to-end: designed PostgreSQL relational models, implemented Spring Boot security and REST controllers, integrated Cloudinary API for image uploads, and built the responsive React.js single-page application.',
    contributions: [
      'Architected Spring Security configuration with JWT bearer tokens for stateless user session verification and protected routes.',
      'Designed normalized PostgreSQL schema modeling users, blog posts, genre categories, likes, bookmarks, and comments.',
      'Built complete REST API controllers handling post creation, editing, deletion, pagination, and genre-based filtering.',
      'Integrated Cloudinary cloud storage SDK for seamless cover image uploading and optimized asset URL delivery.',
      'Constructed React.js frontend featuring rich post creation editors, interactive like buttons, bookmark counters, and administrative moderation panels.',
    ],
    architecture: {
      summary:
        'A React.js SPA utilizing JWT authentication headers to interact with Spring Boot REST services, reading/writing relational blog entities in PostgreSQL and delegating image assets to Cloudinary CDN.',
      keyComponents: [
        {
          name: 'React.js Client Interface',
          role: 'Editorial & Discovery SPA',
          description:
            'Delivers post creation forms, genre discovery tabs, like/bookmark toggles, and author profile views with client-side routing.',
        },
        {
          name: 'Spring Security & JWT Filter',
          role: 'Authentication & RBAC',
          description:
            'Intercepts incoming requests, validates JWT signatures, extracts user roles, and grants access to protected author/admin endpoints.',
        },
        {
          name: 'PostgreSQL Relational Database',
          role: 'Relational Content Store',
          description:
            'Maintains tables for users, posts, categories, bookmarks, and likes with foreign key constraints and indexed author lookups.',
        },
        {
          name: 'Cloudinary Media Gateway',
          role: 'Cloud Asset Hosting',
          description:
            'Handles image optimization, responsive resizing, and CDN asset delivery for article banner images.',
        },
      ],
    },
    decisions: [
      {
        title: 'JWT Bearer Authentication vs. Stateful Session Cookies',
        decision:
          'Implemented stateless JSON Web Tokens (JWT) passed in the HTTP Authorization header.',
        why: 'Allows the Spring Boot backend to remain completely stateless, making horizontal scaling simple and eliminating server-side session memory overhead.',
        tradeoff:
          'Token revocation before expiration requires token blacklisting or short token expiry intervals with refresh mechanisms.',
        alternativesConsidered: [
          'HTTP Session Cookies (Requires sticky load balancing and session replication across backend instances)',
        ],
      },
    ],
    buildLog: [
      {
        milestone: 'Database Schema & Spring Security Configuration',
        date: 'Month 1',
        details:
          'Designed PostgreSQL tables for users, posts, and tags. Configured Spring Security filter chain with JWT token generation and validation.',
      },
      {
        milestone: 'Post CRUD & Cloudinary Integration',
        date: 'Month 2',
        details:
          'Engineered Spring Boot REST controllers for article publishing, genre filtering, and Cloudinary multi-part media upload handling.',
      },
      {
        milestone: 'React UI & Social Engagements',
        date: 'Month 3',
        details:
          'Constructed React.js single-page application with responsive discovery feeds, like/bookmark toggles, and author dashboard views.',
      },
    ],
    quality: {
      testing: 'Verified endpoint security with integration tests for authenticated vs. unauthenticated requests.',
      security: 'BCrypt password hashing, stateless JWT verification, and RBAC authorization annotations on admin endpoints.',
      accessibility: 'Semantic HTML5 article tags, accessible forms, and clear focus styling.',
      performance: 'Optimized Cloudinary image delivery and paginated database queries for fast feed loading.',
    },
    outcomes: [
      'Developed and published complete open-source blogging platform on GitHub at github.com/EricPraveen/IdeaPad.',
      'Delivered full JWT-secured user authentication, role-based post management, and Cloudinary media integration.',
    ],
    lessonsLearned: [
      'Stateless JWT authentication simplifies client-server architecture but requires strict frontend token storage discipline.',
      'Cloud storage integrations drastically simplify media handling in modern full-stack web applications.',
    ],
    v2Improvements: [
      'Implement real-time notification websockets for post likes and comments.',
      'Add full markdown live preview in the article creation editor.',
    ],
    evidence: [
      {
        label: 'LinkedIn Project Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7468553897041838081/',
        type: 'external',
        isExternal: true,
        note: 'Complete video walkthrough and architectural post on LinkedIn',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/EricPraveen/IdeaPad',
        type: 'github',
        isExternal: true,
        note: 'Complete full-stack source code repository',
      },
    ],
  },
  {
    slug: 'eshop-ecommerce-platform',
    title: 'EShop — Dynamic MERN E-Commerce Platform',
    headline:
      'A full-stack MERN e-commerce web application with dynamic product catalog browsing, real-time inventory tracking, order processing, and stock deduction control.',
    conciseOutcome:
      'Constructed MERN web application with RESTful APIs, dynamic MongoDB product filtering, order workflow, and automated inventory reconciliation.',
    featured: true,
    order: 5,
    status: 'shipped',
    category: 'MERN E-Commerce Application',
    period: '2024',
    year: '2024',
    duration: '3 Months',
    role: 'Full-Stack MERN Developer',
    teamSize: 1,
    isAcademic: false,
    context:
      'Engineered as an independent practical full-stack project to master the MERN stack (MongoDB, Express.js, React.js, Node.js), asynchronous REST APIs, and automated inventory management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST APIs'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Bootstrap', 'REST APIs'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7439368259797307392/',
    repoUrl: 'https://github.com/EricPraveen/EShop',
    coverImage: {
      src: '/images/projects/eshop-linkedin.jpg',
      alt: 'EShop Dynamic MERN E-Commerce Platform Storefront and Inventory Dashboard',
      width: 1200,
      height: 675,
      caption: 'EShop Dynamic Product Catalog and Cart Workflow',
    },
    problem:
      'E-commerce platforms require accurate inventory tracking to prevent overselling, responsive product filtering for seamless discovery, and reliable order state transitions.',
    constraints: [
      'Must maintain real-time inventory quantities and reject checkout attempts exceeding available stock.',
      'Must provide dynamic product search, category filtering, and administrative product CRUD operations.',
      'Must model nested order items and customer records in a flexible MongoDB document database.',
      'UI must be intuitive and responsive with Bootstrap components.',
    ],
    personalRole:
      'Designed MongoDB schemas, implemented Express.js REST APIs with asynchronous controllers, built React.js catalog and shopping cart components, and implemented automated stock management logic.',
    contributions: [
      'Engineered Express.js REST API endpoints for product CRUD operations, category queries, and order creation.',
      'Developed automated inventory deduction logic that validates available quantities before confirming orders, preventing overselling.',
      'Constructed MongoDB Mongoose document schemas for products, user carts, and completed order history.',
      'Built responsive React.js frontend interfaces using Bootstrap for dynamic product listings, shopping cart state, and order summaries.',
    ],
    architecture: {
      summary:
        'A MERN stack web application where React.js interacts with an Express.js/Node.js REST API layer, reading and writing product and order documents in MongoDB.',
      keyComponents: [
        {
          name: 'React.js Client App',
          role: 'Storefront & Cart Interface',
          description:
            'Provides responsive product browsing grids, search filters, cart state management, and checkout forms with Bootstrap.',
        },
        {
          name: 'Express.js / Node.js API Layer',
          role: 'Business Logic & Inventory Control',
          description:
            'Handles order validation, product CRUD operations, and automatic stock deduction calculations.',
        },
        {
          name: 'MongoDB Document Database',
          role: 'Product & Order Persistence',
          description:
            'Stores flexible JSON-like documents for catalog items, customer orders, and category hierarchies.',
        },
      ],
    },
    decisions: [
      {
        title: 'MongoDB Document Store vs. Relational SQL for E-Commerce Catalog',
        decision:
          'Utilized MongoDB document database for storing variable product attributes and nested order line items.',
        why: 'E-commerce items often have varying attribute sets (sizes, colors, specs) where document schemas offer natural JSON mapping without complex join tables.',
        tradeoff:
          'Requires application-level validation to maintain referential consistency between customer IDs and order records.',
        alternativesConsidered: [
          'MySQL (Rigid column schemas requiring multiple join tables for dynamic product attributes)',
        ],
      },
    ],
    buildLog: [
      {
        milestone: 'Backend API & MongoDB Schema Design',
        date: 'Month 1',
        details:
          'Defined Mongoose models for products and orders. Implemented Express.js routes for product catalog management.',
      },
      {
        milestone: 'Shopping Cart & Stock Control Logic',
        date: 'Month 2',
        details:
          'Implemented shopping cart state and automated stock validation preventing orders beyond available inventory.',
      },
      {
        milestone: 'React Storefront & Bootstrap Integration',
        date: 'Month 3',
        details:
          'Built responsive product grid, search filters, cart drawers, and order summary views.',
      },
    ],
    quality: {
      testing: 'Manual API testing with Postman for all CRUD operations, stock checks, and order workflows.',
      security: 'Input validation on order quantities and structured error handling preventing unexpected crashes.',
      accessibility: 'Clean Bootstrap form controls with accessible labels.',
      performance: 'Asynchronous non-blocking Node.js I/O for rapid JSON API responses.',
    },
    outcomes: [
      'Published open-source MERN e-commerce application on GitHub at github.com/EricPraveen/EShop.',
      'Implemented full product CRUD, inventory deduction, and responsive storefront experience.',
    ],
    lessonsLearned: [
      'Document databases excel at representing nested order line items within a single database roundtrip.',
      'Validating inventory quantities before confirming order transactions is critical for data integrity.',
    ],
    v2Improvements: [
      'Integrate Stripe payment processing gateway.',
      'Add user review and product star rating system.',
    ],
    evidence: [
      {
        label: 'LinkedIn Project Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7439368259797307392/',
        type: 'external',
        isExternal: true,
        note: 'Complete video presentation and architecture breakdown on LinkedIn',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/EricPraveen/EShop',
        type: 'github',
        isExternal: true,
        note: 'Complete MERN source code repository',
      },
    ],
  },
  {
    slug: 'edutrack-campus-portal',
    title: 'EduTrack — Campus Information & Student Life Portal',
    headline:
      'A responsive campus information web application providing university students and visitors with structured access to campus facilities, academic courses, student life, events, and clubs.',
    conciseOutcome:
      'Built responsive multi-section campus portal with dynamic content rendering, interactive navigation, and mobile-first layouts.',
    featured: true,
    order: 6,
    status: 'shipped',
    category: 'Campus Information Web Application',
    period: '2023 – 2024',
    year: '2024',
    duration: '2 Months',
    role: 'Frontend Web Developer',
    teamSize: 1,
    isAcademic: true,
    context:
      'Developed as an academic web development project to build an accessible, structured, and responsive informational web portal for university campus life and academic offerings.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    linkedInUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/projects/',
    repoUrl: 'https://github.com/EricPraveen/EduTrack',
    coverImage: {
      src: '/images/projects/edutrack-cover.svg',
      alt: 'EduTrack Campus Information and Student Life Web Portal Interface',
      width: 1200,
      height: 675,
      caption: 'EduTrack Responsive Campus Facilities and Courses Directory',
    },
    problem:
      'Campus visitors and new undergraduates often find university information scattered across disorganized documents with poor mobile navigation and slow loading times.',
    constraints: [
      'Must structure comprehensive campus information: facilities, courses, student clubs, and event schedules.',
      'Must deliver dynamic content rendering and intuitive interactive tab navigation without heavy framework dependencies.',
      'Must ensure clean responsive presentation across smartphones, tablets, and desktop displays.',
    ],
    personalRole:
      'Implemented the web application architecture: structured semantic HTML5 layouts, authored responsive CSS3 stylesheets with media queries, and implemented JavaScript navigation scripts for dynamic content tabs.',
    contributions: [
      'Structured accessible semantic HTML5 layouts with clear navigation landmarks and heading hierarchies.',
      'Authored modular CSS3 styles utilizing responsive grid and flexbox layouts with consistent campus color themes.',
      'Implemented vanilla JavaScript interactive navigation, dynamic tab switching, and mobile drawer menus.',
      'Organized multi-section content covering facilities, academic faculties, student clubs, and university event calendars.',
    ],
    architecture: {
      summary:
        'A lightweight, responsive web portal built with semantic HTML5, modular CSS3 styling, and vanilla JavaScript DOM interactions delivering fast client performance.',
      keyComponents: [
        {
          name: 'Semantic HTML5 Layout',
          role: 'Content & Landmark Structure',
          description:
            'Organizes campus information with semantic header, main, section, and article landmarks for accessibility.',
        },
        {
          name: 'Responsive CSS3 Stylesheet',
          role: 'Visual Design & Grid Layout',
          description:
            'Implements mobile-first responsive breakpoints, card grids, and interactive hover transitions.',
        },
        {
          name: 'JavaScript DOM Controller',
          role: 'Interactive Navigation',
          description:
            'Handles dynamic section switching, active navigation state, and mobile hamburger menu toggling.',
        },
      ],
    },
    decisions: [
      {
        title: 'Vanilla Web Standards (HTML5/CSS3/JS) vs. Heavy SPA Framework',
        decision:
          'Built the portal using pure web standards without external frontend frameworks.',
        why: 'For a fast informational campus portal, zero-dependency vanilla web standards guarantee near-instant loading, zero build-step overhead, and lightweight execution.',
        tradeoff:
          'Manual DOM manipulation required for interactive tab switching rather than declarative framework state.',
        alternativesConsidered: [
          'React SPA (Added bundle weight and complexity not required for static informational content)',
        ],
      },
    ],
    buildLog: [
      {
        milestone: 'Semantic Structure & Content Architecture',
        date: 'Month 1',
        details:
          'Structured HTML5 layouts for campus facilities, courses, clubs, and event calendars with semantic landmarks.',
      },
      {
        milestone: 'Responsive CSS3 & JavaScript Interactions',
        date: 'Month 2',
        details:
          'Authored responsive styling, mobile navigation menus, and dynamic content tab switching scripts.',
      },
    ],
    quality: {
      testing: 'Cross-browser testing across Chrome, Firefox, and Safari on mobile and desktop viewports.',
      security: 'Static client-side assets with no external vulnerability vectors.',
      accessibility: 'Semantic heading hierarchy and responsive touch targets.',
      performance: 'Zero JavaScript dependencies achieving instant sub-100ms page render.',
    },
    outcomes: [
      'Published open-source campus web portal on GitHub at github.com/EricPraveen/EduTrack.',
      'Delivered clean, mobile-responsive campus information portal with intuitive navigation.',
    ],
    lessonsLearned: [
      'Mastering core HTML5, CSS3, and vanilla JavaScript fundamentals builds a strong foundation for understanding modern frontend frameworks.',
    ],
    v2Improvements: [
      'Add an interactive campus map with clickable facility pins.',
      'Integrate dynamic student event calendar feed.',
    ],
    evidence: [
      {
        label: 'LinkedIn Project Details',
        url: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/projects/',
        type: 'external',
        isExternal: true,
        note: 'Project listing and documentation on LinkedIn',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/EricPraveen/EduTrack',
        type: 'github',
        isExternal: true,
        note: 'Complete source code repository',
      },
    ],
  },
];
