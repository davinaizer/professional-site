---
createdAt: 2026-08-23
updatedAt: 2026-08-23
version: 1.0
status: analysis
---

# CSS Abstraction Report

## Purpose

This report records the CSS duplication analysis across the current application and identifies reusable classes that may be appropriate once shared styling is no longer deferred.

This is an analysis report, not an implementation plan. No source or stylesheet changes are included.

## Scope

The review covered the nine current stylesheets:

- `src/index.css`
- `src/styles/reset.css`
- `src/styles/tokens.css`
- `src/styles/global.css`
- `src/styles/shell.css`
- `src/pages/HomePage.css`
- `src/pages/ProfessionalSummaryPage.css`
- `src/pages/ExperiencePage.css`
- `src/pages/ResumePage.css`

The strongest duplication is across the four completed core routes: Home, Professional Summary, Experience, and Resume.

## High-confidence abstraction candidates

### 1. `.page-section`

Each core route repeats the same page-level vertical padding:

- `padding-block: var(--space-8)` on larger viewports
- `padding-block: var(--space-6)` below `40rem`

Evidence:

- `src/pages/HomePage.css:1-3, 115-118`
- `src/pages/ProfessionalSummaryPage.css:1-3, 60-63`
- `src/pages/ExperiencePage.css:1-3, 109-112`
- `src/pages/ResumePage.css:1-3, 46-49`

### 2. `.page-lead`

The Home hero and the three route headers repeat the same layout:

- column flex layout;
- `var(--space-2)` gap;
- `62rem` maximum inline size.

Evidence:

- `src/pages/HomePage.css:5-10`
- `src/pages/ProfessionalSummaryPage.css:5-10`
- `src/pages/ExperiencePage.css:5-10`
- `src/pages/ResumePage.css:5-10`

A layout-oriented name such as `.page-lead` is preferable to `.page-header` because Home currently uses a `div`, while the other routes use a `header` element.

### 3. `.eyebrow`

Home, Summary, Experience, and Resume repeat the same mono uppercase label treatment:

- secondary text colour;
- mono font family;
- label size and weight;
- label letter spacing;
- label line height;
- uppercase transformation.

Evidence:

- `src/pages/HomePage.css:12-20`
- `src/pages/ProfessionalSummaryPage.css:12-20`
- `src/pages/ExperiencePage.css:12-24`
- `src/pages/ResumePage.css:12-24`

### 4. `.page-intro`

The Home summary and route introductions repeat the same large body size and top spacing.

Evidence:

- `src/pages/HomePage.css:34-37`
- `src/pages/ProfessionalSummaryPage.css:22-25`
- `src/pages/ExperiencePage.css:26-29`
- `src/pages/ResumePage.css:26-29`

Resume has two paragraphs using this treatment, which is additional evidence that the style represents a reusable content role rather than a one-off selector.

### 5. `.tag-list` and `.tag`

Focus-area and technology lists repeat the same visual pattern:

`.tag-list` would contain:

- flex wrapping;
- `var(--space-2)` gap;
- no default list padding;
- no default list marker.

`.tag` would contain:

- a subtle border;
- secondary text colour;
- mono label typography;
- label letter spacing;
- compact padding;
- uppercase transformation.

Evidence:

- `src/pages/HomePage.css:85-100`
- `src/pages/ProfessionalSummaryPage.css:38-54`
- `src/pages/ExperiencePage.css:87-103`

Home's focus list also uses `align-content: start`; that should remain a local modifier or route-specific rule rather than being forced into the base abstraction.

### 6. `.action-link`

Home action links and the Resume download link repeat the same outlined-link treatment:

- inline-block display;
- strong border;
- compact horizontal and vertical padding;
- no underline;
- accent border on hover.

Evidence:

- `src/pages/HomePage.css:55-64`
- `src/pages/ResumePage.css:35-44`

The header Contact link should not be merged into this pattern because it has a distinct filled default state and inverse text colour.

### 7. `.section-divider`

Home focus/highlight sections and the Summary focus section repeat the same section separator:

- subtle top border;
- large top section spacing;
- top padding.

Evidence:

- `src/pages/HomePage.css:66-72`
- `src/pages/ProfessionalSummaryPage.css:27-32`

Home's focus grid, Home's highlight maximum width, and their content layout should remain route-specific variations.

### 8. `.page-metadata`

Experience and Resume metadata repeat the same mono metadata styling:

- secondary text colour;
- mono font family;
- label size and medium weight;
- label letter spacing;
- caption line height.

Evidence:

- `src/pages/ExperiencePage.css:12-19, 79-81`
- `src/pages/ResumePage.css:12-19`

The label and metadata rules currently share some declarations but should remain separate semantic classes because labels are uppercase and metadata is not.

## Recommended extraction order

1. Extract the page layout patterns:
   - `.page-section`
   - `.page-lead`
   - `.eyebrow`
   - `.page-intro`
2. Extract repeated content patterns:
   - `.tag-list`
   - `.tag`
   - `.page-metadata`
3. Extract interaction and section patterns:
   - `.action-link`
   - `.section-divider`

This order removes the most duplication while keeping route-specific layout differences explicit.

## Patterns not recommended for immediate abstraction

### List reset rules

`home__actions ul` and `home__focus ul` both reset list styles, but their layouts have different semantics. A generic list-reset utility could remove repetition, but it would introduce a broad style primitive for a relatively small amount of duplication. Keep the layout rules separate unless further routes demonstrate the same need.

### Heading size rules

The same heading token is assigned in several route files:

- `src/pages/HomePage.css:80-83`
- `src/pages/ProfessionalSummaryPage.css:34-36`
- `src/pages/ExperiencePage.css:69-72`

This could move into `src/styles/global.css`, but doing so would affect future routes and currently unstyled placeholder pages. It is lower priority than the explicit shared content patterns.

### Shell typography

The shared typography for the identity, primary navigation, and Contact link is already grouped in `src/styles/shell.css:20-29`. No additional abstraction is required there.

### React wrapper components

The repeated styles do not currently justify shared React layout components. The markup is similar but not identical, and CSS class reuse would provide the benefit without introducing another component boundary.

## Architectural constraint

`docs/HANDOFF.md` states that shared styling remains deferred until the remaining core routes show stable semantic reuse. The next planned core task is accessible professional contact links, and Contact has not yet been implemented.

`docs/DECISIONS.md` also records that reusable style primitives and a shared composition-pattern layer remain deferred until stable reuse is demonstrated.

The recommended future implementation approach is therefore:

- revisit this report after Contact and core navigation are complete;
- add shared classes alongside existing route classes;
- retain route-specific classes for variations such as the Home grid;
- use a deliberately small shared stylesheet if the reuse remains stable;
- avoid CSS Modules, a utility framework, or React wrapper components unless a later review trigger justifies them.

## Conclusion

The repository has meaningful, repeated route styling, particularly around page framing, route leads, labels, introductions, tags, actions, dividers, and metadata. The duplication is sufficient to justify a later focused styling task, but current project decisions correctly defer implementation until the remaining core routes provide stronger evidence of stable semantic reuse.
