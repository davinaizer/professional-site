---
createdAt: 2026-08-07
updatedAt: 2026-09-16
version: 1.28
status: active
---

---

# TODO

## Purpose

This document tracks the current execution sequence derived from `ROADMAP.md`.

It does not redefine roadmap scope, architecture, or product requirements.

Tasks should be completed in order unless repository evidence or explicit developer direction justifies changing the sequence.

Each task should remain small enough to:

- plan independently;
- implement through code pairing;
- review against explicit acceptance criteria;
- complete without starting unrelated work.

Task boundaries should balance developer implementation effort with reliable AI-assisted review:

- Each task should have one primary objective and preferably no more than one material decision.
- Combine implementation with its direct acceptance checks; record those checks as task criteria rather than separate tasks.
- Separate product, architecture, content, or engineering decisions when they materially affect later implementation.
- Separate diagnosis or measurement from remediation when the remediation scope is not yet known.
- Keep the change surface and validation set small enough for `review-task` to assess completely from the approved plan and task-scoped evidence.
- Prefer a separate task when a failure would otherwise return several unrelated concerns to `code-pairing`.

---

## Completed Governance

- [x] Create the initial `ROADMAP.md` derived from `PRODUCT_REQUIREMENTS.md`.
- [x] Align the project-local AI workflow and skills with the developer-owned collaboration model.
- [x] Optimise agent guidance discoverability and context efficiency while preserving governance semantics.

---

## Milestone 1 — Application Foundation

### Project Bootstrap

- [x] Initialise and validate the React application with strict TypeScript.
- [x] Configure and validate the development, build, type-checking, linting, and formatting tooling.

### Application Structure

- [x] Establish the initial source structure and application entry boundaries.
- [x] Create the semantic application shell and baseline page composition.
- [x] Establish the MVP route structure and navigation behaviour.
- [x] Verify usable content and navigation with minimal client-side behaviour where practical.

### Styling Foundation

- [x] Define the initial global CSS, design tokens, typography, and spacing primitives.
- [x] Apply the styling foundation and existing design principles to the application shell.
- [x] Establish responsive shell and navigation behaviour.

### Accessibility Foundation

- [x] Establish keyboard-accessible navigation and visible focus behaviour.
- [x] Validate shell semantics, baseline colour contrast, and representative viewport layouts.

### Quality Foundation

- [x] Establish the initial unit/component testing and automated accessibility-validation approach where justified.
- [x] Establish end-to-end testing for a bounded set of critical journeys.
- [x] Configure CI to run the established relevant quality checks.

### Deployment Foundation

- [x] Select the simplest suitable deployment target.
- [x] Configure, deploy, and validate the application foundation using the approved deployment target.

#### Milestone 1 Completion

- [x] Complete Milestone 1 after confirming:
  - the application builds and deploys;
  - strict TypeScript and relevant quality checks pass;
  - baseline accessibility and responsive behaviour are verified;
  - the structure remains understandable and maintainable; and
  - no speculative architecture or unnecessary dependency was introduced.

---

## Milestone 2 — Core Professional Experience

### Content Foundation

- [x] Define the minimum content structure required for core professional information.
- [x] Decide where professional content should live and how it should be represented.
- [x] Add the approved professional identity and summary content.
- [x] Add the approved experience content, résumé, and contact.

### Home

- [x] Implement the Home experience, communicating professional focus within the initial viewport and providing clear routes to relevant core areas.

### Experience

- [x] Implement the career timeline with clear chronology, defensible contribution boundaries, and content suitable for interview preparation and reuse.

### Resume

- [x] Add production-ready access to the current CV.

### Contact

- [x] Add and validate accessible professional contact links.

### Core Navigation

- [x] Connect and validate all core professional areas through consistent keyboard-accessible and responsive navigation.

#### Milestone 2 Completion

- [x] Complete Milestone 2 after confirming:
  - professional identity is understandable within one or two minutes;
  - core content is clear, accessible, responsive, and deployable;
  - professional evidence remains accurate and defensible; and
    - the core profile does not require unnecessary interaction to understand.

### Shared CSS Patterns

- [x] Extract high-confidence shared page styles for the core routes.

---

## Milestone 3 — Professional Evidence

### Evidence Model

- [x] Define the minimum structure for projects, case studies, and outcomes.
- [x] Define how evidence connects back to experience and professional claims.
- [x] Establish rules for evidence confidence, contribution boundaries, and confidentiality.

