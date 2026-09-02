import React from 'react';

export interface SkipLinkProps {
  targetId?: string;
  label?: string;
}

export function SkipLink({
  targetId = 'main-content',
  label = 'Skip to main content',
}: SkipLinkProps) {
  return (
    <a
      href={`#${targetId}`}
      className="skip-to-content"
      aria-label={label}
    >
      <span className="skip-to-content-text">{label}</span>
      <span className="skip-to-content-arrow" aria-hidden="true"> ↓</span>
    </a>
  );
}
