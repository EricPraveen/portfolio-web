import React from 'react';
import { HardProblemStory } from '@/content/types';

export interface HardProblemSectionProps {
  story: HardProblemStory;
}

export function HardProblemSection({ story }: HardProblemSectionProps) {
  if (!story) return null;

  return (
    <div className="cs-debugging-postmortem" role="region" aria-labelledby="debugging-story-heading">
      {/* Header bar */}
      <div className="cs-postmortem-header">
        <div className="cs-postmortem-tag text-mono-label">
          <span className="cs-postmortem-beacon" aria-hidden="true" />
          <span>DEBUGGING POSTMORTEM & HARD PROBLEM</span>
        </div>
        <h3 id="debugging-story-heading" className="cs-postmortem-title">
          Root Cause Analysis & Concurrency Resolution
        </h3>
      </div>

      <div className="cs-postmortem-grid">
        {/* Step 1: The Failure Mode */}
        <div className="cs-postmortem-block cs-postmortem-problem">
          <div className="cs-postmortem-block-label text-mono-label">
            <span className="cs-postmortem-step-badge">01</span>
            <span>OBSERVED FAILURE MODE / BUG</span>
          </div>
          <p className="cs-postmortem-block-text">{story.problem}</p>
        </div>

        {/* Step 2: Investigation & Root Cause */}
        <div className="cs-postmortem-block cs-postmortem-investigation">
          <div className="cs-postmortem-block-label text-mono-label">
            <span className="cs-postmortem-step-badge">02</span>
            <span>INVESTIGATION & ROOT CAUSE</span>
          </div>
          <p className="cs-postmortem-block-text">{story.investigation}</p>
        </div>

        {/* Step 3: Architectural Solution */}
        <div className="cs-postmortem-block cs-postmortem-solution">
          <div className="cs-postmortem-block-label text-mono-label">
            <span className="cs-postmortem-step-badge">03</span>
            <span>ARCHITECTURAL REMEDIATION</span>
          </div>
          <p className="cs-postmortem-block-text">{story.solution}</p>
        </div>

        {/* Step 4: Key Takeaway */}
        <div className="cs-postmortem-block cs-postmortem-takeaway">
          <div className="cs-postmortem-block-label text-mono-label">
            <span className="cs-postmortem-step-badge">04</span>
            <span>PRIMARY SYSTEM TAKEAWAY</span>
          </div>
          <p className="cs-postmortem-takeaway-text">{story.takeaway}</p>
        </div>
      </div>
    </div>
  );
}
