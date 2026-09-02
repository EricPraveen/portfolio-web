# IT Undergraduate Portfolio — Master Specification & Copilot Prompt Book

> **Purpose:** Build a distinctive, evidence-first personal portfolio for an IT undergraduate. This specification deliberately avoids the generic “AI vibe-coded developer portfolio” look. It is designed to make the owner appear credible, thoughtful, technically capable, and ready for internships, graduate roles, freelance work, research opportunities, or junior IT/software roles.
>
> **Important:** This document is intentionally generic and contains placeholders only. Do not invent achievements, employers, certificates, metrics, or project outcomes. Replace placeholders with verified information from the portfolio owner.

## 1. Executive Vision

The portfolio is not a digital CV and not a gallery of animated cards. It is a **professional evidence system**. Every major claim should be supported by proof: a project, artifact, code repository, diagram, certificate, presentation, metric, reflection, or documented responsibility.

### 1.1 Core positioning

The site should communicate five messages within the first 60 seconds:

1. **This person understands technology beyond tutorials.** They can explain decisions, architecture, trade-offs, debugging, teamwork, and learning.
2. **This person can finish work.** Projects show outcomes, not only screenshots.
3. **This person can communicate.** Case studies are concise, structured, and understandable to technical and non-technical readers.
4. **This person cares about quality.** The site itself demonstrates accessibility, responsive design, performance, semantic HTML, maintainability, testing, and polished interactions.
5. **This person has direction.** The portfolio has a clear professional thesis such as full-stack engineering, software engineering, cloud/devops, cybersecurity, data, AI/ML, QA, networking, UI engineering, or a carefully stated combination.

### 1.2 Anti-template rule

The portfolio must **not** default to the following overused patterns unless there is a strong conceptual reason:

- Huge centered “Hi, I’m X” hero with a glowing gradient blob.
- Dark navy background + neon purple/cyan gradients everywhere.
- Glassmorphism on every card.
- Floating 3D cubes, spheres, or meaningless particles.
- Skill percentage bars such as “JavaScript 90%”.
- A wall of technology logos with no context.
- Fake terminal windows used only as decoration.
- Excessive bento cards copied from SaaS landing pages.
- Constant typewriter animations.
- “Passionate developer who loves solving problems” as the main value proposition.
- Fake statistics, fake testimonials, fake client logos, or invented impact numbers.
- Scroll-jacking, excessive parallax, or animation that makes reading harder.

### 1.3 Recommended creative direction: “Signal Ledger”

Use a **technical editorial system** inspired by engineering notebooks, research reports, modern print layouts, transit diagrams, and product documentation — but expressed with contemporary web motion and responsive behavior.

**Visual personality:** intelligent, calm, precise, curious, engineered, slightly experimental.

**Primary palette:**

| Token | Suggested value | Role |
|---|---:|---|
| Bone Paper | `#F2EFE8` | Main light surface; warmer and more distinctive than pure white |
| Mineral Ink | `#171A1D` | Primary text / dark surface |
| Signal Cobalt | `#2F5BFF` | Primary action, links, focus moments |
| Lab Chartreuse | `#C9F24A` | Small highlight, status, emphasis only |
| Oxide | `#C45B43` | Secondary highlight / human warmth |
| Steel | `#8C949C` | Metadata, borders, inactive states |

Do **not** use all accent colors equally. Cobalt is the main accent; chartreuse and oxide are rare signals. Large regions should remain calm.

**Typography behavior:**

- Use one expressive editorial typeface for selected headings only.
- Use one highly readable grotesk/sans for interface and body copy.
- Use one mono face for metadata, labels, project IDs, dates, file-like annotations, and code — not for all body text.
- Prefer typographic hierarchy, whitespace, rules, and alignment over decorative cards.

**Layout behavior:**

- 12-column desktop grid, 6-column tablet grid, 4-column mobile grid.
- Visible alignment logic: section numbers, captions, annotations, metadata rails, and deliberate whitespace.
- Use asymmetry with control: not every section must be centered.
- Let major project imagery break the grid occasionally.
- Use thin rules and small index labels to create a technical-publication feel.

### 1.4 Alternate art directions

**A. “Infrastructure Atlas”** — off-white, dark graphite, safety orange, steel blue. Use network-map lines, system diagrams, topology motifs, map-style legends, and data labels. Best for networking, cloud, cybersecurity, devops, systems, or infrastructure-oriented profiles.

**B. “Digital Workshop”** — warm sand, black, ultramarine, copper. Use workshop labels, annotated artifacts, build logs, before/after states, and rough-but-controlled diagram marks. Best for software builders and multidisciplinary IT students.

**C. “Research Console”** — near-white, black, ultraviolet, muted green. Use experimental plots, research-note callouts, hypothesis/result structures, and data-story components. Best for AI, data science, ML, research, analytics, or academic projects.

The chosen direction must be implemented consistently. Do not randomly combine visual motifs from all three.

---

## 2. Complete Content Inventory — Everything That Can Be Added

The portfolio owner does not need every item below. The goal is to collect everything first, then select the strongest evidence.

### 2.1 Identity and professional positioning

- Full professional name.
- Preferred short name.
- Professional title / target role.
- One-sentence professional thesis.
- 40–80 word summary.
- Professional photo — optional, high quality, neutral, authentic.
- Current city/country — optional.
- Time zone — useful for remote work.
- Availability status — internship / graduate role / freelance / collaboration / research.
- Preferred work type — on-site, hybrid, remote.
- Public email address.
- LinkedIn.
- GitHub / GitLab / Bitbucket.
- Relevant professional platforms: Kaggle, HackerRank, LeetCode, Dev.to, Medium, Behance only if truly relevant, Stack Overflow, research profiles, package registries, etc.
- Downloadable resume/CV.
- Pronunciation guide for the name — optional.

### 2.2 Education

For each educational entry:

