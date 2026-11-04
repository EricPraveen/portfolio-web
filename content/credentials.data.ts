import { CredentialItem, AwardItem, HackathonItem } from './types';

export const credentialsData: CredentialItem[] = [
  // 00. AWS Training & Certification — AWS Technical Essentials
  {
    id: 'cert-aws-technical-essentials',
    title: 'AWS Technical Essentials',
    issuer: 'AWS Training & Certification',
    issueDate: 'Sep 2026',
    group: 'certification',
    category: 'Cloud & DevOps',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'AWS-TECH-ESSENTIALS-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/aws-technical-essentials.jpg',
    previewDoc: {
      src: '/documents/certificates/AWS Technical Essentials.pdf',
      type: 'pdf',
      alt: 'AWS Technical Essentials Certificate Awarded to EricPraveen Alric Prashanth',
      caption: 'Verified AWS Training & Certification — Completed September 23, 2026',
      thumbnailSrc: '/images/certificates/aws-technical-essentials.jpg',
    },
    summary:
      'Foundational AWS cloud architecture covering IAM identity governance, EC2 compute scaling, S3 object storage, relational and NoSQL databases, and VPC networking topology.',
    skillsDemonstrated: ['AWS Cloud', 'IAM Security', 'Amazon EC2', 'Amazon S3', 'Amazon VPC', 'Database Services'],
    featured: true,
  },

  // 01. Microsoft — SOC Program Foundations Training
  {
    id: 'cert-microsoft-soc',
    title: 'SOC Program Foundations Training',
    issuer: 'Microsoft',
    issueDate: '2024',
    group: 'certification',
    category: 'Security & Networking',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'MS-SOC-FOUNDATIONS-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/soc.jpg',
    previewDoc: {
      src: '/documents/certificates/SOC.pdf',
      type: 'pdf',
      alt: 'Microsoft SOC Program Foundations Training Certificate',
      caption: 'Verified Microsoft Security Operations Center (SOC) Certificate',
      thumbnailSrc: '/images/certificates/soc.jpg',
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
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'COURSERA-REACT-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/developing-front-end-apps-with-react.jpg',
    previewDoc: {
      src: '/documents/certificates/Developing Front End Apps with React.pdf',
      type: 'pdf',
      alt: 'Coursera IBM Developing Front-End Apps with React Certificate',
      caption: 'Verified React.js Component Architecture & State Management Certificate',
      thumbnailSrc: '/images/certificates/developing-front-end-apps-with-react.jpg',
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
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'COURSERA-HTML-CSS-JS-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/introduction-to-html-css-javascript.jpg',
    previewDoc: {
      src: '/documents/certificates/Introduction to HTML, CSS, & JavaScript.pdf',
      type: 'pdf',
      alt: 'Coursera Introduction to HTML, CSS, and JavaScript Certificate',
      caption: 'Verified Web Standards & Responsive Layouts Certificate',
      thumbnailSrc: '/images/certificates/introduction-to-html-css-javascript.jpg',
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
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'COURSERA-SWE-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/introduction-to-software-engineering.jpg',
    previewDoc: {
      src: '/documents/certificates/Introduction to Software Engineering.pdf',
      type: 'pdf',
      alt: 'Coursera Introduction to Software Engineering Certificate',
      caption: 'Verified Software Engineering Lifecycles & SDLC Certificate',
      thumbnailSrc: '/images/certificates/introduction-to-software-engineering.jpg',
    },
    summary:
      'Comprehensive study of software engineering principles, Agile methodologies, architecture patterns, and collaborative development lifecycles.',
    skillsDemonstrated: ['Software Engineering', 'Agile Planning', 'System Design', 'Code Quality'],
    relatedProjectSlug: 'travel-hub-platform',
    featured: true,
  },

  // 05. SoloLearn — Introduction to Java
  {
    id: 'cert-sololearn-java',
    title: 'Introduction to Java',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-JAVA-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/intorduction-to-java.jpg',
    previewDoc: {
      src: '/documents/certificates/Intorduction to JAVA.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to Java Certificate',
      thumbnailSrc: '/images/certificates/intorduction-to-java.jpg',
    },
    summary:
      'Object-Oriented Programming in Java: classes, inheritance, polymorphism, encapsulation, and standard library collections.',
    skillsDemonstrated: ['Java (OOP & Concurrency)', 'Object-Oriented Programming', 'Data Structures'],
    relatedProjectSlug: 'travel-hub-platform',
    featured: false,
  },

  // 06. SoloLearn — Introduction to JavaScript
  {
    id: 'cert-sololearn-javascript',
    title: 'Introduction to JavaScript',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-JS-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/intorduction-to-jacascript.jpg',
    previewDoc: {
      src: '/documents/certificates/Intorduction to JacaScript.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to JavaScript Certificate',
      thumbnailSrc: '/images/certificates/intorduction-to-jacascript.jpg',
    },
    summary:
      'Modern JavaScript fundamentals, ES6 syntax, functions, objects, DOM manipulation, and asynchronous programming.',
    skillsDemonstrated: ['JavaScript (ES6+)', 'DOM API', 'Asynchronous Programming'],
    relatedProjectSlug: 'eshop-ecommerce-platform',
    featured: false,
  },

  // 07. SoloLearn — Introduction to LLMs
  {
    id: 'cert-sololearn-intro-llms',
    title: 'Introduction to LLMs',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-LLM-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/introduction-to-llms.jpg',
    previewDoc: {
      src: '/documents/certificates/Introduction to LLMs.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to LLMs Certificate',
      thumbnailSrc: '/images/certificates/introduction-to-llms.jpg',
    },
    summary:
      'Foundations of Large Language Models: transformer architecture overview, tokenization, embeddings, and context window operations.',
    skillsDemonstrated: ['LLM Architectures', 'Generative AI', 'Transformers'],
    featured: false,
  },

  // 08. SoloLearn — Prompt Engineering
  {
    id: 'cert-sololearn-prompt-eng',
    title: 'Prompt Engineering',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-PROMPT-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/prompt-engineering.jpg',
    previewDoc: {
      src: '/documents/certificates/Prompt Engineering.pdf',
      type: 'pdf',
      alt: 'SoloLearn Prompt Engineering Certificate',
      thumbnailSrc: '/images/certificates/prompt-engineering.jpg',
    },
    summary:
      'Structured prompt design techniques, few-shot prompting, chain-of-thought methodologies, and system prompt engineering.',
    skillsDemonstrated: ['Prompt Engineering', 'Generative AI', 'AI Workflows'],
    featured: false,
  },

  // 09. SoloLearn — Machine Learning for Beginners
  {
    id: 'cert-sololearn-ml',
    title: 'Machine Learning for Beginners',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-ML-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/ml-for-beginners.jpg',
    previewDoc: {
      src: '/documents/certificates/ML for Beginners.pdf',
      type: 'pdf',
      alt: 'SoloLearn Machine Learning for Beginners Certificate',
      thumbnailSrc: '/images/certificates/ml-for-beginners.jpg',
    },
    summary:
      'Core machine learning paradigms: supervised vs. unsupervised learning, regression models, classification algorithms, and dataset evaluation.',
    skillsDemonstrated: ['Machine Learning', 'Data Modeling', 'Algorithms'],
    featured: false,
  },

  // 10. SoloLearn — Ethical AI Foundations
  {
    id: 'cert-sololearn-ethical-ai',
    title: 'Ethical AI Foundations',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-ETHICAL-AI-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/ethical-ai-foundations.jpg',
    previewDoc: {
      src: '/documents/certificates/Ethical AI Foundations.pdf',
      type: 'pdf',
      alt: 'SoloLearn Ethical AI Foundations Certificate',
      thumbnailSrc: '/images/certificates/ethical-ai-foundations.jpg',
    },
    summary:
      'Principles of responsible AI development, algorithmic fairness, bias mitigation, data governance, and ethical AI deployment.',
    skillsDemonstrated: ['AI Ethics', 'Data Governance', 'Responsible AI'],
    featured: false,
  },

  // 11. SoloLearn — Data Analytics with AI
  {
    id: 'cert-sololearn-data-analytics',
    title: 'Data Analytics with AI',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-DATA-ANALYTICS-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/data-analytics-with-ai.jpg',
    previewDoc: {
      src: '/documents/certificates/Data Analytics with AI.pdf',
      type: 'pdf',
      alt: 'SoloLearn Data Analytics with AI Certificate',
      thumbnailSrc: '/images/certificates/data-analytics-with-ai.jpg',
    },
    summary:
      'Exploratory data analysis, statistical insights, and AI-assisted data visualization techniques for decision support.',
    skillsDemonstrated: ['Data Analytics', 'Statistical Analysis', 'AI Insights'],
    featured: false,
  },

  // 12. SoloLearn — Data Literacy with AI
  {
    id: 'cert-sololearn-data-literacy',
    title: 'Data Literacy with AI',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-DATA-LITERACY-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/data-literacy-with-ai.jpg',
    previewDoc: {
      src: '/documents/certificates/Data Literacy with AI.pdf',
      type: 'pdf',
      alt: 'SoloLearn Data Literacy with AI Certificate',
      thumbnailSrc: '/images/certificates/data-literacy-with-ai.jpg',
    },
    summary:
      'Interpreting data distributions, identifying correlation vs. causation, evaluating data pipelines, and communicating data findings.',
    skillsDemonstrated: ['Data Literacy', 'Critical Data Thinking', 'Data Interpretation'],
    featured: false,
  },

  // 13. SoloLearn — Brainstorm with AI
  {
    id: 'cert-sololearn-brainstorm-ai',
    title: 'Brainstorm with AI',
    issuer: 'SoloLearn',
    issueDate: '2024',
    group: 'certification',
    category: 'Data & AI',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-BRAINSTORM-AI-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/brainstorm-with-ai.jpg',
    previewDoc: {
      src: '/documents/certificates/Brainstorm with AI.pdf',
      type: 'pdf',
      alt: 'SoloLearn Brainstorm with AI Certificate',
      thumbnailSrc: '/images/certificates/brainstorm-with-ai.jpg',
    },
    summary:
      'Leveraging generative AI as a cognitive assistant for ideation, system design exploration, architectural brainstorming, and iterative problem solving.',
    skillsDemonstrated: ['Generative AI Ideation', 'Creative Problem Solving', 'AI Collaboration'],
    featured: false,
  },

  // 14. University of Moratuwa — Web Design for Beginners
  {
    id: 'cert-uom-web-design',
    title: 'Web Design for Beginners',
    issuer: 'University of Moratuwa (CODL)',
    issueDate: '2023',
    group: 'academic',
    category: 'Software Engineering',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'UOM-CODL-WEB-2023',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/web-design-for-beginners.jpg',
    previewDoc: {
      src: '/documents/certificates/Web Design for Beginners.pdf',
      type: 'pdf',
      alt: 'University of Moratuwa Web Design for Beginners Certificate',
      caption: 'University of Moratuwa Web Design Distinction',
      thumbnailSrc: '/images/certificates/web-design-for-beginners.jpg',
    },
    summary:
      'Academic distinction from the University of Moratuwa Center for Open & Distance Learning covering web design principles and responsive layouts.',
    skillsDemonstrated: ['HTML5 & Responsive Web Design', 'CSS3', 'Web Design', 'UI Layouts'],
    relatedProjectSlug: 'edutrack-campus-portal',
    featured: true,
  },

  // 15. University of Moratuwa — Python for Beginners
  {
    id: 'cert-uom-python',
    title: 'Python for Beginners',
    issuer: 'University of Moratuwa (CODL)',
    issueDate: '2023',
    group: 'academic',
    category: 'Software Engineering',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'UOM-CODL-PY-2023',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/python-for-beginners.jpg',
    previewDoc: {
      src: '/documents/certificates/Python_for_Beginners.pdf',
      type: 'pdf',
      alt: 'University of Moratuwa Python for Beginners Certificate',
      caption: 'University of Moratuwa Python Programming Distinction',
      thumbnailSrc: '/images/certificates/python-for-beginners.jpg',
    },
    summary:
      'Academic distinction covering Python programming fundamentals, data structures, control flows, and procedural algorithm implementation.',
    skillsDemonstrated: ['Python', 'Data Structures', 'Algorithmic Problem Solving'],
    featured: true,
  },

  // 16. SoloLearn — Introduction to C
  {
    id: 'cert-sololearn-c',
    title: 'Introduction to C',
    issuer: 'SoloLearn',
    issueDate: '2023',
    group: 'certification',
    category: 'Software Engineering',
    verificationUrl: 'https://www.linkedin.com/in/ericpraveen-alricprashanth/details/certifications/',
    credentialId: 'SOLO-C-VERIFIED',
    isCredentialIdSafe: true,
    thumbnail: '/images/certificates/intorduction-to-c.jpg',
    previewDoc: {
      src: '/documents/certificates/Intorduction to C.pdf',
      type: 'pdf',
      alt: 'SoloLearn Introduction to C Certificate',
      thumbnailSrc: '/images/certificates/intorduction-to-c.jpg',
    },
    summary:
      'Procedural programming in C: memory allocation, pointers, structs, arrays, and standard I/O operations.',
    skillsDemonstrated: ['C', 'Memory Modeling', 'Pointers & Structs'],
    featured: false,
  },
];

export const awardsData: AwardItem[] = [];

export const hackathonsData: HackathonItem[] = [];
