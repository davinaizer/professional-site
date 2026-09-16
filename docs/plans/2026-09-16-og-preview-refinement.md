---
title: Refine Open Graph metadata and social preview
status: approved
createdAt: 2026-09-16
approvedAt: 2026-09-16
---

# Refine Open Graph metadata and social preview

## Objective

Improve the existing publication metadata against the `datakreo.com` OpenGraph.to baseline and replace the generic social-preview placeholder with a project-specific branded image.

## Scope

- Make the HTML title consistent with the descriptive Open Graph title.
- Add `og:locale`, `og:image:secure_url`, and `og:image:type`.
- Add Twitter image alt text.
- Replace `public/social-preview.png` with a branded `1200x630` PNG using the existing dark and purple visual identity.
- Preserve the existing canonical URL, description, route-independent metadata model, favicon, and manifest metadata.

## Exclusions

- No `twitter:site` without an approved X/Twitter account.
- No JSON-LD, `hreflang`, route-specific metadata, or runtime metadata dependency.
- No deployment or live OpenGraph.to scan.
- No route, application-content, or architecture changes.

## Completion Criteria

1. The approved metadata additions are present in `index.html` and use consistent values.
2. The replacement preview is a readable, branded `1200x630` PNG with safe social-preview margins.
3. The metadata image URL and generated public asset remain aligned.
4. `pnpm validate` and `pnpm build` pass.
5. The generated metadata and image are manually inspected.

## Validation

- `pnpm validate`
- `pnpm build`
- Inspect `dist/index.html` and `dist/social-preview.png`.
- Verify the PNG format and dimensions.
