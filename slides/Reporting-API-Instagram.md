---
# class: pl-15% pr-15%
class: pt-10%
layout: center
title: "Reporting-Endpoints example: Instagram"
---
<h1>Reporting-Endpoints example: Instagram</h1>

<Transform scale="0.9">

Note the `report-to` directive in <span class="color:accent">some</span> of the `*-Policy` headers down below.

```txt
Content-Security-Policy: <directives-not-shown>;report-uri https://www.facebook.com/csp/reporting/?m=t&minimize=0;
Cross-Origin-Embedder-Policy-Report-Only: require-corp;report-to="coep_report"
Cross-Origin-Opener-Policy: same-origin-allow-popups;report-to="coop_report"
Document-Policy: force-load-at-top
Permissions-Policy: accelerometer=(self),<directives-not-shown>;report-to="permissions_policy"
```

This is Instagram's `Reporting-Endpoints` header configuration.

```txt
Reporting-Endpoints: 
  coop_report="https://www.facebook.com/browser_reporting/coop/?minimize=0",
  coep_report="https://www.facebook.com/browser_reporting/coep/?minimize=0", 
  default="https://www.instagram.com/error/ig_web_error_reports/?device_level=unknown",
  permissions_policy="https://www.instagram.com/error/ig_web_error_reports/"
```

Things to keep in mind:

- To receive <span class="color:accent">intervention</span>, <span class="color:accent">deprecation</span> and/or <span class="color:accent">crash</span> reports, set an endpoint named `default`. If the `Reporting-Endpoints` header defines no `default` endpoint, reports of this type will not be sent.
- <span class="color:accent">All other reports</span> require an explicit endpoint in the `Reporting-Endpoints` header. Despite its name, `default` is not a fallback endpoint.

</Transform>

<!--
If the `Reporting-Endpoints` header defines no `default` endpoint, reports of this type will not be sent (although they will be generated).

At the moment Document-Policy is still an [unofficial draft](https://wicg.github.io/document-policy/). Here is its [explainer](https://github.com/WICG/document-policy/blob/main/document-policy-explainer.md).
-->
