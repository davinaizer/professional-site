---
title: Establish public evidence governance rules
status: approved
createdAt: 2026-08-24
approvedAt: 2026-08-24
---

# Establish public evidence governance rules

## Objective

Define concise editorial rules for evidence confidence, contribution boundaries, and confidentiality so future public evidence remains accurate, defensible, reusable, and safe to publish.

## Scope

- Record the accepted governance rules in `docs/DECISIONS.md`.
- Treat confidence, attribution, and confidentiality as publication gates for manually curated public content.
- Preserve the existing public TypeScript contracts and static content boundary.
- Keep private source-governance metadata outside the public repository and runtime model.

## Exclusions

- No new claims, projects, case studies, engineering evidence, or public content.
- No changes to the evidence or professional TypeScript contracts.
- No public confidence, provenance, confidentiality, or publication-status fields.
- No PKM integration, runtime validation, CMS, routes, rendering, or navigation changes.

## Completion criteria

1. The decision defines evidence confidence and unsupported-claim handling.
2. The decision distinguishes personal, team, client, and organisational contribution, measured and qualitative outcomes, and production and exploratory work.
3. The decision defines a public-safe confidentiality boundary.
4. The decision confirms that governance metadata remains outside the public content model.
5. The documentation remains consistent with the product requirements, roadmap, architecture, and existing evidence decisions.

## Validation

- Manual review of the decision against `PRODUCT_REQUIREMENTS.md`, `ROADMAP.md`, `docs/ARCHITECTURE.md`, and the existing content contracts.
- Confirm that no source, runtime, or public content files require changes.
