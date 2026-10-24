'use client';

import React, { useState } from 'react';

export function WalkmanCassette() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [tapeCounter, setTapeCounter] = useState(84);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      setTapeCounter((prev) => prev + 1);
    }
  };

  return (
    <div className="walkman-widget arcade-box" aria-label="1980s Walkman Cassette Player">
      {/* Walkman Metallic Top Bar */}
      <div className="walkman-top-strip">
        <div className="walkman-brand-group">
          <span className="walkman-brand font-mono">STEREO CASSETTE PLAYER</span>
          <span className="walkman-model font-mono">WM-F100 // AUTO REVERSE</span>
        </div>
        <div className="walkman-status-lights">
          <span className="walkman-led walkman-led--batt" title="Battery Full" />
          <span className="walkman-led-label font-mono">BATT</span>
          <span className={`walkman-led walkman-led--tape ${isPlaying ? 'is-active' : ''}`} title="Tape Running" />
          <span className="walkman-led-label font-mono">RUN</span>
        </div>
      </div>

      {/* Cassette Tape Shell */}
      <div className="cassette-tape-body">
        {/* Cassette Label Header */}
        <div className="cassette-label-header">
          <div className="cassette-label-side font-mono">SIDE A</div>
          <div className="cassette-label-title font-mono">ERIC PRAVEEN // 80s LO-FI COMPILATION</div>
          <div className="cassette-label-type font-mono">TYPE I [NORMAL]</div>
        </div>

        {/* Cassette Transparent Window with Spools */}
        <div className="cassette-window">
          {/* Left Spool */}
          <div className={`cassette-spool ${isPlaying ? 'is-spinning' : ''}`}>
            <div className="cassette-spool-teeth">
              <span /><span /><span />
            </div>
          </div>

          {/* Tape Bridge & Counter */}
          <div className="cassette-bridge">
            <div className="cassette-tape-ribbon" />
            <div className="cassette-counter-display font-mono">
              TAPE {String(tapeCounter).padStart(3, '0')}
            </div>
            <div className="cassette-scale-marks font-mono">
              100 &bull; 50 &bull; 0
            </div>
          </div>

          {/* Right Spool */}
          <div className={`cassette-spool ${isPlaying ? 'is-spinning' : ''}`}>
            <div className="cassette-spool-teeth">
              <span /><span /><span />
            </div>
          </div>
        </div>

        {/* Equalizer & Audio Spectrum */}
        <div className="walkman-eq-strip">
          <span className="walkman-eq-label font-mono text-xs">STEREO SPECTRUM</span>
          <div className={`walkman-eq-bars ${isPlaying ? 'is-playing' : 'is-paused'}`}>
            <div className="walkman-eq-bar bar-1" />
            <div className="walkman-eq-bar bar-2" />
            <div className="walkman-eq-bar bar-3" />
            <div className="walkman-eq-bar bar-4" />
            <div className="walkman-eq-bar bar-5" />
            <div className="walkman-eq-bar bar-6" />
            <div className="walkman-eq-bar bar-7" />
            <div className="walkman-eq-bar bar-8" />
          </div>
          <span className="walkman-vol-label font-mono text-xs">VOL [||||||||..] 75%</span>
        </div>
      </div>

      {/* Mechanical Transport Pushbuttons */}
      <div className="walkman-controls" role="group" aria-label="Tape Controls">
        <button
          type="button"
          className="walkman-btn walkman-btn--rew"
          onClick={() => setTapeCounter((prev) => Math.max(0, prev - 5))}
          title="Rewind Tape"
        >
          &#9664;&#9664; REW
        </button>

        <button
          type="button"
          className={`walkman-btn walkman-btn--play ${isPlaying ? 'is-pressed' : ''}`}
          onClick={togglePlay}
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? '❚❚ PAUSE' : '▶ PLAY'}
        </button>

        <button
          type="button"
          className="walkman-btn walkman-btn--ff"
          onClick={() => setTapeCounter((prev) => prev + 5)}
          title="Fast Forward Tape"
        >
          FF ▶▶
        </button>

        <button
          type="button"
          className={`walkman-btn walkman-btn--stop ${!isPlaying ? 'is-pressed' : ''}`}
          onClick={() => setIsPlaying(false)}
          title="Stop"
        >
          ■ STOP
        </button>
      </div>
    </div>
  );
}
