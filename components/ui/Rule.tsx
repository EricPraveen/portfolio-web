import React from 'react';
import { clsx } from 'clsx';

export interface RuleProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: 'hairline' | 'rule' | 'heavy' | 'signal';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  label?: string;
}

export function Rule({
  variant = 'hairline',
  spacing = 'md',
  label,
  className,
  style,
  ...props
}: RuleProps) {
  const borderMap = {
    hairline: 'var(--border-hairline)',
    rule: 'var(--border-rule)',
    heavy: 'var(--border-heavy)',
    signal: 'var(--border-signal)',
  };

  const marginMap = {
    none: '0',
    sm: 'var(--space-sm) 0',
    md: 'var(--space-md) 0',
    lg: 'var(--space-lg) 0',
    xl: 'var(--space-xl) 0',
  };

  if (label) {
    return (
      <div
        className={clsx('signal-rule-with-label', className)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-sm)',
          margin: marginMap[spacing],
          width: '100%',
        }}
      >
        <div style={{ flexGrow: 1, borderTop: borderMap[variant] }} />
        <span
          style={{
            fontFamily: 'var(--font-family-mono)',
            fontSize: 'var(--font-size-xs)',
            letterSpacing: 'var(--letter-spacing-tracked)',
            textTransform: 'uppercase',
            color: 'var(--color-ink-muted)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
        <div style={{ flexGrow: 1, borderTop: borderMap[variant] }} />
      </div>
    );
  }

  return (
    <hr
      className={clsx('signal-rule', className)}
      style={{
        border: 'none',
        borderTop: borderMap[variant],
        margin: marginMap[spacing],
        width: '100%',
        ...style,
      }}
      {...props}
    />
  );
}
