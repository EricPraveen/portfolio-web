'use client';

import React, { useState } from 'react';
import { CapabilityCategory } from '@/content/types';
import { stackTrays, StackTray } from '@/content/stack-trays.data';

export interface CapabilityMapProps {
  categories?: CapabilityCategory[];
  initialTrayId?: string;
}

export function CapabilityMap({ initialTrayId = 'languages' }: CapabilityMapProps) {
  const [activeTrayId, setActiveTrayId] = useState<string>(initialTrayId);

  const activeTray: StackTray =
    stackTrays.find((t) => t.id === activeTrayId) || stackTrays[0];

  return (
    <section
      id="skills"
      className="stack-tray-section"
      aria-labelledby="capability-map-heading"
    >
      <span id="stack" className="section-anchor" aria-hidden="true" />

      {/* ── SECTION HEADER STRIP ──────────────────────────────────── */}
      <div className="section-header-strip">
        <div>
          <span className="section-eyebrow text-mono-label font-mono">
            04 / TECHNICAL SKILLS & STACK
          </span>
          <h2 id="capability-map-heading" className="section-title font-heading-2xl">
            Technical Stack Trays
          </h2>
        </div>
        <p className="section-lead text-body">
          Technologies, frameworks, and engineering tools verified on real-world builds.
        </p>
      </div>

      {/* ── MAIN TRAY SELECTOR INTERFACE ──────────────────────────── */}
      <div className="stack-tray-layout">
        {/* Left Column: Select a Tray Menu */}
        <aside className="stack-tray-sidebar" aria-label="Select Technology Tray">
          <div className="stack-tray-sidebar-head">
            <span className="sidebar-eyebrow font-mono text-mono-label">
              SELECT A TRAY
            </span>
            <span className="sidebar-badge font-mono text-mono-label">
              08 TRAYS
            </span>
          </div>

          <div
            className="stack-tray-tablist"
            role="tablist"
            aria-label="Technology Skill Trays"
          >
            {stackTrays.map((tray) => {
              const isActive = tray.id === activeTray.id;
              return (
                <button
                  key={tray.id}
                  id={`tab-${tray.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${tray.id}`}
                  tabIndex={isActive ? 0 : -1}
                  className={`stack-tray-tab-btn ${isActive ? 'is-active' : ''}`}
                  onClick={() => setActiveTrayId(tray.id)}
                >
                  <div className="tab-btn-left">
                    <span className="tab-btn-code font-mono">{tray.code}</span>
                    <span className="tab-btn-title font-sans">{tray.title}</span>
                  </div>
                  <div className="tab-btn-right font-mono">
                    <span className="tab-btn-count">0{tray.count}</span>
                    {isActive && (
                      <span className="tab-btn-beacon" aria-hidden="true" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </aside>

        {/* Right Column: Active Tray Display Card */}
        <div
          id={`panel-${activeTray.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTray.id}`}
          className="stack-tray-display arcade-box"
        >
          {/* Hardware Corner Screws */}
          <span className="corner-screw corner-screw--tl" aria-hidden="true" />
          <span className="corner-screw corner-screw--tr" aria-hidden="true" />
          <span className="corner-screw corner-screw--bl" aria-hidden="true" />
          <span className="corner-screw corner-screw--br" aria-hidden="true" />

          {/* Hardware Aesthetic Framing Brackets */}
          <span className="tray-bracket tray-bracket--tl" aria-hidden="true">⌜</span>
          <span className="tray-bracket tray-bracket--tr" aria-hidden="true">⌝</span>
          <span className="tray-bracket tray-bracket--bl" aria-hidden="true">⌞</span>
          <span className="tray-bracket tray-bracket--br" aria-hidden="true">⌟</span>

          {/* Tray Title Header */}
          <div className="tray-display-header">
            <div className="tray-display-title-row">
              <span className="tray-badge-pill font-mono">
                TRAY {activeTray.trayNumber}
              </span>
              <h3 className="tray-display-title font-sans">
                {activeTray.title}
              </h3>
            </div>
            <p className="tray-display-desc font-sans">
              {activeTray.description}
            </p>
          </div>

          {/* Grid of Skill Cards */}
          <div className="tray-cards-grid">
            {activeTray.items.map((item) => (
              <div key={item.name} className="tray-skill-card">
                <div className="tray-skill-card-head">
                  <h4 className="tray-skill-name font-sans">{item.name}</h4>
                  <span className="tray-skill-index-code font-mono text-mono-label">
                    {activeTray.code}
                  </span>
                </div>
                <div className="tray-skill-context-box">
                  <span className="tray-skill-context-label font-mono">CONTEXT / REGISTER</span>
                  <p className="tray-skill-context font-mono">
                    {item.context}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Tray Display Footer Strip */}
          <div className="tray-display-footer">
            <span className="tray-footer-meta font-mono text-mono-label">
              VERIFIED WORKSPACE // MORATUWA SWE LEDGER
            </span>
            <span className="tray-footer-signal font-mono text-mono-label">
              STATUS: PRODUCTION READY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
