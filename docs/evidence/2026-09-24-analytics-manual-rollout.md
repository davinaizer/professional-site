---
title: Cloudflare Web Analytics manual rollout evidence
status: partial
createdAt: 2026-09-24
updatedAt: 2026-09-24
---

# Cloudflare Web Analytics Manual Rollout

## Scope

Implement the approved manual, production-only Cloudflare Web Analytics snippet and a persistent, on-demand opt-out control.

## Verified in the repository

- `src/app/cloudflare-analytics.ts` uses the newly generated public Cloudflare site token supplied by the developer.
- The beacon is added only in a production build on `davi-naizer.pages.dev`, unless an opt-out is stored in browser local storage.
- The loader fails closed if local storage cannot be read and avoids adding a second script when a Cloudflare beacon is already present.
- The footer provides an on-demand analytics settings dialog without an entry-time popup. The saved preference is applied on subsequent document loads.
- The disclosure describes the provider, analytics purpose, page/referrer/country/device/performance categories, Cloudflare's reported retention, and the opt-out control.
- Cloudflare's automatic Pages injection was disabled and a manual Web Analytics site was created, as reported by the developer. The newly generated token is configured in the source.

## Repository validation

- `pnpm check` passes.
- Focused Cloudflare analytics and settings tests pass; they cover production-host gating, the token in the manual snippet, local preference handling, no entry popup, and settings behaviour.
- `pnpm test:e2e` passes, including narrow viewport and saved opt-out UI checks.
- `pnpm build` passes.
- `pnpm validate` remains blocked by the unrelated expectation in `src/pages/ExperiencePage.test.tsx` that does not account for the earlier-career section heading.

## Pending deployment verification

The first deployment with the manual snippet has not yet occurred. Therefore this evidence does not yet establish:

- that the deployed production and preview HTML no longer receives the previous automatic beacon;
- that the manual beacon loads on production and is absent on preview and local environments;
- that opting out and re-enabling analytics changes subsequent production beacon requests; or
- that the newly created manual Web Analytics site receives the expected dashboard signals.

Update this record with the deployed response and beacon checks before formal review.
