export interface NavItem {
  index: string;
  label: string;
  href: string;
  targetId: string;
  matchPattern?: (pathname: string) => boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    index: '01',
    label: 'About',
    href: '/#about',
    targetId: 'about',
    matchPattern: (pathname: string) => pathname === '/about' || pathname === '/#about',
  },
  {
    index: '02',
    label: 'Skills',
    href: '/#skills',
    targetId: 'skills',
    matchPattern: (pathname: string) => pathname.startsWith('/skills') || pathname === '/#skills',
  },
  {
    index: '03',
    label: 'Projects',
    href: '/#projects',
    targetId: 'projects',
    matchPattern: (pathname: string) => pathname.startsWith('/projects') || pathname === '/#projects',
  },
  {
    index: '04',
    label: 'Education',
    href: '/#education',
    targetId: 'education',
    matchPattern: (pathname: string) => pathname.startsWith('/education') || pathname === '/#education',
  },
  {
    index: '05',
    label: 'Contact',
    href: '/#contact',
    targetId: 'contact',
    matchPattern: (pathname: string) => pathname.startsWith('/contact') || pathname === '/#contact',
  },
];

export interface CurrentSectionInfo {
  index: string;
  label: string;
  href: string;
  isKnown: boolean;
}

const SECTION_BADGE_MAP: Record<string, { index: string; label: string; href: string }> = {
  home: { index: '01', label: 'Home', href: '/#home' },
  about: { index: '02', label: 'About', href: '/#about' },
  projects: { index: '03', label: 'Work', href: '/#projects' },
  skills: { index: '04', label: 'Stack', href: '/#skills' },
  education: { index: '05', label: 'Log', href: '/#education' },
  certificates: { index: '06', label: 'Field', href: '/#certificates' },
  contact: { index: '07', label: 'Contact', href: '/#contact' },
};

export function getCurrentSection(pathname: string, activeSectionId?: string): CurrentSectionInfo {
  // If on homepage and activeSectionId is known, return live scrolled section
  if ((pathname === '/' || pathname === '') && activeSectionId && SECTION_BADGE_MAP[activeSectionId]) {
    const s = SECTION_BADGE_MAP[activeSectionId];
    return {
      index: s.index,
      label: s.label,
      href: s.href,
      isKnown: true,
    };
  }

  // Normalize pathname (strip trailing slash if length > 1)
  const normalized = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;

  for (const item of NAV_ITEMS) {
    if (item.matchPattern ? item.matchPattern(normalized) : item.href === normalized) {
      return {
        index: item.index,
        label: item.label,
        href: item.href,
        isKnown: true,
      };
    }
  }

  // Handle dev or special routes
  if (normalized.startsWith('/dev')) {
    return {
      index: '00',
      label: 'Dev Specimen',
      href: '/dev/design-system',
      isKnown: true,
    };
  }

  return {
    index: '01',
    label: 'Overview',
    href: '/#home',
    isKnown: true,
  };
}
