'use client';

import React, { useState, useRef } from 'react';
import { ProjectArchitecture } from '@/content/types';
import { ProjectVisualDiagram } from '@/components/home/ProjectVisualDiagram';

export interface ArchitectureFigureProps {
  slug: string;
  architecture: ProjectArchitecture;
}

export function ArchitectureFigure({ slug, architecture }: ArchitectureFigureProps) {
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleSelectHotspot = (index: number) => {
    setSelectedHotspot(index);
    const targetCard = cardRefs.current[index];
    if (targetCard) {
      const prefersReducedMotion =
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      targetCard.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'nearest',
      });
    }
  };

  return (
    <div className="cs-arch-figure-container">
      <figure className="cs-arch-figure" aria-labelledby="arch-figure-caption">
        {/* Visual Architecture Diagram Area with Interactive Hotspots */}
        <div className="cs-arch-diagram-canvas">
          <ProjectVisualDiagram
            slug={slug}
            selectedHotspot={selectedHotspot}
            onSelectHotspot={handleSelectHotspot}
          />
        </div>

        {/* Captions associated via figcaption */}
        <figcaption id="arch-figure-caption" className="cs-arch-figcaption">
          <div className="cs-arch-caption-header">
            <span className="cs-arch-figure-index text-mono-label font-mono">SYSTEM TOPOLOGY & DATA FLOW</span>
            {selectedHotspot !== null && architecture.keyComponents?.[selectedHotspot] && (
              <span className="cs-arch-active-indicator text-mono-label font-mono">
                ACTIVE FOCUS: 0{selectedHotspot + 1} &bull; {architecture.keyComponents[selectedHotspot].name}
              </span>
            )}
          </div>
          <p className="cs-arch-caption-summary font-sans">{architecture.summary}</p>
        </figcaption>
      </figure>

      {/* Accessible Text Alternative Disclosure */}
      {architecture.textAlternative && (
        <details className="cs-arch-text-alt-disclosure">
          <summary className="cs-arch-text-alt-summary text-mono-label font-mono">
            <span className="cs-arch-alt-icon" aria-hidden="true">&bull;</span>
            <span>View Full Accessible Text Specification of Topology</span>
          </summary>
          <div className="cs-arch-text-alt-body">
            <p>{architecture.textAlternative}</p>
          </div>
        </details>
      )}

      {/* Key Architectural Components Breakdown linked with Hotspots */}
      {architecture.keyComponents && architecture.keyComponents.length > 0 && (
        <div className="cs-arch-components-grid" role="region" aria-label="Key System Components Breakdown">
          <div className="cs-arch-components-head">
            <h4 className="cs-arch-components-title text-mono-label font-mono">KEY SUBSYSTEM BREAKDOWN</h4>
            <span className="cs-arch-components-hint text-mono-label font-mono">
              [ Tap card or hotspot pin above to inspect ]
            </span>
          </div>

          <div className="cs-arch-components-cards">
            {architecture.keyComponents.map((comp, idx) => {
              const isSelected = selectedHotspot === idx;

              return (
                <div
                  key={idx}
                  ref={(el) => {
                    cardRefs.current[idx] = el;
                  }}
                  className={`cs-arch-comp-card ${isSelected ? 'cs-arch-comp-card-active' : ''}`}
                  onClick={() => setSelectedHotspot(idx)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={isSelected}
                  aria-label={`Subsystem 0${idx + 1}: ${comp.name}. Role: ${comp.role}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedHotspot(idx);
                    }
                  }}
                >
                  <div className="cs-arch-comp-header">
                    <div className="cs-arch-comp-badges">
                      <span className="cs-arch-comp-num text-mono-label font-mono">0{idx + 1}</span>
                      {isSelected && (
                        <span className="cs-arch-comp-active-tag text-mono-label font-mono">
                          SELECTED PIN
                        </span>
                      )}
                    </div>
                    <strong className="cs-arch-comp-name font-sans">{comp.name}</strong>
                    <span className="cs-arch-comp-role text-mono-label font-mono">{comp.role}</span>
                  </div>
                  <p className="cs-arch-comp-desc font-body text-sm">{comp.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
