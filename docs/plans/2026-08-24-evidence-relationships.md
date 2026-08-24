---
title: Define evidence connections to experience and professional claims
status: approved
createdAt: 2026-08-24
approvedAt: 2026-08-24
---

# Define evidence connections to experience and professional claims

## Objective

Define the public, static relationship contract connecting professional claims to existing experience entries and supporting projects, case studies, and engineering evidence.

## Accepted relationship model

Use claim-owned, one-way relationships:

```text
ProfessionalClaim
├── experienceSlugs
└── supportingEvidence

supportingEvidence
├── project slug
├── case-study slug
└── engineering-evidence slug
```

`ProfessionalClaim` owns the relationships. Evidence and experience records do not contain reciprocal claim arrays. This avoids duplicated relationship state and follows the PKM ownership principle without importing the PKM entity model.

The public contract will use a discriminated `EvidenceReference` union:

```ts
type EvidenceReference =
	| { kind: "project"; slug: string }
	| { kind: "case-study"; slug: string }
	| { kind: "engineering"; slug: string };

type ProfessionalClaim = {
	slug: string;
	statement: string;
	experienceSlugs?: readonly string[];
	supportingEvidence: readonly EvidenceReference[];
};
```

## Scope

- Add stable slugs to existing `ExperienceEntry` records.
- Define `EvidenceReference` and `ProfessionalClaim`.
- Add `claims` to `ProfessionalContent`.
- Initialise the current manually curated content projection with an empty claims collection; do not add claim content.
- Document relationship ownership, stable identifiers, manual reference resolution, and public-repository constraints.
- Record the accepted relationship decision in `docs/DECISIONS.md`.

## Exclusions

- No professional claim content.
- No evidence-to-claim or experience-to-claim reciprocal fields.
- No page, route, navigation, or rendered relationship display changes.
- No PKM imports, wiki links, source paths, provenance, confidence, or private governance fields.
- No confidence, contribution-boundary, or confidentiality rules.
- No runtime relationship resolver or validation dependency.
- No changes to existing professional copy beyond stable identifiers.

## Completion criteria

1. Every existing experience entry has a stable public slug without changing its approved copy.
2. Evidence references distinguish project, case-study, and engineering-evidence targets.
3. Professional claims have a stable slug, statement, optional experience references, and supporting evidence references.
4. Claim-owned relationship direction is explicit and no reciprocal relationship fields are introduced.
5. The public-repository boundary remains intact and is documented.
6. Existing application behaviour remains unchanged.

## Implementation sequence

1. Add stable experience slugs.
2. Add the evidence-reference and professional-claim types.
3. Extend the professional-content aggregate with claims and initialise it empty.
4. Update architecture and decision documentation.
5. Review the diff for relationship duplication and public-repository safety.
6. Run the repository validation and production build.

## Validation

- `pnpm typecheck`
- `pnpm check`
- `pnpm test`
- `pnpm build`
- Manual review of stable identifiers, relationship ownership, reference categories, and public-repository safety.
