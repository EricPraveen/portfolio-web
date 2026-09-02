import type { Metadata } from 'next';
import React from 'react';
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';
import '@/styles/globals.css';
import { getProfile } from '@/lib/content';
import {
  SkipLink,
  Header,
  Footer,
  PageTransition,
} from '@/components/layout';

// 1. Editorial Display Serif
const newsreader = Newsreader({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  style: ['normal', 'italic'],
  adjustFontFallback: false,
});

// 2. Grotesk UI & Body Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
});

// 3. Technical Monospace
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://signal-ledger.dev'),
  title: {
    default: 'Signal Ledger — Personal Engineering Portfolio & Technical Systems',
    template: '%s | Signal Ledger',
  },
  description:
    'Evidence-first engineering portfolio, distributed systems architecture case studies, verifiable technical benchmarks, and technical ledger.',
  keywords: [
    'Software Engineer',
    'Systems Engineering',
    'Distributed Systems',
    'High Throughput',
    'Concurrency',
    'TypeScript',
    'Rust',
    'Golang',
    'Evidence-First Portfolio',
    'Signal Ledger',
    'WCAG 2.2 AA',
  ],
  authors: [{ name: 'Signal Ledger Engineer', url: 'https://signal-ledger.dev' }],
  creator: 'Signal Ledger',
  publisher: 'Signal Ledger Publication',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': [{ url: 'https://signal-ledger.dev/feed.xml', title: 'Signal Ledger RSS Feed' }],
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://signal-ledger.dev',
    siteName: 'Signal Ledger',
    title: 'Signal Ledger — Personal Engineering Portfolio & Technical Systems',
    description:
      'Evidence-first engineering portfolio, distributed systems architecture case studies, verifiable technical benchmarks, and technical ledger.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Signal Ledger — Personal Engineering Portfolio & Technical Systems',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Signal Ledger — Personal Engineering Portfolio & Technical Systems',
    description:
      'Evidence-first engineering portfolio, distributed systems architecture case studies, verifiable technical benchmarks, and technical ledger.',
    images: ['/opengraph-image'],
    creator: '@signalledger',
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
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="app-shell">
          <SkipLink />
          <Header profile={profile} />
          <main id="main-content" className="app-main" tabIndex={-1}>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer profile={profile} />
        </div>
      </body>
    </html>
  );
}
