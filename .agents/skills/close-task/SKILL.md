---
name: close-task
description: Close a Professional Site task after a passing review by updating execution state and replacing the current handoff with a concise index for the next task. Use only after review-task returns PASS.
---

# Complete Task

## Purpose

Close a reviewed task and retain the context required for the next development session.

## Preconditions

- `review-task` returned `PASS` for the current task.

## Required actions

1. Confirm the reviewed scope and completion criteria.
2. Run, or confirm the successful result of, the relevant validation commands.
3. Update `TODO.md` to mark completed work and expose the next actionable task.
4. Update `docs/DECISIONS.md` only for a significant long-lived decision.
5. Update `docs/ARCHITECTURE.md` only when the actual architecture changed.
6. Do not rewrite `ROADMAP.md` unless the high-level delivery plan changed.
7. Derive the next actionable task from the updated `TODO.md`.
8. Create or replace `docs/HANDOFF.md` using the handoff contract below.
9. Confirm the repository remains working and deployable.
10. Inspect all staged and unstaged session changes and generate one Conventional Commit message that accurately covers the whole session.

## Handoff contract

Write a concise current-state index containing:

1. `Completed task`
   - Exact `TODO.md` section and item
   - Review verdict
   - Validation performed
2. `Next task`
   - Exact next incomplete `TODO.md` section and item
   - Wider roadmap outcome
   - Relevant code, test, configuration, and asset paths
   - Applicable architecture and decision references
   - Known blockers or unresolved decisions
   - Explicit exclusions
3. `Implementation context`
   - Only facts from the completed work that materially affect the next task
4. `Deferred work`
   - Only boundaries needed to prevent accidental scope expansion

Derive the next task from `TODO.md`; do not let the handoff override `TODO.md`, architecture, or recorded decisions. Include only verified references. Write `None` for required fields with no applicable entries instead of inventing context.

## Rules

- Keep one current handoff; replace its contents rather than accumulating handoff files.
- Keep the handoff compact; do not reproduce diffs, complete documentation, or unrelated implementation history.
- Do not commit, push, or modify unrelated files unless explicitly requested.
- Produce the commit message after all completion reporting, using `type: imperative summary` with an optional scope.

## Output

State the completion result, changed operational documents, validation status, known limitations, and next recommended task. End with `Commit message: <type>: <imperative summary>`.
