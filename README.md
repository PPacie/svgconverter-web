# TrueSVG landing page

Static Astro landing page for [TrueSVG](https://svgconverter.org/). Astro is used at build time only; the deployed `dist/` folder contains standard HTML, CSS, JavaScript, images, and crawl files.

## Local development

Requires Node.js 22.

```sh
npm ci
npm run dev
```

Open `http://127.0.0.1:4321/`.

## Validate and build

```sh
npm run check
npm run build
npm run preview
```

The production-ready static site is generated in `dist/`.

## Content and assets

- `src/content.ts` contains the product copy, metadata, App Store URL, reviews, FAQs, feature configuration, and screenshot records.
- `src/pages/index.astro` contains the semantic page structure and structured data.
- `src/styles/global.css` contains the design and responsive styles.
- `public/truesvg/` contains the current TrueSVG icon and screenshots.
- `public/robots.txt`, `public/sitemap.xml`, and `public/llms.txt` contain crawl and discovery information.

Every image in `public/truesvg/` is referenced by the live page. When replacing an image, keep its filename or update the corresponding path in `src/content.ts`.

## GitHub Pages

The repository includes `.github/workflows/deploy-pages.yml`. It validates, builds, and deploys the site whenever `main` is updated.

1. Push this project to the root of a GitHub repository.
2. Open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Confirm the **Deploy to GitHub Pages** action succeeds.
5. Add `svgconverter.org` as the custom domain and enable HTTPS after DNS validation.

The project uses root-relative URLs and production metadata for `https://svgconverter.org/`. See `DEVELOPER_HANDOFF.md` for the complete launch checklist.

## Current external destination

All App Store calls to action use:

https://apps.apple.com/us/app/svg-converter-truesvg/id6751818935
