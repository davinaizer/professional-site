---
createdAt: 2026-08-31
updatedAt: 2026-08-31
title: Evidence-First Professional Portfolio
status: proposed
---

# RFC — Evidence-First Professional Portfolio

**Status:** Proposed
**Scope:** Professional Website
**Primary audience:** Recruiters, hiring managers, senior engineers, and product/design-engineering interviewers
**Primary positioning:** Senior Frontend & Product Engineer
**Secondary signals:** Product thinking, design engineering, developer tooling, systems thinking, visual judgement, prototyping, and making

## 1. Summary

The Professional Website should become a public evidence projection for the CV and professional narrative rather than a conventional project showcase or a second canonical evidence repository.

The site should make it possible to answer:

> What problem was being solved, what did Davi actually own, what decisions were made, what constraints mattered, and what evidence remains?

The strongest version of this portfolio will use a small number of reusable case-study structures. It will show decisions, trade-offs, contribution boundaries, outcomes, and reflection without inflating ownership, certainty, impact, or public disclosure.

This RFC updates the proposed CDP story. `cdp-status-checker` and `mdd-github` should be treated as one architectural lineage:

```text
Operational problem
        │
        ▼
CDP Status Checker
operational dashboard
        │
        │ GitHub interaction became a reusable problem
        ▼
mdd-github
extracted GitHub Enterprise subsystem
        │
        │ later consumer / boundary
        ▼
Offer Builder
deployment and retrieval tooling
```

`mdd-github` is therefore supporting evidence inside the CDP case study, not a separate flagship project. It should be described as shared internal-tooling infrastructure across multiple Gamesys projects rather than as a one-off library. The attached technical report directly corroborates Offer Builder as a consumer. The user's clarification is that “all projects” was loose: the library was used across multiple Gamesys projects, including CDP Status Checker, Offer Builder, and other tooling. Remote Offer Viewer is recalled as a particularly interesting consumer, but its source is no longer available for inspection. The exact historical extraction sequence remains subject to Git-history verification because the current `cdp-status-checker` snapshot appears to contain its own browser-side GitHub client rather than an import of `mdd-github`.

## 2. Context

The existing professional narrative already communicates a coherent profile: frontend and product engineering, internal tooling, workflow automation, frontend architecture, developer experience, and technical direction.

The missing layer is not more claims. It is the evidence behind them:

- decisions and alternatives;
- constraints and operating context;
- personal contribution versus team contribution;
- the difference between production, exploratory, and private work;
- concrete outcomes and their confidence level;
- surviving code, screenshots, documents, or history;
- and honest reflection on what would change today.

This becomes more important with increasing seniority. Implementation alone is less differentiating than the ability to understand a system, identify friction, choose a proportionate intervention, and improve how work is performed.

The website should demonstrate that pattern without turning it into a slogan or a broader professional rebrand.

## 3. Problem statement

A showcase answers:

> What has Davi made?

An evidence portfolio should answer:

> How did Davi reason about real problems, and what can be inspected or responsibly discussed about the result?

Without this layer, the site risks being visually distinctive but difficult to evaluate. It may also present related repositories as unrelated projects, losing the architectural progression that is itself evidence of senior judgement.

## 4. Goals

- Make the professional proposition understandable within a short first visit.
- Support CV claims with concise, inspectable evidence.
- Show judgement through context, constraints, decisions, trade-offs, and reflection.
- Preserve personal, team, client, and organisational contribution boundaries.
- Distinguish measured outcomes from qualitative outcomes and unresolved claims.
- Represent internal or historical work through safe abstractions.
- Reuse one flexible case-study structure across projects.
- Treat related repositories as a lineage when the relationship explains the engineering decision.
- Show when a reusable subsystem became shared infrastructure across an internal tooling ecosystem.
- Keep the public repository static, manually curated, and free from private source-governance metadata.

## 5. Non-goals

- Rebranding the profile as a designer, product manager, or industrial designer.
- Publishing every historical project.
- Turning the site into a CMS, knowledge graph, or synchronised personal knowledge-management system.
- Publishing employer systems, internal identifiers, secrets, private metrics, or operational details.
- Presenting old enterprise software as current production-grade software.
- Resurrecting an unavailable enterprise environment solely to make historical code run.
- Treating a technology mention, repository, or team result as proof of sole authorship.
- Adding `mdd-github` as a separate flagship project while its strongest meaning is its extraction and reuse within a larger problem story.

