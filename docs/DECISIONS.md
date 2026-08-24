---
createdAt: 2026-08-07
updatedAt: 2026-08-24
version: 1.15
status: active
order: ASC
---

# Decisions

## Define claim-owned relationships between evidence and professional experience — 2026-08-24

**Decision:** Add stable `slug` identifiers to `ExperienceEntry`, define `EvidenceReference` as a discriminated reference to a project, case study, or engineering-evidence record, and define `ProfessionalClaim` with optional experience references and required supporting-evidence references. Add an empty claims collection to `ProfessionalContent`. Claims own the one-way relationships; evidence and experience do not store reciprocal claim arrays.

**Rationale:** The PKM schema makes claims the reusable assertion boundary and lets claims reference the experiences and evidence that support them. A claim-owned relationship model preserves that ownership without importing PKM entities, wiki links, provenance, or a general knowledge graph. Stable slugs make the manually curated public projection addressable without coupling identifiers to display copy.

**Consequence:** Existing experience copy remains unchanged while each entry gains a stable public slug. The current site content contains no claim records yet; `ProfessionalContent.claims` is initialised empty. Evidence references are manually curated strings distinguished by evidence kind, with no runtime resolver or reciprocal relationship state.

**Review triggers:** Reconsider the relationship owner when public content requires derived reverse indexes, relationship resolution becomes error-prone, or a validated content source replaces manual curation. Review the identifier strategy if display-independent stable slugs cannot remain unique.

**Deferred:** Evidence confidence, contribution-boundary, and confidentiality rules; claim content; relationship rendering; and PKM import or synchronisation remain undefined until later approved tasks.

## Define a static evidence contract from approved PKM projection patterns — 2026-08-24

**Decision:** Add `src/content/evidence.ts` as a separate local TypeScript contract for `Outcome`, `Project`, `CaseStudy`, and `EngineeringEvidence`. Use explicit narrative fields for case studies rather than a flexible section or block model. Let `Project` own purpose, problem, solution, technologies, and outcomes; let `CaseStudy` own personal contribution and narrative decisions; and let `EngineeringEvidence` capture actions, decisions, trade-offs, technologies, outcomes, and lessons. Keep the contract limited to manually curated site content.

**Rationale:** The PKM entity schema distinguishes a project from the experiences and claims derived from it. Its project contract owns purpose, problem, solution, technologies, and outcomes, while its experience contract owns factual actions and outcomes. The site contract adopts those useful ownership boundaries without reproducing PKM entities, relationships, or private editorial metadata such as evidence levels, provenance, unsupported claims, missing-evidence notes, and source links.

**Consequence:** The repository contains only approved site content. Because the repository is public, PKM source files and source-governance metadata must not be committed, imported, or represented as hidden application fields. Stable slugs identify site records, unknown optional fields are omitted, and claim-owned relationships are defined separately. The evidence contract adds no content values, routes, rendering, runtime validation, or PKM integration.

**Review triggers:** Reconsider the contract when approved evidence content cannot be represented clearly, repeated narrative changes justify a different boundary, or a demonstrated requirement supports a validated public export. Any import or synchronisation proposal must be reviewed as a separate architecture decision.

**Deferred:** Evidence confidence and contribution-boundary rules, confidentiality and publication governance, claim content, and project, case-study, and engineering page implementation remain undefined until later approved tasks.

## Use a contact-specific public-link contract — 2026-08-24

**Decision:** Keep `PublicLink` limited to the shared `label` and `url` fields used by identity profile links and resume access. Define `ContactLink` as a contact-specific extension with `category`, `actionLabel`, and optional `description` fields, and use it for `ProfessionalContent.contact`.

**Rationale:** Contact options need editorial context and clear actions as the contact area grows, while category and description copy do not apply naturally to every public link. A specialised type preserves the small shared link contract, keeps public content typed and manually curated, and avoids route-level label mappings or duplicated presentation copy.

**Consequence:** Contact content can render a concise metadata category, an actionable link label, and optional supporting copy without changing profile-link or resume content. The contact route remains static and uses native accessible links; no new content source, runtime validation, or shared component is introduced.

**Review triggers:** Reconsider this boundary when multiple public-link consumers need the same contextual fields, contact descriptions create repeated editorial maintenance, or a broader public-link vocabulary is required by an approved content area.

**Deferred:** Contact forms, contact-link icons, external service integrations, and a generalised metadata schema remain undefined until a demonstrated requirement exists.

## Colocate route-owned CSS with route components — 2026-08-14

**Decision:** Keep global styling layers in `src/styles/` and import them through `src/index.css`. Place CSS that belongs exclusively to one route alongside that route component in `src/pages/`, using a matching filename and a direct component import—for example, `ProfessionalSummaryPage.tsx` imports `./ProfessionalSummaryPage.css`. Continue to scope selectors with distinctive page prefixes. Migrate the existing Home route stylesheet to `src/pages/HomePage.css` as part of adopting this convention; subsequent route-owned styles follow it by default.

