---
# class: pl-5% pr-5% pt-10%
layout: center
title: Reporting API
---
<h1>Reporting API</h1>

<Transform scale="0.95">

<p>The browser can generate reports when there are:</p>
<ul>
  <li>security violations (configured with <code>*-Policy</code> headers)</li>
  <li>deprecated API calls</li>
  <li>browser interventions</li>
  <li>crashes</li>
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

The browser attempts to deliver queued reports as soon as they're ready (in order to provide timely feedback to the developer) but it can also delay delivery if it's busy processing higher priority work or the user is on a slow and/or congested network at the time.

The browser may also prioritize sending reports about a particular origin first, if the user is a frequent visitor.

The browser make a `POST` with this `Content-Type` header:

```txt
Content-Type: application/reports+json
```

[Figma uses the Reporting API to monitor for crashes](https://neugierig.org/software/blog/2023/01/browser-crashes.html).
-->
