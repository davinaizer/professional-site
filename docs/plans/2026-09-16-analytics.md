---
title: Professional Site Analytics Baseline
status: approved
createdAt: 2026-09-16
updatedAt: 2026-09-16
---

# Professional Site Analytics Baseline

## Objective

Establish the smallest defensible, zero-cost analytics baseline for the production Professional Site using Cloudflare Web Analytics, with Google Search Console retained as the complementary search-visibility source.

The baseline should reduce uncertainty about route usage, discoverability, and real-user performance without turning the content-first site into a product-analytics system.

## Project position

- **Completed:** The MVP, release-readiness review, production Lighthouse diagnostics, and the analytics platform comparison are complete. Cloudflare Web Analytics was selected as the initial working model because the site is already hosted on Cloudflare and no paid analytics service is currently justified.
- **Current:** Milestone 5's highest-priority task is the approved Cloudflare analytics baseline. The current site has lab performance diagnostics but no field Core Web Vitals or route-usage evidence.
- **Next outcome:** A production-only measurement baseline will provide bounded evidence for future content, UX, and performance decisions while preserving the option to add a behavioural platform later.
- **Workflow stage:** This plan is approved. Implementation, validation, and formal review remain pending.

## Product objective and roadmap milestone

This task supports the objectives to:

- support job applications;
- maintain frontend engineering fluency; and
- demonstrate engineering judgement.

It advances Milestone 5 — Evidence-Driven Evolution by adding measurement only where it can improve a real product or engineering decision.

## Decision context

### Observed

- The application is a browser-only React and TypeScript site with static, manually curated content.
- The production deployment is hosted on Cloudflare.
- Traffic volume is not a product success metric.
- Local and Lighthouse measurements exist, but field performance evidence is unavailable.
- The current site has no known requirement for custom events, campaign attribution, session replay, experiments, or user identification.

### Inferred

- Route usage, referrers, device context, and real-user performance are useful first signals.
- Direct measurement of resume or contact intent may become useful, but it is not currently a demonstrated blocker.
- A low-maintenance, reversible baseline has higher expected value than a more capable platform that creates additional configuration and privacy burden.

### Unknown

- Whether production traffic will be sufficient to produce useful field performance trends.
- Whether the current Cloudflare Pages configuration will use automatic analytics injection or require a manual snippet.
- Whether six months of available history will be sufficient for future comparisons.
- Whether direct resume-download, contact-link, or campaign measurement will later be needed.
- The final privacy disclosure and applicable consent treatment for the production audience; vendor documentation is not treated as a legal conclusion.

## Working model

### Cloudflare Web Analytics

Use Cloudflare Web Analytics for:

- page views and visits;
- route and path usage, including client-side route changes;
- referrers;
- device, browser, and operating-system context; and
- real-user performance and Core Web Vitals where traffic is available.

Cloudflare's current documentation states that Web Analytics is free, privacy-focused, supports SPA route tracking, and does not currently support UTM parameters or custom events. It also documents a six-month analytics access period.

### Google Search Console

Use Google Search Console separately for:

- search impressions;
- search clicks;
- click-through rate;
- average position; and
- search queries and pages.

Search Console is complementary search evidence, not a replacement for site analytics and not a runtime dependency of the application.

## Scope

- Confirm the Cloudflare Pages project and production hostname that should receive analytics.
- Determine whether the current Cloudflare Pages configuration supports automatic injection or requires the documented manual snippet.
- Enable Cloudflare Web Analytics for the production deployment only.
- Verify page, route, referrer, device, and real-user performance signals where data is available.
- Confirm that preview and local environments are not included in the production measurement baseline.
- Record the observed setup, available signals, limitations, and privacy boundary in the implementation review evidence.
- Confirm Google Search Console remains the complementary search-visibility source.

## Explicit exclusions

