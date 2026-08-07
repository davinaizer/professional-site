---
createdAt: 2026-08-07
updatedAt: 2026-08-07
version: 1.0
status: active
---

# Decisions

## Use Biome for baseline linting and formatting

**Decision:** Use Biome as the project's baseline linter and formatter while retaining TypeScript for type checking.

**Rationale:** Biome provides the required linting, formatting, and import organisation through one dependency and one configuration file. This keeps the initial quality foundation proportional to the current application while preserving separate, explicit TypeScript validation.

**Deferred:** Testing tools and their package scripts will be selected when the testing approach is defined.
