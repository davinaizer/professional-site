---
createdAt: 2026-08-10
updatedAt: 2026-08-14
version: 1.20
status: active
---

# Handoff

## Completed outcome

Completed the Experience route using the approved local professional-content projection. It presents the complete career history in reverse chronology with distinct responsibility and contribution boundaries, responsive route-owned styling, and component accessibility regression coverage.

## Next task candidate

Add production-ready access to the current CV.

## Roadmap position

- **Milestone:** Milestone 2 — Core Professional Experience (`ROADMAP.md`)
- **Workflow stage:** The Experience task is complete; the next task has not been planned or started.

## Evidence pointers

- `TODO.md#experience`
- `src/pages/ExperiencePage.tsx`
- `src/pages/ExperiencePage.css`
- `src/pages/ExperiencePage.test.tsx`
- `src/content/professional.ts`
- `src/content/professional-content.ts`
- `docs/DECISIONS.md#use-a-local-typescript-contract-for-public-professional-content`
- `docs/DECISIONS.md#use-an-editorially-approved-projection-for-public-professional-content`
- `docs/DECISIONS.md#colocate-route-owned-css-with-route-components`
- `docs/ARCHITECTURE.md#content-and-data`
- `docs/ARCHITECTURE.md#quality-attributes`

## Blockers

None.

## Constraints and context

Résumé and Contact have not yet consumed the completed content projection. Shared styling patterns remain deferred until remaining core routes show stable semantic reuse. PKM integration, CMS or remote loading, schema validation, and generated résumé workflows remain deferred.