- Institution.
- Degree / diploma / program.
- Specialization.
- Start and expected completion dates.
- Current year / semester.
- GPA/classification — only if helpful and accurate.
- Relevant coursework.
- Major academic projects.
- Capstone/final-year project if applicable.
- Scholarships, dean’s list, academic distinctions.
- Clubs, societies, leadership.
- Team projects and roles.
- Coursework artifacts worth linking: reports, demos, diagrams, posters, research abstracts.

### 2.3 Technical capabilities

Avoid a giant logo wall. Organize by **capability** and support important capabilities with evidence.

Possible groups:

- Programming languages.
- Front-end engineering.
- Back-end engineering.
- Mobile development.
- Databases and data modeling.
- Cloud platforms.
- DevOps and CI/CD.
- Containers and orchestration.
- Networking.
- Cybersecurity.
- Linux and systems administration.
- AI/ML.
- Data analytics / BI.
- Testing and QA.
- API design/integration.
- Software architecture.
- Version control and collaboration.
- UI/UX and prototyping.
- Project management tools.
- Documentation.

For each important capability, include: **level of exposure**, **where it was used**, **what was built**, and optionally **last used**. Never claim “expert” without evidence.

### 2.4 Projects — the most important section

Include 4–8 strong projects. Prefer depth over quantity. Each project can contain:

- Project title.
- Project ID / category.
- One-line outcome.
- Problem / opportunity.
- Who it was for.
- Team size and exact personal role.
- Dates / duration.
- Status: completed / active / archived / prototype.
- Technology stack.
- Architecture diagram.
- Data model / ER diagram if relevant.
- API design.
- Key engineering decisions.
- Constraints.
- Alternatives considered.
- Hardest technical problem.
- Debugging story.
- Security considerations.
- Accessibility considerations.
- Testing strategy.
- Deployment strategy.
- Performance improvements.
- Screenshots / screen recordings.
- Demo URL.
- Repository URL.
- README / technical documentation.
- Metrics if real: response time, bundle size, test coverage, user count, task time reduction, model accuracy, etc.
- What failed or changed during development.
- Lessons learned.
- What would be improved in a v2.
- Personal contribution percentage only if honestly explainable.

### 2.5 Experience

Include internships, part-time roles, full-time work, freelance, volunteering, university labs, research assistantships, technical club roles, and meaningful unpaid technical contributions.

For each entry:

- Organization.
- Role.
- Dates.
- Context.
- 3–5 impact/responsibility bullets.
- Technologies used.
- Team/collaboration context.
- Outcomes and measurable impact when real.
- Link to public work if permitted.
- Confidentiality-safe description if the work cannot be shown.

### 2.6 Certificates and credentials

Certificates can add trust if curated. Include:

- Certificate name.
- Issuer.
- Date earned.
- Expiration if relevant.
- Credential ID only if safe to publish.
- Verification URL.
- Skills demonstrated.
- Associated project or practical application.
- Small preview image or issuer mark if allowed.

Create filters such as Cloud, Security, Development, Data, Networking, Professional Skills. Avoid showing 40 certificates with equal visual weight; feature the strongest 6–12 and provide an “all credentials” view if necessary.

### 2.7 Competitions, hackathons, challenges

- Event name.
- Organizer.
- Date.
- Team size.
- Problem statement.
- Role.
- Solution.
- Placement / award if any.
- Demo / repository / presentation.
- What was learned under time pressure.

### 2.8 Awards and recognition

- Academic awards.
- Competition placements.
- Scholarships.
- Technical community recognition.
- Published apps/packages.
- Open-source merged contributions.
- Conference/student symposium acceptance.

Use proof links where possible.

### 2.9 Open source and community contribution

- Pull requests.
- Issues solved.
- Packages/libraries.
- Documentation contributions.
- Student tech communities.
- Mentoring.
- Workshops conducted.
- Events organized.
- Technical writing.

### 2.10 Research, publications, presentations

- Research projects.
- Papers / posters / abstracts.
- Technical reports.
- Lightning talks.
- Class presentations worth preserving.
- Conference/student symposium participation.
- Slides or recordings.
- Bibliographic details.

### 2.11 Technical writing / learning notes

A small “Field Notes” or “Lab Notes” section is more distinctive than a generic blog. Possible entries:

- Debugging postmortems.
- Architecture notes.
- “What I learned building X”.
- Short technology comparisons.
- Security lessons.
- DevOps notes.
- Database design reflections.
- Course-to-project learning notes.

### 2.12 Professional qualities — with evidence

Do not list “teamwork, leadership, communication” without context. Convert each quality into evidence:

- Leadership → led a 4-person semester project, organized tasks, reviewed PRs.
- Communication → presented architecture to lecturers/team, wrote onboarding docs.
- Ownership → deployed and maintained a project after grading.
- Problem-solving → identified and fixed a concurrency/performance/data issue.
- Learning → migrated a project after discovering the first architecture did not scale.

### 2.13 Optional human dimension

Use only if it strengthens the professional story:

- Tech-related hobbies.
- Photography/design/3D/electronics/gaming development.
- Languages spoken.
- Books / learning themes.
- Community interests.
- A short “Outside the terminal” note.

Keep this small. The portfolio remains professional-first.

---

## 3. Information Architecture

### 3.1 Recommended primary navigation

1. **Index** — concise homepage.
2. **Work** — project index.
3. **Profile** — about, education, experience, capabilities.
4. **Credentials** — certificates, awards, hackathons, achievements.
5. **Notes** — optional technical writing.
6. **Contact** — contact methods and availability.

On smaller screens, use a simple full-screen or sheet navigation with excellent keyboard and touch behavior.

### 3.2 Homepage sequence

The homepage should read like a strong professional argument:

1. **Professional thesis** — target role + what kind of systems/problems the person is interested in.
2. **Selected proof** — 2–3 flagship project cases.
3. **Capability map** — concise categories tied to projects.
4. **Current status** — study stage, current focus, availability.
5. **Experience / education snapshot**.
6. **Selected credentials**.
7. **Latest lab note / learning thread** — optional.
8. **Direct contact close**.

