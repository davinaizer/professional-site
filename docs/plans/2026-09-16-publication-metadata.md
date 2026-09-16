---
title: Complete publication metadata
status: approved
createdAt: 2026-09-16
approvedAt: 2026-09-16
---

# Complete publication metadata

## Objective

Complete the remaining static publication metadata for the confirmed production domain `https://davi-naizer.pages.dev/`.

## Scope

- Add a production meta description and canonical root URL.
- Add Open Graph and `summary_large_image` social metadata.
- Add a temporary static social-preview placeholder.
- Add an indexable `robots.txt` and sitemap for the supported public routes.
- Preserve the existing favicon, Apple touch icon, and web manifest assets.

## Exclusions

- No screenshot-generation workflow.
- No route-specific metadata architecture.
- No runtime metadata dependency.
- No routing, deployment, application-content, or live-production verification changes.
- No replacement of the temporary social-preview placeholder in this task.

## Completion Criteria

1. `index.html` contains the approved description, canonical URL, Open Graph metadata, and social-preview metadata.
2. The social-preview placeholder is emitted as a raster asset suitable for social crawlers.
3. `robots.txt` allows indexing and references the production sitemap.
4. The sitemap lists the supported public application routes.
5. Existing favicon and manifest behaviour remains intact.
6. Repository validation and the production build pass, and generated metadata and assets are manually inspected.

## Validation

- `pnpm validate`
- `pnpm build`
- Inspect `dist/index.html`, the social-preview asset, `robots.txt`, and `sitemap.xml`.
