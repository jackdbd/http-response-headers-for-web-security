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
<br>

<Citation
  citeHref="https://developer.chrome.com/docs/capabilities/web-apis/reporting-api#keys_endpoint_names"
  citeText="Monitor your web application with the Reporting API ">
  <template v-slot:quote>
    <p slot="quote">
      Despite its name, <code>default</code> is <span class="color:accent">not a fallback</span> endpoint.
    </p>
  </template>
</Citation>

</Transform>

<!--
At the moment Document-Policy is still an [unofficial draft](https://wicg.github.io/document-policy/). Here is its [explainer](https://github.com/WICG/document-policy/blob/main/document-policy-explainer.md).
-->
