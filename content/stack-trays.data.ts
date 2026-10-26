export interface StackTrayItem {
  name: string;
  context: string;
  badge?: string;
  highlight?: boolean;
}

export interface StackTray {
  id: string;
  trayNumber: string; // "01 / 08"
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
    count: 4,
    description:
      'Core programming and query languages used for production backend services, interactive client interfaces, and embedded systems.',
    items: [
      { name: 'Java', context: 'Spring Boot services' },
      { name: 'JavaScript', context: 'React / Next.js' },
      { name: 'C', context: 'Embedded work' },
      { name: 'SQL', context: 'PostgreSQL models' },
    ],
  },
  {
    id: 'frontend',
    trayNumber: '02 / 08',
    code: 'FE',
    title: 'Frontend',
    count: 4,
    description:
      'Component-driven client SPAs, server-rendered React applications, responsive web interfaces, and progressive apps.',
    items: [
      { name: 'React', context: '01 · 02 · 04 · 05' },
      { name: 'Next.js', context: '01 · 02 · 04' },
      { name: 'React Native', context: '01' },
      { name: 'PWA', context: '01' },
    ],
  },
  {
    id: 'backend',
    trayNumber: '03 / 08',
    code: 'BE',
    title: 'Backend',
    count: 4,
    description:
      'Enterprise RESTful APIs, Spring Security with JWT authentication, relational transaction management, and Node middleware.',
    items: [
      { name: 'Spring Boot', context: '01 · 02 · 04' },
      { name: 'REST APIs', context: '01 · 02 · 04 · 05' },
      { name: 'Java', context: '01 · 02 · 04' },
      { name: 'Node.js / Express', context: '05 · group project' },
    ],
  },
  {
    id: 'data',
    trayNumber: '04 / 08',
    code: 'DATA',
    title: 'Data',
    count: 4,
    description:
      'Relational schema design, ACID transactional integrity, PostgreSQL performance indexing, and document data models.',
    items: [
      { name: 'PostgreSQL', context: '01 · 02 · 04' },
      { name: 'Supabase', context: '01 · 02 · 04' },
      { name: 'SQL', context: '01 · 02 · 04' },
      { name: 'MongoDB / Mongoose', context: '05 · group project' },
    ],
  },
  {
    id: 'cloud-devops',
    trayNumber: '05 / 08',
    code: 'OPS',
    title: 'Cloud & DevOps',
    count: 5,
    description:
      'Containerization, automated build workflows, continuous integration, and edge-deployed cloud hosting infrastructure.',
    items: [
      { name: 'AWS', context: '01 · 02' },
      { name: 'Vercel', context: '02 · 04' },
      { name: 'Netlify', context: '01' },
      { name: 'Docker', context: 'Containers' },
      { name: 'CI/CD', context: 'Pipelines' },
    ],
  },
  {
    id: 'dev-tools',
    trayNumber: '06 / 08',
    code: 'TOOLS',
    title: 'Dev Tools',
    count: 4,
    description:
      'Distributed version control, collaborative code reviews, integrated development environments, and debuggers.',
    items: [
      { name: 'Git', context: 'All projects' },
      { name: 'GitHub', context: 'All projects' },
      { name: 'VS Code', context: 'Frontend work' },
      { name: 'IntelliJ IDEA', context: 'Spring Boot work' },
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
      { name: 'Figma', context: 'UI/UX Wireframes & Prototypes' },
      { name: 'UML Modeling', context: 'Architecture Diagrams & Specs' },
      { name: 'Tailwind CSS', context: 'Design Systems & Utility Styling' },
      { name: 'Responsive UI', context: 'Mobile-First Layouts' },
    ],
  },
  {
    id: 'engineering',
    trayNumber: '08 / 08',
    code: 'ENGR',
    title: 'Engineering & IoT',
    count: 5,
    description:
      'Hardware-software interfacing, embedded firmware, sensor telemetry, battery management systems, and solar charging.',
    items: [
      { name: 'Microcontroller', context: '03' },
      { name: 'Embedded systems', context: '03' },
      { name: 'IoT', context: '03' },
      { name: 'BMS', context: '03' },
      { name: 'Solar charging', context: '03' },
    ],
  },
];
