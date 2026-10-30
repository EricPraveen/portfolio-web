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
  },
  {
    index: '02',
    label: 'Work',
    href: '/#projects',
    targetId: 'projects',
  },
  {
    index: '03',
    label: 'Stack',
    href: '/#skills',
    targetId: 'skills',
  },
  {
    index: '04',
    label: 'Field',
    href: '/#certificates',
    targetId: 'certificates',
  },
  {
    index: '05',
    label: 'Contact',
    href: '/#contact',
    targetId: 'contact',
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
  certificates: { index: '05', label: 'Field', href: '/#certificates' },
  contact: { index: '06', label: 'Contact', href: '/#contact' },
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
