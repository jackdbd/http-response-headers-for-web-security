---
class: text-center
# class: pl-15% pr-15% pt-10%
layout: default
title: CSP reports in Report URI
---
<h1>CSP reports in Report URI</h1>

<Transform scale="0.95">

<img src="/csp-violation-report-uri.png" class="w-60% m-auto" />

</Transform>

<!--
On a website of mine I was using Google Fonts and a theme for @prism.js (syntax highlighter). I had configured the `style-src` CSP directive like this and eveything was working fine:

```txt
style-src 'self' 'unsafe-inline' fonts.googleapis.com fonts.gstatic.com https://unpkg.com/prismjs@1.20.0/themes/prism-okaidia.css;
```

To test out the delivery of CSP violation reports I voluntarily broke my website changing the `style-src` like this:

```txt
style-src 'self';
```

After a few minutes I started receiving CSP violation reports in Report URI.

I restored the original `style-src` CSP directive I had, and the CSP violation reports stopped coming in.
-->
