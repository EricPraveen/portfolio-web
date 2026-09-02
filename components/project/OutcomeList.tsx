import React from 'react';

export interface OutcomeListProps {
  outcomes: string[];
  lessonsLearned: string[];
  v2Improvements: string[];
}

export function OutcomeList({ outcomes, lessonsLearned, v2Improvements }: OutcomeListProps) {
  return (
    <div className="cs-outcomes-wrapper" role="region" aria-label="Outcomes, Lessons Learned, and Roadmap">
      <div className="cs-outcomes-grid">
        {/* Column 1: Verified Outcomes & Metrics */}
        {outcomes && outcomes.length > 0 && (
          <div className="cs-outcome-card cs-outcome-card-verified">
            <div className="cs-outcome-card-header">
              <span className="cs-outcome-stamp text-mono-label">VERIFIED METRICS</span>
              <h3 className="cs-outcome-title">Measured Outcomes & Impact</h3>
            </div>
            <ul className="cs-outcome-list">
              {outcomes.map((item, idx) => (
                <li key={idx} className="cs-outcome-item">
                  <span className="cs-outcome-icon-verified" aria-hidden="true">&check;</span>
                  <span className="cs-outcome-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Column 2: Lessons Learned */}
        {lessonsLearned && lessonsLearned.length > 0 && (
          <div className="cs-outcome-card cs-outcome-card-lessons">
            <div className="cs-outcome-card-header">
              <span className="cs-outcome-stamp text-mono-label">ENGINEERING RETROSPECTIVE</span>
              <h3 className="cs-outcome-title">Key Lessons Learned</h3>
            </div>
            <ul className="cs-outcome-list">
              {lessonsLearned.map((item, idx) => (
                <li key={idx} className="cs-outcome-item">
                  <span className="cs-outcome-icon-lesson text-mono-label" aria-hidden="true">&bull;</span>
                  <span className="cs-outcome-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Column 3: What I Would Change in V2 */}
        {v2Improvements && v2Improvements.length > 0 && (
          <div className="cs-outcome-card cs-outcome-card-v2">
            <div className="cs-outcome-card-header">
              <span className="cs-outcome-stamp text-mono-label">FUTURE ROADMAP</span>
              <h3 className="cs-outcome-title">What I Would Change in v2</h3>
            </div>
            <ul className="cs-outcome-list">
              {v2Improvements.map((item, idx) => (
                <li key={idx} className="cs-outcome-item">
                  <span className="cs-outcome-icon-v2" aria-hidden="true">&rarr;</span>
                  <span className="cs-outcome-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
