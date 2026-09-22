# TrueSVG landing page — developer handoff

This is a static Astro site. Astro is used only during the build; the published output is ordinary HTML, CSS, JavaScript, images, `robots.txt`, `sitemap.xml`, and `llms.txt`. There is no server, database, API, or runtime secret.

## Recommended handoff

Use the complete source package. It includes the editable content, original assets, dependency lockfile, validation checks, and an automatic GitHub Pages deployment workflow.

Requirements:

- Node.js 22
- npm
- A GitHub repository

Local verification:

```sh
npm ci
npm run check
npm run build
npm run preview
```

The static output is generated in `dist/`.

## Publish with GitHub Pages

1. Create a GitHub repository and add the contents of the source package at its root.
2. Push the repository to the `main` branch.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and confirm that **Deploy to GitHub Pages** completes successfully.
6. In **Settings → Pages**, add the custom domain `svgconverter.org` when its DNS is ready.
7. Enable **Enforce HTTPS** after GitHub validates the domain.

The included `.github/workflows/deploy-pages.yml` validates and builds the site, uploads `dist/`, and publishes it on every push to `main`.

The site currently uses root-relative asset paths and production metadata for `https://svgconverter.org/`. It should therefore be published on that custom domain, a root GitHub Pages site such as `username.github.io`, or another root domain. If it must live permanently at a repository subpath such as `username.github.io/repository-name/`, update the Astro `base` setting and asset URLs before launch.

## Publish the static package directly

The static package contains the contents of `dist/`. Upload every file and folder to the web root. The host must serve `index.html` for `/` and `404.html` for missing pages. Keep `.nojekyll`, `_astro/`, `truesvg/`, `robots.txt`, `sitemap.xml`, and `llms.txt` intact.

## Main editable files

- `src/content.ts`: copy, App Store URL, SEO content, screenshots, features, reviews, FAQ, and footer
- `src/pages/index.astro`: page structure and structured data
- `src/pages/privacypolicy.astro` and `src/pages/changelog.astro`: retained public pages from the previous site
- `src/styles/global.css`: design and responsive behavior
- `public/truesvg/`: app icon and screenshots
- `public/CNAME`: GitHub Pages custom-domain declaration
- `astro.config.mjs`: production site URL and build configuration

## Launch checks

- Confirm `https://svgconverter.org/` is the final production URL. If it changes, update `siteUrl` in `src/content.ts`, `site` in `astro.config.mjs`, `public/sitemap.xml`, `public/robots.txt`, and `public/llms.txt`.
- Confirm all three App Store buttons open `https://apps.apple.com/us/app/svg-converter-truesvg/id6751818935`.
- Run `npm run check` and `npm run build` before publishing.
- Verify the desktop and mobile layouts after deployment.
- Submit `https://svgconverter.org/sitemap.xml` in Google Search Console after launch.
