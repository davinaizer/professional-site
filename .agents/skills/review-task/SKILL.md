---
name: review-task
description: Review a completed Professional Site task against its approved scope and completion criteria. Use after implementation and before task handoff; do not implement fixes.
---

# Review Task

## Purpose

Review a completed implementation against the agreed task, rather than conduct an unrestricted repository audit.

## Required inspection

1. Locate the current task plan from the conversation or the latest `docs/HANDOFF.md`.
2. Inspect changed files and relevant surrounding code.
3. Compare the work with the task objective, scope, exclusions, completion criteria, architecture, recorded decisions, and established conventions.
4. Check, where relevant, correctness, maintainability, accessibility, semantic HTML, responsive behaviour, unnecessary complexity, dependency changes, test coverage, and build/lint results.
5. Run the smallest relevant validation set.

## Rules

- Do not implement fixes or update the handoff.
- Do not recommend unrelated refactoring or future roadmap work.
- If no current task plan or handoff establishes the scope, request it; do not infer scope from the diff alone.
- Return `CHANGES REQUIRED` when completion criteria are unmet, relevant validation fails, accessibility or functional regressions remain, or documentation no longer reflects a changed long-lived decision.

## Output

Report findings in this exact order:

1. Blocking defects
2. Important improvements
3. Minor observations
4. Verification performed
5. Final verdict

The final verdict must be exactly `PASS` or `CHANGES REQUIRED`.

## Handoff

Only a `PASS` result may proceed to `complete-task`.
