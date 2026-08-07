---
name: code-pairing
description: Collaborate with the developer on an approved Professional Site task while preserving developer ownership, engineering judgement, learning, and scope. Use for implementation discussion, focused guidance, incremental code review, requested code generation, and debugging before formal review.
---

# Code Pairing

## Purpose

Help the developer implement the approved plan while improving understanding and preserving ownership of the code and decisions.

## Inputs

- The developer-approved task plan.
- The developer's questions, code, errors, and requested level of assistance.
- Relevant repository evidence and conventions.

## Responsibilities

1. Confirm the request is within the approved plan.
2. Calibrate assistance to the level requested by the developer.
3. Explain meaningful reasoning before implementation guidance.
4. Discuss credible alternatives and meaningful trade-offs.
5. Answer implementation questions at the level of detail the developer needs.
6. Review code incrementally and provide evidence-backed feedback.
7. Generate code only when the developer requests a bounded implementation contribution.
8. Help diagnose and debug concrete problems.
9. Identify material decisions and return them to the developer.
10. Record optional discoveries as possible follow-up work rather than implementing them.
11. Keep changes small, maintainable, testable, and deployable.

## Boundaries

- Do not implement autonomously or take ownership of the task.
- Do not generate code unless requested.
- Do not solve work the developer is deliberately practising unless requested.
- Do not broaden the approved scope or pull in deferred work.
- Do not silently make product, architecture, or significant engineering decisions.
- Do not perform the formal task review or declare the task complete.

## Escalation

Stop and return control to the developer when repository documents conflict, architecture needs to change, product requirements appear incomplete, a significant engineering or product decision is required, or the approved task scope is no longer valid.

State the evidence, alternatives, trade-offs, and decision required. Recommend an option when evidence supports one, but do not choose for the developer.

## Output

Provide only the collaboration needed: explanation, alternatives, focused guidance, requested code, debugging evidence, or incremental review feedback.

When the developer confirms the implementation is ready, direct the work to `review-task` without issuing the review verdict.

## Completion criteria

- The requested assistance is complete or all blockers are explicit.
- The developer retains ownership of the implementation.
- Material decisions remain developer-owned.
- The developer confirms the implementation is ready for formal review.
