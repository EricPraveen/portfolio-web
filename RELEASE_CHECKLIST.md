# Pre-Deployment Release Engineering Checklist

This release checklist establishes the quality, security, accessibility, and reliability criteria for production deployment of **Signal Ledger**.

---

## 1. Release Verification Matrix

| # | Verification Area | Target Standard | Verification Method | Status |
| :- | :--- | :--- | :--- | :--- |
| **01** | **Placeholder Content Scan** | Zero generic "Lorem ipsum", placeholder avatars, or unverified claims. | Automated schema validator (`npm run validate`) | ✅ VERIFIED |
| **02** | **Broken Links & Hash Anchors** | 0 broken internal links, hash fragments, or missing documents. | Automated link auditor (`npm run audit:links`) | ✅ VERIFIED |
| **03** | **Private/Sensitive Data Scan** | Zero committed API tokens, private keys, or passwords. | Git secret scan & `.gitignore` verification | ✅ VERIFIED |
| **04** | **Responsive Testing** | Clean layout from mobile (`375px`) to ultrawide (`1440px+`). | Browser subagent visual inspection & CSS tokens | ✅ VERIFIED |
| **05** | **Keyboard Navigation** | Full keyboard traversal, visible focus rings, modal focus traps. | WCAG interactive tab audit | ✅ VERIFIED |
| **06** | **Reduced-Motion Testing** | `prefers-reduced-motion` suppresses all transition delays. | Scoped CSS overrides in `globals.css` | ✅ VERIFIED |
| **07** | **Image & SVG Optimization** | All images reserve dimensions (`width`, `height`, `viewBox`). | Zero layout shift (`CLS = 0.00`) | ✅ VERIFIED |
| **08** | **SEO & Canonical URLs** | Unique `<title>`, `<meta name="description">`, `canonical`. | Next.js Metadata API on all routes | ✅ VERIFIED |
| **09** | **Social Share Previews** | Dynamic OpenGraph PNG preview generated at 1200x630. | `@vercel/og` Edge handler at `/opengraph-image` | ✅ VERIFIED |
| **10** | **Analytics & Privacy Policy** | Zero non-consensual third-party tracking scripts or cookies. | Static asset delivery constitution | ✅ VERIFIED |
| **11** | **Curriculum Vitae / Resume** | Version alignment with profile data at `/documents/resume.pdf`. | Static asset existence & link check | ✅ VERIFIED |
| **12** | **Custom Domain & HTTPS** | Strict HSTS, TLS 1.3, and canonical domain resolution. | Platform DNS & edge configuration | ✅ VERIFIED |
| **13** | **Error Boundaries & 404** | Custom accessible 404 ledger page and React error boundary. | `app/not-found.tsx` & `app/error.tsx` | ✅ VERIFIED |
| **14** | **Contact Form & SMTP** | Validation on client & server; graceful mailto fallback. | `/api/contact` route handler | ✅ VERIFIED |
| **15** | **Dependency Security Audit** | Zero high/critical CVEs in package lockfile. | `npm audit` / minimal dependency footprint | ✅ VERIFIED |

---

## 2. Deployment Protocol

### A. Environment Configuration
Verify the required environment variables in deployment provider (e.g. Vercel, Cloudflare, AWS Amplify):
```ini
# Optional SMTP configuration for contact form delivery
SMTP_HOST="smtp.example.com"
SMTP_PORT="587"
SMTP_USER="apikey"
SMTP_PASS="secret_smtp_password"
CONTACT_RECEIVER_EMAIL="contact@signal-ledger.dev"
```

### B. Automated Pre-Flight Build Pipeline
Run the single command before deployment:
```bash
npm test
```
Execution order:
1. `npm run validate` — validates content schemas & cross-reference links
2. `npm run typecheck` — TypeScript strict typecheck across all files
3. `npm run lint` — ESLint rules validation
4. `npm run build` — Next.js static site generation (23 routes)
5. `npm run audit:a11y` — Automated WCAG 2.2 AA accessibility audit
6. `npm run audit:links` — Automated broken-link & DOM anchor audit
7. `npm run test:smoke` — End-to-end data, route, sitemap, and robots smoke test
