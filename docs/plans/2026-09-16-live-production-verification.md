---
title: Verify live production routes and links
status: approved
createdAt: 2026-09-16
approvedAt: 2026-09-16
---

# Verify live production routes and links

## Objective

Verify that the deployed Cloudflare Pages application serves every supported
client-side route directly and after refresh, and that its public navigation,
resume, contact, project, case-study, and experience links resolve correctly.

## Scope

- Direct entry and refresh for `/`, `/experience`, `/work`, `/projects`, `/case-studies`, `/resume`, and `/contact`.
- Resume download and public email and LinkedIn destinations.
- Project, case-study, and experience-anchor links.
- Targeted fixes only when a check fails.

## Exclusions

- Production performance, accessibility, SEO, best-practice, responsive, or cross-browser measurements.
- New routes, features, deployment architecture, or automated production smoke-test infrastructure.
- Unrelated worktree changes.

## Completion Criteria

1. Every supported route returns the application document on direct entry and renders after refresh.
2. Resume download serves the intended PDF from the production URL.
3. Email and LinkedIn links expose the intended destinations.
4. Project, case-study, and experience-anchor links resolve to the intended production content.
5. Any required correction remains task-scoped and passes repository validation and the production build.
6. Verification evidence is recorded in `docs/evidence/2026-09-16-live-production-verification.md`.

## Validation

- Manual browser checks against `https://davi-naizer.pages.dev/`.
- `pnpm validate`.
- `pnpm build`.
- Record route status, refresh status, link target, and result in the evidence record.
