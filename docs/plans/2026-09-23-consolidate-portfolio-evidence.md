---
title: Consolidate portfolio evidence on the Work page
status: approved
createdAt: "2026-09-23T22:00:00+01:00"
updatedAt: "2026-09-24T15:54:30+01:00"
lastModifiedAt: "2026-09-24T15:54:30+01:00"
---

# Consolidate portfolio evidence on the Work page

## Project position

- **Completed:** Milestones 1–4 are complete. The portfolio currently has four long-form Case Studies and three Selected Projects that overlap with Alfred, Signal, and Gamesys.
- **Current:** Milestone 5, Evidence-driven evolution. Production-only analytics remains the highest-priority task in `TODO.md`, followed by the pending Long-Form Reading Rhythm and Content Resilience UX task. This consolidation is queued immediately after that task.
- **Next outcome:** Keep Work as the primary navigation destination and make `/work` display the existing Case Studies content as the portfolio's single project-evidence area.
- **Workflow stage:** Approved implementation plan; queued after the pending analytics and Long-Form Reading Rhythm and Content Resilience tasks. No implementation is included in this plan artifact.

## Objective and product fit

Give recruiters and hiring managers one clear place to review the work, with enough detail to understand context, contribution, decisions, constraints, and outcomes. Keep the established Work navigation item and route, replacing the chooser with the existing long-form Case Studies content. Do not compress the narratives to CV length.

This follows the Cognitive Fit principle in `AGENTS.md`: reduce duplicate areas and maintenance where they do not provide distinct value. Experience and the Resume remain the quick career-scan routes.

## Current evidence

- `src/pages/WorkPage.tsx` presents two routes to the evidence: Selected Projects and Case Studies.
- `src/pages/ProjectsPage.tsx` lists Alfred, Signal, and Gamesys project summaries with context, purpose, problem, solution, outcome, technologies, capabilities, and related experience.
- `src/pages/CaseStudiesPage.tsx` already presents four fuller narratives: Alfred, Signal template administration, Gamesys promotional-content workflow, and HSBC earlier career.
- In `src/content/evidence-content.ts`, the three Selected Projects repeat subjects already covered by Case Studies. The project summaries and problem/solution/outcome fields add little distinct evidence. The Case Studies also hold the fuller constraints, decisions, implementation detail, and appropriate qualifications.
- `PRODUCT_REQUIREMENTS.md`, `ROADMAP.md`, architecture, decisions, and TODO currently describe both areas. `public/sitemap.xml` lists `/work`, `/projects`, and `/case-studies`.
- `src/styles/patterns.css` groups shared Projects and Case Studies selectors, while the route-specific Case Studies presentation also has `src/pages/CaseStudiesPage.css`.

## Scope

- Retain all four Case Studies, including the HSBC historical story, as the portfolio's only project-evidence content.
- Keep **Work** as the primary navigation label and `/work` as its direct destination. Replace the Work chooser with the existing Case Studies content; the page keeps the Case Studies heading and narratives.
- Remove the separate Selected Projects page and its content records. Remove the separate Case Studies route/page; the case-study content is presented on `/work`.
- Remove the `/projects` and `/case-studies` route definitions without redirects. Both paths should fall through to the existing 404 page and its Home link.
- Update `public/sitemap.xml` to list `/work` as the only evidence destination and omit `/projects` and `/case-studies`.
- Review each Project field before removing the Project records. Carry useful, evidence-backed details into the matching Case Study where they improve scanning or context. In particular, retain technologies and related-experience links when relevant; omit generic capability labels and repeated narrative fields when the case study already demonstrates them.
- Remove the `Project` content type and the `project` variant of `EvidenceReference` if no current consumer remains. Preserve case-study references and update the evidence contract accordingly.
- Preserve case-study wording that qualifies reported outcomes. Do not carry forward unqualified duplicate claims from the project summaries.
- Migrate the existing Case Studies styles to the retained Work page styles without changing their visual treatment. Remove chooser/Projects styles and the now-unused shared Projects/Case Studies selector groups from `src/styles/patterns.css`; update `src/index.css` and styling documentation accordingly.
- Update route, navigation, content, page, and Playwright tests for `/work` as the evidence destination and not-found behavior for the retired paths.
- Align current product requirements, roadmap scope, architecture, TODO, and handoff guidance with the approved structure. Keep completed TODO items and completed milestone scope as historical records. Add this task after the pending Long-Form Reading Rhythm and Content Resilience task in the Milestone 5 sequence, which itself follows analytics.
- Add a decision that supersedes the two-area structure and selected-project presentation. Preserve historical rationales and mark the affected decisions clearly. The Alfred case-study allocation remains valid; only the shorter Project projection is superseded. Also mark the shared Projects/Case Studies styling decision as superseded by the Work-owned presentation. Review the static evidence contract and claim-owned relationship decisions, superseding only their Project-specific clauses while retaining the CaseStudy model and references.

