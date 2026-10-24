import type { Metadata } from 'next';
import React from 'react';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { getProfile } from '@/lib/content';
import {
  SkipLink,
  Header,
  LeftRailNav,
  Footer,
  PageTransition,
  ActiveSectionProvider,
} from '@/components/layout';
import CursorRingField from '@/components/ui/CursorRingField';

// Modern Universal Sans Typography: Inter
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ericpraveen.dev'),
  title: {
    default: 'Eric Praveen | Portfolio',
    template: '%s | Eric Praveen',
  },
  description:
    'Full-stack developer and software engineer based in Sri Lanka. Building web applications, distributed systems, and robust backends.',
  keywords: [
    'Eric Praveen',
    'Software Engineer',
    'Full-Stack Developer',
    'TypeScript',
    'React',
    'Next.js',
    'Portfolio',
    'Sri Lanka',
    'University of Moratuwa',
  ],
  authors: [{ name: 'Eric Praveen', url: 'https://ericpraveen.dev' }],
  creator: 'Eric Praveen',
  publisher: 'Eric Praveen',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ericpraveen.dev',
    siteName: 'Eric Praveen | Portfolio',
    title: 'Eric Praveen | Portfolio',
    description:
      'Full-stack developer and software engineer based in Sri Lanka. Building web applications, distributed systems, and robust backends.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Eric Praveen | Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eric Praveen | Portfolio',
    description:
      'Full-stack developer and software engineer based in Sri Lanka. Building web applications, distributed systems, and robust backends.',
    images: ['/opengraph-image'],
    creator: '@ericpraveen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const profile = getProfile();

  return (
    <html
      lang="en"
      className={inter.variable}
    >
      <body>
        {/* Full-Screen Interactive WebGL Background — Jet Black, Hot Pink & Chartreuse */}
        <div className="global-cursor-field-bg" aria-hidden="true">
          <CursorRingField
            background="transparent"
            colors={["#FF2A85", "#D4FF00", "#FF5CA2", "#CCFF00", "#FF1493"]}
            density={300}
            dotSize={100}
            speed={5}
            cameraDistance={160}
            ring={{ push: 40, width: 10, radius: 22, turbulence: 85 }}
          />
        </div>
        <SkipLink />
        <ActiveSectionProvider>
          <div className="layout-frame">
            <LeftRailNav />
            <div className="app-shell">
              <Header profile={profile} />
              <main id="main-content" className="app-main" tabIndex={-1}>
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer profile={profile} />
            </div>
          </div>
        </ActiveSectionProvider>
      </body>
    </html>
  );
}
