# HTTP headers for web security

Slides and code for my talk on HTTP headers for web security.

I gave this talk at [pisa.dev](https://pisa.dev/).

- 🌐 https://http-response-headers-for-web-security.vercel.app/
- 🗎 https://raw.githubusercontent.com/jackdbd/http-response-headers-for-web-security/main/assets/presentation.pdf

If you want to see my notes on a slide, click the [Presenter Mode](https://sli.dev/guide/presenter-mode) button or put `presenter/` just before the slide number (e.g. `<HOST>/presenter/5` instead of `<HOST>/5`).

## Installation

This presentation is a Vue.js application built with [Slidev](https://sli.dev/). You can install its dependencies with the following command:

```sh
npm install
```

## Development

Slidev can hot-code reload this presentation thanks to Vite.

Launch the Vite dev server with this command:

```sh
npm run dev
```

You can now view the presentation on localhost:

- Play mode: http://localhost:3030/1
- [Presenter](https://sli.dev/guide/presenter-mode.html) mode: http://localhost:3030/presenter/1

## Deploy

The presentation will be automatically deployed to Vercel on each `git push`.

## PDF export

Slidev allows [exporting the slides to a PDF](https://sli.dev/guide/exporting.html#pdf). This feature relies on [Playwright](https://playwright.dev/) and requires [playwright-chromium](https://www.npmjs.com/package/playwright-chromium) to be available.

> :information_source: Since I don't want to install Playwright when building on Vercel (so deployments are faster), I declare `playwright-chromium` as a dev dependency and set `npm install --omit=dev` as the Vercel `installCommand` in `vercel.json`.

Run this command to export the slides to `assets/presentation.pdf`.

```sh
npm run build:pdf:slides
```
