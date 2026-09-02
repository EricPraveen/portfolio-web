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
    technologies: ['React.js', 'Spring Boot', 'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'Figma'],
    stack: ['React.js', 'Spring Boot', 'Tailwind CSS', 'PostgreSQL', 'REST APIs', 'Figma'],
    repoUrl: 'https://github.com/pirathee587/travelhub',
    demoUrl: 'https://travelhublanka.netlify.app/',
    coverImage: {
      src: '/images/projects/travel-hub-cover.svg',
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
        codeSnippet: `// React Package Filter Component
import React, { useState, useMemo } from 'react';

interface Package {
  id: string;
  title: string;
  destination: string;
  price: number;
  durationDays: number;
  rating: number;
}

export function usePackageFilter(packages: Package[], activeCategory: string, searchQuery: string) {
  return useMemo(() => {
    return packages.filter((pkg) => {
      const matchesCategory = activeCategory === 'all' || pkg.destination.toLowerCase() === activeCategory.toLowerCase();
      const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [packages, activeCategory, searchQuery]);
}`,
      },
      {
        id: 'art-travel-booking-controller',
        title: 'Spring Boot Booking Request Controller',
        type: 'code',
        description: 'REST controller handling incoming tourist reservation requests with DTO validation.',
        language: 'java',
        codeSnippet: `// Spring Boot Booking REST Controller
package com.travelhub.controller;

import com.travelhub.dto.BookingRequestDto;
import com.travelhub.model.Booking;
import com.travelhub.service.BookingService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/bookings")
@CrossOrigin(origins = "*")
public class BookingController {

    private final BookingService bookingService;

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody BookingRequestDto request) {
        Booking created = bookingService.processBooking(request);
        return ResponseEntity.ok(created);
    }
}`,
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
        label: 'Live Netlify Deployment',
        url: 'https://travelhublanka.netlify.app/',
        type: 'demo',
        isExternal: true,
        note: 'Live interactive production build',
      },
      {
        label: 'GitHub Repository',
        url: 'https://github.com/pirathee587/travelhub',
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
    slug: 'ideapad-blog-platform',
    title: 'IdeaPad — Full-Stack Publishing & Community Blog Platform',
    headline:
      'A full-stack editorial blogging platform featuring JWT authentication, role-based authorization, post CRUD, genre filtering, bookmarks, and Cloudinary media uploads.',
    conciseOutcome:
      'Engineered end-to-end full-stack application with React.js, Spring Boot, PostgreSQL schema, and Cloudinary image pipelines.',
    featured: true,
    order: 2,
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
    repoUrl: 'https://github.com/EricPraveen/IdeaPad',
    coverImage: {
      src: '/images/projects/ideapad-cover.svg',
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
      textAlternative:
        'Architecture diagram depicting React.js Client sending JWT-authenticated HTTP requests to Spring Boot Backend with Spring Security filters, reading/writing PostgreSQL database tables, and uploading media assets directly to Cloudinary.',
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
      {
        title: 'Cloudinary CDN vs. Local Server File Storage',
        decision:
          'Integrated Cloudinary REST API for uploading and serving all post banner images.',
        why: 'Offloads bandwidth, storage management, and automatic image compression from the application server to a specialized global CDN.',
        tradeoff:
          'Introduces dependency on third-party cloud API credentials and network latency during image upload.',
        alternativesConsidered: [
          'Local disk storage (Risks filling application server disk and complicates containerized multi-instance deployment)',
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
    artifacts: [
      {
        id: 'art-jwt-filter',
        title: 'JWT Token Validation Filter',
        type: 'code',
        description: 'Spring Security OncePerRequestFilter parsing bearer tokens and populating security context.',
        language: 'java',
        codeSnippet: `// Spring Security JWT Filter
package com.ideapad.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;
import javax.servlet.FilterChain;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private final JwtTokenProvider tokenProvider;

    public JwtAuthenticationFilter(JwtTokenProvider tokenProvider) {
        this.tokenProvider = tokenProvider;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) {
        String token = extractJwt(request);
        if (token != null && tokenProvider.validateToken(token)) {
            var auth = tokenProvider.getAuthentication(token);
            SecurityContextHolder.getContext().setAuthentication(auth);
        }
        chain.doFilter(request, response);
    }
}`,
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
    title: 'EShop — MERN Dynamic E-Commerce & Inventory Management Platform',
    headline:
      'A full-stack MERN e-commerce application with dynamic product catalog browsing, real-time inventory tracking, order processing, and stock deduction control.',
    conciseOutcome:
      'Constructed MERN web application with RESTful APIs, dynamic MongoDB product filtering, order workflow, and automated inventory reconciliation.',
    featured: true,
    order: 3,
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
    repoUrl: 'https://github.com/EricPraveen/EShop',
    coverImage: {
      src: '/images/projects/eshop-cover.svg',
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
      textAlternative:
        'Architecture diagram depicting React.js Client making asynchronous Axios REST API calls to Node.js/Express.js Backend, interacting with MongoDB database for product catalog and order document persistence.',
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
    artifacts: [
      {
        id: 'art-eshop-order-controller',
        title: 'Order Processing & Stock Deduction Controller',
        type: 'code',
        description: 'Express.js controller executing conditional inventory deduction during checkout.',
        language: 'javascript',
        codeSnippet: `// Express.js Order Controller with Stock Validation
const Product = require('../models/Product');
const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { orderItems, shippingAddress, totalPrice } = req.body;

    for (const item of orderItems) {
      const product = await Product.findById(item.product);
      if (!product || product.countInStock < item.qty) {
        return res.status(400).json({ message: \`Insufficient stock for \${product?.name || 'product'}\` });
      }
      product.countInStock -= item.qty;
      await product.save();
    }

    const order = new Order({ orderItems, user: req.user._id, shippingAddress, totalPrice });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (error) {
    res.status(500).json({ message: 'Order processing failed', error: error.message });
  }
};`,
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
    title: 'EduTrack — Campus Information & Student Life Web Portal',
    headline:
      'A responsive campus information web application providing university students and visitors with structured access to campus facilities, academic courses, student life, events, and clubs.',
    conciseOutcome:
      'Built responsive multi-section campus portal with dynamic content rendering, interactive navigation, and mobile-first layouts.',
    featured: true,
    order: 4,
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
      textAlternative:
        'Architecture diagram showing User interacting with Responsive HTML5/CSS3 Interface, dynamic JavaScript DOM controller rendering campus sections for Facilities, Courses, Clubs, and Events.',
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
    artifacts: [
      {
        id: 'art-edutrack-tab-controller',
        title: 'Dynamic Tab Navigation Controller',
        type: 'code',
        description: 'Vanilla JavaScript module managing active section states and DOM tab toggling.',
        language: 'javascript',
        codeSnippet: `// Dynamic Campus Section Tab Controller
document.addEventListener('DOMContentLoaded', () => {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const contentSections = document.querySelectorAll('.campus-section');

  tabButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetSectionId = btn.getAttribute('data-target');

      tabButtons.forEach((b) => b.classList.remove('active'));
      contentSections.forEach((s) => s.classList.remove('active'));

      btn.classList.add('active');
      document.getElementById(targetSectionId)?.classList.add('active');
    });
  });
});`,
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
        label: 'GitHub Repository',
        url: 'https://github.com/EricPraveen/EduTrack',
        type: 'github',
        isExternal: true,
        note: 'Complete source code repository',
      },
    ],
  },
];
