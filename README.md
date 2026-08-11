# Professional Site

A production-quality React and TypeScript application for communicating professional experience through clear, evidence-backed content. It is also an inspectable record of the engineering decisions, quality practices, and trade-offs behind the product.

The application is being built as a real, maintainable product—not as a technology showcase. Its public content will support job applications and interviews while respecting contribution boundaries and confidentiality.

## Current status

Milestone 1, the application foundation, is in progress. The project currently includes:

- a strict TypeScript React application built with Vite;
- route structure and keyboard-accessible primary navigation;
- a semantic application shell with a responsive, CSS-first styling foundation;
- component, automated accessibility, and bounded browser-journey tests; and
- formatting, linting, type-checking, test, and build scripts.

Professional profile, experience, project, and contact content are intentionally still in development. CI configuration and deployment are the next foundation tasks.

## Technology and quality practices

- React, TypeScript, Vite, and React Router
- CSS custom properties and semantic component styling
- Biome for formatting and static analysis
- Vitest, Testing Library, and axe-based accessibility checks
- Playwright for critical browser journeys

## Run locally

Install dependencies with pnpm, then use the repository scripts:

```sh
pnpm dev
pnpm validate
pnpm test:e2e
pnpm build
```

`pnpm validate` runs type-checking, formatting and lint checks, and the component test suite.

## Project documentation

- [Product requirements](PRODUCT_REQUIREMENTS.md) — product purpose, users, scope, and non-goals.
- [Roadmap](ROADMAP.md) — delivery milestones and their completion conditions.
- [Architecture](docs/ARCHITECTURE.md) — durable technical boundaries and quality attributes.
- [Engineering principles](docs/ENGINEERING_PRINCIPLES.md) — implementation standards and constraints.
- [Decisions](docs/DECISIONS.md) — accepted material product and engineering decisions.

## Public-content boundary

This repository will contain only professional evidence suitable for public sharing. Claims will be evidence-backed, distinguish personal from team contributions, and exclude confidential employer, client, and personal information.
