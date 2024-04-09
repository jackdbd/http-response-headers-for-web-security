---
class: pl-25% pt-0%
layout: default
title: Scott Helme's crawler report February 2024 details
---
<p class="mb-0!">Details from the February 2024 crawler report</p>

<Transform scale="0.75">

| **Type** | **Name** | **Total** | **%** |
| --- | --- | --- | --- |
| Configuration | Redirect HTTP to HTTPS | 580,538 | ~75.25 |
| Header | `X-Frame-Options` | 233,397 | ~30.22 |
| Header directive | `report-to` | 221,996 | ~28.76 |
| Header | `NEL` | 220,512 | ~28.57 |
| Header | `HSTS` | 200,935 | ~26.04 |
| Header | `X-Content-Type-Options` | 196,160 | ~25.41 |
| Header | `X-XSS-Protection` | 142,383 | ~18.45 |
| Header | `Referrer-Policy` | 119,915  | ~15.54 |
| Header | `Content-Security-Policy` | 95,961 | ~12.43 |
| Header | `Permissions-policy` | 36,689 | ~4.75 |
| File | `security.txt` | 10,715 | ~1.39% |
| Header | `Feature-Policy` | 4,888 | ~0.63 |

<!-- - HTTP to HTTPS redirect: 580,538 (~75.25%) -->
<!-- - `X-Frame-Options`: 233,397 (~30.22%) -->
<!-- - `report-to`: 221,996 (~28.76%) -->
<!-- - `nel`: 220,512 (~28.57%) -->
<!-- - `HSTS`: 200,935 (~26.04%) -->
<!-- - `X-Content-Type-Options`: 196,160 (~25.41%) -->
<!-- - `X-XSS-Protection`: 142,383 (~18.45%) -->
<!-- - `Referrer-Policy`: 119,915 (~15.54%) -->
<!-- - `Content-Security-Policy`: 95,961 (~12.43%) -->
<!-- - `Permissions-policy`: 36,689 (~4.75%) -->
<!-- - `security.txt`: 10,715 (~1.39%) -->
<!-- - `Feature-Policy`: 4,888 (~0.63%) -->

</Transform>

<!--
TODO: maybe add sorted bar graphs with Vega Lite or vega-embed.

**Top 1 million analysis (2024/02)**

- ~100k sites use CSP
- ~80k sites have a grade on Security Header of A+, A or B
- ~200k use HSTS

**Fun facts**

- [owasp.org](https://owasp.org/Top10/) has a CSP
- [cheatsheetseries.owasp.org](https://cheatsheetseries.owasp.org/) does NOT have a CSP
-->
