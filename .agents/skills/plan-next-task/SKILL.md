---
name: plan-next-task
description: Define the next small Professional Site task before implementation. Use when selecting or planning a task, including when the user or current handoff already identifies it, to establish scope, constraints, completion criteria, and validation without making changes.
---

# Plan Task

Define one implementation-ready unit of work before coding starts.

## Task selection

Use the first source that identifies the task:

1. A task explicitly named by the user
2. The `Next task` section of `docs/HANDOFF.md`
3. The next incomplete item in `TODO.md`

Confirm the selected task is not already complete or superseded. Treat `TODO.md` as execution authority; use the handoff only as a current-state index.

## Inspection

Start with the minimum evidence required:

1. Read the relevant sections of `docs/HANDOFF.md` and `TODO.md`.
2. Inspect repository status.
3. Inspect code, tests, configuration, and assets directly relevant to the task.
4. Search `ROADMAP.md`, `docs/ARCHITECTURE.md`, and `docs/DECISIONS.md` using the task, file, and governance references from the handoff.
5. Read enough surrounding context to interpret each relevant match correctly.

Read the complete `README.md`, `ROADMAP.md`, `docs/ARCHITECTURE.md`, or `docs/DECISIONS.md` only when:

- no task can be identified;
- the handoff is missing, stale, or inconsistent with `TODO.md`;
- a listed file or governance reference is missing or incorrect;
- targeted inspection does not establish the wider outcome or applicable constraints;
- the task changes architecture, dependencies, deployment, content modelling, or public behaviour; or
- materially different approaches remain unresolved.

Do not reread repository content already inspected during the current task unless it changed.

## Rules

- Do not implement the task.
- Do not broaden scope or pull in deferred roadmap work.
- Do not reopen settled decisions without new repository evidence.
- Do not propose speculative abstractions.
- Do not silently choose between materially different approaches; identify the decision needed.
- State `Insufficient data` when repository evidence cannot resolve a material issue.

## Output

Provide a concise, implementation-ready plan containing only:

1. Task objective
2. Current state
3. Scope and explicit exclusions
4. Assumptions, risks, and blockers
5. Completion criteria
6. Smallest practical implementation plan
7. Recommended validation commands

Keep sections brief and omit empty sections.

## Handoff

The approved plan is the input to manual implementation. Codex may provide focused implementation support without expanding the approved scope.
