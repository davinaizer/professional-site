---
name: plan-next-task
description: Plan one Professional Site task for developer approval. Use before implementation when the developer asks what to do next, requests a task plan, or selects an incomplete TODO item. Establish project position, scope, completion criteria, and validation without modifying files.
---

# Plan Next Task

## Purpose

Turn the current roadmap state or a developer-selected objective into one small implementation plan for developer approval.

## Inputs

- The task named by the developer, otherwise the next valid incomplete `TODO.md` item.
- `docs/HANDOFF.md` when present, verified against current repository evidence.
- The relevant product, roadmap, architecture, decision, code, test, and repository-state evidence.

## Responsibilities

1. Establish the developer's position by identifying the current milestone, most recent relevant completed outcome, candidate task, and immediate downstream outcome.
2. Use `docs/HANDOFF.md` as a compact starting point when it is present, but verify it against `TODO.md`, repository status, and relevant implementation evidence. `TODO.md` remains execution authority.
3. Confirm the candidate task is not complete or superseded.
4. Apply one governance gate before planning. Confirm that the task:
   - supports a `PRODUCT_REQUIREMENTS.md` objective and advances the current `ROADMAP.md` milestone;
   - preserves relevant architecture and accepted decisions;
   - has a small, independently reviewable scope; and
   - has no unresolved material decision.
5. Inspect only the repository evidence needed to understand the task. Escalate to broader documentation only when the handoff is missing, stale, inconsistent, insufficient, or the task could affect architecture, dependencies, deployment, or public behaviour.
6. Define an observable objective; explicit scope and exclusions; affected areas; assumptions, risks, blockers, and material unknowns.
7. For each completion criterion, define the observable outcome and the evidence or proportional validation that will demonstrate it; use manual verification when automation is unjustified.
8. Propose the smallest coherent implementation sequence.
9. Present one plan and wait for the developer to approve or revise it.

## Boundaries

- Do not implement or modify files while proposing the plan.
- Do not approve the plan on the developer's behalf.
- Do not plan multiple future tasks in detail.
- Do not broaden scope, reopen settled decisions without new evidence, or propose speculative abstractions.
- Do not treat `TODO.md` as higher authority than repository governance or developer direction.
- Do not reproduce the roadmap, TODO history, commit log, or detailed future tasks.
- Describe only the immediate downstream outcome; do not plan it.

After explicit developer approval, save the approved plan in `docs/plans/` only when it has a material decision, multiple acceptance criteria, handoff risk, or expected multi-session work. Treat this as an approval-authorised documentation action; otherwise, do not create a plan file.

## Escalation

Stop and return control to the developer when repository documents conflict, architecture needs to change, product requirements appear incomplete, a significant engineering or product decision is required, or the proposed task scope is no longer valid.

State the evidence, impact, and decision required without resolving it autonomously.

## Output

Provide one concise proposed implementation plan containing:

1. Project position
2. Product objective and roadmap milestone
3. Task objective and current evidence
4. Scope and explicit exclusions
5. Assumptions, risks, blockers, and required decisions
6. Completion criteria
7. Implementation sequence
8. Validation

Keep `Project position` to four concise bullets:

- **Completed:** the most recent relevant completed outcome.
- **Current:** the milestone, current repository state, and why this task is next.
- **Next outcome:** what completing this task immediately enables, without planning later work.
- **Workflow stage:** the current approval, implementation, review, or completion state.

Distinguish repository state from workflow state. Use `Undefined` when an item cannot be established from verified evidence.

The plan becomes the single implementation contract and `review-task` baseline only after explicit developer approval.

## Completion criteria

- The task is small, coherent, evidence-backed, and testable.
- Its product and roadmap contribution are explicit.
- Material unknowns are resolved or returned to the developer.
- The developer has approved the plan.
- No implementation changes were made.