This RFC does not supersede accepted repository decisions or author implementation work. Content, schema, route, and rendering changes require separate scoped tasks aligned with the current roadmap and repository contracts.

## 6. Professional positioning

The primary identity remains:

> **Senior Frontend & Product Engineer**

Supporting evidence may reveal:

- frontend engineering;
- product engineering;
- developer tooling;
- workflow and system design;
- technical leadership and influence;
- UX/UI and design engineering;
- visual design and prototyping;
- physical making and CAD.

These are dimensions of the same profile, not competing job titles. The homepage should classify the profile before the visitor needs to interpret the supporting range.

The recurring professional pattern is:

```text
Observe the workflow
        ↓
Understand the system
        ↓
Identify recurring friction
        ↓
Explore alternatives
        ↓
Design a proportionate intervention
        ↓
Build and validate it
        ↓
Improve the surrounding system
```

The CDP → `mdd-github` → Offer Builder lineage is a particularly useful example of this pattern because it shows an immediate product problem leading to an extracted reusable boundary and later reuse.

## 7. Evidence and publication rules

Every public narrative should be reviewed against four separate questions:

### 7.1 Canonical source and consumer boundary

This RFC is a Professional Site publication and content-planning proposal. It is not an evidence store, canonical career knowledge model, migration manifest, or replacement for the CognitiveOS/PKM governance workflow.

The source-of-truth direction is:

- CognitiveOS is the target canonical portfolio knowledge and evidence repository established by RFC-007.
- CognitiveOS Career `source/` is for immutable evidence and faithful source representations after the applicable transfer and validation gate.
- CognitiveOS Career `knowledge/` is for reviewed and accepted Career facts, claims, entities, and relationships.
- CognitiveOS Career `working/` is non-canonical space for proposals, extraction candidates, unresolved claims, and review material.
- `20-Assets/`, generated Bundles, resumes, exports, and the Professional Site are derived or consumer outputs. They must not become alternative sources of truth.

The current migration state matters. CognitiveOS Phase 1 established the governance and directory boundaries but did not transfer PKM source files, create Career knowledge entities, or complete the PKM cutover. The overall migration and downstream consumer handoffs remain gated. Until cutover is explicitly accepted, the standalone PKM repository remains protected migration input and its evidence must not be assumed to have moved into CognitiveOS.

The Professional Site owns only its public-safe, manually curated projection: selected project and case-study copy, presentation structure, and approved public relationships. It must not store raw evidence, private source paths, provenance records, confidence metadata, unresolved source material, or migration state. No automatic synchronisation is implied by this RFC.

When a project is added to the site, the site should consume an approved or explicitly reviewed projection from the current canonical workflow. If the evidence or knowledge has not yet passed the applicable CogOS/PKM review gate, the site item remains deferred or is clearly marked as provisional outside the public content model.

### 7.2 What is observed?

Observed evidence may include surviving source, manifests, dependency declarations, screenshots, documented architecture, dated records, or a directly inspectable implementation.

Observed facts should be stated at the level the source supports. A repository can establish that code exists and what it appears to do; it does not automatically establish personal authorship, production adoption, dates, or impact.

### 7.3 What is user-recalled?

User-recalled context can be valuable, especially for historical work, but should remain labelled as context pending verification when the source does not establish it.

For the CDP lineage and broader Gamesys tooling context, the following is currently user-recalled context:

- `mdd-github` originated while solving the CDP Status Checker problem.
- Both original codebases were created almost from scratch in spare time.
- The GitHub interaction was extracted so it could be reused beyond the dashboard.
- `mdd-github` was used across multiple Gamesys internal-tooling projects, including CDP Status Checker, Offer Builder, and other projects.
- Remote Offer Viewer was a notable consumer, but its source is no longer accessible.

This context can guide source inspection and future drafting. It should not be silently rewritten as a verified historical dependency claim.

### 7.4 What is unknown?

Unknowns must remain visible until evidence resolves them. Relevant CDP questions include:

- the exact dates of creation and extraction;
- which code moved from the dashboard into `mdd-github`;
- whether any historical CDP revision imported or depended on the package;
- when `Offer Builder` began using it;
- which other Gamesys internal-tooling projects used it, including whether Remote Offer Viewer can be independently corroborated;
- how many other consumers existed;
- the exact production or adoption context;
- and the precise personal contribution boundary within team-owned repositories.

