# CSS Refactor Plan

Status: approved

## Objective

Reduce duplicated styling and improve CSS discoverability without changing the rendered design, DOM structure, or existing interaction behaviour.

## Constraints

- Keep the current global CSS approach.
- Use Vite's default `baseline-widely-available` browser target.
- Do not add Browserslist configuration or dependencies.
- Do not change visual output, copy, routes, or product scope.
- Deliver one validated commit per implementation phase.

## Phases

1. Centralize exactly repeated design values as custom properties.
2. Introduce explicit cascade layers and reduce avoidable specificity.
3. Deduplicate verified shared patterns while retaining global CSS.
4. Remove verified dead CSS, document the structure, and add minimal CSS lint enforcement.

Each phase requires a passing build, lint, tests, responsive/focus/reduced-motion verification, screenshot comparison, and CSS bundle-size comparison before its commit.
