# Contributing to Lithos UI

First, thank you for considering contributing to Lithos UI! This project is built on a specific, opinionated architectural foundation. To ensure the library remains stable and mathematically consistent, please adhere to these guidelines.

---

## 1. The Manifesto

Lithos UI is a system of **absolute structural integrity**. We prioritize predictable math, high-contrast visibility, and physical mass over "modern" soft-UI trends. If your contribution breaks the core physics, it will not be merged.

## 2. The Zero-Gap Mandate

This is the most critical rule of the repository.

- **NO `gap` PROPERTY:** The CSS `gap` property is strictly forbidden for layout structure.
- **WHY:** `gap` is mathematically invisible and fails to account for the heavy box-shadow offsets required by Neo-Brutalism.
- **THE ALTERNATIVE:** Use explicit margin/padding math (e.g., negative parent margins combined with direct child margins) to create stable, non-collapsing gutters.

## 3. Design Principles

- **Hard Edges:** No rounded corners (`rounded-none` is the default).
- **High Contrast:** All color pairings must pass YIQ mathematical contrast checks.
- **Physical Mass:** Every component must read as a "slab" with a solid shadow offset (e.g., `shadow-[8px_8px_0px_0px]`).
- **No Soft Shadows:** Blur values in `box-shadow` must remain at `0px`.

## 4. Workflow

We follow a standard **Fork and Pull** model:

1. **Fork** the repository to your own account.
2. **Create a branch** for your feature (e.g., `git checkout -b feat/new-card-style`).
3. **Code** with strict adherence to the architecture comments in `App.jsx` and `index.css`.
4. **Test** locally to ensure no layout drift occurs in either Light or Obsidian (Dark) mode.
5. **Submit a Pull Request** (PR) against the `main` branch.

## 5. Pull Request Requirements

Every PR must include:

- **A Clear Description:** What does this add? Why is it needed?
- **Architectural Compliance:** A confirmation that the "Zero-Gap" rule was followed.
- **Visual Check:** Screenshots or videos of the component in both Light and Obsidian modes.

## 6. Tooling & Linting

To maintain Lithos UI's high structural standards, we use automated linting:

- **ESLint:** We enforce React best practices and clean import structures. While we ignore minor stylistic noise, syntax errors and hook violations will block your PR.
- **CI Pipeline:** Every Pull Request triggers a GitHub Action that runs `pnpm build`. If the build fails, the PR cannot be merged.
- **Pre-submission Check:** Run `pnpm lint` locally before pushing to ensure your code passes the pipeline.

## 7. Prohibited Changes

- **No Framework Assumptions:** Do not add dependencies or logic specific to Next.js, Remix, or Vite. Lithos UI must remain framework-agnostic.
- **No External Motion Libraries:** Use the internal CSS keyframes defined in `index.css` for animations.

---

**Note:** By contributing to Lithos UI, you agree that your contributions will be licensed under the project's existing Open Source license.