**Rationale:** Page components and their presentation change together. Colocation makes the ownership, discovery, maintenance, and removal of route-specific styles explicit without introducing CSS Modules, a dependency, or a component abstraction. The repository has a demonstrated need for a second page-owned stylesheet; maintaining a central registry for route-owned CSS would separate related implementation without providing a current benefit.

**Consequence:** `src/index.css` remains the entry point for reset, tokens, document-wide rules, and shared-shell styling; it is not the registry for route-owned styles. Route components directly import their own CSS. `HomePage.tsx` now owns the import for its migrated stylesheet. Shared styling patterns are not introduced merely to remove local repetition: revisit a shared styling boundary after the remaining core pages provide sufficient evidence of stable semantic reuse.

**Review triggers:** Reconsider this boundary when route-local styles cause cascade-order defects, selector collisions, repeated import or testing friction, or when stable reuse demonstrates the need for a shared styling layer, CSS Modules, or another scoped styling approach.

**Deferred:** CSS Modules and any broad stylesheet reorganisation remain undefined until a demonstrated requirement exists. The accepted shared pattern boundary and its remaining exclusions are recorded below.

## Add a small shared CSS pattern layer for stable core route reuse — 2026-08-24

**Decision:** Keep route-owned CSS colocated with route components and add `src/styles/patterns.css`, imported through `src/index.css`, for the four stable semantic patterns `.page-section`, `.page-lead`, `.eyebrow`, and `.page-intro`. Keep route-specific classes and modifiers in each page stylesheet.

**Rationale:** Contact and Core Navigation completed the core route set, and the four routes demonstrated repeated semantic styling with no need for a component abstraction. A small CSS layer removes verified duplication while preserving the shallow route ownership boundary and relevant frontend practice.

**Consequence:** The shared layer owns only the four extracted patterns and their shared mobile page-section adjustment. Home layout variations, Experience timeline styling, Summary focus styling, and Resume-specific responsive treatment remain colocated with their routes. No dependency, CSS Module, utility framework, or React wrapper is introduced.

**Review triggers:** Reconsider the boundary if shared selectors cause cascade-order defects, semantic roles diverge, route-specific modifiers become difficult to understand, or later evidence justifies extracting additional patterns.

**Deferred:** `.tag-list`, `.tag`, `.page-metadata`, `.action-link`, `.section-divider`, generic list-reset utilities, CSS Modules, utility frameworks, and React wrapper components remain undefined until demonstrated reuse or a concrete requirement justifies them.

## Use a local TypeScript contract for public professional content — 2026-08-12

**Decision:** Use `src/content/professional.ts` as the initial local, typed contract for the public professional-content projection. It exports types for public links, identity, summary, experience entries, resume access, and the aggregate projection. Content remains static and manually curated in the site; this task introduces no content values.

**Rationale:** Identity, summary, and experience information will be reused across core routes, so route-local definitions would duplicate a known public boundary. A TypeScript module gives strict compile-time checking and straightforward React imports without adding parsing, runtime validation, dependencies, or build complexity. Markdown is better suited to future narrative content, while JSON becomes useful only when the PKM can produce an accepted public export that warrants a validated import boundary.

**Consequence:** `src/content/professional.ts` is the local source of truth for the public-content shape. Collections are readonly; experience dates are represented as distinct start and optional end values so current roles can be unambiguous. `ResumeAccess` composes `PublicLink` with an optional updated date. The module contains no PKM imports, paths, provenance, confidentiality, or source-governance metadata.

**Review triggers:** Reconsider this representation when accepted public-ready PKM records and repeated manual-transfer friction justify a versioned static export and validated import or generation step; when editorial authoring needs show that a narrative representation is required; or when a content requirement cannot be expressed cleanly by the current contract.

**Deferred:** PKM export/import tooling, JSON or Markdown content formats, runtime or build-time PKM integration, schema-validation dependencies, CMS or remote data loading, and public content values remain undefined until a demonstrated requirement or later approved content task exists.

## Use an editorially approved projection for public professional content — 2026-08-12

**Decision:** Define public professional content as a small, editorially approved projection: identity (name, professional headline, optional broad location, and profile links); professional summary (summary and focus areas); experience (company, role, start and end date or present, optional broad location, responsibilities, selected contributions and outcomes, and optional technologies); resume access (label, URL, and optional updated date); and contact (explicitly approved public email, URL, and professional links). Home composes identity, a short summary, selected experience highlights, and calls to Resume and Contact; it has no separate content model.

**Rationale:** The current PKM material contains converted historical sources but no accepted knowledge entities, claims, provenance records, generated resume, or evidence map. Publishing directly from it, performance reviews, or derived audits would risk unsupported claims, ambiguous chronology, confidentiality exposure, and unclear personal-versus-team attribution. A minimal projection supports the Milestone 2 professional experience while keeping public content accurate, reusable, and proportionate.

**Consequence:** Public experience entries use approved company, role, dates, optional broad location, responsibilities, selected contributions, selected outcomes, and optional technologies. Published dates use one approved consistent precision, normally month/year; uncertain employment or role boundaries must be resolved rather than inferred. Contributions and outcomes require editorial review for attribution, evidence, chronology, and confidentiality. PKM visibility, provenance, confidentiality, attribution, outcome-type, and publication-approval controls remain private source-governance metadata, not public application fields.

