---
name: complete-task
description: Complete an accepted Professional Site task after review-task returns PASS. Use to verify completion, update execution state and necessary documentation, confirm deployability, record accepted decisions, and identify the next task candidate without planning it.
---

# Complete Task

## Purpose

Close the accepted task cleanly without beginning or planning another task.

## Inputs

- The developer-approved task plan.
- A `PASS` verdict from `review-task`.
- The accepted implementation and final repository state.

## Responsibilities

1. Confirm `review-task` returned `PASS` for the approved plan.
2. Confirm the completion criteria and relevant final validation results.
3. Verify the repository remains working and deployable.
4. Update `TODO.md` to record the completed task.
5. Update documentation only where the accepted implementation made it inaccurate.
6. Record accepted significant decisions in `docs/DECISIONS.md` when appropriate.
7. Identify the next task candidate from current execution state without planning it.
8. Report completion, validation, documentation changes, and known non-blocking limitations.

## Boundaries

- Do not implement fixes or close a task without `PASS`.
- Do not plan the next task or create a detailed next-task handoff.
- Do not introduce architecture or make new product or engineering decisions.
- Do not modify unrelated files.
- Do not suggest commit messages, commit, or push.
- Do not begin the next workflow stage.

## Escalation

Stop and return control to the developer when repository documents conflict, architecture needs to change, product requirements appear incomplete, a significant engineering or product decision is required, or the approved task scope is no longer valid.

Also stop when the final repository state no longer matches the passing review. State the evidence and required resolution; do not close the task.

## Output

State:

1. Completion result
2. Validation confirmed
3. Execution and documentation updates
4. Known non-blocking limitations
5. Next task candidate, without scope or implementation planning

The task and workflow end here.

## Completion criteria

- The accepted task satisfies its approved plan.
- Final relevant validation passes.
- `TODO.md` and affected documentation are accurate.
- Accepted significant decisions are recorded where necessary.
- The repository remains deployable.
- The next task has not been planned or started.