### Selected Projects

- [x] Select the smallest set of projects that add distinct evidence.
- [x] Implement the Selected Projects experience.
- [x] Connect projects to relevant experience and capabilities.

### Case Studies

- [x] Define the minimum reusable case-study structure.
- [x] Write and implement one deliberately bounded case study that validates the approved structure.

Add further case studies only when they provide distinct evidence.

### Evidence Connections

- [x] Connect selected projects to the relevant experience and capability context.

#### Milestone 3 Completion

- [x] Complete Milestone 3 after confirming:
  - every evidence area adds useful depth beyond the CV;
  - claims are supported by defensible evidence;
  - personal and team contributions are clearly distinguished;
  - evidence supports interview preparation and professional reuse; and
  - the product has not drifted into a general knowledge-management system.

---

## Milestone 4 — MVP Release Readiness

**Status:** Complete, validated, and approved on 2026-09-15 for the implemented MVP scope.

### Integration

- [x] Review navigation, information architecture, and content hierarchy across all MVP areas.
- [x] Resolve material duplication and inconsistent interaction patterns identified by the integration review.

### Accessibility

- [x] Review keyboard behaviour, focus, semantics, and automated accessibility results across the MVP.
- [x] Resolve material accessibility issues identified by the accessibility review.

### Responsive Behaviour

- [x] Review layouts, readability, and navigation at representative mobile, tablet, and desktop viewports.
- [x] Resolve material issues identified by the responsive-behaviour review.

### Testing

- [x] Review and strengthen test coverage for a bounded set of critical user journeys, then run the complete relevant test suite.

### Performance

- [x] Review production build output and identify any material performance concern within the implemented scope.
- [x] Confirm no measured local build concern requires pre-publication remediation.

Do not optimise without measured need.

### Content Review

- [x] Verify professional claims and contribution boundaries against the canonical resume-builder content.
- [x] Review all public content for confidentiality, accuracy, and presentation quality.
- [x] Validate internal routes and the configured resume, contact, project, and external-link targets.

### Production Readiness

- [x] Validate pre-publication readiness through the production build, relevant automated checks, and product-scope confirmation.
- [x] Approve the implemented MVP for publication follow-up.

#### Milestone 4 Completion

- [x] Complete Milestone 4 after confirming:
  - all MVP areas are complete and coherent;
  - relevant checks pass;
  - accessibility and responsive behaviour are verified;
  - local production build output has no identified material performance concern;
  - public content is accurate and safe to publish; and
  - the application is ready for the separate publication and live-production verification tasks below.

---

## Post-MVP Publication Follow-up

These tasks are intentionally separate from the approved application scope. Complete them when the production domain and publication window are confirmed.

### Publication Metadata

- [x] Add a production meta description.
- [x] Add the canonical URL after confirming the production domain.
- [x] Add Open Graph and social-preview metadata and an approved preview image.
- [x] Add favicon and site-icon assets.
- [x] Decide and implement the production indexing policy, including `robots.txt` and a sitemap if required.

### Live Production Verification

- [ ] Verify direct entry and refresh behaviour for all client-side routes on Cloudflare Pages.
- [ ] Verify the resume download, email, LinkedIn, project, case-study, and experience-anchor links in production.
- [ ] Run production performance, accessibility, SEO, and best-practice measurements.
- [ ] Review representative production layouts in Safari, Chrome, and Firefox across mobile, tablet, and desktop viewports.
- [ ] Verify production focus visibility and colour contrast in real browsers.
- [ ] Confirm whether externally hosted Google Fonts remain acceptable for production reliability, privacy, and rendering performance.

---

## Milestone 5 — Evidence-Driven Evolution

Do not maintain a speculative feature backlog for this milestone.

Add tasks only when supported by demonstrated evidence such as:

- interview feedback;
- recruiter or hiring-manager feedback;
- repeated implementation friction;
- repeated content-maintenance friction;
- gaps discovered during real applications or interviews;
- clear engineering-learning needs.

Every new task must:

- support at least one product objective;
- solve a demonstrated current problem;
- remain a small, complete increment;
- preserve maintainability and deployability;
- respect the product non-goals.

---

## Backlog Rules

Do not add a backlog item solely because it may be useful later.

Before adding work, identify:

1. the current problem;
2. the evidence that the problem exists;
3. the product objective it supports;
4. why it should be addressed now rather than deferred.

If those cannot be stated clearly, do not add the task.
