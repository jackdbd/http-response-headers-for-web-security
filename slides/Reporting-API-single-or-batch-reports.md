---
# class: pl-15% pr-15% pt-10%
layout: two-cols
title: "Reporting API: single or batch reports"
---
<h1>1 report</h1>

<Transform scale="0.75">

The browser can generate a single report and send it...

```json {all|13}
{
  "age": 2,
  "body": {
    "blockedURL": "https://site2.example/script.js",
    "disposition": "enforce",
    "documentURL": "https://site.example",
    "effectiveDirective": "script-src-elem",
    "originalPolicy": "script-src 'self'; object-src 'none'; report-to main-endpoint;",
    "referrer": "https://site.example",
    "sample": "",
    "statusCode": 200
  },
  "type": "csp-violation",
  "url": "https://site.example",
  "user_agent": "Mozilla/5.0... Chrome/92.0.4504.0"
}
```

</Transform>

:: right::

<h1>N reports (batch)</h1>

<Transform scale="0.75">

...or send a batch of N reports.

```json {all|12,24}
[
  {
    "age": 420,
    "body": {
      "columnNumber": 12,
      "disposition": "enforce",
      "lineNumber": 11,
      "message": "Document policy violation: document-write is not allowed in this document.",
      "policyId": "document-write",
      "sourceFile": "https://site.example/script.js"
    },
    "type": "document-policy-violation",
    "url": "https://site.example/",
    "user_agent": "Mozilla/5.0... Chrome/92.0.4504.0"
  },
  {
    "age": 510,
    "body": {
      "blockedURL": "https://site.example/img.jpg",
      "destination": "image",
      "disposition": "enforce",
      "type": "corp"
    },
    "type": "coep",
    "url": "https://dummy.example/",
    "user_agent": "Mozilla/5.0... Chrome/92.0.4504.0"
  }
]
```

</Transform>

<!--
Reports may be sent with a delay—about a minute, which is a long time when debugging. Luckily, when debugging in Chrome, you can use the flag `--short-reporting-delay` to receive reports as soon as they're generated. See [here](https://developer.chrome.com/docs/capabilities/web-apis/reporting-api#save_time) for details.

-->