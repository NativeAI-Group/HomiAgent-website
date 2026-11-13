# HomiAgent Website

A responsive, bilingual website for HomiAgent: an open-source embodied Agent project for real homes, built together with developers.

**Website:** [nativeai-group.github.io/HomiAgent-website](https://nativeai-group.github.io/HomiAgent-website/)

## Requirements

Use Node.js 24 or newer. The `.nvmrc` file selects Node.js 24 for local development and GitHub Actions. No dependency installation is needed.

If you use nvm, run `nvm install` and `nvm use` from the repository root.

## Project structure

```text
.
├── .github/workflows/
│   └── deploy-pages.yml  # Build and publish to GitHub Pages
├── src/                  # Website source; copied to dist/ during builds
│   ├── index.html        # Content and semantic page structure
│   ├── styles.css        # Responsive layout, colors, and motion
│   ├── app.js            # Translations, navigation, and dialogs
│   └── assets/           # SVG illustrations and favicon
├── scripts/
│   ├── build.mjs         # Generate a clean dist/ from src/
│   └── server.mjs        # Serve src/ or preview dist/ locally
├── .gitignore
├── .nvmrc
├── package.json
└── README.md
```

`dist/` is generated and excluded from version control. Edit files in `src/`; changes made directly to `dist/` are overwritten by the next build.

## Local development

```sh
npm run dev
```

Open [localhost:5173](http://localhost:5173). The server serves `src/` directly; refresh the browser after editing a file. `npm start` runs the same server.

To use another port:

```sh
npm run dev -- --port 3000
```

## Build and preview

```sh
npm run build
npm run preview
```

The build clears the previous `dist/` and copies the complete `src/` directory into it. Preview serves only the generated output at [localhost:5173](http://localhost:5173). Stop the development server first, or choose a separate port:

```sh
npm run preview -- --port 4173
```

Asset paths are relative so the website works under the GitHub Pages project path `/HomiAgent-website/`.

## Deploy to GitHub Pages

The repository uses `.github/workflows/deploy-pages.yml`. In the repository's **Settings → Pages → Build and deployment**, set **Source** to **GitHub Actions**.

Every push to `main` builds the website with `npm run build`, uploads `dist/`, and deploys it to GitHub Pages. You can also trigger **Deploy website to GitHub Pages** manually from the **Actions** tab using **Run workflow**.

The workflow reads its Node.js version from `.nvmrc`. It does not need third-party hosting credentials or a dependency installation step.

## Content and behavior

The default language is English; the initial HTML is also in English. Chinese/English preference is saved locally when browser storage is available. Both languages include page metadata, illustration descriptions, and process captions.

The page follows this order: project introduction, project beliefs, architecture and module overviews, open exploration directions, technical articles, and contribution paths.

Illustrations are local SVG files. Google Fonts are optional, with system-font fallbacks. The exploration section uses a pale sage palette with small orange accents. Its diagrams illustrate demonstration learning, feedback-driven adaptation, and context-and-memory-based decisions as open research directions.

GitHub entry points link to the NativeAI-Group organization. Module documentation buttons are disabled and labeled “Coming soon”; replace them with documentation links when ready.