### 7.5 What is safe to publish?

Only approved public-safe abstractions should enter the site. Historical internal work may be described through the problem, design, technical boundary, and learning without exposing employer-specific data or confidential implementation details.

Claims should be omitted or weakened when evidence, attribution, chronology, or confidentiality is uncertain.

## 8. Proposed portfolio hierarchy

Use three levels of depth rather than creating a large archive.

### Level A — Featured case studies

#### 01 — UpNext

**Signals:** Product Engineering · Product Design · UX/UI · SwiftUI · Architecture

Use this as the strongest contemporary example of product, design, and engineering ownership in one project. The case study should make collaboration boundaries, user-flow decisions, implementation choices, and validation visible.

#### 02 — CDP Status Checker + `mdd-github`

**Signals:** Operational Product · Design Engineering · Frontend · Developer Tooling · Reusable Systems

Use this as one case study with an explicit architectural lineage. The dashboard is the user-facing problem and operational workflow. `mdd-github` is the extracted reusable subsystem and, according to user-recalled context, a shared dependency across multiple Gamesys internal-tooling projects. Offer Builder is directly evidenced in the attached report as a later consumer and demonstrates that the boundary escaped its original context. Other consumers, including Remote Offer Viewer, remain recalled leads without current source access.

#### 03 — SwiftLens

**Signals:** Developer Tooling · Architecture · Engineering Systems · Deterministic Governance

Use this to reinforce that the profile is fundamentally an engineer who can build tools and reason about systems, not only interfaces.

### Level B — Supporting work

Use shorter project records for work such as Kawaii Bridge, the professional site, selected workflow tooling, or other approved public-safe projects. Each record should have a distinct evidence purpose and should not duplicate a featured case study.

### Level C — Experience and archive

Keep the CV and experience timeline as the canonical chronology. Do not force every historical project into a standalone page. Link to deeper evidence only when it adds a materially different dimension.

The current repository's accepted project selection is a public-site projection decision, not an evidence authority. Before adding or reallocating content, reconcile this proposal with the existing selected-project and evidence-governance decisions and the canonical CogOS/PKM Career workflow.

## 9. Updated CDP case-study framing

### 9.1 Case-study identity

**CDP Status Checker + `mdd-github`**
*Operational product · frontend · GitHub Enterprise · reusable tooling*

The title keeps the user-facing product as the entry point while showing that the reusable library is part of the same story.

### 9.2 Narrative sequence

1. An operational workflow required a faster way to understand which revisions were deployed across multiple repositories and environments.
2. The CDP Status Checker was built as a dashboard for that problem, with the implementation and design work treated as one product/tooling effort.
3. Repeated GitHub operations exposed a separate but related infrastructure problem.
4. `mdd-github` was created as a reusable GitHub Enterprise abstraction around the operations needed by the tooling.
5. The abstraction became useful beyond the original dashboard and, according to user-recalled context, was reused across multiple Gamesys internal-tooling projects.
6. Offer Builder later used `mdd-github` as a retrieval/deployment boundary; this is directly described in the attached technical report and should still be checked against the local source and history.
7. The case study closes with what the surviving code reveals today: the strengths of the boundary, the limitations of the historical implementation, and the changes that would be made now.

### 9.3 Architectural interpretation

The important evidence is not merely that two repositories exist. It is the progression:

```text
Immediate operational need
        ↓
CDP Status Checker
dashboard and workflow
        ↓
repeated GitHub operations identified as reusable friction
        ↓
mdd-github
GitHub Enterprise blob/tree/commit/ref/branch/PR boundary
        ↓
Offer Builder
later retrieval and deployment consumer
```

This should be presented as an architectural evolution, not as three unrelated project entries.

### 9.4 Required caveat

The current `cdp-status-checker` snapshot appears to use its own browser-side GitHub client and does not visibly import `mdd-github`. Therefore the public narrative must not currently say:

> `cdp-status-checker` depends on `mdd-github`.

That statement requires Git-history or additional source verification.

The safer current wording is:

> “While working on CDP Status Checker, I extracted the repeated GitHub operations into `mdd-github`, a reusable abstraction that became shared internal-tooling infrastructure and was later used by Offer Builder.”

