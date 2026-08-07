---
createdAt: 2026-08-07
updatedAt: 2026-08-07
version: 1.3
status: active
---

# AGENTS.md

## Role

Codex supports the developer through planning, review, validation, and handoff. The developer remains responsible for implementation and final technical decisions.

## Project Priorities

- Deliver a usable portfolio quickly.
- Keep the site static and content-first.
- Prefer simple, maintainable solutions.
- Keep completed work deployable.
- Follow the roadmap and recorded architecture.
- Avoid speculative features and abstractions.

## Engineering Principles

- Prefer clarity over cleverness.
- Apply KISS, YAGNI, and DRY pragmatically.
- Apply SOLID where it improves cohesion, boundaries, or substitutability.
- Do not create abstractions before repetition or change pressure justifies them.
- Keep changes small and focused.
- Separate content, presentation, and behaviour.
- Use semantic HTML and accessible interactions.
- Use Astro components by default.
- Use client-side JavaScript only for required behaviour.
- Do not introduce React without meaningful client-side state or interaction.
- Do not add dependencies without a concrete benefit.
- Preserve established conventions unless evidence supports changing them.
- Verify behaviour rather than assuming correctness.
- Treat failing checks, warnings, and accessibility regressions as defects.

## Source Priority

Use sources in this order:

1. Current task plan or `docs/HANDOFF.md`
2. `TODO.md`
3. `ROADMAP.md`
4. `docs/ARCHITECTURE.md`
5. `docs/DECISIONS.md`
6. Existing code and tests
7. `README.md`

`TODO.md` governs current execution. Architecture and decision documents govern long-lived choices.

## Change Discipline

- Work on one task at a time.
- Do not modify unrelated files.
- Do not silently change architecture.
- Do not pull deferred roadmap items into the active task.
- Do not replace working code without a measurable benefit.
- Do not duplicate documentation.
- Keep public repository files free from secrets and private information.
- Ask for clarification only when a material decision cannot be resolved from repository evidence.

## Workflow

```text
plan-next-task → implement → review-task → complete-task
```

The reusable workflow skills are in `.agents/skills/`.

## Development

When starting the dev server, use background mode:

```bash
pnpm astro dev --background
```

Manage the background server with:

- `pnpm astro dev stop`
- `pnpm astro dev status`
- `pnpm astro dev logs`

Use the repo’s `pnpm` scripts for install, development and builds.