### 3.3 Project case-study structure

Each flagship project should have its own route, not only a modal.

Recommended order:

- Hero: title, outcome, role, duration, stack, status.
- Context/problem.
- Constraints.
- Responsibilities.
- Architecture / approach.
- Important technical decisions.
- Build highlights.
- Quality: testing, security, accessibility, performance.
- Results.
- Screenshots / media.
- Reflection and next version.
- Links to demo, repository, docs.
- Next project.

---

## 4. UX and Visual System Requirements

### 4.1 Design principles

**P1 — Evidence before decoration.** A beautiful page cannot compensate for vague projects.

**P2 — Controlled contrast.** Use one strong visual surprise per viewport, not ten.

**P3 — Progressive disclosure.** Homepage = scan. Case studies = depth.

**P4 — Interface shows engineering maturity.** Keyboard navigation, focus states, reduced motion, proper forms, semantic headings, and fast loading are part of the portfolio’s message.

**P5 — Content shapes layout.** Do not force every item into identical cards.

**P6 — Motion explains.** Animation should communicate hierarchy, state, relationship, or transition. Remove decorative animation that has no information value.

### 4.2 Signature visual components

Use a small set of custom components that make the portfolio recognizable:

- **Project Plates:** editorial project previews with an index number, stack metadata, problem statement, and one dominant image.
- **Capability Rails:** horizontal/vertical rails that connect a capability to projects where it was proven.
- **Decision Notes:** compact “Decision / Why / Trade-off” blocks inside case studies.
- **Build Log:** chronological timeline of important changes, failures, and milestones.
- **Artifact Drawer:** expandable area for architecture diagram, database schema, test report, slide deck, or certificate proof.
- **Status Stamp:** small visual system for shipped / active / experimental / archived.
- **Evidence Link:** consistent micro-component for repo, demo, credential, document, presentation.
- **Field Note:** short technical writing card that resembles a lab note rather than a marketing blog tile.

### 4.3 Motion language

Allowed:

- 150–250ms state transitions.
- Small line/reveal transitions when entering sections.
- Project image crop/scale response on hover.
- Shared-element feeling when entering a case study if technically clean.
- Subtle cursor-aware effects on desktop only, never required for understanding.
- Scroll-linked progress indicator for long case studies.

Avoid:

- Endless floating icons.
- Large cursor followers that obscure content.
- Scroll-jacking.
- 3D scenes that delay content.
- Animating every heading word.
- Motion without `prefers-reduced-motion` handling.

### 4.4 Responsive behavior

- Mobile is not a compressed desktop version.
- On mobile, prioritize role, proof, action.
- Replace wide metadata tables with stacked label/value groups.
- Diagrams must pan/zoom gracefully or provide an accessible text alternative.
- Touch targets should be comfortably sized.
- Navigation must work without hover.
- Never hide essential project details behind hover-only interactions.

---

## 5. Technical Architecture

### 5.1 Recommended implementation philosophy

Use a modern, maintainable React-based framework with TypeScript, static generation where practical, and a content-driven structure. The project should be deployable to a mainstream edge/static platform and easy to update without editing presentation code everywhere.

Suggested stack pattern:

- Framework: current stable Next.js or equivalent React meta-framework.
- Language: TypeScript with strict mode.
- Styling: design tokens + CSS variables + Tailwind CSS or well-structured CSS Modules. Avoid utility chaos by creating semantic components and token conventions.
- Content: typed local content files (MDX/JSON/TS) first; CMS only if the owner genuinely needs it.
- Motion: Motion/Framer Motion or CSS transitions, used selectively.
- Icons: one coherent icon set plus custom simple SVG marks when needed.
- Forms: server-side/edge endpoint or trusted form provider; include validation, spam protection, and safe error states.
- Images: framework image optimization, explicit dimensions, modern formats.
- Analytics: privacy-conscious and optional.
- Testing: unit/component tests where useful + end-to-end smoke tests for navigation and forms.

### 5.2 Suggested repository structure

```text
portfolio/
├─ app/
│  ├─ page.tsx
│  ├─ work/
│  │  ├─ page.tsx
│  │  └─ [slug]/page.tsx
│  ├─ profile/page.tsx
│  ├─ credentials/page.tsx
│  ├─ notes/
│  └─ contact/page.tsx
├─ components/
│  ├─ layout/
│  ├─ navigation/
│  ├─ project/
│  ├─ evidence/
│  ├─ typography/
│  ├─ motion/
│  └─ ui/
├─ content/
│  ├─ profile.ts
│  ├─ education.ts
│  ├─ experience.ts
│  ├─ skills.ts
│  ├─ projects/
│  ├─ credentials.ts
│  └─ notes/
├─ public/
│  ├─ projects/
│  ├─ credentials/
│  ├─ documents/
│  └─ og/
├─ lib/
│  ├─ content/
│  ├─ seo/
│  ├─ analytics/
│  └─ utils/
├─ tests/
├─ .github/
│  └─ copilot-instructions.md
└─ README.md
```

### 5.3 Data model requirements

Projects should be content objects, not hardcoded page fragments. Minimum example:

```ts
export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "shipped" | "active" | "experimental" | "archived";
  year: string;
  role: string;
  teamSize?: number;
  duration?: string;
  categories: string[];
  technologies: string[];
  problem: string;
  constraints: string[];
  contributions: string[];
  decisions: Array<{ title: string; why: string; tradeoff?: string }>;
  outcomes: string[];
  evidence: Array<{ label: string; href: string; type: string }>;
  cover: string;
  gallery?: string[];
  featured: boolean;
};
```

Education, experience, certificates, awards, notes, and capability data should receive similarly typed schemas.

---

## 6. Functional Requirements (SRS-style)

