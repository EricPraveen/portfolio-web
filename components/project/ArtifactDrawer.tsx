'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ProjectArtifact } from '@/content/types';

export interface ArtifactDrawerProps {
  artifacts: ProjectArtifact[];
}

export function ArtifactDrawer({ artifacts }: ArtifactDrawerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExpandedAll, setIsExpandedAll] = useState(false);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  if (!artifacts || artifacts.length === 0) return null;

  const currentArtifact = artifacts[activeIndex] || artifacts[0];

  const handleCopy = async (code: string | undefined, id: string) => {
    if (!code) return;
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch (err) {
      console.error('Failed to copy artifact code snippet', err);
    }
  };

  const handleKeyDownTab = (e: React.KeyboardEvent, index: number) => {
    let nextIndex = index;
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextIndex = (index + 1) % artifacts.length;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      nextIndex = (index - 1 + artifacts.length) % artifacts.length;
    } else if (e.key === 'Home') {
      e.preventDefault();
      nextIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      nextIndex = artifacts.length - 1;
    }

    if (nextIndex !== index) {
      setActiveIndex(nextIndex);
      tabsRef.current[nextIndex]?.focus();
    }
  };

  const getLineCount = (str?: string) => {
    if (!str) return 0;
    return str.split('\n').length;
  };

  return (
    <div className="cs-artifact-drawer" role="region" aria-labelledby="artifact-drawer-heading">
      {/* Drawer Header Strip */}
      <div className="cs-artifact-drawer-header">
        <div className="cs-artifact-drawer-title-area">
          <span className="cs-artifact-eyebrow text-mono-label font-mono">VERIFIABLE TECHNICAL ARTIFACTS</span>
          <h3 id="artifact-drawer-heading" className="cs-artifact-drawer-title font-sans">
            Source Snippets & Benchmark Telemetry
          </h3>
        </div>

        {/* Action controls: Expand All / Tab Mode */}
        <div className="cs-artifact-header-actions">
          {artifacts.length > 1 && (
            <button
              type="button"
              className={`cs-artifact-expand-btn text-mono-label font-mono ${
                isExpandedAll ? 'cs-artifact-expand-btn-active' : ''
              }`}
              onClick={() => setIsExpandedAll((prev) => !prev)}
              aria-expanded={isExpandedAll}
              aria-controls="cs-artifact-content-container"
            >
              <span className="cs-artifact-expand-icon" aria-hidden="true">
                {isExpandedAll ? '⊟' : '⊞'}
              </span>
              <span>{isExpandedAll ? 'Show Single Tab' : 'Expand All Artifacts'}</span>
            </button>
          )}
        </div>
      </div>

      {/* Tabs (when not in expanded-all mode) */}
      {!isExpandedAll && artifacts.length > 1 && (
        <div
          className="cs-artifact-tabs"
          role="tablist"
          aria-label="Technical artifacts tabs"
        >
          {artifacts.map((art, idx) => (
            <button
              key={art.id}
              ref={(el) => {
                tabsRef.current[idx] = el;
              }}
              role="tab"
              id={`artifact-tab-${idx}`}
              aria-selected={activeIndex === idx}
              aria-controls={`artifact-panel-${idx}`}
              tabIndex={activeIndex === idx ? 0 : -1}
              className={`cs-artifact-tab text-mono-label font-mono ${
                activeIndex === idx ? 'cs-artifact-tab-active' : ''
              }`}
              onClick={() => {
                setActiveIndex(idx);
                setCopiedId(null);
              }}
              onKeyDown={(e) => handleKeyDownTab(e, idx)}
            >
              <span className="cs-artifact-tab-type">{art.type.toUpperCase()}</span>
              <span className="cs-artifact-tab-title">{art.title}</span>
            </button>
          ))}
        </div>
      )}

      {/* Content Container */}
      <div id="cs-artifact-content-container" className="cs-artifact-body">
        {isExpandedAll ? (
          /* Stacked All Artifacts View */
          <div className="cs-artifact-expanded-stack">
            {artifacts.map((art, idx) => (
              <div key={art.id} className="cs-artifact-panel cs-artifact-stacked-item">
                <div className="cs-artifact-toolbar">
                  <div className="cs-artifact-meta">
                    <span className="cs-artifact-idx-tag text-mono-label font-mono">0{idx + 1}</span>
                    <span className="cs-artifact-lang-tag text-mono-label font-mono">
                      {art.language?.toUpperCase() || art.type.toUpperCase()}
                    </span>
                    <span className="cs-artifact-title-display font-sans font-weight-bold">{art.title}</span>
                    {art.codeSnippet && (
                      <span className="cs-artifact-lines-badge text-mono-label font-mono">
                        {getLineCount(art.codeSnippet)} LOC
                      </span>
                    )}
                  </div>

                  <div className="cs-artifact-actions">
                    {art.codeSnippet && (
                      <button
                        type="button"
                        className="cs-artifact-copy-btn text-mono-label font-mono"
                        onClick={() => handleCopy(art.codeSnippet, art.id)}
                        aria-label={copiedId === art.id ? 'Copied code snippet' : `Copy snippet for ${art.title}`}
                      >
                        {copiedId === art.id ? (
                          <>
                            <span aria-hidden="true">&check;</span> Copied!
                          </>
                        ) : (
                          <>
                            <span aria-hidden="true">&#x29c9;</span> Copy Snippet
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                <p className="cs-artifact-description font-body text-sm">{art.description}</p>

                {art.codeSnippet && (
                  <pre className="cs-artifact-pre" tabIndex={0}>
                    <code className={`language-${art.language || 'text'} font-mono`}>
                      {art.codeSnippet}
                    </code>
                  </pre>
                )}

                {art.metrics && art.metrics.length > 0 && (
                  <div className="cs-artifact-metrics-grid">
                    {art.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="cs-artifact-metric-box">
                        <span className="cs-artifact-metric-label text-mono-label font-mono">{m.label}</span>
                        <strong className="cs-artifact-metric-value font-mono">{m.value}</strong>
                        {m.note && <span className="cs-artifact-metric-note font-sans">{m.note}</span>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          /* Single Tab View */
          <div
            id={`artifact-panel-${activeIndex}`}
            role="tabpanel"
            aria-labelledby={`artifact-tab-${activeIndex}`}
            className="cs-artifact-panel"
          >
            {/* Panel Toolbar */}
            <div className="cs-artifact-toolbar">
              <div className="cs-artifact-meta">
                <span className="cs-artifact-lang-tag text-mono-label font-mono">
                  {currentArtifact.language?.toUpperCase() || currentArtifact.type.toUpperCase()}
                </span>
                <span className="cs-artifact-title-display font-sans font-weight-bold">{currentArtifact.title}</span>
                {currentArtifact.codeSnippet && (
                  <span className="cs-artifact-lines-badge text-mono-label font-mono">
                    {getLineCount(currentArtifact.codeSnippet)} LOC
                  </span>
                )}
              </div>

              <div className="cs-artifact-actions">
                {currentArtifact.codeSnippet && (
                  <button
                    type="button"
                    className="cs-artifact-copy-btn text-mono-label font-mono"
                    onClick={() => handleCopy(currentArtifact.codeSnippet, currentArtifact.id)}
                    aria-label={
                      copiedId === currentArtifact.id
                        ? 'Copied to clipboard'
                        : `Copy ${currentArtifact.title} snippet to clipboard`
                    }
                  >
                    {copiedId === currentArtifact.id ? (
                      <>
                        <span aria-hidden="true">&check;</span> Copied!
                      </>
                    ) : (
                      <>
                        <span aria-hidden="true">&#x29c9;</span> Copy Snippet
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="cs-artifact-description font-body text-sm">{currentArtifact.description}</p>

            {/* Code Snippet Box */}
            {currentArtifact.codeSnippet && (
              <pre className="cs-artifact-pre" tabIndex={0}>
                <code className={`language-${currentArtifact.language || 'text'} font-mono`}>
                  {currentArtifact.codeSnippet}
                </code>
              </pre>
            )}

            {/* Metrics Grid if available */}
            {currentArtifact.metrics && currentArtifact.metrics.length > 0 && (
              <div className="cs-artifact-metrics-grid">
                {currentArtifact.metrics.map((m, mIdx) => (
                  <div key={mIdx} className="cs-artifact-metric-box">
                    <span className="cs-artifact-metric-label text-mono-label font-mono">{m.label}</span>
                    <strong className="cs-artifact-metric-value font-mono">{m.value}</strong>
                    {m.note && <span className="cs-artifact-metric-note font-sans">{m.note}</span>}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