## Exclusions

- No new case studies or professional claims.
- No shortening of existing case studies for CV-style scanning.
- No changes to Experience, Resume, or the case-study visual treatment beyond changes required to present retained metadata coherently.
- No analytics or broader navigation redesign.

## Assumptions, risks, and decisions

- The user's direction resolves the information architecture: retain the **Work** navigation item and `/work` route, and present all four existing Case Studies there as the sole project-evidence content.
- `/projects` and `/case-studies` are intentionally removed without redirects and will show the existing 404 page. Updating internal links and the sitemap to `/work` is in scope; legacy URLs are not retained as aliases.
- The existing wildcard route in `src/app/router.tsx` should handle both retired paths through `NotFoundPage`.
- The main content risk is losing useful project metadata while removing duplicate Project records. Resolve this by mapping every field to its destination or marking it redundant during implementation review.
- Current product guidance should describe one Work destination containing Case Studies. Completed TODO items and earlier decisions remain historical, with superseded decisions labeled and linked to the replacement decision rather than rewritten as current guidance.
- Preserve the TODO sequence: analytics first, then the pending Long-Form Reading Rhythm and Content Resilience task, then this consolidation. This plan does not reprioritize those tasks.
- Moving Case Studies styles to the Work page is an ownership change only; preserve the rendered visual treatment.

## Implementation sequence

1. Map every Project field and incoming internal link to its current use. Decide which technologies and related-experience links provide distinct value in each Case Study.
2. Move only those details into Case Study content and presentation. Keep existing evidence qualifications and long-form narratives intact.
3. Replace the Work chooser with the Case Studies content on `/work`. Remove the Selected Projects and Case Studies page components and exports. Migrate the Case Studies content and structure assertions into Work page tests; remove obsolete chooser/Projects assertions. Remove duplicate Project content/types and the Project evidence-reference variant once no consumers remain.
4. Keep primary navigation and internal evidence links pointed at `/work`. Remove the `/projects` and `/case-studies` route definitions so both paths use the existing wildcard 404 page. Keep only `/work` in the sitemap as the evidence destination.
5. Move Case Studies route styles to the retained Work page stylesheet, remove chooser/Projects styles and obsolete shared evidence-list selectors, and update the stylesheet manifest. Preserve the current Case Studies rendering.
6. Update unit and Playwright coverage for direct `/work` navigation and refresh, the retired paths rendering the 404 page with its Home link, retained metadata, and case-study content. Remove assertions tied to the chooser and Projects page.
7. Update current product and engineering guidance, add the superseding decision, and mark the affected historical decisions superseded or partially superseded. Add this task after the pending Long-Form Reading Rhythm and Content Resilience task in the Milestone 5 TODO sequence. Update the handoff after implementation is reviewed and closed.

## Acceptance criteria

- Visitors have one project-evidence destination: the Work page at `/work`, displaying the Case Studies content.
- Case Studies retains all four existing narratives and their evidence limitations.
- Every useful, supported Project detail is either visible in the relevant Case Study or explicitly judged redundant; no unique evidence is silently lost.
- Primary navigation remains labeled **Work**, links directly to `/work`, and the route renders the Case Studies content without a chooser.
- `/work` renders the evidence content on direct entry and refresh. `/projects` and `/case-studies` render the existing 404 page on direct entry and refresh; its Home link works.
- The primary sitemap includes `/work` as the evidence destination and excludes `/projects` and `/case-studies`.
- Existing Playwright coverage for Work/Projects navigation and links is migrated to verify the Work content and 404 behavior for retired paths.
- No duplicate Selected Projects or Work chooser content remains in the user-facing site.
- Current product requirements, roadmap, architecture, decisions, TODO, handoff, and sitemap consistently describe Work as the single evidence route containing Case Studies. Historical completed TODO entries, milestone scope, and superseded or partially superseded decisions remain clearly historical.
- No unused Project content model or Project evidence-reference variant remains in active code; CaseStudy records and any case-study evidence references remain supported.
- Project-only selectors are removed from the shared evidence-list styling; the Case Studies visual treatment remains unchanged under the Work page's stylesheet ownership.

## Validation

- Run focused route, navigation, Work content, and not-found tests, then run `pnpm test:e2e` for browser coverage.
- Run `pnpm validate` and `pnpm build`; report any pre-existing repository-wide validation issue separately from regressions caused by this change.
- Review the Case Studies content on `/work` at desktop and narrow widths. In the browser, verify direct entry and refresh at `/work`, `/projects`, and `/case-studies`; confirm the retired paths show the existing 404 page and its Home link returns to the home page.

## Approval gate

This plan is approved. The consolidation remains queued after the pending analytics and Long-Form Reading Rhythm and Content Resilience tasks; begin implementation only when it becomes the next task in the TODO sequence.
