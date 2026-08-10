---
createdAt: 2026-08-07
updatedAt: 2026-08-10
version: 1.2
status: active
order: ASC
---

# Decisions

## Use React Router v8 in Data Mode — 2026-08-09 23:43 BST

**Decision:** Use React Router v8 in Data Mode for client-side routing, with route objects, `createBrowserRouter`, and `RouterProvider`.

**Rationale:** The product requires multiple durable MVP routes and shared navigation. React Router is an established routing solution that integrates with the existing React and Vite foundation while providing relevant practice with modern routing concepts. Data Mode establishes a maintainable route configuration and supports future loaders, actions, pending states, and error boundaries without requiring those capabilities before a concrete need exists.

Adopting Next.js solely for its routing system would replace the current application architecture and revisit completed foundation work. The product does not currently require its server rendering, Server Component, or full-stack capabilities, so that migration would be disproportionate to the present routing requirement.

**Consequence:** The current application is rendered and routed on the client, so its content and navigation require JavaScript. This is an accepted limitation of the present foundation, not a claim that the product already provides no-JavaScript access.

**Review triggers:** Reconsider the rendering architecture if measured accessibility, performance, resilience, discoverability, deployment, or user evidence shows that client-only rendering prevents a product requirement from being met. Any replacement must solve a demonstrated problem proportionally rather than introduce server rendering or a framework migration for technology signalling.

**Deferred:** Loaders, actions, and other data-routing capabilities will be introduced only when required by a route. Server rendering, static generation, and framework migration remain undefined until a review trigger demonstrates a concrete need.

## Use Biome for baseline linting and formatting — 2026-08-07 18:00 BST

**Decision:** Use Biome as the project's baseline linter and formatter while retaining TypeScript for type checking.

**Rationale:** Biome provides the required linting, formatting, and import organisation through one dependency and one configuration file. This keeps the initial quality foundation proportional to the current application while preserving separate, explicit TypeScript validation.

**Deferred:** Testing tools and their package scripts will be selected when the testing approach is defined.
