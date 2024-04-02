---
# class: pl-15% pr-15% pt-10%
layout: center
title: "Report URI"
---
<h1>Report URI</h1>

<Transform scale="0.95">

https://report-uri.com/

TODO: add screenshots from Notion (Report URI note, NEL note) and JSON payload of some CSP violations

Example: CSP violation report

```json
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
