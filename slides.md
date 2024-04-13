---
# https://sli.dev/custom/#frontmatter-configures
# Try CSS classes here:
# https://unocss.dev/interactive/
css: unocss
defaults:
  layout: center
download: https://raw.githubusercontent.com/jackdbd/http-response-headers-for-web-security/main/assets/presentation.pdf
# persist drawings in exports and build
drawings:
  persist: false
# Exporting to PDF or PNG relies on Playwright for rendering.
# https://sli.dev/guide/exporting.html
exportFilename: presentation
# https://sli.dev/custom/highlighters.html
highlighter: shiki
htmlAttrs:
  dir: 'ltr'
  lang: 'en'
info: |
  ## HTTP response headers for web security

  Slides for my presentation on HTTP response headers for web security.
  I gave this talk at [pisa.dev](https://pisa.dev/).
lineNumbers: false
# https://sli.dev/guide/syntax#mdc-syntax
mdc: true
# https://sli.dev/guide/presenter-mode.html
presenter: true
src: ./slides/intro.md
theme: default
transition: slide-left
---

---
hide: true
src: ./slides/toc.md
---

---
src: ./slides/speaker.md
---

---
src: ./slides/why-this-talk.md
---

---
src: ./slides/where-to-start.md
---

---
src: ./slides/redirect-HTTP-to-HTTPS.md
---

---
src: ./slides/mixed-content.md
---

---
src: ./slides/ssl-stripping.md
---

---
src: ./slides/HSTS.md
---

---
src: ./slides/HSTS-Cloudflare.md
---

---
src: ./slides/x-content-type-options.md
---

---
src: ./slides/clickjacking.md
---

---
src: ./slides/x-frame-options-and-csp.md
---

---
src: ./slides/csrf-1.md
---

---
src: ./slides/csrf-how-it-works.md
---

---
src: ./slides/csrf-tokens.md
---

---
src: ./slides/csrf-samesite-cookies.md
---

---
src: ./slides/xss-defense-in-depth.md
---

---
src: ./slides/xss-dangers.md
---

---
src: ./slides/xss-likelihood-and-impact.md
---

---
src: ./slides/xss-proofs-of-concept.md
---

---
src: ./slides/xss-sanitization-and-csp.md
---

---
src: ./slides/csp-how-it-started-how-it-is-going.md
---

---
src: ./slides/csp-reddit-and-twitter.md
---

---
src: ./slides/csp-learning.md
---

---
src: ./slides/csp-use-specific-directives-to-avoid-bypasses.md
---

---
src: ./slides/csp-writing-and-maintaining.md
---

---
src: ./slides/Permissions-Policy.md
---

---
src: ./slides/Referrer-Policy.md
---

---
src: ./slides/origin.md
---

---
src: ./slides/origin-vs-site.md
---

---
src: ./slides/cross-origin-requests.md
---

---
src: ./slides/same-origin-policy.md
---

---
src: ./slides/same-origin-policy-and-cors.md
---

---
src: ./slides/access-control-allow-origin.md
---

---
src: ./slides/cors-public-vs-sensitive-resources.md
---

---
src: ./slides/same-origin-policy-corp-coep-coop.md
---

---
src: ./slides/corp-same-site.md
---

---
src: ./slides/coep-require-corp.md
---

---
src: ./slides/coop-same-origin.md
---

---
src: ./slides/Reporting-API.md
---

---
src: ./slides/Reporting-API-Instagram.md
---

---
src: ./slides/Reporting-API-single-or-batch-reports.md
---

---
src: ./slides/reports-chrome-devtools.md
---

---
src: ./slides/Report-URI-csp-reports.md
---

---
src: ./slides/Report-URI-coep-reports.md
---

---
src: ./slides/how-secure-are-the-top-1-million-sites.md
---

---
src: ./slides/scott-helme-report-details.md
---

---
src: ./slides/caching.md
---

---
src: ./slides/conclusions.md
---

---
src: ./slides/bonus.md
---

---
src: ./slides/learn-more.md
---

---
src: ./slides/owasp-top-10.md
---

---
src: ./slides/terminology.md
---

---
src: ./slides/cost-of-data-breach.md
---

---
src: ./slides/outro.md
---
