'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
import { usePathname } from 'next/navigation';

export interface SectionMeta {
  id: string; // primary section ID
  num: string;
  label: string;
  badge: string;
  aliases: string[];
}

export const SECTIONS: SectionMeta[] = [
  { id: 'home', num: '01', label: 'HOME', badge: '01 • HOME', aliases: ['hero', 'top', 'reveal'] },
  { id: 'about', num: '02', label: 'ABOUT', badge: '02 • ABOUT', aliases: ['profile', 'bio', 'about'] },
  { id: 'projects', num: '03', label: 'WORK', badge: '03 • WORK', aliases: ['selected-work', 'work'] },
  { id: 'skills', num: '04', label: 'STACK', badge: '04 • STACK', aliases: ['stack'] },
  { id: 'education', num: '05', label: 'LOG', badge: '05 • LOG', aliases: ['log', 'experience', 'profile-snapshot'] },
  { id: 'certificates', num: '06', label: 'FIELD', badge: '06 • FIELD', aliases: ['credentials', 'field'] },
  { id: 'contact', num: '07', label: 'CONTACT', badge: '07 • CONTACT', aliases: ['contact-section'] },
];

export function resolveSectionId(target: string): string {
  const clean = target.replace(/^#/, '').replace(/^\/#/, '').trim();
  const found = SECTIONS.find(
    (s) => s.id === clean || s.aliases.includes(clean)
  );
  return found ? found.id : clean;
}

export function getSectionMeta(sectionId: string): SectionMeta | undefined {
  const primaryId = resolveSectionId(sectionId);
  return SECTIONS.find((s) => s.id === primaryId);
}

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
  scrollToSection: (idOrAlias: string, updateUrl?: boolean) => boolean;
  activeMeta: SectionMeta;
}

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname() || '/';
  const [activeSection, setActiveSection] = useState<string>('home');
  const isProgrammaticScrollRef = useRef(false);
  const scrollEndTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeMeta = getSectionMeta(activeSection) || SECTIONS[0];

  const scrollToSection = useCallback(
    (idOrAlias: string, updateUrl = true): boolean => {
      if (typeof window === 'undefined') return false;

      const targetId = resolveSectionId(idOrAlias);
      const targetEl =
        document.getElementById(targetId) ||
        document.getElementById(idOrAlias.replace(/^#/, ''));

      if (!targetEl) return false;

      // Lock observer updates during smooth scroll
      isProgrammaticScrollRef.current = true;
      if (scrollEndTimeoutRef.current) clearTimeout(scrollEndTimeoutRef.current);

      setActiveSection(targetId);

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      targetEl.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });

      if (updateUrl) {
        window.history.pushState(null, '', `#${targetId}`);
      }

      scrollEndTimeoutRef.current = setTimeout(() => {
        isProgrammaticScrollRef.current = false;
      }, 850);

      return true;
    },
    []
  );

  // 1. Initial hash access on page load / mount
  useEffect(() => {
    if (pathname !== '/') return;

    const hash = window.location.hash.slice(1);
    if (hash) {
      const timer = setTimeout(() => {
        scrollToSection(hash, false);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [pathname, scrollToSection]);

  // 2. Route-based active navigation for non-root pages
  useEffect(() => {
    if (pathname === '/') return;

    const routeSegment = pathname.replace(/^\//, '').split('/')[0].toLowerCase();
    const meta = getSectionMeta(routeSegment);
    if (meta) {
      setActiveSection(meta.id);
    } else if (routeSegment === 'about') {
      setActiveSection('about');
    }
  }, [pathname]);

  // 3. Back / forward browser button handling
  useEffect(() => {
    if (pathname !== '/') return;

    const handlePopState = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        scrollToSection(hash, false);
      } else {
        scrollToSection('home', false);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [pathname, scrollToSection]);

  // 4. Deterministic Scrollspy for Root Homepage
  useEffect(() => {
    if (pathname !== '/') return;

    let ticking = false;

    const updateActiveSectionOnScroll = () => {
      if (isProgrammaticScrollRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Top of page
      if (scrollY < 120) {
        setActiveSection((prev) => (prev !== 'home' ? 'home' : prev));
        return;
      }

      // Reached bottom of page
      if (windowHeight + scrollY >= fullHeight - 40) {
        setActiveSection((prev) => (prev !== 'contact' ? 'contact' : prev));
        return;
      }

      // Probe point: 38% down viewport
      const probePoint = scrollY + windowHeight * 0.38;

      const sectionElements = SECTIONS.map((s) => {
        const el = document.getElementById(s.id);
        if (!el) return null;
        const rect = el.getBoundingClientRect();
        const top = rect.top + scrollY;
        const bottom = top + rect.height;
        return { id: s.id, top, bottom };
      }).filter(Boolean) as { id: string; top: number; bottom: number }[];

      if (sectionElements.length === 0) return;

      let matchedSection = 'home';
      for (const sec of sectionElements) {
        if (sec.top <= probePoint) {
          matchedSection = sec.id;
        }
      }

      setActiveSection((prev) => (prev !== matchedSection ? matchedSection : prev));
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSectionOnScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Run once after initial layout settles
    const initialTimer = setTimeout(() => {
      updateActiveSectionOnScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      clearTimeout(initialTimer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (scrollEndTimeoutRef.current) clearTimeout(scrollEndTimeoutRef.current);
    };
  }, [pathname]);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        scrollToSection,
        activeMeta,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveSectionContext);
  if (!context) {
    return {
      activeSection: 'home',
      setActiveSection: () => {},
      scrollToSection: () => false,
      activeMeta: SECTIONS[0],
    };
  }
  return context;
}
