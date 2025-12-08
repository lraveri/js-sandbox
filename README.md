# React + TypeScript Sandbox

Minimal sandbox to experiment with React 19, TypeScript, and esbuild. It outputs a static bundle (`dist/index.js`) loaded by `index.html` and ships with a small CSS theme.

## Features
- React 19 with typed JSX and hooks
- Bundling via `esbuild` in watch mode (`npm run dev`)
- Strict TypeScript config (`jsx: react-jsx`, `moduleResolution: bundler`)
- Linting with ESLint + Prettier
- Vitest-ready config with coverage (`vitest.config.ts`)

## Structure
```
ts-sandbox/
├── index.html          # Mounts React and loads dist/index.js
├── src/
│   ├── index.tsx       # Entry: name input -> greeting card
│   └── style.css       # Base styles
├── dist/               # esbuild output
├── eslint.config.js    # ESLint + TypeScript rules
├── tsconfig.json       # ES2020 target and React JSX
├── vitest.config.ts    # Alias '@' -> src and V8 coverage
└── package.json        # Scripts and deps
```

## Quick start
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the watcher and build to `dist/index.js`:
   ```bash
   npm run dev
   ```
3. Open `index.html` with a static server (e.g. VS Code Live Server or `npx http-server .`) to view the app.

## Scripts
- `npm run dev` — esbuild bundling in watch mode.
- `npm run lint` — ESLint on `.ts`/`.tsx`.
- `npm run format` — Prettier formatting.
- `npx vitest` / `npx vitest run --coverage` — tests and coverage (not wired as npm scripts).

## Demo app notes
- `App` lets you type a name, shows a greeting, and renders a small `Card`.
- `src/style.css` handles centered layout, typography, and button styles.
- Root mount is `#root` in `index.html`, rendered via `ReactDOM.createRoot`.
