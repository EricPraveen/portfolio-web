import React from 'react';

export function CredentialsPrincipleNote() {
  return (
    <aside className="cred-principle-card" aria-label="Credentials & Skills Architectural Philosophy">
      <div className="cred-principle-badge-row">
        <span className="cred-principle-tag font-mono text-mono-label">
          CORE OPERATING PRINCIPLE &bull; EVIDENCE INTEGRITY
        </span>
      </div>

      <div className="cred-principle-content">
        <div className="cred-principle-icon" aria-hidden="true">
          §
        </div>

        <div className="cred-principle-text">
          <h2 className="cred-principle-title font-sans">
            Credentials Corroborate Skills — They Do Not Substitute for Systems
          </h2>
          <p className="cred-principle-body text-body">
            Certifications and formal accolades establish baseline fluency, regulatory knowledge, and verified standard adherence. However, within this portfolio, <strong>credentials serve exclusively to support and corroborate demonstrated capabilities</strong>. They never substitute for real-world code, production trade-offs, reproducible debugging narratives, and benchmarked project architectures.
          </p>
        </div>
      </div>
    </aside>
  );
}
