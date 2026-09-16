# UX Intent And Interaction Baseline

Date: 2026-09-16  
Status: Complete for the read-only baseline task  
Scope: Current local branch and current-branch Cloudflare Pages preview

## Outcome

The current application provides a coherent, keyboard-accessible route and link
baseline. No responsive overflow, text-spacing clipping, or font-induced layout
failure was observed in the tested states. The first remediation should be a
small interaction-affordance pass that normalises equivalent navigation and
action feedback without changing the information architecture. Long-form
continuation and not-found polish remain separate later tasks.

The visitor journeys below remain hypotheses. This record is not user research
and does not establish recruiter, hiring-manager, engineer, or contact-ready
behaviour in the field.

## Intent Hypotheses

| Visitor | Hypothesised outcome | Current entry points | Needed evidence | Candidate continuation |
| --- | --- | --- | --- | --- |
| Recruiter | Establish role fit and obtain the current CV | Home, Resume, shared route | Identity, focus, chronology, CV | Experience or Resume |
| Hiring manager | Evaluate judgement, scope, and contribution boundaries | Home, Experience, Work | Role summaries, contributions, projects, case study | Work or Contact |
| Engineer | Inspect technical depth and implementation quality | Work, Projects, Case Studies, repository | Decisions, constraints, technologies, reflection | Related evidence or Experience |
| Contact-ready visitor | Start a professional conversation | Any route | Clear email and LinkedIn destinations | Contact or email |

No role-specific navigation or personalisation is justified by this baseline.

## Method And Coverage

- Inspected the supported routes `/`, `/experience`, `/work`, `/projects`,
  `/case-studies`, `/resume`, and `/contact`, plus `/unknown-route`.
- Inspected `src/app/App.tsx`, `src/components/PrimaryNavigation.tsx`,
  `src/app/Footer.tsx`, all route page components, and their route-owned CSS.
- Rendered with Chromium at 1440 x 900, 390 x 844, 320 x 900, and 720 x 900.
  The 720 CSS-pixel layout is the practical equivalent of a 1440 CSS-pixel
  viewport at 200% browser zoom for reflow inspection; headless browser page
  zoom itself was not used as field evidence.
- Traversed interactive elements with the keyboard on every inspected route and
  checked hover and focus-visible states for representative interaction types.
- Applied a temporary WCAG text-spacing stress style using 1.5 line height,
  0.12em letter spacing, 0.16em word spacing, and 2em paragraph/list spacing.
  The style was injected only into the test browser and was not committed.
- Emulated `prefers-reduced-motion: reduce`.
- Observed normal font loading, blocked external Google Font requests to inspect
  fallback fonts, and delayed font-file requests by 1.5 seconds.
- Ran `pnpm validate`, `pnpm build`, and `pnpm test:e2e`.
- Sampled navigation/resource timings against the current preview deployment.
  These are lab diagnostics, not field Core Web Vitals or user research.

## Interaction Inventory

| Surface | Destination or purpose | Current affordance and state | Keyboard and name evidence |
| --- | --- | --- | --- |
| Identity | Home | Serif wordmark; no underline; accent period; hover changes colour | First header stop; accessible name `Davi Naizer` |
| Primary navigation | Experience, Work, Resume | Uppercase mono links; active route uses accent colour and underline; hover uses accent underline | Header order is identity, Experience, Work, Resume, Contact; active links expose `aria-current="page"` through `NavLink` |
| Header Contact | Contact | Bordered accent action; hover fills accent background and changes text colour | Header stop after primary navigation; accessible name `Contact` |
| Home primary action | Experience | Filled accent action; hover becomes outlined/transparent | 37.2px high at desktop and mobile; accessible name `Explore experience` |
| Home secondary actions | Resume download and Contact | Persistent underlines; no filled container | 36.2px high at desktop and mobile; resume has `download`; accessible names are `Download Resume` and `Contact` |
| Home timeline link | Experience | Persistent inline underline | 19.2px high; inline-link target-size exception applies; accessible name `View career timeline` |
| Work evidence links | Projects and Case Studies | Persistent underlined inline links | 16.2px high; inline-link target-size exception applies; destinations are unambiguous |
| Project experience links | Experience anchors | Persistent underlined inline links; long labels wrap | Inline links remain text links rather than buttons; wrapped labels produce larger bounding boxes without a demonstrated target-size defect |
| Resume action | PDF download | Bordered action with persistent destination text | 43.6px high on the Resume route; `download` is present and target is the approved PDF |
| Contact rows | Email and LinkedIn | Full-row link layout with underlined title and contextual action text on desktop; contextual action is hidden on mobile | Accessible names are `Send an email` and `View LinkedIn profile`; row link spans the available content width |
| Footer controls | LinkedIn, GitHub, Email | Icon-only links with 44 x 44px visual hit areas; colour changes on hover | Explicit accessible labels; keyboard order follows page content after the footer text |
| Not-found recovery | Home | Persistent underlined inline link | Accessible name `Return home`; one recovery destination is present |

## Observations

### Confirmed strengths

1. **Responsive containment:** At 320px, 390px, and the 720px 200%-equivalent
   layout width, every supported route had equal document and viewport widths.
   No inspected visible element extended outside the viewport.
