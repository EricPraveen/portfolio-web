import React from 'react';

export interface WorkHeaderProps {
  totalCount: number;
  shippedCount: number;
  activeCount: number;
}

export function WorkHeader({
  totalCount,
  shippedCount,
  activeCount,
}: WorkHeaderProps) {
  return (
    <header className="work-hero-header" aria-label="Engineering Work & Architecture Proof">
      {/* Top Breadcrumb & Section Ledger Strip */}
      <div className="work-hero-strip">
        <div className="work-hero-strip-left">
          <span className="work-hero-index font-mono text-mono-label">
            02 / WORK ARCHIVE &bull; CURATED CATALOG
          </span>
          <span className="work-hero-divider" aria-hidden="true">&bull;</span>
          <span className="work-hero-filter-status font-mono text-mono-label">
            SOURCE-BACKED EVIDENCE
          </span>
        </div>

        <div className="work-hero-strip-right">
          <span className="work-status-beacon" aria-hidden="true">
            <span className="work-status-dot" />
          </span>
          <span className="work-status-text font-mono text-mono-label">
            ALL SYSTEMS BENCHMARKED &bull; 0 INVENTED METRICS
          </span>
        </div>
      </div>

      {/* Main Heading & Lead */}
      <div className="work-hero-body">
        <p className="work-hero-title-tag text-mono-label font-mono">
          DISTRIBUTED SYSTEMS &bull; TRANSACTIONAL BACKENDS &bull; ACCESSIBLE PLATFORMS
        </p>

        <h1 className="work-hero-name font-display">
          Engineering Work, Constraints & Verified Proof
        </h1>

        <p className="work-hero-lead text-body">
          A curated archive of production-grade and research-focused software systems. Each case study documents real architectural constraints, failure mode investigations, explicit trade-offs, and measurable outcomes.
        </p>

        {/* Live Metrics Ledger Strip */}
        <div className="work-metrics-strip" aria-label="Catalog Summary Metrics">
          <div className="work-metric-item">
            <span className="work-metric-label font-mono text-mono-label">Total Documented Projects:</span>
            <span className="work-metric-val font-sans"><strong>{totalCount}</strong> Verified Cases</span>
          </div>

          <div className="work-metric-item">
            <span className="work-metric-label font-mono text-mono-label">Production & Benchmarked:</span>
            <span className="work-metric-val font-sans">
              <strong style={{ color: '#16a34a' }}>{shippedCount}</strong> Shipped Architectures
            </span>
          </div>

          <div className="work-metric-item">
            <span className="work-metric-label font-mono text-mono-label">Active Prototypes:</span>
            <span className="work-metric-val font-sans">
              <strong style={{ color: 'var(--color-signal-cobalt)' }}>{activeCount}</strong> Research Project
            </span>
          </div>

          <div className="work-metric-item">
            <span className="work-metric-label font-mono text-mono-label">Verification Rigor:</span>
            <span className="work-metric-val font-sans">
              100% Repository & Spec Backed
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
