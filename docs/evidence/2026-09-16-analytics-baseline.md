---
title: Cloudflare Web Analytics baseline evidence
status: partial
createdAt: 2026-09-16
updatedAt: 2026-09-16
---

# Cloudflare Web Analytics Baseline

## Scope

Production target: `https://davi-naizer.pages.dev/`

The evidence covers the initial production Cloudflare Web Analytics activation and the bounded signals available from the dashboard. It does not establish user intent, recruiter engagement, interview impact, or career outcomes.

## Verified

- Cloudflare Web Analytics is enabled for the Pages project.
- Chrome DevTools confirmed the production beacon request to `https://static.cloudflareinsights.com/beacon.min.js`.
- The dashboard exposes page views, visits, paths, referrers, device types, browsers, operating systems, countries, and real-user performance metrics where data is available.
- The dashboard showed current route activity including the root, Experience, Resume, and Contact routes.
- The Web Analytics view showed Core Web Vitals results for the observed sample, including LCP, INP, and CLS. The sample is too small to support a general field-performance conclusion.
- The current dashboard exposes a maximum selectable date range of 30 days.
- The accepted analytics boundaries are documented in `docs/DECISIONS.md`: aggregate statistical analytics only, with no user identity, custom events, UTM attribution, session replay, or second analytics platform.
- Google Search Console remains a separate complementary source for search visibility and queries.

## Outstanding

- The beacon is also injected into `https://develop.davi-naizer.pages.dev/`, so the measurement is not yet production-only.
- The analytics/privacy disclosure and simple free opt-out are not yet implemented or verified.
- Cloudflare documentation states that Web Analytics data is available for six months, but the current dashboard evidence exposes only a 30-day selectable range for this site. The effective site-specific history remains unresolved.
- Local-environment beacon absence and preview-environment exclusion require explicit verification after the integration path is corrected.

## Interpretation

The initial activation provides bounded route and real-user performance evidence. The dashboard data is observational, and low or uneven traffic can make trends unstable. No conclusions about individual visitors or professional outcomes are drawn.
