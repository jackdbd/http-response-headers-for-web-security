---
class: pl-15% pr-15%
layout: center
title: Can you spot the problem?
---
<h1>Can you spot the problem?</h1>

<Transform scale="1">

```sh
curl --head http://nginx.org
```

```txt {all|1-2}
HTTP/1.1 200 OK
Server: nginx/1.25.3
Date: Wed, 03 Apr 2024 19:40:40 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 6985
Last-Modified: Thu, 28 Mar 2024 08:52:04 GMT
Connection: keep-alive
Keep-Alive: timeout=15
ETag: "66052fb4-1b49"
Accept-Ranges: bytes
```

<v-click>

This web page:

1. is loaded insecurely (there is no redirect to HTTPS)
2. tells us which server was served by

[Why No HTTPS?](https://whynohttps.com/) <img src="/nginx-http.png" class="inline ml-4" />
</v-click>

</Transform>

<!--
It's an HTTP connection, not HTTPS. An attacker could do [eavesdropping](https://en.wikipedia.org/wiki/Network_eavesdropping), perform a man-in-the-middle attack.

Instead of an HTTP 200 (Success) it would have been safer to receive an HTTP 301 (Moved Permanently), which would have redirected us to the HTTPS version of the site.

The first 4 entries in the Mozilla's Web Security Cheat Sheet involve TLS in one way or another:

1. Configure the TLS version and the cipher suite (e.g. pick TLS 1.3 if your web server only needs to support modern browsers).
2. Ensure all resources are served over HTTPS, to avoid mixed content warnings.
3. Redirect all HTTP traffic to HTTPS.
4. Configure HSTS using the Strict-Transport-Security header.

See also: [Security/Server Side TLS](https://wiki.mozilla.org/Security/Server_Side_TLS).
-->
