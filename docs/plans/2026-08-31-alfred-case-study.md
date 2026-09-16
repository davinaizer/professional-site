---
title: Write and implement the Alfred case study
status: approved
createdAt: 2026-08-31
approvedAt: 2026-08-31
---

# Write and implement the Alfred case study

## Objective

Publish one bounded, public-safe case study for **Alfred: What To Do Next** using the approved explicit case-study structure.

## Scope

- Add the Alfred case-study content under the stable slug `alfred-what-to-do-next`.
- Preserve the existing `alfred` Selected Projects record as the shorter project projection.
- Use evidence-backed copy for context, problem, role, constraints, decisions, product / UX, engineering, outcomes, reflection, and the public-safe evidence boundary.
- Update focused tests for the populated Alfred route and the empty-state path.

## Exclusions

- No UpNext rename; it remains a possible future name for Alfred.
- No Beacon content or additional case studies.
- No raw evidence, private paths, provenance, confidence metadata, or source-governance material.
- No public-launch, adoption, user-validation, market-success, or unsupported metric claims.
- No schema, route, dependency, CMS, PKM, or architecture changes.

## Completion Criteria

1. The Case Studies route renders Alfred: What To Do Next from the static typed collection.
2. The narrative distinguishes mobile ownership from shared product direction and backend ownership.
3. Outcomes are limited to implementation evidence and state unavailable validation or adoption evidence clearly.
4. Existing empty-state and populated-structure tests remain focused and passing.
5. The existing project projection, Beacon deferral, and public-content boundaries remain intact.

## Validation

- `pnpm validate`
- `pnpm build`
- Manually inspect the rendered `/case-studies` route.
