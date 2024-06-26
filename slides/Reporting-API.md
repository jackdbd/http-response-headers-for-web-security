---
# class: pl-5% pr-5% pt-10%
layout: center
title: Reporting API
---
<h1>Reporting API</h1>

<Transform scale="0.95">

<p>The browser can generate reports when there are:</p>
<ul>
  <li>security policy violations (configured with <code>*-Policy</code> headers)</li>
  <li>deprecated API calls (still an <Anchor href="https://wicg.github.io/deprecation-reporting/" text="unofficial draft" />)</li>
  <li>browser interventions (e.g. <Anchor href="https://chromestatus.com/features#intervention" text="Chromium interventions" />)</li>
  <li>crashes (see <Anchor href="https://neugierig.org/software/blog/2023/01/browser-crashes.html" text="this article by Figma" />)</li>
</ul>
<p>The browser decides when to send these reports to the endpoint(s) you configured.<br>
You can host your reporting server or use a security logging service like <Anchor href="https://report-uri.com/" text="Report URI" />.</p>
<div class="grid grid-cols-2 grid-gap-2">
  <div>
    <h2>Reporting API v0</h2>
    <ul>
      <li><code>report-uri</code> directive +</li>
      <li><code>Report-To</code> header +</li>
      <li><code>NEL</code> (Network Error Logging) header</li>
    </ul>
  </div>
  <div>
    <h2>Reporting API v1</h2>
    <ul>
      <li><code>report-to</code> directive +</li>
      <li><code>Reporting-Endpoints</code> header</li>
    </ul>
  </div>
</div>

</Transform>

<!--
- [Monitor your web application with the Reporting API](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api)
- [Reporting API](https://www.w3.org/TR/reporting-1/)
- [Network Error Logging (NEL)](https://web.dev/articles/network-error-logging)

As they say in [this comment](https://github.com/elastic/kibana/issues/149985#issuecomment-1447991700):

- `report-uri` directive is deprecated as it sends a single request per violation, which isn’t scalable.
- `report-to` directive with `Report-To` request header is considered legacy Reporting API and should not be used anymore.
- `report-to directive` with `Reporting-Endpoints` request header is part of latest spec (Reporting API v1).

The browser attempts to deliver queued reports as soon as they're ready (in order to provide timely feedback to the developer) but it can also delay delivery if it's busy processing higher priority work or the user is on a slow and/or congested network at the time.

The browser may also prioritize sending reports about a particular origin first, if the user is a frequent visitor.

The browser make a `POST` with this `Content-Type` header:

```txt
Content-Type: application/reports+json
```

[Figma uses the Reporting API to monitor for crashes](https://neugierig.org/software/blog/2023/01/browser-crashes.html).

[NEL is not supported in the Reporting API v1](https://developer.chrome.com/blog/reporting-api-migration#network_error_logging). If you want to receive NEL reports, you need to use the Reporting API v0 (Report-To header).

Your browser sends reports about policy violations, browser deprecations, crashes, network errors, DNS errors to Report URI.
Report URI keeps these reports for 90 days.

Pricing:

- Free plan: monitor 3 websites; store 10k reports each month.
- Paid plans: from 10 USD to 250 USD per month.
-->
