# Live Production Verification

Production target: `https://davi-naizer.pages.dev/`
Preview target: `https://ef3c40c3.davi-naizer.pages.dev/`

Date: 2026-09-16

## Route Checks

| Route | Direct entry | Refresh | Result |
| --- | --- | --- | --- |
| `/` | HTTP 200; heading rendered | Heading rendered after reload | Pass |
| `/experience` | HTTP 200; heading rendered | Heading rendered after reload | Pass |
| `/work` | HTTP 200; heading rendered | Heading rendered after reload | Pass |
| `/projects` | HTTP 200; heading rendered | Heading rendered after reload | Pass |
| `/case-studies` | HTTP 200; heading rendered | Heading rendered after reload | Pass |
| `/resume` | HTTP 200; heading rendered | Heading rendered after reload | Pass |
| `/contact` | HTTP 200; heading rendered | Heading rendered after reload | Pass |

## Link Checks

| Link | Expected target | Result |
| --- | --- | --- |
| Resume download | `/resume.pdf` in deployed build | Pass; HTTP 200, `application/pdf` |
| Email | `mailto:davi.naizer@gmail.com` | Pass; rendered target inspected |
| LinkedIn | `https://www.linkedin.com/in/davi-naizer` | Pass; rendered target inspected |
| Project links | `/projects` and related experience anchors | Blocked; deployed Work page exposes `/projects`, but no project-to-experience link was rendered |
| Case-study links | `/case-studies` | Pass; deployed Work page exposes target |
| Experience anchors | `/experience#<stable-slug>` | Blocked; deployed Work page exposed no project experience link |

## Automated Evidence

- `pnpm validate`: passed.
- `pnpm build`: passed.
- Criterion 5 repository validation: passed independently; no local correction
  was required.
- Production root request: HTTP 200.
- Production `/work` request: HTTP 200.
- Production `/experience` request: HTTP 200.
- Chromium direct-entry and refresh checks passed for all seven supported routes.
- Chromium inspected the deployed resume, contact, Work, Projects, and Case Studies links.
- Deployed navigation still exposes the removed `/engineering` route.
- Deployed Work link labels are `Selected projects` and `Case studies`, not the current local test labels.

## Outstanding Evidence

Production remains an older release and is not a valid target for current-branch
behaviour verification. The current preview deployment contains the expected
navigation, project-to-experience links, and experience anchors. Production
verification remains a post-release check after the current changes are merged
to `main`.

Criterion 5 is satisfied independently: repository validation and the production
build pass. Current-branch criterion 4 verification passes on the preview
deployment; production release verification remains pending until publication.

## Preview Verification

- All seven supported routes returned HTTP 200 and rendered the expected heading
  on direct entry and refresh.
- Resume download returned HTTP 200 with `application/pdf` from
  `/davi-naizer-santos-resume.pdf`.
- Email and LinkedIn targets matched the approved public links.
- Work navigation exposed `Explore projects` and `Read case studies`.
- Project pages exposed five experience anchors using stable slugs.
- An experience-anchor navigation reached the expected experience entry and was
  visible after navigation.
- The preview navigation did not expose the removed `/engineering` route.
- Case-study navigation reached `/case-studies` successfully.
