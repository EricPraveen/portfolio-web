import { Project } from './types';

export const projectsData: Project[] = [
  // ── 1. SOFTWARE RELATED PROJECTS ───────────────────────────────────────────
  {
    slug: 'travel-hub-platform',
    title: 'Travel Hub — Sri Lanka Tourist Package Platform',
    headline:
      'A full-stack tourism booking web application connecting travelers to curated Sri Lankan tour packages with interactive filtering and booking workflows.',
    track: 'software',
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
    technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    stack: ['React.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7518732678418886656/',
    repoUrl: 'https://github.com/EricPraveen/travelhub',
    demoUrl: 'https://travelhublanka.netlify.app/',
    coverImage: {
      src: '/images/projects/travelhub-app.jpg',
      alt: 'Travel Hub — Sri Lanka Tourist Package Search & Booking Platform Interface',
      width: 1024,
      height: 618,
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
        why: 'Enables parallel team development, clean separation of concerns, and distinct deployment lifecycles.',
        tradeoff:
          'Requires explicit CORS configuration, client-side token management, and structured error handling across network boundaries.',
      },
    ],
    buildLog: [
      {
        milestone: 'UI/UX Prototyping & UML Specification',
        date: 'Month 1',
        details:
          'Constructed high-fidelity Figma interactive prototypes and authored UML class and sequence diagrams mapping out tourist booking flows.',
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
    ],
    lessonsLearned: [
      'Early Figma component prototyping drastically accelerates React frontend development and reduces CSS refactoring.',
    ],
    v2Improvements: [
      'Integrate payment gateway (Stripe / PayHere) for automated checkout completion.',
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
    ],
  },
  {
    slug: 'chicken-shooting-game',
    title: 'Chicken Invaders — 2D Retro Arcade Space Shooter',
    headline:
      'A retro arcade space shooting game featuring custom computer graphics algorithms, enemy waves, boss battles, collision physics, and WebAssembly compilation for seamless browser gameplay.',
    track: 'software',
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
    technologies: ['C++', 'OpenGL', 'WebAssembly'],
    stack: ['C++', 'OpenGL', 'WebAssembly'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7501263644329058304/',
    repoUrl: 'https://github.com/EricPraveen/Chicken-Shooting',
    demoUrl: 'https://chicken-shooting.vercel.app',
    coverImage: {
      src: '/images/projects/chicken-shooting-app.jpg',
      alt: 'Chicken Invaders — 2D Retro Arcade Space Shooter in C++ and OpenGL',
      width: 1024,
      height: 616,
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
      ],
    },
    decisions: [
      {
        title: 'Custom Math Rasterization vs. Prebuilt Game Engines',
        decision: 'Built the entire graphics rendering pipeline in C++ and OpenGL without third-party game engines.',
        why: 'Required deep academic mastery of low-level graphics algorithms and computational geometry.',
        tradeoff: 'Required manual implementation of collision physics, matrix math, and window event listeners.',
      },
    ],
    buildLog: [
      {
        milestone: 'Algorithm Implementation',
        date: 'Month 1',
        details: 'Implemented Bresenham, Midpoint Circle, and Cohen-Sutherland clipping in OpenGL.',
      },
    ],
    quality: {
      testing: 'Rigorous 60fps benchmark testing across Chrome, Firefox, and Safari with WebAssembly.',
      security: 'Sandboxed WebAssembly execution environment inside modern browser security contexts.',
      accessibility: 'Keyboard accessible controls with on-screen visual hints.',
      performance: 'Near-native C++ performance running at consistent 60 frames per second in browser.',
    },
    outcomes: [
      'Successfully compiled and deployed playable WebAssembly build live on Vercel at chicken-shooting.vercel.app.',
    ],
    lessonsLearned: [
      'WebAssembly bridges the gap between low-level systems programming and universal web accessibility.',
    ],
    v2Improvements: ['Add local leaderboard persistence using IndexedDB.'],
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
    ],
  },
  {
    slug: 'cricketscore-mobile-app',
    title: 'CricketScore — Offline Cricket Scoring & Analytics Mobile App',
    headline:
      'An offline-first mobile cricket scoring application supporting match setup, interactive toss, custom scoring engine with strike rotation, undo delivery mechanism, and SQLite ball-by-ball analytics.',
    track: 'software',
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
    technologies: ['React Native', 'TypeScript', 'SQLite', 'Expo'],
    stack: ['React Native', 'TypeScript', 'SQLite', 'Expo'],
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
    ],
    personalRole:
      'Architected and implemented the entire mobile application: designed SQLite relational schema, wrote the cricket rule engine state machine, built responsive touch keypad interfaces, and implemented animated milestone overlays.',
    contributions: [
      'Engineered an offline-first SQLite database schema modeling matches, innings, player rosters, and ball-by-ball delivery events with transactional consistency.',
      'Developed an immutable cricket scoring engine managing strike rotation, boundary counts, bowler spell quotas, and extras calculations.',
      'Built a robust delivery undo mechanism that reconstructs previous innings state atomically.',
      'Designed a high-visibility scoring UI with large tactile buttons optimized for direct sunlight outdoor mobile use.',
    ],
    architecture: {
      summary:
        'A local-first React Native mobile application built on Expo and TypeScript, executing scoring state machine calculations locally and persisting normalized relational data in SQLite.',
      keyComponents: [
        {
          name: 'Tactile Scoring Interface',
          role: 'Touchpad & Scorecard UI',
          description:
            'Delivers responsive ball input keypad, live scorecard summaries, partnership charts, and milestone visual celebrations.',
        },
      ],
    },
    decisions: [
      {
        title: 'Local-First SQLite vs. Cloud Database',
        decision: 'Adopted an offline-first SQLite relational database embedded directly inside the mobile app bundle.',
        why: 'Guarantees instant response times and zero data loss on open grounds with no cellular connectivity.',
        tradeoff: 'Requires explicit export/import routines to share scorecards between devices.',
      },
    ],
    buildLog: [
      {
        milestone: 'Cricket Rules Engine',
        date: 'Month 1',
        details: 'Architected state transitions for strike rotation, extras, wickets, and undo delivery stack.',
      },
    ],
    quality: {
      testing: 'Unit tests covering all edge-case scoring rules.',
      security: 'Fully sandboxed local storage on device with zero telemetry tracking.',
      accessibility: 'High contrast text and large touch target hit-boxes suitable for outdoor daylight usage.',
      performance: 'Instantaneous touch feedback with sub-5ms local SQLite delivery insert times.',
    },
    outcomes: [
      'Created and published complete open-source mobile application on GitHub at github.com/EricPraveen/CricketScore.',
    ],
    lessonsLearned: [
      'Offline-first architectures provide superior reliability and user trust for critical real-time recording tasks.',
    ],
    v2Improvements: ['Add PDF match summary report generation and export.'],
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
    track: 'software',
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
    technologies: ['React.js', 'Spring Boot', 'PostgreSQL', 'JWT'],
    stack: ['React.js', 'Spring Boot', 'PostgreSQL', 'JWT'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7468553897041838081/',
    repoUrl: 'https://github.com/EricPraveen/IdeaPad',
    coverImage: {
      src: '/images/projects/ideapad-app.png',
      alt: 'IdeaPad Full-Stack Publishing and Blog Platform Interface',
      width: 1024,
      height: 613,
      caption: 'IdeaPad Editorial Publishing and Genre Discovery Interface',
    },
    problem:
      'Content publishing platforms require secure authentication, responsive editorial tools, rich image asset hosting, and multi-faceted discovery while preventing unauthorized post modifications.',
    constraints: [
      'Must enforce secure JWT authentication with role-based access control.',
      'Must support complete post CRUD operations with rich media attachment via cloud storage.',
    ],
    personalRole:
      'Developed the application end-to-end: designed PostgreSQL relational models, implemented Spring Boot security and REST controllers, integrated Cloudinary API for image uploads, and built the responsive React.js SPA.',
    contributions: [
      'Architected Spring Security configuration with JWT bearer tokens for stateless user session verification.',
      'Designed normalized PostgreSQL schema modeling users, blog posts, genre categories, likes, bookmarks, and comments.',
      'Built complete REST API controllers handling post creation, editing, deletion, pagination, and genre-based filtering.',
    ],
    architecture: {
      summary:
        'A React.js SPA utilizing JWT authentication headers to interact with Spring Boot REST services, reading/writing relational blog entities in PostgreSQL and delegating image assets to Cloudinary CDN.',
      keyComponents: [
        {
          name: 'React.js Client Interface',
          role: 'Editorial & Discovery SPA',
          description: 'Delivers post creation forms, genre discovery tabs, like/bookmark toggles, and author profile views.',
        },
      ],
    },
    decisions: [
      {
        title: 'JWT Bearer Authentication vs. Stateful Session Cookies',
        decision: 'Implemented stateless JSON Web Tokens (JWT) passed in the HTTP Authorization header.',
        why: 'Allows the Spring Boot backend to remain completely stateless, making horizontal scaling simple.',
        tradeoff: 'Token revocation requires token blacklisting or short token expiry intervals.',
      },
    ],
    buildLog: [
      {
        milestone: 'Database Schema & Security',
        date: 'Month 1',
        details: 'Designed PostgreSQL tables and configured Spring Security filter chain with JWT.',
      },
    ],
    quality: {
      testing: 'Verified endpoint security with integration tests.',
      security: 'BCrypt password hashing and stateless JWT verification.',
      accessibility: 'Semantic HTML5 article tags, accessible forms, and clear focus styling.',
      performance: 'Optimized Cloudinary image delivery and paginated database queries for fast feed loading.',
    },
    outcomes: [
      'Developed and published complete open-source blogging platform on GitHub at github.com/EricPraveen/IdeaPad.',
    ],
    lessonsLearned: [
      'Stateless JWT authentication simplifies client-server architecture but requires strict token storage discipline.',
    ],
    v2Improvements: ['Implement real-time notification websockets for post likes and comments.'],
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
    track: 'software',
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
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7439368259797307392/',
    repoUrl: 'https://github.com/EricPraveen/EShop',
    coverImage: {
      src: '/images/projects/eshop-app.jpg',
      alt: 'EShop Dynamic MERN E-Commerce Platform Storefront and Inventory Dashboard',
      width: 1024,
      height: 576,
      caption: 'EShop Dynamic Product Catalog and Cart Workflow',
    },
    problem:
      'E-commerce platforms require accurate inventory tracking to prevent overselling, responsive product filtering for seamless discovery, and reliable order state transitions.',
    constraints: [
      'Must maintain real-time inventory quantities and reject checkout attempts exceeding available stock.',
      'Must provide dynamic product search, category filtering, and administrative product CRUD operations.',
    ],
    personalRole:
      'Designed MongoDB schemas, implemented Express.js REST APIs with asynchronous controllers, built React.js catalog and shopping cart components, and implemented automated stock management logic.',
    contributions: [
      'Engineered Express.js REST API endpoints for product CRUD operations, category queries, and order creation.',
      'Developed automated inventory deduction logic that validates available quantities before confirming orders.',
      'Constructed MongoDB Mongoose document schemas for products, user carts, and completed order history.',
    ],
    architecture: {
      summary:
        'A MERN stack web application where React.js interacts with an Express.js/Node.js REST API layer, reading and writing product and order documents in MongoDB.',
      keyComponents: [
        {
          name: 'React.js Client App',
          role: 'Storefront & Cart Interface',
          description: 'Provides responsive product browsing grids, search filters, and checkout forms.',
        },
      ],
    },
    decisions: [
      {
        title: 'MongoDB Document Store vs. Relational SQL',
        decision: 'Utilized MongoDB document database for storing variable product attributes and nested order line items.',
        why: 'Document schemas offer natural JSON mapping without complex join tables for variable merchandise.',
        tradeoff: 'Requires application-level validation to maintain referential consistency.',
      },
    ],
    buildLog: [
      {
        milestone: 'Backend API & MongoDB Schema',
        date: 'Month 1',
        details: 'Defined Mongoose models and Express.js routes for catalog management.',
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
    ],
    lessonsLearned: [
      'Validating inventory quantities before confirming order transactions is critical for data integrity.',
    ],
    v2Improvements: ['Integrate Stripe payment processing gateway.'],
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
    track: 'software',
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
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    linkedInUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/projects/',
    repoUrl: 'https://github.com/EricPraveen/EduTrack',
    coverImage: {
      src: '/images/projects/edutrack-app.jpg',
      alt: 'EduTrack Campus Information and Student Life Web Portal Interface',
      width: 1024,
      height: 514,
      caption: 'EduTrack Responsive Campus Facilities and Courses Directory',
    },
    problem:
      'Campus visitors and new undergraduates often find university information scattered across disorganized documents with poor mobile navigation and slow loading times.',
    constraints: [
      'Must structure comprehensive campus information: facilities, courses, student clubs, and event schedules.',
      'Must deliver dynamic content rendering and intuitive interactive tab navigation without heavy framework dependencies.',
    ],
    personalRole:
      'Implemented the web application architecture: structured semantic HTML5 layouts, authored responsive CSS3 stylesheets with media queries, and implemented JavaScript navigation scripts for dynamic content tabs.',
    contributions: [
      'Structured accessible semantic HTML5 layouts with clear navigation landmarks and heading hierarchies.',
      'Authored modular CSS3 styles utilizing responsive grid and flexbox layouts with consistent campus color themes.',
      'Implemented vanilla JavaScript interactive navigation, dynamic tab switching, and mobile drawer menus.',
    ],
    architecture: {
      summary:
        'A lightweight, responsive web portal built with semantic HTML5, modular CSS3 styling, and vanilla JavaScript DOM interactions delivering fast client performance.',
      keyComponents: [
        {
          name: 'Semantic HTML5 Layout',
          role: 'Content & Landmark Structure',
          description: 'Organizes campus information with semantic landmarks for accessibility.',
        },
      ],
    },
    decisions: [
      {
        title: 'Vanilla Web Standards vs. Heavy SPA Framework',
        decision: 'Built the portal using pure web standards without external frontend frameworks.',
        why: 'Guarantees near-instant loading, zero build-step overhead, and lightweight execution.',
        tradeoff: 'Manual DOM manipulation required for interactive tab switching.',
      },
    ],
    buildLog: [
      {
        milestone: 'Semantic Structure & Content',
        date: 'Month 1',
        details: 'Structured HTML5 layouts for campus facilities, courses, and clubs.',
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
    ],
    lessonsLearned: [
      'Mastering core HTML5, CSS3, and vanilla JavaScript fundamentals builds a strong foundation for frontend frameworks.',
    ],
    v2Improvements: ['Add an interactive campus map with clickable facility pins.'],
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

  // ── 2. HARDWARE & IOT PROJECTS ─────────────────────────────────────────────
  {
    slug: 'intelligent-solar-energy-system',
    title: 'Intelligent Solar Energy Management System',
    headline:
      'An intelligent dual-axis solar tracking system integrating Arduino Mega, ESP32, environmental sensors, and real-time battery telemetry with MOSFET thermal protection and web interface.',
    track: 'hardware',
    conciseOutcome:
      'Engineered automated dual-axis solar tracking, real-time sensor acquisition, battery safety circuit with MOSFET cooling, and ESP32 remote telemetry dashboard.',
    featured: true,
    order: 7,
    status: 'shipped',
    category: 'Hardware & Embedded IoT',
    period: 'Apr 2024 – Aug 2025',
    year: '2024 – 2025',
    duration: '16 Months',
    role: 'Hardware & Embedded IoT Developer',
    teamSize: 4,
    isAcademic: true,
    context:
      'First-Year Microcontroller Based Application Development Project associated with the University of Moratuwa, designing and building an intelligent solar energy system with automated tracking, safety cutoff, and remote web telemetry.',
    technologies: ['Arduino Mega', 'ESP32', 'C/C++', 'IoT'],
    stack: ['Arduino Mega', 'ESP32', 'C/C++', 'IoT'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7373774438254841856/',
    demoUrl: 'https://claude.ai/public/artifacts/28c484c1-b306-4cec-af6c-771456b00a30',
    coverImage: {
      src: '/images/projects/solar-hardware-linkedin.jpg',
      alt: 'Intelligent Solar Energy Management System Hardware, Microcontroller & Sensor Setup',
      width: 623,
      height: 650,
      caption: 'Smart Dual-Axis Solar Tracker, Arduino Mega, ESP32 Web Interface, and Battery Management Hardware',
    },
    problem:
      'Fixed solar installations suffer up to 40% efficiency losses due to sub-optimal sun incidence angles, while unmonitored lithium battery banks risk thermal runaway and permanent cell degradation.',
    constraints: [
      'Must implement automated dual-axis solar tracking using differential LDR light sensors and gear motor drivers.',
      'Must monitor voltage, current, and cell temperatures continuously via I2C, ADC, and serial bus.',
      'Must enforce automated battery management with overcharge protection, MOSFET-controlled cooling fans, and emergency cut-off.',
      'Must host a lightweight responsive web dashboard on the ESP32 Wi-Fi module for live remote telemetry and control.',
    ],
    personalRole:
      'Co-developed embedded firmware in C/C++: implemented the dual-axis solar tracking algorithm, wrote ADC/I2C sensor calibration routines (LM35, DS18B20, current sensors), built the MOSFET battery protection logic, and designed the ESP32 web telemetry interface.',
    contributions: [
      'Programmed Arduino Mega 2560 control loop executing dual-axis astronomical positioning using 4-quadrant LDR differential comparison and L298N H-bridge gear motor actuation.',
      'Engineered multi-point temperature and voltage acquisition using DS18B20 digital probes and calibrated analog current shunts.',
      'Implemented safety state machine with MOSFET-controlled cooling fan activation at 40°C and automated relay emergency disconnect at 55°C.',
      'Developed standalone ESP32 web server providing live battery state of charge (SoC), power production watts, voltage logs, and manual override switches.',
      'Constructed complete physical demonstration rig with custom 3D-printed brackets, solar panel mount, and battery power bank.',
    ],
    architecture: {
      summary:
        'A distributed embedded hardware architecture pairing an Arduino Mega 2560 for real-time motor control and sensor acquisition with an ESP32 Wi-Fi module for web server telemetry and remote user overrides.',
      keyComponents: [
        {
          name: 'Arduino Mega 2560 Core Controller',
          role: 'Sensor Acquisition & Motor Loop',
          description:
            'Samples 4x LDRs, voltage dividers, and current shunts; computes differential sun tracking vectors and drives L298N H-Bridge dual-axis gear motors.',
        },
        {
          name: 'ESP32 Wi-Fi Telemetry Gateway',
          role: 'Web Interface & Remote Alerts',
          description:
            'Communicates with Arduino via UART Serial; serves asynchronous HTML/CSS/JS dashboard displaying real-time power metrics, battery health, and relay states.',
        },
        {
          name: 'Battery Management & Protection Circuit',
          role: 'Safety & Thermal Regulation',
          description:
            'Lithium-ion cell bank equipped with high-current MOSFET relay disconnects, overvoltage limiters, and automated cooling fan activation.',
        },
      ],
    },
    decisions: [
      {
        title: 'Dual-Microcontroller Architecture (Mega 2560 + ESP32) vs. Single MCU',
        decision:
          'Separated real-time motor control & analog sensing (Arduino Mega 2560) from Wi-Fi web serving & networking (ESP32).',
        why: 'Prevents Wi-Fi network stack latency from interrupting time-critical motor step timing and analog ADC sensor sampling loops.',
        tradeoff:
          'Requires structured serial communication protocol (UART) between the two microcontrollers.',
      },
    ],
    buildLog: [
      {
        milestone: 'Dual-Axis Tracking Mechanism & Motor Control',
        date: 'Apr – Jul 2024',
        details:
          'Designed 3D-printed gimbal mount, tested LDR comparator logic, and calibrated L298N motor drivers.',
      },
      {
        milestone: 'BMS Protection Circuit & Sensor Calibration',
        date: 'Aug – Dec 2024',
        details:
          'Assembled voltage/current divider shunts, DS18B20 probes, and MOSFET cooling fan relay logic.',
      },
      {
        milestone: 'ESP32 Web Server & Live Telemetry Integration',
        date: 'Jan – Aug 2025',
        details:
          'Built responsive ESP32 web dashboard, UART packet protocol, and completed faculty project defense.',
      },
    ],
    quality: {
      testing: 'Continuous 48-hour endurance test validating dual-axis sun tracking accuracy and automated thermal shutdown.',
      security: 'Protected ESP32 Wi-Fi network access point with WPA2 authentication.',
      accessibility: 'On-board 16x2 LCD display + high-contrast web dashboard with visual status gauges.',
      performance: 'Sub-50ms sensor refresh rate with sub-second web telemetry updates over Wi-Fi.',
    },
    outcomes: [
      'Successfully demonstrated functional dual-axis solar tracking prototype at University of Moratuwa with over 32% measured solar capture gain over static panels.',
      'Engineered failsafe battery management circuit preventing overcharge and thermal runaway.',
      'Deployed interactive telemetry web interface accessible over local Wi-Fi and Claude public artifacts.',
    ],
    lessonsLearned: [
      'Decoupling high-frequency motor actuation from wireless network communication drastically improves embedded system reliability.',
      'Hardware-level thermal cutoffs are essential for lithium battery safety in outdoor renewable installations.',
    ],
    v2Improvements: [
      'Incorporate GPS-based astronomical solar ephemeris calculation for tracking on overcast days.',
      'Add MPPT (Maximum Power Point Tracking) buck-boost charge controller for higher conversion efficiency.',
    ],
    evidence: [
      {
        label: 'LinkedIn Hardware Project Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7373774438254841856/',
        type: 'external',
        isExternal: true,
        note: 'Complete video presentation, hardware demo, and team recognition on LinkedIn',
      },
      {
        label: 'Web Telemetry Interface Artifact',
        url: 'https://claude.ai/public/artifacts/28c484c1-b306-4cec-af6c-771456b00a30',
        type: 'demo',
        isExternal: true,
        note: 'Interactive public artifact demonstration of the solar web dashboard',
      },
    ],
  },

  // ── 3. FIGMA UI/UX DESIGN PROJECTS (ORDER: DONUT, DR. PEPPER, WAYPOINT, FIXNOW, TRAVELHUB) ──
  {
    slug: 'donut-animated-product-landing-page',
    title: 'Donut — Animated Product Landing Page Concept',
    headline:
      'Playful animated product landing page concept in Figma exploring visual composition, asset styling, interactive animation prototyping, and component state transitions.',
    track: 'figma',
    conciseOutcome:
      'Engineered playful dessert landing page in Figma with pastel color palettes, smart-animate flavor carousels, and engaging micro-interactions.',
    featured: true,
    order: 8,
    status: 'shipped',
    category: 'Animated Landing Page UI',
    period: '2025',
    year: '2025',
    duration: 'Personal Practice Project',
    role: 'UI/UX Designer',
    teamSize: 1,
    isAcademic: false,
    context:
      'Personal UI Design Experiment & Practice Project in Figma exploring playful UI compositions, vibrant dessert color harmonies, asset styling, and animated interactive prototyping.',
    technologies: ['Figma', 'UI/UX Design', 'Prototyping'],
    stack: ['Figma', 'UI/UX Design', 'Prototyping'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
    coverImage: {
      src: '/images/projects/donut-figma.jpg',
      alt: 'Donut Animated Product Landing Page in Figma',
      width: 1024,
      height: 582,
      caption: 'Playful Animated Donut Landing Page Concept, Sprinkles Animation, and Interactive Flavor Boxes in Figma',
    },
    problem:
      'Bakery and dessert websites often lack the joyful, appetizing tactile feeling that entices food lovers in physical patisseries.',
    constraints: [
      'Must create an appetizing, cheerful atmosphere with soft pastel pinks, creamy yellows, and rich chocolate tones.',
      'Must incorporate playful micro-animations like sprinkles dropping and floating pastry effects.',
      'Must provide an intuitive interactive flavor selection and order builder flow.',
    ],
    personalRole:
      'Sole concept designer: designed custom vector donut illustrations, composed playful typography pairings, established interactive component variants, and animated stateful transitions using Figma Smart Animate.',
    contributions: [
      'Illustrated vector pastry assets with modular frosting, sprinkles, and filling layers.',
      'Designed interactive "Build Your Box" flavor carousel featuring Strawberry Glaze, Dark Chocolate Crumb, Pistachio Dream, and Caramel Crunch.',
      'Connected Figma prototype with realistic hover bounces, rotation easing, and modal pop-ups.',
      'Created responsive desktop navigation with cart counter pill and store locator drawer.',
    ],
    architecture: {
      summary:
        'A playful web UI concept in Figma leveraging vector illustration layers, modular frosting/topping variants, and fluid Smart Animate transitions to create an appetizing interactive experience.',
      keyComponents: [
        {
          name: 'Hero Bakery Showcase',
          role: 'Emotion & Appetite Appeal',
          description: 'Playful headline, floating donut hero render with animated sprinkles and quick CTA.',
        },
        {
          name: 'Interactive Flavor Box Builder',
          role: 'Customization & Ordering',
          description: 'Interactive selector allowing customers to mix-and-match pastry flavors into custom boxes.',
        },
      ],
    },
    decisions: [
      {
        title: 'Vector Layered Donut Assets vs. Stock Photos',
        decision:
          'Created custom layered vector illustrations in Figma rather than static food photography.',
        why: 'Enables individual animation of toppings, sprinkles, and frosting layers across interactive states.',
        tradeoff: 'Requires custom illustration work for every new flavor introduced.',
      },
    ],
    buildLog: [
      {
        milestone: 'Illustration & Style Guide',
        date: 'Week 1',
        details: 'Illustrated pastry assets, defined pastel color tokens, and styled cheerful typography.',
      },
      {
        milestone: 'Interactive Motion Prototyping',
        date: 'Week 2',
        details: 'Built interactive flavor customizer with smart-animate transitions in Figma.',
      },
    ],
    quality: {
      testing: 'Verified prototype frame rate and smooth Smart Animate easing curves.',
      security: 'Static design concept with zero external vulnerabilities.',
      accessibility: 'High contrast text on cards and clear visual button states.',
      performance: 'Organized Figma component layers with clean naming and Auto Layout.',
    },
    outcomes: [
      'Showcased creative visual design and interactive prototyping on LinkedIn.',
      'Demonstrated versatility across both playful consumer UI and complex enterprise systems.',
    ],
    lessonsLearned: [
      'Delightful micro-animations and cheerful color palettes create emotional connection and increase user dwell time.',
    ],
    v2Improvements: ['Design mobile ordering drawer and order tracking animation.'],
    evidence: [
      {
        label: 'LinkedIn UI/UX Design Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
        type: 'external',
        isExternal: true,
        note: 'Figma interactive dessert prototype and animation breakdown',
      },
    ],
  },
  {
    slug: 'dr-pepper-interactive-landing-page',
    title: 'Dr. Pepper — Interactive Product Landing Page Concept',
    headline:
      'Bold beverage product landing page concept designed in Figma exploring visual hierarchy, dynamic typography, component variants, and interactive micro-animations.',
    track: 'figma',
    conciseOutcome:
      'Designed high-impact beverage showcase concept in Figma featuring custom typography, 23-flavor interactive wheel, and product variant micro-animations.',
    featured: true,
    order: 9,
    status: 'shipped',
    category: 'Product Landing Page UI',
    period: '2025',
    year: '2025',
    duration: 'Personal Practice Project',
    role: 'UI/UX Designer',
    teamSize: 1,
    isAcademic: false,
    context:
      'Personal UI Design Experiment & Practice Project exploring modern creative web design, bold typography layouts, beverage product presentation, and smart-animate interactive prototyping in Figma.',
    technologies: ['Figma', 'Web Design', 'Prototype'],
    stack: ['Figma', 'Web Design', 'Prototype'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
    coverImage: {
      src: '/images/projects/drpepper-figma.jpg',
      alt: 'Dr. Pepper Strawberry & Cream Interactive Product Showcase in Figma',
      width: 1024,
      height: 646,
      caption: 'Dr. Pepper Bold Beverage Presentation, 23 Flavor Exploration, and Interactive Variant Prototyping',
    },
    problem:
      'Traditional beverage websites often rely on static product images with generic layouts that fail to evoke taste excitement, brand heritage, or engaging interaction.',
    constraints: [
      'Must celebrate the iconic 23-flavor heritage with bold visual typography and rich maroon/crimson color palettes.',
      'Must provide an interactive flavor switcher that changes hero backgrounds and product can renders seamlessly.',
      'Must maintain clean layout hierarchy across 1440px desktop displays.',
    ],
    personalRole:
      'Sole concept designer: researched brand identity, developed custom typography hierarchies, composed high-resolution can renders with condensation effects, and created Figma component variants with interactive hover states.',
    contributions: [
      'Designed expressive hero typography pairing impactful sans-serif headlines with vintage brand motifs.',
      'Built interactive flavor carousel component (Original, Cherry, Strawberries & Cream, Zero Sugar) with smooth variant switching.',
      'Engineered smart-animate transitions simulating can rotation and background color morphing on user selection.',
      'Created accompanying nutrition facts drawer and retail store locator modal concept.',
    ],
    architecture: {
      summary:
        'A desktop landing page design in Figma centered around high-contrast visual storytelling, layered asset masking, interactive component variants, and fluid prototype transitions.',
      keyComponents: [
        {
          name: 'Hero Showcase Stage',
          role: 'Visual Hook & Brand Identity',
          description: 'Giant display typography, floating product render with custom drop shadows and splash art.',
        },
        {
          name: 'Interactive Flavor Selector',
          role: 'Product Engagement',
          description: 'Clickable variant tabs that dynamically switch can artwork, flavor notes, and color themes.',
        },
      ],
    },
    decisions: [
      {
        title: 'Dark Crimson Background vs. Traditional White Web Layout',
        decision:
          'Utilized a deep maroon-to-black vignette gradient as the foundational canvas.',
        why: 'Enhances product contrast, communicates premium taste, and makes the metallic can highlights pop vibrantly.',
        tradeoff: 'Requires strict contrast checking for body text readability.',
      },
    ],
    buildLog: [
      {
        milestone: 'Brand Exploration & Asset Preparation',
        date: 'Week 1',
        details: 'Curated typography references, refined can mockups, and composed flavor color palettes.',
      },
      {
        milestone: 'Layout Design & Smart-Animate Prototyping',
        date: 'Week 2',
        details: 'Designed desktop layout and connected interactive prototype with variant transitions in Figma.',
      },
    ],
    quality: {
      testing: 'Verified text readability against deep crimson backgrounds ensuring WCAG 2.2 AA compliant contrast.',
      security: 'Static design concept with zero external data risks.',
      accessibility: 'High contrast text labels and clear interactive hover indicator states.',
      performance: 'Clean frame hierarchy with optimized vector paths.',
    },
    outcomes: [
      'Created viral design concept published and discussed on LinkedIn.',
      'Demonstrated advanced mastery of Figma Auto Layout, component variants, and interactive motion design.',
    ],
    lessonsLearned: [
      'Bold typographic contrast transforms an ordinary product page into an unforgettable digital brand experience.',
    ],
    v2Improvements: ['Design matching responsive mobile layouts and sound effect cues.'],
    evidence: [
      {
        label: 'LinkedIn UI/UX Design Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
        type: 'external',
        isExternal: true,
        note: 'Figma interactive product presentation and design walkthrough',
      },
    ],
  },
  {
    slug: 'waypoint-delivery-planning-system',
    title: 'WayPoint — Enterprise Delivery Planning System',
    headline:
      'Enterprise delivery planning and route dispatch platform designed in Figma, featuring complex multi-tier navigation, order lifecycle management, responsive dashboard widgets, and developer handoff specs.',
    track: 'figma',
    conciseOutcome:
      'Designed end-to-end logistics dispatch platform in Figma with interactive prototypes, comprehensive design system tokens, and route optimization workflows.',
    featured: true,
    order: 10,
    status: 'shipped',
    category: 'UI/UX Design',
    period: '2026',
    year: '2026',
    duration: 'Design Challenge',
    role: 'UI/UX Designer',
    teamSize: 1,
    isAcademic: false,
    context:
      'Design Challenge submission for Tech-Triathlon 2026, creating an enterprise-grade delivery planning, fleet tracking, and logistics dispatch management dashboard system in Figma.',
    technologies: ['Figma', 'Design Systems', 'Dashboard UI'],
    stack: ['Figma', 'Design Systems', 'Dashboard UI'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
    coverImage: {
      src: '/images/projects/waypoint-figma.jpg',
      alt: 'WayPoint Enterprise Delivery Planning System Portal Design in Figma',
      width: 1024,
      height: 710,
      caption: 'WayPoint Logistics Dispatch Control Tower, Route Optimization Maps, and Component Variants in Figma',
    },
    problem:
      'Enterprise logistics dispatchers manage thousands of concurrent shipments with fragmented tools, resulting in missed delivery windows, manual route adjustments, and high cognitive load.',
    constraints: [
      'Must design clear visual hierarchy for high-density dispatch tables, live map overlays, and fleet status cards.',
      'Must establish reusable Figma design system with strict Auto Layout, typography scales, color tokens, and interactive component variants.',
      'Must provide realistic interactive prototypes simulating dispatcher route assignment, driver status modals, and exception alerts.',
    ],
    personalRole:
      'Sole UI/UX designer: conducted user workflow research, wireframed user flows in FigJam, crafted high-fidelity Figma components with Auto Layout 5.0, designed dark/light contrast modes, and built clickable interactive prototypes.',
    contributions: [
      'Designed comprehensive dispatch control tower featuring multi-panel layout: interactive map view, dynamic fleet capacity ledger, and real-time shipment filter tables.',
      'Built atomic Figma design system including 40+ reusable component variants (buttons, inputs, status chips, modal drawers, and data cards) with standardized padding and typography tokens.',
      'Crafted interactive prototype demonstrating end-to-end driver re-routing workflow, emergency delivery rerouting, and real-time ETA calculation preview.',
      'Prepared detailed developer handoff documentation with spacing tokens, responsive breakpoints (Desktop 1440px / Tablet 1024px), and component state guidelines.',
    ],
    architecture: {
      summary:
        'A component-driven Figma design architecture organized into Design System Foundations (Color, Typography, Elevation, Spacing), Reusable Atomic Components, Composite Layout Templates, and Interactive Clickable Prototype Flows.',
      keyComponents: [
        {
          name: 'Foundations & Tokens Library',
          role: 'Design System Primitives',
          description:
            'Standardized semantic color styles, typographic scale hierarchy, grid columns, and elevation drop shadows.',
        },
        {
          name: 'Interactive Component Set',
          role: 'UI Building Blocks',
          description:
            'Auto Layout variants with hover, active, disabled, and error states for seamless developer handoff.',
        },
        {
          name: 'Dispatch & Route Workflow Screens',
          role: 'Product Experience',
          description:
            'High-fidelity views for shipment intake, automated fleet allocation, driver tracking, and performance analytics.',
        },
      ],
    },
    decisions: [
      {
        title: 'High-Density Table View with Collapsible Map vs. Split-Screen Layout',
        decision:
          'Designed a hybrid split-screen layout with an interactive collapsible map drawer and sticky data filters.',
        why: 'Allows dispatchers to cross-reference geographic driver locations without losing their place in long shipment queues.',
        tradeoff:
          'Requires careful responsive breakpoint design on screens under 1280px width.',
      },
    ],
    buildLog: [
      {
        milestone: 'User Journey Mapping & FigJam Wireframes',
        date: 'Week 1',
        details: 'Mapped logistics dispatch flows, driver exception handling, and information architecture.',
      },
      {
        milestone: 'Design System Tokens & Component Library',
        date: 'Week 2',
        details: 'Constructed Auto Layout components, color tokens, and dispatch table widgets.',
      },
      {
        milestone: 'High-Fidelity Screens & Interactive Prototype',
        date: 'Week 3',
        details: 'Assembled full prototype with smart-animate transitions for Tech-Triathlon 2026 presentation.',
      },
    ],
    quality: {
      testing: 'Validated WCAG 2.2 AA contrast ratios across all dispatch tables and interactive state chips.',
      security: 'Designed permission-based view states for Super Admins, Fleet Managers, and Contract Drivers.',
      accessibility: 'High contrast text labels, icon+text paired badges, and accessible focus outlines.',
      performance: 'Clean Figma component architecture with zero detached instances and optimized frame nestings.',
    },
    outcomes: [
      'Submitted flagship design challenge project for Tech-Triathlon 2026.',
      'Showcased interactive prototyping and enterprise design system capabilities on LinkedIn.',
    ],
    lessonsLearned: [
      'Structuring reusable component variants early saves hours during edge-case and modal screen design.',
    ],
    v2Improvements: ['Design accompanying mobile driver companion app flows.'],
    evidence: [
      {
        label: 'LinkedIn UI/UX Design Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
        type: 'external',
        isExternal: true,
        note: 'Figma design showcase, prototype recording, and design process on LinkedIn',
      },
    ],
  },
  {
    slug: 'fixnow-home-service-mobile-app',
    title: 'FixNow — Home Service & Repair Mobile App',
    headline:
      'Mobile application UI/UX concept for on-demand home maintenance and repairs, featuring end-to-end booking user flows, service provider filtering, instant quotes, and high-fidelity interactive prototype.',
    track: 'figma',
    conciseOutcome:
      'Created mobile app UI/UX design with seamless service booking flows, upfront pricing transparency, verified provider profiles, and interactive Figma prototyping.',
    featured: true,
    order: 11,
    status: 'shipped',
    category: 'Mobile UI/UX Design',
    period: '2025',
    year: '2025',
    duration: 'UI/UX Practical Challenge',
    role: 'UI/UX Designer',
    teamSize: 1,
    isAcademic: false,
    context:
      'UI/UX Practical Challenge for Webtezza (Pvt) Ltd, designing a modern, frictionless mobile application experience for booking trusted on-demand home maintenance professionals.',
    technologies: ['Figma', 'Mobile UI/UX', 'User Flows'],
    stack: ['Figma', 'Mobile UI/UX', 'User Flows'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
    coverImage: {
      src: '/images/projects/fixnow-card.jpg',
      alt: 'FixNow Home Service and Repair Mobile App UI/UX Design in Figma',
      width: 1200,
      height: 675,
      caption: 'FixNow Mobile App Screens: Service Discovery, Technician Profiles, and Instant Booking Flow',
    },
    problem:
      'Homeowners find hiring repair technicians stressful due to opaque pricing, unverified contractor credentials, and inconvenient scheduling phone calls.',
    constraints: [
      'Must create a 3-tap booking flow from home screen to confirmed appointment.',
      'Must communicate transparent pricing estimates upfront before checkout confirmation.',
      'Must follow modern iOS Human Interface Guidelines and Android Material Design touch target standards.',
    ],
    personalRole:
      'Designed the complete mobile experience: formulated user persona archetypes, mapped booking conversion funnels, built Figma component libraries with Auto Layout, and produced an animated mobile prototype.',
    contributions: [
      'Engineered intuitive category discovery grid (Plumbing, Electrical, AC Repair, Cleaning) with clear visual icons and badge cues.',
      'Designed trusted technician profile cards showcasing verified badges, past client reviews, star ratings, and hourly rates.',
      'Created dynamic service cost calculator and date/time slot picker with instant visual feedback.',
      'Built micro-interactions including animated booking success confirmation and live status tracker.',
    ],
    architecture: {
      summary:
        'A mobile UI design system in Figma utilizing iOS-standard 8pt grid spacing, atomic icon components, bottom navigation bar architecture, and smart-animate screen transitions.',
      keyComponents: [
        {
          name: 'Discovery & Explore Feed',
          role: 'Category Navigation',
          description: 'Top emergency service banners, quick category grids, and seasonal promotional cards.',
        },
        {
          name: 'Technician Profile & Booking Modal',
          role: 'Decision & Checkout Flow',
          description: 'Detailed credentials, review history, transparent pricing breakdown, and date picker.',
        },
      ],
    },
    decisions: [
      {
        title: 'Upfront Price Range Estimator vs. "Get a Quote" Form',
        decision:
          'Presented instant price estimates directly on the service selection screen before requiring user details.',
        why: 'Drastically reduces booking abandonment and builds user trust compared to opaque inquiry forms.',
        tradeoff: 'Requires clear disclaimer that final cost may vary slightly based on on-site inspection.',
      },
    ],
    buildLog: [
      {
        milestone: 'Wireframing & Competitive Analysis',
        date: 'Week 1',
        details: 'Analyzed top on-demand apps (Urban Company, TaskRabbit) and mapped friction points.',
      },
      {
        milestone: 'High-Fidelity Mobile Screens & Prototyping',
        date: 'Week 2',
        details: 'Crafted 18 mobile screens in Figma with Auto Layout and smart-animate micro-interactions.',
      },
    ],
    quality: {
      testing: 'Tested touch target sizes (minimum 44x44pt) across all interactive buttons and date selectors.',
      security: 'Designed phone OTP verification and privacy masked contact numbers.',
      accessibility: 'High contrast color scheme with accessible typography scale.',
      performance: 'Pixel-perfect vector SVG icons and organized component sets.',
    },
    outcomes: [
      'Completed comprehensive UI/UX practical challenge for Webtezza (Pvt) Ltd.',
      'Published interactive Figma prototype demonstration on LinkedIn.',
    ],
    lessonsLearned: [
      'Simplifying checkout steps to fewer screens dramatically increases user confidence in service booking.',
    ],
    v2Improvements: ['Design in-app real-time chat with technician and live GPS tracking.'],
    evidence: [
      {
        label: 'LinkedIn UI/UX Design Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
        type: 'external',
        isExternal: true,
        note: 'Figma mobile app prototype demonstration and design explanation',
      },
    ],
  },
  {
    slug: 'travel-hub-uiux-design',
    title: 'Travel Hub — Sri Lanka Tourism UI/UX Design System',
    headline:
      'Comprehensive UI/UX design system and high-fidelity interactive prototype created in Figma for Sri Lanka tour package discovery, destination filtering, and booking management.',
    track: 'figma',
    conciseOutcome:
      'Engineered high-fidelity tourist dashboard screens, responsive package card grids, destination exploration workflows, and clickable Figma prototype.',
    featured: true,
    order: 12,
    status: 'shipped',
    category: 'UI/UX Design & Prototyping',
    period: '2024 – 2025',
    year: '2025',
    duration: '4 Months',
    role: 'UI/UX Designer & Prototyper',
    teamSize: 4,
    isAcademic: true,
    context:
      '2nd Year Software Project – University of Moratuwa: Led the complete UI/UX design phase in Figma before full-stack engineering, crafting accessible tourist dashboards and design tokens.',
    technologies: ['Figma', 'Design Systems', 'Prototyping'],
    stack: ['Figma', 'Design Systems', 'Prototyping'],
    linkedInUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
    demoUrl: 'https://www.figma.com/proto/WAY9zYrASNhdr0Fjej69zb/Travel-Hub?node-id=0-1&t=jnBrkBLbAn8TDWtC-1',
    coverImage: {
      src: '/images/projects/travelhub-figma.jpg',
      alt: 'Travel Hub Sri Lanka Tourism Package Exploration Interface in Figma',
      width: 1024,
      height: 587,
      caption: 'Travel Hub Figma UI/UX Design: Destination Cards, Multi-Criteria Filter Badges, and Package Booking Dashboard',
    },
    problem:
      'Tourist package platforms often have cluttered layouts and confusing navigation, making destination exploration frustrating on mobile and desktop devices.',
    constraints: [
      'Must provide clean card-based package browsing with rating badges, pricing, and duration tags.',
      'Must design responsive layouts adhering to modern visual hierarchy and color harmony.',
      'Must build an interactive Figma prototype with working filters and reservation modal flows.',
    ],
    personalRole:
      'Created the comprehensive design system, component variants, wireframes, and interactive prototype in Figma aligning the team execution.',
    contributions: [
      'Designed explore destinations dashboard with responsive card grids, category filters (Beach, Mountain, City, Tropical), and search inputs.',
      'Built consistent design tokens for typography, elevation, and accent blues.',
      'Delivered interactive prototype tested with university peers and presented to evaluators.',
    ],
    architecture: {
      summary:
        'A component-driven Figma design system organized into foundation tokens, responsive package cards, tourist booking modals, and clickable prototype user flows.',
      keyComponents: [
        {
          name: 'Destination Discovery Feed',
          role: 'Browsing & Category Filtering',
          description: 'Top picks carousel, multi-criteria category filter chips, and destination cards.',
        },
        {
          name: 'Package Booking & Review Modals',
          role: 'Checkout & Social Proof',
          description: 'Reservation date selector, price breakdown, and verified traveler review components.',
        },
      ],
    },
    decisions: [
      {
        title: 'Card-Based Destination Feed vs. Dense Table View',
        decision:
          'Adopted rich photographic card grids with prominent rating badges and pricing per person.',
        why: 'Travel discovery is an emotionally driven visual experience; card layouts maximize engagement.',
        tradeoff: 'Requires high-resolution photography assets for each tour package.',
      },
    ],
    buildLog: [
      {
        milestone: 'Figma Design System & Exploration Views',
        date: 'Month 1',
        details: 'Crafted tourist dashboard, package cards, and interactive filters in Figma.',
      },
    ],
    quality: {
      testing: 'Validated WCAG 2.2 AA contrast on text badges and buttons.',
      security: 'Static design concept with zero external vulnerabilities.',
      accessibility: 'High contrast text and clear touch targets across all device previews.',
      performance: 'Clean frame hierarchy with organized Auto Layout instances.',
    },
    outcomes: [
      'Created comprehensive Figma design file and interactive prototype.',
      'Served as the design blueprint for the live production deployment.',
    ],
    lessonsLearned: [
      'Prototyping responsive components in Figma first drastically simplifies frontend React development.',
    ],
    v2Improvements: ['Add animated interactive map view pins in prototype.'],
    evidence: [
      {
        label: 'Figma Interactive Prototype',
        url: 'https://www.figma.com/proto/WAY9zYrASNhdr0Fjej69zb/Travel-Hub?node-id=0-1&t=jnBrkBLbAn8TDWtC-1',
        type: 'figma',
        isExternal: true,
        note: 'High-fidelity UI/UX design prototype in Figma',
      },
      {
        label: 'LinkedIn Design Showcase',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7373795791355842560/',
        type: 'external',
        isExternal: true,
        note: 'Figma design showcase on LinkedIn',
      },
    ],
  },
];
