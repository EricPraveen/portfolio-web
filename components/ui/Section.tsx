import React from 'react';
import { clsx } from 'clsx';
import { Eyebrow } from './Eyebrow';
import { Rule } from './Rule';

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  index?: string;
  eyebrow?: string;
  title?: string;
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4';
  action?: React.ReactNode;
  rule?: 'none' | 'top' | 'bottom' | 'both';
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({
  children,
  index,
  eyebrow,
  title,
  titleAs: TitleComponent = 'h2',
  action,
  rule = 'none',
  spacing = 'lg',
  className,
  style,
  ...props
}: SectionProps) {
  const paddingMap = {
    sm: 'var(--space-md) 0',
    md: 'var(--space-xl) 0',
    lg: 'var(--space-2xl) 0',
    xl: 'var(--space-3xl) 0',
  };

  const hasHeader = index || eyebrow || title || action;

  return (
    <section
      className={clsx('signal-section', className)}
      style={{
        padding: paddingMap[spacing],
        width: '100%',
        ...style,
      }}
      {...props}
    >
      {(rule === 'top' || rule === 'both') && <Rule variant="hairline" spacing="none" style={{ marginBottom: 'var(--space-lg)' }} />}

      {hasHeader && (
        <header style={{ marginBottom: 'var(--space-lg)' }}>
          {(index || eyebrow) && (
            <div style={{ marginBottom: 'var(--space-2xs)' }}>
              <Eyebrow index={index}>{eyebrow}</Eyebrow>
            </div>
          )}

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 'var(--space-sm)',
            }}
          >
            {title && (
              <TitleComponent
                style={{
                  fontFamily: 'var(--font-family-display)',
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 'var(--font-weight-bold)',
                  color: 'var(--color-mineral-ink)',
                  margin: 0,
                }}
              >
                {title}
              </TitleComponent>
            )}

            {action && <div>{action}</div>}
          </div>
        </header>
      )}

      {children}

      {(rule === 'bottom' || rule === 'both') && <Rule variant="hairline" spacing="none" style={{ marginTop: 'var(--space-xl)' }} />}
    </section>
  );
}