| ID | Requirement | Priority | Acceptance criterion |
|---|---|---|---|
| FR-001 | Responsive homepage | Must | Works from small phones to wide desktops with no overflow or lost content |
| FR-002 | Primary navigation | Must | Keyboard, touch, mouse; current page indicated; focus visible |
| FR-003 | Project index | Must | Shows all projects, featured state, filters/categories without losing accessibility |
| FR-004 | Project case-study routes | Must | Every flagship project has a stable URL and structured evidence |
| FR-005 | Profile page | Must | Education, experience, capabilities, professional summary |
| FR-006 | Credentials page | Should | Certificates/awards with issuer/date/verification where available |
| FR-007 | Resume access | Must | View/download link with clear file name and updated date |
| FR-008 | Contact | Must | Email/social options; form only if robustly implemented |
| FR-009 | Theme support | Could | Light/dark only if both are intentionally designed; never automatic gimmick |
| FR-010 | Search/command palette | Could | Quickly opens projects/pages; fully keyboard accessible |
| FR-011 | Notes | Could | Typed content pages with tags and reading metadata |
| FR-012 | Project evidence artifacts | Should | Diagrams/docs/media accessible from case-study pages |
| FR-013 | SEO metadata | Must | Unique titles/descriptions, canonical URL, OG metadata, sitemap |
| FR-014 | Error states | Must | Custom 404 and graceful content/form errors |
| FR-015 | Analytics | Could | Privacy-conscious, documented, no secret leakage |

---

## 7. Non-Functional Requirements

### 7.1 Accessibility

Target **WCAG 2.2 Level AA** as the practical quality bar.

- Semantic landmarks.
- Correct heading hierarchy.
- Keyboard access for everything interactive.
- Strong visible focus.
- Sufficient contrast.
- Skip link.
- Meaningful alt text; decorative imagery ignored appropriately.
- No color-only status communication.
- Forms with labels, instructions, errors, and status announcements.
- Reduced motion support.
- Touch-friendly target sizes.
- Focus must not be obscured by sticky UI.

### 7.2 Performance

Use Core Web Vitals as measurable release targets:

- LCP: **≤ 2.5 seconds** at the 75th percentile.
- INP: **≤ 200 ms** at the 75th percentile.
- CLS: **≤ 0.1** at the 75th percentile.

Additional project targets:

- Avoid shipping large 3D libraries unless a critical feature truly needs them.
- Lazy-load non-critical media.
- Reserve image dimensions.
- Optimize fonts and avoid too many font files.
- Prefer server/static rendering for portfolio content.
- Keep client JavaScript purposeful.

### 7.3 SEO and shareability

- Descriptive page titles.
- Strong meta descriptions.
- Semantic content rather than image-only text.
- Open Graph image for homepage and flagship projects.
- Structured data where appropriate: Person, CreativeWork/SoftwareSourceCode, Article.
- Sitemap and robots configuration.
- Human-readable URLs.
- Social previews tested before launch.

### 7.4 Security and privacy

- No API keys in client code.
- Environment variables documented.
- Validate and sanitize form submissions.
- Rate limit contact endpoints if self-hosted.
- Anti-spam/honeypot strategy.
- Avoid unnecessarily publishing personal address, phone number, student ID, certificate secrets, or private repository details.
- Security headers appropriate to the chosen framework/host.
- Keep dependencies maintained.

### 7.5 Maintainability

- Type-safe content.
- Reusable components without over-abstraction.
- Tokens for colors, spacing, typography, radii, motion.
- No duplicated project data in multiple components.
- README documents local development, content editing, build, deployment, and quality checks.
- Lint, typecheck, and tests must pass before deployment.

---

## 8. Content Quality Rules

### 8.1 Project writing formula

Use this sequence:

**Context → Problem → Constraint → Decision → Implementation → Result → Reflection**

Bad:

> “This is an e-commerce application made using React, Node.js and MongoDB.”

Better pattern:

> “A semester team project for managing small-store inventory and online orders. I owned the API and database design, introduced role-based authorization, and reworked the stock update flow after discovering race-condition risks during concurrent checkout testing.”

### 8.2 Evidence strength scale

- **Level 0:** claim only — “I know Docker.”
- **Level 1:** named usage — “Used Docker in Project X.”
- **Level 2:** explained responsibility — “Created development containers and multi-stage production builds.”
- **Level 3:** demonstrated artifact — Dockerfile, deployment diagram, repository link.
- **Level 4:** outcome/reflection — smaller image, faster onboarding, deployment issue solved, trade-off explained.

Aim for Levels 2–4 on core skills.

### 8.3 Writing tone

Use:

- Precise verbs: designed, implemented, tested, integrated, deployed, documented, debugged, refactored, investigated, measured.
- Specific nouns.
- Short paragraphs.
- Honest uncertainty and reflection.

Avoid:

- “Passionate”, “innovative”, “hardworking” without evidence.
- “Expert” for beginner/intermediate technologies.
- Inflated corporate language.
- AI-sounding filler such as “leveraging cutting-edge technologies to deliver seamless solutions.”

---

## 9. Portfolio Content Collection Worksheet

Before serious UI implementation, gather these assets.

### Identity package

- [ ] Name and professional title
- [ ] 1-sentence thesis
- [ ] Short bio
- [ ] Long bio
- [ ] Email
- [ ] LinkedIn
- [ ] GitHub
- [ ] Resume PDF
- [ ] Photo if used

### Education package

- [ ] Degree/program
- [ ] Institution
- [ ] Dates
- [ ] Relevant modules
- [ ] GPA/classification if used
- [ ] Academic honors
- [ ] Societies/leadership

### Per-project package

- [ ] Title + one-line outcome
- [ ] Problem
- [ ] Role and team size
- [ ] Duration
- [ ] Tech stack
- [ ] Architecture diagram
- [ ] 3–6 strong screenshots
- [ ] Repository
- [ ] Live demo if available
- [ ] README/doc link
- [ ] 3 important technical decisions
- [ ] 1 difficult bug/problem
- [ ] Testing notes
- [ ] Security/accessibility/performance notes
- [ ] Real outcomes/metrics
- [ ] Lessons + v2 improvements

