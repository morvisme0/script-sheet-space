# Build a mobile-first PDF workspace

## Product experience
- Replace the blank page with a polished smartphone-first React application named **Slate PDF**.
- Build a working app shell with bottom navigation for Home, Files, Create, Tools, and Settings.
- Make reading the default document experience, with an explicit transition into editing.
- Use realistic documents, page counts, sizes, dates, progress, and operation results throughout.

## Screens and workflows
- Add navigable views for launch/onboarding, Home, Files, Search, file preview, reader, thumbnails, editor, text editing, annotation tools, page organizer, merge, split, all four conversion directions, compression, scanner, scan review, import, processing, success, errors, settings, appearance, empty states, and file/page action sheets.
- Keep primary flows interactive: navigation, theme selection, search/filtering, reader controls, edit tools, page selection, import/create choices, compression levels, processing completion, and bottom sheets.
- Use shared screen patterns so conversion, file operations, and completion states feel like one product.

## Visual system
- Create an original light/dark token system with a warm neutral paper surface, graphite text, mineral teal primary, restrained coral secondary, layered dark surfaces, subtle borders, and clear status colors.
- Use a readable sans-serif family, moderate radii, 44px+ touch targets, a consistent icon set, and restrained transitions with reduced-motion support.
- Avoid competitor styling, gradients, excessive shadows, desktop-like density, and decorative clutter.

## Technical details
- Implement reusable mobile shell, headers, file rows, tool tiles, document canvas, toolbars, bottom sheets, dialogs, progress, and state components.
- Keep all visual colors and typography in the global design tokens; use responsive constraints so the experience remains phone-first while previewing cleanly on larger screens.
- Add route-specific metadata and accessible labels, selected states, keyboard focus, and semantic structure.

## Validation
- Check the preview at mobile and desktop widths, exercise key navigation and document actions, verify light/dark themes, and confirm no build or runtime errors remain.
