'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface PortfolioLoaderTiming {
  /** Delay before laptop lid begins to open (ms) - default: 300 */
  openDelay?: number;
  /** Duration for lid to open and settle (ms) - default: 1000 */
  openDuration?: number;
  /** Duration for loading progress 0% -> 100% (ms) - default: 2050 */
  loadDuration?: number;
  /** Duration to display completed state before transition (ms) - default: 300 */
  completeHold?: number;
  /** Duration of fade/zoom exit transition (ms) - default: 350 */
  fadeDuration?: number;
}

export interface PortfolioLoaderProps {
  timing?: PortfolioLoaderTiming;
  onComplete?: () => void;
}

const DEFAULT_TIMING: Required<PortfolioLoaderTiming> = {
  openDelay: 300,
  openDuration: 1000,
  loadDuration: 2050,
  completeHold: 300,
  fadeDuration: 350,
};

type LoaderStage = 'closed' | 'opening' | 'loading' | 'complete' | 'exiting' | 'done';

export function PortfolioLoader({ timing: userTiming, onComplete }: PortfolioLoaderProps) {
  const timing = { ...DEFAULT_TIMING, ...userTiming };

  const [stage, setStage] = useState<LoaderStage>('closed');
  const [isOpen, setIsOpen] = useState(false);
  const [isPowered, setIsPowered] = useState(false);
  const [flashActive, setFlashActive] = useState(false);
  const [progress, setProgress] = useState(0);

  const animFrameRef = useRef<number | null>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const hasFinishedRef = useRef(false);

  const clearAllTimers = useCallback(() => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
  }, []);

  const finishEarly = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    clearAllTimers();

    setProgress(100);
    setIsOpen(true);
    setIsPowered(true);
    setStage('complete');

    // Quick exit after skip
    const exitTimer = setTimeout(() => {
      setStage('exiting');
      document.body.classList.remove('is-booting');

      const doneTimer = setTimeout(() => {
        setStage('done');
        onComplete?.();
      }, timing.fadeDuration);
      timeoutsRef.current.push(doneTimer);
    }, 150);

    timeoutsRef.current.push(exitTimer);
  }, [clearAllTimers, onComplete, timing.fadeDuration]);

  // Keyboard shortcut listener to skip (Escape or Space)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        e.preventDefault();
        finishEarly();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [finishEarly]);

  // Main 4-Second Boot-Up Lifecycle Sequence
  useEffect(() => {
    // Add is-booting to body to lock scroll and pause hero CSS animations
    document.body.classList.add('is-booting');

    // Check for prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setIsOpen(true);
      setIsPowered(true);
      setStage('loading');

      const start = performance.now();
      const reducedDuration = 2500;

      const updateReducedProgress = (now: number) => {
        const elapsed = now - start;
        const rawRatio = Math.min(1, elapsed / reducedDuration);
        const currentPct = Math.round(rawRatio * 100);
        setProgress(currentPct);

        if (rawRatio < 1) {
          animFrameRef.current = requestAnimationFrame(updateReducedProgress);
        } else {
          setStage('complete');
          const exitTimer = setTimeout(() => {
            setStage('exiting');
            document.body.classList.remove('is-booting');

            const doneTimer = setTimeout(() => {
              setStage('done');
              onComplete?.();
            }, timing.fadeDuration);
            timeoutsRef.current.push(doneTimer);
          }, 300);
          timeoutsRef.current.push(exitTimer);
        }
      };

      animFrameRef.current = requestAnimationFrame(updateReducedProgress);

      return () => {
        clearAllTimers();
        document.body.classList.remove('is-booting');
      };
    }

    // 1. Laptop lid begins to smoothly lift up from the front edge (0.3s)
    const openTimer = setTimeout(() => {
      setIsOpen(true);
      setStage('opening');
    }, timing.openDelay);
    timeoutsRef.current.push(openTimer);

    // 2. Power on screen as lid reaches upright viewing position (~1.0s)
    const powerTimer = setTimeout(() => {
      setIsPowered(true);
      setFlashActive(true);
    }, timing.openDelay + Math.round(timing.openDuration * 0.7));
    timeoutsRef.current.push(powerTimer);

    // 3. Smooth loading progress 0% -> 100% over loadDuration (1.3s -> 3.35s)
    const progressStartTimer = setTimeout(() => {
      setStage('loading');
      const startTime = performance.now();

      const updateProgress = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progressRatio = Math.min(1, elapsed / timing.loadDuration);

        // Smooth hardware boot easing curve
        let eased: number;
        if (progressRatio < 0.5) {
          eased = Math.sin((progressRatio / 0.5) * (Math.PI / 2)) * 0.58;
        } else {
          const t = (progressRatio - 0.5) / 0.5;
          eased = 0.58 + Math.pow(t, 1.25) * 0.42;
        }

        const pct = Math.min(100, Math.round(eased * 100));
        setProgress(pct);

        if (progressRatio < 1) {
          animFrameRef.current = requestAnimationFrame(updateProgress);
        } else {
          // Exactly 100%
          setProgress(100);
          setStage('complete');

          // 4. Hold "PORTFOLIO READY" state briefly (3.35s -> 3.65s)
          const completeTimer = setTimeout(() => {
            setStage('exiting');
            document.body.classList.remove('is-booting');

            // 5. Smooth fade out and unmount into landing page (3.65s -> 4.00s)
            const doneTimer = setTimeout(() => {
              setStage('done');
              onComplete?.();
            }, timing.fadeDuration);
            timeoutsRef.current.push(doneTimer);
          }, timing.completeHold);

          timeoutsRef.current.push(completeTimer);
        }
      };

      animFrameRef.current = requestAnimationFrame(updateProgress);
    }, timing.openDelay + timing.openDuration);
    timeoutsRef.current.push(progressStartTimer);

    return () => {
      clearAllTimers();
      document.body.classList.remove('is-booting');
    };
  }, [
    clearAllTimers,
    onComplete,
    timing.completeHold,
    timing.fadeDuration,
    timing.loadDuration,
    timing.openDelay,
    timing.openDuration,
  ]);

  if (stage === 'done') {
    return null;
  }

  const isComplete = progress === 100;

  return (
    <aside
      className={`portfolio-loader ${stage === 'exiting' ? 'is-exiting' : ''}`}
      role="progressbar"
      aria-label="Portfolio loading sequence"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-live="polite"
    >
      {/* Background Retro Grid & Ambient Atmosphere */}
      <div className="portfolio-loader__backdrop" aria-hidden="true" />
      <div className="portfolio-loader__grid" aria-hidden="true" />

      {/* Top HUD Telemetry */}
      <div className="portfolio-loader__hud-top" aria-hidden="true">
        <div className="portfolio-loader__hud-item">
          <span className="portfolio-loader__hud-dot" />
          <span>EP // DEV_STATION</span>
        </div>
        <div className="portfolio-loader__hud-item">
          <span>{isComplete ? 'READY' : 'INITIALIZING'}</span>
        </div>
      </div>

      {/* Central 3D Laptop Stage */}
      <div className="portfolio-loader__stage">
        <div className="laptop-assembly">
          {/* LAPTOP CLAMSHELL LID */}
          <div className={`laptop-lid ${isOpen ? 'is-open' : 'is-closed'}`}>
            {/* INNER DISPLAY FACE (Active when open) */}
            <div className="laptop-lid__inner">
              {/* Top Bezel Camera & Indicator */}
              <div className="laptop-bezel__top" aria-hidden="true">
                <span className="laptop-camera__lens" />
                <span className={`laptop-camera__led ${isPowered ? 'is-active' : ''}`} />
              </div>

              {/* Minimal Screen Panel */}
              <div className={`laptop-screen__panel ${isPowered ? 'is-powered' : ''}`}>
                <div
                  className={`laptop-screen__flash ${flashActive ? 'animate-flash' : ''}`}
                  aria-hidden="true"
                />
                <div className="laptop-screen__scanlines" aria-hidden="true" />
                <div className="laptop-screen__glare" aria-hidden="true" />

                {/* Minimal Screen Content */}
                <div className="laptop-screen__minimal-body">
                  {/* Glowing EP Monogram Badge */}
                  <div className="laptop-screen__monogram" aria-hidden="true">
                    <span className="laptop-screen__monogram-text">EP</span>
                    <span className="laptop-screen__monogram-dot" />
                  </div>

                  {/* Clean Status Title */}
                  <div
                    className={`laptop-screen__minimal-title ${
                      isComplete ? 'is-ready' : ''
                    }`}
                  >
                    {isComplete ? 'PORTFOLIO READY' : 'INITIALIZING PORTFOLIO...'}
                  </div>

                  {/* Sleek Neon Progress Bar */}
                  <div className="laptop-screen__minimal-meter-track">
                    <div
                      className="laptop-screen__minimal-meter-fill"
                      style={{ width: `${progress}%` }}
                    >
                      <span className="laptop-screen__meter-glow" />
                    </div>
                  </div>

                  {/* Crisp Monospace Percentage Indicator */}
                  <div className="laptop-screen__minimal-percent">{progress}%</div>
                </div>
              </div>
            </div>

            {/* OUTER LID SHELL (Visible when laptop is closed) */}
            <div className="laptop-lid__outer" aria-hidden="true">
              <div className="laptop-lid__outer-monogram">
                <span className="laptop-lid__outer-text">EP</span>
                <span className="laptop-lid__outer-dot" />
              </div>
              <span className="laptop-lid__outer-label">SIGNAL LEDGER</span>
            </div>
          </div>

          {/* HINGE CYLINDER */}
          <div className="laptop-hinge" aria-hidden="true" />

          {/* LAPTOP BASE DECK (KEYBOARD & TRACKPAD) */}
          <div className="laptop-base" aria-hidden="true">
            {/* Keyboard Well */}
            <div className="laptop-base__keyboard-well">
              {/* Row 1: Function keys */}
              <div className="laptop-keyboard__row">
                {Array.from({ length: 14 }).map((_, i) => (
                  <span key={`f-${i}`} className="laptop-key" />
                ))}
              </div>
              {/* Row 2: Numbers */}
              <div className="laptop-keyboard__row">
                {Array.from({ length: 13 }).map((_, i) => (
                  <span key={`n-${i}`} className="laptop-key" />
                ))}
                <span className="laptop-key laptop-key--wide" />
              </div>
              {/* Row 3: QWERTY */}
              <div className="laptop-keyboard__row">
                <span className="laptop-key laptop-key--wide" />
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={`q-${i}`} className="laptop-key" />
                ))}
                <span className="laptop-key" />
              </div>
              {/* Row 4: ASDF */}
              <div className="laptop-keyboard__row">
                <span className="laptop-key laptop-key--wide" />
                {Array.from({ length: 11 }).map((_, i) => (
                  <span key={`a-${i}`} className="laptop-key" />
                ))}
                <span className="laptop-key laptop-key--wide" />
              </div>
              {/* Row 5: Space row */}
              <div className="laptop-keyboard__row">
                <span className="laptop-key" />
                <span className="laptop-key" />
                <span className="laptop-key" />
                <span className="laptop-key laptop-key--space" />
                <span className="laptop-key" />
                <span className="laptop-key" />
                <span className="laptop-key" />
              </div>
            </div>

            {/* Trackpad & Base Hardware LEDs */}
            <div className="laptop-base__lower">
              <div className="laptop-base__trackpad" />
              <div className="laptop-base__leds">
                <span className="laptop-base__led laptop-base__led--pwr" title="Power" />
                <span
                  className={`laptop-base__led laptop-base__led--act ${
                    !isComplete ? 'is-active' : ''
                  }`}
                  title="Disk Activity"
                />
              </div>
            </div>

            {/* Front Lip Notch */}
            <div className="laptop-base__notch" />
          </div>

          {/* Ambient Floor Shadow & Underglow */}
          <div className="laptop-ambient-shadow" aria-hidden="true" />
          <div
            className={`laptop-ambient-glow ${isPowered ? 'is-active' : ''}`}
            aria-hidden="true"
          />
        </div>
      </div>

      {/* Bottom HUD & Skip Controller */}
      <div className="portfolio-loader__hud-bottom">
        <button
          type="button"
          onClick={finishEarly}
          className="portfolio-loader__skip-hint"
          style={{
            background: 'none',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            padding: '4px 8px',
            textDecoration: 'underline',
            textUnderlineOffset: '3px',
          }}
          aria-label="Skip intro animation"
        >
          [ ESC OR CLICK TO SKIP ]
        </button>
      </div>
    </aside>
  );
}