The extraction and broader multiple-project-use wording are based on user-recalled historical context. The attached technical report directly corroborates Offer Builder's use of `mdd-github`, but the full Gamesys consumer set, including Remote Offer Viewer, still requires source and Git-history verification. If verification cannot establish the exact sequence or adoption breadth, retain the distinction in the case study rather than flattening it.

### 9.5 Contribution boundary

The narrative may say that the user created or built the projects only at the strength supported by the source and recollection. It should not imply sole authorship of a team-owned package without explicit evidence.

Preferred wording while verification is incomplete:

- “I built much of the initial tooling in my spare time.”
- “I created the reusable library while solving the dashboard problem.”
- “The package became shared Gamesys internal-tooling infrastructure across multiple projects, including a reusable boundary used by Offer Builder.”

Avoid:

- “I single-handedly built the company-wide platform.”
- “The dashboard was production-grade monitoring.”
- “`mdd-github` was always a dependency of CDP Status Checker.”
- unsupported adoption, speed, repository-count, or reliability metrics.

### 9.6 Shared Gamesys internal-tooling role

The user clarifies that “all projects” was loose: `mdd-github` was used across multiple Gamesys internal-tooling projects, including CDP Status Checker, Offer Builder, and other projects. Remote Offer Viewer is recalled as the coolest or most interesting consumer, but that codebase is no longer accessible.

This is strategically important because it changes the library's role in the story: it was not merely extracted for one dashboard, but became a common platform boundary for a family of Gamesys tools.

The attached technical report directly supports a narrower claim. It describes `mdd-github` as a reusable deployment/retrieval boundary, shows Offer Builder's GitHub service using it, and notes that several helpers were marked for further movement into the library. The report does not establish a complete consumer inventory, production adoption, or the details of inaccessible consumers such as Remote Offer Viewer.

Use the following evidence progression:

1. **Directly supported:** `mdd-github` is a reusable GitHub Enterprise library and Offer Builder uses it as a retrieval/deployment boundary.
2. **User-recalled pending verification:** the library was reused across multiple Gamesys internal-tooling projects, including additional projects no longer accessible.
3. **Still unknown:** the complete consumer set, whether Remote Offer Viewer can be corroborated, adoption level, dates, and exact personal contribution across those repositories.

Until the broader inventory is verified, use this safer public formulation:

> “I extracted `mdd-github` from the CDP Status Checker problem into reusable GitHub Enterprise infrastructure; the library later formed a shared boundary across multiple Gamesys internal-tooling projects, including Offer Builder.”

## 10. Local source and history verification

Both original codebases exist locally, but neither can currently be run outside the enterprise environment for which it was built. This is a provenance and execution constraint, not a reason to discard the evidence.

The recommended next action is read-only source and Git-history inspection:

1. Inspect both repositories together, including manifests, import paths, public interfaces, and README or documentation files.
2. Use Git history to identify creation dates, extraction commits, renamed or moved files, and dependency introduction points.
3. Inspect the Offer Builder dependency boundary and the code paths that consume `mdd-github`.
4. Inventory the other internal tooling repositories and search their manifests, imports, and Git history for `mdd-github` consumers.
5. Compare the current CDP snapshot with historical revisions to determine whether its browser-side client predates, replaced, or coexisted with the extracted library.
6. Treat inaccessible consumers such as Remote Offer Viewer as evidence leads, not verified source material.
7. Record findings only through the existing CogOS/PKM Career workflow and its already-governed source, knowledge, working, audit, or migration records. Do not create a parallel evidence file in the Professional Site repository.
8. Derive only the sanitised public narrative that survives the evidence and confidentiality review.

### 10.1 Project-to-site intake

Adding a project to the Professional Site should follow this consumer workflow:

1. Identify the project's canonical record and aliases in the current CogOS/PKM workflow. Do not create a second project record in the site as a substitute for missing canonical knowledge.
2. Confirm identity, chronology, evidence, ownership, uncertainty, and confidentiality in that existing workflow. Preserve `Unknown`, `Needs Verification`, and conflicting states where they remain unresolved.
3. Record or verify project relationships in the canonical Career knowledge/evidence process when the applicable migration and review gate allows it. For this lineage, retain CDP Status Checker, `mdd-github`, Offer Builder, and Remote Offer Viewer as related project identities or consumer relationships rather than losing them during public projection.
4. Choose the smallest public representation: CDP Status Checker + `mdd-github` as one case study, Offer Builder as a supporting consumer, and Remote Offer Viewer only if a safe, evidence-backed public treatment becomes possible.
5. Copy only approved public-safe narrative into the Professional Site's static content projection. Do not copy raw source evidence, private provenance, migration metadata, or unresolved working material.
6. Use the site's public relationships to connect approved claims and evidence records; do not turn those relationships into a second evidence graph or source-of-truth model.

