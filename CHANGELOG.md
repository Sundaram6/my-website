# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased] - 2026-06-24

### Added
- **Light Mode Overhaul**: Completely revamped the light mode aesthetic to feature a beautiful white-to-orange gradient, replacing the muddy grey background.
- **Blog Humanization**: Automatically generated varied, human-sounding introductions and conclusions for all 174 blog articles based on their specific categories.

### Changed
- **Component Contrast**: Updated all `text-slate-400` and `text-slate-500` utilities across the `components` directory to use higher contrast slate colors (`slate-600`/`slate-700`) specifically when in light mode.
- **Hero Optimization**: The 3D Spline scene is now hidden in light mode to prioritize text contrast and gradient visibility.
- **Blog Excerpts**: Blog excerpts are now dynamically generated from the clean introduction text, removing leaked Markdown tags (e.g., `## Insight 1`).
- **Contact Details**: Updated the primary contact email to `sundramsharma6@gmail.com`.

### Removed
- **Hero Scroll Hint**: Removed the absolute-positioned "Scroll" indicator from the Hero section to prevent text collision on shorter screens.
- **Social Links**: Removed X (Twitter) and LinkedIn links from the Contact and Resume sections.
