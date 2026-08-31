---
createdAt: 2026-08-10
updatedAt: 2026-08-31
version: 1.31
status: active
---

# Handoff

## Completed outcome

Completed the Milestone 3 project-relationship task: selected projects now expose curated links to relevant experience entries and capability labels drawn from the professional summary focus areas.

## Next task candidate

- [ ] Define the minimum reusable case-study structure.

## Roadmap position

- **Milestone:** Milestone 3 — Professional Evidence; selected project relationships are complete and the next TODO item is case-study structure.
- **Workflow stage:** The project relationship task has passed review and is complete; the next task has not been planned or started.

## Evidence pointers

- `TODO.md#selected-projects`
- `docs/ARCHITECTURE.md#content-and-data`
- `docs/DECISIONS.md` — project-owned presentation connections and evidence-governance decisions
- `src/content/evidence.ts`
- `src/content/evidence-content.ts`
- `src/pages/ProjectsPage.tsx`
- `src/pages/ProjectsPage.test.tsx`
- `src/pages/ExperiencePage.tsx`
- `src/pages/ExperiencePage.test.tsx`
- `e2e/critical-journeys.spec.ts`

## Blockers

None.

## Constraints and context

Project-to-experience links are presentation-level connections and remain separate from `ProfessionalClaim` evidentiary relationships. Capability records, capability routes, reciprocal indexes, runtime relationship validation, and claim content remain deferred.
