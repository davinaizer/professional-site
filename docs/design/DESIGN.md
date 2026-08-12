---
name: Modern Swiss Editorial
colors:
  background: "#131313"
  surface: "#1b1b1b"
  surface-raised: "#1f1f1f"
  text-primary: "#e2e2e2"
  text-secondary: "#cfc4c5"
  border-subtle: "#4c4546"
  border-strong: "#988e90"
  accent: "#bec2ff"
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 80px
    fontWeight: "700"
    lineHeight: "1.0"
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: "600"
    lineHeight: "1.1"
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: "600"
    lineHeight: "1.2"
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: "600"
    lineHeight: "1.3"
  body-lg:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: "400"
    lineHeight: "1.6"
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: "400"
    lineHeight: "1.6"
  label-mono:
    fontFamily: IBM Plex Mono
    fontSize: 13px
    fontWeight: "500"
    lineHeight: "1.0"
    letterSpacing: 0.05em
  caption:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: "400"
    lineHeight: "1.4"
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 32px
  margin-edge: 40px
  section-gap: 120px
---

## Brand & Style

This design system is rooted in the **Swiss International Typographic Style**. It prioritizes objectivity, readability, and a strict adherence to a grid. The personality is technically confident, intellectual, and understated—designed to showcase senior-level engineering work without the distraction of "marketing" fluff.

The visual direction is **Minimalism** with an **Editorial** influence. It rejects the trend of soft shadows and rounded "bubbles" in favor of sharp lines, purposeful whitespace, and a high-contrast monochromatic base. The aesthetic should feel like a premium technical journal or a high-end architectural monograph: timeless, structured, and precise.

**Design Principles:**

- **Asymmetric Balance:** Use whitespace as a functional element to balance heavy typographic blocks.
- **Content as Interface:** Remove decorative containers; let the text and its alignment define the boundaries of the "UI."
- **Clarity over Decoration:** No gradients, no glassmorphism, and no decorative iconography.

## Colors

The palette is optimized for a high-contrast **Dark Mode** environment. The page canvas is `#131313`, with refined dark-gray surfaces used only when structural separation is required.

The light blue accent (`#bec2ff`) is reserved for interactive text and focus treatment. It preserves strong contrast against the page canvas while providing a technical cue without competing with the content.

**Usage Guidelines:**

- **Primary:** Backgrounds and structural foundations. In this dark theme, text defaults to high-contrast neutrals (whites/light grays).
- **Secondary (Accent):** Interaction cues only. Never used for large background fills.
- **Neutral:** Shades of gray are used strictly for secondary information or subtle structural dividers (1px borders).

## Typography

Typography is the core of this design system. We use **Inter** for its neutral, highly legible character and **IBM Plex Mono** for technical labels and metadata to hint at the software engineering focus.

**Hierarchy Rules:**

- **Scale:** Use dramatic scale shifts (e.g., Display XL vs. Body MD) to create hierarchy rather than color.
- **Alignment:** Stick to a rigorous left-aligned "ragged right" rag. Avoid justified text.
- **Spacing:** Headlines should have tight line-heights (1.0 - 1.1) to feel like architectural blocks, while body text requires generous leading (1.6) for readability.
- **Mono Labels:** Use IBM Plex Mono in all-caps for categories, dates, or small technical tags. Keep them supplementary; essential information must not depend on the smaller mono style.

## Layout & Spacing

The layout follows a **Fixed Grid** system (12 columns) on desktop, transitioning to a fluid single-column on mobile. The "Swiss" influence is most apparent in the asymmetric use of columns—for example, using the first 4 columns for labels/headers and the remaining 8 for content.

**Spacing Philosophy:**

- **The 8px Grid:** All margins and paddings must be multiples of 8px.
- **Vertical Rhythm:** Use massive `section-gap` values (120px+) to separate distinct thoughts, allowing the content to breathe.
- **Gutter-based Alignment:** Content should always snap to the grid lines. Use visible or invisible "rules" (thin 1px lines) to guide the eye across the horizontal axis.

## Elevation & Depth

This system avoids the concept of "z-index" shadows. Depth is achieved through **Tonal Layers** and **Bold Outlines**.

- **Flat Stack:** Elements do not float; they sit on the same plane or are separated by 1px solid borders.
- **High-Contrast Overlays:** If a modal or menu is required, it should be a solid dark color block with a sharp 1px border. No blurs or soft shadows.
- **Rule Lines:** Use horizontal rules (HR) to separate sections. These should be 1px or 2px thick, providing a structural skeleton to the page that cuts through the dark background.

## Shapes

In keeping with the Swiss Style and technical precision, the roundedness is set to **0 (Sharp)**.

Every element—buttons, input fields, cards, and image containers—must have 90-degree corners. This reinforces the "grid" feel and distinguishes the portfolio from the consumer-grade "softness" of typical SaaS products.

## Components

**Buttons**

- Buttons are not part of the initial styling foundation. When introduced, they must use sharp corners and a foreground/background pair with verified contrast.

**Inputs & Fields**

- Bottom-border only or a full 1px box. Labels use `label-mono` and sit above the field.
- Focus state is indicated by a 2px `#bec2ff` accent border.

**Cards & Containers**

- Avoid traditional cards with shadows. Instead, use "Grid Cells"—sections of the page defined by 1px borders or simply by their alignment to the column grid.

**Lists**

- Use thick rule lines between list items.
- Project lists should show a "Title" in a large weight, with "Metadata" (Year, Tech Stack) in `label-mono` aligned to a different column.

**Chips/Tags**

- Rectangular, 1px border, `label-mono` text. Avoid background fills unless it's the active state.
