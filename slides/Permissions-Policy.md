---
# class: pl-15% pr-15%
layout: default
---
<h1>Permissions-Policy (prev. Feature-Policy)</h1>

<Transform scale="0.95">

Permissions Policy allows the developer to control the <span class="color:accent">browser features</span> available to a page, its iframes, and subresources, by declaring a set of policies for the browser to enforce.

Example: Instagram

```txt {all|3|8|all}
Permissions-Policy:
  accelerometer=(self), attribution-reporting=(), autoplay=(),bluetooth=(), camera=(self),
  ch-device-memory=(), ch-downlink=(), ch-ect=(), ch-rtt=(), ch-save-data=(), ch-ua-arch=(), ch-ua-bitness=(),
  clipboard-read=(), clipboard-write=(self), display-capture=(),encrypted-media=(), fullscreen=(self),
  gamepad=(), geolocation=(self), gyroscope=(self), hid=(), idle-detection=(), keyboard-map=(), local-fonts=(),
  magnetometer=(), microphone=(self), midi=(), otp-credentials=(), payment=(), picture-in-picture=(self),
  publickey-credentials-get=(), screen-wake-lock=(), serial=(), usb=(), window-management=(), xr-spatial-tracking=();
  report-to="permissions_policy"
```

Those `ch-*` are directives for [HTTP client hints](https://developer.mozilla.org/en-US/docs/Web/HTTP/Client_hints).

A server sends the `Accept-CH` header to specify the client hints that it is interested in receiving.

```txt
Accept-CH:
  viewport-width,dpr,
  Sec-CH-Prefers-Color-Scheme,Sec-CH-UA-Full-Version-List,Sec-CH-UA-Platform-Version,Sec-CH-UA-Model
```

</Transform>

<!--
- [Permissions Policy Explainer](https://github.com/w3c/webappsec-permissions-policy/blob/main/permissions-policy-explainer.md)
- [Permissions Policy and Client Hints](https://github.com/w3c/webappsec-permissions-policy/blob/main/permissions-policy-client-hints.md)
- [Controlling browser features with Permissions Policy](https://developer.chrome.com/docs/privacy-security/permissions-policy)
- [Permissions-Policy examples](https://w3c.github.io/webappsec-permissions-policy/#examples)
-->