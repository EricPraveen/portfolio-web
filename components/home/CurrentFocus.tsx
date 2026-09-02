import React from 'react';

export function CurrentFocus() {
  const focusItems = [
    {
      category: 'BUILDING',
      title: 'Distributed State Machine & Raft Consensus in Go',
      description:
        'Implementing a lightweight leader election and replicated log state machine to investigate split-brain resolution strategies under simulated network partitions.',
      status: 'Active Prototype',
      tech: 'Go • TCP Sockets • Raft Protocol',
    },
    {
      category: 'LEARNING',
      title: 'Linux eBPF & Kernel-Level Network Observability',
      description:
        'Exploring socket tracing with Cilium and bpftrace to profile kernel packet drop rates and TCP connection handshakes without application-level instrumentation overhead.',
      status: 'Investigation',
      tech: 'C • Linux Kernel • eBPF • bpftrace',
    },
    {
      category: 'EXPLORING',
      title: 'Distributed Transaction Isolation & Formal TLA+ Proofs',
      description:
        'Studying formal specification models for linearizability, snapshot isolation anomalies, and deterministic multi-version concurrency control (MVCC).',
      status: 'Literature & Spec',
      tech: 'TLA+ • VLDB & OSDI Papers • Kleppmann DDIA',
    },
  ];

  return (
    <section className="current-focus-section" aria-labelledby="current-focus-heading">
      <div className="current-focus-header">
        <div className="current-focus-header-left">
          <span className="current-focus-beacon" aria-hidden="true">
            <span className="current-focus-dot" />
          </span>
          <div>
            <span className="section-eyebrow text-mono-label font-mono">04 / ENGINEERING ACTIVITY</span>
            <h2 id="current-focus-heading" className="current-focus-title font-heading-lg">
              Current Focus &bull; Now / Building / Learning
            </h2>
          </div>
        </div>

        <div className="current-focus-status text-mono-label font-mono">
          Updated: Q3 2026 &bull; Continuous Ledger
        </div>
      </div>

      <div className="current-focus-grid">
        {focusItems.map((item) => (
          <div key={item.title} className="current-focus-card">
            <div className="current-focus-card-meta">
              <span className="current-focus-tag text-mono-label font-mono">
                {item.category}
              </span>
              <span className="current-focus-state text-mono-label font-mono">
                {item.status}
              </span>
            </div>

            <h3 className="current-focus-card-title font-sans">
              {item.title}
            </h3>

            <p className="current-focus-card-desc text-sm">
              {item.description}
            </p>

            <div className="current-focus-card-tech font-mono text-xs">
              <span style={{ color: 'var(--color-steel)' }}>Focus:</span> {item.tech}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