2. **Text-spacing resilience:** Home, Experience, Projects, Case Studies, and
   Contact retained equal document and viewport widths under the temporary text
   spacing override. No element with hidden overflow clipped its content.
3. **Font resilience:** Blocking the external Google Font requests changed the
   font set but did not produce horizontal overflow. Delaying font files by 1.5
   seconds produced a loading state before the fonts settled and did not change
   the measured viewport width.
4. **Keyboard order and focus:** Keyboard traversal followed DOM order on all
   inspected routes. Every focused link exposed the existing 2px accent
   `:focus-visible` outline. No focus trap was observed.
5. **Motion baseline:** No CSS animation or non-zero transition is currently
   used for the inspected interactions. Reduced-motion emulation matched and
   reported zero transition duration and no animation names.
6. **Route and build health:** `pnpm validate`, `pnpm build`, and the six
   existing Chromium journey tests passed. The current preview returned HTTP
   200 for `/`, `/projects`, and `/case-studies` during the performance sample.

### Candidate findings

| ID | Finding | Impact | Confidence | Cost | Trace |
| --- | --- | --- | --- | --- | --- |
| F1 | Equivalent navigation and action types use several distinct treatments: plain shell links, active underlines, a filled Home action, underlined text actions, outlined Resume access, and contact-row links. The differences are understandable in context, but the state vocabulary is not fully normalised. | Medium: may make repeated interaction feedback less predictable, especially across Home, Work, Resume, and Contact. | High for the visual observation; unconfirmed as a visitor problem. | Low to medium | All visitor hypotheses; `src/styles/global.css`, `src/styles/shell.css`, `src/pages/HomePage.css`, `src/pages/ResumePage.css`, `src/pages/ContactPage.css` |
| F2 | Experience, Selected Projects, and Case Studies end after their content and footer without a contextual continuation to a related route. | Medium: a visitor evaluating evidence reaches a dead end even though related Experience, Work, Resume, and Contact destinations exist. | High for the rendered observation; value of a continuation remains a hypothesis. | Low to medium | Hiring-manager and engineer hypotheses; `src/pages/ExperiencePage.tsx`, `src/pages/ProjectsPage.tsx`, `src/pages/CaseStudiesPage.tsx` |
| F3 | The not-found route is intentionally minimal: it provides a heading and one recovery link but does not use the page eyebrow/section composition used by the main routes. | Low: recovery works, but the page feels less integrated with the established editorial language. | High for the rendered observation; no recovery failure observed. | Low | Contact-ready and all-route recovery hypotheses; `src/pages/NotFoundPage.tsx` |
| F4 | At 390px, the Home page's third hero action, Contact, begins at approximately the bottom edge of the initial viewport because the action row wraps. The persistent header Contact link remains visible near the top. | Low and unconfirmed: contact access is still available, but the hero action grouping is not fully visible without a small scroll. | High for the geometry; low for user impact. | Low | Contact-ready hypothesis; `src/pages/HomePage.css` |

F1 is the smallest coherent first remediation candidate. F2 and F3 are
explicitly deferred to the subsequent reading-continuity and not-found tasks.
F4 should not be changed unless later evidence shows that the duplicate header
and hero contact paths create a real comprehension or action problem.

## Performance Diagnostics

The measurements below are diagnostics from local Chromium and one current
preview session. They must not be described as field performance or Core Web
Vitals.

### Local production build

- JavaScript output: 315.99 kB, 98.92 kB gzip.
- CSS output: 24.08 kB, 3.91 kB gzip.
- `pnpm build` passed.

### Preview browser sample

The current preview target was `https://ef3c40c3.davi-naizer.pages.dev/`.

| Route | HTTP | DOMContentLoaded | Load | Resource transfer sample |
| --- | ---: | ---: | ---: | ---: |
| `/` | 200 | 567ms | 567ms | 104,577 bytes |
| `/projects` | 200 | 101ms | 101ms | 600 bytes |
| `/case-studies` | 200 | 75ms | 75ms | 600 bytes |

The root sample included the external font requests. The route samples were
browser diagnostics with warm/cache effects and are not comparable to field
75th-percentile results. No performance remediation is authorised by this
baseline.

## Recommended Next Scope

Create one implementation and review task for **interaction affordance
refinement limited to the existing shared shell and core action surfaces**:

- primary navigation and header Contact;
- Home's primary and secondary actions;
- Work's two evidence links;
- Resume download;
- Contact rows and footer controls only where their equivalent states are
  inconsistent.

Preserve inline link semantics and persistent underlines for contextual evidence
links unless a specific finding demonstrates ambiguity. Do not add animation,
change routes or copy, introduce a new component/dependency, or implement
reading continuity and not-found polish in that task. The next plan should use
F1 as the acceptance baseline and retain the confirmed responsive, keyboard,
focus, reduced-motion, and target-size checks.

## Evidence Gaps

- No recruiter, hiring-manager, engineer, analytics, or usability evidence was
  available; all visitor journeys remain hypotheses.
- The preview and local timings are lab diagnostics. No field Core Web Vitals
  data was available.
- Browser-level Safari and Firefox verification remains part of the separate
  production follow-up, not this local baseline.
- The external Google Font decision remains open for the separate production
  reliability, privacy, and rendering review.
