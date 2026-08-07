---
createdAt: 2026-08-07
updatedAt: 2026-08-07
version: 1.0
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

---

# Completed Governance

- [x] Create the initial `ROADMAP.md` derived from `PRODUCT_REQUIREMENTS.md`.
- [x] Align the project-local AI workflow and skills with the developer-owned collaboration model.

---

# Milestone 1 — Application Foundation

## Project Bootstrap

- [ ] Initialise the React and TypeScript application.
- [ ] Enable strict TypeScript configuration.
- [ ] Configure package scripts for development, build, type checking, linting, formatting, and testing.
- [ ] Configure baseline linting and formatting.
- [ ] Verify the application builds successfully.

## Application Structure

- [ ] Establish the initial source structure.
- [ ] Create the application shell.
- [ ] Establish routing/navigation structure required by the MVP.
- [ ] Define the baseline page/layout composition.
- [ ] Verify core content remains usable with minimal client-side behaviour where practical.

## Styling Foundation

- [ ] Establish global CSS foundations.
- [ ] Define baseline typography.
- [ ] Define spacing and layout primitives.
- [ ] Define initial design tokens required by the current UI.
- [ ] Establish responsive layout behaviour.
- [ ] Apply the existing design principles to the initial shell.

## Accessibility Foundation

- [ ] Establish semantic page structure.
- [ ] Establish keyboard-accessible navigation.
- [ ] Define visible focus behaviour.
- [ ] Verify baseline colour contrast.
- [ ] Verify initial layouts at representative viewport sizes.

## Quality Foundation

- [ ] Configure the initial unit/component testing approach where justified.
- [ ] Configure end-to-end testing for critical journeys.
- [ ] Add baseline automated accessibility validation where appropriate.
- [ ] Configure CI for relevant quality checks.
- [ ] Verify all current checks pass.

## Deployment Foundation

- [ ] Select the simplest suitable deployment target.
- [ ] Configure production build and deployment.
- [ ] Deploy the initial application foundation.
- [ ] Verify the deployed application works correctly.

### Milestone 1 Completion

- [ ] Confirm application builds and deploys.
- [ ] Confirm strict TypeScript and quality checks pass.
- [ ] Confirm baseline accessibility and responsive behaviour.
- [ ] Confirm the structure remains understandable and maintainable.
- [ ] Confirm no speculative architecture or unnecessary dependency was introduced.

---

# Milestone 2 — Core Professional Experience

## Content Foundation

- [ ] Define the minimum content structure required for core professional information.
- [ ] Decide where professional content should live and how it should be represented.
- [ ] Add professional identity and summary content.
- [ ] Add experience content.
- [ ] Add resume access.
- [ ] Add contact information.

## Home

- [ ] Implement the Home experience.
- [ ] Communicate professional focus clearly within the initial viewport.
- [ ] Provide clear routes to experience, projects/evidence, resume, and contact where relevant.

## Professional Summary

- [ ] Implement the professional summary.
- [ ] Align positioning with the current CV and product-engineering direction.
- [ ] Keep claims concise and defensible.

## Experience

- [ ] Implement the career timeline / experience presentation.
- [ ] Ensure roles and chronology are easy to understand.
- [ ] Preserve personal versus team contribution boundaries.
- [ ] Ensure content remains useful for interview preparation and future reuse.

## Resume

- [ ] Add the current CV as a downloadable or accessible document.
- [ ] Verify the resume link works in production.

## Contact

- [ ] Add relevant professional contact links.
- [ ] Verify external links and accessible labelling.

## Core Navigation

- [ ] Connect all core professional areas through consistent navigation.
- [ ] Verify keyboard and responsive navigation behaviour.

### Milestone 2 Completion

- [ ] Confirm professional identity is understandable within one or two minutes.
- [ ] Confirm core content is clear, accessible, responsive, and deployable.
- [ ] Confirm professional evidence remains accurate and defensible.
- [ ] Confirm the site does not require unnecessary interaction to understand the core profile.

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

- [ ] Define a reusable case-study structure.
- [ ] Write and implement the first complete case study.
- [ ] Add further case studies only when they provide distinct evidence.

## Engineering

- [ ] Define the purpose and scope of the Engineering area.
- [ ] Surface meaningful architecture, quality, testing, accessibility, or delivery decisions.
- [ ] Avoid duplicating repository documentation without user value.

## Evidence Connections

- [ ] Link professional claims to relevant projects, case studies, decisions, or outcomes.
- [ ] Ensure deeper evidence remains optional rather than required for understanding the profile.

### Milestone 3 Completion

- [ ] Confirm every evidence area adds useful depth beyond the CV.
- [ ] Confirm claims are supported by defensible evidence.
- [ ] Confirm personal and team contributions are clearly distinguished.
- [ ] Confirm evidence is useful for interview preparation and professional reuse.
- [ ] Confirm the product has not drifted into a general knowledge-management system.

---

# Milestone 4 — MVP Release Readiness

## Integration

- [ ] Review navigation and information architecture across all MVP areas.
- [ ] Remove duplication and inconsistent interaction patterns.
- [ ] Verify content hierarchy across the complete experience.

## Accessibility

- [ ] Perform full keyboard review.
- [ ] Verify focus order and focus visibility.
- [ ] Verify semantic structure.
- [ ] Run automated accessibility checks.
- [ ] Resolve material accessibility issues.

## Responsive Behaviour

- [ ] Review representative mobile, tablet, and desktop layouts.
- [ ] Resolve material layout or readability issues.
- [ ] Verify navigation across viewport sizes.

## Testing

- [ ] Review test coverage against critical user journeys.
- [ ] Add or update tests where gaps create meaningful risk.
- [ ] Run the complete relevant test suite.

## Performance

- [ ] Measure production performance.
- [ ] Identify material bottlenecks.
- [ ] Resolve or explicitly document meaningful issues.
- [ ] Avoid optimisation without measured need.

## Content Review

- [ ] Verify professional claims against source evidence.
- [ ] Check for confidential or proprietary information.
- [ ] Proofread all public content.
- [ ] Verify all resume, contact, project, and external links.

## Production Readiness

- [ ] Run production build.
- [ ] Run relevant automated checks.
- [ ] Verify production deployment.
- [ ] Confirm the MVP remains within defined product scope.
- [ ] Publish the MVP.

### Milestone 4 Completion

- [ ] Confirm all MVP areas are complete and coherent.
- [ ] Confirm relevant checks pass.
- [ ] Confirm accessibility and responsive behaviour are verified.
- [ ] Confirm performance has been measured.
- [ ] Confirm public content is accurate and safe to publish.
- [ ] Confirm the application is production-ready and deployable.

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
