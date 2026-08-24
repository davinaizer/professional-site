---
title: Select a small set of distinct evidence projects
status: approved
createdAt: 2026-08-24
approvedAt: 2026-08-24
---

# Select a small set of distinct evidence projects

## Objective

Select the smallest coherent set of public-safe project narratives that adds distinct evidence beyond the existing experience timeline and gives the later Selected Projects implementation a bounded content scope.

## Accepted selection

1. **Vessel List Template Administration**
   - Supporting experience: `signal-group-senior-frontend-software-engineer-2023-2024`
   - Evidence dimension: production product/frontend delivery, self-service workflow, role-based behaviour, validation, testing, fixes, and release.

2. **Internal content-production workflow**
   - Supporting experiences: `gamesys-ballys-senior-frontend-engineer-2020-2022`, `ballys-interactive-frontend-tech-lead-2022-2023`
   - Evidence dimension: workflow-oriented product engineering, reusable tooling, validation, reviewable delivery, and operational problem solving.
   - Public boundary: use a safe abstraction; do not publish private employer systems, internal project metadata, or unsupported ownership or impact claims.

3. **Alfred**
   - Supporting experiences: `independent-product-venture-product-engineer-co-creator-2025`, `self-employed-planned-career-break-2024-2025`
   - Evidence dimension: recent product-engineering ownership, end-to-end development, architecture, shared product decisions, and learning in an unfamiliar ecosystem.
   - Public boundary: describe private validation or exploratory status accurately; do not imply public launch, adoption, or market success.

The Beacon micro-frontend POC is a reserve candidate if Alfred is later allocated to a case study rather than a Selected Projects record. That allocation is not part of this task.

## Scope

- Record the accepted selection and rationale in `docs/DECISIONS.md`.
- Map each selection to existing public experience slugs.
- Preserve public-safe abstractions and the existing evidence-governance rules.

## Exclusions

- No project records or content values in `src/content/evidence.ts`.
- No new claims, metrics, technologies, project slugs, or narrative details.
- No project-page rendering, routes, navigation, styling, or relationships.
- No case-study implementation or allocation changes.
- No PKM imports, provenance, source links, runtime validation, or content tooling.

## Completion criteria

1. Three project narratives are explicitly selected and documented.
2. Each selection maps to existing experience slugs and has a distinct evidence purpose.
3. The selected set adds depth beyond the CV without duplicating the same narrative.
4. Contribution, outcome, exploratory/production, and confidentiality boundaries are recorded for each selection where relevant.
5. Beacon is explicitly recorded as deferred rather than accidentally included.
6. No public content, schema, route, or implementation architecture changes are introduced.

## Validation

- Manual review against the approved PKM evidence audits and story cards.
- Confirm each selection maps to existing `ExperienceEntry.slug` values.
- Confirm the decision follows `docs/DECISIONS.md` evidence-governance rules and `docs/ARCHITECTURE.md#content-and-data`.
- Confirm no source, runtime, or public content implementation files changed.
