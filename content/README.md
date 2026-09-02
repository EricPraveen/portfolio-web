# Portfolio Content Architecture & Owner Guide

> **Core Principle:** Absolute truthfulness — zero invented metrics, credentials, employers, or project outcomes. All content in this directory lives in strongly typed data modules. You do not need to modify any TSX / React components to update your portfolio.

---

## 1. Directory Structure

```text
content/
├── types/                      # TypeScript type definitions and schemas
│   ├── content.types.ts        # Core primitives (ProjectStatus, EvidenceLink, SocialLink, DateRange)
│   ├── profile.types.ts        # Profile, Education, Experience, Capability, OperatingPrinciple
│   ├── project.types.ts        # Project, ProjectDecision, ProjectQuality, ProjectArchitecture
│   ├── credential.types.ts     # Credential, Award, Hackathon
│   ├── note.types.ts           # Note, NoteType
│   └── index.ts                # Unified type exports
├── profile.data.ts             # Personal identity, bio, availability, contact, operating principles
├── education.data.ts           # Degree, university, coursework, honors, capstone reference
├── experience.data.ts          # Internships, lab research, student technical roles
├── skills.data.ts              # Capability matrix grouped by engineering domains
├── projects.data.ts            # Flagship & secondary project case studies
├── credentials.data.ts         # Verified certifications, awards, and hackathon records
├── notes.data.ts               # Technical field notes and debugging postmortems
└── README.md                   # This instruction guide
```

---

## 2. How to Replace Placeholder Data

All placeholder markers are clearly wrapped in brackets like `[YOUR FULL NAME]` or `[email@example.com]`.

### A. Updating Identity & Contact (`content/profile.data.ts`)
1. **`fullName` & `preferredName`**: Replace with your actual name.
2. **`title`**: State your primary domain (e.g., `Undergraduate Systems & Backend Engineer`).
3. **`location`**: Update `city`, `country`, `timezone`, and `remotePreference` (`'Remote' | 'Hybrid' | 'On-site' | 'Flexible'`).
4. **`availability`**: Set `status` (`'Available' | 'Exploring' | 'Committed'`), your current academic stage, target roles, and start date.
5. **`thesisStatement`**: 1–2 sentences summarizing the specific technical systems you engineer.
6. **`shortBio` & `longBio`**: Authoritative summary of your technical background and philosophy.
7. **`contactEmail`**: Your direct professional contact email.
8. **`socialLinks`**: Valid URLs to your GitHub, LinkedIn, and other technical profiles.
9. **`resume`**: Place your PDF in `/public/documents/resume.pdf` and update `lastUpdated`.

### B. Updating Academic History (`content/education.data.ts`)
1. **`institution`**: University or college name.
2. **`degree` & `major`**: Exact degree title (e.g., `Bachelor of Science`, `Information Technology`).
3. **`dates`**: Start year and graduation / expected graduation year.
4. **`relevantCoursework`**: List of completed technical courses.
5. **`capstone`**: Set `title`, `description`, and optionally point `slug` to one of your projects in `projects.data.ts`.
6. **`gpa` & `honors`**: Optional academic recognitions.

### C. Updating Experience & Internships (`content/experience.data.ts`)
1. **`organization` & `role`**: Employer / Lab name and your technical title.
2. **`type`**: `'Internship' | 'Full-time' | 'Part-time' | 'Research' | 'Teaching Assistant' | 'Student Technical Role'`.
3. **`dates`**: Start and end months/years.
4. **`context`**: Brief overview of the team or system scope.
5. **`responsibilities`**: Concrete action-oriented engineering bullets.
6. **`verifiedOutcomes`**: Quantifiable or observable results (only if factually verified).
7. **`linkedProjectSlugs`**: Array of project slugs corresponding to items in `projects.data.ts`.

### D. Updating Verified Capabilities (`content/skills.data.ts`)
1. Group your capabilities into domain categories (`Systems & Backend`, `Frontend & UI`, `Databases & Storage`, `Cloud & DevOps`).
2. Set `level`: `'Working Knowledge' | 'Proficient' | 'Advanced Production Exposure'`.
3. Set `context`: Concrete sentence describing how you use the technology.
4. Set `appliedInProjectSlugs`: Slugs of projects where you demonstrated this capability.

### E. Updating Verified Credentials & Recognition (`content/credentials.data.ts`)

> **Guiding Principle:** Credentials serve to corroborate and support demonstrated engineering skills rather than substitute for working software and deep project case studies. Zero vanity badges or invented certifications.

1. **`group`**: Choose the appropriate evidence classification:
   - `'certification'`: Verified industry & cloud credentials (AWS, Cisco, CompTIA, CNCF).
   - `'award'`: Professional, institutional, or industry honors.
   - `'hackathon'`: Competitive hackathons and engineering sprints.
   - `'academic'`: Dean's lists, scholarships, and departmental honors.
   - `'opensource'`: Upstream PR contributions, maintainer roles, community mentorship.
   - `'research'`: Technical talks, workshops, symposium presentations, or papers.
