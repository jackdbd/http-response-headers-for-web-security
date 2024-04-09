---
layout: default
title: origin
---
<h1>origin</h1>

<Transform scale="0.95">

1. <span class="color:accent">scheme</span>, i.e. the **protocol** (e.g. `http`, `https`, `ws`, `wss`)
2. <span class="color:accent">host</span>, i.e. the **domain** (e.g. `example.com`)
3. <span class="color:accent">port</span> (e.g. `80`, `8080`, `3000`)

Example: <strong><span>https</span><span>://example.com</span></strong> (80 is the default port for HTTP)

| **URL** | **Same origin?** |
| --- | --- |
| <span class="color:accent">http</span><span>://example.com</span> | ❌ Different protocol |
| <span>https://</span><span class="color:accent">www.</span><span>example.com</span> | ❌ Different host |
| <span>https://</span><span>example.com</span><span class="color:accent">:8080</span> | ❌ Different port |
| <span>https</span><span>://example.com</span><span class="color:accent">/foo</span> | ✅ Same origin |

</Transform>

<!--
I used `origin` lowercase to make it clear we are not talking about the `Origin` header.

origin != site

- [What's the difference between a site and an origin?](https://portswigger.net/web-security/csrf/bypassing-samesite-restrictions)
- [Understanding "same-site" and "same-origin"](https://web.dev/articles/same-site-same-origin)

https://superuser.com/questions/996828/why-was-port-80-chosen-as-the-default-http-port-and-443-as-the-default-https-por

Two objects have the same origin only when the scheme, hostname, and port all match.

Web content's origin is defined by the scheme (protocol), hostname (domain), and port of the URL used to access it. Two objects have the same origin only when the scheme, hostname, and port all match.

If a web resource contains sensitive information, the origin should be properly specified in the Access-Control-Allow-Origin header.

Origins specified in the Access-Control-Allow-Origin header should only be sites that are trusted.

https://portswigger.net/web-security/cors

https://portswigger.net/web-security/cors/access-control-allow-origin

https://www.comparitech.com/blog/information-security/cors-attacks-prevent/#CORS_attack_example

https://book.hacktricks.xyz/pentesting-web/cors-bypass

https://infosecwriteups.com/exploiting-cors-misconfigurations-ffb538698600

https://www.vaadata.com/blog/understanding-and-preventing-cors-misconfiguration/

https://www.freecodecamp.org/news/exploiting-cors-guide-to-pentesting/

The origin null hack
https://www.cynet.com/wp-content/uploads/2016/12/Blog-Post-BugSec-Cynet-Facebook-Originull.pdf
-->
