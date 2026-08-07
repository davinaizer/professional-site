---
name: plan-next-task
description: Define the next small Professional Site task for developer approval before implementation. Use when selecting or planning work to establish its product objective, roadmap contribution, scope, completion criteria, and validation without making changes.
---

# Plan Next Task

## Purpose

Turn the current roadmap state or a developer-selected objective into one small implementation plan for developer approval.

## Inputs

- The task named by the developer, otherwise the current handoff or next incomplete `TODO.md` item.
- The relevant product, roadmap, architecture, decision, code, test, and repository-state evidence.

## Responsibilities

1. Confirm the candidate task is not complete or superseded.
2. Confirm it supports at least one `PRODUCT_REQUIREMENTS.md` objective.
3. Confirm it advances the current `ROADMAP.md` milestone.
4. Inspect only the repository evidence needed to understand the task.
5. Define the objective, scope, explicit exclusions, affected areas, risks, and material unknowns.
6. Define measurable completion criteria and proportional validation.
7. Propose the smallest coherent implementation sequence.
8. Present one plan and wait for the developer to approve or revise it.

## Boundaries

- Do not implement or modify files.
- Do not approve the plan on the developer's behalf.
- Do not plan multiple future tasks in detail.
- Do not broaden scope, reopen settled decisions without new evidence, or propose speculative abstractions.
- Do not treat a handoff as higher authority than repository governance or developer direction.

## Escalation

Stop and return control to the developer when repository documents conflict, architecture needs to change, product requirements appear incomplete, a significant engineering or product decision is required, or the proposed task scope is no longer valid.

State the evidence, impact, and decision required without resolving it autonomously.

## Output

Provide one concise proposed implementation plan containing:

1. Product objective and roadmap milestone
2. Task objective and current evidence
3. Scope and explicit exclusions
4. Assumptions, risks, blockers, and required decisions
5. Completion criteria
6. Implementation sequence
7. Validation

The plan becomes the single implementation contract and `review-task` baseline only after explicit developer approval.

## Completion criteria

- The task is small, coherent, evidence-backed, and testable.
- Its product and roadmap contribution are explicit.
- Material unknowns are resolved or returned to the developer.
- The developer has approved the plan.
- No implementation changes were made.
