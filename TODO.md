---
createdAt: 2026-08-07
updatedAt: 2026-08-24
version: 1.19
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

# Completed Governance

- [x] Create the initial `ROADMAP.md` derived from `PRODUCT_REQUIREMENTS.md`.
- [x] Align the project-local AI workflow and skills with the developer-owned collaboration model.
- [x] Optimise agent guidance discoverability and context efficiency while preserving governance semantics.

---

# Milestone 1 — Application Foundation

## Project Bootstrap

- [x] Initialise and validate the React application with strict TypeScript.
- [x] Configure and validate the development, build, type-checking, linting, and formatting tooling.

## Application Structure

- [x] Establish the initial source structure and application entry boundaries.
- [x] Create the semantic application shell and baseline page composition.
- [x] Establish the MVP route structure and navigation behaviour.
- [x] Verify usable content and navigation with minimal client-side behaviour where practical.

## Styling Foundation

- [x] Define the initial global CSS, design tokens, typography, and spacing primitives.
- [x] Apply the styling foundation and existing design principles to the application shell.
- [x] Establish responsive shell and navigation behaviour.

## Accessibility Foundation

- [x] Establish keyboard-accessible navigation and visible focus behaviour.
- [x] Validate shell semantics, baseline colour contrast, and representative viewport layouts.

## Quality Foundation

- [x] Establish the initial unit/component testing and automated accessibility-validation approach where justified.
- [x] Establish end-to-end testing for a bounded set of critical journeys.
- [x] Configure CI to run the established relevant quality checks.

## Deployment Foundation

- [x] Select the simplest suitable deployment target.
- [x] Configure, deploy, and validate the application foundation using the approved deployment target.

### Milestone 1 Completion

- [x] Complete Milestone 1 after confirming:
  - the application builds and deploys;
  - strict TypeScript and relevant quality checks pass;
  - baseline accessibility and responsive behaviour are verified;
  - the structure remains understandable and maintainable; and
  - no speculative architecture or unnecessary dependency was introduced.

---

# Milestone 2 — Core Professional Experience

## Content Foundation

- [x] Define the minimum content structure required for core professional information.
- [x] Decide where professional content should live and how it should be represented.
- [x] Add the approved professional identity and summary content.
- [x] Add the approved experience content, résumé, and contact.

## Home

- [x] Implement the Home experience, communicating professional focus within the initial viewport and providing clear routes to relevant core areas.

## Professional Summary

- [x] Implement a concise, defensible professional summary aligned with the current CV and product-engineering direction.

## Experience

- [x] Implement the career timeline with clear chronology, defensible contribution boundaries, and content suitable for interview preparation and reuse.

## Resume

- [x] Add production-ready access to the current CV.

## Contact

- [x] Add and validate accessible professional contact links.

## Core Navigation

- [x] Connect and validate all core professional areas through consistent keyboard-accessible and responsive navigation.

### Milestone 2 Completion

- [x] Complete Milestone 2 after confirming:
  - professional identity is understandable within one or two minutes;
  - core content is clear, accessible, responsive, and deployable;
  - professional evidence remains accurate and defensible; and
	  - the core profile does not require unnecessary interaction to understand.

## Shared CSS Patterns

- [x] Extract high-confidence shared page styles for the core routes.

---

# Milestone 3 — Professional Evidence

## Evidence Model

- [ ] Define the minimum structure for projects, case studies, outcomes, and engineering evidence.
- [ ] Define how evidence connects back to experience and professional claims.
- [ ] Establish rules for evidence confidence, contribution boundaries, and confidentiality.

## Selected Projects

- [ ] Select the smallest set of projects that add distinct evidence.
- [ ] Implement the Selected Projects experience.
- [ ] Connect projects to relevant experience and capabilities.

## Case Studies

- [ ] Define the minimum reusable case-study structure.
- [ ] Write and implement one deliberately bounded case study that validates the approved structure.

Add further case studies only when they provide distinct evidence.

## Engineering

- [ ] Define the purpose and scope of the Engineering area.
- [ ] Implement the approved Engineering area using meaningful evidence without duplicating repository documentation.

## Evidence Connections

- [ ] Connect professional claims to optional supporting projects, case studies, decisions, or outcomes.

### Milestone 3 Completion

- [ ] Complete Milestone 3 after confirming:
  - every evidence area adds useful depth beyond the CV;
  - claims are supported by defensible evidence;
  - personal and team contributions are clearly distinguished;
  - evidence supports interview preparation and professional reuse; and
  - the product has not drifted into a general knowledge-management system.

---

# Milestone 4 — MVP Release Readiness

## Integration

- [ ] Review navigation, information architecture, and content hierarchy across all MVP areas.
- [ ] Resolve material duplication and inconsistent interaction patterns identified by the integration review.

## Accessibility

- [ ] Review keyboard behaviour, focus, semantics, and automated accessibility results across the MVP.
- [ ] Resolve material accessibility issues identified by the accessibility review.

## Responsive Behaviour

- [ ] Review layouts, readability, and navigation at representative mobile, tablet, and desktop viewports.
- [ ] Resolve material issues identified by the responsive-behaviour review.

## Testing

- [ ] Review and strengthen test coverage for a bounded set of critical user journeys, then run the complete relevant test suite.

## Performance

- [ ] Measure production performance and identify any material bottlenecks.
- [ ] Resolve or explicitly document measured material performance issues.

Do not optimise without measured need.

## Content Review

- [ ] Verify professional claims and contribution boundaries against source evidence.
- [ ] Review all public content for confidentiality, accuracy, and presentation quality.
- [ ] Validate all resume, contact, project, and external links.

## Production Readiness

- [ ] Validate release readiness through the production build, relevant automated checks, deployment verification, and product-scope confirmation.
- [ ] Publish and verify the approved MVP release.

### Milestone 4 Completion

- [ ] Complete Milestone 4 after confirming:
  - all MVP areas are complete and coherent;
  - relevant checks pass;
  - accessibility and responsive behaviour are verified;
  - performance has been measured;
  - public content is accurate and safe to publish; and
  - the application is production-ready and deployable.

---

# Milestone 5 — Evidence-Driven Evolution

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

# Backlog Rules

Do not add a backlog item solely because it may be useful later.

Before adding work, identify:

1. the current problem;
2. the evidence that the problem exists;
3. the product objective it supports;
4. why it should be addressed now rather than deferred.

If those cannot be stated clearly, do not add the task.
