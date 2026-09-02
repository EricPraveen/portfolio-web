import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import {
  getAllProjectSlugs,
  getProjectBySlug,
  getAdjacentProjects,
  getSkillsForProject,
  getNotesForProject,
} from '@/lib/content';
import {
  ProjectHero,
  ProjectFacts,
  DecisionNote,
  ArchitectureFigure,
  BuildLog,
  ArtifactDrawer,
  EvidenceGroup,
  OutcomeList,
  ProjectGallery,
  ProjectPager,
  ProjectQualityGrid,
  HardProblemSection,
  CaseStudyNavRail,
} from '@/components/project';
import { Container } from '@/components/ui';

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return {
      title: 'Case Study Not Found | Signal Ledger',
      description: 'The requested engineering case study could not be located in the ledger.',
    };
  }

  const title = `${project.title} — Technical Case Study | Signal Ledger`;
  const description = `${project.headline} Detailed architectural breakdown, decisions, debugging postmortem, and verified outcomes.`;

  return {
    title,
    description,
    keywords: project.technologies,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://signal-ledger.dev/projects/${project.slug}`,
      authors: ['Signal Ledger Engineer'],
      tags: project.technologies,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);
  const relatedSkills = getSkillsForProject(project.slug);
  const relatedNotes = getNotesForProject(project.slug);

  // Define section items for Table of Contents rail
  const sections = [
    { id: 'sec-overview', label: 'Context & Problem', index: '01' },
    { id: 'sec-contributions', label: 'Ownership & Roles', index: '02' },
    { id: 'sec-architecture', label: 'System Architecture', index: '03' },
    ...(project.decisions && project.decisions.length > 0
      ? [{ id: 'sec-decisions', label: 'Decision Records (ADRs)', index: '04' }]
      : []),
    ...(project.buildLog && project.buildLog.length > 0
      ? [{ id: 'sec-build-log', label: 'Execution Milestones', index: '05' }]
      : []),
    ...(project.artifacts && project.artifacts.length > 0
      ? [{ id: 'sec-artifacts', label: 'Technical Artifacts', index: '06' }]
      : []),
    ...(project.hardProblemStory
      ? [{ id: 'sec-debugging', label: 'Debugging Postmortem', index: '07' }]
      : []),
    { id: 'sec-quality', label: 'Quality & Benchmarks', index: '08' },
    { id: 'sec-outcomes', label: 'Outcomes & Roadmap', index: '09' },
    ...(project.gallery && project.gallery.length > 0
      ? [{ id: 'sec-gallery', label: 'Visual Captures', index: '10' }]
      : []),
    { id: 'sec-evidence', label: 'Evidence Archive', index: '11' },
  ];

  // Structured JSON-LD metadata for SoftwareSourceCode & TechArticle
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: project.title,
    description: project.headline,
    keywords: project.technologies.join(', '),
    articleSection: project.category,
    author: {
      '@type': 'Person',
      name: 'Portfolio Engineer',
    },
    about: {
      '@type': 'SoftwareSourceCode',
      name: project.title,
      codeRepository: project.repoUrl,
      programmingLanguage: project.technologies,
    },
  };

  return (
    <>
      {/* Inject JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="case-study-page-wrapper">
        <Container width="wide">
          {/* 1. PROJECT HERO */}
          <ProjectHero project={project} />

          {/* 2. STRUCTURED FACTS LEDGER */}
          <ProjectFacts project={project} />

          {/* TWO-COLUMN CASE STUDY BODY: Sticky TOC Rail + Main Narrative */}
          <div className="cs-layout-grid">
            {/* Sticky Table of Contents Navigation Rail */}
            <CaseStudyNavRail sections={sections} />

            {/* Main Editorial Narrative Article */}
            <article className="cs-narrative-article" id="case-study-content">
              {/* -------------------------------------------------------------
               * SECTION 01: CONTEXT, PROBLEM STATEMENT & CONSTRAINTS
               * ------------------------------------------------------------- */}
              <section id="sec-overview" className="cs-section" tabIndex={-1}>
                <div className="cs-section-header">
                  <div className="cs-section-index-badge text-mono-label">01 / CONTEXT & PROBLEM</div>
                  <h2 className="cs-section-title">The Engineering Challenge & Context</h2>
                </div>

                <div className="cs-prose">
                  <p className="cs-lead-paragraph">{project.context}</p>

                  <div className="cs-problem-callout" role="region" aria-label="Core Technical Problem">
                    <div className="cs-problem-callout-header text-mono-label">
                      <span className="cs-problem-beacon" aria-hidden="true" />
                      <span>CORE TECHNICAL PROBLEM STATEMENT</span>
                    </div>
                    <p className="cs-problem-callout-text">{project.problem}</p>
                  </div>

                  {project.constraints && project.constraints.length > 0 && (
                    <div className="cs-constraints-wrapper">
                      <h3 className="cs-subsection-title text-mono-label">SYSTEM & OPERATIONAL CONSTRAINTS</h3>
                      <div className="cs-constraints-grid">
                        {project.constraints.map((c, idx) => (
                          <div key={idx} className="cs-constraint-card">
                            <span className="cs-constraint-index text-mono-label">C-0{idx + 1}</span>
                            <p className="cs-constraint-text">{c}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </section>

              {/* -------------------------------------------------------------
               * SECTION 02: RESPONSIBILITIES & PERSONAL CONTRIBUTIONS
               * ------------------------------------------------------------- */}
              <section id="sec-contributions" className="cs-section" tabIndex={-1}>
                <div className="cs-section-header">
                  <div className="cs-section-index-badge text-mono-label">02 / OWNERSHIP & ROLE</div>
                  <h2 className="cs-section-title">Responsibilities & Personal Contributions</h2>
                </div>

                <div className="cs-prose">
                  <div className="cs-ownership-banner">
                    <span className="cs-ownership-label text-mono-label">PRIMARY OWNERSHIP SCOPE</span>
                    <p className="cs-ownership-text">{project.personalRole}</p>
                  </div>

                  <h3 className="cs-subsection-title text-mono-label">KEY TECHNICAL CONTRIBUTIONS</h3>
                  <ul className="cs-contributions-list">
                    {project.contributions.map((item, idx) => (
                      <li key={idx} className="cs-contribution-item">
                        <span className="cs-contribution-bullet text-mono-label" aria-hidden="true">
                          0{idx + 1}
                        </span>
                        <span className="cs-contribution-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* -------------------------------------------------------------
               * SECTION 03: SYSTEM ARCHITECTURE & SOLUTION APPROACH
               * ------------------------------------------------------------- */}
              <section id="sec-architecture" className="cs-section" tabIndex={-1}>
                <div className="cs-section-header">
                  <div className="cs-section-index-badge text-mono-label">03 / SYSTEM ARCHITECTURE</div>
                  <h2 className="cs-section-title">Architecture, Topology & Data Flow</h2>
                </div>

                <ArchitectureFigure slug={project.slug} architecture={project.architecture} />
              </section>

              {/* -------------------------------------------------------------
               * SECTION 04: ARCHITECTURAL DECISIONS & TRADEOFFS
               * ------------------------------------------------------------- */}
              {project.decisions && project.decisions.length > 0 && (
                <section id="sec-decisions" className="cs-section" tabIndex={-1}>
                  <div className="cs-section-header">
                    <div className="cs-section-index-badge text-mono-label">04 / ARCHITECTURAL DECISIONS</div>
                    <h2 className="cs-section-title">Decision Records & Technical Trade-offs</h2>
                    <p className="cs-section-subtitle">
                      Explicit analysis of why specific architectural routes were chosen, alternative options evaluated, and downsides willingly accepted.
                    </p>
                  </div>

                  <div className="cs-decisions-stack">
                    {project.decisions.map((decision, idx) => (
                      <DecisionNote key={idx} decision={decision} index={idx} />
                    ))}
                  </div>
                </section>
              )}

              {/* -------------------------------------------------------------
               * SECTION 05: IMPLEMENTATION HIGHLIGHTS & BUILD LOG
               * ------------------------------------------------------------- */}
              {project.buildLog && project.buildLog.length > 0 && (
                <section id="sec-build-log" className="cs-section" tabIndex={-1}>
                  <div className="cs-section-header">
                    <div className="cs-section-index-badge text-mono-label">05 / EXECUTION TIMELINE</div>
                    <h2 className="cs-section-title">Implementation Highlights & Build Log</h2>
                    <p className="cs-section-subtitle">
                      Chronological progression of core engineering milestones, state machine transitions, and stress test harnesses.
                    </p>
                  </div>

                  <BuildLog entries={project.buildLog} />
                </section>
              )}

              {/* -------------------------------------------------------------
               * SECTION 06: TECHNICAL ARTIFACTS & CODE SNIPPETS
               * ------------------------------------------------------------- */}
              {project.artifacts && project.artifacts.length > 0 && (
                <section id="sec-artifacts" className="cs-section" tabIndex={-1}>
                  <div className="cs-section-header">
                    <div className="cs-section-index-badge text-mono-label">06 / VERIFIABLE ARTIFACTS</div>
                    <h2 className="cs-section-title">Source Code Snippets & Benchmarks</h2>
                  </div>

                  <ArtifactDrawer artifacts={project.artifacts} />
                </section>
              )}

              {/* -------------------------------------------------------------
               * SECTION 07: HARD PROBLEM STORY & DEBUGGING POSTMORTEM
               * ------------------------------------------------------------- */}
              {project.hardProblemStory && (
                <section id="sec-debugging" className="cs-section" tabIndex={-1}>
                  <div className="cs-section-header">
                    <div className="cs-section-index-badge text-mono-label">07 / POSTMORTEM</div>
                    <h2 className="cs-section-title">Hard Problem & Debugging Narrative</h2>
                    <p className="cs-section-subtitle">
                      A deep-dive postmortem dissecting an unexpected runtime concurrency failure, diagnostic investigation, and final architectural remediation.
                    </p>
                  </div>

                  <HardProblemSection story={project.hardProblemStory} />
                </section>
              )}

              {/* -------------------------------------------------------------
               * SECTION 08: QUALITY, SECURITY, ACCESSIBILITY & PERFORMANCE
               * ------------------------------------------------------------- */}
              <section id="sec-quality" className="cs-section" tabIndex={-1}>
                <div className="cs-section-header">
                  <div className="cs-section-index-badge text-mono-label">08 / QUALITY GUARANTEES</div>
                  <h2 className="cs-section-title">Testing, Security, Accessibility & Performance</h2>
                  <p className="cs-section-subtitle">
                    Demonstrable guarantees across verification rigor, defense-in-depth security, strict WCAG 2.2 AA accessibility, and throughput efficiency.
                  </p>
                </div>

                <ProjectQualityGrid quality={project.quality} />
              </section>

              {/* -------------------------------------------------------------
               * SECTION 09: VERIFIED OUTCOMES, LESSONS & V2 ROADMAP
               * ------------------------------------------------------------- */}
              <section id="sec-outcomes" className="cs-section" tabIndex={-1}>
                <div className="cs-section-header">
                  <div className="cs-section-index-badge text-mono-label">09 / RETROSPECTIVE</div>
                  <h2 className="cs-section-title">Verified Outcomes, Lessons Learned & V2</h2>
                </div>

                <OutcomeList
                  outcomes={project.outcomes}
                  lessonsLearned={project.lessonsLearned}
                  v2Improvements={project.v2Improvements}
                />
              </section>

              {/* -------------------------------------------------------------
               * SECTION 10: VISUAL GALLERY & TELEMETRY
               * ------------------------------------------------------------- */}
              {project.gallery && project.gallery.length > 0 && (
                <section id="sec-gallery" className="cs-section" tabIndex={-1}>
                  <div className="cs-section-header">
                    <div className="cs-section-index-badge text-mono-label">10 / VISUAL ARCHIVE</div>
                    <h2 className="cs-section-title">Telemetry Dashboards & Interface Captures</h2>
                  </div>

                  <ProjectGallery
                    slug={project.slug}
                    coverImage={project.coverImage}
                    gallery={project.gallery}
                  />
                </section>
              )}

              {/* -------------------------------------------------------------
               * SECTION 11: EVIDENCE LINKS ARCHIVE
               * ------------------------------------------------------------- */}
              <section id="sec-evidence" className="cs-section" tabIndex={-1}>
                <div className="cs-section-header">
                  <div className="cs-section-index-badge text-mono-label">11 / PROOF ARCHIVE</div>
                  <h2 className="cs-section-title">Complete Evidence & Documentation Ledger</h2>
                </div>

                <EvidenceGroup evidence={project.evidence} />
              </section>

              {/* -------------------------------------------------------------
               * SECTION 12: CROSS-REFERENCED CAPABILITIES & NOTES
               * ------------------------------------------------------------- */}
              {(relatedSkills.length > 0 || relatedNotes.length > 0) && (
                <section className="cs-cross-references" aria-labelledby="cross-refs-heading">
                  <h3 id="cross-refs-heading" className="cs-cross-refs-title text-mono-label">
                    CROSS-REFERENCED KNOWLEDGE & CAPABILITIES
                  </h3>

                  <div className="cs-cross-refs-grid">
                    {relatedSkills.length > 0 && (
                      <div className="cs-cross-ref-box">
                        <span className="cs-cross-ref-label text-mono-label">CAPABILITIES DEMONSTRATED</span>
                        <div className="cs-cross-ref-tags">
                          {relatedSkills.map((s) => (
                            <span key={s.name} className="cs-cross-ref-tag text-mono-label">
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {relatedNotes.length > 0 && (
                      <div className="cs-cross-ref-box">
                        <span className="cs-cross-ref-label text-mono-label">RELATED FIELD NOTES</span>
                        <ul className="cs-cross-ref-notes-list">
                          {relatedNotes.map((n) => (
                            <li key={n.slug}>
                              <Link href={`/notes/${n.slug}`} className="cs-cross-ref-note-link">
                                <span>{n.title}</span>
                                <span className="cs-cross-ref-arrow" aria-hidden="true">&rarr;</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* -------------------------------------------------------------
               * SECTION 13: PREVIOUS & NEXT PROJECT PAGER
               * ------------------------------------------------------------- */}
              <ProjectPager previous={previous} next={next} />
            </article>
          </div>
        </Container>
      </div>
    </>
  );
}
