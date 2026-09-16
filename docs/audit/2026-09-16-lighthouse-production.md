---
title: Production Lighthouse measurements
status: diagnostic
createdAt: 2026-09-16
---

# Production Lighthouse Measurements

## Scope

Lighthouse lab measurements were collected against the Cloudflare Pages production deployment at `https://davi-naizer.pages.dev/` on 2026-09-16. The reports cover the root route in mobile and desktop emulation. These results are diagnostics, not field-user evidence or a performance budget.

Source reports:

- `lighthouse-mobile-davi-naizer.pages.dev-20260916T214944.json`
- `lighthouse-desktop-davi-naizer.pages.dev-20260916T215122.json`

## Category Results

| Mode | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Mobile | 79 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

## Key Diagnostics

| Metric | Mobile | Desktop |
| --- | ---: | ---: |
| First Contentful Paint | 3.9 s | 0.5 s |
| Largest Contentful Paint | 3.9 s | 0.5 s |
| Speed Index | 3.9 s | 0.5 s |
| Total Blocking Time | 0 ms | 0 ms |
| Cumulative Layout Shift | 0.001 | 0.001 |
| Time to Interactive | 3.9 s | 0.5 s |
| Root document response | 133 ms | 47 ms |
| Total transfer size | 325 KiB | 325 KiB |

Both reports passed the checked HTTPS, console-error, document-title, meta-description, canonical, robots, and HTTP-status audits. Lighthouse reported estimated unused JavaScript savings of 55 KiB on mobile and 52 KiB on desktop; this is a diagnostic opportunity, not an accepted remediation requirement.

## Interpretation

- Desktop performance is strong in this lab run.
- Mobile performance is lower because the emulated run reports 3.9 s FCP and LCP, while blocking time and layout shift remain negligible.
- Accessibility, SEO, and best-practice categories passed at 100 in both runs.
- No code or dependency change is authorized by these measurements alone. Field Core Web Vitals are not available in these reports, so no field-performance conclusion is made.
