# HomiAgent

A responsive, bilingual website for HomiAgent: an open-source embodied Agent project for real homes, built together with developers.

## Run locally

Requires Node.js 18 or newer. No dependency installation is needed.

```sh
npm run dev
```

Open http://localhost:5173. To choose another port, use `npm run dev -- --port 3000`.

## Build

```sh
npm run build
npm run preview
```

The `dist/` folder contains the complete static website and can be deployed to any static web host.

## Cloudflare Workers

The included `wrangler.jsonc` configures this project as a static website. Wrangler automatically runs `npm run build` to regenerate `dist/` before serving or deploying it.

For local Cloudflare preview (this does not publish the website):

```sh
npx wrangler dev
```

Open the local URL printed in the terminal, normally http://localhost:8787.

To publish the website to Cloudflare Workers:

```sh
npx wrangler login
npx wrangler deploy
```

Wrangler requires a supported Node.js version; use Node.js 22 or newer for Wrangler 4. The existing `npm run dev` command remains available for a simple local preview without Wrangler.

## Contents

- `index.html`: page content and accessible semantic structure.
- `styles.css`: responsive styling, diagrams, motion, and reduced-motion support.
- `app.js`: Chinese/English translations, mobile navigation, and technology detail dialogs.
- `assets/`: original SVG living-room illustration, three exploration concept diagrams, and brand favicon.

The default language is English; language preference is saved locally when browser storage is available. The initial HTML is also in English. The illustration is local and works offline. Google Fonts are optional, with system-font fallbacks. GitHub entry points explicitly link to the NativeAI-Group organization until a project repository is available. Module documentation buttons are disabled and labeled “Coming soon”; replace them with documentation links when ready. Demonstration learning, self-evolution, and proactivity are presented as open exploration directions.

The page follows this order: project introduction, project beliefs, architecture and module overviews, open exploration directions, technical articles, and contribution paths. All content is available in English and Chinese, including metadata.

The exploration cards use local, static SVG diagrams with bilingual process captions and image descriptions. They illustrate demonstration learning, feedback-driven adaptation, and context-and-memory-based decisions without presenting them as released capabilities.
