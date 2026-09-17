---
createdAt: 2026-08-10
updatedAt: 2026-09-17
version: 1.49
status: active
---

# Handoff

## Completed outcome

Added React Router `ScrollRestoration` to the shared application shell and verified that internal navigation from the bottom of a long page lands at the top of the destination. The focused browser regression and full relevant test suites pass.

## Next task candidate

- [ ] Keep the measurement production-only, privacy-minimised, and free of unnecessary dependencies or public-content changes.

## Roadmap position

- **Milestone:** Milestone 5 - Evidence-Driven Evolution.
- **Workflow stage:** Scroll-restoration defect is implemented, reviewed with `PASS`, and closed; the repository is ready for the next approved task.

## Evidence pointers

- `TODO.md#priority-analytics`
- `TODO.md#priority-ux-refinement-queue`
- `src/app/App.tsx`
- `e2e/critical-journeys.spec.ts`
- `docs/plans/2026-09-16-analytics.md`
- `docs/evidence/2026-09-16-analytics-baseline.md`

## Blockers

- Cloudflare automatic Pages injection is also present on `develop.davi-naizer.pages.dev`, so the production-only analytics criterion is not satisfied.
- The analytics/privacy disclosure and simple free opt-out are still TBD.
- Repository-wide `pnpm validate` remains blocked by formatting in the existing Lighthouse desktop JSON artifact.

## Constraints and deferred work

- Lighthouse results are lab diagnostics only; field Core Web Vitals are unavailable.
- Cross-browser layout, focus/contrast, and external Google Fonts review remain separate TODO items.
