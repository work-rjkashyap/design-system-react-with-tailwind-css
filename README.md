# Design System React

A Vite + React + Tailwind v4 playground for building and showcasing a token-driven design system. The default configuration ships an “India” brand theme, a basic component library, and a light/dark mode toggle powered by a custom theme provider.

## Prerequisites
- Node.js 18.18+ (Node 20 LTS recommended for Vite 7)
- npm 9+ (project uses `package-lock.json`)

## Getting Started
1. Install dependencies
   ```bash
   npm install
   ```
2. Start the design system playground
   ```bash
   npm run dev
   ```
   The Vite dev server logs the preview URL (defaults to `http://localhost:5173`). Hot Module Replacement is enabled.

## Core Scripts
- `npm run dev` – start the Vite dev server.
- `npm run build` – type-check (`tsc -b`) and create a production build.
- `npm run preview` – serve the production build locally.
- `npm run lint` – run ESLint across the project.
- `npm run lint:fix` – auto-fix safe ESLint issues.
- `npm run format` – format the repo with Prettier (Tailwind classes auto-sort).
- `npm run format:check` – verify formatting without writing changes.

## Project Layout
- `src/theme` – token sources grouped by domain (colors, spacing, typography, layout, brand overrides, etc.).
- `src/components` – shared primitives (`ui/`) plus higher-level examples (`card`, `mode-toggle`, `theme-provider`).
- `src/main.tsx` – application entry; mounts `App` and imports global CSS.
- `src/index.css` – Tailwind v4 + animation presets + theme imports.

## Micro Animations & Motion Tokens
- Motion tokens live in `src/theme/india/micro-animations.css`. They expose reusable durations (`--dur-*`), easing, and keyframes for small interactions.
- Utility classes like `animate-micro-scale-in` and the `.micro-press` component class are globally available once imported through `src/theme/index.css`.
- Components (e.g., the Button) consume these tokens to deliver subtle entrance and press states while respecting `prefers-reduced-motion`.

## Working with Tokens and Brands
- Tokens live under `src/theme/india`. Each file scopes a token category using CSS custom properties.
- `src/theme/index.css` composes the token files so Tailwind classes and components can consume them.
- Switching brands is handled by toggling the `data-brand` attribute on `document.documentElement`. The sample `Brand: India` button in `App.tsx` shows how to activate the India theme. Add additional brand token folders (e.g. `src/theme/acme`) and extend `theme/index.css` with extra imports.
- Light/dark mode is controlled by the custom `ThemeProvider` (`src/components/theme-provider.tsx`), which syncs the `light`/`dark` classes to the root element and persists the preference in `localStorage`. Use `useTheme()` to read or change the mode inside components.

## Extending the Design System
- Add new primitives in `src/components/ui` using the shared utilities from `src/lib/utils.ts` and the Tailwind + token variables.
- Document brand-specific overrides in `brands.css`. This is the right place for CSS driven by `data-brand`.
- When you introduce new tokens, expose them via CSS `var(--token-name)` values to keep Tailwind and plain CSS in sync.
- `src/components/ui/button.tsx` now supports `leadingIcon`/`trailingIcon` props that size icons automatically for `sm|md|lg` buttons. Pass any `ReactNode` (usually a Lucide icon).
- The `ModeToggle` example (`src/components/mode-toggle.tsx`) demonstrates how to pair the Button icon slots with `lucide-react` icons and a dropdown menu for theme selection.

## Linting and Formatting
- TypeScript configuration is split between `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.
- ESLint rules live in `eslint.config.js`. Run `npm run lint` (or `npm run lint:fix`) before committing to keep the component library consistent.
- Prettier is configured via `.prettierrc.json` with `prettier-plugin-tailwindcss` so utility classes stay sorted. Use `npm run format` to apply formatting.

## Deployment
1. Build the bundle with `npm run build`.
2. Serve the contents of `dist/` with any static host (Vercel, Netlify, GitHub Pages, etc.).