- No Umami, PostHog, Google Analytics 4, or second behavioural analytics platform.
- No custom event or funnel workaround for resume downloads, contact links, or external-profile clicks.
- No UTM or campaign-attribution implementation in this task.
- No session replay, heatmaps, user identification, personal information, form content, or arbitrary event properties.
- No analytics npm dependency, analytics abstraction, API, persistence layer, or dedicated runtime data model.
- No public-content rewrite or new product area.
- No performance optimisation based solely on newly collected telemetry; telemetry is evidence, not authorisation for unrelated remediation.

## Risks and controls

| Risk | Control |
| --- | --- |
| Low traffic produces unstable or unavailable field data | Report data availability honestly and keep Lighthouse results labelled as lab diagnostics. |
| Preview or developer activity pollutes production evidence | Restrict activation to the confirmed production hostname and exclude owned traffic where the platform supports it. |
| Analytics is mistaken for career-outcome evidence | Treat page views, visits, and route journeys as behavioural proxies only; use direct recruiter and interview feedback for outcomes. |
| Vendor limitations create pressure for speculative tooling | Use the review triggers below; do not add a second platform without a demonstrated decision need. |
| Privacy expectations change or are unclear | Confirm the public disclosure and applicable treatment before activation; do not infer legal compliance from vendor claims. |

## Completion criteria

- Cloudflare Web Analytics is enabled and verified for the confirmed production deployment.
- Analytics data is observable for current production routes and real-user performance where traffic is available.
- Preview and local environments are excluded from the production baseline.
- The known limitations are explicit: no custom events, UTM attribution, direct resume/contact-click measurement, or guaranteed long-term history.
- No personal information, identity data, session replay, or arbitrary event properties are collected.
- Google Search Console is recorded as the complementary source for search visibility and queries.
- No additional analytics platform or unnecessary application dependency is introduced.
- No unvalidated career, recruiter, interview, or user-intent conclusion is drawn from analytics data.

## Implementation sequence

1. Confirm the production Cloudflare Pages project, hostname, and current deployment state.
2. Review the current Cloudflare Web Analytics setup path and choose automatic Pages injection or the documented manual snippet without adding an application dependency.
3. Confirm the production-only and privacy-minimised configuration before activation.
4. Enable the baseline and deploy any required configuration or source change.
5. Verify direct entry, client-side navigation, refresh, and representative routes in the production deployment.
6. Verify the Cloudflare dashboard receives route and performance data where traffic is available.
7. Confirm Search Console remains separate and complementary.
8. Record the implementation evidence, observed limitations, and any unresolved unknowns before formal review.

## Validation

- Inspect the Cloudflare configuration and production deployment settings.
- Use a production browser session to verify representative route changes and direct route entry.
- Confirm the analytics beacon is absent from local and preview environments when those environments are in scope for verification.
- Check that the Cloudflare dashboard exposes only the intended bounded signals.
- Verify that no application code sends personal information or unapproved event properties.
- Run `git diff --check` for documentation-only changes.
- If application source changes are required, run the repository's relevant `pnpm validate` and `pnpm build` checks before formal review.

## Rollback

Disable Cloudflare Web Analytics through the confirmed Cloudflare Pages or Web Analytics configuration. If a manual snippet was added, remove only that integration and redeploy. Rollback must not alter public content, route behaviour, or the application's content model.

## Review triggers

Reassess this working model only when a demonstrated need requires:

- direct measurement of resume, contact, or external-profile actions;
- UTM campaign attribution;
- history beyond the available Cloudflare retention period;
- detailed interaction diagnosis;
- experiments or feature flags; or
- analytics for a genuinely interactive product area.

## References

- [Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/about/)
- [Cloudflare Web Analytics for SPAs](https://developers.cloudflare.com/web-analytics/get-started/web-analytics-spa/)
- [Cloudflare Web Analytics FAQ](https://developers.cloudflare.com/web-analytics/faq/)
- [Google Search Console Performance report](https://support.google.com/webmasters/answer/7576553)
- [Product requirements](../../PRODUCT_REQUIREMENTS.md)
- [Architecture](../ARCHITECTURE.md)
- [Decision record](../DECISIONS.md#use-cloudflare-web-analytics-as-the-initial-zero-cost-baseline--2026-09-16)
