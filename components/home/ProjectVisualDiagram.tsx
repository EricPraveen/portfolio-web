'use client';

import React from 'react';

export interface ProjectVisualDiagramProps {
  slug: string;
  selectedHotspot?: number | null;
  onSelectHotspot?: (index: number) => void;
}

export function ProjectVisualDiagram({
  slug,
  selectedHotspot = null,
  onSelectHotspot,
}: ProjectVisualDiagramProps) {
  const isInteractive = Boolean(onSelectHotspot);

  if (slug === 'distributed-task-orchestrator') {
    return (
      <div className="project-diagram-wrapper" aria-label="Distributed Task Orchestrator System Architecture Diagram">
        <div className="project-diagram-header">
          <span className="text-mono-label font-mono">System Topology &bull; Redis Lua State Machine</span>
          <div className="project-diagram-badges">
            <span className="project-diagram-badge text-mono-label font-mono">Active Failover</span>
            {isInteractive && (
              <span className="project-diagram-interactive-hint text-mono-label font-mono">
                [ Click Hotspots to Inspect ]
              </span>
            )}
          </div>
        </div>
        <svg
          viewBox="0 0 540 260"
          className="project-diagram-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="diag-grid-1" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-steel-light)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="540" height="260" fill="var(--color-bone-paper-elevated)" />
          <rect width="540" height="260" fill="url(#diag-grid-1)" />

          {/* 1. Client & API Gateway Hotspot 0 */}
          <g
            transform="translate(20, 40)"
            className={`diag-interactive-node ${selectedHotspot === 0 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(0)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 01: Client and Ingestion API Gateway"
            aria-pressed={selectedHotspot === 0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(0);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="120"
              height="60"
              rx="3"
              fill="var(--color-bone-paper)"
              stroke={selectedHotspot === 0 ? 'var(--color-signal-cobalt)' : 'var(--color-mineral-ink)'}
              strokeWidth={selectedHotspot === 0 ? '2.5' : '1.5'}
            />
            {/* Hotspot Pin */}
            <circle cx="12" cy="12" r="8" fill={selectedHotspot === 0 ? 'var(--color-signal-cobalt)' : 'var(--color-mineral-ink)'} />
            <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">1</text>
            <text x="68" y="26" textAnchor="middle" fill="var(--color-mineral-ink)" fontFamily="var(--font-family-mono)" fontSize="10" fontWeight="600">CLIENT / API</text>
            <text x="68" y="44" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8.5">POST /v1/tasks</text>
          </g>

          {/* Arrow: API -> Redis */}
          <path d="M 140 70 L 200 70" stroke="var(--color-signal-cobalt)" strokeWidth="2" strokeDasharray="4 2" />
          <polygon points="200,66 208,70 200,74" fill="var(--color-signal-cobalt)" />
          <text x="174" y="60" textAnchor="middle" fill="var(--color-signal-cobalt)" fontFamily="var(--font-family-mono)" fontSize="8">ZADD</text>

          {/* 2. Redis Priority Queue & Lua Lease Engine Hotspot 1 */}
          <g
            transform="translate(210, 25)"
            className={`diag-interactive-node ${selectedHotspot === 1 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(1)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 02: Redis Atomic Lua Lease Engine"
            aria-pressed={selectedHotspot === 1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(1);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="140"
              height="90"
              rx="3"
              fill="var(--color-mineral-ink)"
              stroke={selectedHotspot === 1 ? 'var(--color-lab-chartreuse)' : 'var(--color-signal-cobalt)'}
              strokeWidth={selectedHotspot === 1 ? '2.5' : '1.5'}
            />
            {/* Hotspot Pin */}
            <circle cx="14" cy="14" r="8" fill="var(--color-lab-chartreuse)" />
            <text x="14" y="17" textAnchor="middle" fill="#000000" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">2</text>
            <text x="75" y="24" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="10" fontWeight="bold">REDIS ENGINE</text>
            <text x="75" y="42" textAnchor="middle" fill="var(--color-lab-chartreuse)" fontFamily="var(--font-family-mono)" fontSize="8.5">Atomic Lua Leases</text>
            <line x1="15" y1="52" x2="125" y2="52" stroke="#3A4048" strokeWidth="1" />
            <text x="70" y="68" textAnchor="middle" fill="#A0AAB4" fontFamily="var(--font-family-mono)" fontSize="8">Priority Queue (ZSET)</text>
            <text x="70" y="80" textAnchor="middle" fill="#A0AAB4" fontFamily="var(--font-family-mono)" fontSize="8">TTL: 3000ms Heartbeat</text>
          </g>

          {/* Arrow: Redis -> Workers */}
          <path d="M 350 50 L 390 50" stroke="var(--color-mineral-ink)" strokeWidth="1.5" />
          <polygon points="390,47 398,50 390,53" fill="var(--color-mineral-ink)" />

          <path d="M 350 90 L 390 90" stroke="var(--color-mineral-ink)" strokeWidth="1.5" />
          <polygon points="390,87 398,90 390,93" fill="var(--color-mineral-ink)" />

          {/* 3. Distributed Workers Hotspot 2 */}
          <g
            transform="translate(400, 20)"
            className={`diag-interactive-node ${selectedHotspot === 2 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(2)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 03: Worker Daemon Pool"
            aria-pressed={selectedHotspot === 2}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(2);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="125"
              height="100"
              rx="3"
              fill="var(--color-bone-paper)"
              stroke={selectedHotspot === 2 ? 'var(--color-signal-cobalt)' : 'var(--color-steel)'}
              strokeWidth={selectedHotspot === 2 ? '2.5' : '1.2'}
            />
            {/* Hotspot Pin */}
            <circle cx="14" cy="14" r="8" fill={selectedHotspot === 2 ? 'var(--color-signal-cobalt)' : 'var(--color-mineral-ink)'} />
            <text x="14" y="17" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">3</text>
            <text x="70" y="24" textAnchor="middle" fill="var(--color-mineral-ink)" fontFamily="var(--font-family-mono)" fontSize="9.5" fontWeight="bold">WORKER POOL</text>
            <line x1="10" y1="34" x2="115" y2="34" stroke="var(--color-steel-light)" strokeWidth="1" />
            <circle cx="24" cy="50" r="3" fill="#22c55e" />
            <text x="66" y="53" textAnchor="middle" fill="var(--color-mineral-ink)" fontFamily="var(--font-family-mono)" fontSize="8.5">Worker-01 (Active)</text>
            <circle cx="24" cy="74" r="3" fill="#22c55e" />
            <text x="66" y="77" textAnchor="middle" fill="var(--color-mineral-ink)" fontFamily="var(--font-family-mono)" fontSize="8.5">Worker-02 (Active)</text>
          </g>

          {/* Arrow: Workers -> PostgreSQL State Ledger */}
          <path d="M 460 120 L 460 160 L 280 160 L 280 175" stroke="var(--color-steel-dark)" strokeWidth="1.5" strokeDasharray="3 3" />
          <polygon points="276,175 280,183 284,175" fill="var(--color-steel-dark)" />
          <text x="370" y="152" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8">Async State Audit Trail</text>

          {/* 4. PostgreSQL Persistence Ledger Hotspot 3 */}
          <g
            transform="translate(190, 185)"
            className={`diag-interactive-node ${selectedHotspot === 3 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(3)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 04: PostgreSQL Persistence and Audit Ledger"
            aria-pressed={selectedHotspot === 3}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(3);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="180"
              height="55"
              rx="3"
              fill="var(--color-bone-paper)"
              stroke={selectedHotspot === 3 ? 'var(--color-signal-cobalt)' : 'var(--color-mineral-ink)'}
              strokeWidth={selectedHotspot === 3 ? '2.5' : '1.5'}
            />
            {/* Hotspot Pin */}
            <circle cx="14" cy="14" r="8" fill={selectedHotspot === 3 ? 'var(--color-signal-cobalt)' : 'var(--color-mineral-ink)'} />
            <text x="14" y="17" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">4</text>
            <text x="96" y="24" textAnchor="middle" fill="var(--color-mineral-ink)" fontFamily="var(--font-family-mono)" fontSize="9" fontWeight="600">POSTGRESQL AUDIT LEDGER</text>
            <text x="96" y="42" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8">Deterministic State Transitions</text>
          </g>

          {/* Chaos Injection annotation */}
          <g transform="translate(20, 190)">
            <rect width="130" height="48" rx="2" fill="var(--color-oxide-subtle)" stroke="var(--color-oxide)" strokeWidth="1" />
            <text x="65" y="20" textAnchor="middle" fill="var(--color-oxide-dark)" fontFamily="var(--font-family-mono)" fontSize="9" fontWeight="bold">CHAOS VERIFIED</text>
            <text x="65" y="36" textAnchor="middle" fill="var(--color-oxide-dark)" fontFamily="var(--font-family-mono)" fontSize="8">0 Task Loss in 50k Kills</text>
          </g>
        </svg>
      </div>
    );
  }

  if (slug === 'travel-hub-platform') {
    return (
      <div className="project-diagram-wrapper" aria-label="TravelHub Concurrency & Inventory Architecture Diagram">
        <div className="project-diagram-header">
          <span className="text-mono-label font-mono">Concurrency Control &bull; Optimistic Inventory Locking</span>
          <div className="project-diagram-badges">
            <span className="project-diagram-badge text-mono-label font-mono">Zero Double-Bookings</span>
            {isInteractive && (
              <span className="project-diagram-interactive-hint text-mono-label font-mono">
                [ Click Hotspots to Inspect ]
              </span>
            )}
          </div>
        </div>
        <svg
          viewBox="0 0 540 260"
          className="project-diagram-svg"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="diag-grid-2" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="var(--color-steel-light)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="540" height="260" fill="var(--color-bone-paper-elevated)" />
          <rect width="540" height="260" fill="url(#diag-grid-2)" />

          {/* Concurrent User 1 Hotspot 0 */}
          <g
            transform="translate(20, 25)"
            className={`diag-interactive-node ${selectedHotspot === 0 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(0)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 01: Client Ingestion and Booking Request Gate"
            aria-pressed={selectedHotspot === 0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(0);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="120"
              height="55"
              rx="3"
              fill="var(--color-bone-paper)"
              stroke={selectedHotspot === 0 ? 'var(--color-signal-cobalt)' : 'var(--color-signal-cobalt)'}
              strokeWidth={selectedHotspot === 0 ? '2.5' : '1.5'}
            />
            <circle cx="12" cy="12" r="8" fill="var(--color-signal-cobalt)" />
            <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">1</text>
            <text x="65" y="24" textAnchor="middle" fill="var(--color-signal-cobalt)" fontFamily="var(--font-family-mono)" fontSize="9.5" fontWeight="bold">USER A (t=0ms)</text>
            <text x="65" y="40" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8">Reserve Seat #42</text>
          </g>

          <g transform="translate(20, 95)">
            <rect width="120" height="55" rx="3" fill="var(--color-bone-paper)" stroke="var(--color-oxide)" strokeWidth="1.5" />
            <text x="60" y="24" textAnchor="middle" fill="var(--color-oxide)" fontFamily="var(--font-family-mono)" fontSize="9.5" fontWeight="bold">USER B (t=3ms)</text>
            <text x="60" y="40" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8">Reserve Seat #42</text>
          </g>

          {/* Arrows into Concurrency Gate */}
          <path d="M 140 52 L 185 75" stroke="var(--color-signal-cobalt)" strokeWidth="1.5" />
          <polygon points="185,71 193,75 185,79" fill="var(--color-signal-cobalt)" />

          <path d="M 140 122 L 185 95" stroke="var(--color-oxide)" strokeWidth="1.5" />
          <polygon points="185,91 193,95 185,99" fill="var(--color-oxide)" />

          {/* Version Validation Engine Hotspot 1 */}
          <g
            transform="translate(195, 45)"
            className={`diag-interactive-node ${selectedHotspot === 1 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(1)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 02: Transaction Concurrency Engine"
            aria-pressed={selectedHotspot === 1}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(1);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="170"
              height="90"
              rx="3"
              fill="var(--color-mineral-ink)"
              stroke={selectedHotspot === 1 ? 'var(--color-lab-chartreuse)' : 'var(--color-mineral-ink)'}
              strokeWidth={selectedHotspot === 1 ? '2.5' : '1.5'}
            />
            <circle cx="14" cy="14" r="8" fill="var(--color-lab-chartreuse)" />
            <text x="14" y="17" textAnchor="middle" fill="#000000" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">2</text>
            <text x="90" y="24" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="10" fontWeight="bold">TRANSACTION ENGINE</text>
            <text x="90" y="42" textAnchor="middle" fill="var(--color-lab-chartreuse)" fontFamily="var(--font-family-mono)" fontSize="8.5">WHERE id=42 AND ver=1</text>
            <line x1="15" y1="52" x2="155" y2="52" stroke="#3A4048" strokeWidth="1" />
            <text x="85" y="68" textAnchor="middle" fill="#A0AAB4" fontFamily="var(--font-family-mono)" fontSize="8">User A: ver 1 &rarr; 2 (200 OK)</text>
            <text x="85" y="80" textAnchor="middle" fill="#F87171" fontFamily="var(--font-family-mono)" fontSize="8">User B: 0 Rows (409 Conflict)</text>
          </g>

          {/* Outcome 1: Held & TTL Hotspot 2 */}
          <path d="M 365 65 L 400 65" stroke="var(--color-signal-cobalt)" strokeWidth="1.5" />
          <polygon points="400,62 408,65 400,68" fill="var(--color-signal-cobalt)" />

          <g
            transform="translate(410, 40)"
            className={`diag-interactive-node ${selectedHotspot === 2 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(2)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 03: Inventory Hold TTL Cache"
            aria-pressed={selectedHotspot === 2}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(2);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="115"
              height="50"
              rx="3"
              fill="var(--color-bone-paper)"
              stroke={selectedHotspot === 2 ? 'var(--color-signal-cobalt)' : 'var(--color-signal-cobalt)'}
              strokeWidth={selectedHotspot === 2 ? '2.5' : '1.2'}
            />
            <circle cx="12" cy="12" r="8" fill="var(--color-signal-cobalt)" />
            <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">3</text>
            <text x="62" y="22" textAnchor="middle" fill="var(--color-signal-cobalt)" fontFamily="var(--font-family-mono)" fontSize="9" fontWeight="bold">HELD (10 MIN)</text>
            <text x="62" y="38" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8">Auto-Release Cron</text>
          </g>

          {/* Outcome 2: Clean Conflict Rejection Hotspot 3 */}
          <path d="M 365 110 L 400 110" stroke="var(--color-oxide)" strokeWidth="1.5" />
          <polygon points="400,107 408,110 400,113" fill="var(--color-oxide)" />

          <g
            transform="translate(410, 95)"
            className={`diag-interactive-node ${selectedHotspot === 3 ? 'diag-node-active' : ''}`}
            onClick={() => onSelectHotspot?.(3)}
            role={isInteractive ? 'button' : undefined}
            tabIndex={isInteractive ? 0 : undefined}
            aria-label="Hotspot 04: Conflict Resolution and Fallback Engine"
            aria-pressed={selectedHotspot === 3}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onSelectHotspot?.(3);
              }
            }}
            style={{ cursor: isInteractive ? 'pointer' : 'default' }}
          >
            <rect
              width="115"
              height="50"
              rx="3"
              fill="var(--color-bone-paper)"
              stroke={selectedHotspot === 3 ? 'var(--color-oxide)' : 'var(--color-oxide)'}
              strokeWidth={selectedHotspot === 3 ? '2.5' : '1.2'}
            />
            <circle cx="12" cy="12" r="8" fill="var(--color-oxide)" />
            <text x="12" y="15" textAnchor="middle" fill="#FFFFFF" fontFamily="var(--font-family-mono)" fontSize="8" fontWeight="bold">4</text>
            <text x="62" y="22" textAnchor="middle" fill="var(--color-oxide)" fontFamily="var(--font-family-mono)" fontSize="9" fontWeight="bold">SEAT TAKEN</text>
            <text x="62" y="38" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8">Friendly Re-prompt</text>
          </g>

          {/* Bottom Summary Bar */}
          <g transform="translate(20, 185)">
            <rect width="500" height="55" rx="3" fill="var(--color-bone-paper)" stroke="var(--color-steel-light)" strokeWidth="1" />
            <text x="250" y="24" textAnchor="middle" fill="var(--color-mineral-ink)" fontFamily="var(--font-family-mono)" fontSize="9.5" fontWeight="bold">
              PostgreSQL Strict Ascending Lock Order &bull; Zero Deadlocks in 500 Concurrent Checkouts
            </text>
            <text x="250" y="42" textAnchor="middle" fill="var(--color-ink-muted)" fontFamily="var(--font-family-mono)" fontSize="8.5">
              Accessible SVG seat selection map with full ARIA live region announcements (WCAG 2.2 AA)
            </text>
          </g>
        </svg>
      </div>
    );
  }

  // Fallback / Signal Ledger Specimen
  return (
    <div className="project-diagram-wrapper" aria-label="Signal Ledger Architecture System">
      <div className="project-diagram-header">
        <span className="text-mono-label font-mono">Design Constitution &bull; Evidence-First Ledger</span>
        <span className="project-diagram-badge text-mono-label font-mono">WCAG 2.2 AA</span>
      </div>
      <div style={{ padding: '1.25rem', background: 'var(--color-bone-paper-elevated)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', fontFamily: 'var(--font-family-mono)', fontSize: '0.75rem' }}>
          <div style={{ padding: '0.75rem', background: 'var(--color-bone-paper)', border: '1px solid var(--color-steel-light)', borderRadius: '2px' }}>
            <span style={{ color: 'var(--color-steel)', display: 'block', fontSize: '0.65rem' }}>SURFACE</span>
            <strong>#F2EFE8</strong>
            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--color-ink-muted)' }}>Bone Paper Base</span>
          </div>
          <div style={{ padding: '0.75rem', background: 'var(--color-mineral-ink)', color: '#fff', borderRadius: '2px' }}>
            <span style={{ color: '#888', display: 'block', fontSize: '0.65rem' }}>TEXT / PLATES</span>
            <strong>#171A1D</strong>
            <span style={{ display: 'block', fontSize: '0.65rem', color: '#ccc' }}>14.8:1 AAA Ratio</span>
          </div>
          <div style={{ padding: '0.75rem', background: 'var(--color-bone-paper)', border: '1px solid var(--color-signal-cobalt)', borderRadius: '2px' }}>
            <span style={{ color: 'var(--color-signal-cobalt)', display: 'block', fontSize: '0.65rem' }}>SIGNAL ACTION</span>
            <strong style={{ color: 'var(--color-signal-cobalt)' }}>#2F5BFF</strong>
            <span style={{ display: 'block', fontSize: '0.65rem', color: 'var(--color-ink-muted)' }}>Cobalt Interaction</span>
          </div>
        </div>
      </div>
    </div>
  );
}