Do not attempt to resurrect the enterprise runtime as the default evidence-gathering strategy. Running the old systems is unnecessary for establishing architecture, source relationships, and historical decisions. Any future reproduction should be a separate task justified by a specific content gap and a safe environment.

## 11. Reusable case-study template

Each featured case study should use the same decision-record structure:

### Context

What existed, who had the problem, and what workflow or system was involved?

### My role

What did I directly own or contribute? Which responsibilities remained with other people or teams?

### Constraints

What made the problem difficult? Include enterprise boundaries, legacy systems, performance constraints, security concerns, time, or unavailable infrastructure where relevant.

### Decisions

What alternatives existed? Why was this approach chosen? What boundary or abstraction mattered?

### Product and UX

How did the interface or workflow help the intended users understand and act?

### Engineering

What implementation choices, interfaces, data flows, tests, or operational considerations mattered?

### Result

What happened? Separate measured outcomes, qualitative outcomes, and outcomes that remain unverified.

### Reflection

What would be changed today after reviewing the code and context with current engineering knowledge?

### Evidence boundary

What is directly inspectable, what is recalled, what is inferred, and what remains unknown?

## 12. Implementation sequence

The website should move from content clarity to evidence depth:

1. Keep the homepage classification clear: Senior Frontend & Product Engineer.
2. Build one reusable case-study content and presentation pattern.
3. Populate UpNext with evidence-rich, public-safe material.
4. Populate the CDP case study as a single CDP → `mdd-github` → Offer Builder lineage after source/history verification.
5. Add SwiftLens to maintain a strong engineering and tooling signal.
6. Add shorter supporting work only when it contributes distinct evidence.
7. Revisit visual polish only after the evidence system is useful and complete enough to evaluate.

Do not create a bespoke case-study system for every project. A consistent structure makes comparison easier for visitors and keeps maintenance proportional.

## 13. Acceptance criteria for the portfolio direction

- A visitor can classify the professional profile quickly and accurately.
- Featured case studies explain context, role, constraints, decisions, outcomes, and reflection.
- CDP Status Checker and `mdd-github` are represented as one lineage, with `mdd-github` as an extracted reusable subsystem rather than a separate flagship.
- Offer Builder is shown as a report-backed later consumer and supporting boundary.
- Use across multiple Gamesys internal-tooling projects is clearly labelled as user-recalled until the consumer inventory is verified; inaccessible consumers such as Remote Offer Viewer are not presented as independently verified.
- The current CDP snapshot caveat is preserved until Git history resolves the exact dependency sequence.
- Both local codebases are treated as source and history to inspect, not systems that must be resurrected.
- Public copy contains no confidential employer information, secrets, unsupported metrics, inflated ownership, or unverified production claims.
- The implementation remains consistent with the repository's static, manually curated public-content architecture.

## 14. Open questions and next evidence task

This RFC remains **Proposed** until the following are resolved:

- Which local paths contain the original CDP Status Checker and `mdd-github` repositories?
- Do both repositories retain Git history?
- Which commit or release first shows the extraction or package boundary?
- Did any historical CDP revision import the package, or was the library extracted during parallel development?
- Which Offer Builder source and dependency declaration establish its use of `mdd-github`?
- Which other Gamesys internal-tooling projects consumed `mdd-github`, including Remote Offer Viewer?
- What evidence, if any, remains for consumers whose repositories are no longer accessible?
- What contribution language is supported by repository history and team metadata?
- What level of employer-specific detail is safe to publish?

The next evidence task should be a bounded, read-only inspection of the two local repositories and relevant Git history through the existing CogOS/PKM Career workflow and its approval gates. It must not create a new evidence source in the Professional Site repository. After the canonical or explicitly approved Career record is reconciled, derive the public case-study copy here. Until PKM consolidation reaches its applicable transfer and acceptance gates, do not assume that Career source or knowledge has moved into CognitiveOS, and do not copy source material into the Professional Site as a workaround.