### Credentials package

- [ ] Certificate title
- [ ] Issuer
- [ ] Date
- [ ] Verification link
- [ ] Credential ID if safe
- [ ] Skills demonstrated
- [ ] Small proof image/PDF if permitted

### Experience package

- [ ] Role / organization / dates
- [ ] Responsibilities
- [ ] Technologies
- [ ] Results
- [ ] Team/collaboration context
- [ ] Confidentiality constraints

---

## 10. Phased VS Code Copilot Prompt Plan

The prompts below are designed for **separate Copilot sessions**. At the beginning of each session, ensure the repository contains `.github/copilot-instructions.md`. Then paste the prompt for the phase you are working on.

### PHASE 0 — Repository audit and project constitution

```text
Act as a senior product engineer, frontend architect, design-system engineer, accessibility reviewer, and technical portfolio editor.

We are building a high-end personal portfolio for an IT undergraduate. The portfolio must feel authored, editorial, technical, and evidence-first — not like a generic AI-generated developer template.

First inspect the entire current repository. Do not start rewriting files blindly.

Tasks:
1. Summarize the current stack, folder structure, routing, styling approach, content approach, dependencies, and existing quality tooling.
2. Identify technical debt, duplicated components, inconsistent styling, inaccessible patterns, performance risks, and anything that looks like a generic portfolio template.
3. Propose a target architecture compatible with the existing repository where reasonable.
4. Create or update a PROJECT_PLAN.md containing milestones, risks, content dependencies, and quality gates.
5. Create a content-gap checklist. Use placeholders where real information is missing; never invent achievements, metrics, certificates, employers, education details, or project outcomes.
6. Confirm the design constitution: “Signal Ledger” — technical editorial design, warm paper/ink base, cobalt primary signal, rare chartreuse/oxide accents, visible grid logic, excellent typography, restrained motion, evidence-first project storytelling.
7. List exactly which files should be changed in Phase 1 and why.

Constraints:
- Do not add 3D libraries, particles, glassmorphism, typewriter effects, random gradients, percentage skill bars, or a technology-logo wall.
- Do not create fake content.
- Keep TypeScript strict.
- Preserve accessibility and responsive behavior.
- Prefer simple maintainable architecture over clever abstractions.

Stop after the audit, plan, and proposed file list. Do not implement Phase 1 yet.
```

### PHASE 1 — Content model and information architecture

```text
Continue from the repository and PROJECT_PLAN.md. Build the portfolio’s content architecture before polishing visuals.

Goals:
- All personal information must live in typed content/data modules, not scattered across JSX.
- The website must support Index, Work, Project Case Study, Profile, Credentials, Notes (optional), and Contact.

Implement:
1. Strong TypeScript types for Profile, Education, Experience, Capability, Project, ProjectDecision, EvidenceLink, Credential, Award, Hackathon, Note, SocialLink.
2. Create content files populated only with neutral placeholders/TODO markers where actual data is unavailable.
3. Add validation where practical so malformed project content fails clearly during development/build.
4. Build helpers for sorting featured projects, filtering project categories, and retrieving projects by slug.
5. Define project status values: shipped, active, experimental, archived.
6. Ensure every flagship project schema supports: problem, constraints, role, team size, stack, contributions, decisions + trade-offs, testing, security, accessibility, performance, outcome, lessons, v2 ideas, gallery, repo/demo/docs links.
7. Document how the portfolio owner should replace placeholder content.

Acceptance checks:
- No invented content.
- Typecheck passes.
- Content can be changed without editing layout components.
- Slugs are stable and validated.
- Missing optional content does not break layouts.

After implementation, report changed files and remaining content gaps.
```

### PHASE 2 — Design tokens and the unique visual system

```text
Implement the “Signal Ledger” design system. Do not build generic cards first; establish tokens and typography first.

Creative rules:
- Overall feeling: technical editorial publication + engineering notebook + modern product craft.
- Base palette: Bone Paper #F2EFE8, Mineral Ink #171A1D, Signal Cobalt #2F5BFF, Lab Chartreuse #C9F24A, Oxide #C45B43, Steel #8C949C.
- Cobalt is the primary accent. Chartreuse and Oxide are rare highlights only.
- Avoid large gradient backgrounds.
- Avoid excessive rounded cards. Prefer sections, rules, columns, image plates, metadata rails, and precise spacing.

Implement:
1. CSS variables/design tokens for color, typography, spacing, borders, widths, z-index, motion durations/easings.
2. A 12/6/4-column responsive grid abstraction.
3. Body/display/mono typography roles with robust fallbacks and font-loading strategy.
4. Text styles for display, section title, body, small metadata, project index label, mono label, captions.
5. Focus ring tokens that are strong and accessible.
6. Core primitives: Container, Grid, Section, Rule, Stack, Cluster, Eyebrow, MetadataList, EvidenceLink, StatusStamp.
7. Dark mode ONLY if it can be intentionally designed as a second editorial palette; otherwise keep one excellent theme for now.
8. A private /dev/design-system route or Storybook-like internal page showing tokens and components if appropriate to the stack.

Audit contrast and responsive typography. Do not proceed with homepage content until the design system is coherent.
```

### PHASE 3 — App shell, navigation, and interaction foundation

```text
Build the application shell and navigation with a premium but restrained interaction model.

Requirements:
1. Header uses a compact identity mark/name area, current section indicator, and main navigation.
2. Desktop navigation should feel editorial/architectural rather than a pill-button SaaS navbar.
3. Mobile navigation must be touch-friendly, keyboard-safe, scroll-safe, and easy to close.
4. Add a skip-to-content link.
5. Add route-level page titles/metadata where the framework supports them.
6. Add a footer containing contact, key links, availability placeholder, updated year, and a small technical colophon.
7. Build consistent page transition behavior only if it does not delay navigation or harm reduced-motion users.
8. Add a subtle page/section index language such as 01/Index, 02/Work — but keep URL names human-readable.
9. Implement excellent hover, active, focus-visible, and touch states.
10. No hidden navigation that depends on cursor tricks.

Run keyboard navigation manually through the shell and fix any issue before continuing.
```

