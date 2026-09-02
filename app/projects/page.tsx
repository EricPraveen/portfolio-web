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
} from '@/components/projects';

// Validate content integrity at build time
assertContentValid();

export const metadata: Metadata = {
  title: 'Projects — Eric Praveen',
  description:
    'Projects built by Eric Praveen — full-stack web apps, REST APIs, and more.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Projects — Eric Praveen',
    description:
      'A collection of full-stack projects and case studies.',
    url: 'https://signal-ledger.dev/projects',
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
