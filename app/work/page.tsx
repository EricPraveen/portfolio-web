import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import {
  getAllProjects,
  getAllProjectCategories,
  assertContentValid,
} from '@/lib/content';
import {
  WorkHeader,
  WorkCatalogClient,
  CategoryFilterOption,
} from '@/components/work';

// Validate content integrity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Production Systems & Case Studies — Signal Ledger',
  description:
    'Curated archive of production engineering systems, distributed schedulers, high-concurrency transactional architectures, and low-latency network telemetry analyzers.',
  alternates: {
    canonical: '/work',
  },
  openGraph: {
    title: 'Production Systems & Case Studies — Signal Ledger',
    description:
      'Curated archive of production engineering systems, distributed schedulers, and high-concurrency architectures.',
    url: 'https://signal-ledger.dev/work',
  },
};

export default function WorkPage() {
  const projects = getAllProjects();
  const rawCategories = getAllProjectCategories();

  const shippedCount = projects.filter((p) => p.status === 'shipped').length;
  const activeCount = projects.filter((p) => p.status === 'active').length;

  const categoryOptions: CategoryFilterOption[] = [
    { id: 'all', label: 'All Domains', count: projects.length },
    ...rawCategories.map((cat) => ({
      id: cat.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      label: cat,
      count: projects.filter((p) => p.category === cat).length,
    })),
  ];

  return (
    <div className="work-page-container">
      {/* 01 / WORK HEADER & METRICS */}
      <WorkHeader
        totalCount={projects.length}
        shippedCount={shippedCount}
        activeCount={activeCount}
      />

      {/* 02 / INTERACTIVE CATALOG CLIENT (FILTERS, PLATES & LEDGER TABLE) */}
      <Suspense fallback={<div className="font-mono text-mono-label" style={{ padding: '2rem', textAlign: 'center' }}>Loading project ledger...</div>}>
        <WorkCatalogClient
          projects={projects}
          categoryOptions={categoryOptions}
        />
      </Suspense>
    </div>
  );
}