### PHASE 4 — Homepage: professional thesis, not a generic hero

```text
Create the homepage as a professional argument, not a template hero.

Structure:
A. Opening thesis panel
- [PROFESSIONAL TITLE]
- A precise 1–2 sentence statement of the kinds of systems/problems the person works on.
- Current status / degree stage / availability placeholders.
- Primary actions: View selected work, Download resume, Contact.
- Do NOT use “Hi, I’m … passionate developer”.

B. Selected work
- 2–3 flagship ProjectPlate components.
- Each preview must show problem/outcome, role, year/status, selected technologies, and one strong visual.
- Layouts can alternate rather than forcing identical cards.

C. Capability map
- Show 4–6 capability groups and connect each to actual projects where proven.
- No percentages.

D. Current focus
- A compact “Now / Learning / Building” area using real placeholders.

E. Profile snapshot
- Education + experience summary with links to the full Profile page.

F. Selected credentials
- 3–6 strongest credentials only.

G. Contact close
- Direct, calm, professional.

Visual behavior:
- Use large typographic hierarchy, rules, annotations, project plates, and grid tension.
- Add only meaningful motion.
- The first viewport should look recognizable even if all decorative effects are disabled.

After building, perform an “AI-template audit” and remove anything that resembles common generated portfolios.
```

### PHASE 5 — Profile page: education, experience, capabilities, operating principles

```text
Build the Profile page to answer: “Who is this person professionally, how are they developing, and what evidence supports their capabilities?”

Sections:
1. Professional profile — concise long bio and target direction.
2. Education timeline — institution, program, dates, selected coursework, honors if real.
3. Experience timeline — internships/jobs/freelance/volunteer/research with evidence-driven bullets.
4. Capability matrix — categories, specific tools/technologies, and links to projects where each was applied.
5. Operating principles — 3–5 short principles such as documentation, security-mindedness, testing, learning by shipping. These must sound personal and be edited later by the owner.
6. Collaboration — evidence of teamwork/leadership/communication if available.
7. Resume action.

Design:
- Avoid a resume-looking wall of text.
- Use timeline rails, metadata, capability/evidence links, and editorial spacing.
- Make dates readable and responsive.
- Do not use skill bars, stars, or circular percentages.
```

### PHASE 6 — Work index and project discovery

```text
Build the Work page as a curated technical project archive.

Requirements:
1. Featured projects appear first, but all verified projects are discoverable.
2. Add lightweight filtering by meaningful categories (for example Full Stack, Cloud, Security, Data, Mobile, Academic) only if there are enough projects to justify filters.
3. Filters must use semantic buttons, expose selected state, work by keyboard, and avoid layout jumps.
4. Each project listing shows title, one-line result/problem, role, year, status, selected technologies, category, and strong image/artifact preview.
5. Support projects with no live demo or private repositories without making them look incomplete.
6. Status labels must be explicit and not color-only.
7. Add an optional archive/list view for secondary projects.
8. Use URL query parameters for filters only if this improves shareability and remains simple.
9. No masonry layout that creates confusing reading order.

Add empty states and test them with placeholder data removed.
```

### PHASE 7 — Project case-study template: the credibility engine

```text
Create the dynamic project case-study route and make it the strongest part of the website.

Every flagship case study should support:
1. Title + concise outcome.
2. Role, team size, duration, year, status, stack.
3. Problem/context.
4. Constraints.
5. Responsibilities / exact personal contribution.
6. Architecture or solution approach.
7. Decision Notes with “Decision / Why / Trade-off”.
8. Implementation highlights.
9. Hard problem / debugging story.
10. Testing strategy.
11. Security considerations.
12. Accessibility considerations.
13. Performance considerations.
14. Result/outcome/metrics only where real.
15. Gallery / diagrams / video with captions.
16. Lessons learned.
17. What I would change in v2.
18. Evidence links: repo, demo, docs, report, slides.
19. Previous/next project navigation.

Build reusable components:
- ProjectHero
- ProjectFacts
- DecisionNote
- ArchitectureFigure
- BuildLog
- ArtifactDrawer
- EvidenceGroup
- OutcomeList
- ProjectGallery
- ProjectPager

Accessibility:
- Every diagram has a text explanation.
- Captions are associated correctly.
- Media has accessible controls/alternatives.
- Sticky side rails must never obscure focused elements.

Editorial rule:
Case-study writing must make technical reasoning visible. Do not allow the page to collapse into “screenshot + tech stack + features.”
```

### PHASE 8 — Credentials, awards, hackathons, and proof

```text
Build a Credentials page that feels like a verified evidence archive, not a badge collection.

Content groups:
- Certifications
- Awards
- Hackathons/competitions
- Academic recognition
- Open-source/community contribution
- Presentations/research if available

Credential item fields:
- Title
- Issuer/organizer
- Date
- Category
- Verification link
- Credential ID only if safe
- Skills demonstrated
- Related project or application
- Optional image/PDF preview

UX:
- Feature the most meaningful items.
- Secondary items may use a dense archive layout.
- Add filters only when useful.
- Verification links need external-link semantics.
- Do not expose sensitive IDs.
- Do not invent issuer logos or recognition.

Add a note in code/content docs explaining that credentials should support demonstrated skills rather than substitute for projects.
```

### PHASE 9 — Field Notes / technical writing

