# Portfolio Copilot Phase Prompts

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
