import React from 'react';
import { ProjectImage } from '@/content/types';
import { ProjectVisualDiagram } from '@/components/home/ProjectVisualDiagram';

export interface ProjectGalleryProps {
  slug: string;
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
}

export function ProjectGallery({ slug, coverImage, gallery = [] }: ProjectGalleryProps) {
  const allImages = [
    ...(coverImage ? [coverImage] : []),
    ...gallery,
  ];

  if (allImages.length === 0) return null;

  return (
    <div className="cs-gallery" role="region" aria-labelledby="gallery-heading">
      <div className="cs-gallery-header">
        <span className="cs-gallery-eyebrow text-mono-label">VISUAL EVIDENCE & TELEMETRY</span>
        <h3 id="gallery-heading" className="cs-gallery-title">
          System Diagrams & Execution Captures
        </h3>
      </div>

      <div className="cs-gallery-grid">
        {allImages.map((img, idx) => (
          <figure key={idx} className="cs-gallery-figure" aria-labelledby={`gallery-caption-${idx}`}>
            <div className="cs-gallery-media-frame">
              {/* If SVG diagram or fallback visual */}
              <div className="cs-gallery-visual-wrapper">
                <ProjectVisualDiagram slug={slug} />
              </div>
              {img.tag && (
                <span className="cs-gallery-tag-badge text-mono-label">{img.tag}</span>
              )}
            </div>

            <figcaption id={`gallery-caption-${idx}`} className="cs-gallery-figcaption">
              <span className="cs-gallery-caption-index text-mono-label">FIG {idx + 1} &bull;</span>
              <span className="cs-gallery-caption-text">{img.caption || img.alt}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