2. **`title` & `issuer`**: Exact official title and conferring organization.
3. **`verificationUrl`**: Direct URL to issuing body verification ledger / badge portal.
4. **`credentialId` & `isCredentialIdSafe`**: If displaying a license/credential identifier, ensure sensitive serials are masked (e.g. `AWS-PSA-****9412`) and set `isCredentialIdSafe: true`.
5. **`skillsDemonstrated`**: Array of concrete capabilities verified by this record.
6. **`relatedProjectSlug`**: Link to corresponding flagship or secondary project case study in `projects.data.ts`.
7. **`featured`**: Set `true` to highlight as a primary spotlight evidence card; `false` items appear in the dense tabular archive ledger.
8. **`previewDoc`**: Optional image/PDF preview document metadata (`src`, `type: 'image' | 'pdf'`, `alt`, `caption`).


---

## 3. Flagship Project Case Study Schema (`content/projects.data.ts`)

Every flagship project in `projects.data.ts` supports the complete engineering storytelling model:

| Field | Type | Description |
|---|---|---|
| `slug` | `string` | URL slug (e.g., `distributed-task-orchestrator`). Must be lowercase alphanumeric + hyphens. |
| `title` | `string` | Full project name. |
| `headline` | `string` | One-sentence summary of the project's technical purpose. |
| `featured` | `boolean` | `true` to highlight on the homepage index. |
| `order` | `number` | Display sort order (lower numbers appear first). |
| `status` | `ProjectStatus` | `'shipped'` \| `'active'` \| `'experimental'` \| `'archived'`. |
| `category` | `string` | Category label (e.g., `Distributed Systems & Backend`). |
| `period` | `string` | Timeframe (e.g., `Nov 2025 – Feb 2026`). |
| `role` | `string` | Overall role on the project. |
| `teamSize` | `number?` | Optional team member count (omit for solo projects). |
| `isAcademic` | `boolean?` | `true` if built as coursework / capstone. |
| `context` | `string` | Why the project was initiated and under what circumstances. |
| `technologies` | `string[]` | Primary tools, languages, databases, and frameworks. |
| `problem` | `string` | The precise technical problem or failure mode being solved. |
| `constraints` | `string[]` | Strict hardware, latency, concurrency, or budgetary constraints. |
| `personalRole` | `string` | Specific subsystems you personally architected and owned. |
| `contributions` | `string[]` | List of concrete engineering implementations. |
| `architecture.summary` | `string` | High-level data flow and system component breakdown. |
| `architecture.textAlternative` | `string?` | Accessible text description for screen readers. |
| `decisions` | `ProjectDecision[]` | Architectural choices with `decision`, `why`, `tradeoff`, and `alternativesConsidered`. |
| `hardProblemStory` | `HardProblemStory?` | Optional deep-dive debugging postmortem: `problem`, `investigation`, `solution`, `takeaway`. |
| `quality.testing` | `string?` | Test framework, unit/integration coverage details. |
| `quality.security` | `string?` | Input sanitization, auth, cryptography, CSP details. |
| `quality.accessibility` | `string?` | WCAG compliance, keyboard navigation, screen reader checks. |
| `quality.performance` | `string?` | Benchmarked throughput, p95 latency, bundle sizes. |
| `outcomes` | `string[]` | Verified results and production metrics. |
| `lessonsLearned` | `string[]` | Engineering principles learned from building the system. |
| `v2Improvements` | `string[]` | Planned future architectural enhancements. |
| `evidence` | `EvidenceLink[]` | Links to GitHub repository, live demo, architecture docs, or paper. |
| `coverImage` | `ProjectImage` | Cover graphic with `src`, `alt`, `width`, `height`, and `caption`. |
| `gallery` | `ProjectImage[]?` | Optional additional screenshots or diagrams. |
| `repoUrl`, `demoUrl`, `docsUrl` | `string?` | Direct link convenience shortcuts. |

---

## 4. Project Status Values

- **`shipped`**: Completed and verified system or production deployment.
- **`active`**: Currently undergoing active development and testing.
- **`experimental`**: Proof-of-concept, lab exploration, or prototype.
- **`archived`**: Legacy codebase preserved for historical evidence.

---

## 5. Verification & Integrity Checks

After editing any data file, verify that all types and links remain unbroken:

```bash
# 1. Typecheck all files
npm run typecheck

# 2. Build and verify static generation across all routes
npm run build
```

The system automatically validates:
1. Slug format and uniqueness.
2. Required fields across all data entities.
3. Referential integrity: links between skills, experience, credentials, notes, and existing project slugs.
4. Handling of optional fields so missing content does not break page layouts.
