---
layout: two-cols
title: Writing and maintaining a CSP
---
<h1>Maintain your CSP</h1>

<Transform scale="0.95">

1. Write the <span class="color:accent">strictest CSP</span> for your site.
1. <span class="color:accent">Test your CSP</span> on [Mozilla Observatory](https://observatory.mozilla.org/) (personal favorite), [CSP Evaluator](https://csp-evaluator.withgoogle.com/), or [Security Headers](https://securityheaders.com/).
1. Whenever you <span class="color:accent">add new content</span> (e.g. new inline style), a new asset (e.g. image, font) or connect to a new domain (e.g. with a `<link rel="prefetch">`), check for CSP errors/warnings in DevTools. Update your CSP accordingly.
1. Whenever you <span class="color:accent">remove content</span> (e.g. you are no longer hosting images on that CDN but you are now self-hosting them), review your CSP.
1. Configure a <span class="color:accent">security logging service</span> like [Report URI](https://report-uri.com/) to catch CSP violations. You can do this using the `report-to` and the `report-uri` directives.

</Transform>

::right::

<h1>Useful tips</h1>

<Transform scale="0.95">

❌ Do not write your CSP by hand in a `_headers` file (Cloudflare Pages, Netlify) or in a `vercel.json` file. It will soon become really hard to maintain.

❌ Do not rely on a tool that writes a generic CSP for you. Your CSP must be tailored to your site.

✅ If your CSP is simple, consider a low-key approach, like generating `_headers` / `vercel.json` using a templating engine. See [this example with Nunjucks](https://github.com/nhoizey/nicolas-hoizey.photo/blob/main/src/_headers.njk).

✅ If your CSP grows in size, use a tool for writing it. For example: <Anchor href="https://github.com/papandreou/seespee" text="seespee" />, <Anchor href="https://github.com/MarcelloTheArcane/netlify-plugin-csp-generator" text="netlify-plugin-csp-generator" />, <Anchor href="https://github.com/jackdbd/content-security-policy" text="@jackdbd/content-security-policy" />, <Anchor href="https://github.com/jackdbd/undici/tree/main/packages/eleventy-plugin-content-security-policy" text="@jackdbd/eleventy-plugin-content-security-policy" />.

✅ If you can't afford breaking your site in production, replace `Content-Security-Policy` with `Content-Security-Policy-Report-Only`.

</Transform>

<!--
Here is how seespee works: the website is crawled for scripts, stylesheets, images, fonts, application manifests etc., which will be listed by their origin. Inline scripts and stylesheets will be hashed so 'unsafe-inline' can be avoided.

If both a Content-Security-Policy-Report-Only header and a Content-Security-Policy header are present in the same response, both policies are honored. The policy specified in Content-Security-Policy headers is enforced while the Content-Security-Policy-Report-Only policy generates reports but is not enforced.

A server can inform clients where to send reports using the Reporting-Endpoints HTTP response header. This header defines one or more endpoint URLs as a comma-separated list. If you want to define an endpoint named csp-endpoint which accepts reports at https://example.com/csp-reports, the server's response header would look like this:

```txt
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
```

You must then use the Content-Security-Policy header's report-to directive to refer to an endpoint where reports of that policy should be sent. For example, to send violation reports to https://example.com/csp-reports you can send response headers that look like the following:

```txt
Reporting-Endpoints: csp-endpoint="https://example.com/csp-reports"
Content-Security-Policy: default-src 'self'; report-to csp-endpoint
```

[Violation report syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP#violation_report_syntax)
-->