```text
If the portfolio owner has or plans to write technical notes, create a “Field Notes” section. If there is no real writing yet, implement the structure but do not publish fake articles.

Goals:
- Make learning visible.
- Support short, high-signal technical notes rather than SEO filler.

Types:
- Debugging postmortem
- Architecture note
- Project lesson
- Security note
- Tool comparison
- Course concept applied in practice

Implement:
1. Notes index.
2. Note detail route.
3. Tags/categories.
4. Published/updated date.
5. Reading time only if computed automatically.
6. Code block styling with accessible contrast.
7. Heading anchors optional.
8. Related projects/capabilities.
9. RSS only if easy and maintainable.

Keep the visual language consistent with the engineering notebook/editorial concept.
```

### PHASE 10 — Contact, resume, social proof, and conversion

```text
Build the final professional conversion paths.

Contact page:
- Clear availability statement placeholder.
- Public email.
- LinkedIn/GitHub and other relevant profiles.
- Location/time zone optional.
- Contact form only if the implementation is secure, accessible, and reliable.

If implementing a form:
- Server-side validation.
- Human-friendly inline errors.
- Accessible status message.
- Rate limiting or provider protection.
- Honeypot/anti-spam approach.
- No secrets in client code.
- Graceful failure path that still exposes an email link.

Resume:
- Use a stable, descriptive file name.
- Display “last updated” from content/config.
- Provide view/download behavior that works on mobile.

Social proof:
- Testimonials are optional and must be authentic.
- Never generate placeholder praise that could accidentally ship.
```

### PHASE 11 — Signature interactions without gimmicks

```text
Add a small set of signature interactions that reinforce the design concept.

Choose only 2–4 from this list:
- Project image crop/scale with metadata reveal.
- Case-study reading progress rail.
- Keyboard-accessible command palette for navigation/project search.
- Architecture diagram hotspots with text descriptions.
- “Evidence drawer” expansion for technical artifacts.
- Capability-to-project relationship highlighting.
- Subtle section-number transition.

Rules:
1. Every interaction must still work without animation.
2. Respect prefers-reduced-motion.
3. Do not make core information hover-only.
4. Do not add a custom cursor unless it clearly improves usability; default is no custom cursor.
5. Do not add scroll-jacking.
6. Avoid continuous animation.
7. Measure added bundle cost and remove libraries that are too expensive for minor effects.

After implementation, run a motion reduction audit and a mobile touch audit.
```

### PHASE 12 — Accessibility hardening

```text
Perform a dedicated WCAG 2.2 AA-oriented accessibility pass across the entire portfolio.

Audit:
- Semantic landmarks
- Heading hierarchy
- Accessible names
- Keyboard order
- Focus visibility
- Focus not obscured by sticky elements
- Skip link
- Color contrast
- Links distinguishable from surrounding text
- Target sizes
- Forms, errors, status messages
- Modal/drawer focus management if any
- Mobile menu focus management
- Project filters
- Command palette if present
- Reduced motion
- Alt text quality
- Decorative image handling
- Diagram text alternatives
- Tables if any
- External link meaning

Run automated accessibility tooling if available, but do not treat automation as sufficient. Add tests for critical components and document any remaining limitations.
```

### PHASE 13 — Performance, SEO, metadata, and share previews

```text
Perform the production quality pass.

Performance goals:
- LCP <= 2.5s target at p75
- INP <= 200ms target at p75
- CLS <= 0.1 target at p75

Tasks:
1. Inspect bundle/client boundaries and remove unnecessary client-side JavaScript.
2. Optimize project images and reserve dimensions.
3. Lazy-load non-critical media.
4. Audit font files, weights, preloads, and fallbacks.
5. Ensure animation libraries are used only where necessary.
6. Add unique metadata for every major route and project.
7. Add canonical URLs.
8. Generate sitemap/robots configuration.
9. Add Open Graph / social images for homepage and flagship projects.
10. Add appropriate structured data only where truthful.
11. Ensure 404/error pages are useful.
12. Test social preview metadata.
13. Create a PERFORMANCE_NOTES.md with major decisions and measured results.

Do not fake Lighthouse scores. Record actual test conditions and results when measured.
```

### PHASE 14 — Testing and release engineering

```text
Prepare the portfolio for reliable deployment.

Add/verify:
- lint script
- typecheck script
- production build script
- unit/component tests where useful
- end-to-end smoke tests for navigation, project route, mobile menu, filters, resume link, and contact behavior
- accessibility checks integrated where practical
- broken-link check if available

Create a release checklist covering:
1. placeholder content scan
2. broken links
3. private/sensitive data scan
4. responsive testing
5. keyboard testing
6. reduced-motion testing
7. image optimization
8. SEO metadata
9. social preview
10. analytics consent/privacy if used
11. resume version
12. custom domain / HTTPS
13. error pages
14. form delivery
15. dependency audit

Configure deployment for the chosen platform using environment variables safely. Do not commit secrets.
```

### PHASE 15 — Final anti-AI-vibe audit and professional review

```text
Review the entire finished portfolio as if you are simultaneously:
- a senior software engineer screening an intern/junior candidate,
- a technical recruiter scanning for 60 seconds,
- a product designer checking craft,
- an accessibility reviewer,
- and a skeptical hiring manager checking whether claims are real.

Produce five audits:
A. Professional credibility
B. Technical depth
C. Visual originality
D. Usability/accessibility
E. Performance/maintainability

Specifically find and remove:
- generic AI phrases
- unnecessary gradients/glows
- duplicate card patterns
- meaningless decorative code/terminal elements
- vague project summaries
- unsupported skill claims
- empty statistics
- excessive animation
- awkward responsive compromises
- placeholder text/assets

Then propose the 10 highest-impact final improvements, ordered by value. Implement safe high-confidence fixes, but do not invent content to close evidence gaps. Leave explicit TODO items for information only the portfolio owner can provide.
```

### PHASE 16 — Content personalization session

