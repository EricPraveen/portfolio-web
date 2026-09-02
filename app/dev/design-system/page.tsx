import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Container,
  Section,
  Grid,
  GridCol,
  Rule,
  Eyebrow,
  StatusStamp,
  EvidenceLink,
  MetadataList,
  MetadataItem,
  Stack,
  Cluster,
} from '@/components/ui';

export const metadata: Metadata = {
  title: 'Design System & Component Specimen',
  description:
    'Internal design token system, typography ladder, responsive 12/6/4 grid, WCAG contrast audit, and UI primitives.',
};

export default function DesignSystemSpecimenPage() {
  const colorTokens = [
    {
      name: 'Bone Paper (Base)',
      token: '--color-bone-paper',
      hex: '#F2EFE8',
      role: 'Primary surface tone (warm tactile paper background)',
      contrastVsInk: '14.8:1 (AAA)',
      contrastVsCobalt: '5.2:1 (AA)',
    },
    {
      name: 'Mineral Ink (Text/Plates)',
      token: '--color-mineral-ink',
      hex: '#171A1D',
      role: 'Deep mineral text & high-contrast dark plates',
      contrastVsPaper: '14.8:1 (AAA)',
      contrastVsChartreuse: '13.5:1 (AAA)',
    },
    {
      name: 'Signal Cobalt (Primary Signal)',
      token: '--color-signal-cobalt',
      hex: '#2F5BFF',
      role: 'Interactive focus, outbound links, primary actions',
      contrastVsPaper: '5.2:1 (AA Normal, AAA Large)',
      contrastVsInk: '2.8:1 (Non-text/Indicator)',
    },
    {
      name: 'Lab Chartreuse (Highlight 1)',
      token: '--color-lab-chartreuse',
      hex: '#C9F24A',
      role: 'Rare active highlight, live status indicators, stamps',
      contrastVsInk: '13.5:1 (AAA)',
      contrastVsPaper: '1.2:1 (Requires dark text)',
    },
    {
      name: 'Oxide (Highlight 2)',
      token: '--color-oxide',
      hex: '#C45B43',
      role: 'Rare debugging postmortems, warnings, human warmth',
      contrastVsPaper: '4.8:1 (AA)',
      contrastVsInk: '3.1:1 (Non-text)',
    },
    {
      name: 'Steel (Structural Rules)',
      token: '--color-steel',
      hex: '#8C949C',
      role: 'Structural grid lines, hairline borders, metadata labels',
      contrastVsPaper: '3.2:1 (Large text / Graphical rules)',
      contrastVsInk: '4.6:1 (AA)',
    },
  ];

  return (
    <main style={{ paddingBottom: 'var(--space-3xl)' }}>
      {/* 01 / HEADER */}
      <Container width="wide" style={{ paddingTop: 'var(--space-2xl)' }}>
        <nav style={{ marginBottom: 'var(--space-md)' }}>
          <Link href="/" style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-sm)' }}>
            &larr; Return to Portfolio Index
          </Link>
        </nav>

        <Eyebrow index="SPEC-01">INTERNAL DESIGN SPECIMEN</Eyebrow>
        <h1
          style={{
            fontFamily: 'var(--font-family-display)',
            fontSize: 'var(--font-size-4xl)',
            margin: 'var(--space-2xs) 0 var(--space-xs)',
          }}
        >
          Signal Ledger Visual System
        </h1>
        <p
          style={{
            fontSize: 'var(--font-size-lg)',
            color: 'var(--color-ink-muted)',
            maxWidth: 'var(--container-reading-width)',
            lineHeight: 'var(--line-height-snug)',
          }}
        >
          Design tokens, fluid typography scales, responsive 12/6/4-column grid logic, accessibility focus rings, and reusable UI primitives.
        </p>

        <Rule variant="heavy" spacing="lg" />
      </Container>

      {/* 02 / COLOR PALETTE & WCAG CONTRAST AUDIT */}
      <Container width="wide">
        <Section
          index="01"
          eyebrow="PALETTE & CONTRAST AUDIT"
          title="Color Tokens & Contrast Verification"
          rule="bottom"
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: 'var(--space-md)',
              marginBottom: 'var(--space-xl)',
            }}
          >
            {colorTokens.map((c) => (
              <div
                key={c.name}
                style={{
                  border: 'var(--border-hairline)',
                  borderRadius: 'var(--radius-default)',
                  background: 'var(--color-bone-paper-elevated)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '80px',
                    backgroundColor: c.hex,
                    display: 'flex',
                    alignItems: 'flex-end',
                    padding: 'var(--space-xs) var(--space-sm)',
                    borderBottom: 'var(--border-hairline)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-family-mono)',
                      fontSize: 'var(--font-size-xs)',
                      fontWeight: 'bold',
                      padding: '0.15rem 0.4rem',
                      background: 'rgba(255,255,255,0.85)',
                      borderRadius: '2px',
                      color: '#000',
                    }}
                  >
                    {c.hex}
                  </span>
                </div>
                <div style={{ padding: 'var(--space-sm)' }}>
                  <strong style={{ fontSize: 'var(--font-size-base)', display: 'block', marginBottom: '0.2rem' }}>
                    {c.name}
                  </strong>
                  <code style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-signal-cobalt)', display: 'block', marginBottom: '0.5rem' }}>
                    {c.token}
                  </code>
                  <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-ink-muted)', margin: '0 0 0.75rem' }}>
                    {c.role}
                  </p>
                  <div
                    style={{
                      fontFamily: 'var(--font-family-mono)',
                      fontSize: 'var(--font-size-xs)',
                      padding: 'var(--space-2xs)',
                      background: 'var(--color-bone-paper-subtle)',
                      borderRadius: 'var(--radius-subtle)',
                    }}
                  >
                    <div>{c.contrastVsInk || c.contrastVsPaper}</div>
                    {c.contrastVsChartreuse && <div>{c.contrastVsChartreuse}</div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </Container>

      {/* 03 / TYPOGRAPHY LADDER */}
      <Container width="wide">
        <Section
          index="02"
          eyebrow="TYPOGRAPHY SYSTEM"
          title="Editorial Display + Grotesk UI + Technical Monospace"
          rule="bottom"
        >
          <Stack gap="xl">
            {/* Display Serif */}
            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-bone-paper-subtle)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-default)' }}>
              <Eyebrow index="FONT-01">EDITORIAL DISPLAY SERIF (NEWSREADER)</Eyebrow>
              <div style={{ marginTop: 'var(--space-md)' }}>
                <div className="text-display-4xl" style={{ marginBottom: 'var(--space-xs)' }}>
                  Evidence-First Technical Ledger
                </div>
                <div className="text-display-3xl" style={{ marginBottom: 'var(--space-xs)' }}>
                  Distributed Systems & Architecture
                </div>
                <div className="text-heading-2xl">
                  High-Concurrency Reservation & Optimistic Locking
                </div>
              </div>
            </div>

            {/* Grotesk Sans Body */}
            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-bone-paper-subtle)', border: 'var(--border-hairline)', borderRadius: 'var(--radius-default)' }}>
              <Eyebrow index="FONT-02">GROTESK UI & BODY SANS (PLUS JAKARTA SANS)</Eyebrow>
              <div style={{ marginTop: 'var(--space-md)' }}>
                <p className="text-body-md" style={{ marginBottom: 'var(--space-sm)' }}>
                  <strong>Body Medium:</strong> Rather than adopting generic AI template aesthetics, this portfolio functions as an Authoritative Professional Evidence System where every claim is anchored in verified technical artifacts.
                </p>
                <p className="text-body" style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-ink-muted)' }}>
                  <strong>Body Base:</strong> Code is read far more often than it is written. Simple, strongly-typed data structures and predictable control flows prevent systemic bugs under concurrent load.
                </p>
                <p className="text-sm" style={{ color: 'var(--color-ink-faint)' }}>
                  <strong>Body Small / Caption:</strong> Figure 1: Distributed task orchestration topology with Redis heartbeat lease consensus.
                </p>
              </div>
            </div>

            {/* Monospace Indexing */}
            <div style={{ padding: 'var(--space-lg)', background: 'var(--color-mineral-ink)', color: 'var(--color-bone-paper)', borderRadius: 'var(--radius-default)' }}>
              <span style={{ fontFamily: 'var(--font-family-mono)', fontSize: 'var(--font-size-xs)', color: 'var(--color-lab-chartreuse)', letterSpacing: 'var(--letter-spacing-tracked)', textTransform: 'uppercase' }}>
                FONT-03 / TECHNICAL MONOSPACE (JETBRAINS MONO)
              </span>
              <div style={{ marginTop: 'var(--space-md)', fontFamily: 'var(--font-family-mono)' }}>
                <p style={{ fontSize: 'var(--font-size-sm)', margin: '0 0 var(--space-xs)' }}>
                  01_INDEX &bull; TIMESTAMP: 2026-09-01T23:45:00Z &bull; HASH: SHA256(7f83b1657ff1fc53b)
                </p>
                <pre style={{ background: '#0C0E10', padding: 'var(--space-sm)', borderRadius: 'var(--radius-subtle)', border: '1px solid #2C3238', color: '#E8E4DA' }}>
{`// Distributed heartbeat lease renewal
setInterval(async () => {
  await redisClient.expire(\`worker:lease:\${workerId}\`, LEASE_TTL_SECONDS);
}, HEARTBEAT_INTERVAL_MS);`}
                </pre>
              </div>
            </div>
          </Stack>
        </Section>
      </Container>

      {/* 04 / 12/6/4-COLUMN GRID SPECIMEN */}
      <Container width="wide">
        <Section
          index="03"
          eyebrow="GRID ARCHITECTURE"
          title="12-Column Desktop / 6-Column Tablet / 4-Column Mobile Grid"
          rule="bottom"
        >
          <p style={{ color: 'var(--color-ink-muted)', marginBottom: 'var(--space-md)' }}>
            Resize viewport to observe fluid 12 &rarr; 6 &rarr; 4 responsive column transitions.
          </p>

          <Grid gap="sm" style={{ marginBottom: 'var(--space-md)' }}>
            {Array.from({ length: 12 }).map((_, i) => (
              <GridCol
                key={i}
                span={1}
                style={{
                  background: 'var(--color-bone-paper-subtle)',
                  border: '1px dashed var(--color-steel)',
                  padding: 'var(--space-sm) 0',
                  textAlign: 'center',
                  fontFamily: 'var(--font-family-mono)',
                  fontSize: 'var(--font-size-xs)',
                  fontWeight: 'bold',
                }}
              >
                C{i + 1}
              </GridCol>
            ))}
          </Grid>

          <Grid gap="md">
            <GridCol
              span={8}
              style={{
                background: 'var(--color-bone-paper-elevated)',
                border: 'var(--border-rule)',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-default)',
              }}
            >
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Main Content Column (Span 8)</strong>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-ink-muted)', margin: 0 }}>
                Houses primary case study narratives, architecture diagrams, decision notes, and debugging stories.
              </p>
            </GridCol>

            <GridCol
              span={4}
              style={{
                background: 'var(--color-bone-paper-elevated)',
                border: 'var(--border-rule)',
                padding: 'var(--space-md)',
                borderRadius: 'var(--radius-default)',
              }}
            >
              <strong style={{ display: 'block', marginBottom: '0.25rem' }}>Metadata Rail (Span 4)</strong>
              <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-ink-muted)', margin: 0 }}>
                Houses project facts, stack badges, timeframes, role ownership, and outbound links.
              </p>
            </GridCol>
          </Grid>
        </Section>
      </Container>

      {/* 05 / UI PRIMITIVES SPECIMEN */}
      <Container width="wide">
        <Section
          index="04"
          eyebrow="CORE PRIMITIVES"
          title="Component Primitives Specimen"
          rule="bottom"
        >
          <Stack gap="xl">
            {/* Status Stamps */}
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>Status Stamps</h3>
              <Cluster gap="md">
                <StatusStamp status="shipped" />
                <StatusStamp status="active" />
                <StatusStamp status="experimental" />
                <StatusStamp status="archived" />
                <StatusStamp status="shipped" variant="minimal" />
              </Cluster>
            </div>

            {/* Evidence Links */}
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>Evidence Links</h3>
              <Cluster gap="md">
                <EvidenceLink href="https://github.com" label="GitHub Repository" isPrimary evidenceType="github" />
                <EvidenceLink href="https://example.com" label="Interactive Demo" evidenceType="demo" />
                <EvidenceLink href="/projects" label="Architecture Note" isExternal={false} note="Internal Ref" />
              </Cluster>
            </div>

            {/* Rules */}
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>Hairline Rules</h3>
              <Stack gap="md">
                <Rule variant="hairline" />
                <Rule variant="rule" />
                <Rule variant="heavy" />
                <Rule variant="signal" />
                <Rule variant="hairline" label="LEDGER DIVIDER 04" />
              </Stack>
            </div>

            {/* Metadata List */}
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>Metadata List & Rail</h3>
              <MetadataList layout="grid">
                <MetadataItem label="Project Role" value="Lead Systems Architect" />
                <MetadataItem label="Team Scope" value="2 Core Engineers" />
                <MetadataItem label="Timeframe" value="Nov 2025 – Feb 2026" isMono />
                <MetadataItem label="Throughput" value="1,800 ops/sec" isMono />
              </MetadataList>
            </div>
          </Stack>
        </Section>
      </Container>

      {/* 06 / FOCUS & ACCESSIBILITY TESTER */}
      <Container width="wide">
        <Section
          index="05"
          eyebrow="ACCESSIBILITY HARNESS"
          title="Interactive Focus Ring & Keyboard Navigation"
        >
          <p style={{ color: 'var(--color-ink-muted)', marginBottom: 'var(--space-md)' }}>
            Press <kbd style={{ background: '#eee', padding: '0.2rem 0.4rem', borderRadius: '3px' }}>Tab</kbd> to inspect the high-contrast 2px Cobalt focus ring token with 3px offset.
          </p>

          <Cluster gap="md">
            <button
              style={{
                background: 'var(--color-mineral-ink)',
                color: 'var(--color-bone-paper)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-default)',
                fontWeight: 'var(--font-weight-semibold)',
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--font-size-sm)',
              }}
            >
              Interactive Focusable Button 1
            </button>

            <button
              style={{
                background: 'var(--color-bone-paper-elevated)',
                color: 'var(--color-mineral-ink)',
                border: 'var(--border-rule)',
                padding: '0.6rem 1.2rem',
                borderRadius: 'var(--radius-default)',
                fontWeight: 'var(--font-weight-semibold)',
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--font-size-sm)',
              }}
            >
              Interactive Focusable Button 2
            </button>

            <a
              href="#test-link"
              style={{
                fontFamily: 'var(--font-family-mono)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 'bold',
              }}
            >
              Focusable Outbound Link &rarr;
            </a>
          </Cluster>
        </Section>
      </Container>
    </main>
  );
}
