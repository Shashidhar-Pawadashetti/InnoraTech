# INNORATECH Website — Project Initialization & Development Guide v1.0

> **Document Status:** Active Execution  
> **Version:** 1.0  
> **Companion Documents:** [PRD.md](file:///c:/Users/shash/OneDrive/Desktop/INNORATECH/website_v1/PRD.md) • [UI_UX_SPECIFICATION.md](file:///c:/Users/shash/OneDrive/Desktop/INNORATECH/website_v1/UI_UX_SPECIFICATION.md) • [TECHNICAL_ARCHITECTURE.md](file:///c:/Users/shash/OneDrive/Desktop/INNORATECH/website_v1/TECHNICAL_ARCHITECTURE.md)  
> **Core Directive:** *"Establish a clean, production-ready codebase before building the actual UI. Static-first, serverless-when-needed."*

---

## Table of Contents
1. [Development Baseline](#1-development-baseline)
2. [Step 1 — Node.js & Tooling Environment Verification](#2-step-1--nodejs--tooling-environment-verification)
3. [Step 2 — Project Scaffolding & Setup](#3-step-2--project-scaffolding--setup)
4. [Step 3 — Version Control & Git Initialization](#4-step-3--version-control--git-initialization)
5. [Step 4 — Core Dependencies Installation](#5-step-4--core-dependencies-installation)
6. [Step 5 — Project Directory Structure Blueprint](#6-step-5--project-directory-structure-blueprint)
7. [Step 6 — Official Brand Assets Pipeline](#7-step-6--official-brand-assets-pipeline)
8. [Step 7 — Design Tokens & CSS Custom Properties](#8-step-7--design-tokens--css-custom-properties)
9. [Step 8 — Global Typography System](#9-step-8--global-typography-system)
10. [Step 9 — Core UI Primitives & Component Catalog](#10-step-9--core-ui-primitives--component-catalog)
11. [Step 10 — Global Shell Layout (Navbar & Footer)](#11-step-10--global-shell-layout-navbar--footer)
12. [Step 11 — Homepage Skeleton Structure](#12-step-11--homepage-skeleton-structure)
13. [Step 12 — Site Pages Implementation Phases](#13-step-12--site-pages-implementation-phases)
14. [Step 13 — Content Decoupling Architecture](#14-step-13--content-decoupling-architecture)
15. [Step 14 — Contact & Lead Ingest Engine](#15-step-14--contact--lead-ingest-engine)
16. [Step 15 — Environment Variables & Secrets Hygiene](#16-step-15--environment-variables--secrets-hygiene)
17. [Step 16 — Vercel Deployment & Preview Configuration](#17-step-16--vercel-deployment--preview-configuration)
18. [Step 17 — Git Branching & Review Workflow](#18-step-17--git-branching--review-workflow)
19. [Step 18 — Quality Checks & Typecheck Scripts](#19-step-18--quality-checks--typecheck-scripts)
20. [Step 19 — Anti-Feature Creep Directives](#20-step-19--anti-feature-creep-directives)
21. [Step 20 — 8-Sprint Execution Matrix](#21-step-20--8-sprint-execution-matrix)
22. [Step 21 — Critical Security Notes & Patches](#22-step-21--critical-security-notes--patches)

---

## 1. Development Baseline

| Component | Target Baseline | Notes |
| :--- | :--- | :--- |
| **Framework** | Next.js 16.x (App Router) | Active LTS release |
| **Language** | TypeScript | Strict type checking enabled |
| **UI Library** | React 19.x | React Server Components by default |
| **Styling** | Tailwind CSS + CSS Variables | Design tokens bound to CSS variables |
| **Iconography** | Lucide React | Uniform 2px line icons |
| **Validation** | Zod | Shared client/server validation |
| **Database** | Neon PostgreSQL | Serverless pooling driver |
| **ORM** | Drizzle ORM + Drizzle Kit | Lightweight SQL migrations |
| **Transactional Email** | Resend | React Email templates |
| **Anti-Bot / Security** | Cloudflare Turnstile | Privacy-preserving CAPTCHA |
| **Hosting & Analytics** | Vercel & @vercel/analytics | Global Edge deployment |
| **Package Manager** | npm | Lockfile committed |

---

## 2. Step 1 — Node.js & Tooling Environment Verification
Requires Node.js `>= 20.9.0` (Active LTS).

---

## 3. Step 2 — Project Scaffolding & Setup
Scaffold using Next.js App Router:
- TypeScript: `Yes`
- ESLint: `Yes`
- Tailwind CSS: `Yes`
- `src/` directory: `Yes`
- App Router: `Yes`
- Import alias: `@/*`

---

## 4. Step 3 — Version Control & Git Initialization
Initialize clean git tree and enforce feature-branch workflow.

---

## 5. Step 4 — Core Dependencies Installation
Production dependencies:
- `lucide-react`, `zod`, `drizzle-orm`, `@neondatabase/serverless`, `resend`, `@vercel/analytics`, `clsx`, `tailwind-merge`
Dev dependencies:
- `drizzle-kit`, `@types/node`, `@types/react`, `@types/react-dom`

---

## 6. Step 5 — Project Directory Structure Blueprint
Follow standard Next.js App Router directory tree with `src/app`, `src/components`, `src/data`, `src/db`, `src/lib`, `src/types`, and `public/brand`.

---

## 7. Step 8 — Design Tokens & Typography
- Primary Brand Blue (`#0284C7`), dark slate headings (`#0F172A`), light neutral background (`#FFFFFF`/`#F8FAFC`).
- 8px spacing scale, Inter font family.

---

## 8. 8-Sprint Execution Matrix
- **Sprint 1 — Foundation:** Tooling, Git, brand tokens, directory tree.
- **Sprint 2 — Design System:** Primitives (Button, Card, Badge, Input, Container).
- **Sprint 3 — Homepage:** Hero, Problems, Solutions, Services, Process, Work, Why, CTA.
- **Sprint 4 — Remaining Pages:** Solutions verticals, Services, Work case studies, Process, About, Contact.
- **Sprint 5 — Backend & Ingest:** Neon Postgres, Drizzle, Zod, Turnstile, `/api/leads`, Resend.
- **Sprint 6 — SEO & Analytics:** Metadata, sitemap, robots, OG assets, Vercel Analytics.
- **Sprint 7 — QA:** Responsive, a11y, cross-browser, form validation, security.
- **Sprint 8 — Launch:** Custom domain, HTTPS, production email DNS, smoke testing.
