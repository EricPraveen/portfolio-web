export interface NavItem {
  index: string;
  label: string;
  href: string;
  matchPattern?: (pathname: string) => boolean;
}

export const NAV_ITEMS: NavItem[] = [
  {
    index: '01',
    label: 'About',
    href: '/about',
    matchPattern: (pathname: string) => pathname === '/about',
  },
  {
    index: '02',
    label: 'Skills',
    href: '/skills',
    matchPattern: (pathname: string) => pathname.startsWith('/skills'),
  },
  {
    index: '03',
    label: 'Projects',
    href: '/projects',
    matchPattern: (pathname: string) => pathname.startsWith('/projects'),
  },
  {
    index: '04',
    label: 'Education',
    href: '/education',
    matchPattern: (pathname: string) => pathname.startsWith('/education'),
  },
  {
    index: '05',
    label: 'Contact',
    href: '/contact',
    matchPattern: (pathname: string) => pathname.startsWith('/contact'),
  },
];

export interface CurrentSectionInfo {
  index: string;
  label: string;
  href: string;
  isKnown: boolean;
}

export function getCurrentSection(pathname: string): CurrentSectionInfo {
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
    index: '--',
    label: 'System',
    href: '/',
    isKnown: false,
  };
}
