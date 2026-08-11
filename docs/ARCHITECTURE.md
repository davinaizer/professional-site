---
createdAt: 2026-08-10
updatedAt: 2026-08-10
version: 1.1
status: active
---

# Architecture

## Purpose

This document defines the current architecture and the constraints that future changes must preserve. It describes confirmed structure rather than speculative future systems.

`PRODUCT_REQUIREMENTS.md` and `ROADMAP.md` take precedence. `docs/ENGINEERING_PRINCIPLES.md`, `docs/DECISIONS.md`, task plans, and implementation must remain consistent with this document.

## System context

The product is a browser-based React and TypeScript application whose domain is professional experience and engineering evidence. Its primary user is the developer; recruiters, hiring managers, and engineers are secondary users.

The application must remain intentionally small, content-first, accessible, maintainable, and deployable. React and TypeScript are product requirements because implementation is also deliberate frontend practice.

## Current runtime architecture

- Vite provides the local development and production build system.
- React provides application composition and rendering.
- TypeScript runs in strict mode and emits no application JavaScript during type checking.
- React Router v8 Data Mode owns client-side route matching through route objects, `createBrowserRouter`, and `RouterProvider`.
- The browser is the only current runtime. No server application, API, persistence layer, or background process exists.
- Rendering and navigation currently require client-side JavaScript. The consequences and review triggers are recorded in `docs/DECISIONS.md`.

## Application boundaries

```text
src/main.tsx
  -> src/app/router.tsx
    -> src/app/App.tsx
      -> src/pages/*
      -> src/components/*
```

- `src/main.tsx` is the browser entry point. It validates the root element and mounts the router.
- `src/app/router.tsx` is the route configuration boundary. Route paths and their page components are defined there.
- `src/app/App.tsx` is the shared application shell. It composes the header, primary navigation, route outlet, and footer.
- `src/app/` contains application-wide composition owned by the shell or router.
- `src/pages/` contains route-level page components. Pages compose content and reusable UI for one route.
- `src/components/` contains reusable UI that is not owned by one route.
- `src/index.css` is the global style entry point and imports the global styling layers.
- `src/styles/reset.css` establishes browser-normalising defaults.
- `src/styles/tokens.css` defines CSS-first semantic design tokens.
- `src/styles/global.css` applies document-level typography, content flow, and layout defaults.

Keep these boundaries shallow. Introduce new layers only when a current requirement or repeated change pressure demonstrates that the existing structure is insufficient.

## Navigation and rendering

The root route renders the shared application shell and nested page routes through an outlet. The route configuration includes the MVP product areas, a Work index that links to Projects and Case Studies, and a catch-all not-found page.

The shared shell provides a home-linked identity, direct routes to Experience, Work, Engineering, and Resume, and a distinct Contact link. The Summary, Projects, and Case Studies routes remain independently addressable but are not primary navigation destinations. Use semantic links and document structure so navigation remains understandable and keyboard accessible. Prefer content that does not require unnecessary interaction to discover. Client-side routing is the current delivery architecture; progressive enhancement beyond semantic browser foundations remains subject to demonstrated product need and the review triggers in `docs/DECISIONS.md`.

## Content and data

Current page content is colocated with route components. The long-term content representation and source are intentionally undefined.

Do not introduce a CMS, database, API, state-management library, or content abstraction until a current product requirement or repeated maintenance problem justifies it. Any professional content model must preserve evidence accuracy, contribution boundaries, confidentiality, and reuse requirements from `PRODUCT_REQUIREMENTS.md`.

## Quality attributes

All architectural changes must preserve:

- strict TypeScript and explicit runtime guards at external boundaries;
- semantic HTML and accessibility as product requirements;
- intentional responsive behaviour;
- readable, content-first presentation;
- small, focused, reversible changes where practical;
- measured performance decisions;
- proportional automated and manual validation;
- a buildable and deployable repository.

Biome owns linting, formatting, and import organisation. TypeScript owns static type checking. Testing and automated accessibility tooling remain undefined until the corresponding quality-foundation tasks establish them.

## Dependency and abstraction policy

Add a dependency only when it solves a concrete current problem better than the platform or existing dependencies. Prefer composition and direct code over speculative wrappers, generic infrastructure, or premature abstractions.

Keep code close to the route, component, or application boundary that owns it. Extract shared behaviour only when reuse, change pressure, testability, or a clearer public interface justifies the new boundary.

## Currently undefined

The following are not architectural commitments:

- the professional-content schema and source;
- reusable visual primitives and component-level styling boundaries;
- unit, component, end-to-end, or automated accessibility testing tools;
- remote data loading, persistence, APIs, or server processes;
- global client state management;
- server rendering or static generation;
- deployment provider and hosting configuration;
- performance budgets.

Resolve each area through the smallest task that has enough current evidence to make the decision. Record long-lived decisions in `docs/DECISIONS.md`.

## Review triggers

Review this architecture when a task proposes:

- a new runtime, framework, dependency category, or application layer;
- a server, API, persistence mechanism, CMS, or global state store;
- a change to rendering, routing, deployment, or content ownership;
- a boundary that conflicts with the current source structure;
- repeated implementation or testing friction that the current boundaries cannot resolve cleanly;
- evidence that an existing architectural choice prevents a product requirement from being met.

Update this document only after the architectural change is accepted. Record why a significant choice was made, its consequences, and its review triggers in `docs/DECISIONS.md`.
