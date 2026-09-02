import React from 'react';
import { ProjectDecision } from '@/content/types';

export interface DecisionNoteProps {
  decision: ProjectDecision;
  index: number;
}

export function DecisionNote({ decision, index }: DecisionNoteProps) {
  const adrNumber = String(index + 1).padStart(2, '0');

  return (
    <article className="cs-decision-card" aria-labelledby={`decision-title-${index}`}>
      {/* Header bar */}
      <div className="cs-decision-header">
        <div className="cs-decision-tag text-mono-label">
          <span className="cs-decision-badge">ADR-{adrNumber}</span>
          <span className="cs-decision-type">ARCHITECTURAL DECISION NOTE</span>
        </div>
        <h3 id={`decision-title-${index}`} className="cs-decision-title">
          {decision.title}
        </h3>
      </div>

      {/* Decision Statement */}
      <div className="cs-decision-row">
        <div className="cs-decision-cell-label text-mono-label">DECISION CHOSEN</div>
        <div className="cs-decision-cell-content">
          <p className="cs-decision-statement">{decision.decision}</p>
        </div>
      </div>

      {/* Technical Rationale / Why */}
      <div className="cs-decision-row">
        <div className="cs-decision-cell-label text-mono-label">WHY / RATIONALE</div>
        <div className="cs-decision-cell-content">
          <p className="cs-decision-why">{decision.why}</p>
        </div>
      </div>

      {/* Accepted Trade-off */}
      <div className="cs-decision-row cs-decision-row-tradeoff">
        <div className="cs-decision-cell-label text-mono-label">ACCEPTED TRADE-OFF</div>
        <div className="cs-decision-cell-content">
          <div className="cs-decision-tradeoff-box">
            <span className="cs-decision-tradeoff-icon" aria-hidden="true">&Delta;</span>
            <p className="cs-decision-tradeoff-text">{decision.tradeoff}</p>
          </div>
        </div>
      </div>

      {/* Alternatives Evaluated */}
      {decision.alternativesConsidered && decision.alternativesConsidered.length > 0 && (
        <div className="cs-decision-row cs-decision-row-alternatives">
          <div className="cs-decision-cell-label text-mono-label">ALTERNATIVES EVALUATED</div>
          <div className="cs-decision-cell-content">
            <ul className="cs-decision-alternatives-list">
              {decision.alternativesConsidered.map((alt, altIdx) => (
                <li key={altIdx} className="cs-decision-alt-item">
                  <span className="cs-decision-alt-bullet" aria-hidden="true">&minus;</span>
                  <span>{alt}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
}
