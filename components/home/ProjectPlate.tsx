'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Project } from '@/content/types';
import { TechIcon } from '@/components/ui/TechIcon';
import { ScrollReveal } from '@/components/animation';

export interface ProjectPlateProps {
  project: Project;
  layoutVariant?: 'split-right' | 'split-left' | 'stacked';
  index: number;
}

export function ProjectPlate({
  project,
  index,
}: ProjectPlateProps) {
  const [imgError, setImgError] = useState(false);
  const targetUrl = project.linkedInUrl || project.demoUrl || project.repoUrl || '#';
  const hasLinkedIn = Boolean(project.linkedInUrl);

  const handleCardClick = () => {
    if (targetUrl && targetUrl !== '#') {
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleCardClick();
    }
  };

  return (
    <ScrollReveal
      as="article"
      variant="fade-up"
      threshold={0.1}
      delay={index * 0.08}
      className="project-showcase-card arcade-box"
      role="link"
      tabIndex={0}
      aria-label={`View ${project.title} on LinkedIn (opens in new tab)`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
    >
      {/* 1. Thumbnail Container with Badges */}
      <div className="project-showcase-media">
        {project.coverImage?.src && !imgError ? (
          <Image
            src={project.coverImage.src}
            alt={project.coverImage.alt || project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="project-showcase-img"
            onError={() => setImgError(true)}
            unoptimized={project.coverImage.src.endsWith('.svg')}
          />
        ) : (
          <div className="project-showcase-placeholder" aria-hidden="true">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="project-showcase-placeholder-icon"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            <span className="font-mono text-xs">{project.category}</span>
          </div>
        )}

        <div className="project-showcase-overlay" aria-hidden="true" />

        {/* Top Badges */}
        <div className="project-showcase-badges">
          <span className="project-showcase-category-badge font-mono">
            {project.category}
          </span>
          <span className="project-showcase-linkedin-badge font-mono" title="LinkedIn Project Showcase">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75m1.39 9.74v-8.37H5.07v8.37h2.78z" />
            </svg>
            <span>LINKEDIN ↗</span>
          </span>
        </div>
      </div>

      {/* 2. Card Content Body */}
      <div className="project-showcase-body">
        {/* Meta Header */}
        <div className="project-showcase-meta">
          <span className="project-showcase-id font-mono">PROJECT // 0{index + 1}</span>
          <span className="project-showcase-dot" aria-hidden="true">&bull;</span>
          <span className="project-showcase-period font-mono">{project.period}</span>
        </div>

        {/* Project Title */}
        <h3 className="project-showcase-title font-sans">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="project-showcase-desc font-sans">
          {project.headline}
        </p>

        {/* Main Technologies Tags */}
        <div className="project-showcase-tech" aria-label="Technologies Used">
          {project.technologies.slice(0, 6).map((tech) => (
            <span key={tech} className="project-showcase-tech-tag font-mono">
              <TechIcon name={tech} size={13} />
              <span>{tech}</span>
            </span>
          ))}
        </div>

        {/* 3. Card Footer with Independent Secondary Links and Primary LinkedIn Action */}
        <div className="project-showcase-footer">
          <div className="project-showcase-actions">
            {project.repoUrl && project.repoUrl !== '#' && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-showcase-btn-secondary font-mono"
                aria-label={`View source code for ${project.title} on GitHub (opens in new tab)`}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
                <span>Code ↗</span>
              </a>
            )}

            {project.demoUrl && project.demoUrl !== '#' && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="project-showcase-btn-secondary project-showcase-btn-demo font-mono"
                aria-label={`View live demo for ${project.title} (opens in new tab)`}
              >
                <span className="project-demo-dot" aria-hidden="true" />
                <span>Live Demo ↗</span>
              </a>
            )}
          </div>

          {/* Primary View Indicator */}
          <div className="project-showcase-view-link font-mono">
            <span>{hasLinkedIn ? 'View on LinkedIn' : 'View Project'}</span>
            <span className="project-showcase-view-arrow" aria-hidden="true">↗</span>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