```text
This session is content-only. Do not redesign the site unless a real content constraint proves the design cannot support the portfolio owner’s evidence.

Using the verified information I provide, replace placeholders and improve copy.

Rules:
- Never invent a metric, role, certificate, employer, award, technology, responsibility, or outcome.
- Preserve the owner’s real level of experience.
- Prefer precise technical verbs.
- Convert soft-skill claims into evidence.
- Keep project case studies concise but technically meaningful.
- If a project was academic, say so confidently instead of trying to make it sound like paid client work.
- If a repository is private or a live demo is unavailable, explain that cleanly without apologizing.
- Flag any statement that sounds inflated or cannot be supported.

For each project, optimize the writing in this order:
Context -> Problem -> Constraints -> Personal Role -> Decisions -> Implementation -> Quality -> Outcome -> Reflection.

At the end, produce a list of any missing proof assets that would materially strengthen the portfolio.
```

---

## 11. Master Prompt for a Fresh Copilot Session

Use this when a new Copilot chat has little context:

```text
You are helping build a distinctive, production-quality personal portfolio for an IT undergraduate.

Read these files before making changes:
1. .github/copilot-instructions.md
2. PROJECT_PLAN.md if it exists
3. README.md
4. package.json and framework config
5. the content/data schemas
6. the files directly relevant to my requested change

Portfolio identity:
- Evidence-first technical portfolio
- Editorial / engineering-notebook visual language
- Strong professional credibility over decoration
- No generic AI portfolio aesthetic
- No invented content
- Accessible, responsive, performant, type-safe, maintainable

Before editing, briefly state:
- what you found,
- your implementation plan,
- files you expect to touch,
- any risk to existing behavior.

Then perform only the requested phase/change. After editing, run the appropriate lint/typecheck/tests/build checks available in the repository and summarize results. Do not claim a test passed if you did not run it.

My task for this session is:
[PASTE TASK HERE]
```

---

## 12. Optional “Wow” Features That Still Look Professional

Select sparingly. A portfolio is stronger with two excellent ideas than ten gimmicks.

### 12.1 Capability-to-evidence graph

A compact interactive view maps capabilities to projects: selecting “API Design” highlights the projects, decisions, and artifacts proving that capability. It creates a strong “show me the evidence” experience.

### 12.2 Project architecture explorer

For one flagship project, create an accessible SVG architecture diagram. Selecting a component opens a short explanation: responsibility, technology, data flow, and important trade-off.

### 12.3 Build log

A short, curated chronological log shows meaningful development events: initial prototype, architecture change, difficult bug, performance fix, deployment, retrospective. This makes student work feel like real engineering practice.

### 12.4 Technical colophon

A small page/section explains how the portfolio itself was designed and built: stack, accessibility decisions, performance budget, typography choices, deployment, and known trade-offs. This turns the site itself into a mini case study.

### 12.5 Command palette

Keyboard shortcut opens a quick navigator: pages, projects, skills/capabilities, resume, contact. Only add it if it is extremely fast and keyboard accessible.

### 12.6 Evidence mode

A subtle toggle can annotate the site with small markers showing “proof”: repository, diagram, certificate, live demo, test report, talk, write-up. This is genuinely distinctive if executed calmly.

---

## 13. Quality Gates and Definition of Done

### Gate 1 — Content integrity

- [ ] No fabricated content.
- [ ] Every claim has appropriate evidence or is phrased conservatively.
- [ ] Academic projects are labeled honestly.
- [ ] Private information removed.

### Gate 2 — Visual originality

- [ ] No generic glow/gradient hero.
- [ ] No logo-wall skills section.
- [ ] No percentage skill bars.
- [ ] No excessive cards.
- [ ] Typography and grid create identity before animation.
- [ ] Signature components feel specific to this portfolio.

### Gate 3 — Technical quality

- [ ] Typecheck passes.
- [ ] Lint passes.
- [ ] Production build passes.
- [ ] Critical tests pass.
- [ ] No secrets committed.
- [ ] No obvious console errors.

### Gate 4 — Accessibility

- [ ] Keyboard usable.
- [ ] Focus visible.
- [ ] Skip link works.
- [ ] Contrast checked.
- [ ] Reduced motion works.
- [ ] Forms accessible.
- [ ] Diagrams/media have alternatives.
- [ ] Mobile menu focus behavior correct.

### Gate 5 — Performance

- [ ] Images optimized.
- [ ] Font use controlled.
- [ ] Non-critical media lazy-loaded.
- [ ] Client JavaScript minimized.
- [ ] LCP/INP/CLS targets measured where possible.

### Gate 6 — Hiring-manager test

A reviewer can answer within 60 seconds:

- What role is this person aiming for?
- What can they build?
- Which project proves it best?
- What exactly did they do?
- How can I verify the work?
- How do I contact them?

---

## 14. Suggested Development Roadmap

**Milestone A — Foundation:** Phases 0–3. Repository, content model, design system, shell.

**Milestone B — Core professional story:** Phases 4–8. Homepage, profile, work, case studies, credentials.

**Milestone C — Depth:** Phases 9–11. Notes, contact, signature interactions.

**Milestone D — Production hardening:** Phases 12–15. Accessibility, performance/SEO, testing/deployment, final audit.

**Milestone E — Real personalization:** Phase 16. Replace placeholders with verified owner content and evidence assets.

Do not begin with 3D/motion experiments. The first “wow” should be the project evidence and layout craft.

---

## 15. Source Standards Used for Quality Targets

These references are not design templates; they support objective quality requirements:

- W3C Web Content Accessibility Guidelines (WCAG) 2.2: https://www.w3.org/TR/WCAG22/
- W3C WCAG overview: https://www.w3.org/WAI/standards-guidelines/wcag/
- Google/web.dev Core Web Vitals: https://web.dev/articles/vitals
- Webflow’s 2026 trend coverage was reviewed only as trend context; the design in this specification intentionally avoids directly copying trend templates.

---

## 16. Final Principle

A “super portfolio” is not the portfolio with the most animations, sections, technologies, or certificates. It is the one where a reviewer sees a coherent professional identity and can quickly verify the owner’s ability through **well-explained work, deliberate design, real evidence, and production-quality implementation**.
