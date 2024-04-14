---
# class: pl-5% pr-5% pt-5%
layout: center
title: Same-origin policy and CORP, COEP and COOP
---
<h1>Same-origin policy and CORP, COEP and COOP</h1>

<Transform scale="0.9">

- `Cross-Origin-Resource-Policy` (CORP)
- `Cross-Origin-Embedder-Policy` (COEP)
- `Cross-Origin-Opener-Policy` (COOP)

Send CORP with a <span class="color:accent">resource</span> (e.g. an image).

```txt
Cross-Origin-Resource-Policy: same-site
```

Send COEP and COOP with the <span class="color:accent">top-level document</span>.

```txt
Cross-Origin-Embedder-Policy: require-corp
Cross-Origin-Opener-Policy: same-origin
```

You need this configuration of COEP and COOP to achieve cross-origin isolation.

</Transform>

<!--
There is also Cross-Origin-Read-Blocking (CORB), which is not an HTTP header. It's a security feature implemented in Chromium.

The global `crossOriginIsolated` read-only property returns a boolean value that indicates whether the website is in a cross-origin isolation state. That state mitigates the risk of side-channel attacks (Meltdown and Spectre).

- [A guide to enable cross-origin isolation](https://web.dev/articles/cross-origin-isolation-guide)
- [Why you need "cross-origin isolated" for powerful features](https://web.dev/articles/why-coop-coep)
- [My answer to the question "Web worker blocked by self.crossOriginIsolated on Cypress"](https://stackoverflow.com/questions/72881660/web-worker-blocked-by-self-crossoriginisolated-on-cypress/72999996#72999996)
- [Site Isolation on Chromium Security docs](https://www.chromium.org/Home/chromium-security/site-isolation/)
- [COOP reports in Report URI](https://report-uri.com/products/coop_reports)
-->