**Review triggers:** Reconsider this boundary when the PKM contains accepted public-ready records with sufficient governance metadata, when a public content area needs fields beyond the recorded vocabulary, or when a product requirement requires a content source, loading mechanism, or integration.

**Deferred:** PKM integration, CMS or remote data loading, generated resume, and Milestone 3 project, case-study, and engineering-evidence structures remain undefined until a demonstrated requirement exists.

## Use Cloudflare Pages for static application deployment — 2026-08-12

**Decision:** Deploy the Vite-built application to Cloudflare Pages. Retain React Router browser-history routing and configure the project to build with `pnpm build` and publish the `dist` directory. Use Cloudflare Pages' SPA fallback behaviour so direct requests to client-side routes are served by the application entry document. Configure `main` as the Cloudflare Pages production branch; Cloudflare deploys `davi-naizer.pages.dev` only when a commit reaches `main`.

**Rationale:** Cloudflare Pages provides a proportional static deployment target for the browser-only application without an application server, runtime dependency, or routing-architecture change. Deploying the protected `main` branch keeps the public site aligned with the repository's production history while avoiding deployment credentials, a second deployment workflow, and release-management ceremony that the current product does not require. Cloudflare preview deployments may be used for pull requests, but they do not update the production URL.

**Consequence:** GitHub branch protection must require the existing Quality Gate before pull requests can merge to `main`; after merge, Cloudflare Pages independently builds and deploys that commit. The existing GitHub Actions workflow remains responsible for repository checks rather than deployment. A Cloudflare account and Pages project are required. The initial deployment uses `https://davi-naizer.pages.dev`; a custom domain is not part of this decision.

**Review triggers:** Reconsider this target or deployment policy when the product requires server-side rendering, server-side logic, authenticated APIs, a deployment capability Cloudflare Pages cannot provide, material delivery reliability issues, an explicit release-approval requirement, or a demonstrated need for deployment to wait for checks on the merged commit.

**Deferred:** Custom-domain configuration, server-side capabilities, making preview deployments a required release gate, automated production smoke testing, and release- or tag-triggered deployment remain undefined until a demonstrated requirement exists.

## Use Playwright with Chromium for bounded critical-journey testing — 2026-08-11

**Decision:** Use Playwright with a Chromium project for browser-driven testing of the current critical journeys. Run the suite through `pnpm test:e2e`. Keep Playwright specs in `e2e/` and exclude that directory from Vitest discovery.

**Rationale:** The shared shell and route structure now have stable browser-observable behaviour that JSDOM cannot fully verify: direct route entry, client-side navigation, and recovery from an unknown route. Chromium provides a proportional real-browser baseline without prematurely committing to cross-browser, mobile, or visual-regression coverage.

**Consequence:** Playwright starts the local Vite server for the suite and covers the Work route, representative Home and primary navigation, and not-found recovery. Vitest continues to own non-interactive unit and component tests through `pnpm test`; the test directories remain separate so each runner executes only its own suite. The GitHub Actions Quality Gate runs `pnpm test:e2e` alongside `pnpm validate` and `pnpm build` for pull requests targeting `main` and pushes to `main`. Deployment remains outside this workflow.

**Review triggers:** Reconsider this boundary when a supported deployment target needs route-fallback verification, critical interactions require additional browser coverage, browser-specific defects appear, CI execution becomes slow or unreliable, or browser-level accessibility checks provide demonstrated value.

**Deferred:** Cross-browser and mobile coverage, browser-level automated accessibility checks, visual regression testing, network mocking, broad route coverage, and deployment remain undefined until a demonstrated requirement exists.

## Use Vitest, React Testing Library, and axe checks for the initial component-test foundation — 2026-08-11

**Decision:** Use Vitest with JSDOM for non-interactive unit and component test execution, React Testing Library for rendered DOM and semantic assertions, and `vitest-axe` for automated accessibility regression checks. Run the suite through `pnpm test` and include it in `pnpm validate`.

**Rationale:** The current application has a shared React shell and primary navigation whose semantic links, route-aware active state, and landmark structure are stable, user-observable behaviour. A Vite-aligned runner with DOM-level assertions establishes a fast, proportional feedback loop without adding browser automation or testing every placeholder route. Axe checks add useful regression coverage for detectable rendered-DOM accessibility defects and supplement—rather than replace—the existing manual keyboard, responsive, and contrast verification.

**Consequence:** Tests use router-aware in-memory rendering and live beside the shell and reusable component they cover. JSDOM does not provide the canvas support required for axe's `color-contrast` rule, so that rule is disabled in component tests; concrete contrast remains subject to real-browser/manual verification. The production runtime and bundle are unaffected because the test tooling is development-only.

**Review triggers:** Reconsider this boundary when critical user journeys require browser-driven verification, when browser-only behaviour or CSS-dependent accessibility checks need automated coverage, when repeated test setup obscures intent, or when test execution becomes slow or unreliable.

**Deferred:** Browser-level automated accessibility testing, visual regression testing, network mocking, and broad page-level coverage remain undefined until a demonstrated requirement exists.

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
