---
layout: default
title: origin vs site
---
<h1>Origin vs Site</h1>

<Transform scale="0.95">

| **Request from** | **Request to** | **Same-site?** | **Same-origin?** |
| --- | --- | --- | --- |
| `https://example.com` | `https://example.com` | ✅ | ✅ |
| `https://app.example.com` | `https://intranet.example.com` | ✅ | ❌ domain name |
| `https://example.com` | `https://example.com` | ✅ | ❌ port |
| `https://example.com` | `https://example.co.uk` | ❌ eTLD | ❌ domain name |
| `https://example.com` | `https://example.com` | ❌ scheme | ❌ scheme |

[Understanding "same-site" and "same-origin"](https://web.dev/articles/same-site-same-origin)

</Transform>

<!--
[What's the difference between a site and an origin?](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions)

eTLD: effective top-level domain. This is just a way of accounting for the reserved multipart suffixes that are treated as top-level domains in practice, such as .co.uk.
-->
