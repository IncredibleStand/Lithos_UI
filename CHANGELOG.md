# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [0.1.1]

### Added (0.1.1)

- Tooltip component.

### Changed (0.1.1)

- Comprehensive manual audit and synchronization of component `propsData` documentation with source typings.

### Fixed (0.1.1)

- Fixes for v0.1.0 for the components were made.

### Removed (0.1.1)

## [0.0.0]

### Added (0.0.0)

- Initial pre-1.0 release of Lithos UI as a copy-paste React template repository.
- Zero-Gap layout architecture across landing and docs surfaces using explicit margin/padding spacing.
- YIQ-based automated contrast engine (`getContrastText`) for accent/foreground token selection.
- Universal specificity override system via runtime style injection in `useTheme` (`!important` token rebinding for accent and selection).
- Global physics token utility (`.lithos-click`) for shared brutalist interaction states.
- Initial component set:
  - Blocks: `Hero`, `FeatureGrid`, `Pricing`, `Testimonials`, `FAQ`, `ThemeEngine`.
  - Layout: `Navbar`, `Footer`, `NotFound`, `ComingSoon`.
  - UI primitives: `CodeViewer`, `PreviewBlock`, `ToastProvider`, `Toggle`, `KineticGrid`.
- Documentation routes/pages for introduction, installation, and core primitives (`CodeViewer`, `PreviewBlock`, `Toast`, `Toggle`).
- GitHub Actions CI workflow to lint and build on pushes and pull requests to `main`.

### Changed (0.0.0)

### Fixed (0.0.0)

### Removed (0.0.0)
