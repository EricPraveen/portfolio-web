import { CredentialItem, AwardItem, HackathonItem } from './types';

export const credentialsData: CredentialItem[] = [
  // 01. Microsoft — SOC Program Foundations Training
  {
    id: 'cert-microsoft-soc',
    title: 'SOC Program Foundations Training',
    issuer: 'Microsoft',
    issueDate: '2024',
    group: 'certification',
    category: 'Security & Networking',
    verificationUrl: '/documents/certificates/SOC.pdf',
    credentialId: 'MS-SOC-FOUNDATIONS-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/SOC.pdf',
      type: 'pdf',
      alt: 'Microsoft SOC Program Foundations Training Certificate',
      caption: 'Verified Microsoft Security Operations Center (SOC) Certificate',
    },
    summary:
      'Foundations training in Security Operations Center (SOC) workflows, threat modeling, security monitoring, and incident response fundamentals.',
    skillsDemonstrated: ['Information Security', 'Threat Analysis', 'Network Monitoring'],
    relatedProjectSlug: 'ideapad-blog-platform',
    featured: true,
  },

  // 02. Coursera / IBM — Developing Front-End Apps with React
  {
    id: 'cert-coursera-react',
    title: 'Developing Front-End Apps with React',
    issuer: 'Coursera / IBM',
    issueDate: '2024',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Developing Front End Apps with React.pdf',
    credentialId: 'COURSERA-REACT-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Developing Front End Apps with React.pdf',
      type: 'pdf',
      alt: 'Coursera IBM Developing Front-End Apps with React Certificate',
      caption: 'Verified React.js Component Architecture & State Management Certificate',
    },
    summary:
      'Hands-on certification covering React components, hooks (useState, useEffect, useContext), state management, routing, and REST API integration.',
    skillsDemonstrated: ['React.js', 'JavaScript (ES6+)', 'Frontend Architecture', 'State Management'],
    relatedProjectSlug: 'travel-hub-platform',
    featured: true,
  },

  // 03. Coursera / IBM — Introduction to HTML, CSS, & JavaScript
  {
    id: 'cert-coursera-html-css-js',
    title: 'Introduction to HTML, CSS, & JavaScript',
    issuer: 'Coursera / IBM',
    issueDate: '2024',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Introduction to HTML, CSS, & JavaScript.pdf',
    credentialId: 'COURSERA-HTML-CSS-JS-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Introduction to HTML, CSS, & JavaScript.pdf',
      type: 'pdf',
      alt: 'Coursera Introduction to HTML, CSS, and JavaScript Certificate',
      caption: 'Verified Web Standards & Responsive Layouts Certificate',
    },
    summary:
      'Foundational certification in modern HTML5 semantic markup, CSS3 styling with flexbox/grid, and JavaScript DOM manipulation.',
    skillsDemonstrated: ['HTML5 & Responsive Web Design', 'CSS3', 'JavaScript', 'DOM API'],
    relatedProjectSlug: 'edutrack-campus-portal',
    featured: true,
  },

  // 04. Coursera / IBM — Introduction to Software Engineering
  {
    id: 'cert-coursera-software-eng',
    title: 'Introduction to Software Engineering',
    issuer: 'Coursera / IBM',
    issueDate: '2024',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Introduction to Software Engineering.pdf',
    credentialId: 'COURSERA-SWE-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Introduction to Software Engineering.pdf',
      type: 'pdf',
      alt: 'Coursera Introduction to Software Engineering Certificate',
      caption: 'Verified Software Engineering Lifecycles & SDLC Certificate',
    },
    summary:
      'Comprehensive study of software engineering principles, Agile methodologies, architecture patterns, and collaborative development lifecycles.',
    skillsDemonstrated: ['Software Engineering', 'Agile Planning', 'System Design', 'Code Quality'],
    relatedProjectSlug: 'travel-hub-platform',
    featured: true,
  },

  // 05. University of Moratuwa — Web Design for Beginners
  {
    id: 'cert-uom-web-design',
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa (CODL)',
    issueDate: '2023',
    group: 'academic',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Web Design for Beginners.pdf',
    credentialId: 'UOM-CODL-WEB-2023',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Web Design for Beginners.pdf',
      type: 'pdf',
      alt: 'University of Moratuwa Web Design for Beginners Certificate',
      caption: 'University of Moratuwa Web Design Distinction',
    },
    summary:
      'Academic distinction from the University of Moratuwa Center for Open & Distance Learning covering web design principles and responsive layouts.',
    skillsDemonstrated: ['HTML5 & Responsive Web Design', 'CSS3', 'Web Design', 'UI Layouts'],
    relatedProjectSlug: 'edutrack-campus-portal',
    featured: true,
  },

  // 06. University of Moratuwa — Python for Beginners
  {
    id: 'cert-uom-python',
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa (CODL)',
    issueDate: '2023',
    group: 'academic',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Python_for_Beginners.pdf',
    credentialId: 'UOM-CODL-PY-2023',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Python_for_Beginners.pdf',
      type: 'pdf',
      alt: 'University of Moratuwa Python for Beginners Certificate',
      caption: 'University of Moratuwa Python Programming Distinction',
    },
    summary:
      'Academic distinction covering Python programming fundamentals, data structures, control flows, and procedural algorithm implementation.',
    skillsDemonstrated: ['Python', 'Data Structures', 'Algorithmic Problem Solving'],
    featured: true,
  },

  // 07. SoloLearn — Introduction to Java
  {
    id: 'cert-sololearn-java',
    title: 'Introduction to Java',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Intorduction to JAVA.pdf',
    credentialId: 'SOLO-JAVA-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Intorduction to JAVA.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to Java Certificate',
    },
    summary:
      'Object-Oriented Programming in Java: classes, inheritance, polymorphism, encapsulation, and standard library collections.',
    skillsDemonstrated: ['Java (OOP & Concurrency)', 'Object-Oriented Programming', 'Data Structures'],
    relatedProjectSlug: 'travel-hub-platform',
    featured: false,
  },

  // 08. SoloLearn — Introduction to JavaScript
  {
    id: 'cert-sololearn-javascript',
    title: 'Introduction to JavaScript',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Intorduction to JacaScript.pdf',
    credentialId: 'SOLO-JS-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Intorduction to JacaScript.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to JavaScript Certificate',
    },
    summary:
      'Modern JavaScript fundamentals, ES6 syntax, functions, objects, DOM manipulation, and asynchronous programming.',
    skillsDemonstrated: ['JavaScript (ES6+)', 'DOM API', 'Asynchronous Programming'],
    relatedProjectSlug: 'eshop-ecommerce-platform',
    featured: false,
  },

  // 09. SoloLearn — Introduction to C
  {
    id: 'cert-sololearn-c',
    title: 'Introduction to C',
    issuer: 'SoloLearn',
    issueDate: '2023',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: '/documents/certificates/Intorduction to C.pdf',
    credentialId: 'SOLO-C-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Intorduction to C.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to C Certificate',
    },
    summary:
      'Procedural programming in C: memory allocation, pointers, structs, arrays, and standard I/O operations.',
    skillsDemonstrated: ['C', 'Memory Modeling', 'Pointers & Structs'],
    featured: false,
  },

  // 10. SoloLearn — Introduction to LLMs
  {
    id: 'cert-sololearn-intro-llms',
    title: 'Introduction to LLMs',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: '/documents/certificates/Introduction to LLMs.pdf',
    credentialId: 'SOLO-LLM-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Introduction to LLMs.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to LLMs Certificate',
    },
    summary:
      'Foundations of Large Language Models: transformer architecture overview, tokenization, embeddings, and context window operations.',
    skillsDemonstrated: ['LLM Architectures', 'Generative AI', 'Transformers'],
    featured: false,
  },

  // 11. SoloLearn — Prompt Engineering
  {
    id: 'cert-sololearn-prompt-eng',
    title: 'Prompt Engineering',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: '/documents/certificates/Prompt Engineering.pdf',
    credentialId: 'SOLO-PROMPT-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Prompt Engineering.pdf',
      type: 'pdf',
      alt: 'SoloLearn Prompt Engineering Certificate',
    },
    summary:
      'Structured prompt design techniques, few-shot prompting, chain-of-thought methodologies, and system prompt engineering.',
    skillsDemonstrated: ['Prompt Engineering', 'Generative AI', 'AI Workflows'],
    featured: false,
  },

  // 12. SoloLearn — Machine Learning for Beginners
  {
    id: 'cert-sololearn-ml',
    title: 'Machine Learning for Beginners',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: '/documents/certificates/ML for Beginners.pdf',
    credentialId: 'SOLO-ML-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/ML for Beginners.pdf',
      type: 'pdf',
      alt: 'SoloLearn Machine Learning for Beginners Certificate',
    },
    summary:
      'Core machine learning paradigms: supervised vs. unsupervised learning, regression models, classification algorithms, and dataset evaluation.',
    skillsDemonstrated: ['Machine Learning', 'Data Modeling', 'Algorithms'],
    featured: false,
  },

  // 13. SoloLearn — Ethical AI Foundations
  {
    id: 'cert-sololearn-ethical-ai',
    title: 'Ethical AI Foundations',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: '/documents/certificates/Ethical AI Foundations.pdf',
    credentialId: 'SOLO-ETHICAL-AI-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Ethical AI Foundations.pdf',
      type: 'pdf',
      alt: 'SoloLearn Ethical AI Foundations Certificate',
    },
    summary:
      'Principles of responsible AI development, algorithmic fairness, bias mitigation, data governance, and ethical AI deployment.',
    skillsDemonstrated: ['AI Ethics', 'Data Governance', 'Responsible AI'],
    featured: false,
  },

  // 14. SoloLearn — Data Analytics with AI
  {
    id: 'cert-sololearn-data-analytics',
    title: 'Data Analytics with AI',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: '/documents/certificates/Data Analytics with AI.pdf',
    credentialId: 'SOLO-DATA-ANALYTICS-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Data Analytics with AI.pdf',
      type: 'pdf',
      alt: 'SoloLearn Data Analytics with AI Certificate',
    },
    summary:
      'Exploratory data analysis, statistical insights, and AI-assisted data visualization techniques for decision support.',
    skillsDemonstrated: ['Data Analytics', 'Statistical Analysis', 'AI Insights'],
    featured: false,
  },

  // 15. SoloLearn — Data Literacy with AI
  {
    id: 'cert-sololearn-data-literacy',
    title: 'Data Literacy with AI',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: '/documents/certificates/Data Literacy with AI.pdf',
    credentialId: 'SOLO-DATA-LITERACY-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Data Literacy with AI.pdf',
      type: 'pdf',
      alt: 'SoloLearn Data Literacy with AI Certificate',
    },
    summary:
      'Interpreting data distributions, identifying correlation vs. causation, evaluating data pipelines, and communicating data findings.',
    skillsDemonstrated: ['Data Literacy', 'Critical Data Thinking', 'Data Interpretation'],
    featured: false,
  },

  // 16. SoloLearn — Brainstorm with AI
  {
    id: 'cert-sololearn-brainstorm-ai',
    title: 'Brainstorm with AI',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: '/documents/certificates/Brainstorm with AI.pdf',
    credentialId: 'SOLO-BRAINSTORM-AI-VERIFIED',
    isCredentialIdSafe: true,
    previewDoc: {
      src: '/documents/certificates/Brainstorm with AI.pdf',
      type: 'pdf',
      alt: 'SoloLearn Brainstorm with AI Certificate',
    },
    summary:
      'Leveraging generative AI as a cognitive assistant for ideation, system design exploration, architectural brainstorming, and iterative problem solving.',
    skillsDemonstrated: ['Generative AI Ideation', 'Creative Problem Solving', 'AI Collaboration'],
    featured: false,
  },
];

export const awardsData: AwardItem[] = [];

export const hackathonsData: HackathonItem[] = [];
