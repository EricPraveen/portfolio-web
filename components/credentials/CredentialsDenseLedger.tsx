import React from 'react';
import Link from 'next/link';
import { CredentialItem } from '@/content/types';

export interface CredentialsDenseLedgerProps {
  items: CredentialItem[];
}

export function CredentialsDenseLedger({ items }: CredentialsDenseLedgerProps) {
  return (
    <div className="cred-ledger-wrapper" aria-label="Credentials & Recognition Ledger Table">
      <div className="cred-ledger-header-meta">
        <span className="font-mono text-mono-label">
          TABULAR EVIDENCE LEDGER ({items.length} RECORDS)
        </span>
        <span className="font-mono text-xs text-ink-faint">
          HORIZONTAL SCROLL ON MOBILE SCREENS &rarr;
        </span>
      </div>

      <div className="cred-ledger-scroll-box">
        <table className="cred-ledger-table">
          <thead>
            <tr>
              <th scope="col" className="cred-th-date font-mono text-mono-label">Date</th>
              <th scope="col" className="cred-th-class font-mono text-mono-label">Classification</th>
              <th scope="col" className="cred-th-title font-mono text-mono-label">Title & Issuing Body</th>
              <th scope="col" className="cred-th-skills font-mono text-mono-label">Demonstrated Skills</th>
              <th scope="col" className="cred-th-project font-mono text-mono-label">Applied System</th>
              <th scope="col" className="cred-th-action font-mono text-mono-label">Verification</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const displayTitle = item.title.replace(/\[|\]/g, '');
              const displayIssuer = item.issuer.replace(/\[|\]/g, '');
              const displayOutcome = item.rankOrOutcome ? item.rankOrOutcome.replace(/\[|\]/g, '') : null;

              return (
                <tr key={item.id} className="cred-ledger-row">
                  {/* Date */}
                  <td className="cred-td-date font-mono text-xs">
                    <span className="cred-ledger-date-val">{item.issueDate}</span>
                  </td>

                  {/* Classification */}
                  <td className="cred-td-class font-mono text-xs">
                    <span className={`cred-ledger-badge cred-ledger-badge--${item.group}`}>
                      {item.group}
                    </span>
                  </td>

                  {/* Title & Issuer */}
                  <td className="cred-td-title">
                    <div className="cred-ledger-title-box">
                      <strong className="cred-ledger-title-text font-sans">{displayTitle}</strong>
                      <span className="cred-ledger-issuer-text text-xs">
                        {displayIssuer}
                        {item.credentialId && item.isCredentialIdSafe && (
                          <code className="cred-ledger-id font-mono"> &bull; {item.credentialId}</code>
                        )}
                      </span>
                      {displayOutcome && (
                        <span className="cred-ledger-outcome font-mono text-xs">
                          ★ {displayOutcome}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Skills */}
                  <td className="cred-td-skills">
                    <div className="cred-ledger-skills-wrap">
                      {item.skillsDemonstrated.slice(0, 3).map((skill) => (
                        <span key={skill} className="cred-ledger-skill-tag font-mono text-xs">
                          {skill}
                        </span>
                      ))}
                      {item.skillsDemonstrated.length > 3 && (
                        <span className="cred-ledger-skill-more font-mono text-xs">
                          +{item.skillsDemonstrated.length - 3}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Applied System / Project */}
                  <td className="cred-td-project font-mono text-xs">
                    {item.relatedProjectSlug ? (
                      <Link
                        href={`/work/${item.relatedProjectSlug}`}
                        className="cred-ledger-proj-link"
                      >
                        {item.relatedProjectSlug} &rarr;
                      </Link>
                    ) : (
                      <span className="text-ink-faint">&mdash;</span>
                    )}
                  </td>

                  {/* Verification */}
                  <td className="cred-td-action font-mono text-xs">
                    {item.verificationUrl ? (
                      <a
                        href={item.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cred-ledger-verify-link"
                        aria-label={`Verify ${displayTitle} externally (opens in new window)`}
                      >
                        <span>Verify</span>
                        <svg
                          width="11"
                          height="11"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    ) : (
                      <span className="cred-ledger-verified-archived">Archived</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
