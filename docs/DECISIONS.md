---
createdAt: 2026-08-07
updatedAt: 2026-08-11
version: 1.5
status: active
order: ASC
---

# Decisions

## Use Vitest, React Testing Library, and axe checks for the initial component-test foundation — 2026-08-11

**Decision:** Use Vitest with JSDOM for non-interactive unit and component test execution, React Testing Library for rendered DOM and semantic assertions, and `vitest-axe` for automated accessibility regression checks. Run the suite through `pnpm test` and include it in `pnpm validate`.

**Rationale:** The current application has a shared React shell and primary navigation whose semantic links, route-aware active state, and landmark structure are stable, user-observable behaviour. A Vite-aligned runner with DOM-level assertions establishes a fast, proportional feedback loop without adding browser automation or testing every placeholder route. Axe checks add useful regression coverage for detectable rendered-DOM accessibility defects and supplement—rather than replace—the existing manual keyboard, responsive, and contrast verification.

**Consequence:** Tests use router-aware in-memory rendering and live beside the shell and reusable component they cover. JSDOM does not provide the canvas support required for axe's `color-contrast` rule, so that rule is disabled in component tests; concrete contrast remains subject to real-browser/manual verification. The production runtime and bundle are unaffected because the test tooling is development-only.

**Review triggers:** Reconsider this boundary when critical user journeys require browser-driven verification, when browser-only behaviour or CSS-dependent accessibility checks need automated coverage, when repeated test setup obscures intent, or when test execution becomes slow or unreliable.

**Deferred:** End-to-end test tooling, browser-level automated accessibility testing, visual regression testing, network mocking, and broad page-level coverage remain undefined until a demonstrated requirement exists.

## Use a centred primary navigation and Work evidence hub — 2026-08-11

**Decision:** Use a shared header with a home-linked identity at the left, centred direct navigation to Experience, Work, Engineering, and Resume, and a visually distinct Contact link at the right. Add a Work index route that groups the existing Projects and Case Studies routes. Keep Engineering top-level. Preserve Summary, Projects, and Case Studies as independently addressable routes without presenting them as primary-navigation items.

**Rationale:** Recruiters need direct access to career history, the CV, and contact details, while hiring managers need a concise path to professional evidence and engineering judgement. Projects provide scan-friendly evidence and case studies provide selected depth, so grouping them under Work establishes their relationship without hiding destinations behind a dropdown. Engineering represents the product's engineering practice and decisions rather than a project subtype. A three-column CSS Grid keeps the core navigation genuinely centred even though the identity and Contact link have different widths.

**Consequence:** `/work` is the durable evidence entry point; `/projects` and `/case-studies` remain stable direct destinations. The header has no separate Home item because the identity links home. Contact uses anchor semantics because it navigates. Responsive CSS reflows the same visible links rather than introducing a menu control or client state.

**Review triggers:** Reconsider the primary navigation when real content shows that Summary needs persistent direct discovery, when additional evidence areas make the Work grouping unclear, when measured navigation behaviour indicates the visible-link model is unusable at supported viewports, or when user evidence justifies a different navigation interaction.

**Deferred:** The final content and layout of the Work index, the future relationship between individual projects and case studies, whether Summary needs a dedicated content destination, custom focus treatment, and any dropdown or menu interaction remain undefined until a demonstrated requirement exists.

## Use reference hex values for the initial CSS token foundation — 2026-08-10

**Decision:** Use the hex values defined in `docs/design/DESIGN.md` for the initial CSS token foundation. Defer OKLCH colour values until a demonstrated need justifies their adoption.

**Rationale:** `docs/DESIGN_PRINCIPLES.md` establishes OKLCH as the long-term colour direction, while the current visual reference supplies specific hex values. Converting those values now would add a colour-authoring decision without a current requirement for themes, derived palettes, or token transformation. Semantic CSS custom properties preserve a clear future conversion path without changing the approved foundation visuals.

**Consequence:** `src/styles/tokens.css` remains the CSS-first source for the implemented palette and uses the reference hex values. Accessibility still requires contrast verification at the point where a colour is assigned to a concrete text, control, or focus treatment.

**Review triggers:** Reconsider this decision when the product needs colour modes, derived colour scales, systematic contrast adjustment, a token-generation pipeline, or another demonstrated colour-maintenance problem.

**Deferred:** OKLCH conversion, derived colour tokens, theme modes, and token transformation tooling remain undefined until a review trigger is met.

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
