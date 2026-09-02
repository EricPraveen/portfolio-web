# Copilot Instructions â€” Evidence-First IT Portfolio

Use this file as `.github/copilot-instructions.md` in the portfolio repository.

## Mission

Build and maintain a distinctive, production-quality personal portfolio for an **IT undergraduate**. The site must represent the owner as a strong emerging IT professional through verified evidence, technical reasoning, careful writing, accessible UX, performance, and implementation quality.

This repository must **not** look or read like a generic AI-generated developer portfolio.

## Non-negotiable truthfulness

- Never invent personal details, project metrics, employers, internships, certificates, awards, grades, client names, testimonials, technologies used, responsibilities, or outcomes.
- Use clear placeholders/TODO markers when information is missing.
- Never convert an academic project into fake commercial/client work.
- Never fabricate Lighthouse scores, test results, user counts, accuracy values, response times, revenue, or other impact numbers.
- If a claim cannot be supported, phrase it conservatively or flag it for the owner.

## Design constitution: Signal Ledger

The visual language is **technical editorial + engineering notebook + modern product craft**.

Primary palette:
- Bone Paper `#F2EFE8`
- Mineral Ink `#171A1D`
- Signal Cobalt `#2F5BFF`
- Lab Chartreuse `#C9F24A` â€” rare highlight only
- Oxide `#C45B43` â€” rare secondary highlight
- Steel `#8C949C`

Design rules:
- Typography, spacing, alignment, rules, diagrams, metadata, and project imagery create the identity.
- Prefer controlled asymmetry and a visible grid.
- Use large visual moments sparingly.
- Not every section should be a rounded card.
- Make project case studies feel like engineering reports that are enjoyable to read.

## Anti-AI-template rules

Do not add unless explicitly requested with a strong rationale:
- purple/cyan gradient glow backgrounds
- glassmorphism everywhere
- floating 3D cubes/spheres/particles
- typewriter hero text
- custom cursor gimmicks
- scroll-jacking
- percentage skill bars
- star ratings for skills
- giant unstructured tech-logo walls
- fake terminal windows as decoration
- generic bento-card SaaS layout across the whole page
- fake testimonials or statistics
- â€œHi, Iâ€™m X, a passionate developerâ€¦â€ filler

Avoid AI-flavored copy such as â€œleveraging cutting-edge technologies to craft seamless experiences.â€ Use precise, verifiable technical language.

## Content architecture

Personal information must live in typed content/data modules. Do not scatter real profile data through components.

Important content types:
- Profile
- Education
- Experience
- Capability/Skill
- Project
- ProjectDecision
- EvidenceLink
- Credential
- Award
- Hackathon/Competition
- Note/Technical Writing
- SocialLink

Flagship projects must support:
- context/problem
- constraints
- role/team size
- exact contributions
- technologies
- architecture/approach
- decisions and trade-offs
- hard problem/debugging story
- testing
- security
- accessibility
- performance
- outcomes only if verified
- lessons
- v2 improvements
- repo/demo/docs/artifact evidence

## Project storytelling standard

Use this sequence whenever possible:

**Context â†’ Problem â†’ Constraints â†’ Personal Role â†’ Decisions â†’ Implementation â†’ Quality â†’ Outcome â†’ Reflection**

Projects must show reasoning, not only features and screenshots.

## Capability presentation

Do not use percentages or self-rated stars. Show capabilities through evidence.

Preferred pattern:
- capability category
- technologies/tools
- level of exposure stated conservatively if needed
- links to projects/experience where demonstrated

## Engineering standards

- TypeScript strict mode.
- Favor server/static rendering for content where appropriate.
- Keep client-side JavaScript purposeful.
- Reusable components, but no premature over-abstraction.
- Design tokens/CSS variables for colors, spacing, typography, borders, and motion.
- Semantic HTML first.
- Explicit image dimensions and optimized assets.
- Environment variables for secrets; never commit secrets.
- Content changes should not require rewriting presentation components.

## Accessibility standard

Target WCAG 2.2 AA as the practical bar.

Always preserve:
- semantic landmarks
- correct heading hierarchy
- keyboard operation
- clear focus-visible states
- skip link
- sufficient contrast
- touch-friendly targets
- labeled forms and accessible errors/status
- reduced-motion support
- alt text / decorative image handling
- non-color status indicators
- focus not obscured by sticky UI
- accessible mobile navigation
- accessible diagrams or text alternatives

Never make essential information hover-only.

## Performance targets

Treat these as release targets and measure honestly:
- LCP <= 2.5s at p75
- INP <= 200ms at p75
- CLS <= 0.1 at p75

Prefer:
- optimized responsive images
- lazy-loading non-critical media
- controlled font weights/files
- minimal client boundaries
- CSS transitions before heavy animation libraries for simple effects

Avoid adding large libraries for minor decoration.

## Motion standard

Motion must communicate state, hierarchy, relationship, or transition.

- Respect `prefers-reduced-motion`.
- Avoid continuous decorative movement.
- Avoid scroll-jacking.
- Avoid motion that delays navigation or reading.
- Core functionality must work with motion disabled.

## Code-change behavior

Before editing:
1. Inspect relevant existing files.
2. Preserve the current architecture when it is sound.
3. State a short implementation plan in the Copilot response.
4. Identify files likely to change.

After editing:
1. Run the relevant lint/typecheck/tests/build commands that are available.
2. Report only checks actually run.
3. Summarize changed files.
4. Call out remaining TODO content or risks.

Do not perform unrelated rewrites during a focused task.

## Quality gate before considering a feature complete

Ask:
- Does this strengthen professional credibility?
- Does it show evidence or improve access to evidence?
- Is it understandable without animation?
- Does it work on mobile and keyboard?
- Is the copy specific rather than generic?
- Is the component actually reusable, or are we abstracting too early?
- Did we preserve performance?
- Could this be mistaken for a generic AI portfolio pattern?

If the last answer is yes, redesign it.

## Writing style

Preferred verbs:
- designed
- implemented
- tested
- integrated
- deployed
- documented
- debugged
- refactored
- investigated
- measured
- migrated
- optimized

Avoid inflated adjectives. Let evidence create confidence.

## Final principle

The website itself is a portfolio project. Its strongest signals should be **technical judgment, design restraint, evidence quality, accessibility, performance, and clear communication** â€” not the number of visual effects.