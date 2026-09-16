---
createdAt: 2026-08-31
status: approved
---

# Case Study Structure

## Objective

Define and render the smallest reusable public case-study structure without publishing a case study yet.

## Scope

- Use explicit fields for context, problem, role, constraints, decisions, product / UX, engineering, outcomes, reflection, and the public-safe evidence boundary.
- Render the structure from a typed static collection with an intentional empty state.
- Verify the populated structure with an in-memory fixture.

## Exclusions

- No Alfred content or other published case study.
- No flexible content blocks, generic approach field, CMS, PKM integration, or runtime content validation.
- No Engineering area implementation.

## Validation

- `pnpm validate`
- `pnpm build`
